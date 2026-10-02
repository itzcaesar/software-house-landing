import { z } from "zod";
import { EVENT_NAMES, recordEvent } from "@craftbyte/db";

const eventSchema = z.object({
  name: z.enum(EVENT_NAMES),
  path: z.string().trim().max(200).default(""),
  label: z.string().trim().max(120).default(""),
  session: z.string().trim().max(40).default(""),
  referrer: z.string().trim().max(200).default(""),
  utmSource: z.string().trim().max(120).default(""),
});

// Crawlers and audit tools would inflate pageviews.
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|preview/i;

// ponytail: no rate limit — fake events only skew our own stats; add per-IP throttling if spam shows up.
export async function POST(request: Request) {
  if (BOT_RE.test(request.headers.get("user-agent") ?? "")) return new Response(null, { status: 204 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }
  const parsed = eventSchema.safeParse(body);
  if (!parsed.success) return new Response(null, { status: 400 });

  try {
    await recordEvent(parsed.data);
  } catch (err) {
    console.error("event insert failed:", err);
  }
  // Analytics must never break the page: always acknowledge.
  return new Response(null, { status: 204 });
}
