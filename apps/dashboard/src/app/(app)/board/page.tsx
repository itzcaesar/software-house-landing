import { desc } from "drizzle-orm";
import { getDb, leads, leadNotes, users } from "@craftbyte/db";
import { Board } from "@/components/board";
import { AddLeadButton } from "@/components/add-lead";

export const dynamic = "force-dynamic";

export default async function BoardPage() {
  const db = getDb();
  const [allLeads, allUsers, noteRows] = await Promise.all([
    db.select().from(leads).orderBy(desc(leads.createdAt)),
    db.select().from(users),
    db.select({ leadId: leadNotes.leadId }).from(leadNotes),
  ]);

  const noteCounts: Record<number, number> = {};
  for (const row of noteRows) noteCounts[row.leadId] = (noteCounts[row.leadId] ?? 0) + 1;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Board</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Drag a card to move it through the pipeline.
          </p>
        </div>
        <AddLeadButton />
      </div>
      <Board
        leads={allLeads}
        users={allUsers.map(({ id, name }) => ({ id, name }))}
        noteCounts={noteCounts}
      />
    </div>
  );
}
