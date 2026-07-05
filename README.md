# Swiggy × DPDP Act 2023 — PM Case Study

**A Product Manager's answer to one question:** how should Swiggy take users' consent for their
personal data so it obeys India's **Digital Personal Data Protection (DPDP) Act, 2023** — without
adding friction that drives users away?

This repo is the full submission for the Vedantu PM case (see `Product Management Intern.pdf`). It
contains two deliverables:

| # | Deliverable | Where |
|---|---|---|
| 1 | **Product Thinking Deck** (10 slides) | [`Swiggy-DPDP-Final-PM-Case.pptx`](Swiggy-DPDP-Final-PM-Case.pptx) · [`.pdf`](Swiggy-DPDP-Final-PM-Case.pdf) |
| 2 | **Clickable Prototype** (React app) | [`code/`](code) |

New here? Read this page top-to-bottom — it explains the problem, the solution, and exactly how to
open the deck and run the prototype. No engineering background needed.

---

## 0. Why Swiggy?

The case lets you pick any consumer product. Swiggy is the sharpest fit for a DPDP consent study:

- **Scale + sensitivity of data.** ~24M+ monthly users, and the data is genuinely personal — live
  location, home/office addresses, payment tokens, order history. High stakes make the consent
  question real, not academic.
- **A super-app = the bundling problem in its purest form.** Food + Instamart + Dineout means one
  sign-up quietly authorizes many *different* purposes at once. That is exactly the "bundled
  consent" DPDP Section 6 outlaws — so Swiggy is the ideal place to show unbundling.
- **Children actually use it.** Minors order snacks on their own or a parent's phone, which triggers
  DPDP Section 9 (verifiable parental consent) — the highest-penalty, least-solved area.
- **A frequent, low-patience, high-friction moment.** People open Swiggy hungry and hurried, often
  in vernacular languages. If DPDP-valid consent can be made smooth *here*, it works anywhere — the
  friction-vs-compliance trade-off is at its hardest.
- **A live competitive edge.** Zomato is already piloting granular consent, so getting this right is
  a trust differentiator, not just a compliance chore.

In short: Swiggy maximizes the tension the case is really testing — **strong compliance need meeting
a ruthless low-friction expectation.**

---

## 1. The problem (in one minute)

Today, Swiggy's sign-up shows a single **"Accept All"** — one tap that bundles together:

- **Essential data** you can't get food without (phone, delivery address, payment), **and**
- **Optional data** that is really about growth (background location, cross-app marketing,
  third-party ad analytics).

Under the DPDP Act, consent must be **free, specific, informed, unconditional and affirmative**
(Section 6). Bundling everything behind one button is **none of those** — so that consent is legally
invalid. On top of that there's **no age gate**, so children's data (Section 9, the highest penalty
tier — up to ₹250 cr) is handled exactly like an adult's.

**Why it matters:** legal exposure (fines, audit failure), lost user trust (≈68% of Indian digital
natives weigh data transparency when picking an app), and a competitor opening (Zomato already
pilots granular consent).

📄 Full write-up: [`docs/ProblemStatement.md`](docs/ProblemStatement.md) ·
[`docs/Pain Point.md`](docs/Pain%20Point.md) · [`docs/Review Research.md`](docs/Review%20Research.md)

---

## 2. The solution — **Swiggy SARAL** (in one minute)

Treat consent as a **product feature, not a legal tax.** Move from *all-or-nothing* to
**just-in-time, just-enough, just-for-now.** Five pillars:

| Pillar | What it does | DPDP |
|---|---|---|
| **1 · Unbundled buckets** | Essential data = inline notice, no opt-out. Optional data = separate, **off-by-default** toggles. | S.6 |
| **2 · Just-in-time notices** | Don't ask at sign-up. Ask at the moment of need, with a clear value exchange (e.g. *"₹50 off if you enable WhatsApp offers"*). | S.6 |
| **3 · Plain-language, multilingual** | Every notice in simple language, 12 Indian languages (demo ships EN + हिं). | S.5 |
| **4 · Consent Ledger** | Every consent action signed & timestamped → auditable by the Data Protection Board. | audit |
| **5 · Children's gateway** | Age gate → verifiable parent consent → child account runs in a data-minimal mode. | S.9 |

