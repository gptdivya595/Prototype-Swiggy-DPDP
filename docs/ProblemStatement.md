# Problem Statement — Swiggy × DPDP Act 2023

**Product:** Swiggy consumer app — India's food-delivery & quick-commerce super-app (~24M+ MAU).
**Focus area:** The **onboarding consent experience** — the first legal touchpoint where personal-data collection is authorized.
**Author:** PM — Data & Privacy · **Date:** 2026-07-03
**Audience:** Executive Leadership, Legal, Engineering, Design

---

## The problem

Swiggy's current onboarding uses a single **"Accept All"** action (pre-ticked marketing box in some flows) that **bundles essential delivery data** (address, phone) **with optional behavioural data** (background location, cross-sell marketing, third-party analytics). Under the DPDP Act 2023 this is **coerced, non-specific consent** — legally invalid.

> Consent must be **free, specific, informed, unconditional and affirmative** (DPDP Act, Section 6). A single bundled checkbox satisfies none of these.

## Why it matters

| Lens | Stake |
|---|---|
| **Legal risk** | DPDP Section 6 invalidates bundled/coerced consent. Penalties up to **₹250 cr** (data breach) and **₹50 cr** (general non-compliance). Historical consent can be challenged retroactively. |
| **User trust** | ~68% of Indian digital natives rank *data transparency* as a top-3 app-selection criterion. Bundled consent erodes long-term LTV and hands a wedge to competitors. |
| **Children's data** | No age gate exists. Section 9 mandates **verifiable parental consent** for under-18s — currently absent, exposing the largest penalty tier. |
| **Business risk** | Post-enforcement, any user can challenge consent validity → class-action + regulatory audit failure. |

## Scope decision

We tackle **one high-impact area — the consent experience at onboarding** (plus the withdrawal/rights portal and children's data gateway that flow from it), rather than boiling the whole data estate. This is where invalid consent is *created*, so fixing it protects every downstream processing purpose.

## Assumptions (explicit)

1. Users currently hit a monolithic privacy-policy wall at signup; **granular toggles do not exist** at onboarding.
2. ~35% of the base are **low-digital-literacy** users who need plain-language, vernacular notices.
3. Marketing opt-in **will drop** when unbundled, but contextual just-in-time (JIT) prompts can recover 60%+ of lost opt-ins.
4. Children under 18 use Swiggy (own or guardian's device); **verifiable parental consent is required and currently missing.**
5. Public info + mock data are used throughout; numbers are directional PM estimates, not audited Swiggy figures.

## Key takeaway

> Decouple **essential service data** from **optional value-add processing** before DPDP enforcement — or risk catastrophic regulatory and reputational damage. Consent is a **product-architecture** problem, not a legal checkbox.

*Related: [[Pain-Point]] · [[User-Segmentation]] · [[User-Behaviour]] · [[Solutioning]] · [[Review-Research]]*
