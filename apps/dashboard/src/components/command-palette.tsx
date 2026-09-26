"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CornerDownLeft, LayoutDashboard, KanbanSquare, MapPin, Radar, Search, Settings, Users } from "lucide-react";
import type { LeadStatus } from "@callumc/db";
import { STATUS_META } from "@/lib/status";
import { quickSearchLeads } from "@/app/actions";
import { cn } from "@/lib/utils";

type Item = { href: string; label: string; hint?: string; status?: LeadStatus; icon?: typeof Search };

const PAGES: Item[] = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/board", label: "Board", icon: KanbanSquare },
  { href: "/sources", label: "Sources", icon: Radar },
  { href: "/prospects", label: "Prospects", icon: MapPin },
  { href: "/settings", label: "Settings", icon: Settings },
];

/** Header search button + Ctrl/⌘K palette: jump to any lead or page. */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [leadItems, setLeadItems] = useState<Item[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!q.trim()) return;
    const timer = setTimeout(async () => {
      const found = await quickSearchLeads(q);
      setLeadItems(
        found.map((l) => ({ href: `/leads/${l.id}`, label: l.name, hint: l.company, status: l.status })),
      );
      setActive(0);
    }, 150);
    return () => clearTimeout(timer);
  }, [q]);

  const query = q.trim().toLowerCase();
  const pages = PAGES.filter((p) => p.label.toLowerCase().includes(query));
  const items = query ? [...leadItems, ...pages] : PAGES;

  const close = () => {
    setOpen(false);
    setQ("");
    setLeadItems([]);
    setActive(0);
  };
  const go = (item: Item | undefined) => {
    if (!item) return;
    close();
    router.push(item.href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full max-w-sm items-center gap-2.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
      >
        <Search className="size-4" />
        <span className="flex-1 text-left">Search leads…</span>
        <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[14vh] backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Search"
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-elevated"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="size-4 text-muted-foreground" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") close();
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActive((i) => Math.min(i + 1, items.length - 1));
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActive((i) => Math.max(i - 1, 0));
                    }
                    if (e.key === "Enter") go(items[active]);
                  }}
                  placeholder="Search leads by name, company, email — or jump to a page"
                  className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <ul className="max-h-80 overflow-y-auto p-2">
                {items.length === 0 && (
                  <li className="px-3 py-6 text-center text-sm text-muted-foreground">No matches.</li>
                )}
                {items.map((item, i) => {
                  const Icon = item.icon ?? Users;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(item)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm",
                          i === active ? "bg-secondary text-foreground" : "text-muted-foreground",
                        )}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span className="min-w-0 flex-1 truncate">
                          <span className="text-foreground">{item.label}</span>
                          {item.hint && <span> · {item.hint}</span>}
                        </span>
                        {item.status && (
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[11px] font-medium ring-1",
                              STATUS_META[item.status].chip,
                            )}
                          >
                            {STATUS_META[item.status].label}
                          </span>
                        )}
                        {i === active && <CornerDownLeft className="size-3.5 shrink-0" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
