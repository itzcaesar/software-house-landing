import path from "node:path";
import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "./schema";

/**
 * Shared database handle. Dev default: a single `dev.db` at the monorepo root
 * (both apps run from `apps/<name>`, hence the ../../). Production requires
 * DATABASE_URL (+ DATABASE_AUTH_TOKEN for Turso) — same client either way.
 */

export type Db = LibSQLDatabase<typeof schema>;

const globalStore = globalThis as unknown as { __craftbyteDb?: Db; __craftbyteClient?: Client };

function resolveUrl(): string {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL is required in production (Turso libsql:// URL).");
  }
  return `file:${path.resolve(process.cwd(), "../../dev.db")}`;
}

export function getDb(): Db {
  if (!globalStore.__craftbyteDb) {
    globalStore.__craftbyteClient = createClient({
      url: resolveUrl(),
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
    globalStore.__craftbyteDb = drizzle(globalStore.__craftbyteClient, { schema });
  }
  return globalStore.__craftbyteDb;
}
