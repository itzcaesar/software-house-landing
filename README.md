# Craftbyte — Software House Landing Page

A premium, high-conversion landing page for a software house / product studio.
Built for performance, SEO, and accessibility.

> **Craftbyte** is a placeholder brand. Rebrand from a single file: `src/lib/site.ts`.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first tokens)
- **shadcn/ui** (base-nova style, built on Base UI)
- **Motion** (`motion/react`) for animation
- **Lucide** icons + inline brand SVGs
- **next-themes** (light/dark/system) · **sonner** (toasts) · **react-hook-form**

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the build
pnpm lint       # eslint
```

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, viewport, providers, JSON-LD
    page.tsx              # composes all sections
    globals.css           # design tokens (brand palette, gradients, utilities)
    robots.ts             # /robots.txt
    sitemap.ts            # /sitemap.xml
    manifest.ts           # PWA web manifest
    icon.tsx              # generated app icon (ImageResponse)
    opengraph-image.tsx   # generated OG/Twitter card (1200×630)
  components/
    layout/               # navbar, footer
    sections/             # hero, services, why-us, process, portfolio,
                          # testimonials, pricing, faq, contact, trusted-by
    common/               # reveal (motion), section, logo, backgrounds,
                          # theme-toggle, currency-toggle, social-icons
    seo/structured-data.tsx
    providers.tsx         # theme + currency + tooltip + toaster
    ui/                   # shadcn primitives
  lib/
    site.ts               # brand, contact, nav, socials  ← edit to rebrand
    content.ts            # services, benefits, process, projects, testimonials, faq
    pricing.ts            # plans + per-currency prices
    currency.tsx          # currency store (USD/IDR, persisted) + useCurrency()
    utils.ts
```

## Customizing

- **Brand / contact / socials:** `src/lib/site.ts`
- **Copy & data:** `src/lib/content.ts`
- **Pricing & currencies:** `src/lib/pricing.ts` (add a currency in `src/lib/currency.tsx`)
- **Colors / gradients:** the `--brand*` tokens in `src/app/globals.css`
- **Production URL:** set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) — feeds canonical, OG, sitemap, robots, JSON-LD.

## Currency switcher

USD ⇄ IDR toggle in the Pricing section. The choice is persisted to
`localStorage` and shared across the app via a `useSyncExternalStore` store
(`src/lib/currency.tsx`). Prices update instantly, no reload. Formatting uses
`Intl.NumberFormat` with the correct locale per currency.

## Contact form (stub)

`src/components/sections/contact.tsx` validates client-side and currently
`console.info`s the payload + shows a success toast. To go live, replace the
body of `onSubmit` with a POST to a route handler (e.g. `app/api/contact`)
backed by Resend / email.

## SEO & performance

- Metadata, Open Graph, Twitter cards, canonical (`app/layout.tsx`)
- `robots.txt`, `sitemap.xml`, web manifest, generated OG image + favicon
- JSON-LD: Organization, WebSite, ProfessionalService (+ service catalog), FAQPage
- Semantic landmarks, single `<h1>`, skip link, reduced-motion support
- Self-hosted fonts (`next/font`), static prerender, edge-friendly

## Deploy

Push to a Git repo and import on **Vercel** (zero config). Set
`NEXT_PUBLIC_SITE_URL` to your production domain.
