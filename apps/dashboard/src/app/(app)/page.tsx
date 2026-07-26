import Link from "next/link";
import { desc } from "drizzle-orm";
import {
  ArrowUpRight,
  CalendarClock,
  Inbox,
  Sparkles,
  Trophy,
  Loader,
} from "lucide-react";
import { getDb, leads, activities, users, type Lead } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { timeAgo } from "@/lib/format";
import { LeadsOverTime, StatusBreakdown } from "@/components/charts";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function OverviewPage() {
  const db = getDb();
  const [allLeads, recentActivity, allUsers] = await Promise.all([
    db.select().from(leads).orderBy(desc(leads.createdAt)),
    db.select().from(activities).orderBy(desc(activities.createdAt)).limit(8),
    db.select().from(users),
  ]);

  // Server component rendered per-request (force-dynamic) — "now" is request time.
  // eslint-disable-next-line react-hooks/purity
  const weekAgo = Date.now() - 7 * 86_400_000;
  const newThisWeek = allLeads.filter((l) => new Date(l.createdAt).getTime() > weekAgo).length;
  const inProgress = allLeads.filter((l) =>
    ["contacted", "discovery", "proposal"].includes(l.status),
  ).length;
  const won = allLeads.filter((l) => l.status === "won").length;
  const closed = won + allLeads.filter((l) => l.status === "lost").length;
  const winRate = closed > 0 ? Math.round((won / closed) * 100) : null;
  const userName = (id: number | null) => allUsers.find((u) => u.id === id)?.name ?? "System";

  const kpis = [
    { label: "Total leads", value: String(allLeads.length), icon: Inbox },
    { label: "New this week", value: String(newThisWeek), icon: Sparkles },
    { label: "In progress", value: String(inProgress), icon: Loader },
    { label: "Win rate", value: winRate === null ? "—" : `${winRate}%`, icon: Trophy },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        The pipeline at a glance.
      </p>

      {/* KPIs */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{label}</span>
              <Icon className="size-4 text-brand" />
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">{value}</p>
          </div>
        ))}
      </div>

      {/* charts */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">Leads — last 30 days</p>
          </div>
          <LeadsOverTime leads={allLeads} />
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="mb-4 text-sm font-medium">Pipeline breakdown</p>
          <StatusBreakdown leads={allLeads} />
        </div>
      </div>

      {/* follow-ups (weekAgo + 7d reconstructs request-time "now" without a second impure call) */}
      <FollowUps
        scheduled={allLeads.filter((l) => l.nextActionAt !== null)}
        now={weekAgo + 7 * 86_400_000}
      />

      {/* latest + activity */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium">Latest leads</p>
            <Link
              href="/leads"
              className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
            >
              View all
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          {allLeads.length === 0 ? (
            <EmptyHint text="No leads yet — they'll appear the moment someone submits the contact form." />
          ) : (
            <ul className="divide-y divide-border">
              {allLeads.slice(0, 5).map((lead) => (
                <li key={lead.id}>
                  <Link
                    href={`/leads/${lead.id}`}
                    className="flex items-center justify-between gap-3 py-2.5 transition-colors hover:bg-secondary/40"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium">
                        {lead.name}
                        {lead.company && (
                          <span className="text-muted-foreground"> · {lead.company}</span>
                        )}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {lead.message}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1",
                        STATUS_META[lead.status].chip,
                      )}
                    >
                      {STATUS_META[lead.status].label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="mb-3 text-sm font-medium">Recent activity</p>
          {recentActivity.length === 0 ? (
            <EmptyHint text="Activity will show up here — status changes, notes, assignments." />
          ) : (
            <ul className="flex flex-col gap-3">
              {recentActivity.map((entry) => (
                <li key={entry.id} className="flex items-start gap-3 text-sm">
                  <span className="relative mt-1.5 flex size-2 shrink-0">
                    <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand" />
                    <span className="relative inline-flex size-2 rounded-full bg-brand" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate">
                      <Link href={`/leads/${entry.leadId}`} className="hover:text-brand-2">
                        {entry.detail || entry.type}
                      </Link>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {userName(entry.actorId)} · {timeAgo(entry.createdAt)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function FollowUps({ scheduled, now }: { scheduled: Lead[]; now: number }) {
  if (scheduled.length === 0) return null;
  const sorted = [...scheduled].sort(
    (a, b) => new Date(a.nextActionAt!).getTime() - new Date(b.nextActionAt!).getTime(),
  );

  return (
    <div className="mt-4 rounded-2xl border border-border bg-card p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-medium">
        <CalendarClock className="size-4 text-brand" />
        Follow-ups
      </p>
      <ul className="flex flex-col gap-2">
        {sorted.slice(0, 6).map((lead) => {
          const due = new Date(lead.nextActionAt!).getTime() <= now;
          return (
            <li key={lead.id}>
              <Link
                href={`/leads/${lead.id}`}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-border/60 px-3.5 py-2.5 text-sm transition-colors hover:border-brand/30 hover:bg-secondary/30"
              >
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium ring-1",
                    due
                      ? "bg-red-500/15 text-red-300 ring-red-500/25"
                      : "bg-secondary text-muted-foreground ring-border",
                  )}
                >
                  {due ? "overdue" : new Date(lead.nextActionAt!).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </span>
                <span className="font-medium">{lead.name}</span>
                {lead.nextAction && (
                  <span className="min-w-0 flex-1 truncate text-muted-foreground">
                    {lead.nextAction}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EmptyHint({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
      {text}
    </p>
  );
}
