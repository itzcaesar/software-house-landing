"use client";

import { benefitMeta, statMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";

// Stats band on/off switch — flip to re-enable (markup stays below).
const SHOW_STATS = false;

export function WhyUs() {
  const t = useDict();

  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        description={t.why.description}
      />

      {/* stats band */}
      {SHOW_STATS && (
        <Reveal className="mt-14">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:grid-cols-4 sm:divide-y-0">
            {statMeta.map((s, i) => (
              <div key={i} className="p-6 text-center">
                <dt className="sr-only">{t.why.statLabels[i]}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-gradient-brand sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {t.why.statLabels[i]}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      {/* benefits */}
      <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
