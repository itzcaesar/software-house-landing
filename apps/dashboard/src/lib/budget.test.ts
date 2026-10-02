import { test } from "node:test";
import assert from "node:assert/strict";
import { budgetValue, formatIdrCompact, leadValue } from "./budget";

test("budgetValue maps IDR ranges and legacy USD ranges", () => {
  assert.equal(budgetValue("Rp 15 – 50 jt"), 32_500_000);
  assert.equal(budgetValue("$5k – $15k"), 160_000_000);
  assert.equal(budgetValue("unknown"), 0);
});

test("leadValue prefers the quote over the budget midpoint", () => {
  assert.equal(leadValue({ quotedValue: 25_000_000, budget: "Rp 150 jt+" }), 25_000_000);
  assert.equal(leadValue({ quotedValue: null, budget: "Rp 150 jt+" }), 200_000_000);
});

test("formatIdrCompact", () => {
  assert.equal(formatIdrCompact(32_500_000), "Rp 32,5 jt");
  assert.equal(formatIdrCompact(1_200_000_000), "Rp 1,2 M");
  assert.equal(formatIdrCompact(750_000), "Rp 750 rb");
  assert.equal(formatIdrCompact(0), "Rp 0");
});
