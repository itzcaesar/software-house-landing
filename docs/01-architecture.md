# Architecture

Modular monolith. One Laravel codebase; modules are folders with strict boundaries. Do not split into services.

## 1. Layers
| Layer | Meaning | Changed by |
|-------|---------|-----------|
| Core | shared services every product needs | us, versioned, released to all clients |
| Engine (module) | business logic of one product family | us, versioned per module |
| Configuration | data/settings adapting an engine to a niche or client | us or the client via admin UI |
| Theme | storefront look and layout, no business logic | us, designers, client (tokens) |

A client site = Core + enabled Engines + Configuration + Theme (+ optional `clients/<name>/custom/`).

## 2. Repository layout
```
core/            identity orders payments wallet notifications cms media settings audit reporting api admin-shell theme-engine i18n
modules/         company commerce topup booking learning marketplace ai business-suite hosting
adapters/        payment supplier shipping messaging llm provisioning storage
themes/          base-components  <theme-name>/ (theme.yaml, tokens.css, views/)
clients/         <client-name>/client.yaml  [custom/] [theme-overrides/]
tests/           Unit Feature Architecture
tools/ infra/ docs/
```
Composer PSR-4: `Core\` -> core/, `Modules\` -> modules/, `Adapters\` -> adapters/.

## 3. Dependency rules (enforced by tests/Architecture)
- Theme -> Module -> Core. Never the reverse. Core knows nothing about modules or themes.
- Modules do not import each other. Shared logic moves down into Core.
- Modules interact via Core contracts + domain events. No cross-module table access.
- Vendor SDKs (payment, supplier, LLM, etc.) are used only inside `adapters/`.
- Pest arch tests (or Deptrac) must fail the build on violations.

## 4. Module anatomy
Every module (core or engine) has:
```
modules/<name>/
  module.yaml            manifest
  src/                   Services, Models, Events, Listeners, Http (thin), Admin (Filament resources/pages/widgets)
  database/migrations/   tables prefixed <name>_
  database/seeders/      niche presets
  routes/                web.php api.php
  resources/views/       headless view-models/partials consumed by themes (no styling decisions)
  config/settings.schema.json
  tests/
  README.md
  <Name>ServiceProvider.php
```
Manifest example:
```yaml
name: topup
version: 1.0.0
requires: { core: "^1.0", modules: [] }
provides:
  permissions: [topup.products.manage, topup.orders.view, topup.suppliers.manage, topup.margins.manage]
  events: [TopupOrderPaid, TopupOrderFulfilled, TopupOrderFailed]
