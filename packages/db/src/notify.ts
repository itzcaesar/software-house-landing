import { isNull } from "drizzle-orm";
import { getDb } from "./client";
import { users } from "./schema";

/**
 * New-lead email to every active team member, via Resend's REST API.
 *
 * Env: RESEND_API_KEY (unset = skip silently, e.g. local dev),
 *      NOTIFY_FROM (a sender on your Resend-verified domain),
 *      DASHBOARD_URL (for the "Open in dashboard" link).
 *
 * Never throws — the lead is already saved; a failed email must not turn a
 * successful form submission into an error. Failures are logged.
 */

export type NotifyLead = {
  id: number;
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Visitor input in a subject line: no line breaks, bounded length. */
const oneLine = (s: string, max: number) => s.replace(/[\r\n]+/g, " ").trim().slice(0, max);

export async function notifyNewLead(lead: NotifyLead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  try {
    const recipients = (
      await getDb().select({ email: users.email }).from(users).where(isNull(users.disabledAt))
    ).map((u) => u.email);
    if (recipients.length === 0) return;

    const dashboard = (process.env.DASHBOARD_URL ?? "http://localhost:3001").replace(/\/$/, "");
    const link = `${dashboard}/leads/${lead.id}`;
    const source =
      [lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(" / ") ||
      lead.referrer ||
      "Direct";
    const rows: [string, string][] = [
      ["Name", lead.name],
      ["Email", lead.email],
      ["Company", lead.company || "—"],
      ["Budget", lead.budget || "—"],
      ["Source", source],
    ];

    const subject = oneLine(
      `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""}${lead.budget ? ` · ${lead.budget}` : ""}`,
      150,
    );
    const html = `<div style="font-family:system-ui,sans-serif;font-size:14px;color:#111;max-width:560px">
<h2 style="margin:0 0 16px">New lead from the website</h2>
<table style="border-collapse:collapse;margin-bottom:16px">${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
      )
      .join("")}</table>
<p style="white-space:pre-wrap;background:#f5f5f7;border-radius:8px;padding:12px;margin:0 0 20px">${escapeHtml(lead.message)}</p>
<a href="${escapeHtml(link)}" style="display:inline-block;background:#2f6bff;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:600">Open in dashboard</a>
<p style="color:#888;font-size:12px;margin-top:20px">Reply to this email to answer ${escapeHtml(lead.name)} directly.</p>
</div>`;
    const text = [
      "New lead from the website",
      "",
      ...rows.map(([k, v]) => `${k}: ${v}`),
      "",
      lead.message,
      "",
      `Open in dashboard: ${link}`,
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // Resend dedupes retries with the same key for 24h.
        "Idempotency-Key": `new-lead-${lead.id}`,
      },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM ?? "Callum C Leads <leads@callumc.id>",
        to: recipients,
        reply_to: lead.email,
        subject,
        html,
        text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("new-lead email failed:", res.status, (await res.text()).slice(0, 300));
    }
  } catch (err) {
    console.error("new-lead email failed:", err);
  }
}
