"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, LayoutGrid, MessageCircle } from "lucide-react";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { AuroraBackground, GridBackdrop } from "@/components/common/backgrounds";
import { HeroShowcase } from "@/components/sections/hero-showcase";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Hero() {
  const t = useDict();
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  const word = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 18,
      filter: reduce ? "blur(0px)" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: EASE },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
      <AuroraBackground />
      <GridBackdrop />
      {/* ambient orbs */}
      <div
        aria-hidden
        className="absolute top-40 left-[8%] -z-10 size-44 animate-float-slow rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-64 right-[6%] -z-10 size-56 animate-float-slow rounded-full bg-brand-2/10 blur-3xl [animation-delay:2.5s]"
      />

      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.a
            variants={item}
            href="#niche"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 py-1.5 pr-3 pl-1.5 text-sm text-muted-foreground shadow-soft transition-colors hover:text-foreground"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-2.5 py-0.5 text-xs font-semibold text-white">
              <Sparkles className="size-3" />
              {t.hero.badgeNew}
            </span>
            {t.hero.badgeText}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
            className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            {t.hero.leadingText.split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block whitespace-pre">
                {w}{" "}
              </motion.span>
            ))}
            <motion.span variants={word} className="inline-block">
              <span className="text-gradient-brand animate-shimmer bg-[length:200%_auto]">
                {t.hero.highlight}
              </span>
              {t.hero.trailingText}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <CtaButton size="lg" href={waLink(t.wa.consult)} className="w-full sm:w-auto">
              <MessageCircle className="size-4" />
              {t.hero.primaryCta}
            </CtaButton>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 w-full rounded-full px-6 text-[0.95rem] sm:w-auto"
              render={
                <a href="#niche">
                  <LayoutGrid className="size-4" />
                  {t.hero.secondaryCta}
                </a>
              }
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        className="mx-auto mt-12 w-full max-w-6xl px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-8"
      >
        <HeroShowcase />
      </motion.div>
    </section>
  );
}
