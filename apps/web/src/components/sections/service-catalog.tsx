"use client";

import { ArrowRight } from "lucide-react";
import { serviceMeta, techStack } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { Eyebrow, Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { GridBackdrop } from "@/components/common/backgrounds";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

// Vary tile sizes for a bento rhythm (7 services tile a 3-col grid cleanly).
const spanPattern: Array<1 | 2> = [2, 1, 1, 2, 1, 1, 1];

/** /services: what custom projects cover, plus the tech stack. */
export function ServiceCatalog() {
  const t = useDict();
  const p = t.servicePage;

  const items: BentoItem[] = serviceMeta.map((s, i) => ({
    icon: s.icon,
    title: p.items[i].title,
    description: p.items[i].description,
    tags: s.tags,
    colSpan: spanPattern[i],
    featured: i === 0,
  }));

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-4 sm:pt-40">
        <GridBackdrop />
        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center lg:px-8">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{p.title}</h1>
          <p className="mt-5 text-base text-muted-foreground text-pretty sm:text-lg">{p.description}</p>
        </Reveal>
      </section>

      <Section className="pt-12 sm:pt-16 lg:pt-16">
        <Reveal>
          <BentoGrid items={items} />
        </Reveal>
      </Section>

      <Section bleed className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow={p.stackEyebrow} title={p.stackTitle} description={p.stackDescription} />
        </div>
        <div className="relative mt-10 w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap [animation-duration:60s]">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                aria-hidden={i >= techStack.length}
                className="flex items-center gap-10 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {tech}
                <span aria-hidden className="size-1 rounded-full bg-brand/60" />
              </span>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-16 w-full max-w-6xl px-6 lg:px-8">
          <a
            href={waLink(t.wa.consult)}
            className="group flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-r from-brand to-brand-2 p-6 text-white shadow-elevated transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{p.ctaTitle}</h2>
              <p className="mt-1 text-sm text-white/85 text-pretty">{p.ctaDesc}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              {p.ctaButton}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </Section>
    </>
  );
}
