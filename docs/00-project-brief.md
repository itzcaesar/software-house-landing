# Project brief

Business model: `docs/04-business-model.md`. Pricing: `docs/05-pricing.md`. Source spreadsheets: `business/`.

## Business
A solo-run business that sells (1) custom software/websites and (2) ready-made templates, both built on the same
platform. Custom work funds the platform and reveals needs; templates scale. Recurring revenue comes from care plans
(hosting, updates, support) and later SaaS.

Flywheel: win custom project -> build on shared core -> after the 3rd occurrence extract a reusable module ->
sell it as template/add-on -> faster delivery -> more clients.

## Product shape
Every customer site = Core + Engine(s) + Configuration + Theme (+ optional client custom module).
The admin dashboard shell is shared; its menu and widgets are assembled from the enabled modules' manifests.
Themes only change the public storefront.

## The 9 engine families (priority)
| # | Family | Priority | Notes |
|---|--------|----------|-------|
| 1 | company (Company/Portfolio/Directory) | P1 | entry product, lead generator |
| 2 | commerce (Online Store) | P1 | physical, digital, food; base for others |
| 3 | topup (Top-Up & PPOB) | P2 | hero product; game, e-wallet, pulsa, bills |
| 4 | booking (Booking & Ticketing) | P2 | salon, workshop, rental, events |
| 5 | learning (Learning & Membership) | P3 | courses, memberships, community |
| 6 | marketplace | P3 | multi-vendor, escrow, commission |
| 7 | ai (AI Workspace, Support Bot first) | P3/P4 | credits, cost control |
| 8 | business-suite (POS, Inventory, Invoice first) | P4 | SaaS, multi-tenant later |
| 9 | hosting (Hosting & server billing) | P4 | provisioning adapters |

Handled differently: Payment Gateway = integrate licensed providers via adapters (never build one).
Crowdfunding/donation = parked pending legal review.

## Phases
- Phase 0: foundation (core, module system, admin shell, theme engine, payments skeleton, client tooling). Weeks 1-8.
- Phase 1: company + commerce engines, first real clients, care plans.
- Phase 2: topup + booking engines, wallet/reseller tiers.
- Phase 3: learning, AI support bot, marketplace v1.
- Phase 4: business-suite SaaS, hosting billing, AI workspace, multi-tenant.
Start a new family only when a client has paid/signed for it or >= 5 qualified leads asked for it.

## Decisions already made
- Single stack: Laravel + Filament + PostgreSQL + Redis. Server-rendered storefronts (Blade/Livewire), no SPA.
- Modular monolith. One codebase, one Docker image; each client = one deployment with its own DB and `client.yaml`.
- Single-tenant per deployment now; write tenant-aware code so SaaS families can go multi-tenant later.
- Money as integers; ledger append-only; adapters for all external services.
- Regulated activities (payments, escrow, donations, personal data): use licensed providers and get legal advice. Do not hold customer funds.

## Out of scope for now
Microservices, Kubernetes, SPA storefronts, building a payment gateway, multi-tenant SaaS, mobile apps.
