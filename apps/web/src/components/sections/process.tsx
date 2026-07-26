"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { processMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Process() {
  const t = useDict();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const playheadTop = useTransform(fill, [0, 1], ["0%", "100%"]);
  const playheadOpacity = useTransform(fill, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  const steps = t.process.steps;
  const n = steps.length;

  // Light nodes up as the scroll-linked fill passes them.
  const [active, setActive] = useState(-1);
  useMotionValueEvent(fill, "change", (v) => {
    setActive(Math.min(n - 1, Math.floor(v * n + 0.5) - 1));
  });

  return (
    <Section id="process">
      <SectionHeading
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        description={t.process.description}
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
        {/* roadmap rail + scroll-linked fill */}
        <div
          aria-hidden
          className="absolute inset-y-2 left-5 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
        >
          <motion.div
            style={{ scaleY: fill }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-brand-3 via-brand to-brand-2"
          />
          {/* traveling glow playhead at the fill tip */}
          <motion.div
            style={{ top: playheadTop, opacity: reduce ? 0 : playheadOpacity }}
            className="absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_18px_5px_var(--brand)]"
          >
            <span className="absolute inset-0 rounded-full bg-brand animate-ping" />
          </motion.div>
        </div>

        <div className="space-y-6 lg:space-y-2">
          {processMeta.map((meta, i) => {
            const Icon = meta.icon;
            const step = steps[i];
            const left = i % 2 === 0;
            const on = i <= active;
            return (
              <div key={meta.step} className="relative pl-16 lg:pl-0">
                {/* milestone node — number until the fill reaches it, then the icon */}
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className={cn(
                    "absolute left-5 top-5 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full text-xs font-bold ring-4 ring-background transition-all duration-500 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2",
                    on
                      ? "scale-110 bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-white shadow-[0_0_22px_rgba(47,107,255,0.5)]"
                      : "bg-secondary text-muted-foreground",
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {on ? (
                      <motion.span
                        key="icon"
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        <Icon className="size-[1.15rem]" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="num"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {meta.step}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {on && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-brand/50 animate-pulse-ring"
                    />
                  )}
                </motion.span>

                {/* milestone card — slides in from its side, glows once reached */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: reduce ? 0 : left ? -28 : 28 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={cn("lg:w-[calc(50%-2.75rem)]", left ? "lg:mr-auto" : "lg:ml-auto")}
                >
                  <div
                    className={cn(
                      "group rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card hover:shadow-elevated",
                      on
                        ? "border-brand/40 bg-card shadow-elevated"
                        : "border-border bg-card/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-grid size-11 shrink-0 place-items-center rounded-xl ring-1 transition-all duration-500 group-hover:scale-110",
                          on
                            ? "bg-brand/15 text-brand ring-brand/30"
                            : "bg-brand/10 text-brand ring-brand/15",
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium tracking-wide text-brand uppercase">
                          {t.process.stepLabel} {meta.step}
                        </p>
                        <h3 className="text-base font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
