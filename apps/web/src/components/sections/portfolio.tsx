"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectMeta, techColor } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const t = useDict();

  return (
    <Section id="portfolio">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
          className="sm:max-w-xl"
        />
        <Button
          variant="outline"
          nativeButton={false}
          className="hidden h-10 rounded-full px-5 sm:inline-flex"
          render={
            <a href="#contact">
              {t.portfolio.cta}
              <ArrowUpRight className="size-4" />
            </a>
          }
        />
      </div>

      <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectMeta.map((project, i) => {
          const copy = t.portfolio.projects[i];
          return (
            <StaggerItem key={project.title} className="h-full">
              <TiltCard maxTilt={4}>
                <Link href={`/work/${project.slug}`} className="block h-full">
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:border-brand/40 hover:shadow-elevated">
                {/* placeholder cover */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-dots opacity-30 mix-blend-overlay" aria-hidden />
                  {/* mock window */}
                  <div className="absolute inset-x-6 top-8 bottom-0 rounded-t-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex gap-1" aria-hidden>
                      <span className="size-1.5 rounded-full bg-white/60" />
                      <span className="size-1.5 rounded-full bg-white/60" />
                      <span className="size-1.5 rounded-full bg-white/60" />
                    </div>
                    <div className="mt-3 space-y-2" aria-hidden>
                      <div className="h-2 w-2/3 rounded-full bg-white/50" />
                      <div className="h-2 w-1/2 rounded-full bg-white/35" />
                      <div className="mt-3 h-10 w-full rounded-lg bg-white/25" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-black/25 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {copy.metric}
                  </span>
                </div>

                {/* meta */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium tracking-wide text-brand uppercase">
                      {copy.category}
                    </p>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {copy.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="size-1.5 shrink-0 rounded-full"
                          style={{ background: techColor(tag) }}
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                </article>
                </Link>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
