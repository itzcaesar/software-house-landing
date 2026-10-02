# Pricing

> ALL FIGURES ARE ILLUSTRATIVE HYPOTHESES in Indonesian Rupiah (IDR), not market data. Validate against 5-10 local competitors and your own cost of time before publishing to customers.
> Source of truth for calculations: `business/Model_Keuangan_Bisnis.xlsx` (editable inputs, formulas). This file is a readable snapshot.
> **Prices are business data, not code.** Do not hardcode prices in application code. Package tiers map to enabled modules, limits and feature flags in `client.yaml`.

## 1. Setup and care-plan ranges by family

| Family | Engine | Setup (one-time) | Care plan (per month) | Notes |
|---|---|---|---|---|
| Company / Portfolio / Directory | company | Rp 2.000.000 - Rp 8.000.000 | Rp 150.000 - Rp 500.000 | Entry product; upsell later |
| Online Store | commerce | Rp 5.000.000 - Rp 20.000.000 | Rp 300.000 - Rp 1.000.000 | Add-ons priced separately |
| Top-Up & PPOB | topup | Rp 10.000.000 - Rp 35.000.000 | Rp 500.000 - Rp 2.000.000 | Higher care plan because it is transaction-critical |
| Booking & Ticketing | booking | Rp 6.000.000 - Rp 20.000.000 | Rp 300.000 - Rp 800.000 | Reminders as an add-on |
| Learning & Membership | learning | Rp 8.000.000 - Rp 25.000.000 | Rp 400.000 - Rp 1.000.000 | Recurring-billing complexity |
| Marketplace | marketplace | Rp 25.000.000 - Rp 100.000.000 | Rp 1.000.000 - Rp 3.000.000 | Scope varies widely; open upper bound (100 million+) |
| AI Support Bot / Workspace | ai | Rp 15.000.000 - Rp 60.000.000 | - | Or SaaS: subscription + credits; track provider cost per customer |
| Business Tools Suite | business-suite | - | Rp 150.000 - Rp 1.000.000 | SaaS per outlet or company; setup optional |
| Hosting & Server Billing | hosting | Rp 15.000.000 - Rp 50.000.000 | Rp 1.000.000 - Rp 2.000.000 | Operationally heavy; include infrastructure cost |
| Custom project | (custom projects) | Rp 15.000.000 - Rp 150.000.000 | - | Care plan required; 40-50% deposit; open upper bound (150 million+) |

Blank/`-` = set outside this table (for example SaaS subscription, or open-ended custom scope). Marketplace and custom projects have open upper bounds (`100 million+`, `150 million+`).

## 2. Care plans

| Tier | Price per month | Response target (business hours) | Small changes per month | Includes |
|---|---|---|---|---|
| Basic | Rp 150.000 - Rp 300.000 | 2 working days | - | Updates and security patches, daily backups, email/form support |
| Standard | Rp 400.000 - Rp 800.000 | 1 working day | 1-2 hours | Basic + monitoring, WhatsApp support, basic report |
| Premium | Rp 1.000.000 - Rp 2.500.000 | 4 hours (critical) | 4-6 hours | Standard + monthly restore test, phone, detailed report |

Transaction-critical clients (top-up, deposits, marketplaces) should be steered to Standard or Premium. Target care-plan attach rate: 60% or more.

## 3. Package tiers (setup)

| | Starter | Business | Pro | Custom |
|---|---|---|---|---|
| For | First website, small budget | Established small business | Growing business, higher volume | Unique workflow or platform |
| Engine | One engine as-is | One engine + add-ons | One or two engines + add-ons | Engines + custom modules |
| Theme | Pick a theme; set logo and colours | Theme + extra layout options | Custom theme variant | Bespoke design |
| Payments and integrations | 1 payment gateway | 2 integrations | Up to 4 + API access | As required |
| Admin and training | Standard admin | Admin + short training | Admin + training + documentation | Full handover pack |
| Care plan | Optional | Recommended | Included for first months | Required |
| Delivery target | 3-7 days | 1-2 weeks | 2-4 weeks | Scoped |

Implementation note: a tier is a set of enabled modules, integration limits and feature flags in the client's `client.yaml`, not a code branch.

## 4. How to price a quote

- **Floor price** = estimated customization hours x internal hourly rate x 1.3 (buffer). Never quote below the floor, even for the first client.
- **Template price** = floor + premium for the reusable engine and faster delivery (starting hypothesis: +30%).
- Add-ons are priced separately. Out-of-scope work goes through a change request with its own price and timeline.
- Payment schedule: 40-50% deposit, milestone payments, never full payment at the end. Warranty: 14-30 days of bug fixes.
- Calculator: sheet `Kalkulator Harga` in `business/Model_Keuangan_Bisnis.xlsx`.

