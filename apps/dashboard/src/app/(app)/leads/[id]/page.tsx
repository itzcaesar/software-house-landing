import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq } from "drizzle-orm";
import {
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  Mail,
  Reply,
  Wallet,
} from "lucide-react";
import { getDb, leads, leadNotes, activities, users } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { formatDateTime, initials, timeAgo } from "@/lib/format";
import {
  StatusSelect,
  AssigneeSelect,
  DeleteLeadButton,
  QuoteForm,
  LostReasonForm,
} from "@/components/lead-controls";
import { EditLeadButton } from "@/components/add-lead";
import { budgetValue, formatUsdCompact } from "@/lib/budget";
import { NoteForm } from "@/components/note-form";
import { FollowUpForm } from "@/components/follow-up-form";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId)) notFound();

  const db = getDb();
  const [leadRows, notes, timeline, allUsers] = await Promise.all([
    db.select().from(leads).where(eq(leads.id, leadId)),
    db.select().from(leadNotes).where(eq(leadNotes.leadId, leadId)).orderBy(asc(leadNotes.createdAt)),
    db.select().from(activities).where(eq(activities.leadId, leadId)).orderBy(asc(activities.createdAt)),
    db.select().from(users),
  ]);
  const lead = leadRows[0];
  if (!lead) notFound();

  const userName = (uid: number | null) => allUsers.find((u) => u.id === uid)?.name ?? "System";

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href="/leads"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand-2"
      >
        <ArrowLeft className="size-4" />
        All leads
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{lead.name}</h1>
          <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="size-3.5" />
              {lead.email}
            </span>
            {lead.company && (
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="size-3.5" />
                {lead.company}
              </span>
            )}
            {lead.budget && (
              <span className="inline-flex items-center gap-1.5">
                <Wallet className="size-3.5" />
                {lead.budget}
              </span>
            )}
            {lead.quotedValue !== null && (
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
                <BadgeDollarSign className="size-3.5" />
                Quoted ${lead.quotedValue.toLocaleString("en-US")}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <EditLeadButton lead={lead} />
          <span
            className={cn(
              "rounded-full px-3 py-1 text-sm font-medium ring-1",
              STATUS_META[lead.status].chip,
            )}
          >
            {STATUS_META[lead.status].label}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        {/* left: message, notes, timeline */}
        <div className="flex flex-col gap-4">
          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Message · {formatDateTime(lead.createdAt)}
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{lead.message}</p>
            <a
              href={`mailto:${lead.email}?subject=${encodeURIComponent("Re: your project inquiry — Callum C")}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-3.5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              <Reply className="size-4" />
              Reply by email
            </a>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Notes ({notes.length})
            </p>
            <div className="flex flex-col gap-3">
              {notes.map((note) => (
                <div key={note.id} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-[10px] font-semibold text-white"
                  >
                    {initials(userName(note.authorId))}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl bg-secondary/50 px-3.5 py-2.5">
                    <p className="text-sm whitespace-pre-wrap">{note.body}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {userName(note.authorId)} · {timeAgo(note.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
              <NoteForm leadId={lead.id} />
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Activity
            </p>
            <ol className="relative flex flex-col gap-3 border-l border-border pl-5">
              {timeline.map((entry) => (
                <li key={entry.id} className="relative text-sm">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[23px] size-2 rounded-full bg-brand"
                  />
                  <span>{entry.detail || entry.type}</span>
                  <span className="block text-xs text-muted-foreground">
                    {userName(entry.actorId)} · {formatDateTime(entry.createdAt)}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* right: controls */}
        <div className="flex h-fit flex-col gap-4 lg:sticky lg:top-6">
          <section className="rounded-2xl border border-border bg-card p-5">
            <label className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Status
            </label>
            <StatusSelect leadId={lead.id} value={lead.status} />
            {lead.status === "lost" && (
              <>
                <label className="mt-4 mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Lost reason
                </label>
                <LostReasonForm key={lead.lostReason} leadId={lead.id} value={lead.lostReason} />
              </>
            )}
            <label className="mt-4 mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Assignee
            </label>
            <AssigneeSelect
              leadId={lead.id}
              value={lead.assigneeId}
              users={allUsers.filter((u) => !u.disabledAt).map(({ id: uid, name }) => ({ id: uid, name }))}
            />
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 flex items-baseline justify-between text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Deal value
              {lead.quotedValue === null && budgetValue(lead.budget) > 0 && (
                <span className="normal-case tracking-normal">
                  est. ~{formatUsdCompact(budgetValue(lead.budget))} from budget
                </span>
              )}
            </p>
            <QuoteForm key={lead.quotedValue} leadId={lead.id} value={lead.quotedValue} />
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Follow-up
            </p>
            <FollowUpForm leadId={lead.id} date={lead.nextActionAt} note={lead.nextAction} />
          </section>

          <section className="rounded-2xl border border-border bg-card p-5 text-sm">
            <p className="mb-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Source
            </p>
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium capitalize">
              {lead.source}
            </span>
            <dl className="mt-3 space-y-1.5 text-xs">
              {[
                ["utm_source", lead.utmSource],
                ["utm_medium", lead.utmMedium],
                ["utm_campaign", lead.utmCampaign],
                ["referrer", lead.referrer],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="truncate font-mono">{v}</dd>
                  </div>
                ))}
              {!lead.utmSource && !lead.utmMedium && !lead.utmCampaign && !lead.referrer && (
                <p className="text-muted-foreground">Direct visit — no attribution captured.</p>
              )}
            </dl>
          </section>

          <DeleteLeadButton leadId={lead.id} name={lead.name} />
        </div>
      </div>
    </div>
  );
}
