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

export async function setNextAction(leadId: number, formData: FormData) {
  const user = await requireUser();
  const note = String(formData.get("note") ?? "").trim();
  const dateRaw = String(formData.get("date") ?? "").trim();
  const nextActionAt = dateRaw ? new Date(`${dateRaw}T09:00:00`).toISOString() : null;
  const db = getDb();
  const now = new Date().toISOString();

  await db
    .update(leads)
    .set({ nextAction: note, nextActionAt, updatedAt: now })
    .where(eq(leads.id, leadId));
  await db.insert(activities).values({
    leadId,
    actorId: user.id,
    type: "next_action",
    detail: nextActionAt
      ? `Follow-up set for ${dateRaw}${note ? `: ${note}` : ""}`
      : "Follow-up cleared",
    createdAt: now,
  });
  revalidatePath("/", "layout");
}

export async function setQuotedValue(leadId: number, formData: FormData) {
  const user = await requireUser();
  const raw = String(formData.get("value") ?? "").trim();
  const value = raw === "" ? null : Math.round(Number(raw));
  if (value !== null && (!Number.isFinite(value) || value < 0)) return;
  const db = getDb();
  const now = new Date().toISOString();

  await db.update(leads).set({ quotedValue: value, updatedAt: now }).where(eq(leads.id, leadId));
  await db.insert(activities).values({
    leadId,
    actorId: user.id,
    type: "quoted",
    detail: value === null ? "Quote cleared" : `Quoted $${value.toLocaleString("en-US")}`,
    createdAt: now,
  });
  revalidatePath("/", "layout");
}

/** Top lead matches for the command palette. */
export async function quickSearchLeads(q: string) {
  await requireUser();
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const all = await getDb().select().from(leads);
  return all
    .filter((l) => `${l.name} ${l.company} ${l.email}`.toLowerCase().includes(query))
    .slice(0, 8)
    .map((l) => ({ id: l.id, name: l.name, company: l.company, status: l.status }));
}

/* ---------- prospect finder (Google Places API — official, no scraping) ---------- */

export type ProspectResult = {
  placeId: string;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  phone: string;
  mapsUrl: string;
};

type PlacesResponse = {
  places?: {
    id: string;
    displayName?: { text?: string };
    formattedAddress?: string;
    rating?: number;
    userRatingCount?: number;
    websiteUri?: string;
    nationalPhoneNumber?: string;
    googleMapsUri?: string;
  }[];
  nextPageToken?: string;
};

export async function searchProspects(input: {
  query: string;
  minRating: number;
  minReviews: number;
  pageToken?: string;
}): Promise<{
  error?: string;
  results?: ProspectResult[];
  nextPageToken?: string;
  scanned?: number;
}> {
  await requireUser();
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) return { error: "missing_key" };
  const query = input.query.trim();
  if (!query) return { error: "Enter a search, e.g. \"coffee shops in South Jakarta\"." };

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.websiteUri,places.nationalPhoneNumber,places.googleMapsUri,nextPageToken",
    },
    body: JSON.stringify({
      textQuery: query,
      pageSize: 20,
      ...(input.pageToken ? { pageToken: input.pageToken } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Places API error:", res.status, detail.slice(0, 500));
    return { error: `Places API error (${res.status}). Check the API key and that "Places API (New)" is enabled.` };
  }

  const data = (await res.json()) as PlacesResponse;
  const places = data.places ?? [];
  const results: ProspectResult[] = places
    .filter(
      (p) =>
        !p.websiteUri &&
        (p.rating ?? 0) >= input.minRating &&
        (p.userRatingCount ?? 0) >= input.minReviews,
    )
    .map((p) => ({
      placeId: p.id,
      name: p.displayName?.text ?? "Unknown",
      address: p.formattedAddress ?? "",
      rating: p.rating ?? 0,
      reviews: p.userRatingCount ?? 0,
      phone: p.nationalPhoneNumber ?? "",
      mapsUrl: p.googleMapsUri ?? "",
    }));

  return { results, nextPageToken: data.nextPageToken, scanned: places.length };
}

export async function addProspectLead(prospect: ProspectResult) {
  const user = await requireUser();
  const db = getDb();

  // Dedupe on the place id we embed in the message.
  const existing = await db.select({ id: leads.id, message: leads.message }).from(leads);
  if (existing.some((l) => l.message.includes(`place:${prospect.placeId}`))) {
    return { error: "Already in your leads." };
  }

  const now = new Date().toISOString();
  const message = [
    `Prospect from Google Maps — ${prospect.rating}★ (${prospect.reviews} reviews), no website listed.`,
    prospect.phone && `Phone: ${prospect.phone}`,
    prospect.address && `Address: ${prospect.address}`,
    prospect.mapsUrl && `Maps: ${prospect.mapsUrl}`,
    `[place:${prospect.placeId}]`,
  ]
    .filter(Boolean)
    .join("\n");

  const [row] = await db
    .insert(leads)
    .values({
      name: prospect.name,
      email: "",
      company: prospect.name,
      budget: "",
      message,
      source: "maps",
      status: "new",
      assigneeId: user.id,
      createdAt: now,
      updatedAt: now,
    })
    .returning({ id: leads.id });
  await db.insert(activities).values({
    leadId: row.id,
    actorId: user.id,
    type: "created",
    detail: `Added from prospect finder by ${user.name}`,
    createdAt: now,
  });
  revalidatePath("/", "layout");
  return { ok: true };
}
