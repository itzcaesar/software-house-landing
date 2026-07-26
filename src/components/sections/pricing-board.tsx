"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { planMeta, addonMeta, type PricingScope } from "@/lib/pricing";
import { useCurrency } from "@/lib/currency";
import { useDict } from "@/lib/i18n";
import { SectionHeading } from "@/components/common/section";
import { CurrencyToggle } from "@/components/common/currency-toggle";
import { ScopeToggle } from "@/components/common/scope-toggle";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import {
  PricingCompare,
  PricingAddons,
  PricingFaq,
  PricingEngage,
} from "@/components/sections/pricing-detail";
import { PricingEstimator } from "@/components/sections/pricing-estimator";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Interactive pricing table for the dedicated /pricing route. */
export function PricingBoard() {
  const { currency, format } = useCurrency();
  const t = useDict();
  const [scope, setScope] = useState<PricingScope>("web");

  const cat = t.pricing[scope];
  const plans = planMeta[scope];
  const highlightIndex = plans.findIndex((p) => p.highlighted);

  const addonItems = addonMeta[scope].map((m, i) => {
    const base = format(m.price[currency]);
    return {
      name: cat.addons[i].name,
      description: cat.addons[i].description,
      price: m.recurring ? `${base}${t.pricing.perMonth}` : `${t.pricing.addonsFrom} ${base}`,
    };
  });

  return (
    <section className="scroll-mt-24 pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.pageTitle}
          description={t.pricing.pageDescription}
        />

        <Reveal className="mt-10 flex flex-col items-center gap-5">
          <ScopeToggle
            value={scope}
            onChange={setScope}
            labels={{ web: t.pricing.webTab, app: t.pricing.appTab }}
          />
          <div className="flex flex-col items-center gap-2">
            <CurrencyToggle />
            <p className="text-xs text-muted-foreground">
              {t.pricing.notePrefix} {currency}. {t.pricing.noteTail}
            </p>
          </div>
        </Reveal>

        <div className="mt-6 flex min-h-6 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={scope}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="text-center text-sm text-muted-foreground"
            >
              {cat.tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Re-keyed by scope so the tiers re-stagger on each switch. */}
        <Stagger
          key={scope}
          className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {plans.map((plan, i) => {
            const copy = cat.plans[i];
            const amount = plan.price[currency];
            const isCustom = amount === null;
            return (
              <StaggerItem key={plan.id} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8 shadow-soft transition-all duration-300",
                    plan.highlighted
                      ? "z-10 border-brand/50 bg-card shadow-elevated ring-1 ring-brand/20 lg:-translate-y-4 lg:scale-[1.035]"
                      : "border-border bg-card hover:border-brand/25",
                  )}
                >
                  {plan.highlighted && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand/[0.07] to-transparent"
                    />
                  )}
                  {copy.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                      {copy.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold">{copy.name}</h3>
                    <p className="mt-1.5 min-h-[2.75rem] text-sm text-muted-foreground text-pretty">
                      {copy.description}
                    </p>
                  </div>

                  <div className="mt-6 flex min-h-[3.75rem] items-baseline gap-2">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`${plan.id}-${scope}-${currency}-${isCustom}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="text-4xl font-semibold tracking-tight tabular-nums"
                      >
                        {isCustom ? t.pricing.custom : format(amount)}
                      </motion.span>
                    </AnimatePresence>
                    {!isCustom && copy.priceSuffix && (
                      <span className="text-sm text-muted-foreground">{copy.priceSuffix}</span>
                    )}
                  </div>

                  <CtaButton size="md" href="/#contact" className="mt-6 w-full">
                    {copy.cta}
                    <ArrowRight className="size-4" />
                  </CtaButton>

                  <ul className="mt-8 space-y-3">
                    {copy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                          <Check className="size-3.5" strokeWidth={2.5} />
                        </span>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <PricingEstimator />

        <PricingCompare
          key={`compare-${scope}`}
          title={t.pricing.compareTitle}
          featureLabel={t.pricing.featureLabel}
          columns={cat.plans.map((p) => p.name)}
          rows={cat.compareRows}
          highlightIndex={highlightIndex}
        />

        <PricingAddons
          key={`addons-${scope}`}
          title={t.pricing.addonsTitle}
          subtitle={t.pricing.addonsSubtitle}
          items={addonItems}
          disclaimer={t.pricing.addonsDisclaimer}
        />

        <PricingEngage
          eyebrow={t.pricing.engageEyebrow}
          title={t.pricing.engageTitle}
          steps={t.pricing.engageSteps}
          guarantees={t.pricing.guarantees}
        />

        <PricingFaq title={t.pricing.pricingFaqTitle} items={t.pricing.pricingFaq} />

        <Reveal className="mt-16 text-center text-sm text-muted-foreground">
          {t.pricing.footerText}{" "}
          <Link href="/#contact" className="font-medium text-brand hover:underline">
            {t.pricing.footerLink}
          </Link>
          .
        </Reveal>
      </div>
    </section>
  );
}
