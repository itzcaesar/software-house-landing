import { test } from "node:test";
import assert from "node:assert/strict";
import { channelOf, summarize } from "./sources";

const base = { source: "landing", utmSource: "", referrer: "" };

test("channelOf picks the most specific signal", () => {
  assert.equal(channelOf({ ...base, source: "manual", utmSource: "google" }), "Manual entry");
  assert.equal(channelOf({ ...base, source: "maps" }), "Prospect finder");
  assert.equal(channelOf({ ...base, utmSource: " LinkedIn ", referrer: "https://x.com" }), "linkedin");
  assert.equal(channelOf({ ...base, referrer: "https://www.google.com/search?q=x" }), "google.com");
  assert.equal(channelOf({ ...base, referrer: "not a url" }), "Referral");
  assert.equal(channelOf(base), "Direct");
});

test("summarize rolls up counts, value and win rate", () => {
  const leads = [
    { status: "won" as const, quotedValue: 20_000, budget: "", ch: "google" },
    { status: "lost" as const, quotedValue: null, budget: "$50k+", ch: "google" },
    { status: "proposal" as const, quotedValue: null, budget: "$5k – $15k", ch: "google" },
    { status: "new" as const, quotedValue: null, budget: "", ch: "direct" },
  ];
  const [google, direct] = summarize(leads, (l) => l.ch);

  assert.deepEqual(google, {
    key: "google",
    leads: 3,
    open: 1,
    won: 1,
    lost: 1,
    winRate: 0.5,
    openValue: 10_000,
    wonValue: 20_000,
  });
  assert.equal(direct.key, "direct");
  assert.equal(direct.winRate, null);
});
