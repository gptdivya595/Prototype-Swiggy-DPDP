# Swiggy SARAL — DPDP Consent Prototype

Clickable, happy-path prototype for **Deliverable 2** of the Vedantu PM case: how Swiggy takes
**DPDP Act 2023-valid consent** at onboarding without a wall of text.

Product thinking behind it: [`../docs/Solutioning.md`](../docs/Solutioning.md) ·
architecture: [`ARCHITECTURE.md`](ARCHITECTURE.md) · plan: [`PHASES.md`](PHASES.md) ·
decision record: [`ADR-001-prototype-architecture.md`](ADR-001-prototype-architecture.md).

## Stack
Vite + React 18 + TypeScript, `react-router-dom`, plain CSS. No backend — the Consent Ledger is
simulated client-side (React context + `localStorage`).

## Run locally
```bash
cd code
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/ (static)
npm run preview  # serve the build
```

## Deploy to Vercel
Import the repo, set **Root Directory = `code`**. [`vercel.json`](vercel.json) sets framework `vite`,
`outputDirectory dist`, and a SPA rewrite so deep links resolve. No env vars.
```bash
# or from the code/ folder:
vercel --prod
```

## Click-path (happy path)

**Adult**
1. Splash → **Get started**
2. Phone (any 10 digits) → **Send code** → OTP (any 4 digits) → **Verify**
3. **Essentials** — inline notice, phone/address/payment only → **Agree & continue**
4. **Age gate** → *I am 18 or older* → Home
5. Home → tap **Food** tile → JIT location sheet → **Allow**
6. Home → tap **Instamart** tile → JIT marketing sheet (₹50 offer) → **Allow**
7. Tap 🔏 **Privacy Center** → toggle **marketing OFF** (proves one-tap withdrawal)
8. **View my consent ledger** → signed, timestamped events → **Finish** → Done

**Child variant**: at the age gate pick *I am under 18* → **Guardian consent** (send → parent code →
approve) → Home in **data-minimal** mode (optional toggles locked off).

Language toggle **EN / हिं** lives in the phone status bar and re-renders every notice.

## SARAL pillars → where to see them
| Pillar | Screen |
|---|---|
| 1 Unbundled buckets | `Essentials` (inline) vs `PrivacyCenter` toggles |
| 2 Just-in-time notices | `JitSheet` on Home (location, marketing + incentive) |
| 3 Multilingual plain language | `i18n.ts`, EN/हिं toggle |
| 4 Consent Ledger | `LedgerView` (signed append-only events) |
| 5 Children's gateway | `AgeGate` → `GuardianConsent` → data-minimal Home |

## DPDP mapping
S.5 purpose limitation · S.6 free/specific/affirmative/unbundled consent · S.7 easy withdrawal ·
S.9 verifiable parental consent. Each screen footers the relevant section.

## Prototype limitations (explicit)
Happy path only; OTP simulated; ledger is an in-browser stand-in for the real Kafka→WORM→Audit-API
ledger in the deck; `localStorage` can be cleared (a **Restart demo** control resets it).
