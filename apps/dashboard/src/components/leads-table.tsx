"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { Loader2, Trash2, X } from "lucide-react";
import { LEAD_STATUSES, type Lead, type User } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { formatDate, initials } from "@/lib/format";
import { bulkUpdateLeads } from "@/app/actions";
import { cn } from "@/lib/utils";

type Member = Pick<User, "id" | "name" | "disabledAt">;

/** Leads table with row selection + a bulk action bar (status / assign / delete). */
export function LeadsTable({ rows, users }: { rows: Lead[]; users: Member[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [pending, startTransition] = useTransition();
  // Drop selections that scrolled off the page (filter / pagination change).
  const ids = rows.filter((r) => selected.has(r.id)).map((r) => r.id);
  const allChecked = rows.length > 0 && ids.length === rows.length;
  const userById = (id: number | null) => users.find((u) => u.id === id);

  const toggle = (id: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const run = (change: Parameters<typeof bulkUpdateLeads>[1], message: string) =>
    startTransition(async () => {
      await bulkUpdateLeads(ids, change);
      toast.success(message);
      setSelected(new Set());
      router.refresh();
    });

  const count = `${ids.length} lead${ids.length === 1 ? "" : "s"}`;
  const barSelect =
    "rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none transition-colors focus:border-brand/60 disabled:opacity-60";

  return (
    <>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground uppercase tracking-wide">
              <th className="w-10 py-3 pl-4">
                <input
                  type="checkbox"
                  aria-label="Select all on this page"
                  checked={allChecked}
                  onChange={() => setSelected(allChecked ? new Set() : new Set(rows.map((r) => r.id)))}
                  className="size-4 accent-[var(--brand)]"
                />
              </th>
              <th className="px-4 py-3 font-medium">Lead</th>
              <th className="px-4 py-3 font-medium">Value</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Assignee</th>
              <th className="px-4 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                  No leads match these filters.
                </td>
              </tr>
            )}
            {rows.map((lead) => {
              const assigned = userById(lead.assigneeId);
              const checked = selected.has(lead.id);
              return (
                <tr
                  key={lead.id}
                  className={cn(
                    "group border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40",
                    checked && "bg-brand/5",
                  )}
                >
                  <td className="py-3 pl-4">
                    <input
                      type="checkbox"
                      aria-label={`Select ${lead.name}`}
                      checked={checked}
                      onChange={() => toggle(lead.id)}
                      className="size-4 accent-[var(--brand)]"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/leads/${lead.id}`} className="block">
                      <span className="font-medium group-hover:text-brand-2">{lead.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {lead.email}
                        {lead.company && `${lead.email ? " · " : ""}${lead.company}`}
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {lead.quotedValue !== null ? (
                      <span className="font-medium text-emerald-300 tabular-nums">
                        ${lead.quotedValue.toLocaleString("en-US")}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">{lead.budget || "—"}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-medium ring-1",
                        STATUS_META[lead.status].chip,
                      )}
                    >
                      {STATUS_META[lead.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {assigned ? (
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden
                          className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-[10px] font-semibold text-white"
                        >
                          {initials(assigned.name)}
                        </span>
                        <span className="hidden text-xs text-muted-foreground xl:inline">
                          {assigned.name.split(" ")[0]}
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(lead.createdAt)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {ids.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-6 z-40 mx-auto flex max-w-2xl flex-wrap items-center gap-2.5 rounded-2xl border border-border bg-card/95 p-3 shadow-elevated backdrop-blur"
          >
            <span className="px-1 text-sm font-medium">
              {pending ? <Loader2 className="inline size-4 animate-spin" /> : count} selected
            </span>
            <select
              aria-label="Set status"
              value=""
              disabled={pending}
              onChange={(e) =>
                run({ status: e.target.value }, `${count} → ${STATUS_META[e.target.value as Lead["status"]].label}`)
              }
              className={barSelect}
            >
              <option value="" disabled>
                Set status…
              </option>
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_META[s].label}
                </option>
              ))}
            </select>
            <select
              aria-label="Assign to"
              value="-"
              disabled={pending}
              onChange={(e) => run({ assignee: e.target.value }, `${count} reassigned`)}
              className={barSelect}
            >
              <option value="-" disabled>
                Assign to…
              </option>
              <option value="">Unassigned</option>
              {users
                .filter((u) => !u.disabledAt)
                .map((u) => (
                  <option key={u.id} value={String(u.id)}>
                    {u.name}
                  </option>
                ))}
            </select>
            <button
              type="button"
              disabled={pending}
              onClick={() => {
                if (!window.confirm(`Delete ${count}? This cannot be undone.`)) return;
                run({ delete: true }, `${count} deleted`);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/40 px-2.5 py-1.5 text-sm font-medium text-red-300 transition-colors hover:bg-destructive/10 disabled:opacity-60"
            >
              <Trash2 className="size-4" />
              Delete
            </button>
            <button
              type="button"
              onClick={() => setSelected(new Set())}
              aria-label="Clear selection"
              className="ml-auto grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
