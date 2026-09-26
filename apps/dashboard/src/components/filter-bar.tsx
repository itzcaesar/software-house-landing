"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { LEAD_STATUSES, type User } from "@callumc/db";
import { STATUS_META } from "@/lib/status";

/** Search + status/assignee filters, synced to the URL (server refilters). */
export function FilterBar({ users }: { users: Pick<User, "id" | "name">[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  const apply = (patch: Record<string, string>) => {
    const next = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(patch)) {
      if (value) next.set(key, value);
      else next.delete(key);
    }
    next.delete("page");
    router.replace(`/leads?${next.toString()}`);
  };

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      if ((params.get("q") ?? "") !== q) apply({ q });
    }, 300);
    return () => {
      if (debounce.current) clearTimeout(debounce.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const selectClass =
    "rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60";

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div className="relative min-w-52 flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, email, company…"
          className="w-full rounded-lg border border-input bg-card py-2 pr-3 pl-9 text-sm outline-none transition-colors focus:border-brand/60"
        />
      </div>
      <select
        aria-label="Filter by status"
        value={params.get("status") ?? ""}
        onChange={(e) => apply({ status: e.target.value })}
        className={selectClass}
      >
        <option value="">All statuses</option>
        {LEAD_STATUSES.map((s) => (
          <option key={s} value={s}>
            {STATUS_META[s].label}
          </option>
        ))}
      </select>
      <select
        aria-label="Filter by assignee"
        value={params.get("assignee") ?? ""}
        onChange={(e) => apply({ assignee: e.target.value })}
        className={selectClass}
      >
        <option value="">Anyone</option>
        <option value="none">Unassigned</option>
        {users.map((u) => (
          <option key={u.id} value={String(u.id)}>
            {u.name}
          </option>
        ))}
      </select>
    </div>
  );
}
