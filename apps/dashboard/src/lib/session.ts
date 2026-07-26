/**
 * Session token: `userId.exp.hmacHex`, signed with SESSION_SECRET.
 * Web Crypto only — verifiable in both edge middleware and node runtime.
 */

export const SESSION_COOKIE = "craftbyte_session";
const SESSION_DAYS = 30;

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SESSION_SECRET is required in production.");
    }
    return "craftbyte-dev-secret";
  }
  return s;
}

async function hmacHex(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createSessionToken(userId: number): Promise<string> {
  const exp = Date.now() + SESSION_DAYS * 86_400_000;
  const payload = `${userId}.${exp}`;
  return `${payload}.${await hmacHex(payload)}`;
}

/** Returns the userId for a valid, unexpired token; null otherwise. */
export async function verifySessionToken(token: string | undefined): Promise<number | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [userIdRaw, expRaw, sig] = parts;
  const exp = Number(expRaw);
  const userId = Number(userIdRaw);
  if (!Number.isInteger(userId) || !Number.isFinite(exp) || exp < Date.now()) return null;
  const expected = await hmacHex(`${userIdRaw}.${expRaw}`);
  return constantTimeEqual(expected, sig) ? userId : null;
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_DAYS * 86_400,
};
