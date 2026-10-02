# Playbook: add a new module

Use `php artisan make:module <name>` (created in T0.3). Then, in order:

1. **Decide the boundary.** Which tables does it own? Which Core contracts/events does it use? If it needs another module, move the shared part to Core instead.
2. **Fill `module.yaml`:** name, version, `requires.core`, permissions, events published, events listened, settings schema, admin menu.
3. **Settings schema first.** List every niche difference as config (JSON schema). If you are about to write `if ($niche ...)`, it belongs in config.
4. **Migrations:** tables prefixed `<name>_`; foreign keys only to Core tables; indexes for every frequent filter/join.
5. **Services:** business logic in service classes. Controllers/Livewire stay thin.
6. **Events/listeners:** publish domain events for anything other modules might care about; listen to Core events (e.g. `OrderPaid`).
7. **Adapters:** any external call goes through a Core interface + an adapter. Add contract tests.
8. **Money:** use `Money`; go through the order state machine; ledger entries for balances.
9. **Admin screens:** Filament resources/pages/widgets registered in the provider; permission-protected; audit-log sensitive actions.
10. **Storefront:** expose view-models for themes; no styling decisions in the module.
11. **Seeders/presets:** one preset per supported niche (categories, fields, templates, demo data).
12. **Tests:** manifest validity, permissions, happy-path flow, failure-path flow, architecture tests still green.
13. **Docs:** module README (purpose, public interface, events, settings, permissions, how to test), changelog entry, runbook for incidents.
14. **Definition of Done:** tick every item in `docs/01-architecture.md` section 15 before calling it finished.

Rule of three: first occurrence of a client-specific feature lives in `clients/<name>/custom/`; second time copy and compare;
third time extract into a library module with configuration for the differences.
