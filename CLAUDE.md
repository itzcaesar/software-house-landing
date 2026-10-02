# Landing page modification

This repo is an EXISTING landing page for a business that sells (1) custom software/websites and (2) ready-made,
customizable website/software templates (9 product families, 50+ niches), plus monthly care plans.
Task: update the page to the positioning in `docs/landing-brief.md`. Business facts: `docs/business-context.md`.
Open the docs when needed; do not copy them into this file.

## Stack and commands (fill in after inspecting the repo, keep it short)
- pnpm monorepo. Landing = `apps/web`: Next.js 16 App Router, React 19, TS strict, Tailwind v4 (tokens in `globals.css`), shadcn/Base UI, motion, lucide.
  `apps/dashboard` = internal leads CRM (do not touch). `packages/db` = Drizzle/libSQL; contact form posts to `/api/leads`.
- Copy lives in `apps/web/src/lib/dictionaries.ts` (`en` + `id`, typed `Dict`); icons/structural data in `lib/content.ts`; brand, contact and WhatsApp (`waLink`) in `lib/site.ts`.
- Commands (repo root): `pnpm dev:web` (:3000), `pnpm build:web`, `pnpm --filter web lint`. Tests: none for web.
- Language: ID is the server-rendered default (`<html lang="id">`, metadata, JSON-LD); EN via client toggle (localStorage).
- Deploy: Vercel, root dir `apps/web` (see `DEPLOY.md`). Do not run.

## First, always
Inspect before changing anything: stack, structure, components, styling, forms, analytics, WhatsApp/contact setup,
SEO tags, sitemap, deploy config. Summarize what you find, then propose a plan and wait for approval.

## Rules
- Keep the existing stack, structure, design system and deploy setup. No new framework, build tool, or large dependency without asking.
- Reuse existing components and styles. Match the current visual identity unless I ask for a redesign.
- Commit straight to main (owner choice). Small commits. After each change, show a summary and how to preview it.
- Copy is Indonesian first (confirm against the current page). Keep the existing brand voice. `docs/copy-deck-id.md` is a draft to adapt, not final text.
- NEVER invent facts: no fake testimonials, client logos, case studies, numbers ("100+ clients"), awards, or certifications.
  Use clearly marked placeholders like `[ISI: testimoni asli]` and list every placeholder in your summary.
- Only present something as available if `docs/landing-brief.md` section 4 says it is Live. Everything else is "Segera hadir" (coming soon) with a waitlist/contact CTA.
- Do NOT publish prices or delivery-time promises unless I explicitly give you the figures in the prompt. Pricing in the docs is an internal hypothesis. Default CTA: "Konsultasi gratis" / "Minta penawaran".
- Do not claim to be a payment gateway, to hold customer funds, or to guarantee legal/regulatory compliance.
- Primary CTA is WhatsApp click-to-chat. Use the number already on the page; if none exists, ask me.
- SEO: one H1 per page, unique title and meta description, semantic headings, image alt text, canonical URL, sitemap entries for new pages.
  Add structured data only when the content is accurate. No keyword stuffing. No near-duplicate niche pages (see `docs/niche-pages.md`).
- Quality: responsive, readable colour contrast, no layout shift, optimized images. Do not make performance or accessibility worse than before.
- Do not commit secrets. Do not deploy or publish. I review the diff and deploy myself.

## Workflow
- Plan first, then implement section by section.
- Run the project's build/lint/tests (if any) before saying a change is done.
- If a request conflicts with these rules, stop and ask.
