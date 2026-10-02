"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { nicheMeta, type NichePreview } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { CtaButton } from "@/components/ui/cta-button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Niche picker: visitor picks a family + niche and types a business name;
 * an illustrative mock site updates live and the waitlist CTA carries the
 * choice into WhatsApp. Every family is "Segera hadir".
 */
export function Niches() {
  const t = useDict();
  const reduce = useReducedMotion();
  const [fi, setFi] = useState(0);
  const [ni, setNi] = useState(0);
  const [business, setBusiness] = useState("");

  const family = t.niches.families[fi];
  const niche = family.items[ni] ?? family.items[0];
  const name = business.trim() || niche;
  const waText =
    `${t.wa.waitlist} ${family.name} (${niche}).` +
    (business.trim() ? ` ${t.niches.waBusiness} ${business.trim()}` : "");

  const pickFamily = (i: number) => {
    setFi(i);
    setNi(0);
    track("niche_pick", t.niches.families[i].name);
  };

  return (
    <Section id="niche">
      <SectionHeading
        eyebrow={t.niches.eyebrow}
        title={t.niches.title}
        description={t.niches.description}
      />

      <Reveal className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        {/* controls */}
        <div className="space-y-7">
          <fieldset>
            <legend className="text-sm font-medium">{t.niches.pickLabel}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {nicheMeta.map(({ icon: Icon }, i) => (
                <button
                  key={i}
                  type="button"
                  aria-pressed={i === fi}
                  onClick={() => pickFamily(i)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-all duration-200 active:scale-95",
                    i === fi
                      ? "border-brand bg-brand text-white shadow-[0_6px_20px_-6px_var(--brand)]"
                      : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {t.niches.families[i].name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium">{t.niches.nicheLabel}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {family.items.map((item, i) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={i === ni}
                  onClick={() => setNi(i)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    i === ni
                      ? "border-brand/50 bg-brand/10 text-brand"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="niche-business" className="text-sm font-medium">
              {t.niches.nameLabel}
            </label>
            <input
              id="niche-business"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              maxLength={40}
              autoComplete="organization"
              placeholder={t.niches.namePlaceholder}
              className="mt-3 h-11 w-full rounded-xl border border-border bg-card px-4 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">{t.niches.featuresLabel}</p>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {t.status.soon}
              </span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={fi}
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 space-y-2"
              >
                {family.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
            <CtaButton href={waLink(waText)} className="mt-5 w-full" data-track="waitlist_click" data-track-label={niche}>
              {t.niches.cta}: {niche}
              <ArrowRight className="size-4" />
            </CtaButton>
          </div>
        </div>

        {/* live mock — purely illustrative */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated" aria-hidden>
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </span>
              <span className="flex-1 truncate rounded-md bg-background px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
                {slug(name) || "bisnisanda"}.com
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 pt-5">
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-sm font-bold text-white">
                  {name.charAt(0).toUpperCase()}
                </span>
                <motion.span key={name} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} className="truncate font-semibold">
                  {name}
                </motion.span>
              </span>
              <span className="shrink-0 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-white">
                {family.action}
              </span>
            </div>
            <p className="px-5 pt-2 text-sm text-muted-foreground">{family.tagline}</p>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={fi}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="p-5"
              >
                <Preview kind={nicheMeta[fi].preview} action={family.action} />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5" />
            {t.niches.previewLabel}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24);
}

const bar = "h-2 rounded-full bg-muted";

/** Skeleton layouts per family type. Decorative only. */
function Preview({ kind, action }: { kind: NichePreview; action: string }) {
  if (kind === "hero")
    return (
      <div className="space-y-4">
        <div className="space-y-2 rounded-xl bg-gradient-to-br from-brand/15 to-brand-2/10 p-5">
          <div className="h-3 w-3/4 rounded-full bg-brand/40" />
          <div className="h-3 w-1/2 rounded-full bg-brand/25" />
          <div className="mt-3 h-6 w-24 rounded-full bg-brand" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-lg border border-border p-3">
              <div className="size-6 rounded-md bg-brand/15" />
              <div className={cn(bar, "w-4/5")} />
              <div className={cn(bar, "w-3/5")} />
            </div>
          ))}
        </div>
      </div>
    );

  if (kind === "grid")
    return (
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2 rounded-lg border border-border p-2">
            <div
              className={cn(
                "aspect-square rounded-md bg-gradient-to-br",
                i % 3 === 0 ? "from-brand/25 to-brand-2/10" : i % 3 === 1 ? "from-brand-2/25 to-brand/10" : "from-brand-3/25 to-brand/5",
              )}
            />
            <div className={cn(bar, "w-4/5")} />
            <div className="flex items-center justify-between">
              <div className="h-2 w-1/3 rounded-full bg-brand/30" />
              <span className="rounded-full bg-brand/10 px-1.5 text-[9px] font-medium text-brand">{action}</span>
            </div>
          </div>
        ))}
      </div>
    );

  if (kind === "calendar")
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-md",
                i === 9 ? "bg-brand" : [2, 5, 12, 16, 19].includes(i) ? "bg-brand/20" : "bg-muted",
              )}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["09:00", "10:30", "13:00", "15:30"].map((slot, i) => (
            <span
              key={slot}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-[11px]",
                i === 1 ? "border-brand bg-brand/10 text-brand" : "border-border text-muted-foreground",
              )}
            >
              {slot}
            </span>
          ))}
        </div>
      </div>
    );

  if (kind === "chat")
    return (
      <div className="space-y-3">
        <div className="ml-auto w-3/5 space-y-1.5 rounded-2xl rounded-br-sm bg-brand/15 p-3">
          <div className="h-2 w-full rounded-full bg-brand/40" />
          <div className="h-2 w-2/3 rounded-full bg-brand/30" />
        </div>
        <div className="w-4/5 space-y-1.5 rounded-2xl rounded-bl-sm bg-muted p-3">
          <div className="h-2 w-full rounded-full bg-foreground/10" />
          <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
          <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
        </div>
        <div className="flex gap-1 pl-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1.5 animate-pulse rounded-full bg-muted-foreground/50" style={{ animationDelay: `${i * 150}ms` }} />
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border p-1.5 pl-4">
          <div className={cn(bar, "flex-1")} />
          <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-medium text-white">{action}</span>
        </div>
      </div>
    );

  // list
  return (
    <div className="space-y-3">
      {[0.85, 0.55, 0.3].map((p, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
          <div className="size-9 shrink-0 rounded-lg bg-gradient-to-br from-brand/25 to-brand-2/10" />
          <div className="flex-1 space-y-2">
            <div className={cn(bar, i === 1 ? "w-1/2" : "w-2/3")} />
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-brand" style={{ width: `${p * 100}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
