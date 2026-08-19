import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "discovery",
  "proposal",
  "won",
  "lost",
] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const ACTIVITY_TYPES = [
  "created",
  "status_changed",
  "assigned",
  "note_added",
  "next_action",
  "quoted",
] as const;
export type ActivityType = (typeof ACTIVITY_TYPES)[number];

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: text("created_at").notNull(),
});

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull().default(""),
  budget: text("budget").notNull().default(""),
  message: text("message").notNull(),
  source: text("source").notNull().default("landing"),
  status: text("status", { enum: LEAD_STATUSES }).notNull().default("new"),
  assigneeId: integer("assignee_id").references(() => users.id),
  // Attribution — captured on the landing site at first visit.
  utmSource: text("utm_source").notNull().default(""),
  utmMedium: text("utm_medium").notNull().default(""),
  utmCampaign: text("utm_campaign").notNull().default(""),
  referrer: text("referrer").notNull().default(""),
  // Follow-up reminder.
  nextAction: text("next_action").notNull().default(""),
  nextActionAt: text("next_action_at"),
  // Actual quoted deal value in USD (null until quoted) — overrides the
  // budget-range midpoint in pipeline math.
  quotedValue: integer("quoted_value"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const leadNotes = sqliteTable("lead_notes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  leadId: integer("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
  body: text("body").notNull(),
  createdAt: text("created_at").notNull(),
});

export const activities = sqliteTable("activities", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  leadId: integer("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  actorId: integer("actor_id").references(() => users.id),
  type: text("type", { enum: ACTIVITY_TYPES }).notNull(),
  detail: text("detail").notNull().default(""),
  createdAt: text("created_at").notNull(),
});

export type User = typeof users.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type LeadNote = typeof leadNotes.$inferSelect;
export type Activity = typeof activities.$inferSelect;
