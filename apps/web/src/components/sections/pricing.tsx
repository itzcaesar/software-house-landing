"use client";

import Link from "next/link";
import { Globe, Smartphone, ArrowRight } from "lucide-react";
import { startingPrice } from "@/lib/pricing";
import { useCurrency } from "@/lib/currency";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { CurrencyToggle } from "@/components/common/currency-toggle";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { CtaButton } from "@/components/ui/cta-button";

export function Pricing() {
  const { currency, format } = useCurrency();
  const t = useDict();

  const cards = [
    {
      icon: Globe,
      label: t.pricing.teaser.webLabel,
      tagline: t.pricing.web.tagline,
      from: startingPrice.web[currency],
    },
    {
      icon: Smartphone,
      label: t.pricing.teaser.appLabel,
      tagline: t.pricing.app.tagline,
      from: startingPrice.app[currency],
    },
  ];

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow={t.pricing.teaser.eyebrow}
        title={t.pricing.teaser.title}
        description={t.pricing.teaser.description}
      />

      <Reveal className="mt-8 flex justify-center">
        <CurrencyToggle />
      </Reveal>

      <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <StaggerItem key={i}>
            <Link
              href="/pricing"
              className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-brand/30 hover:shadow-elevated"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                <card.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{card.label}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty">{card.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t.pricing.teaser.fromLabel}
                </span>
                <span className="text-3xl font-semibold tracking-tight tabular-nums">
                  {format(card.from)}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
                {t.pricing.teaser.cta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10 flex justify-center">
        <CtaButton size="lg" href="/pricing">
          {t.pricing.teaser.cta}
          <ArrowRight className="size-4" />
        </CtaButton>
      </Reveal>
    </Section>
  );
}