## 5. Add-on catalog (hypothesis prices)

| Add-on | Family | Billing | Price (IDR) |
|---|---|---|---|
| WhatsApp button and click-to-chat | company | One-time | Rp 300.000 |
| Analytics integration | company | One-time | Rp 500.000 |
| Location map | company | One-time | Rp 300.000 |
| Featured listings (directory) | company | One-time | Rp 1.500.000 |
| Employer dashboard (job board) | company | One-time | Rp 3.000.000 |
| Vouchers and promos | commerce | One-time | Rp 1.500.000 |
| Wishlist and reviews | commerce | One-time | Rp 1.000.000 |
| Affiliate | commerce | One-time | Rp 2.500.000 |
| Loyalty points | commerce | One-time | Rp 2.000.000 |
| Supplier sync (dropshipping) | commerce | One-time | Rp 3.000.000 |
| Delivery zones and table ordering (F&B) | commerce | One-time | Rp 2.000.000 |
| License keys (digital products) | commerce | One-time | Rp 2.000.000 |
| Reseller tiers and deposit balance | topup | One-time | Rp 3.500.000 |
| Reseller API | topup | One-time | Rp 3.000.000 |
| Vouchers and flash sales | topup | One-time | Rp 2.000.000 |
| Automatic price sync | topup | One-time | Rp 2.000.000 |
| WhatsApp/Telegram notifications | topup | One-time | Rp 1.500.000 |
| Staff selection | booking | One-time | Rp 1.500.000 |
| Deposit and refund | booking | One-time | Rp 2.000.000 |
| QR check-in | booking | One-time | Rp 2.000.000 |
| Seat map | booking | One-time | Rp 3.500.000 |
| Calendar sync | booking | One-time | Rp 1.500.000 |
| WhatsApp reminders (message credits not included) | booking | Monthly | Rp 150.000 |
| Live class | learning | One-time | Rp 3.000.000 |
| Certificates | learning | One-time | Rp 1.500.000 |
| Drip content | learning | One-time | Rp 1.500.000 |
| Promoted listings | marketplace | One-time | Rp 3.000.000 |
| Proposals and bidding (freelance) | marketplace | One-time | Rp 4.000.000 |
| Seller KYC | marketplace | One-time | Rp 4.000.000 |
| AI Support Bot widget (usage cost not included) | ai | Monthly | Rp 500.000 |

Monthly add-ons that depend on usage (WhatsApp reminders, AI bot) exclude message credits and provider usage costs, which are passed through with margin.

## 6. Financial model defaults

Inputs used in `Model_Keuangan_Bisnis.xlsx` (sheet `Asumsi`):

| Parameter | Value | Unit |
|---|---|---|
| Average template project price | Rp 8.000.000 | IDR |
| Average custom project price | Rp 30.000.000 | IDR |
| Average add-on price | Rp 2.000.000 | IDR |
| Care plan fee per month | Rp 500.000 | IDR / month |
| Care plan attach rate | 80.0% | % of new projects |
| Monthly care-plan churn | 2.0% | % / month |
| Gross margin, template projects | 65.0% | % |
| Gross margin, custom projects | 45.0% | % |
| Gross margin, add-ons | 70.0% | % |
| Gross margin, care plans | 80.0% | % |
| Marketing cost per month | Rp 2.000.000 | IDR / month |
| Tools and third-party services per month | Rp 1.000.000 | IDR / month |
| Admin, legal and accounting per month | Rp 500.000 | IDR / month |

Monthly volume defaults (months 1-12): template projects `0,1,1,1,1,1,1,2,2,2,2,1` (15), custom projects `0,0,1,0,0,1,0,0,0,1,0,0` (3), add-ons `0,0,1,1,1,1,1,1,1,1,1,1` (10). Month 1 is 0 because the platform foundation is still being built (Phase 0).

Simple Year-1 scenario from the planning document:

| Line | Assumption | Revenue (IDR) |
|---|---|---|
| Template projects | 15 x Rp 8.000.000 | 120.000.000 |
| Custom projects | 3 x Rp 30.000.000 | 90.000.000 |
| Add-ons | 10 x Rp 2.000.000 | 20.000.000 |
| Care plans | ~7.5 average active clients x Rp 500.000 x 12 | 45.000.000 |
| **Total** | month-12 MRR Rp 7.500.000 | **275.000.000** |

The detailed monthly model (with one-month lag before care plans, 2% monthly churn, margins and opex) yields about Rp 261 million for 12 months with these defaults; the difference is expected.

Gross-margin targets (goals, not facts): template projects 60-75%, custom projects 40-55%, care plans 70-85%.

