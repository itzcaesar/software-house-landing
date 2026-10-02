"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Check,
  CircleAlert,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Minus,
  Monitor,
  MousePointerClick,
  Plus,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import { nicheMeta, nicheSamplePrices, type NichePreview } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { CtaButton } from "@/components/ui/cta-button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Brand-colour swatches for the mock. `null` keeps the site's own brand colour.
const SWATCHES: (string | null)[] = [
  null,
  "oklch(0.62 0.16 150)",
  "oklch(0.68 0.17 50)",
  "oklch(0.56 0.2 300)",
  "oklch(0.63 0.2 0)",
];

/** Re-points the brand tokens for the mock subtree only (pure CSS, no re-render cost). */
function swatchStyle(c: string | null): CSSProperties {
  if (!c) return {};
  return {
    "--color-brand": c,
    "--color-brand-2": `color-mix(in oklch, ${c} 70%, white)`,
    "--color-brand-3": `color-mix(in oklch, ${c} 75%, black)`,
  } as CSSProperties;
}

const IDR = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const rupiah = (n: number) => IDR.format(n);

// Horizontal, swipeable chip row on mobile; wraps on desktop.
const chipRow =
  "-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden";

/**
 * Niche picker: visitor picks a family + niche, types a business name, picks
 * a brand colour and device, and can click around inside an illustrative mock
 * site. The waitlist CTA carries the choice into WhatsApp. Every family is
 * "Segera hadir".
 */
