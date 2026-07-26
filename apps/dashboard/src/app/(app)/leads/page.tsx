import Link from "next/link";
import { desc } from "drizzle-orm";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { getDb, leads, users } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { formatDate, initials } from "@/lib/format";
import { FilterBar } from "@/components/filter-bar";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 20;

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.toLowerCase() : "";
  const status = typeof params.status === "string" ? params.status : "";
  const assignee = typeof params.assignee === "string" ? params.assignee : "";
  const page = Math.max(1, Number(params.page) || 1);

  const db = getDb();
  const [allLeads, allUsers] = await Promise.all([
    db.select().from(leads).orderBy(desc(leads.createdAt)),
    db.select().from(users),
  ]);

  const filtered = allLeads.filter((lead) => {
    if (status && lead.status !== status) return false;
    if (assignee === "none" && lead.assigneeId !== null) return false;
    if (assignee && assignee !== "none" && lead.assigneeId !== Number(assignee)) return false;
    if (q) {
      const haystack = `${lead.name} ${lead.email} ${lead.company}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const userById = (id: number | null) => allUsers.find((u) => u.id === id);

  const pageLink = (p: number) => {
    const next = new URLSearchParams();
    if (q) next.set("q", q);
    if (status) next.set("status", status);
    if (assignee) next.set("assignee", assignee);
    next.set("page", String(p));
    return `/leads?${next.toString()}`;
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} of {allLeads.length} lead{allLeads.length === 1 ? "" : "s"}
          </p>
        </div>
        <a
          href="/api/export"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand-2"
        >
          <Download className="size-4" />
          Export CSV
        </a>
      </div>

      <div className="mt-5">
        <FilterBar users={allUsers.map(({ id, name }) => ({ id, name }))} />
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground uppercase tracking-wide">
              <th className="px-4 py-3 font-medium">Lead</th>
              <th className="px-4 py-3 font-medium">Budget</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Assignee</th>
              <th className="px-4 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {slice.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-muted-foreground">
                  No leads match these filters.
                </td>
              </tr>
            )}
            {slice.map((lead) => {
              const assigned = userById(lead.assigneeId);
              return (
                <tr
                  key={lead.id}
                  className="group border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40"
                >
                  <td className="px-4 py-3">
                    <Link href={`/leads/${lead.id}`} className="block">
                      <span className="font-medium group-hover:text-brand-2">{lead.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {lead.email}
                        {lead.company && ` · ${lead.company}`}
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{lead.budget || "—"}</td>
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

      {pages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <PageArrow href={pageLink(current - 1)} disabled={current === 1}>
            <ChevronLeft className="size-4" />
          </PageArrow>
          <span className="text-muted-foreground tabular-nums">
            Page {current} / {pages}
          </span>
          <PageArrow href={pageLink(current + 1)} disabled={current === pages}>
            <ChevronRight className="size-4" />
          </PageArrow>
        </div>
      )}
    </div>
  );
}

function PageArrow({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled: boolean;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span className="grid size-8 place-items-center rounded-lg border border-border text-muted-foreground/40">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="grid size-8 place-items-center rounded-lg border border-border transition-colors hover:border-brand/40 hover:text-brand-2"
    >
      {children}
    </Link>
  );
}
