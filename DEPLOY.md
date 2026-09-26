# Deploying Callum C (web + dashboard)

Monorepo layout: `apps/web` (public landing, port 3000) · `apps/dashboard` (internal leads HQ, port 3001) · `packages/db` (shared Drizzle/libSQL layer).

## Local development

```bash
pnpm install
pnpm db:migrate          # creates dev.db at the repo root
pnpm db:seed             # founder accounts — passwords printed ONCE
pnpm db:seed:demo        # optional: + sample leads
pnpm dev:web             # http://localhost:3000
pnpm dev:dash            # http://localhost:3001
```

Both apps share the same root `dev.db`. Submit the landing contact form → the lead appears in the dashboard.

## 1 — Production database (Turso)

```bash
# https://docs.turso.tech — install the CLI, then:
turso auth signup
turso db create craftbyte
turso db show craftbyte --url          # → DATABASE_URL (libsql://…)
turso db tokens create craftbyte      # → DATABASE_AUTH_TOKEN
```

Run migrations + seed against production:

```bash
# from packages/db (PowerShell: $env:DATABASE_URL="…"; $env:DATABASE_AUTH_TOKEN="…")
DATABASE_URL=libsql://… DATABASE_AUTH_TOKEN=… pnpm migrate
DATABASE_URL=libsql://… DATABASE_AUTH_TOKEN=… pnpm seed
```

Save the printed founder passwords — they are shown once. Change them in dashboard Settings after first login.

## 2 — Vercel: two projects, one repo

Create **two** Vercel projects pointing at the same Git repo:

| Project    | Root Directory   | Domain suggestion        |
| ---------- | ---------------- | ------------------------ |
| web        | `apps/web`       | `callumc.id`       |
| dashboard  | `apps/dashboard` | `admin.callumc.id` |

Vercel auto-detects Next.js + pnpm workspaces. No custom build commands needed.

## 3 — Environment variables

| Variable              | web | dashboard | Notes                                   |
| --------------------- | :-: | :-------: | --------------------------------------- |
| `DATABASE_URL`        |  ✅  |     ✅     | Turso `libsql://…` URL                  |
| `DATABASE_AUTH_TOKEN` |  ✅  |     ✅     | Turso token                             |
| `SESSION_SECRET`      |  —  |     ✅     | `openssl rand -hex 32` — required       |
| `NEXT_PUBLIC_SITE_URL`|  ✅  |     —     | `https://callumc.id`              |
| `GOOGLE_MAPS_API_KEY` |  —  |    opt.   | Prospect finder (Places API New)        |
| `RESEND_API_KEY`      | opt. |     —     | New-lead emails to the team; unset = no email |
| `NOTIFY_FROM`         | opt. |     —     | Sender, e.g. `Callum C Leads <leads@callumc.id>` (domain verified in Resend) |
| `DASHBOARD_URL`       | opt. |     —     | `https://admin.callumc.id` — link in the email |

Missing `DATABASE_URL` or `SESSION_SECRET` in production fails loudly at boot — by design.

## Security notes

- Dashboard sends `X-Robots-Tag: noindex` on every response + `robots.txt` disallow-all; keep it off the sitemap and out of links on the public site.
- Sessions are HMAC-signed cookies (30 days). Rotating `SESSION_SECRET` invalidates all sessions instantly.
- Login has best-effort per-IP throttling (in-memory; serverless instances each keep their own counter). For two users this is adequate; add Upstash rate limiting if you ever open it wider.
- Password changes do NOT revoke existing sessions (token carries only userId+exp). Rotate `SESSION_SECRET` if a device is lost.

