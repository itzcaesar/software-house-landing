"use client";

import { ArrowRight } from "lucide-react";
import { audienceMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

// Three wide tiles keep 6 cards tiling a 3-col grid cleanly.
const spanPattern: Array<1 | 2> = [2, 1, 1, 2, 2, 1];

/** "Siapa yang cocok": audience cards with live / coming-soon status. */
export function Services() {
  const t = useDict();

  const items: BentoItem[] = audienceMeta.map((a, i) => {
    const copy = t.services.items[i];
    return {
      icon: a.icon,
      title: copy.title,
      description: copy.description,
      meta: a.live ? t.status.live : t.status.soon,
      colSpan: spanPattern[i],
      featured: a.live,
      href: a.live ? waLink(t.wa.consult) : "#niche",
      track: { name: "audience_click", label: copy.title },
    };
  });

  return (
    <Section id="untuk-siapa">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
      />

      <Reveal className="mt-14">
        <BentoGrid items={items} />
      </Reveal>

      <Reveal delay={0.1} className="mt-6">
        <a
          href={waLink(t.wa.consult)}
          data-track="wa_click"
          className="group flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-r from-brand to-brand-2 p-6 text-white shadow-elevated transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{t.services.ctaTitle}</h3>
            <p className="mt-1 text-sm text-white/85 text-pretty">{t.services.ctaDesc}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            {t.services.ctaButton}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
