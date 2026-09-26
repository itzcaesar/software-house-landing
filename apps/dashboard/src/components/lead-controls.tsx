"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Trash2 } from "lucide-react";
import { LEAD_STATUSES, type LeadStatus, type User } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { setLeadStatus, setLeadAssignee, deleteLead, setQuotedValue, setLostReason } from "@/app/actions";

const selectClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60 disabled:opacity-60";

export function StatusSelect({ leadId, value }: { leadId: number; value: LeadStatus }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <select
      aria-label="Status"
      value={value}
      disabled={pending}
      onChange={(e) =>
        startTransition(async () => {
          await setLeadStatus(leadId, e.target.value);
          toast.success(`Status → ${STATUS_META[e.target.value as LeadStatus].label}`);
          router.refresh();
        })
      }
      className={selectClass}
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s}>
          {STATUS_META[s].label}
        </option>
      ))}
    </select>
  );
}

export function AssigneeSelect({
  leadId,
  value,
  users,
}: {
  leadId: number;
  value: number | null;
  users: Pick<User, "id" | "name">[];
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <select
      aria-label="Assignee"
      value={value === null ? "" : String(value)}
      disabled={pending}
      onChange={(e) =>
        startTransition(async () => {
          await setLeadAssignee(leadId, e.target.value);
          toast.success("Assignee updated");
          router.refresh();
        })
      }
      className={selectClass}
    >
      <option value="">Unassigned</option>
      {users.map((u) => (
        <option key={u.id} value={String(u.id)}>
          {u.name}
        </option>
      ))}
    </select>
  );
}

export function DeleteLeadButton({ leadId, name }: { leadId: number; name: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (!window.confirm(`Delete the lead from ${name}? This cannot be undone.`)) return;
        startTransition(async () => {
          await deleteLead(leadId);
        });
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-destructive/40 px-3.5 py-2 text-sm font-medium text-red-300 transition-colors hover:bg-destructive/10 disabled:opacity-60"
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : <Trash2 className="size-4" />}
      Delete lead
    </button>
  );
}

const inputClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60";
const saveClass =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand-2 disabled:opacity-60";

/** Actual quoted deal value (USD) — overrides the budget midpoint in pipeline math. */
export function QuoteForm({ leadId, value }: { leadId: number; value: number | null }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          await setQuotedValue(leadId, formData);
          toast.success(formData.get("value") ? "Quote saved" : "Quote cleared");
          router.refresh();
        })
      }
      className="flex gap-2"
    >
      <div className="relative flex-1">
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
          $
        </span>
        <input
          name="value"
          type="number"
          min={0}
          defaultValue={value ?? ""}
          placeholder="e.g. 24000"
          className={`${inputClass} pl-6 tabular-nums`}
        />
      </div>
      <button type="submit" disabled={pending} className={saveClass}>
        {pending ? <Loader2 className="size-4 animate-spin" /> : "Save"}
      </button>
    </form>
  );
}

export const LOST_REASONS = [
  "Budget too low",
  "Went with a competitor",
  "Bad timing",
  "No response",
  "Not a fit",
  "Built in-house",
];

export function LostReasonForm({ leadId, value }: { leadId: number; value: string }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          await setLostReason(leadId, formData);
          toast.success("Lost reason saved");
          router.refresh();
        })
      }
      className="flex gap-2"
    >
      <input
        name="reason"
        list="lost-reasons"
        defaultValue={value}
        maxLength={200}
        placeholder="Why did we lose it?"
        className={inputClass}
      />
      <datalist id="lost-reasons">
        {LOST_REASONS.map((r) => (
          <option key={r} value={r} />
        ))}
      </datalist>
      <button type="submit" disabled={pending} className={saveClass}>
        {pending ? <Loader2 className="size-4 animate-spin" /> : "Save"}
      </button>
    </form>
  );
}
