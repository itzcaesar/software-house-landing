/** Budget ranges come from the landing form as fixed strings — map to midpoints. */
const BUDGET_VALUES: Record<string, number> = {
  "< $5k": 2_500,
  "$5k – $15k": 10_000,
  "$15k – $50k": 32_500,
  "$50k+": 75_000,
};

export const BUDGET_OPTIONS = Object.keys(BUDGET_VALUES);

export function budgetValue(budget: string): number {
  return BUDGET_VALUES[budget] ?? 0;
}

export function formatUsdCompact(amount: number): string {
  if (amount >= 1000) {
    const k = amount / 1000;
    return `$${Number.isInteger(k) ? k : k.toFixed(1)}k`;
  }
  return `$${amount}`;
}

/** Best available deal value: real quote when set, budget-range midpoint otherwise. */
export function leadValue(lead: { quotedValue: number | null; budget: string }): number {
  return lead.quotedValue ?? budgetValue(lead.budget);
}
