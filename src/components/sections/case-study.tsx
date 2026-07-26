"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Eyebrow } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { GridBackdrop } from "@/components/common/backgrounds";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Case-study detail page body; `index` points into projectMeta / dict projects. */
export function CaseStudy({ index }: { index: number }) {
  const t = useDict();
  const reduce = useReducedMotion();

  const project = projectMeta[index];
  const copy = t.portfolio.projects[index];
  const prev = projectMeta[(index - 1 + projectMeta.length) % projectMeta.length];
  const next = projectMeta[(index + 1) % projectMeta.length];
  const cs = t.caseStudy;

  const narrative = [
    { label: cs.challengeLabel, body: copy.challenge },
    { label: cs.solutionLabel, body: copy.solution },
    { label: cs.outcomeLabel, body: copy.outcome },
  ];

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <article className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      <GridBackdrop />
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        {/* hero */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.div variants={item}>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" />
              {cs.backToWork}
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <Eyebrow>{cs.eyebrow}</Eyebrow>
            <span className="text-xs font-medium tracking-wide text-brand uppercase">
              {copy.category}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl"
          >
            {copy.description}
          </motion.p>
        </motion.div>

        {/* meta strip */}
        <Reveal delay={0.15} className="mt-10">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4">
            {[
              { dt: cs.resultLabel, dd: copy.metric, brand: true },
              { dt: cs.timelineLabel, dd: project.timeline },
              { dt: cs.yearLabel, dd: project.year },
              { dt: cs.stackLabel, dd: project.tags.join(" · ") },
            ].map(({ dt, dd, brand }, i) => (
              <div key={i} className="bg-card p-5">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {dt}
                </dt>
                <dd
                  className={`mt-1.5 text-sm font-semibold ${brand ? "text-brand" : "text-foreground"}`}
                >
                  {dd}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* cover */}
        <Reveal delay={0.2} className="mt-10">
          <TiltCard maxTilt={2.5}>
            <div
              className={`relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br shadow-elevated ${project.gradient}`}
            >
              <div className="absolute inset-0 bg-dots opacity-30 mix-blend-overlay" aria-hidden />
              <div className="absolute inset-x-8 top-10 bottom-0 rounded-t-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm sm:inset-x-16 sm:top-14 sm:p-6">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-white/60" />
                  <span className="size-2 rounded-full bg-white/60" />
                  <span className="size-2 rounded-full bg-white/60" />
                </div>
                <div className="mt-4 space-y-3" aria-hidden>
                  <div className="h-3 w-1/2 rounded-full bg-white/50" />
                  <div className="h-3 w-1/3 rounded-full bg-white/35" />
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-xl bg-white/25 sm:h-24" />
                    <div className="h-16 rounded-xl bg-white/20 sm:h-24" />
                    <div className="h-16 rounded-xl bg-white/25 sm:h-24" />
                  </div>
                  <div className="h-20 w-full rounded-xl bg-white/15 sm:h-28" />
                </div>
              </div>
              <span className="absolute top-4 right-4 rounded-full bg-black/25 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                {copy.metric}
              </span>
            </div>
          </TiltCard>
        </Reveal>

        {/* narrative rail */}
        <div className="relative mx-auto mt-16 flex max-w-3xl flex-col gap-12 sm:mt-20">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-brand via-border to-transparent"
          />
          {narrative.map(({ label, body }, i) => (
            <Reveal key={i} delay={i * 0.05} className="relative pl-9">
              <span
                aria-hidden
                className="absolute top-1 left-0 size-[11px] rounded-full border-2 border-background bg-brand"
              />
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brand uppercase">
                {label}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* prev / next */}
        <Reveal className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2">
          {[
            { meta: prev, label: cs.prevProject, dir: "prev" as const },
            { meta: next, label: cs.nextProject, dir: "next" as const },
          ].map(({ meta, label, dir }) => (
            <Link
              key={dir}
              href={`/work/${meta.slug}`}
              className={`group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-soft ${
                dir === "prev" ? "" : "sm:flex-row-reverse sm:text-right"
              }`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand`}
              >
                {dir === "prev" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
              </span>
              <span className={dir === "prev" ? "flex-1" : "flex-1"}>
                <span className="block font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {label}
                </span>
                <span className="mt-0.5 block font-semibold">{meta.title}</span>
              </span>
            </Link>
          ))}
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-3 via-brand to-brand-2 p-10 text-center text-white sm:p-12">
            <div aria-hidden className="absolute inset-0 bg-dots opacity-20 mix-blend-overlay" />
            <h2 className="relative text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {cs.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-sm text-pretty text-white/85 sm:text-base">
              {cs.ctaDesc}
            </p>
            <div className="relative mt-7">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-3 shadow-elevated transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                {cs.ctaButton}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
