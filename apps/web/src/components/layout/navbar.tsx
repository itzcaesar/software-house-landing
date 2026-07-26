"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageToggle } from "@/components/common/language-toggle";
import { CtaButton } from "@/components/ui/cta-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useDict();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const navItems = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.work, href: "/#portfolio" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Track which home section is in the reading band → nav pill follows it.
  useEffect(() => {
    if (pathname !== "/") return;
    const els = ["services", "portfolio", "process", "faq"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled &&
            "border-b border-border/70 glass shadow-soft md:mt-2 md:max-w-5xl md:rounded-full md:border lg:mt-3",
        )}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
            <Logo />
          </Link>
          <LanguageToggle
            variant="compact"
            className="hidden border-l border-border/70 pl-2 sm:inline-flex sm:pl-3"
          />
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = item.href.startsWith("/#")
              ? pathname === "/" && activeId === item.href.slice(2)
              : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <CtaButton size="sm" href="/#contact" className="hidden md:inline-flex">
            {t.nav.startProject}
            <ArrowRight className="size-4" />
          </CtaButton>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-2 rounded-2xl border border-border glass p-3 shadow-elevated md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between gap-2 px-1">
                <LanguageToggle />
                <Button
                  nativeButton={false}
                  className="h-10 rounded-xl"
                  render={
                    <Link href="/#contact" onClick={() => setOpen(false)}>
                      {t.nav.startProject}
                      <ArrowRight className="size-4" />
                    </Link>
                  }
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
