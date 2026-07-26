"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  CheckCircle2,
  Gauge,
  Circle,
  DollarSign,
  Users,
  Percent,
  LayoutDashboard,
  Code2,
  Rocket,
  GitBranch,
  Loader2,
  FileCode2,
  Folder,
} from "lucide-react";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Revenue", value: "$128.4k", up: "+18%", icon: DollarSign },
  { label: "Active users", value: "24,918", up: "+9%", icon: Users },
  { label: "Conversion", value: "6.4%", up: "+2.1%", icon: Percent },
];

const bars = [38, 52, 44, 61, 55, 72, 64, 80, 71, 86, 78, 94];

const VIEWS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "code", label: "Code", icon: Code2 },
  { id: "deploy", label: "Deploy", icon: Rocket },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Hero visual: an abstract product window that auto-cycles through three
 * scenes (dashboard → editor → deploy pipeline). Cycling pauses while the
 * pointer is over the window and stops entirely under reduced motion.
 */
export function HeroShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const [view, setView] = useState<ViewId>("overview");

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
            app.craftbyte.studio
          </div>
        </div>

        {/* view tabs */}
        <div
          role="tablist"
          aria-label="Showcase views"
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
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
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
                <span className="relative">{v.label}</span>
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
              {view === "overview" && <OverviewView />}
              {view === "code" && <CodeView reduce={!!reduce} />}
              {view === "deploy" && <DeployView reduce={!!reduce} />}
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
          <p className="text-xs font-semibold">Deploy successful</p>
          <p className="text-[11px] text-muted-foreground">Shipped in 6 weeks</p>
        </div>
      </motion.div>

      <motion.div
        {...float(1.5)}
        className="absolute -right-4 -bottom-6 z-30 hidden items-center gap-2.5 rounded-xl border border-border bg-card/90 glass px-3.5 py-2.5 shadow-elevated sm:flex lg:-right-8"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-brand">
          <Gauge className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Lighthouse 98</p>
          <p className="text-[11px] text-muted-foreground">Core Web Vitals</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Overview (dashboard) ---------- */

function OverviewView() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-brand/30 sm:p-4"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="size-3.5 shrink-0 text-brand" />
                  <span className="truncate">{kpi.label}</span>
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
            <p className="text-sm font-medium">Growth</p>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand ring-1 ring-brand/20">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            Live
          </span>
        </div>
        <AreaChart />
        <div className="mt-3 flex items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="h-14 flex-1 overflow-hidden rounded-md bg-secondary/70"
              title={`Month ${i + 1}`}
            >
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
        <line
          key={y}
          x1="0"
          y1={y}
          x2="300"
          y2={y}
          stroke="var(--border)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
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

/* ---------- Code (editor) ---------- */

type Token = { t: string; c?: string };

const CODE_LINES: Token[][] = [
  [{ t: "// how we ship", c: "text-slate-500" }],
  [
    { t: "export async function ", c: "text-sky-400" },
    { t: "launch", c: "text-amber-300" },
    { t: "(project: ", c: "text-slate-300" },
    { t: "Project", c: "text-cyan-300" },
    { t: ") {", c: "text-slate-300" },
  ],
  [
    { t: "  const ", c: "text-sky-400" },
    { t: "scope = ", c: "text-slate-300" },
    { t: "await ", c: "text-sky-400" },
    { t: "discover", c: "text-amber-300" },
    { t: "(project.goals);", c: "text-slate-300" },
  ],
  [
    { t: "  const ", c: "text-sky-400" },
    { t: "build = ", c: "text-slate-300" },
    { t: "ship", c: "text-amber-300" },
    { t: "(scope, { weeks: ", c: "text-slate-300" },
    { t: "6", c: "text-emerald-400" },
    { t: " });", c: "text-slate-300" },
  ],
  [
    { t: "  return ", c: "text-sky-400" },
    { t: "deploy", c: "text-amber-300" },
    { t: "(build, { edge: ", c: "text-slate-300" },
    { t: "true", c: "text-emerald-400" },
    { t: " });", c: "text-slate-300" },
  ],
  [{ t: "}", c: "text-slate-300" }],
];

