"use client";

import { benefitMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";

export function WhyUs() {
  const t = useDict();

  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        description={t.why.description}
      />

      {/* benefits */}
      <Stagger className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {benefitMeta.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <StaggerItem key={i} className="h-full">
              <TiltCard>
                <div className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-300 hover:border-brand/40">
                  {/* hover hairline */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-2 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="inline-grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{t.why.benefits[i].title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {t.why.benefits[i].description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
