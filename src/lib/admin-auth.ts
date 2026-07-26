import { createHmac, timingSafeEqual } from "crypto";

/**
 * Single-admin session: the cookie holds an HMAC derived from the admin
 * password. Rotating ADMIN_PASSWORD (or SESSION_SECRET) invalidates all
 * sessions. Internal tool — deliberately simple.
 */

export const ADMIN_COOKIE = "craftbyte_admin";

function secret(): string {
  return process.env.SESSION_SECRET ?? process.env.ADMIN_PASSWORD ?? "craftbyte-dev-only";
}

export function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "craftbyte-admin";
}

export function sessionToken(): string {
  return createHmac("sha256", secret()).update("craftbyte-admin-session-v1").digest("hex");
}

export function isValidSession(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const expected = Buffer.from(sessionToken());
  const actual = Buffer.from(cookieValue);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
