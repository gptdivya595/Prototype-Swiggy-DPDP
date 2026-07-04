# Swiggy SARAL Prototype — 5-Phase Build Plan

Ordered, each phase independently verifiable. Matches [ARCHITECTURE.md](ARCHITECTURE.md).

## Phase 1 — Scaffold & deploy skeleton
**Goal:** a Vercel-deployable Vite+React+TS app that renders a phone frame.
- `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `.gitignore`.
- `vercel.json` (framework `vite`, `dist`, SPA rewrite) — deploy target correct from day one.
- `src/main.tsx`, `App.tsx` with router + `PhoneFrame` shell, `styles.css` Swiggy light theme.
- **Verify:** `npm install && npm run build` succeeds; dev server shows empty phone frame.

## Phase 2 — Consent core (the DPDP engine)
**Goal:** the data layer that makes every screen DPDP-provable.
- `consent/types.ts`, `consent/ledger.ts` (append-only + hash stub), `consent/ConsentContext.tsx`.
- `i18n.ts` EN/HI plain-language dictionary.
- `grant / withdraw / notice / hasConsent`, adult/child `mode`, `localStorage` mirror, `reset`.
- **Verify:** unit-ish smoke — grant then withdraw yields two ledger events; child mode blocks optional grants.

## Phase 3 — Onboarding happy path (Pillars 1, 3, 5)
**Goal:** clickable signup that takes only essential consent + branches on age.
- Screens: `Splash`, `PhoneOtp`, `Essentials` (inline essential notice), `AgeGate`, `GuardianConsent`.
- Components: `Button`, `ProgressDots`, `ConsentToggle`, language toggle in `PhoneFrame`.
- **Verify:** adult reaches Home with only `essential_delivery` events; child reaches guardian flow → data-minimal home.

## Phase 4 — Just-in-time optional consent (Pillar 2)
**Goal:** ask for optional data at the moment of need, with value exchange.
- `JitSheet` bottom-sheet component.
- `JitLocation` (triggered by "use current location"), `JitMarketing` (₹50 incentive on Instamart browse).
- Home wired to trigger JIT sheets; grants/denies write ledger events.
- **Verify:** declining a JIT keeps app fully functional (minimal mode); granting logs an `optional` event.

## Phase 5 — Rights, ledger view & polish
**Goal:** close the loop on user rights + auditability, then harden.
- `PrivacyCenter` (per-purpose state + one-tap revoke → S.7), `LedgerView` (audit trail), `Done`.
- "Reset demo" control; empty/edge copy; responsive check; favicon/brand.
- Prototype `README.md` with run + deploy steps and the click-path script.
- **Verify:** full adult path end-to-end; revoke marketing in Privacy Center appears in Ledger; production build clean.

## Definition of done
- `npm run build` green; static `dist/` deploys to Vercel via `vercel.json`.
- Every SARAL pillar visible in the click-through; each optional consent traceable in the ledger.
- Happy path is fully clickable start → finish for both adult and child variants.
