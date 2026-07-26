"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n";
import { Logo } from "@/components/common/logo";
import {
  XIcon,
  GithubIcon,
  LinkedinIcon,
  DribbbleIcon,
  InstagramIcon,
} from "@/components/common/social-icons";

const socials = [
  { label: "X", href: siteConfig.socials.x, Icon: XIcon },
  { label: "GitHub", href: siteConfig.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedinIcon },
  { label: "Dribbble", href: siteConfig.socials.dribbble, Icon: DribbbleIcon },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: InstagramIcon },
];

export function Footer() {
  const t = useDict();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.colCompany,
      links: [
        { label: t.nav.about, href: "/about" },
        { label: t.nav.services, href: "/#services" },
        { label: t.footer.linkWhy, href: "/#why-us" },
        { label: t.nav.process, href: "/#process" },
        { label: t.nav.work, href: "/#portfolio" },
      ],
    },
    {
      title: t.footer.colResources,
      links: [
        { label: t.nav.pricing, href: "/pricing" },
        { label: t.footer.linkTestimonials, href: "/#testimonials" },
        { label: t.nav.faq, href: "/#faq" },
        { label: t.footer.linkContact, href: "/#contact" },
      ],
    },
    {
      title: t.footer.colLegal,
      links: [
        { label: t.footer.linkPrivacy, href: "/privacy" },
        { label: t.footer.linkTerms, href: "/terms" },
        { label: t.footer.linkCookies, href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.legalName}. {t.footer.rights}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            {t.footer.cta}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
