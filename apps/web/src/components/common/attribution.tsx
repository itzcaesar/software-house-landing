"use client";

import { useEffect } from "react";

export const ATTRIBUTION_KEY = "callumc:attribution";

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
 * session, so the contact form can report where each lead came from.
 * Renders nothing.
 */
export function AttributionTracker() {
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

  return null;
}