const FILES = [
  { name: "ship.ts", active: true },
  { name: "scope.ts" },
  { name: "deploy.ts" },
];

function CodeView({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full gap-3">
      {/* file tree */}
      <div className="hidden w-36 shrink-0 flex-col rounded-xl border border-border bg-background/60 p-3 text-xs sm:flex">
        <span className="mb-2 inline-flex items-center gap-1.5 font-medium text-muted-foreground">
          <Folder className="size-3.5 text-brand" />
          src
        </span>
        {FILES.map((f) => (
          <span
            key={f.name}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1.5",
              f.active
                ? "bg-brand/10 font-medium text-brand"
                : "text-muted-foreground",
            )}
          >
            <FileCode2 className="size-3.5" />
            {f.name}
          </span>
        ))}
      </div>

      {/* editor — intentionally dark in both themes */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
          <FileCode2 className="size-3.5 text-sky-400" />
          ship.ts
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } } }}
          className="flex-1 overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:text-[13px]"
        >
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: reduce ? 0 : -8 },
                show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
              }}
              className="flex whitespace-pre"
            >
              <span className="w-7 shrink-0 select-none text-right pr-3 text-slate-600">
                {i + 1}
              </span>
              <span>
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
                {i === CODE_LINES.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-caret bg-sky-400" />
                )}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex items-center justify-between border-t border-slate-800 px-4 py-2 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <GitBranch className="size-3" />
            main
          </span>
          <span className="text-emerald-400">✓ tsc — no errors</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Deploy (pipeline) ---------- */

const STEPS = [
  { name: "Install dependencies", time: "2.1s" },
  { name: "Type check", time: "3.4s" },
  { name: "128 tests passed", time: "6.2s" },
  { name: "Production build", time: "12.4s" },
];

const LOGS = [
  "▲ craftbyte-landing — build completed",
  "◇ 42 static routes prerendered",
  "✓ Edge network: 19 regions live",
];

function DeployView({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-4 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          <GitBranch className="size-4 text-brand" />
          craftbyte/production
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
            main
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand">
          <Loader2 className="size-3.5 animate-spin" />
          Deploying
        </span>
      </div>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.22, delayChildren: 0.15 } } }}
        className="flex flex-col gap-1.5"
      >
        {STEPS.map((step) => (
          <motion.li
            key={step.name}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
            }}
            className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm"
          >
            <span className="inline-flex items-center gap-2.5">
              <motion.span
                variants={{
                  hidden: { scale: reduce ? 1 : 0 },
                  show: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 420, damping: 18, delay: 0.15 },
                  },
                }}
                className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-500"
              >
                <CheckCircle2 className="size-3.5" />
              </motion.span>
              {step.name}
            </span>
            <span className="text-xs tabular-nums text-muted-foreground">{step.time}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* edge deploy progress */}
      <div className="rounded-lg border border-border bg-background/60 px-3.5 py-2.5">
        <div className="flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-2.5">
            <Loader2 className="size-4 animate-spin text-brand" />
            Deploy to edge
          </span>
          <span className="text-xs text-muted-foreground">19 regions</span>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-secondary">
          <motion.div
            initial={{ width: reduce ? "100%" : "6%" }}
            animate={{ width: "100%" }}
            transition={{ duration: reduce ? 0 : 3.6, ease: "easeInOut", delay: 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2"
          />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.4, delayChildren: 0.8 } } }}
        className="flex-1 rounded-xl border border-border bg-background/60 p-3.5 font-mono text-[11px] leading-5 text-muted-foreground sm:text-xs"
      >
        {LOGS.map((line) => (
          <motion.p
            key={line}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.25 } },
            }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
