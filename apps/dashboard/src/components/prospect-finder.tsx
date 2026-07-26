"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  ExternalLink,
  Loader2,
  MapPin,
  Phone,
  Plus,
  Search,
  Star,
} from "lucide-react";
import {
  searchProspects,
  addProspectLead,
  type ProspectResult,
} from "@/app/actions";
import { cn } from "@/lib/utils";

const selectClass =
  "rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60";

export function ProspectFinder({ hasKey }: { hasKey: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [minRating, setMinRating] = useState(4.3);
  const [minReviews, setMinReviews] = useState(30);
  const [results, setResults] = useState<ProspectResult[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [scanned, setScanned] = useState(0);
  const [searched, setSearched] = useState(false);
  const [added, setAdded] = useState<Set<string>>(new Set());
  const [searching, startSearch] = useTransition();
  const [adding, startAdd] = useTransition();

  if (!hasKey) return <SetupCard />;

  const runSearch = (pageToken?: string) =>
    startSearch(async () => {
      const res = await searchProspects({ query, minRating, minReviews, pageToken });
      if (res.error) {
        toast.error(res.error === "missing_key" ? "API key missing — restart after adding it." : res.error);
        return;
      }
      setSearched(true);
      setResults((prev) => (pageToken ? [...prev, ...(res.results ?? [])] : (res.results ?? [])));
      setScanned((prev) => (pageToken ? prev + (res.scanned ?? 0) : (res.scanned ?? 0)));
      setNextPageToken(res.nextPageToken);
    });

  const addProspect = (prospect: ProspectResult) =>
    startAdd(async () => {
      const res = await addProspectLead(prospect);
      if (res.error) {
        toast.error(res.error);
        return;
      }
      setAdded((prev) => new Set(prev).add(prospect.placeId));
      toast.success(`${prospect.name} added to leads`);
      router.refresh();
    });

  return (
    <div>
      {/* search controls */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          runSearch();
        }}
        className="flex flex-wrap items-center gap-2.5"
      >
        <div className="relative min-w-64 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='e.g. "restaurants in South Jakarta" or "dental clinic Bandung"'
            className="w-full rounded-lg border border-input bg-card py-2.5 pr-3 pl-9 text-sm outline-none transition-colors focus:border-brand/60"
          />
        </div>
        <select
          aria-label="Minimum rating"
          value={String(minRating)}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className={selectClass}
        >
          <option value="4">4.0★+</option>
          <option value="4.3">4.3★+</option>
          <option value="4.5">4.5★+</option>
          <option value="4.7">4.7★+</option>
        </select>
        <select
          aria-label="Minimum reviews"
          value={String(minReviews)}
          onChange={(e) => setMinReviews(Number(e.target.value))}
          className={selectClass}
        >
          <option value="10">10+ reviews</option>
          <option value="30">30+ reviews</option>
          <option value="50">50+ reviews</option>
          <option value="100">100+ reviews</option>
        </select>
        <button
          type="submit"
          disabled={searching || !query.trim()}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        >
          {searching ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
          Find prospects
        </button>
      </form>

      {/* results */}
      {searched && (
        <p className="mt-4 text-sm text-muted-foreground">
          {results.length} well-rated business{results.length === 1 ? "" : "es"} without a website
          (from {scanned} scanned)
        </p>
      )}

      <div className="mt-3 flex flex-col gap-2.5">
        {results.map((prospect) => {
          const isAdded = added.has(prospect.placeId);
          return (
            <div
              key={prospect.placeId}
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/30"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{prospect.name}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-300 ring-1 ring-amber-500/25">
                    <Star className="size-3 fill-amber-300" />
                    {prospect.rating} · {prospect.reviews}
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/25">
                    no website
                  </span>
                </div>
                <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
                  {prospect.address && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" />
                      {prospect.address}
                    </span>
                  )}
                  {prospect.phone && (
                    <span className="inline-flex items-center gap-1">
                      <Phone className="size-3" />
                      {prospect.phone}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {prospect.mapsUrl && (
                  <a
                    href={prospect.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in Google Maps"
                    className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand-2"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
                <button
                  type="button"
                  disabled={isAdded || adding}
                  onClick={() => addProspect(prospect)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all",
                    isAdded
                      ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25"
                      : "bg-gradient-to-r from-brand-3 via-brand to-brand-2 text-white hover:brightness-110 active:scale-[0.98] disabled:opacity-60",
                  )}
                >
                  {isAdded ? "Added" : (
                    <>
                      <Plus className="size-4" />
                      Add lead
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {searched && results.length === 0 && !searching && (
        <p className="mt-2 rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
          Nothing matched — every result had a website or fell below the rating bar. Try a broader
          area, a different niche, or lower thresholds.
        </p>
      )}

      {nextPageToken && (
        <button
          type="button"
          disabled={searching}
          onClick={() => runSearch(nextPageToken)}
          className="mt-4 w-full rounded-xl border border-border bg-card py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand-2 disabled:opacity-60"
        >
          {searching ? "Loading…" : "Scan more results"}
        </button>
      )}
    </div>
  );
}

function SetupCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-semibold">One-time setup: Google Places API key</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        The finder uses the official Places API (no scraping — reliable and within Google&apos;s
        terms). Free monthly credit comfortably covers prospecting use.
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
        <li>
          Open{" "}
          <a
            href="https://console.cloud.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-2 hover:underline"
          >
            console.cloud.google.com
          </a>{" "}
          and create (or pick) a project.
        </li>
        <li>
          APIs &amp; Services → Library → enable <strong className="text-foreground">Places API (New)</strong>.
        </li>
        <li>APIs &amp; Services → Credentials → Create credentials → API key.</li>
        <li>
          Add to <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">apps/dashboard/.env.local</code>:{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">GOOGLE_MAPS_API_KEY=your-key</code>
        </li>
        <li>Restart the dashboard dev server.</li>
      </ol>
    </div>
  );
}
