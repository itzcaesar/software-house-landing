import { getDb } from "./client";
import { activities, leads } from "./schema";
import { notifyNewLead } from "./notify";

export type NewLeadInput = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
};

/** Insert a lead from the landing form + its "created" activity row. */
export async function createLead(input: NewLeadInput): Promise<void> {
  const db = getDb();
  const now = new Date().toISOString();
  const [row] = await db
    .insert(leads)
    .values({
      ...input,
      utmSource: input.utmSource ?? "",
      utmMedium: input.utmMedium ?? "",
      utmCampaign: input.utmCampaign ?? "",
      referrer: input.referrer ?? "",
      source: "landing",
      status: "new",
      createdAt: now,
      updatedAt: now,
    })
    .returning({ id: leads.id });
  await db.insert(activities).values({
    leadId: row.id,
    actorId: null,
    type: "created",
    detail: "Submitted via landing contact form",
    createdAt: now,
  });
  await notifyNewLead({ ...input, id: row.id });
}
