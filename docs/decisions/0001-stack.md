# ADR 0001: Laravel + Filament modular monolith

Status: accepted (Phase 0)

## Context
Solo developer, fluent in PHP and TypeScript. Nine product families, each mostly admin-heavy CRUD + orders + payments + webhooks,
with server-rendered storefronts that need good SEO. Time-to-first-revenue and low operational burden matter most.

## Decision
Laravel + Filament + PostgreSQL + Redis for Phases 0-3. One codebase (modular monolith), one Docker image, one deployment per client.
Server-rendered Blade/Livewire storefronts with token-driven themes.

## Reasons
- Filament covers most admin CRUD, tables, forms, widgets, and lets each module register its own navigation.
- Laravel ships queues, scheduler, notifications, validation, and mail; mature packages exist for permissions and audit logs.
- Server-rendered storefronts are SEO-friendly and avoid a second frontend codebase.
- One stack minimises maintenance for a solo operator.

## Consequences
- Less natural for highly interactive/streaming UIs; the AI Workspace may later become a separate TypeScript SaaS app.
- Multi-tenancy is deferred; code stays tenant-aware.

## Revisit when
- Phase 4 (AI Workspace / SaaS products), or if a hire/partner is primarily a JS/TS developer,
  or if a storefront needs a highly interactive client app.