export function Niches() {
  const t = useDict();
  const reduce = useReducedMotion();
  const [fi, setFi] = useState(0);
  const [ni, setNi] = useState(0);
  const [business, setBusiness] = useState("");
  const [swatch, setSwatch] = useState(0);
  const [mobile, setMobile] = useState(false);

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

      {/* Mobile order: family chips → preview → rest. Desktop: controls left, sticky preview right. */}
      <Reveal className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-10">
        <fieldset className="lg:col-start-1 lg:row-start-1">
          <legend className="text-sm font-medium">{t.niches.pickLabel}</legend>
          <div className={cn("mt-3", chipRow)}>
            {nicheMeta.map(({ icon: Icon }, i) => (
              <button
                key={i}
                type="button"
                aria-pressed={i === fi}
                onClick={() => pickFamily(i)}
                className={cn(
                  "inline-flex shrink-0 snap-start items-center gap-2 rounded-full border px-3.5 py-2 text-sm whitespace-nowrap transition-colors duration-200 active:scale-95",
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

        {/* live mock — illustrative, but clickable */}
        <div className="lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MousePointerClick className="size-3.5 text-brand" />
              {t.niches.ui.tryHint}
            </p>
            <div className="hidden rounded-full border border-border bg-card p-0.5 text-xs sm:inline-flex">
              {[
                { on: false, icon: Monitor, label: t.niches.ui.desktop },
                { on: true, icon: Smartphone, label: t.niches.ui.mobile },
              ].map(({ on, icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={mobile === on}
                  onClick={() => setMobile(on)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors",
                    mobile === on ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="size-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div
            role="group"
            aria-label={t.niches.previewLabel}
            style={swatchStyle(SWATCHES[swatch])}
            className={cn(
              "mx-auto overflow-hidden border border-border bg-card shadow-elevated transition-[max-width,border-radius] duration-300",
              mobile ? "max-w-[340px] rounded-[2rem] border-4" : "max-w-full rounded-2xl",
            )}
          >
            {mobile ? (
              <div className="flex justify-center pt-2" aria-hidden>
                <span className="h-1.5 w-16 rounded-full bg-border" />
              </div>
            ) : (
              <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2.5" aria-hidden>
                <span className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span className="flex-1 truncate rounded-md bg-background px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
                  {slug(name) || "bisnisanda"}.com
                </span>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-sm font-bold text-white">
                  {name.charAt(0).toUpperCase()}
                </span>
                <span className="truncate font-semibold">{name}</span>
              </span>
              <span className="shrink-0 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-white">
                {family.action}
              </span>
            </div>
            <p className="px-4 pt-2 text-sm text-muted-foreground sm:px-5">{family.tagline}</p>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={fi}
                initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="p-4 sm:p-5"
              >
                {/* keyed by family: each preview's local state resets on switch */}
                <Preview
                  kind={nicheMeta[fi].preview}
                  samples={family.samples}
                  action={family.action}
                  niche={niche}
                  compact={mobile}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5" />
            {t.niches.previewLabel}
          </p>
        </div>

        <div className="space-y-7 lg:col-start-1 lg:row-start-2">
          <fieldset>
            <legend className="text-sm font-medium">{t.niches.nicheLabel}</legend>
            <div className={cn("mt-3", chipRow)}>
              {family.items.map((item, i) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={i === ni}
                  onClick={() => setNi(i)}
                  className={cn(
                    "shrink-0 snap-start rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
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

          <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
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
                className="mt-3 h-11 w-full rounded-xl border border-border bg-card px-4 text-base shadow-soft outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
              />
            </div>
            <fieldset>
              <legend className="text-sm font-medium">{t.niches.ui.colorLabel}</legend>
              <div className="mt-3 flex h-11 items-center gap-2.5">
                {SWATCHES.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={i === swatch}
                    aria-label={t.niches.ui.colors[i]}
                    title={t.niches.ui.colors[i]}
                    onClick={() => setSwatch(i)}
                    className={cn(
                      "size-8 rounded-full ring-offset-2 ring-offset-background transition-transform active:scale-90 sm:size-7",
                      i === swatch ? "ring-2 ring-foreground/70" : "ring-1 ring-border",
                    )}
                    style={{ background: c ?? "var(--brand)" }}
                  />
                ))}
              </div>
            </fieldset>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">{t.niches.featuresLabel}</p>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {t.status.soon}
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {family.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <CtaButton href={waLink(waText)} className="mt-5 w-full" data-track="waitlist_click" data-track-label={niche}>
              {t.niches.cta}: {niche}
              <ArrowRight className="size-4" />
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24);
}

type PreviewProps = {
  kind: NichePreview;
  samples: readonly string[];
  action: string;
  niche: string;
  compact: boolean;
};

const card = "rounded-xl border border-border bg-background/60";
// Shared look for clickable bits inside the mock: visible focus, tap feedback.
const tap = "transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50";

/** Toggle helper for "select many" previews. */
function toggle<T>(list: T[], v: T): T[] {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

function Preview(props: PreviewProps) {
  switch (props.kind) {
    case "company":
      return <CompanyPreview {...props} />;
    case "store":
      return <StorePreview {...props} />;
    case "topup":
      return <TopupPreview {...props} />;
    case "booking":
      return <BookingPreview {...props} />;
    case "learning":
      return <LearningPreview {...props} />;
    case "marketplace":
      return <MarketplacePreview {...props} />;
    case "ai":
      return <AiPreview {...props} />;
    case "pos":
      return <PosPreview {...props} />;
    case "hosting":
      return <HostingPreview {...props} />;
  }
}

function CompanyPreview({ samples, niche, compact }: PreviewProps) {
  const ui = useDict().niches.ui;
  const [pick, setPick] = useState(0);
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-gradient-to-br from-brand/15 to-brand-2/10 p-4">
        <p className="text-sm font-semibold">{niche}</p>
        <p className="mt-1 text-xs text-muted-foreground">{samples[pick]}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-medium text-white">
          <MessageCircle className="size-3" /> WhatsApp
        </span>
      </div>
      <div className={cn("grid gap-2", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3")}>
        {samples.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-pressed={pick === i}
            onClick={() => setPick(i)}
            className={cn(card, tap, "p-3 text-left", pick === i && "border-brand ring-1 ring-brand/40")}
          >
            <span className={cn("block size-6 rounded-md", pick === i ? "bg-brand" : "bg-brand/15")} />
            <span className="mt-2 block text-xs font-medium">{s}</span>
          </button>
        ))}
      </div>
      <div className={cn(card, "flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground")}>
        <MapPin className="size-3.5 text-brand" /> {ui.office}
      </div>
    </div>
  );
}

function StorePreview({ samples, compact }: PreviewProps) {
  const ui = useDict().niches.ui;
  const prices = nicheSamplePrices.store ?? [];
  const [cart, setCart] = useState<Record<number, number>>({ 0: 1 });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((sum, [i, q]) => sum + prices[+i] * q, 0);
  const shown = samples.slice(0, compact ? 4 : 6);
  return (
    <div className="space-y-3">
      <div className={cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3")}>
        {shown.map((s, i) => (
          <div key={s} className={cn(card, "p-2")}>
            <div
              className={cn(
                "aspect-[4/3] rounded-lg bg-gradient-to-br",
                i % 3 === 0 ? "from-brand/30 to-brand-2/10" : i % 3 === 1 ? "from-brand-2/30 to-brand/10" : "from-brand-3/30 to-brand/5",
              )}
            />
            <p className="mt-1.5 truncate text-[11px] font-medium">{s}</p>
            <div className="mt-1 flex items-center justify-between gap-1">
              <span className="text-[10px] text-muted-foreground tabular-nums">{rupiah(prices[i])}</span>
              <button
                type="button"
                aria-label={`${ui.add} ${s}`}
                onClick={() => setCart((c) => ({ ...c, [i]: (c[i] ?? 0) + 1 }))}
                className={cn(tap, "grid size-7 place-items-center rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white")}
              >
                <Plus className="size-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-brand px-3.5 py-2.5 text-xs font-medium text-white">
        <span className="inline-flex items-center gap-2">
          <ShoppingCart className="size-3.5" /> {ui.cart} ·{" "}
          <motion.span key={count} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="inline-block tabular-nums">
            {count}
          </motion.span>
        </span>
        <span className="tabular-nums" aria-live="polite">
          {rupiah(total)}
        </span>
      </div>
    </div>
  );
}

function TopupPreview({ samples, action }: PreviewProps) {
  const ui = useDict().niches.ui;
  const prices = nicheSamplePrices.topup ?? [];
  const [product, setProduct] = useState(0);
  const [amount, setAmount] = useState(1);
  const [method, setMethod] = useState(0);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {samples.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-pressed={product === i}
            onClick={() => setProduct(i)}
            className={cn(
              tap,
              "rounded-full border px-2.5 py-1.5 text-[11px] font-medium",
              product === i ? "border-brand bg-brand/10 text-brand" : "border-border text-muted-foreground",
            )}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="text-[11px] text-muted-foreground">{ui.choose}</p>
      <div className="grid grid-cols-2 gap-2">
        {prices.map((p, i) => (
          <button
            key={p}
            type="button"
            aria-pressed={amount === i}
            onClick={() => setAmount(i)}
            className={cn(card, tap, "px-3 py-2.5 text-left text-xs font-semibold tabular-nums", amount === i && "border-brand ring-1 ring-brand/40")}
          >
            {rupiah(p)}
          </button>
        ))}
      </div>
      <div className={cn(card, "flex flex-wrap items-center gap-1.5 px-3 py-2 text-[11px]")}>
        <span className="text-muted-foreground">{ui.payWith}</span>
        {ui.payMethods.map((m, i) => (
          <button
            key={m}
            type="button"
            aria-pressed={method === i}
            onClick={() => setMethod(i)}
            className={cn(tap, "rounded-md px-2 py-1 font-medium", method === i ? "bg-brand text-white" : "bg-secondary")}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-brand px-3.5 py-2.5 text-xs font-medium text-white">
        <span className="truncate">
          {samples[product]} · {rupiah(prices[amount])}
        </span>
        <span>{action}</span>
      </div>
    </div>
  );
}

function BookingPreview({ samples, niche, action }: PreviewProps) {
  const ui = useDict().niches.ui;
  const booked = [2, 5, 11];
  const slots = ["09.00", "10.30", "13.00", "15.30"];
  const [day, setDay] = useState(8);
  const [slot, setSlot] = useState(1);
  const [staff, setStaff] = useState(0);
  return (
    <div className="space-y-3">
      <p className="text-[11px] text-muted-foreground">
        {ui.pickDate} · <span className="font-medium text-foreground">{niche}</span>
      </p>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {ui.days.map((d) => (
          <span key={d} className="text-muted-foreground">
            {d}
          </span>
        ))}
        {Array.from({ length: 14 }).map((_, i) => {
          const full = booked.includes(i);
          return (
            <button
              key={i}
              type="button"
              disabled={full}
              aria-pressed={day === i}
              onClick={() => setDay(i)}
              className={cn(
                tap,
                "grid aspect-square min-h-7 place-items-center rounded-md tabular-nums",
                day === i
                  ? "bg-brand font-semibold text-white"
                  : full
                    ? "cursor-not-allowed bg-muted text-muted-foreground/50 line-through"
                    : "bg-secondary hover:bg-brand/15",
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {slots.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-pressed={slot === i}
            onClick={() => setSlot(i)}
            className={cn(
              tap,
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 font-mono text-[10px]",
              slot === i ? "border-brand bg-brand/10 text-brand" : "border-border text-muted-foreground",
            )}
          >
            <Clock className="size-3" /> {s}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-muted-foreground">{ui.pickStaff}</span>
        {samples.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-pressed={staff === i}
            onClick={() => setStaff(i)}
            className={cn(tap, "inline-flex items-center gap-1 rounded-full px-2.5 py-1", staff === i ? "bg-brand text-white" : "bg-secondary")}
          >
            <UserRound className="size-3" /> {s}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 rounded-xl bg-brand px-3.5 py-2.5 text-xs font-medium text-white">
        <span className="truncate tabular-nums">
          {day + 1} · {slots[slot]} · {samples[staff]}
        </span>
        <span className="shrink-0">
          {action} · {ui.deposit} {rupiah(50_000)}
        </span>
      </div>
    </div>
  );
}

function LearningPreview({ samples, niche }: PreviewProps) {
  const ui = useDict().niches.ui;
  const [done, setDone] = useState<number[]>([0]);
  const pct = Math.round((done.length / samples.length) * 100);
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-brand/15 to-brand-2/10 p-3.5">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
          <GraduationCap className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{niche}</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-background/70">
              <span className="block h-full origin-left rounded-full bg-brand transition-transform duration-300" style={{ transform: `scaleX(${pct / 100})` }} />
            </span>
            <span className="text-[11px] tabular-nums text-muted-foreground" aria-live="polite">
              {pct}%
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {samples.map((s, i) => {
          const on = done.includes(i);
          return (
            <button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => setDone((d) => toggle(d, i))}
              className={cn(card, tap, "flex w-full items-center gap-3 px-3 py-2.5 text-left")}
            >
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-semibold transition-colors",
                  on ? "bg-brand text-white" : "bg-secondary text-muted-foreground",
                )}
              >
                {on ? <Check className="size-3.5" /> : i + 1}
              </span>
              <span className={cn("flex-1 truncate text-xs font-medium", on && "text-muted-foreground line-through")}>{s}</span>
              {on && <span className="text-[10px] text-brand">{ui.done}</span>}
            </button>
          );
        })}
      </div>
      <p className="text-center text-[11px] text-muted-foreground">
        {pct === 100 ? "🎓 " : ""}
        {ui.certificate}
      </p>
    </div>
  );
}

function MarketplacePreview({ samples }: PreviewProps) {
  const ui = useDict().niches.ui;
  const [follows, setFollows] = useState<number[]>([]);
  return (
    <div className="space-y-2">
      {samples.map((s, i) => {
        const on = follows.includes(i);
        return (
          <div key={s} className={cn(card, "flex items-center gap-3 p-3")}>
            <span
              className={cn(
                "size-10 shrink-0 rounded-lg bg-gradient-to-br",
                i === 0 ? "from-brand/35 to-brand-2/10" : i === 1 ? "from-brand-2/35 to-brand/10" : "from-brand-3/35 to-brand/5",
              )}
            />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="truncate">{s}</span>
                {i === 0 && <span className="rounded-full bg-brand/10 px-1.5 py-0.5 text-[9px] font-medium text-brand">{ui.featured}</span>}
              </span>
              <span className="mt-1 flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className={cn("size-3", k < 5 - i ? "fill-amber-400 text-amber-400" : "text-muted")} />
                ))}
              </span>
            </span>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => setFollows((f) => toggle(f, i))}
              className={cn(
                tap,
                "shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium",
                on ? "bg-secondary text-foreground" : "bg-brand text-white",
              )}
            >
              {on ? ui.following : ui.follow}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function AiPreview({ samples }: PreviewProps) {
  const ui = useDict().niches.ui;
  const reduce = useReducedMotion();
  const [q1, a1, q2] = samples;
  // Scripted conversation: each tapped question appends its question + answer.
  const [asked, setAsked] = useState<number[]>([0]);
  const thread: { me: boolean; node: ReactNode }[] = [];
  for (const q of asked) {
    thread.push({ me: true, node: q === 0 ? q1 : q2 });
    thread.push({
      me: false,
      node:
        q === 0 ? (
          a1
        ) : (
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <UserRound className="size-3" /> {ui.handover}
          </span>
        ),
    });
  }
  return (
    <div className="space-y-2.5 text-xs">
      <div className="max-h-56 space-y-2.5 overflow-y-auto" aria-live="polite">
        {thread.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: reduce ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: m.me ? 0 : 0.25 }}
            className={m.me ? "ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-white" : "flex max-w-[88%] items-start gap-2"}
          >
            {m.me ? (
              m.node
            ) : (
              <>
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                  <Bot className="size-3.5" />
                </span>
                <span className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2">{m.node}</span>
              </>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-border pt-2.5">
        {[q1, q2].map((q, i) => (
          <button
            key={q}
            type="button"
            onClick={() => setAsked((a) => [...a, i].slice(-4))}
            className={cn(tap, "rounded-full border border-brand/40 bg-brand/5 px-3 py-1.5 text-[11px] font-medium text-brand hover:bg-brand/10")}
          >
            {ui.ask}: {q}
          </button>
        ))}
      </div>
    </div>
  );
}

function PosPreview({ samples }: PreviewProps) {
  const ui = useDict().niches.ui;
  const prices = nicheSamplePrices.pos ?? [];
  const [qty, setQty] = useState([2, 1, 3]);
  const bump = (i: number, d: number) => setQty((q) => q.map((v, k) => (k === i ? Math.max(0, Math.min(9, v + d)) : v)));
  const total = samples.reduce((sum, _, i) => sum + (prices[i] ?? 0) * qty[i], 0);
  return (
    <div className="space-y-3">
      <div className={cn(card, "divide-y divide-border px-3")}>
        {samples.map((s, i) => (
          <div key={s} className="flex items-center justify-between gap-2 py-2 text-xs">
            <span className="min-w-0 flex-1 truncate">{s}</span>
            <span className="inline-flex items-center gap-1.5">
              <button type="button" aria-label={`${ui.less} ${s}`} onClick={() => bump(i, -1)} className={cn(tap, "grid size-6 place-items-center rounded-full bg-secondary")}>
                <Minus className="size-3" />
              </button>
              <span className="w-4 text-center tabular-nums">{qty[i]}</span>
              <button type="button" aria-label={`${ui.add} ${s}`} onClick={() => bump(i, 1)} className={cn(tap, "grid size-6 place-items-center rounded-full bg-brand/10 text-brand")}>
                <Plus className="size-3" />
              </button>
            </span>
            <span className="w-20 text-right tabular-nums text-muted-foreground">{rupiah(prices[i] * qty[i])}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-1 text-sm font-semibold">
        <span>{ui.total}</span>
        <span className="tabular-nums" aria-live="polite">
          {rupiah(total)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex min-w-0 flex-1 items-center gap-1.5 rounded-xl bg-amber-500/10 px-3 py-2 text-[11px] font-medium text-amber-600 dark:text-amber-400">
          <CircleAlert className="size-3.5 shrink-0" /> <span className="truncate">{ui.lowStock}: {samples[1]}</span>
        </span>
        <span className="rounded-xl bg-brand px-4 py-2 text-xs font-medium text-white">{ui.pay}</span>
      </div>
    </div>
  );
}

function HostingPreview({ samples, compact }: PreviewProps) {
  const ui = useDict().niches.ui;
  const prices = nicheSamplePrices.hosting ?? [];
  const [plan, setPlan] = useState(1);
  return (
    <div className={cn("grid gap-2", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3")}>
      {samples.map((s, i) => (
        <button
          key={s}
          type="button"
          aria-pressed={plan === i}
          onClick={() => setPlan(i)}
          className={cn(card, tap, "p-3 text-left", plan === i && "border-brand ring-1 ring-brand/40")}
        >
          <span className={cn("grid size-7 place-items-center rounded-lg", plan === i ? "bg-brand text-white" : "bg-brand/10 text-brand")}>
            <Server className="size-4" />
          </span>
          <span className="mt-2 block text-xs font-semibold">{s}</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground tabular-nums">
            {rupiah(prices[i])}
            {ui.perMonth}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" /> {plan === i ? ui.selected : ui.active}
          </span>
        </button>
      ))}
    </div>
  );
}
