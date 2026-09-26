"use client";

import { useMemo, useOptimistic, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { toast } from "sonner";
import { CalendarClock, Flame, MessageSquare, Search } from "lucide-react";
import { LEAD_STATUSES, type Lead, type LeadStatus, type User } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { formatUsdCompact, leadValue } from "@/lib/budget";
import { initials, timeAgo } from "@/lib/format";
import { setLeadStatus } from "@/app/actions";
import { cn } from "@/lib/utils";

const STALE_MS = 7 * 86_400_000;
const ACTIVE_STATUSES: LeadStatus[] = ["new", "contacted", "discovery", "proposal"];

type BoardProps = {
  leads: Lead[];
  users: Pick<User, "id" | "name">[];
  noteCounts: Record<number, number>;
};

export function Board({ leads, users, noteCounts }: BoardProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [optimisticLeads, moveOptimistic] = useOptimistic(
    leads,
    (state, { id, status }: { id: number; status: LeadStatus }) =>
      state.map((l) => (l.id === id ? { ...l, status } : l)),
  );
  const [activeId, setActiveId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [assignee, setAssignee] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return optimisticLeads.filter((lead) => {
      if (assignee === "none" && lead.assigneeId !== null) return false;
      if (assignee && assignee !== "none" && lead.assigneeId !== Number(assignee)) return false;
      if (q && !`${lead.name} ${lead.company} ${lead.email}`.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [optimisticLeads, query, assignee]);

  const pipelineValue = visible
    .filter((l) => ACTIVE_STATUSES.includes(l.status))
    .reduce((sum, l) => sum + leadValue(l), 0);

  const onDragStart = (event: DragStartEvent) => setActiveId(Number(event.active.id));

  const onDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    if (!over) return;
    const leadId = Number(active.id);
    const status = String(over.id) as LeadStatus;
    const lead = optimisticLeads.find((l) => l.id === leadId);
    if (!lead || lead.status === status) return;

    startTransition(async () => {
      moveOptimistic({ id: leadId, status });
      await setLeadStatus(leadId, status);
      toast.success(`${lead.name} → ${STATUS_META[status].label}`);
      router.refresh();
    });
  };

  const activeLead = optimisticLeads.find((l) => l.id === activeId) ?? null;

  return (
    <div className="flex h-full flex-col">
      {/* toolbar */}
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        <div className="relative min-w-48 flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter cards…"
            className="w-full rounded-lg border border-input bg-card py-2 pr-3 pl-9 text-sm outline-none transition-colors focus:border-brand/60"
          />
        </div>
        <select
          aria-label="Filter by assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60"
        >
          <option value="">Anyone</option>
          <option value="none">Unassigned</option>
          {users.map((u) => (
            <option key={u.id} value={String(u.id)}>
              {u.name}
            </option>
          ))}
        </select>
        <span className="ml-auto rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground">
          Open pipeline{" "}
          <span className="font-semibold text-brand-2 tabular-nums">
            ~{formatUsdCompact(pipelineValue)}
          </span>
        </span>
      </div>

      {/* columns */}
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="flex min-h-[62vh] flex-1 items-stretch gap-3 overflow-x-auto pb-3">
          {LEAD_STATUSES.map((status) => (
            <Column
              key={status}
              status={status}
              leads={visible.filter((l) => l.status === status)}
              users={users}
              noteCounts={noteCounts}
            />
          ))}
        </div>
        <DragOverlay>
          {activeLead ? (
            <Card lead={activeLead} users={users} noteCounts={noteCounts} overlay />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

function Column({
  status,
  leads,
  users,
  noteCounts,
}: {
  status: LeadStatus;
  leads: Lead[];
  users: Pick<User, "id" | "name">[];
  noteCounts: Record<number, number>;
}) {
  const { isOver, setNodeRef } = useDroppable({ id: status });
  const meta = STATUS_META[status];
  const value = leads.reduce((sum, l) => sum + leadValue(l), 0);

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "relative flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border bg-card/50 transition-colors",
        isOver ? "border-brand/50 bg-brand/5" : "border-border",
      )}
    >
      {/* status accent bar */}
      <span aria-hidden className={cn("absolute inset-x-0 top-0 h-0.5", meta.dot)} />

      <div className="flex items-center gap-2 px-3.5 pt-3.5 pb-2.5">
        <span className={cn("size-2 rounded-full", meta.dot)} aria-hidden />
        <span className="text-sm font-medium">{meta.label}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground tabular-nums">
          {leads.length}
        </span>
        {value > 0 && (
          <span className="ml-auto text-xs text-muted-foreground tabular-nums">
            ~{formatUsdCompact(value)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-2.5 pb-2.5">
        {leads.map((lead) => (
          <DraggableCard key={lead.id} lead={lead} users={users} noteCounts={noteCounts} />
        ))}
        {leads.length === 0 && (
          <div
            className={cn(
              "grid flex-1 place-items-center rounded-xl border border-dashed py-8 text-xs transition-colors",
              isOver
                ? "border-brand/50 text-brand-2"
                : "border-border/60 text-muted-foreground/50",
            )}
          >
            {isOver ? "Release to move" : "No leads"}
          </div>
        )}
      </div>
    </div>
  );
}

function DraggableCard({
  lead,
  users,
  noteCounts,
}: {
  lead: Lead;
  users: Pick<User, "id" | "name">[];
  noteCounts: Record<number, number>;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: lead.id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={cn("cursor-grab active:cursor-grabbing", isDragging && "opacity-40")}
    >
      <Card lead={lead} users={users} noteCounts={noteCounts} />
    </div>
  );
}

function Card({
  lead,
  users,
  noteCounts,
  overlay = false,
}: {
  lead: Lead;
  users: Pick<User, "id" | "name">[];
  noteCounts: Record<number, number>;
  overlay?: boolean;
}) {
  const assignee = users.find((u) => u.id === lead.assigneeId);
  const notes = noteCounts[lead.id] ?? 0;
  // Board data refreshes on every mutation — render-time "now" is fine here.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();
  const stale =
    ACTIVE_STATUSES.includes(lead.status) &&
    now - new Date(lead.updatedAt).getTime() > STALE_MS;
  const followUpDue = lead.nextActionAt !== null && new Date(lead.nextActionAt).getTime() <= now;

  return (
    <div
      className={cn(
        "group rounded-xl border border-border bg-card p-3.5 shadow-soft transition-all",
        overlay
          ? "rotate-2 border-brand/40 shadow-elevated"
          : "hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevated",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <Link
          href={`/leads/${lead.id}`}
          className="min-w-0 truncate text-sm font-medium hover:text-brand-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {lead.name}
        </Link>
        {assignee ? (
          <span
            aria-hidden
            title={assignee.name}
            className="grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-[9px] font-semibold text-white"
          >
            {initials(assignee.name)}
          </span>
        ) : (
          <span
            aria-hidden
            title="Unassigned"
            className="size-5 shrink-0 rounded-full border border-dashed border-border"
          />
        )}
      </div>

      {(lead.company || lead.email) && (
        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {lead.company || lead.email}
        </p>
      )}

      {lead.message && (
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground/80">
          {lead.message}
        </p>
      )}

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px]">
        {lead.quotedValue !== null ? (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-300 ring-1 ring-emerald-500/20">
            {formatUsdCompact(lead.quotedValue)} quoted
          </span>
        ) : (
          lead.budget && (
            <span className="rounded-full bg-brand/10 px-2 py-0.5 font-medium text-brand-2 ring-1 ring-brand/20">
              {lead.budget}
            </span>
          )
        )}
        {notes > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-muted-foreground">
            <MessageSquare className="size-3" />
            {notes}
          </span>
        )}
        {followUpDue && (
          <span
            title={lead.nextAction || "Follow-up due"}
            className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 font-medium text-red-300 ring-1 ring-red-500/25"
          >
            <CalendarClock className="size-3" />
            due
          </span>
        )}
        {stale && !followUpDue && (
          <span
            title="No movement in 7+ days"
            className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 font-medium text-amber-300 ring-1 ring-amber-500/25"
          >
            <Flame className="size-3" />
            stale
          </span>
        )}
        <span className="ml-auto text-muted-foreground/60">{timeAgo(lead.createdAt)}</span>
      </div>
    </div>
  );
}
