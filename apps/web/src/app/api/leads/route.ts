import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead } from "@craftbyte/db";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).max(200),
  company: z.string().trim().max(160).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  // Honeypot — humans never see or fill this field.
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot hit: pretend success so bots stop retrying, store nothing.
  const raw = body as Record<string, unknown> | null;
  if (raw && typeof raw.website === "string" && raw.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, company, budget, message } = parsed.data;
  try {
    await createLead({ name, email, company, budget, message });
  } catch (err) {
    console.error("lead insert failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
