"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track, type EventName } from "@/lib/track";

export const ATTRIBUTION_KEY = "craftbyte:attribution";

export type Attribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  referrer: string;
};

/** Read the stored first-touch attribution (empty strings when unknown). */
export function readAttribution(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (raw) return JSON.parse(raw) as Attribution;
  } catch {
    /* ignore */
  }
  return { utmSource: "", utmMedium: "", utmCampaign: "", referrer: "" };
}

/**
 * Captures first-touch attribution (UTM params + document.referrer) once per
 * session, so the contact form can report where each lead came from. Also
 * records first-party analytics: a pageview per route, and a click event for
 * any element with `data-track` (label = `data-track-label`, else the nearest
 * section id / "nav" / "footer"). Renders nothing.
 */
export function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(ATTRIBUTION_KEY)) return;
      const params = new URLSearchParams(window.location.search);
      const referrer = document.referrer;
      // Ignore self-referrals (in-site navigation).
      const external = referrer && !referrer.startsWith(window.location.origin);
      const data: Attribution = {
        utmSource: params.get("utm_source") ?? "",
        utmMedium: params.get("utm_medium") ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
        referrer: external ? referrer : "",
      };
      window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
    } catch {
      /* storage unavailable — attribution is best-effort */
    }
  }, []);

  useEffect(() => {
    track("pageview");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const where =
        el.closest("section[id]")?.id ?? (el.closest("header") ? "nav" : el.closest("footer") ? "footer" : "");
      track(el.dataset.track as EventName, el.dataset.trackLabel || where);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
