"use server";

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import {
  getDb,
  users,
  leads,
  leadNotes,
  activities,
  hashPassword,
  verifyPassword,
  LEAD_STATUSES,
  type LeadStatus,
} from "@craftbyte/db";
import { requireUser } from "@/lib/auth";
import {
  SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
} from "@/lib/session";

/* ---------- login rate limit (per-IP, in-memory) ----------
 * Serverless caveat: each instance keeps its own counters, so this is a
 * best-effort brake, not a guarantee. Fine for a 2-user internal tool. */
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60_000;

function throttled(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

/* ---------- auth ---------- */

export async function login(_prev: { error: string } | null, formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const ip = ((await headers()).get("x-forwarded-for") ?? "local").split(",")[0];

  if (throttled(ip)) return { error: "Too many attempts. Try again in 10 minutes." };
  if (!email || !password) return { error: "Email and password are required." };

  const rows = await getDb().select().from(users).where(eq(users.email, email));
  const user = rows[0];
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return { error: "Invalid email or password." };
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, await createSessionToken(user.id), sessionCookieOptions);
  redirect("/");
}

export async function logout() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}

export async function updateProfile(_prev: { error?: string; ok?: boolean } | null, formData: FormData) {
  const user = await requireUser();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (name.length < 2) return { error: "Name is too short." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Invalid email." };

  const db = getDb();
  const clash = await db.select({ id: users.id }).from(users).where(eq(users.email, email));
  if (clash.length > 0 && clash[0].id !== user.id) return { error: "Email already in use." };

  await db.update(users).set({ name, email }).where(eq(users.id, user.id));
  revalidatePath("/", "layout");
  return { ok: true };
}

export async function changePassword(_prev: { error?: string; ok?: boolean } | null, formData: FormData) {
  const user = await requireUser();
  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  if (!verifyPassword(current, user.passwordHash)) return { error: "Current password is wrong." };
  if (next.length < 10) return { error: "New password must be at least 10 characters." };

  await getDb().update(users).set({ passwordHash: hashPassword(next) }).where(eq(users.id, user.id));
  return { ok: true };
}

/* ---------- lead mutations (all log an activity row) ---------- */

export async function createManualLead(
  _prev: { error?: string; ok?: boolean } | null,
  formData: FormData,
) {
  const user = await requireUser();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const status = String(formData.get("status") ?? "new");
  const assignToMe = formData.get("assignToMe") === "on";

  if (name.length < 2) return { error: "Name is required (2+ characters)." };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Invalid email." };
  if (!isLeadStatus(status)) return { error: "Invalid status." };

  const db = getDb();
  const now = new Date().toISOString();
  const [row] = await db
    .insert(leads)
    .values({
      name,
      email,
      company,
      budget,
      message,
      source: "manual",
      status,
      assigneeId: assignToMe ? user.id : null,
      createdAt: now,
      updatedAt: now,
    })
    .returning({ id: leads.id });
  await db.insert(activities).values({
    leadId: row.id,
    actorId: user.id,
    type: "created",
    detail: `Added manually by ${user.name}`,
    createdAt: now,
  });
  revalidatePath("/", "layout");
  return { ok: true };
}

function isLeadStatus(v: string): v is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(v);
}

export async function setLeadStatus(leadId: number, status: string) {
  const user = await requireUser();
  if (!isLeadStatus(status)) return;
  const db = getDb();
  const now = new Date().toISOString();
  const rows = await db.select().from(leads).where(eq(leads.id, leadId));
  const lead = rows[0];
  if (!lead || lead.status === status) return;

  await db.update(leads).set({ status, updatedAt: now }).where(eq(leads.id, leadId));
  await db.insert(activities).values({
    leadId,
    actorId: user.id,
    type: "status_changed",
    detail: `${lead.status} → ${status}`,
    createdAt: now,
  });
  revalidatePath("/", "layout");
}

export async function setLeadAssignee(leadId: number, assigneeIdRaw: string) {
  const user = await requireUser();
  const assigneeId = assigneeIdRaw === "" ? null : Number(assigneeIdRaw);
  const db = getDb();
  const now = new Date().toISOString();

  let detail = "Unassigned";
  if (assigneeId !== null) {
    const assignee = (await db.select().from(users).where(eq(users.id, assigneeId)))[0];
    if (!assignee) return;
    detail = `Assigned to ${assignee.name}`;
  }

  await db.update(leads).set({ assigneeId, updatedAt: now }).where(eq(leads.id, leadId));
  await db.insert(activities).values({
    leadId,
    actorId: user.id,
    type: "assigned",
    detail,
    createdAt: now,
  });
  revalidatePath("/", "layout");
}

export async function addLeadNote(leadId: number, formData: FormData) {
  const user = await requireUser();
  const body = String(formData.get("body") ?? "").trim();
  if (!body) return;
  const db = getDb();
  const now = new Date().toISOString();

  await db.insert(leadNotes).values({ leadId, authorId: user.id, body, createdAt: now });
  await db.insert(activities).values({
    leadId,
    actorId: user.id,
    type: "note_added",
    detail: body.length > 80 ? `${body.slice(0, 77)}...` : body,
    createdAt: now,
  });
  revalidatePath(`/leads/${leadId}`);
}

export async function deleteLead(leadId: number) {
  await requireUser();
  await getDb().delete(leads).where(eq(leads.id, leadId));
  revalidatePath("/", "layout");
  redirect("/leads");
}
