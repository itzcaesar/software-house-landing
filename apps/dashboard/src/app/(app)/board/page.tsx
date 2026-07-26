import { desc } from "drizzle-orm";
import { getDb, leads, users } from "@craftbyte/db";
import { Board } from "@/components/board";

export const dynamic = "force-dynamic";

export default async function BoardPage() {
  const db = getDb();
  const [allLeads, allUsers] = await Promise.all([
    db.select().from(leads).orderBy(desc(leads.createdAt)),
    db.select().from(users),
  ]);

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-2xl font-semibold">Board</h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground">
        Drag a card to move it through the pipeline.
      </p>
      <Board
        leads={allLeads}
        users={allUsers.map(({ id, name }) => ({ id, name }))}
      />
    </div>
  );
}
