"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Circle,
  Wallet,
  Users,
  Percent,
  LayoutDashboard,
  Store,
  Inbox,
  ShoppingBag,
  CalendarCheck,
  MessageCircle,
  FileText,
} from "lucide-react";
import { useDict } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Illustrative values only — the floating card labels the whole window "not client data".
const kpis = [
  { value: "Rp 128,4 jt", up: "+18%", icon: Wallet },
  { value: "24.918", up: "+9%", icon: Users },
  { value: "6,4%", up: "+2,1%", icon: Percent },
];

const bars = [38, 52, 44, 61, 55, 72, 64, 80, 71, 86, 78, 94];

const VIEWS = [
  { id: "site", icon: Store },
  { id: "inbox", icon: Inbox },
  { id: "dashboard", icon: LayoutDashboard },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

const INBOX_ICONS = [ShoppingBag, CalendarCheck, MessageCircle, FileText];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Hero visual: a mock business site that auto-cycles through three scenes
 * (storefront → incoming orders → owner dashboard). Cycling pauses while the
 * pointer is over the window and stops entirely under reduced motion.
 */
export function HeroShowcase() {
  const t = useDict();
  const s = t.showcase;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const [view, setView] = useState<ViewId>("site");

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (hovering.current) return;
      setView((v) => {
        const i = VIEWS.findIndex((w) => w.id === v);
        return VIEWS[(i + 1) % VIEWS.length].id;
      });
    }, 6000);
    return () => clearInterval(id);
    // re-arm after any change (manual or auto) so a click gets a full cycle
  }, [reduce, view]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const float = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div className="group/show relative mx-auto max-w-5xl">
      {/* spotlight behind the window */}
      <div
        aria-hidden
        className="absolute -inset-x-16 -top-16 bottom-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,var(--brand)_0%,transparent_70%)] opacity-20 blur-2xl dark:opacity-30"
      />

      {/* window */}
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
        className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated ring-1 ring-black/5 dark:ring-white/5"
      >
        {/* pointer spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover/show:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklch, var(--brand) 16%, transparent), transparent 70%)",
          }}
        />
        {/* top edge highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20"
        />

        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-amber-400/80" />
            <span className="size-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
            <Circle className="size-2 fill-emerald-500 text-emerald-500" />
            bisnisanda.com
          </div>
        </div>

        {/* view tabs */}
        <div
          role="tablist"
          aria-label={s.aria}
          className="relative z-30 flex items-center gap-1 border-b border-border bg-secondary/30 px-3 py-2"
        >
          {VIEWS.map((v) => {
            const Icon = v.icon;
            const active = v.id === view;
            return (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setView(v.id)}
                className={cn(
                  "relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="hero-tab"
                    aria-hidden
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-background shadow-soft ring-1 ring-border"
                  />
                )}
                <Icon className="relative size-3.5" />
                <span className="relative">{s.tabs[v.id]}</span>
              </button>
            );
          })}
        </div>

        {/* body */}
        <div className="relative min-h-[380px] p-4 sm:min-h-[360px] sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={view}
              role="tabpanel"
              initial={{ opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10, scale: reduce ? 1 : 0.99 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="h-full"
            >
              {view === "site" && <SiteView reduce={!!reduce} />}
              {view === "inbox" && <InboxView reduce={!!reduce} />}
              {view === "dashboard" && <DashboardView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* floating cards — anchored to the outer corners so they never cover content */}
      <motion.div
        {...float(0)}
        className="absolute -top-6 -left-4 z-30 hidden items-center gap-2.5 rounded-xl border border-border bg-card/90 glass px-3.5 py-2.5 shadow-elevated sm:flex lg:-left-8"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
          <CheckCircle2 className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">{s.liveTitle}</p>
          <p className="text-[11px] text-muted-foreground">{s.liveDesc}</p>
        </div>
      </motion.div>

      <motion.div
        {...float(1.5)}
        className="absolute -right-4 -bottom-6 z-30 hidden items-center gap-2.5 rounded-xl border border-border bg-card/90 glass px-3.5 py-2.5 shadow-elevated sm:flex lg:-right-8"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-brand">
          <Sparkles className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">{s.illoTitle}</p>
          <p className="text-[11px] text-muted-foreground">{s.illoDesc}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Site (storefront) ---------- */

function SiteView({ reduce }: { reduce: boolean }) {
  const s = useDict().showcase;
  return (
    <div className="relative flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-sm font-bold text-white">
            B
          </span>
          <span className="text-sm font-semibold">{s.siteName}</span>
        </span>
        <span className="hidden gap-4 text-xs text-muted-foreground sm:flex" aria-hidden>
          <span className="h-2 w-10 rounded-full bg-muted" />
          <span className="h-2 w-10 rounded-full bg-muted" />
          <span className="h-2 w-10 rounded-full bg-muted" />
        </span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-brand/15 via-brand-2/10 to-transparent p-5">
        <p className="text-lg font-semibold tracking-tight sm:text-xl">{s.siteTagline}</p>
        <div className="mt-3 space-y-1.5" aria-hidden>
          <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
          <div className="h-2 w-2/5 rounded-full bg-foreground/10" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="grid grid-cols-3 gap-3"
      >
        {s.products.map((p, i) => (
          <motion.div
            key={p}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
            }}
            className="rounded-xl border border-border bg-background/60 p-2.5"
          >
            <div
              className={cn(
                "aspect-[4/3] rounded-lg bg-gradient-to-br",
                i === 0 ? "from-brand/30 to-brand-2/10" : i === 1 ? "from-brand-2/30 to-brand/10" : "from-brand-3/30 to-brand/5",
              )}
            />
            <p className="mt-2 truncate text-xs font-medium">{p}</p>
            <span
              className={cn(
                "mt-2 inline-flex w-full justify-center rounded-full py-1 text-[11px] font-medium",
                i === 1 ? "bg-brand text-white" : "bg-brand/10 text-brand",
              )}
            >
              {s.order}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* floating WhatsApp bubble */}
      <motion.span
        initial={{ scale: reduce ? 1 : 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.7 }}
        className="absolute -right-1 -bottom-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-2 text-xs font-medium text-white shadow-elevated"
      >
        <MessageCircle className="size-3.5" />
        {s.chatWa}
      </motion.span>
    </div>
  );
}

/* ---------- Inbox (incoming orders, bookings, chats) ---------- */

function InboxView({ reduce }: { reduce: boolean }) {
  const s = useDict().showcase;
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-4 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          <Inbox className="size-4 text-brand" />
          {s.inboxTitle}
        </span>
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
      </div>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.55, delayChildren: 0.2 } } }}
        className="flex flex-col gap-2"
      >
        {s.inboxItems.map((item, i) => {
          const Icon = INBOX_ICONS[i % INBOX_ICONS.length];
          return (
            <motion.li
              key={item.title}
              variants={{
                hidden: { opacity: 0, x: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 },
                show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
              }}
              className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3.5 py-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{item.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{item.detail}</span>
              </span>
              <span className="size-2 shrink-0 rounded-full bg-brand" aria-hidden />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

/* ---------- Dashboard (owner overview) ---------- */

function DashboardView() {
  const s = useDict().showcase;
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-brand/30 sm:p-4"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="size-3.5 shrink-0 text-brand" />
                  <span className="truncate">{s.kpis[i]}</span>
                </span>
                <span className="hidden items-center gap-0.5 text-xs font-medium text-emerald-500 sm:inline-flex">
                  <TrendingUp className="size-3" />
                  {kpi.up}
                </span>
              </div>
              <div className="mt-1.5 text-base font-semibold tracking-tight tabular-nums sm:text-lg">
                {kpi.value}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-1 flex-col rounded-xl border border-border bg-background/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{s.growth}</p>
            <p className="text-xs text-muted-foreground">{s.period}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand ring-1 ring-brand/20">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            {s.live}
          </span>
        </div>
        <AreaChart />
        <div className="mt-3 flex items-end gap-1.5" aria-hidden>
          {bars.map((h, i) => (
            <div key={i} className="h-14 flex-1 overflow-hidden rounded-md bg-secondary/70">
              <div
                className="w-full rounded-md bg-gradient-to-t from-brand/70 to-brand-2 transition-[height] duration-500 hover:from-brand hover:to-brand-2"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AreaChart() {
  const line =
    "M0 70 C 30 60, 45 40, 75 44 S 120 30, 150 34 S 200 12, 230 20 S 275 8, 300 10";
  return (
    <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-3)" />
          <stop offset="50%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-2)" />
        </linearGradient>
      </defs>

      {/* gridlines */}
      {[22, 45, 68].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 4" />
      ))}

      <path d={`${line} L300 90 L0 90 Z`} fill="url(#hero-area)" />
      <path
        d={line}
        fill="none"
        stroke="url(#hero-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ strokeDasharray: 600, "--draw-length": "600" } as React.CSSProperties}
        className="animate-draw [filter:drop-shadow(0_0_6px_color-mix(in_oklch,var(--brand)_60%,transparent))]"
      />
      {/* end pulse */}
      <circle cx="300" cy="10" r="3" fill="var(--brand)" />
      <circle cx="300" cy="10" r="3" fill="var(--brand)" className="origin-center animate-ping [transform-box:fill-box]" />
    </svg>
  );
}
