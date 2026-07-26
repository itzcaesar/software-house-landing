import { createClient, type Client } from "@libsql/client";

/**
 * Lead storage. Dev uses a local SQLite file; production points DATABASE_URL
 * at a Turso/libSQL instance (plus DATABASE_AUTH_TOKEN) — same client, no
 * code change.
 */

export type LeadStatus = "new" | "replied" | "won" | "lost";

export type Lead = {
  id: number;
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
};

let client: Client | null = null;
let ready: Promise<void> | null = null;

function getClient(): Client {
  if (!client) {
    client = createClient({
      url: process.env.DATABASE_URL ?? "file:./dev.db",
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
  }
  return client;
}

async function ensureSchema(): Promise<void> {
  if (!ready) {
    ready = getClient()
      .execute(
        `CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT NOT NULL DEFAULT '',
          budget TEXT NOT NULL DEFAULT '',
          message TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'new',
          created_at TEXT NOT NULL
        )`,
      )
      .then(() => undefined);
  }
  return ready;
}

function rowToLead(row: Record<string, unknown>): Lead {
  return {
    id: Number(row.id),
    name: String(row.name),
    email: String(row.email),
    company: String(row.company ?? ""),
    budget: String(row.budget ?? ""),
    message: String(row.message),
    status: (row.status as LeadStatus) ?? "new",
    createdAt: String(row.created_at),
  };
}

export async function insertLead(lead: {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}): Promise<void> {
  await ensureSchema();
  await getClient().execute({
    sql: `INSERT INTO leads (name, email, company, budget, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, 'new', ?)`,
    args: [
      lead.name,
      lead.email,
      lead.company,
      lead.budget,
      lead.message,
      new Date().toISOString(),
    ],
  });
}

export async function listLeads(): Promise<Lead[]> {
  await ensureSchema();
  const res = await getClient().execute(
    "SELECT * FROM leads ORDER BY created_at DESC",
  );
  return res.rows.map((r) => rowToLead(r as unknown as Record<string, unknown>));
}

export async function updateLeadStatus(id: number, status: LeadStatus): Promise<void> {
  await ensureSchema();
  await getClient().execute({
    sql: "UPDATE leads SET status = ? WHERE id = ?",
    args: [status, id],
  });
}

export async function deleteLead(id: number): Promise<void> {
  await ensureSchema();
  await getClient().execute({ sql: "DELETE FROM leads WHERE id = ?", args: [id] });
}
