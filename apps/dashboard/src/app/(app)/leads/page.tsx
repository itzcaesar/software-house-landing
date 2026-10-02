import Link from "next/link";
import { desc } from "drizzle-orm";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { getDb, leads, users } from "@callumc/db";
import { FilterBar } from "@/components/filter-bar";
import { AddLeadButton } from "@/components/add-lead";
import { LeadsTable } from "@/components/leads-table";

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
        <div className="flex items-center gap-2.5">
          <a
            href="/api/export"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand-2"
          >
            <Download className="size-4" />
            Export CSV
          </a>
          <AddLeadButton />
        </div>
      </div>

      <div className="mt-5">
        <FilterBar users={allUsers.filter((u) => !u.disabledAt).map(({ id, name }) => ({ id, name }))} />
      </div>

      <LeadsTable
        rows={slice}
        users={allUsers.map(({ id, name, disabledAt }) => ({ id, name, disabledAt }))}
      />

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
