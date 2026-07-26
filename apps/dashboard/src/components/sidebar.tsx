"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Code2,
  LayoutDashboard,
  Users,
  KanbanSquare,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/board", label: "Board", icon: KanbanSquare },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-16 shrink-0 flex-col items-center gap-2 border-r border-border bg-card/60 py-4 lg:w-56 lg:items-stretch lg:px-3">
      <Link
        href="/"
        className="mb-4 flex items-center gap-2.5 self-center px-1 lg:self-start lg:px-2"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-white">
          <Code2 className="size-4.5" />
        </span>
        <span className="hidden text-sm font-semibold lg:block">Craftbyte HQ</span>
      </Link>

      {NAV.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative flex items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors lg:justify-start",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="sidebar-active"
                aria-hidden
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-xl bg-secondary ring-1 ring-border"
              />
            )}
            <Icon className="relative size-4.5 shrink-0" />
            <span className="relative hidden lg:block">{label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
