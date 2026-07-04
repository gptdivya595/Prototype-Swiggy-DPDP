# ADR-001: SARAL Consent Prototype Architecture

**Status:** Accepted
**Date:** 2026-07-04
**Deciders:** PM — Data & Privacy (owner); reviewed via /architecture
**Constraints:** solo build, sub-day, must be clickable + Vercel-deployable, no real backend, evaluator opens a link.

## Context
Deliverable 2 needs a clickable, end-to-end, happy-path prototype of the SARAL progressive-consent onboarding. It is a demo, not production: the value is showing DPDP-valid consent UX (unbundling, JIT, plain language, withdrawal, children's gateway, audit ledger). Forces: minimal build risk, one-file Vercel deploy, mobile-first, every screen must be traceable to a DPDP principle.

## Decision
Build a **client-only Vite + React + TypeScript SPA** with an in-browser append-only Consent Ledger (React context + `localStorage`), deployed as a **Vercel static site** via a single `vercel.json` (framework `vite`, SPA rewrite).

## Options Considered

### Option A: Vite + React + TS SPA, client-only (CHOSEN)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low |
| Cost | Free (static) |
| Scalability | N/A (demo) — irrelevant |
| Team familiarity | High |

**Pros:** tiny dep tree → deterministic offline build; instant Vercel static deploy; no server/env; fast. **Cons:** ledger isn't a real WORM store (demo only); no SSR/SEO (irrelevant).

### Option B: Next.js app (mirrors Spotify prototype)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Medium |
| Cost | Free tier |
| Team familiarity | High |

**Pros:** Vercel-native, could add real API routes for a "real" ledger. **Cons:** heavier deps/build; serverless surface unneeded for a happy-path demo; more that can break in a time-boxed build. Overkill.

### Option C: Single static HTML + vanilla JS
**Pros:** zero build. **Cons:** state/routing/i18n hand-rolled → messier for a multi-screen branching flow; harder to keep DPDP mapping clean. Rejected.

## Trade-off Analysis
The core trade is **fidelity vs. delivery risk**. A real consent ledger (Option B with API + DB) is closer to the deck's backend but adds infra that can fail in a solo, sub-day build and adds nothing to a *happy-path* demo. Option A keeps the ledger as an honest, clearly-labelled client simulation while making every SARAL pillar visible and clickable. For a PM prototype whose job is to communicate thinking, A dominates.

## Consequences
- **Easier:** deploy (one `vercel.json`), iterate on screens, keep DPDP↔UI mapping legible.
- **Harder / to revisit:** the ledger must be explicitly labelled a simulation; if this graduates to a real pilot, swap `consent/ledger.ts` for the Kafka→WORM→Audit-API path in the deck.
- **Watch:** SPA deep-link 404s → mitigated by the Vercel rewrite; `localStorage` reset → add a "Reset demo" control.

## Review notes (go/no-go)
- ✅ Tech choice sound for constraints. **GO.**
- ✅ DPDP mapping is complete (S.5/6/7/9 + ledger) — keep the mapping table visible in the app footer or README so evaluators see intent.
- ✅ 5-phase plan is correctly ordered (deploy skeleton first de-risks Vercel; consent core before screens so screens are thin).
- 🔸 Adjustment: ship `vercel.json` in **Phase 1** (already planned) and run `npm run build` at the end of **every** phase, not just Phase 5 — catch TS/build breaks early.
- 🔸 Adjustment: make the child/data-minimal branch a first-class happy path (not an afterthought) since children's data is the highest-penalty DPDP tier and a differentiator.
- 🔸 Keep runtime deps to react, react-dom, react-router-dom only; everything else devDeps.

## Action Items
1. [ ] Phase 1 scaffold incl. `vercel.json`; verify `npm run build`.
2. [ ] Phase 2 consent core + i18n; smoke-test grant/withdraw + child block.
3. [ ] Phase 3 onboarding (adult + child branches).
4. [ ] Phase 4 JIT optional consent with value exchange.
5. [ ] Phase 5 Privacy Center + Ledger view + polish + README; final build.
