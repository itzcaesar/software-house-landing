import type { Lead } from "@callumc/db";
import { STATUS_META } from "@/lib/status";
import { LEAD_STATUSES } from "@callumc/db";
import { cn } from "@/lib/utils";

/** Bar chart of leads per day over the last `days` days. Pure SVG/CSS. */
export function LeadsOverTime({ leads, days = 30 }: { leads: Lead[]; days?: number }) {
  const now = new Date();
  const counts: number[] = Array.from({ length: days }, () => 0);
  for (const lead of leads) {
    const diff = Math.floor((now.getTime() - new Date(lead.createdAt).getTime()) / 86_400_000);
    if (diff >= 0 && diff < days) counts[days - 1 - diff] += 1;
  }
  const max = Math.max(1, ...counts);

  return (
    <div className="flex h-32 items-end gap-1" aria-hidden>
      {counts.map((count, i) => (
        <div
          key={i}
          title={`${count} lead${count === 1 ? "" : "s"}`}
          className="flex-1 rounded-sm bg-secondary/80 transition-colors hover:bg-secondary"
        >
          <div
            className="w-full rounded-sm bg-gradient-to-t from-brand/70 to-brand-2"
            style={{ height: `${(count / max) * 100}%`, minHeight: count > 0 ? 4 : 0 }}
          />
        </div>
      ))}
    </div>
  );
}

/** Horizontal status distribution bars. */
export function StatusBreakdown({ leads }: { leads: Lead[] }) {
  const total = Math.max(1, leads.length);
  return (
    <div className="flex flex-col gap-2.5">
      {LEAD_STATUSES.map((status) => {
        const count = leads.filter((l) => l.status === status).length;
        const meta = STATUS_META[status];
        return (
          <div key={status} className="flex items-center gap-3 text-sm">
            <span className="flex w-24 shrink-0 items-center gap-2 text-muted-foreground">
              <span className={cn("size-2 rounded-full", meta.dot)} aria-hidden />
              {meta.label}
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary/70">
              <div
                className={cn("h-full rounded-full", meta.dot)}
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
            <span className="w-6 text-right text-xs text-muted-foreground tabular-nums">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
