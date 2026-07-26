import path from "node:path";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "./src/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ??
      `file:${path.resolve(process.cwd(), "../../dev.db")}`,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});
