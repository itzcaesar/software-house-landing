"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Home } from "lucide-react";
import { useDict } from "@/lib/i18n";
import { AuroraBackground, GridBackdrop } from "@/components/common/backgrounds";
import { CtaButton } from "@/components/ui/cta-button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NotFound() {
  const t = useDict();
  const reduce = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <AuroraBackground />
      <GridBackdrop />
      <div
        aria-hidden
        className="absolute top-1/4 left-[12%] -z-10 size-44 animate-float-slow rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[10%] bottom-1/4 -z-10 size-52 animate-float-slow rounded-full bg-brand-2/10 blur-3xl [animation-delay:2s]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={item}
          className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs text-muted-foreground"
        >
          {t.notFound.quip}
        </motion.p>

        <motion.p
          variants={item}
          aria-hidden
          className="text-gradient-brand animate-shimmer mt-6 bg-[length:200%_auto] text-[7rem] leading-none font-bold tracking-tight select-none sm:text-[10rem]"
        >
          404
        </motion.p>

        <motion.h1 variants={item} className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.notFound.title}
        </motion.h1>
        <motion.p variants={item} className="mt-4 max-w-md text-muted-foreground text-pretty">
          {t.notFound.description}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <CtaButton size="md" href="/">
            <Home className="size-4" />
            {t.notFound.ctaHome}
          </CtaButton>
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
          >
            {t.notFound.ctaContact}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
