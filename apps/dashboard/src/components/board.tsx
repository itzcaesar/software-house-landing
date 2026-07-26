"use client";

import { useOptimistic, useTransition } from "react";
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
import { useState } from "react";
import { toast } from "sonner";
import { GripVertical } from "lucide-react";
import { LEAD_STATUSES, type Lead, type LeadStatus, type User } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { initials, timeAgo } from "@/lib/format";
import { setLeadStatus } from "@/app/actions";
import { cn } from "@/lib/utils";

type BoardProps = {
  leads: Lead[];
  users: Pick<User, "id" | "name">[];
};

export function Board({ leads, users }: BoardProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [optimisticLeads, moveOptimistic] = useOptimistic(
    leads,
    (state, { id, status }: { id: number; status: LeadStatus }) =>
      state.map((l) => (l.id === id ? { ...l, status } : l)),
  );
  const [activeId, setActiveId] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(Number(event.active.id));
  };

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
    <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {LEAD_STATUSES.map((status) => (
          <Column
            key={status}
            status={status}
            leads={optimisticLeads.filter((l) => l.status === status)}
            users={users}
          />
        ))}
      </div>
      <DragOverlay>
        {activeLead ? <Card lead={activeLead} users={users} overlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

function Column({
  status,
  leads,
  users,
}: {
  status: LeadStatus;
  leads: Lead[];
  users: Pick<User, "id" | "name">[];
}) {
  const { isOver, setNodeRef } = useDroppable({ id: status });
  const meta = STATUS_META[status];

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex w-64 shrink-0 flex-col rounded-2xl border bg-card/60 transition-colors",
        isOver ? "border-brand/50 bg-brand/5" : "border-border",
      )}
    >
      <div className="flex items-center gap-2 px-3.5 py-3">
        <span className={cn("size-2 rounded-full", meta.dot)} aria-hidden />
        <span className="text-sm font-medium">{meta.label}</span>
        <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground tabular-nums">
          {leads.length}
        </span>
      </div>
      <div className="flex min-h-24 flex-1 flex-col gap-2 px-2.5 pb-2.5">
        {leads.map((lead) => (
          <DraggableCard key={lead.id} lead={lead} users={users} />
        ))}
        {leads.length === 0 && (
          <div className="grid flex-1 place-items-center rounded-xl border border-dashed border-border/60 py-6 text-xs text-muted-foreground/60">
            Drop here
          </div>
        )}
      </div>
    </div>
  );
}

function DraggableCard({ lead, users }: { lead: Lead; users: Pick<User, "id" | "name">[] }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: lead.id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} className={cn(isDragging && "opacity-40")}>
      <Card lead={lead} users={users} />
    </div>
  );
}

function Card({
  lead,
  users,
  overlay = false,
}: {
  lead: Lead;
  users: Pick<User, "id" | "name">[];
  overlay?: boolean;
}) {
  const assignee = users.find((u) => u.id === lead.assigneeId);
  return (
    <div
      className={cn(
        "group rounded-xl border border-border bg-card p-3 shadow-soft transition-colors",
        overlay ? "rotate-2 border-brand/40 shadow-elevated" : "hover:border-brand/30",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <Link
          href={`/leads/${lead.id}`}
          className="min-w-0 text-sm font-medium hover:text-brand-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {lead.name}
        </Link>
        <GripVertical className="size-3.5 shrink-0 text-muted-foreground/50" aria-hidden />
      </div>
      {lead.company && (
        <p className="mt-0.5 truncate text-xs text-muted-foreground">{lead.company}</p>
      )}
      <div className="mt-2.5 flex items-center justify-between gap-2">
        <span className="truncate text-xs text-muted-foreground">
          {lead.budget || "No budget"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground/70">{timeAgo(lead.createdAt)}</span>
          {assignee && (
            <span
              aria-hidden
              title={assignee.name}
              className="grid size-5 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-[9px] font-semibold text-white"
            >
              {initials(assignee.name)}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
