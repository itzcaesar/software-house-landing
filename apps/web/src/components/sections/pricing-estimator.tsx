"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { ArrowRight, CalendarClock, Check, Sparkles } from "lucide-react";
import { addonMeta, planMeta, type PricingScope } from "@/lib/pricing";
import { useCurrency, type CurrencyCode } from "@/lib/currency";
import { useDict } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/common/reveal";
import { Eyebrow } from "@/components/common/section";
import { ScopeToggle } from "@/components/common/scope-toggle";
import { cn } from "@/lib/utils";

const SIZE_RANGE: Record<PricingScope, { min: number; max: number }> = {
  web: { min: 3, max: 15 },
  app: { min: 4, max: 20 },
};

function roundEstimate(v: number, c: CurrencyCode) {
  return c === "USD" ? Math.round(v / 50) * 50 : Math.round(v / 500_000) * 500_000;
}

/** Springs a currency amount toward its new value instead of jumping. */
function AnimatedAmount({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const { format } = useCurrency();
  const spring = useSpring(value, { stiffness: 120, damping: 24 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);
  useMotionValueEvent(spring, "change", (v) => setDisplay(v));

  return (
    <span className="tabular-nums">{format(Math.round(reduce ? value : display))}</span>
  );
}

/** Interactive ballpark calculator driven by the real pricing data. */
export function PricingEstimator() {
  const t = useDict();
  const { currency, format } = useCurrency();
  const [scope, setScope] = useState<PricingScope>("web");
  const [size, setSize] = useState(SIZE_RANGE.web.min + 3);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [rush, setRush] = useState(false);

  const range = SIZE_RANGE[scope];
  const cat = t.pricing[scope];

  // Addon chips = real addon meta aligned with localized names; rush handled by the timeline control.
  const chips = addonMeta[scope]
    .map((meta, i) => ({ meta, name: cat.addons[i].name }))
    .filter(({ meta }) => meta.id !== "rush");

  const onScope = (s: PricingScope) => {
    setScope(s);
    setSize(Math.min(Math.max(size, SIZE_RANGE[s].min), SIZE_RANGE[s].max));
    setSelected(new Set());
  };

  const toggleChip = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Base interpolates between the starter and professional tiers by size.
  const starter = planMeta[scope][0].price[currency] ?? 0;
  const professional = planMeta[scope][1].price[currency] ?? starter;
  const p = (size - range.min) / (range.max - range.min);
  const base = roundEstimate(starter + (professional - starter) * p, currency);

  const oneTime = chips
    .filter(({ meta }) => selected.has(meta.id) && !meta.recurring)
    .reduce((sum, { meta }) => sum + meta.price[currency], 0);
  const monthly = chips
    .filter(({ meta }) => selected.has(meta.id) && meta.recurring)
    .reduce((sum, { meta }) => sum + meta.price[currency], 0);
  const rushAddon = addonMeta[scope].find((m) => m.id === "rush");
  const rushCost = rush && rushAddon ? rushAddon.price[currency] : 0;

  const total = roundEstimate(base + oneTime + rushCost, currency);
  const addonCount = chips.filter(({ meta }) => selected.has(meta.id) && !meta.recurring).length;
  const pct = ((size - range.min) / (range.max - range.min)) * 100;

  return (
    <Reveal id="estimator" className="mt-20 scroll-mt-24 lg:mt-24">
      <div className="rounded-3xl bg-gradient-to-br from-brand/30 via-border/70 to-transparent p-px">
        <div className="rounded-3xl bg-card p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <Eyebrow>{t.estimator.eyebrow}</Eyebrow>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.estimator.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-pretty sm:text-base">
              {t.estimator.description}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            {/* controls */}
            <div className="flex flex-col gap-7">
              <ScopeToggle
                pillId="estimator-scope-pill"
                value={scope}
                onChange={onScope}
                labels={{ web: t.pricing.webTab, app: t.pricing.appTab }}
                className="self-start"
              />

              {/* size slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="estimator-size" className="text-sm font-medium">
                    {t.estimator.sizeLabel[scope]}
                  </label>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand tabular-nums">
                    {size}
                  </span>
                </div>
                <input
                  id="estimator-size"
                  type="range"
                  min={range.min}
                  max={range.max}
                  step={1}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="range-brand mt-3"
                  style={{
                    background: `linear-gradient(to right, var(--brand) ${pct}%, var(--border) ${pct}%)`,
                  }}
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground tabular-nums">
                  <span>{range.min}</span>
                  <span>{range.max}+</span>
                </div>
              </div>

              {/* addon chips */}
              <div>
                <p className="text-sm font-medium">{t.estimator.addonsLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {chips.map(({ meta, name }) => {
                    const active = selected.has(meta.id);
                    return (
                      <button
                        key={meta.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleChip(meta.id)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200",
                          active
                            ? "border-brand/40 bg-brand/10 text-brand shadow-soft"
                            : "border-border bg-secondary/40 text-muted-foreground hover:border-brand/25 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-3.5 place-items-center rounded-full transition-colors",
                            active ? "bg-brand text-white" : "bg-border",
                          )}
                        >
                          {active && <Check className="size-2.5" strokeWidth={3} />}
                        </span>
                        {name}
                        {meta.recurring && (
                          <span className="text-[10px] opacity-70">{t.pricing.perMonth}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* timeline */}
              <div>
                <p className="text-sm font-medium">{t.estimator.timelineLabel}</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-border bg-secondary/60 p-1">
                  {[false, true].map((isRush) => {
                    const active = rush === isRush;
                    return (
                      <button
                        key={String(isRush)}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setRush(isRush)}
                        className={cn(
                          "relative z-10 rounded-full px-4 py-1.5 text-[0.8rem] font-medium transition-colors",
                          active
                            ? "text-brand-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="estimator-timeline-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          {isRush && <Sparkles className="size-3.5" />}
                          {isRush ? t.estimator.timelineRush : t.estimator.timelineStandard}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-3 via-brand to-brand-2 p-6 text-white sm:p-7">
              <div aria-hidden className="absolute inset-0 bg-dots opacity-15 mix-blend-overlay" />
              <div className="relative flex h-full flex-col">
                <p className="text-xs font-medium tracking-[0.18em] text-white/75 uppercase">
                  {t.estimator.estimateLabel}
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    <AnimatedAmount value={total} />
                  </span>
                  <span className="text-sm text-white/75">{t.estimator.startingSuffix}</span>
                </p>

                <dl className="mt-5 space-y-2 border-t border-white/20 pt-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/75">{t.estimator.baseLine}</dt>
                    <dd className="font-medium tabular-nums">{format(base)}</dd>
                  </div>
                  {addonCount > 0 && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/75">
                        {t.estimator.addonsLine} ×{addonCount}
                      </dt>
                      <dd className="font-medium tabular-nums">+{format(oneTime)}</dd>
                    </div>
                  )}
                  {rush && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/75">{t.estimator.rushLine}</dt>
                      <dd className="font-medium tabular-nums">+{format(rushCost)}</dd>
                    </div>
                  )}
                  {monthly > 0 && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/75">{t.estimator.monthlyLine}</dt>
                      <dd className="font-medium tabular-nums">
                        {format(monthly)}
                        {t.pricing.perMonth}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-auto pt-6">
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-3 shadow-elevated transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                  >
                    <CalendarClock className="size-4" />
                    {t.estimator.ctaCall}
                  </a>
                  <Link
                    href="/#contact"
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {t.estimator.ctaContact}
                    <ArrowRight className="size-4" />
                  </Link>
                  <p className="mt-4 text-xs leading-relaxed text-white/65 text-pretty">
                    {t.estimator.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
