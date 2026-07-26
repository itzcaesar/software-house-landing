/**
 * New-lead notification seam. Intentionally a no-op for v1.
 * TODO: wire Resend here (email both founders) — add RESEND_API_KEY env,
 * `resend.emails.send(...)`, and nothing else in the codebase changes.
 */
export async function notifyNewLead(_lead: {
  id: number;
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}): Promise<void> {
  // no-op
}
