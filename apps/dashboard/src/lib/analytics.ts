import type { AnalyticsEvent } from "@craftbyte/db";

type Ev = Pick<AnalyticsEvent, "name" | "label" | "path" | "session" | "referrer" | "utmSource">;

/** [key, count] pairs sorted by count desc, then key; empty keys become `fallback`. */
export function countBy<T>(items: T[], key: (item: T) => string, fallback = "—"): [string, number][] {
  const counts = new Map<string, number>();
  for (const item of items) {
    const k = key(item) || fallback;
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export function summarizeEvents(events: Ev[]) {
  const pageviews = events.filter((e) => e.name === "pageview");
  const sessions = new Set(pageviews.map((e) => e.session).filter(Boolean)).size;
  const waClicks = events.filter((e) => e.name === "wa_click").length;
  const waitlistClicks = events.filter((e) => e.name === "waitlist_click").length;
  const formSubmits = events.filter((e) => e.name === "form_submit").length;
  const contactSessions = new Set(
    events
      .filter((e) => e.name === "wa_click" || e.name === "waitlist_click" || e.name === "form_submit")
      .map((e) => e.session)
      .filter(Boolean),
  ).size;
  return {
    pageviews: pageviews.length,
    sessions,
    waClicks,
    waitlistClicks,
    formSubmits,
    /** Share of sessions that clicked a WhatsApp/waitlist CTA or sent the form. */
    contactRate: sessions ? contactSessions / sessions : null,
    topPages: countBy(pageviews, (e) => e.path),
    // First-touch source per session, so a 10-page visit counts once.
    sources: countBy(
      [...new Map([...pageviews].reverse().map((e, i) => [e.session || `_${i}`, e])).values()],
      (e) => e.utmSource.toLowerCase() || e.referrer,
      "Direct",
    ),
    waBySection: countBy(events.filter((e) => e.name === "wa_click"), (e) => e.label),
    nichePicks: countBy(events.filter((e) => e.name === "niche_pick"), (e) => e.label),
    waitlist: countBy(events.filter((e) => e.name === "waitlist_click"), (e) => e.label),
    audience: countBy(events.filter((e) => e.name === "audience_click"), (e) => e.label),
  };
}
