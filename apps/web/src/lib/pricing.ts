import type { CurrencyCode } from "@/lib/currency";

/**
 * Structural pricing data. Localized amounts per market (not FX conversions).
 * Plan names, descriptions, features, etc. live in the locale dictionaries.
 */
export type PlanMeta = {
  id: string;
  price: Record<CurrencyCode, number | null>;
  highlighted?: boolean;
};

/** Pricing is split by build type; each scope has its own tiers. */
export type PricingScope = "web" | "app";

export const PRICING_SCOPES: PricingScope[] = ["web", "app"];

export const planMeta: Record<PricingScope, PlanMeta[]> = {
  web: [
    { id: "starter", price: { USD: 2900, IDR: 45_000_000 } },
    { id: "professional", price: { USD: 7900, IDR: 120_000_000 }, highlighted: true },
    { id: "enterprise", price: { USD: null, IDR: null } },
  ],
  app: [
    { id: "starter", price: { USD: 4900, IDR: 75_000_000 } },
    { id: "professional", price: { USD: 12_900, IDR: 195_000_000 }, highlighted: true },
    { id: "enterprise", price: { USD: null, IDR: null } },
  ],
};

/** Cheapest concrete "from" amount per scope — used by the home teaser. */
export const startingPrice: Record<PricingScope, Record<CurrencyCode, number>> = {
  web: { USD: 2900, IDR: 45_000_000 },
  app: { USD: 4900, IDR: 75_000_000 },
};

/**
 * A-la-carte add-ons. Order and length must match the `addons` array in each
 * scope of the locale dictionaries (aligned by index). `recurring` marks a
 * monthly price.
 */
export type AddonMeta = {
  id: string;
  price: Record<CurrencyCode, number>;
  recurring?: boolean;
};

export const addonMeta: Record<PricingScope, AddonMeta[]> = {
  web: [
    { id: "payments", price: { USD: 1200, IDR: 18_000_000 } },
    { id: "ai", price: { USD: 1500, IDR: 22_000_000 } },
    { id: "analytics", price: { USD: 700, IDR: 10_000_000 } },
    { id: "extra-page", price: { USD: 180, IDR: 2_500_000 } },
    { id: "seo", price: { USD: 450, IDR: 7_000_000 } },
    { id: "cms-training", price: { USD: 200, IDR: 3_000_000 } },
    { id: "copywriting", price: { USD: 350, IDR: 5_000_000 } },
    { id: "care", price: { USD: 250, IDR: 3_500_000 }, recurring: true },
    { id: "rush", price: { USD: 600, IDR: 9_000_000 } },
  ],
  app: [
    { id: "extra-platform", price: { USD: 2500, IDR: 38_000_000 } },
    { id: "backend-api", price: { USD: 3200, IDR: 48_000_000 } },
    { id: "ai", price: { USD: 1800, IDR: 27_000_000 } },
    { id: "push-crm", price: { USD: 600, IDR: 9_000_000 } },
    { id: "analytics", price: { USD: 500, IDR: 7_500_000 } },
    { id: "realtime", price: { USD: 2000, IDR: 30_000_000 } },
    { id: "localization", price: { USD: 900, IDR: 13_500_000 } },
    { id: "care", price: { USD: 400, IDR: 6_000_000 }, recurring: true },
    { id: "rush", price: { USD: 1200, IDR: 18_000_000 } },
  ],
};
