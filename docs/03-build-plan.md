# Build plan

Rules: one task at a time, in order. Each task ends with tests + lint + static analysis green and a short summary.
Estimates are rough, for one developer. Do not start a later phase before the current phase's exit criteria are met.

## Phase 0: Foundation (weeks 1-8)

### Week 1: project and module system
**T0.1 Scaffold and dev environment**
- Fresh Laravel project at the repo root WITHOUT overwriting `CLAUDE.md`, `.claude/`, or `docs/` (scaffold in a temp dir, then move).
- PostgreSQL + Redis. Docker Compose with: app, queue worker, scheduler, postgres, redis, mail catcher.
- Composer PSR-4 for `Core\`, `Modules\`, `Adapters\`. Composer scripts: `test`, `lint`, `analyse`.
- Accept when: `docker compose up -d` gives a working app; `composer test|lint|analyse` run green.

**T0.2 CI**
- Pipeline: Pint -> PHPStan/Larastan -> Pest. Dependency vulnerability audit step.
- Accept when: CI config exists and passes on a clean checkout.

**T0.3 Module system**
- `module.yaml` schema + validator. `ModuleRegistry` that discovers modules, validates `requires`, loads `client.yaml`, boots only enabled modules.
- `php artisan make:module <name>` generator following `docs/playbooks/new-module.md` (manifest, provider, folders, README stub, test stub).
- A dummy `example` module proves it works (route + migration + permission + admin menu item).
- Accept when: enabling/disabling `example` in client config adds/removes its route, permission and menu entry; invalid manifest fails boot with a clear error.

**T0.4 Architecture tests**
- Pest arch tests in `tests/Architecture/`: core must not use `Modules\`/themes; modules must not use other modules; vendor SDKs only in adapters; no float money.
- Accept when: deliberately adding a forbidden import makes the suite fail (show this in the summary, then revert it).

### Week 2: identity and admin shell
**T0.5 Identity and permissions**
- Auth, password reset, mandatory 2FA for admin users, login rate limiting.
- Roles/permissions per module (Spatie permission), seeded from manifests.

**T0.6 Settings, audit log, admin shell**
- Layered, schema-validated settings (platform -> module -> client) with an admin settings UI.
- Audit log (Spatie activitylog) for settings, roles, and later prices/balances.
- Filament panel whose navigation is assembled from enabled modules' manifests and filtered by permission.
- Accept when: admin logs in with 2FA; toggling the `example` module changes the menu; settings changes are audit-logged.

### Weeks 3-5: orders, payments, ledger
**T0.7 Money and orders**: `Money` value object (integer minor units + currency), Order + OrderItem, state machine (see architecture doc section 9), status history. Tests for every allowed and forbidden transition.
**T0.8 Payments skeleton**: `PaymentGateway` interface, one sandbox adapter, payment records, idempotency keys, webhook endpoint (signature check, dedupe, raw payload, queued processing), refunds.
**T0.9 Ledger**: append-only ledger, balances derived from entries, reversing entries, audit for manual adjustments.
Accept when: an order can be created, paid in sandbox, completed, refunded; duplicate webhook delivery changes nothing; ledger balances reconcile.

### Weeks 6-7: themes and client tooling
**T0.10 Theme engine**: design tokens, shared Blade component library, layout slots, `theme.yaml`, two base themes, view-model contracts.
**T0.11 Client tooling**: `client:new <name>` creates `clients/<name>/client.yaml`, `.env` template, DB, runs migrations + niche presets; deploy script/pipeline; nightly backup + restore script and a restore test.
Accept when: a new client site is deployed from configuration in about one day with a chosen theme and modules.

### Week 8: readiness
**T0.12 Observability and docs**: structured logs with correlation IDs, Sentry, uptime check, failed-job visibility, runbooks (payment provider down, DB restore), updated module README template.
Phase 0 exit: deploy a "hello client" from config in a day; money/webhook/ledger flows tested; architecture tests enforced in CI.

## Phase 1: entry products (months 2-3)
- `company` engine, then `commerce` engine MVP. Three demo sites. Contracts and care plans. First niche landing pages.
- Exit: 3-5 paying clients, at least 2 on care plans.

## Phase 2: differentiators (months 4-6)
- `topup` engine (see `docs/02-product-families.md`), reseller tiers and wallet, supplier adapter with failover; `booking` engine.

## Phase 3: expansion (months 7-12)
- `learning`, AI support bot, marketplace v1 (limited), partner/white-label licensing.

## Phase 4: platform (year 2)
- business-suite wave 1 as SaaS, hosting billing, AI workspace, multi-tenant hosting.

## Gate for starting any new family
A client has paid or signed for it, or at least 5 qualified leads asked for it.
