import Link from "next/link";
import { getDb, leads } from "@craftbyte/db";
import { formatUsdCompact } from "@/lib/budget";
import { channelOf, summarize, type SourceRow } from "@/lib/sources";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const RANGES = [
  { key: "30", label: "30 days", days: 30 },
  { key: "90", label: "90 days", days: 90 },
  { key: "365", label: "12 months", days: 365 },
  { key: "all", label: "All time", days: null },
] as const;

export default async function SourcesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const range = RANGES.find((r) => r.key === params.range) ?? RANGES[1];

  const allLeads = await getDb().select().from(leads);
  // Server component rendered per-request (force-dynamic) — "now" is request time.
  // eslint-disable-next-line react-hooks/purity
  const since = range.days === null ? 0 : Date.now() - range.days * 86_400_000;
  const inRange = allLeads.filter((l) => new Date(l.createdAt).getTime() >= since);

  const channels = summarize(inRange, channelOf);
  const campaigns = summarize(
    inRange.filter((l) => l.utmCampaign),
    (l) => `${l.utmCampaign}${l.utmSource ? ` · ${l.utmSource.toLowerCase()}` : ""}`,
  );

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Sources</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Which channels bring leads — and which ones turn into revenue.
          </p>
        </div>
        <nav className="flex rounded-lg border border-border bg-card p-1 text-sm">
          {RANGES.map((r) => (
            <Link
              key={r.key}
              href={`/sources?range=${r.key}`}
              aria-current={r.key === range.key ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-1.5 transition-colors",
                r.key === range.key
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {r.label}
            </Link>
          ))}
        </nav>
      </div>

      <SourceTable
        title="By channel"
        hint="UTM source, else referring site, else how the lead was entered."
        rows={channels}
        empty="No leads in this period."
      />
      <SourceTable
        title="By campaign"
        hint="Leads that arrived with a utm_campaign tag."
        rows={campaigns}
        empty="No tagged campaigns yet — add ?utm_source=…&utm_campaign=… to links you share."
      />
    </div>
  );
}

function SourceTable({
  title,
  hint,
  rows,
  empty,
}: {
  title: string;
  hint: string;
  rows: SourceRow[];
  empty: string;
}) {
  const maxLeads = Math.max(1, ...rows.map((r) => r.leads));
  return (
    <section className="mt-6">
      <h2 className="text-sm font-medium">{title}</h2>
      <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>
      <div className="mt-3 overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Leads</th>
              <th className="px-4 py-3 text-right font-medium">Open</th>
              <th className="px-4 py-3 text-right font-medium">Won</th>
              <th className="px-4 py-3 text-right font-medium">Win rate</th>
              <th className="px-4 py-3 text-right font-medium">Pipeline</th>
              <th className="px-4 py-3 text-right font-medium">Won value</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">
                  {empty}
                </td>
              </tr>
            )}
            {rows.map((r) => (
              <tr key={r.key} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3 font-medium">{r.key}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 tabular-nums">{r.leads}</span>
                    <span className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
                        style={{ width: `${(r.leads / maxLeads) * 100}%` }}
                      />
                    </span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">{r.open}</td>
                <td className="px-4 py-3 text-right tabular-nums">{r.won}</td>
                <td className="px-4 py-3 text-right tabular-nums">
                  {r.winRate === null ? (
                    <span className="text-muted-foreground">—</span>
                  ) : (
                    `${Math.round(r.winRate * 100)}%`
                  )}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                  {r.openValue > 0 ? formatUsdCompact(r.openValue) : "—"}
                </td>
                <td className="px-4 py-3 text-right font-medium tabular-nums text-emerald-300">
                  {r.wonValue > 0 ? formatUsdCompact(r.wonValue) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
