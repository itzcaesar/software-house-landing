import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb, users, type User } from "@craftbyte/db";
import { SESSION_COOKIE, verifySessionToken } from "./session";

/** Current session user, or null. Cached per-request. */
export const getSessionUser = cache(async (): Promise<User | null> => {
  const store = await cookies();
  const userId = await verifySessionToken(store.get(SESSION_COOKIE)?.value);
  if (userId === null) return null;
  const rows = await getDb().select().from(users).where(eq(users.id, userId));
  return rows[0] ?? null;
});

/** Session user or redirect to /login — use in every protected page/action. */
export async function requireUser(): Promise<User> {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}
