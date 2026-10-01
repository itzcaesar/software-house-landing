"use client";

import { ArrowRight } from "lucide-react";
import { nicheMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { Section, SectionHeading } from "@/components/common/section";
import { Stagger, StaggerItem } from "@/components/common/reveal";

/** Niche grid: every family is "Segera hadir" with a WhatsApp waitlist CTA. */
export function Niches() {
  const t = useDict();

  return (
    <Section id="niche">
      <SectionHeading
        eyebrow={t.niches.eyebrow}
        title={t.niches.title}
        description={t.niches.description}
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nicheMeta.map(({ icon: Icon }, i) => {
          const family = t.niches.families[i];
          return (
            <StaggerItem key={family.name} className="h-full">
              <a
                href={waLink(`${t.wa.waitlist} ${family.name}`)}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-300 hover:border-brand/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-grid size-10 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {t.status.soon}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold">{family.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {family.items}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-brand">
                  {t.niches.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
