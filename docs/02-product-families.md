# Product families

Original catalog had 53 niche models. They collapse into 9 engines. Niche = engine + config + theme.

## 1. company (P1)
Company Profile, Portfolio, Business Directory, Job Board. CMS sections, services, gallery, blog, contact forms, SEO, multilingual.
Directory/job variants add categories, search/filter, listings, applications. Add-ons: WhatsApp click-to-chat, analytics, maps,
featured listings, employer dashboard.

## 2. commerce (P1)
Online store, dropshipping, reseller, pre-order, ebook, digital product, restaurant ordering, catering.
Config axes: product type (physical/digital/food/bundle), fulfilment (ship/download/manual/auto-delivery),
pricing (retail/reseller tiers), order mode (instant/pre-order/scheduled). Add-ons: vouchers, reviews, affiliate, loyalty,
supplier sync, delivery zones/table ordering, subscriptions, license keys.

## 3. topup (P2, hero product)
Top-up game, e-wallet top-up, pulsa & data, bill payment, vouchers. One engine; categories define the input schema
(game: user_id + server; e-wallet/pulsa: phone number; bills: customer id). See detail below.

## 4. booking (P2)
Booking jasa, salon/barbershop, workshop, car/motorbike rental, events & ticketing.
Config axes: resource type (staff/vehicle/room/seat), slot model (time slot/date range/quantity), extra fields, pricing model.
Add-ons: staff selection, packages, reschedule/cancel rules, deposit/refund, QR check-in, seat map, calendar sync, WhatsApp reminders.

## 5. learning (P3)
Online courses, membership, forum/community. Plans + recurring billing, content gating, lessons/quizzes/progress, certificates.

## 6. marketplace (P3)
Marketplace, freelancer services, game account/item sales, digital assets, online tutoring (with booking module).
Seller onboarding/verification, typed listings, escrow + payout ledger, commission rules, chat, reviews, disputes.
Use a licensed provider's escrow/split-payment features; do not hold funds ourselves. Crowdfunding parked.

## 7. ai (P3 support bot first, P4 rest)
Assistant profiles in one workspace (writing, coding, study, search, document analyzer). AI Support Bot (widget + knowledge base +
human handoff) is built first. Image generation, meeting notes, automation are separate pipelines later.
Credit metering, per-user quotas, model routing, cost tracking per customer from day one.

## 8. business-suite (P4)
POS + Inventory + Invoice as wave 1 (shared products/customers). Accounting + CRM wave 2. HR + Payroll + Project Mgmt wave 3.
Multi-tenant SaaS.

## 9. hosting (P4)
VPS, game server, Minecraft server billing with provisioning adapters, recurring billing, suspension/termination automation.

---

## Top-up engine detail (first big engine)

Tables (prefix `topup_`): categories (type + input schema JSON), products (provider, denomination, supplier SKU, cost, price rule),
orders (extends core order: target inputs JSON, supplier reference, status), supplier_accounts (balance snapshots), price_rules (margin per tier).

Flow:
1. User picks a product; the form is generated from the category's input schema.
2. Input validated (pattern, or supplier account-check via the SupplierProvider adapter).
3. Core order created (AwaitingPayment); price locked.
4. Customer pays through the PaymentGateway adapter; webhook marks the order Paid and publishes `OrderPaid`.
5. Top-up listener queues `PlaceSupplierOrder` (idempotency key = order id).
6. Supplier callback or polling job moves the order to Completed or Failed.
7. On failure: retry on fallback supplier; if still failing, refund through the ledger.

Hazards to design for: duplicate webhooks; supplier timeout with unknown state (reconcile, never blind refund);
price changing between cart and payment; supplier balance running low (alert); thin margins (margin rules per tier, reporting).

Example category config:
```json
{
  "category": "game", "product": "Example Game",
  "inputs": [
    {"key": "user_id", "label": "User ID", "type": "text", "pattern": "^[0-9]{5,12}$"},
    {"key": "zone_id", "label": "Server", "type": "text", "pattern": "^[0-9]{3,6}$"}
  ],
  "validation": "supplier.accountCheck",
  "pricing": {"rule": "cost_plus_percent", "value": 3.5}
}
```
