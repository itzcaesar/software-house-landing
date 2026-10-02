import type { Lead } from "@callumc/db";
import { leadValue } from "./budget";

type SourceFields = Pick<Lead, "source" | "utmSource" | "referrer">;

/** Where a lead came from, as one label: UTM source > referrer host > entry path. */
export function channelOf(lead: SourceFields): string {
  if (lead.source === "manual") return "Manual entry";
  if (lead.source === "maps") return "Prospect finder";
  if (lead.utmSource) return lead.utmSource.trim().toLowerCase();
  if (lead.referrer) {
    try {
      return new URL(lead.referrer).hostname.replace(/^www\./, "");
    } catch {
      return "Referral";
    }
  }
  return "Direct";
}

export type SourceRow = {
  key: string;
  leads: number;
  open: number;
  won: number;
  lost: number;
  /** won / (won + lost), null until something has closed. */
  winRate: number | null;
  openValue: number;
  wonValue: number;
};

const OPEN = new Set(["new", "contacted", "discovery", "proposal"]);

/** Group leads by `keyOf` and roll up counts + value. Sorted by lead count, then won value. */
export function summarize<T extends Pick<Lead, "status" | "quotedValue" | "budget">>(
  leads: T[],
  keyOf: (lead: T) => string,
): SourceRow[] {
  const rows = new Map<string, SourceRow>();
  for (const lead of leads) {
    const key = keyOf(lead);
    const row =
      rows.get(key) ??
      { key, leads: 0, open: 0, won: 0, lost: 0, winRate: null, openValue: 0, wonValue: 0 };
    row.leads += 1;
    if (OPEN.has(lead.status)) {
      row.open += 1;
      row.openValue += leadValue(lead);
    }
    if (lead.status === "won") {
      row.won += 1;
      row.wonValue += leadValue(lead);
    }
    if (lead.status === "lost") row.lost += 1;
    rows.set(key, row);
  }
  for (const row of rows.values()) {
    const closed = row.won + row.lost;
    row.winRate = closed > 0 ? row.won / closed : null;
  }
  return [...rows.values()].sort((a, b) => b.leads - a.leads || b.wonValue - a.wonValue);
}
