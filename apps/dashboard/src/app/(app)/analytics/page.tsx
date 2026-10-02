import Link from "next/link";
import { gte } from "drizzle-orm";
import { events, getDb } from "@callumc/db";
import { summarizeEvents } from "@/lib/analytics";
import { LeadsOverTime } from "@/components/charts";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const RANGES = [
  { key: "7", label: "7 days", days: 7 },
  { key: "30", label: "30 days", days: 30 },
  { key: "90", label: "90 days", days: 90 },
] as const;

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const range = RANGES.find((r) => r.key === params.range) ?? RANGES[1];
  // Server component rendered per-request (force-dynamic) — "now" is request time.
  // eslint-disable-next-line react-hooks/purity
  const since = new Date(Date.now() - range.days * 86_400_000).toISOString();
  const rows = await getDb().select().from(events).where(gte(events.createdAt, since));
  const s = summarizeEvents(rows);

  const tiles = [
    { label: "Visits", value: s.sessions.toLocaleString("en-US"), hint: `${s.pageviews.toLocaleString("en-US")} pageviews` },
    { label: "WhatsApp clicks", value: s.waClicks.toLocaleString("en-US"), hint: "Consultation CTAs" },
    { label: "Waitlist clicks", value: s.waitlistClicks.toLocaleString("en-US"), hint: "Coming-soon niches" },
    { label: "Form submits", value: s.formSubmits.toLocaleString("en-US"), hint: "Contact form" },
    {
      label: "Contact rate",
      value: s.contactRate === null ? "—" : `${Math.round(s.contactRate * 100)}%`,
      hint: "Visits with a CTA click or form",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            First-party, cookieless stats from the landing site. Bots are filtered out.
          </p>
        </div>
        <nav className="flex rounded-lg border border-border bg-card p-1 text-sm">
          {RANGES.map((r) => (
            <Link
              key={r.key}
              href={`/analytics?range=${r.key}`}
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

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
        {tiles.map((tile) => (
          <div key={tile.label} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">{tile.label}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{tile.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{tile.hint}</p>
          </div>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-border bg-card p-5">
        <h2 className="text-sm font-medium">Pageviews per day</h2>
        <div className="mt-4">
          <LeadsOverTime leads={rows.filter((e) => e.name === "pageview")} days={range.days} unit="pageview" />
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <CountTable title="WhatsApp clicks by section" rows={s.waBySection} empty="No WhatsApp clicks yet." />
        <CountTable title="Traffic sources" hint="First touch per visit: utm_source, else referring site." rows={s.sources} empty="No visits yet." />
        <CountTable title="Top pages" rows={s.topPages} empty="No pageviews yet." />
        <CountTable title="Niche picks" hint="Family chosen in the niche picker." rows={s.nichePicks} empty="No picks yet." />
        <CountTable title="Waitlist clicks" hint="Niche or package the visitor asked about." rows={s.waitlist} empty="No waitlist clicks yet." />
        <CountTable title="Audience cards" hint="'Siapa yang cocok' cards clicked." rows={s.audience} empty="No card clicks yet." />
      </div>
    </div>
  );
}

function CountTable({
  title,
  hint,
  rows,
  empty,
}: {
  title: string;
  hint?: string;
  rows: [string, number][];
  empty: string;
}) {
  const max = Math.max(1, ...rows.map(([, n]) => n));
  return (
    <section>
      <h2 className="text-sm font-medium">{title}</h2>
      {hint && <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>}
      <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
        {rows.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">{empty}</p>
        ) : (
          <ul>
            {rows.slice(0, 10).map(([key, n]) => (
              <li key={key} className="flex items-center gap-3 border-b border-border/60 px-4 py-2.5 text-sm last:border-0">
                <span className="min-w-0 flex-1 truncate">{key}</span>
                <span className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
                    style={{ width: `${(n / max) * 100}%` }}
                  />
                </span>
                <span className="w-10 text-right tabular-nums">{n}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
