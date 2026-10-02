import { readAttribution } from "@/components/common/attribution";

/** Keep in sync with EVENT_NAMES in packages/db/src/schema.ts. */
export type EventName =
  | "pageview"
  | "wa_click"
  | "form_submit"
  | "niche_pick"
  | "waitlist_click"
  | "audience_click";

const SESSION_KEY = "callumc:session";

/** Random per-tab id (sessionStorage, not a cookie) so visits can be counted. */
function sessionId(): string {
  try {
    let id = window.sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

function hostOf(url: string): string {
  try {
    return url ? new URL(url).host : "";
  } catch {
    return "";
  }
}

/** Fire-and-forget first-party analytics event. Never throws. */
export function track(name: EventName, label = ""): void {
  try {
    const { referrer, utmSource } = readAttribution();
    const body = JSON.stringify({
      name,
      label,
      path: window.location.pathname,
      session: sessionId(),
      referrer: hostOf(referrer),
      utmSource,
    });
    const sent = navigator.sendBeacon?.("/api/events", new Blob([body], { type: "application/json" }));
    if (!sent) void fetch("/api/events", { method: "POST", body, keepalive: true }).catch(() => {});
  } catch {
    /* analytics is best-effort */
  }
}
