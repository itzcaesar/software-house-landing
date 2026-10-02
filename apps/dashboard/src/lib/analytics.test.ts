import { test } from "node:test";
import assert from "node:assert/strict";
import { countBy, summarizeEvents } from "./analytics";

const ev = (name: string, extra: Partial<Record<"label" | "path" | "session" | "referrer" | "utmSource", string>> = {}) =>
  ({ name, label: "", path: "/", session: "", referrer: "", utmSource: "", ...extra }) as Parameters<typeof summarizeEvents>[0][number];

test("countBy sorts by count then key, with a fallback for empty keys", () => {
  assert.deepEqual(countBy(["b", "a", "b", ""], (x) => x, "none"), [["b", 2], ["a", 1], ["none", 1]]);
});

test("summarizeEvents counts sessions, CTA clicks and first-touch sources", () => {
  const s = summarizeEvents([
    ev("pageview", { session: "s1", referrer: "google.com" }),
    ev("pageview", { session: "s1", path: "/services", referrer: "google.com" }),
    ev("pageview", { session: "s2", utmSource: "Instagram" }),
    ev("wa_click", { session: "s1", label: "top" }),
    ev("wa_click", { session: "s2", label: "top" }),
    ev("form_submit", { session: "s2" }),
    ev("niche_pick", { label: "Toko online" }),
  ]);
  assert.equal(s.pageviews, 3);
  assert.equal(s.sessions, 2);
  assert.equal(s.waClicks, 2);
  assert.equal(s.formSubmits, 1);
  assert.equal(s.contactRate, 1);
  assert.deepEqual(s.sources, [["google.com", 1], ["instagram", 1]]);
  assert.deepEqual(s.waBySection, [["top", 2]]);
  assert.deepEqual(s.topPages, [["/", 2], ["/services", 1]]);
  assert.deepEqual(s.nichePicks, [["Toko online", 1]]);
});
