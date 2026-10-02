"use client";

import Link from "next/link";
import { ArrowRight, Wrench, LayoutTemplate, ShieldCheck } from "lucide-react";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/common/section";
import { Stagger, StaggerItem } from "@/components/common/reveal";

// Order matches `pricing.cards`. Only custom projects are live today.
const cardMeta = [
  { icon: Wrench, live: true },
  { icon: LayoutTemplate, live: false },
  { icon: ShieldCheck, live: false },
];

/** "Dua cara bekerja sama": custom project vs ready-made template, plus care plan. */
export function Pricing() {
  const t = useDict();

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow={t.pricing.eyebrow}
        title={t.pricing.title}
        description={t.pricing.description}
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cardMeta.map(({ icon: Icon, live }, i) => {
          const card = t.pricing.cards[i];
          return (
            <StaggerItem key={i} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border bg-card p-8 shadow-soft",
                  live ? "border-brand/40 shadow-elevated" : "border-border",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-medium",
                      live ? "bg-brand/10 text-brand" : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {live ? t.status.live : t.status.soon}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {card.description}
                </p>
                {live && (
                  <Link href="/jasa-pembuatan-website" className="mt-3 text-sm font-medium text-brand hover:underline">
                    {t.pricing.customLink}
                  </Link>
                )}
                {card.price && (
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-xs tracking-wide text-muted-foreground uppercase">
                      {t.pricing.fromLabel}
                    </span>
                    <span className="text-2xl font-semibold tracking-tight">{card.price}</span>
                  </p>
                )}
                <a
                  href={waLink(live ? t.wa.consult : `${t.wa.waitlist} ${card.title}`)}
                  data-track={live ? "wa_click" : "waitlist_click"}
                  data-track-label={live ? undefined : card.title}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-brand"
                >
                  {card.cta}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground text-pretty">
        {t.pricing.note}
      </p>
    </Section>
  );
}