**North-Star metric:** **Valid Consent Coverage Rate (VCCR)** — % of active users with explicit,
granular, ledger-verified consent. It captures *both* legal safety *and* that users aren't bouncing.

📄 Full write-up: [`docs/Solutioning.md`](docs/Solutioning.md) · metrics, rollout, risks and the
diagnostic playbook are all in the deck.

---

## 3. What's in this repo

```
Swiggy-DPDP-Final-PM-Case.pptx / .pdf   ← Deliverable 1: the 10-slide deck
docs/                                   ← everything behind the deck
  ProblemStatement · Pain Point · Review Research
  Solutioning · User Behaviour · User Segmentation   (the thinking, as markdown)
  slides/deck.json + slide-01..10.json               (slide-by-slide content spec)
  diagrams/*.mmd + *.png                             (KPI-tree & user-journey mermaids, etc.)
code/                                   ← Deliverable 2: the clickable prototype
  README · ARCHITECTURE · PHASES · ADR-001           (how it was built & reviewed)
  src/                                               (the React app)
```

---

## 4. How to open the deck (Deliverable 1)

Just open **[`Swiggy-DPDP-Final-PM-Case.pptx`](Swiggy-DPDP-Final-PM-Case.pptx)** in PowerPoint,
Keynote, or Google Slides — or the **[`.pdf`](Swiggy-DPDP-Final-PM-Case.pdf)** for a quick read.
10 slides map 1:1 to the case requirements (Problem → User → Current Experience → Solution →
Metrics → Diagnostics → Dashboard → Rollout → Risks → Conclusion).

*To regenerate the deck after editing `docs/slides/deck.json`, see
[`docs/README.md`](docs/README.md).*

---

## 5. How to run the prototype (Deliverable 2)

The prototype is a small web app (Vite + React). You need **Node.js 18+** installed once
(from [nodejs.org](https://nodejs.org)). Then, in a terminal:

```bash
cd code
npm install     # first time only — downloads dependencies
npm run dev      # starts the app
```

Open the link it prints (usually **http://localhost:5173**) in your browser. That's it.

> Prefer not to install anything? Deploy it free on **Vercel**: import this repo, set
> **Root Directory = `code`**, and click Deploy. The included `code/vercel.json` handles the rest.

---

## 6. How to use the prototype (the click-path)

It looks like the Swiggy app inside a phone frame. Follow the **happy path**:

**As an adult**
1. **Get started** → enter any 10-digit number → **Send code** → any 4 digits → **Verify**.
2. **Essentials** screen — see that only phone/address/payment are taken → **Agree & continue**.
3. **Age check** → tap **"I am 18 or older"** → you land on the Swiggy home screen.
4. Tap the **Instamart** tile → a **just-in-time** sheet asks for marketing consent with a **₹50
   offer** → tap **Allow**.
5. Tap the **🔏 Privacy Center** → toggle **marketing OFF** — this proves consent is as easy to
   withdraw as to give (DPDP S.7).
6. Tap **View my consent ledger** → see every action **signed & timestamped** → **Finish**.

**Try the child path:** at step 3 pick **"I am under 18"** → a **guardian-consent** screen appears →
approve → the home screen runs in **data-minimal** mode (optional toggles are locked off).

**Try another language:** tap **EN / हिं** in the phone's status bar — every notice re-renders.

> It's a demo: the OTP is fake (any digits work) and the consent ledger lives in your browser.
> A **Restart demo** button on the final screen clears it.

📄 Deeper docs: [`code/README.md`](code/README.md) (run/deploy detail) ·
[`code/ARCHITECTURE.md`](code/ARCHITECTURE.md) · [`code/PHASES.md`](code/PHASES.md) ·
[`code/ADR-001-prototype-architecture.md`](code/ADR-001-prototype-architecture.md)

---

## 7. Assumptions & honesty note

All numbers (24M MAU, drop-off %, opt-in %, penalty figures) are **directional PM estimates and mock
data**, not audited Swiggy metrics. The "current experience" is described from stated assumptions,
not privileged internal knowledge. DPDP section references were researched from the published Act.
This is a thinking exercise — the point is *how* the decisions are made, made explicit throughout.
