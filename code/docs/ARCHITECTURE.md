# Swiggy SARAL — Prototype Architecture

Clickable, happy-path prototype of the **SARAL progressive-consent onboarding** described in
[../docs/Solutioning.md](../docs/Solutioning.md). Deliverable 2 of the Vedantu PM case.

## Goal & scope

- **Goal:** demonstrate, end-to-end and clickable, how Swiggy would take DPDP-valid consent without a wall of text.
- **In scope (happy path):** splash → phone+OTP → essential inline notice → age gate → JIT location → JIT marketing (with incentive) → home → Privacy Center (view + revoke) → Consent Ledger view. Child branch (guardian consent) shown as a happy-path variant. EN/HI language toggle.
- **Out of scope:** real backend, real OTP/SMS, real auth, edge-case handling, persistence beyond the browser. All consent events are simulated client-side.

## Non-functional requirements

| NFR | Choice |
|---|---|
| Deployable on Vercel with one `vercel.json` | Vite static build → Vercel static host + SPA rewrite |
| Zero server dependency (prototype) | 100% client-side; ledger in React state + `localStorage` |
| Fast cold build, few moving parts | Vite + React 18 + TypeScript, minimal deps |
| Reliable offline build (no flaky native deps) | No CSS framework, no chart libs; hand-rolled CSS |
| Mobile-first (Swiggy is a phone app) | Fixed ~390px phone frame, responsive container |

## Tech stack

- **Vite 5** + **React 18** + **TypeScript** — light, static output, Vercel auto-detected.
- **react-router-dom 6** — screen routing (`BrowserRouter` + Vercel rewrite to `/`).
- **Plain CSS** (`src/styles.css`) with the deck's light Swiggy palette (orange `#FC8019`).
- No other runtime deps → small `node_modules`, deterministic build.

## Component / module map

```
code/
  index.html                 # Vite entry
  vite.config.ts             # base '/', build outDir dist
  vercel.json                # SPA rewrites + framework hint
  package.json / tsconfig    # deps + TS config
  src/
    main.tsx                 # React root + Router
    App.tsx                  # route table + phone frame shell
    styles.css               # Swiggy light theme
    i18n.ts                  # EN/HI copy dictionary (plain-language layer)
    consent/
      types.ts               # ConsentPurpose, ConsentEvent, ledger types
      ConsentContext.tsx     # provider: ledger state, grant/withdraw, localStorage
      ledger.ts              # append-only signed-ish event log (hash stub)
    components/
      PhoneFrame.tsx         # device chrome + status bar + language toggle
      ConsentToggle.tsx      # un-ticked affirmative toggle (Pillar 1)
      JitSheet.tsx           # bottom-sheet just-in-time micro-notice (Pillar 2)
      ProgressDots.tsx       # onboarding progress
      Button.tsx
    screens/
      Splash.tsx             # brand + start
      PhoneOtp.tsx           # number + OTP (essential, inline notice)
      Essentials.tsx         # address + payment — inline essential notice (Pillar 1A)
      AgeGate.tsx            # self-declared DOB → adult vs child branch (Pillar 5)
      GuardianConsent.tsx    # child branch: parent OTP + verifiable link (Pillar 5)
      JitLocation.tsx        # JIT location ask at "use current location" (Pillar 2)
      JitMarketing.tsx       # JIT marketing ask + ₹50 value exchange (Pillar 2)
      Home.tsx               # app home; entry to Privacy Center
      PrivacyCenter.tsx      # per-purpose consent state + 1-tap revoke (S.7)
      LedgerView.tsx         # Consent Ledger audit view (Pillar 4)
      Done.tsx               # completion / summary
```

## Data model (client-side Consent Ledger)

```ts
type ConsentPurpose =
  | 'essential_delivery'   // phone, address, payment (inline, no opt-out)
  | 'location_bg'          // background/live location  (optional, JIT)
  | 'marketing_cross'      // Instamart/Dineout marketing (optional, JIT)
  | 'analytics_3p';        // third-party analytics/ads (optional, JIT)

interface ConsentEvent {
  id: string;
  purpose: ConsentPurpose;
  action: 'granted' | 'withdrawn' | 'noticed';
  category: 'essential' | 'optional';
  lang: 'en' | 'hi';
  noticeVersion: string;   // e.g. 'saral-v1'
  ts: string;              // ISO timestamp
  artifactHash: string;    // stub hash of (purpose|action|ts) → mimics signed ledger
}
```

- `ConsentContext` exposes `events`, `grant(purpose)`, `withdraw(purpose)`, `notice(purpose)`, `hasConsent(purpose)`, `mode` (adult/child), `lang`.
- Child accounts (Pillar 5) force **data-minimal**: optional purposes are hard-blocked; only `essential_delivery` + guardian record.
- Ledger is **append-only** in memory, mirrored to `localStorage` so refresh keeps the audit trail — mirrors the real WORM Consent Ledger conceptually.

## Key flows

**Adult happy path:** Splash → PhoneOtp → Essentials (inline notice) → AgeGate(adult) → Home → tap "use current location" → JitLocation(grant) → browse Instamart → JitMarketing(grant, ₹50) → PrivacyCenter (revoke marketing to prove S.7) → LedgerView → Done.

**Child variant:** AgeGate(<18) → GuardianConsent (parent OTP) → child home in data-minimal mode (optional toggles disabled with explanation).

## DPDP mapping (why the architecture, not just UI)

| DPDP | Where in prototype |
|---|---|
| S.6 unbundled/affirmative | Essentials inline vs `ConsentToggle` (un-ticked) + JIT sheets |
| S.5 purpose + plain language | `i18n.ts` EN/HI, per-purpose notice strings |
| S.7 easy withdrawal | `PrivacyCenter` one-tap revoke writes a `withdrawn` event |
| S.9 children | `AgeGate` → `GuardianConsent` → data-minimal mode |
| Ledger / auditability | `ledger.ts` append-only signed-ish events, `LedgerView` |

## Deployment

- Build: `npm run build` → `dist/`.
- `vercel.json`: framework `vite`, `outputDirectory dist`, SPA rewrite `/(.*) → /index.html`.
- Push repo → Vercel imports `code/` as root → static deploy. No env vars, no serverless.

## Risks / trade-offs (prototype)

- Client-only ledger is **not** a real WORM store — acceptable for a demo; documented.
- Simulated OTP (any 4 digits) — happy path only, per brief.
- `localStorage` persistence can be cleared — fine; a "Reset demo" control is provided.