listens: [PaymentSucceeded, PaymentExpired]
settings_schema: config/settings.schema.json
admin_menu: [Products, Suppliers, Margins, Transactions, Reports]
```
`ModuleRegistry` reads every `modules/*/module.yaml` and the client's `client.yaml`, validates dependencies and
core version, boots ONLY enabled modules, and exposes their permissions, menu entries, and settings to the admin shell.

## 5. Configuration
Three layers, each overriding the previous, all schema-validated at boot (fail fast):
1. platform defaults (core) 2. engine defaults (module settings schema) 3. client overrides (client.yaml + admin settings UI).
Secrets only in environment variables / secrets manager, never in repo or config files. Feature flags for optional/unfinished features.

Example `clients/acme-topup/client.yaml`:
```yaml
client: acme-topup
domain: acme-topup.example
core_version: "^1.0"
modules: [topup@^1.0, company@^1.0]
theme: topup-neon
theme_tokens: { primary: "#6C3BFF", radius: 12px }
adapters:
  payment: [gateway_a, gateway_b]     # primary, fallback
  supplier: [supplier_a, supplier_b]  # primary, fallback
  messaging: whatsapp_gateway
features: { reseller_tiers: true, flash_sale: false }
settings: { default_margin_percent: 3.5, retry_failed_orders: 2, timezone: Asia/Jakarta }
```

## 6. Admin shell
One Filament panel. Each module's service provider registers its resources/pages/widgets; the panel's navigation is
built from enabled modules' manifests and filtered by the user's permissions. White-label: client logo + primary colour only.
Use Spatie permission (per-module permissions) and Spatie activitylog (audit log) rather than writing these from scratch.
Verify package/Laravel/Filament version compatibility before installing.

## 7. Themes
Design tokens (CSS custom properties), shared Blade component library, named layout slots, `theme.yaml` manifest
(name, supported families, tokens, templates, preview, min core version). Themes receive view-models; no logic.
Storefronts are server-rendered (Blade + Livewire/Alpine). Branding is token-driven.

## 8. Adapters (interfaces live in core, implementations in adapters/)
| Type | Interface methods (examples) |
|------|------------------------------|
| PaymentGateway | createPayment, getStatus, verifyWebhook, refund, listMethods |
| SupplierProvider | listProducts, checkAccount, placeOrder, checkStatus, getBalance |
| ShippingProvider | getRates, createShipment, track |
| MessagingChannel | send(template, recipient, data), deliveryStatus |
| LlmProvider | complete, stream, embed, countTokens |
| Provisioner | create, suspend, resume, terminate, reinstall, usage |
| Storage | put, get, signedUrl, delete |
Rules: normalize provider statuses; store raw payloads (mask secrets); retries with exponential backoff and a max;
failed jobs visible; reconciliation job comparing provider vs internal records; circuit breaker for flaky providers;
contract tests with sandbox/recorded responses; primary + fallback provider support.

## 9. Money, orders, ledger
- Money: integer minor units + currency. IDR has no minor unit in practice but still use the same value object.
- Idempotency keys on payment creation and supplier orders. Lock price at order creation.
- Append-only ledger for wallet, escrow, commission, credits. Corrections are reversing entries.
- Dual control + audit log for manual balance adjustments and large refunds.

Order state machine (generic, all engines):
| From | Event | To | Side effects |
|------|-------|----|--------------|
| Created | checkout confirmed | AwaitingPayment | reserve stock/slot, set expiry |
| AwaitingPayment | payment succeeded | Paid | publish OrderPaid, ledger entry |
| AwaitingPayment | expiry / user cancels | Expired / Cancelled | release stock/slot |
| Paid | engine starts fulfilment | Processing | call supplier/provisioner/deliver file |
| Processing | fulfilment succeeded | Completed | notify, release escrow if applicable |
| Processing | fulfilment failed after retries | Failed | alert admin, queue refund or manual retry |
| Paid/Completed/Failed | refund approved | Refunded | reverse ledger, notify |
Only these transitions are allowed; each records actor/cause.

## 10. Webhooks and queues
Verify signature -> dedupe by provider event id -> persist raw payload -> dispatch job -> return 2xx fast.
Jobs are idempotent and retry with backoff. Everything slow runs in queues (Redis). Use Horizon-style monitoring for queues.

## 11. Tenancy
Phase 0-3: single tenant per deployment (own DB, own container stack, same image). Code must be tenant-aware:
route tenant-scoped queries through one scope layer so adding tenant IDs later (SaaS families) is a contained change.

## 12. Security checklist
Argon2/bcrypt hashing; mandatory 2FA for admin; login rate limits; server-side authorization on every action;
validate all input, escape output (OWASP Top 10); signed webhooks; validate uploads, store outside web root, signed URLs for private files;
secrets in env; audit log for prices/balances/roles/settings; encrypted backups off-server; TLS everywhere;
dependency vulnerability scanning in CI; collect minimal personal data and follow Indonesia's UU PDP (get legal advice).

## 13. Testing and CI
Pest. Layers: unit (services, pricing, state machine), integration (DB, queue, events), adapter contract tests,
end-to-end for critical flows, architecture tests. CI pipeline: Pint -> PHPStan/Larastan -> Pest -> build image ->
deploy to staging -> smoke tests -> manual approval -> production. Expand-and-contract migrations. Rollback plan per release.

## 14. Observability
Structured logs with correlation IDs; error tracking (Sentry); uptime monitoring incl. webhook endpoint; business alerts
(payment failure spike, supplier balance low, webhook failures, failed-job growth, AI cost per user); daily encrypted backups
with periodic restore tests; runbooks for common incidents.

## 15. Definition of Done for a module
Manifest complete; dependency rules pass; niche differences are config; external calls via adapters, webhooks verified+idempotent;
money integers + explicit state transitions + immutable ledger; tests pass in CI and security scan clean; admin screens permission-protected
and audit-logged; seeders/presets per niche; README + changelog + runbook + demo data; no N+1 queries, slow work queued, indexes present.
