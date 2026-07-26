"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Trash2 } from "lucide-react";
import { LEAD_STATUSES, type LeadStatus, type User } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { setLeadStatus, setLeadAssignee, deleteLead } from "@/app/actions";

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
