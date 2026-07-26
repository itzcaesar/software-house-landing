"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import {
  ArrowRight,
  Eye,
  Gem,
  Handshake,
  Target,
  Telescope,
  Zap,
} from "lucide-react";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading, Eyebrow } from "@/components/common/section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { AuroraBackground, GridBackdrop } from "@/components/common/backgrounds";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const AVATAR_GRADIENTS = [
  "from-blue-500 to-indigo-500",
  "from-sky-400 to-cyan-500",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

/* ---------- Hero: word-stagger headline + manifesto marquee ---------- */

export function AboutHero() {
  const t = useDict();
  const reduce = useReducedMotion();

  const word = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 22,
      filter: reduce ? "blur(0px)" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-6 sm:pt-44">
      <AuroraBackground />
      <GridBackdrop />
      {/* ambient orbs */}
      <div
        aria-hidden
        className="absolute top-36 left-[10%] -z-10 size-44 animate-float-slow rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[8%] bottom-16 -z-10 size-56 animate-float-slow rounded-full bg-brand-2/10 blur-3xl [animation-delay:2.5s]"
      />

      <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={word}>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {t.about.heroLead.split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block whitespace-pre">
                {w}{" "}
              </motion.span>
            ))}
            <motion.span variants={word} className="inline-block">
              <span className="text-gradient-brand animate-shimmer bg-[length:200%_auto]">
                {t.about.heroHighlight}
              </span>
              {t.about.heroTrail}
            </motion.span>
          </h1>

          <motion.p
            variants={word}
            className="max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl"
          >
            {t.about.heroSubtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* manifesto marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative mt-16 w-full overflow-hidden border-y border-border/60 bg-secondary/20 py-3.5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...t.about.marquee, ...t.about.marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-xs tracking-[0.22em] text-muted-foreground uppercase"
            >
              {m}
              <span aria-hidden className="text-brand">
                ✦
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Story: narrative rail + outlined year + mission/vision ---------- */

export function AboutStory() {
  const t = useDict();

  return (
    <Section className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={t.about.storyEyebrow}
            title={t.about.storyTitle}
          />
          <Reveal delay={0.15}>
            <p
              aria-hidden
              className="text-outline mt-10 hidden text-[7.5rem] leading-none font-bold tracking-tight select-none lg:block"
            >
              2026
            </p>
          </Reveal>
        </div>

        <div className="relative flex flex-col gap-10">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-brand via-border to-transparent"
          />
          {t.about.storyParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative pl-9">
              <span
                aria-hidden
                className="absolute top-1 left-0 size-[11px] rounded-full border-2 border-background bg-brand"
              />
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brand uppercase">
                {t.about.storyLabels[i]}
              </p>
              <p className="mt-2.5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* mission / vision */}
      <Stagger className="mt-16 grid gap-5 sm:grid-cols-2">
        {[
          { icon: Target, title: t.about.missionTitle, text: t.about.missionText },
          { icon: Telescope, title: t.about.visionTitle, text: t.about.visionText },
        ].map(({ icon: Icon, title, text }, i) => (
          <StaggerItem key={i} className="h-full">
            <TiltCard maxTilt={4}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-brand/40 via-border/60 to-transparent p-px">
                <div className="relative h-full overflow-hidden rounded-2xl bg-card p-7 sm:p-8">
                  <Icon
                    aria-hidden
                    className="absolute -right-7 -bottom-7 size-36 text-brand opacity-[0.05]"
                  />
                  <span className="inline-grid size-11 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                    {text}
                  </p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ---------- Values: animated bento ---------- */

const VALUE_TILES = [
  { icon: Gem, span: "md:col-span-2", featured: true },
  { icon: Zap, span: "md:col-span-1" },
  { icon: Eye, span: "md:col-span-1" },
  { icon: Handshake, span: "md:col-span-2" },
];

export function AboutValues() {
  const t = useDict();

  return (
    <Section className="py-14 sm:py-20">
      <SectionHeading
        eyebrow={t.about.valuesEyebrow}
        title={t.about.valuesTitle}
        description={t.about.valuesDescription}
      />
      <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {t.about.values.map((value, i) => {
          const tile = VALUE_TILES[i % VALUE_TILES.length];
          const Icon = tile.icon;
          return (
            <StaggerItem key={i} className={cn("h-full", tile.span)}>
              <TiltCard>
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-brand/40",
                    tile.featured ? "p-7 shadow-soft sm:p-8" : "p-6",
                  )}
                >
                  {/* hover hairline */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-2 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                  {/* gradient sheen */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* per-tile flourish */}
                  {i === 0 && (
                    <>
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-dots opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                      />
                      <Icon
                        aria-hidden
                        className="absolute -right-7 -bottom-7 size-36 text-brand opacity-[0.05] transition-all duration-500 group-hover:rotate-6 group-hover:opacity-[0.09]"
                      />
                      <span
                        aria-hidden
                        className="absolute top-8 right-12 size-1.5 animate-float-slow rounded-full bg-brand/50"
                      />
                      <span
                        aria-hidden
                        className="absolute right-24 bottom-10 size-1 animate-float-slow rounded-full bg-brand-2/60 [animation-delay:2s]"
                      />
                    </>
                  )}
                  {i === 1 && (
                    <span
                      aria-hidden
                      className="absolute inset-x-6 bottom-5 h-px overflow-hidden bg-border"
                    >
                      <span className="absolute h-full w-16 animate-rail bg-gradient-to-r from-transparent via-brand to-transparent" />
                    </span>
                  )}
                  {i === 3 && (
                    <Icon
                      aria-hidden
                      className="absolute -right-6 -bottom-6 size-28 text-brand opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.09]"
                    />
                  )}

                  <span className="relative inline-grid size-10 shrink-0 place-items-center self-start rounded-lg bg-brand/10 text-brand ring-1 ring-brand/15 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    {/* transparency tile: pulsing ring behind the eye */}
                    {i === 2 && (
                      <span
                        aria-hidden
                        className="absolute inset-0 animate-pulse-ring rounded-lg bg-brand/40"
                      />
                    )}
                    <Icon className="relative size-4.5" />
                  </span>
                  <h3
                    className={cn(
                      "relative mt-4 font-semibold tracking-tight",
                      tile.featured && "text-lg",
                    )}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-2 text-sm leading-relaxed text-muted-foreground text-pretty",
                      tile.featured && "max-w-md sm:text-base",
                    )}
                  >
                    {value.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

/* ---------- Roadmap: scroll-linked rail ---------- */

export function AboutRoadmap() {
  const t = useDict();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <Section className="py-14 sm:py-20">
      <SectionHeading
        eyebrow={t.about.roadmapEyebrow}
        title={t.about.roadmapTitle}
        description={t.about.roadmapDescription}
      />
      <div ref={railRef} className="relative mx-auto mt-12 max-w-2xl">
        {/* rail base + scroll-linked fill */}
        <div aria-hidden className="absolute top-4 bottom-4 left-[13px] w-px bg-border" />
        <motion.div
          aria-hidden
          style={{ scaleY: fill }}
          className="absolute top-4 bottom-4 left-[13px] w-px origin-top bg-gradient-to-b from-brand via-brand to-brand-2 shadow-[0_0_12px_color-mix(in_oklch,var(--brand)_60%,transparent)]"
        />
        <Stagger className="flex flex-col gap-4">
          {t.about.roadmap.map((item, i) => (
            <StaggerItem key={i} className="relative pl-10">
              <span
                aria-hidden
                className={cn(
                  "absolute top-5 left-1.5 grid size-[15px] place-items-center rounded-full border-2 border-background",
                  i === 0 ? "bg-brand" : "bg-border",
                )}
              >
                {i === 0 && (
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand" />
                )}
              </span>
              <div
                className={cn(
                  "group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-soft",
                  i === 0 && "border-brand/25 shadow-soft",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      i === 0
                        ? "bg-brand/10 text-brand ring-1 ring-brand/20"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {item.status}
                  </span>
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-2.5 font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/* ---------- Team: two founders ---------- */

export function AboutTeam() {
  const t = useDict();

  return (
    <Section className="py-14 sm:py-20">
      <SectionHeading
        eyebrow={t.about.teamEyebrow}
        title={t.about.teamTitle}
        description={t.about.teamDescription}
      />
      <Stagger className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {t.about.team.map((member, i) => (
          <StaggerItem key={i} className="h-full">
            <TiltCard maxTilt={4}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-colors duration-300 hover:border-brand/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand/[0.06] to-transparent"
                />
                {/* rotating conic ring avatar */}
                <div className="relative mx-auto size-24">
                  <div
                    aria-hidden
                    className="absolute -inset-1 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--brand),var(--brand-2),transparent_55%,var(--brand))] opacity-70 blur-[3px]"
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "relative grid size-24 place-items-center rounded-full bg-gradient-to-br text-2xl font-semibold text-white ring-4 ring-card",
                      AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    )}
                  >
                    {initials(member.name)}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-1 font-mono text-xs font-medium tracking-[0.16em] text-brand uppercase">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {member.bio}
                </p>
                <ul className="mt-5 flex flex-wrap justify-center gap-1.5">
                  {member.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ---------- CTA ---------- */

export function AboutCta() {
  const t = useDict();

  return (
    <Section className="py-14 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-3 via-brand to-brand-2 p-10 text-center text-white sm:p-14">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-20 mix-blend-overlay" />
          <div
            aria-hidden
            className="absolute -top-10 -left-10 size-48 animate-float-slow rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-12 -bottom-12 size-56 animate-float-slow rounded-full bg-white/10 blur-3xl [animation-delay:2s]"
          />
          <h2 className="relative text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t.about.ctaTitle}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-white/85">
            {t.about.ctaDesc}
          </p>
          <div className="relative mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-brand-3 shadow-elevated transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              {t.about.ctaButton}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
