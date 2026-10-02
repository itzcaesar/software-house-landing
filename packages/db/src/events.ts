import { getDb } from "./client";
import { events, type EventName } from "./schema";

export type NewEventInput = {
  name: EventName;
  path: string;
  label: string;
  session: string;
  referrer: string;
  utmSource: string;
};

export async function recordEvent(input: NewEventInput): Promise<void> {
  await getDb().insert(events).values({ ...input, createdAt: new Date().toISOString() });
}
