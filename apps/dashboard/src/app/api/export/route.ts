import { desc } from "drizzle-orm";
import { cookies } from "next/headers";
import { getDb, leads } from "@craftbyte/db";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/session";

function csvEscape(value: string): string {
  return /[",\n\r]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

export async function GET() {
  const store = await cookies();
  const userId = await verifySessionToken(store.get(SESSION_COOKIE)?.value);
  if (userId === null) return new Response("Unauthorized", { status: 401 });

  const rows = await getDb().select().from(leads).orderBy(desc(leads.createdAt));
  const header = ["id", "created_at", "name", "email", "company", "budget", "status", "message"];
  const lines = [
    header.join(","),
    ...rows.map((l) =>
      [
        String(l.id),
        l.createdAt,
        l.name,
        l.email,
        l.company,
        l.budget,
        l.status,
        l.message,
      ]
        .map(csvEscape)
        .join(","),
    ),
  ];

  return new Response(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="craftbyte-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
