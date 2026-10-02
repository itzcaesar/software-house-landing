# Business model

> Figures are illustrative hypotheses, not market data or forecasts. Pricing details: `docs/05-pricing.md`.
> Full planning documents (English and Indonesian) are in `business/`. This file is the working summary.
> This is planning guidance, not legal or tax advice.

## 1. Two business lines
| | Custom projects | Productized templates |
|---|---|---|
| Purpose | Solve a client's specific problem; fund the platform; discover new modules | Sell a proven engine + theme repeatedly with light configuration |
| Customer | Startups, companies with unusual workflows, agencies | Small businesses, online sellers, resellers, creators |
| Pricing | Fixed price by scope, milestone payments | Tiered packages (Starter/Business/Pro) + add-ons |
| Delivery | Weeks to months | Days to 2 weeks (target once platform is mature) |
| Margin | Medium (time-based, scope risk) | High (reuse lowers cost) |

Flywheel: win custom project -> build on shared core -> extract reusable module on the 3rd occurrence -> add to library with
demo/docs/price -> sell as template or add-on -> faster, cheaper delivery -> more clients -> recurring care plans fund new modules.

## 2. Revenue streams
| # | Stream | Pricing logic | Recurring |
|---|--------|---------------|-----------|
| 1 | Template setup | fixed price per package tier | no |
| 2 | Custom projects | fixed price by scope, paid in milestones | no |
| 3 | Care plans (hosting, updates, security patches, backups, monitoring, support) | monthly/yearly by tier | yes |
| 4 | Add-on modules | one-time, or monthly if it has running costs | sometimes |
| 5 | Theme sales and custom themes | per theme; custom design quoted | no |
| 6 | Hosted SaaS (Business Tools, AI Workspace) | per user, outlet, or credit pack | yes |
| 7 | Usage margin (AI credits, messaging credits, supplier markup where permitted) | provider cost + margin | yes |
| 8 | Partner / white-label licences | annual licence + per-site fee | yes |
| 9 | Training and onboarding | fixed or hourly | no |

Strategy: one-time revenue funds growth now; recurring revenue builds stability. Target recurring revenue >= 30% of total by end of year 2.

## 3. Target customers
- Local service businesses (salon, barbershop, workshop, rental): booking, deposits, WhatsApp reminders -> booking, company.
- Online sellers and resellers: store, digital products, top-up/PPOB, reseller pricing -> commerce, topup.
- Creators and educators: courses, memberships, community -> learning.
- Small companies and professionals: credible website, portfolio, lead capture -> company.
- Startups with a unique idea: custom MVP, marketplace -> marketplace + custom modules.
- Agencies: white-label sites -> any family via partner licence.
- SMEs wanting automation: POS, inventory, invoicing, AI support bot -> business-suite, ai.

## 4. Value proposition
Launch fast from a working engine; pay for what you need and add features as you grow; look unique via themes and branding
without touching business logic; one team maintains everything (updates, security, support) under one care plan.

## 5. Customization levels (how requests map to engineering)
| Level | Request | Layer | Effort |
|-------|---------|-------|--------|
| L1 Branding | colours, fonts, buttons, layout | theme tokens | hours to 1 day |
| L2 Configuration | page order, form fields, checkout/booking steps, payment methods, vouchers, notifications | config + feature flags | 1-3 days |
| L3 Add-on module | warehouse, reports, API access, reseller tiers, loyalty | library modules | 2 days - 2 weeks |
| L4 Custom module | workflow no library module covers | `clients/<name>/custom/` | weeks, quoted per scope |
| L5 Core change | benefits every client | core/engine via roadmap | planned release |
Never edit core or an engine for a single client. If the same client-specific change is requested twice, make it a config option, feature flag, or add-on.

## 6. Go-to-market
Niche landing pages + SEO (one page per niche, each with demo, features, "from" price); live demo site for every theme with sample data and admin login;
WhatsApp-first sales (click-to-chat, qualification questions, quote within 24h); short social video demos; reseller/game/local-business communities;
agency white-label partners; referral program; selected themes/templates on template marketplaces.
Funnel: discover -> try demo -> WhatsApp/form inquiry -> discovery call -> quote -> deposit -> delivery -> care plan -> referral.

