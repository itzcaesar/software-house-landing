/**
 * Budget ranges come from the landing form as fixed strings — map to IDR midpoints.
 * Keep the keys in sync with `budgets` in apps/web/src/components/sections/contact.tsx.
 */
const BUDGET_VALUES: Record<string, number> = {
  "< Rp 15 jt": 10_000_000,
  "Rp 15 – 50 jt": 32_500_000,
  "Rp 50 – 150 jt": 100_000_000,
  "Rp 150 jt+": 200_000_000,
};

// ponytail: fixed FX rate for leads captured while the form was in USD; drop once those leads are closed out.
const USD_TO_IDR = 16_000;
const LEGACY_USD_BUDGETS: Record<string, number> = {
  "< $5k": 2_500 * USD_TO_IDR,
  "$5k – $15k": 10_000 * USD_TO_IDR,
  "$15k – $50k": 32_500 * USD_TO_IDR,
  "$50k+": 75_000 * USD_TO_IDR,
};

export const BUDGET_OPTIONS = Object.keys(BUDGET_VALUES);

export function budgetValue(budget: string): number {
  return BUDGET_VALUES[budget] ?? LEGACY_USD_BUDGETS[budget] ?? 0;
}

/** Compact rupiah: Rp 750 rb, Rp 32,5 jt, Rp 1,2 M. */
export function formatIdrCompact(amount: number): string {
  const fmt = (n: number) => n.toLocaleString("id-ID", { maximumFractionDigits: 1 });
  if (amount >= 1e9) return `Rp ${fmt(amount / 1e9)} M`;
  if (amount >= 1e6) return `Rp ${fmt(amount / 1e6)} jt`;
  if (amount >= 1e3) return `Rp ${fmt(amount / 1e3)} rb`;
  return `Rp ${amount}`;
}

/** Full rupiah amount, e.g. Rp 25.000.000. */
export function formatIdr(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

/** Best available deal value: real quote when set, budget-range midpoint otherwise. */
export function leadValue(lead: { quotedValue: number | null; budget: string }): number {
  return lead.quotedValue ?? budgetValue(lead.budget);
}