## 7. Client delivery process
1. Discovery (20-30 min call) -> brief. 2. Fit and demo: recommend family/theme/modules -> agreed scope and package.
3. Quote and contract: written scope, inclusions/exclusions, timeline, payments -> 40-50% deposit.
4. Configure and theme (create client folder, config, branding; custom module if any) -> staging site.
5. Content and integrations (import products/content, connect payment and supplier accounts).
6. Acceptance testing on staging -> sign-off. 7. Launch: go-live, final payment, handover pack, short training.
8. Warranty 14-30 days of bug fixes. 9. Care plan.

Scope control: out-of-scope work = change request with its own price/timeline; template packages include only listed features;
payment follows milestones, never full payment at the end; client content has deadlines and delays move the launch date.

## 8. Licensing and IP
- We keep core, engines, adapters, themes. Client gets a non-exclusive licence to run them for their business, typically per domain/deployment.
- Client keeps their content, customer data and brand assets, and can export their data.
- Custom modules: ownership defined in contract; common approach is client has exclusive use of client-specific parts while we may reuse generic, non-confidential parts.
- Source-code access policy and price must be stated in the contract (e.g. handover/escrow at a premium).
- Anti-piracy: clear licence terms, per-domain licensing, managed deployment pipeline; avoid heavy technical protection that burdens real customers.
- Track third-party component licences in the repo. Have a lawyer review agreement, licence and care-plan terms once, then reuse.

## 9. Risks and mitigations
| Risk | Mitigation |
|------|-----------|
| Spreading too thin across nine families | build in phases; start a family only with a paying client or validated demand |
| Scope creep on custom work | written scope, change requests, milestone payments, acceptance checklist |
| Dependence on suppliers/providers (top-up, payment, AI) | adapter layer, fallback providers, balance/failure alerts, contractual notice |
| Regulatory exposure (payments, escrow, donations, personal data) | licensed providers, never hold customer funds, legal advice before launch |
| Security incident | security checklist (architecture doc), tested backups, runbooks, admin 2FA |
| Maintenance burden grows per client | version pinning, automated deployments, care-plan pricing, support limits, upgrade schedule |
| Key-person dependency (solo) | documentation, ADRs, runbooks; consider part-time contractor once recurring revenue allows |
| Price competition from cheap scripts | compete on reliability, support, updates, customization; show care-plan value |
| Template leakage/resale | licence terms, per-domain licensing, managed deployment |
| AI costs exceeding revenue | quotas, credits, model routing, cost tracking per customer, alerts |

## 10. KPIs
| KPI | Target |
|-----|--------|
| Reuse ratio (delivered features from existing modules) | >= 70% |
| Time to launch a template project | <= 2 weeks once mature |
| Care-plan attach rate | >= 60% |
| Monthly care-plan churn | < 3% |
| Gross margin: template / custom / care plan | 60-75% / 40-55% / 70-85% |
| Recurring share of revenue | >= 20% by month 12, >= 30% by end of year 2 |
| Support tickets per client per month | falling |
| Defects found after launch | falling |
Tracker: sheet `KPI` in `business/Katalog_Produk_Modular.xlsx`.

## 11. Roadmap gates (business side)
- Phase 0 exit: deploy a "hello client" from configuration in a day.
- Phase 1 exit: 3-5 paying clients, at least 2 on care plans.
- Phase 2 exit: top-up and booking live for real clients; reuse ratio >= 60%.
- Phase 3 exit: recurring revenue >= 20% of total.
- Phase 4 exit: recurring revenue >= 30% of total.
- Gate for any new family: a client has paid or signed for it, or >= 5 qualified leads asked for it.

## 12. Legal and admin basics
Register a suitable business entity and tax registration with an accountant. Prepare once: project agreement, licence terms, care-plan terms,
privacy policy, terms of service for hosted products. Keep invoicing, bookkeeping and client approvals/change requests tidy.
For payment, bill, escrow or donation features confirm the licensing position of every provider and of our own role before launch.

## 13. What this means for the code
- Package tiers (Starter/Business/Pro/Custom) = enabled modules + integration limits + feature flags in `client.yaml`.
- Care plans are a business/ops construct; code only needs monitoring, backups, version pinning and upgrade tooling.
- Niche landing pages and demo sites are fed by each module's seeders/presets (every module needs a demo seeder).
- Usage-based products (AI credits, messaging credits) need metering and per-customer cost tracking from day one.
- Never hardcode prices; keep them in configuration or the business spreadsheets.
