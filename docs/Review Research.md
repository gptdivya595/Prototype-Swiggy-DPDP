# Review & Research — DPDP Act 2023 + Current Experience

Evidence base for the case: what the DPDP Act requires, how Swiggy's current flow works (stated assumptions), and where it falls short.

## 1. DPDP Act 2023 — the requirements that bind us

| Section | Requirement | Plain-language meaning |
|---|---|---|
| **S.4** | Lawful processing | Process only with consent or a legitimate/"certain" use. |
| **S.5** | Notice | Tell users *what* data, *why*, and *how to withdraw* — in clear language + 22 scheduled languages. |
| **S.6** | Consent | Must be **free, specific, informed, unconditional, unambiguous, affirmative**. Bundling is invalid. |
| **S.6(4-6)** | Withdrawal | Withdrawing consent must be **as easy as giving it**. |
| **S.7** | Certain legitimate uses | Narrow carve-outs (e.g. the purpose the user voluntarily provided data for). |
| **S.8** | Data Fiduciary duties | Accuracy, security safeguards, breach notification, erasure on withdrawal. |
| **S.9** | Children's data | **Verifiable parental consent**; no behavioural tracking / targeted ads to minors. |
| **S.11–14** | Data-principal rights | Access, correction, erasure, grievance redressal, nomination. |

Penalties: up to **₹250 cr** (failure to prevent breach), **₹200 cr** (children's-data breach), **₹50 cr** (general). *Researched from the published Act; treat specifics as directional for this exercise.*

## 2. Current Swiggy experience (stated assumptions)

Step-by-step onboarding and the data collected at each step:

| Step | Stage | Action | Data collected |
|---|---|---|---|
| 1 | App launch | No privacy notice shown | Device ID, IP, install source (implicit) |
| 2 | Phone entry | Number entered for OTP, no separate consent | Mobile number, device fingerprint |
| 3 | Address permission | OS location dialog, no Swiggy-specific reason | Precise/coarse GPS |
| 4 | **The bundled wall** | "By continuing you agree to Terms, Privacy & Cookie Policy" + pre-ticked marketing | Blanket authorization for **all** processing |
| 5 | Home screen | Background tracking + marketing cookies + partner sharing begin | Behavioural signals, background location, browsing, cart |

## 3. Gap analysis — where Swiggy falls short

| DPDP principle | Current state | Severity |
|---|---|---|
| Free & unconditional consent (S.6) | Can't proceed without accepting all | **Critical** |
| Specific & informed (S.6) | One statement covers 12+ processing activities | **Critical** |
| Children's data & parental consent (S.9) | No age gate, no parental flow | **Critical** |
| Affirmative action (S.6) | Pre-ticked box, "by continuing" | High |
| Purpose limitation (S.5) | OTP phone reused for marketing | High |
| Right to withdraw (S.7) | Email-only, no in-app control | High |
| Notice in clear language (S.5/7) | Dense legal English, no vernacular | High |
| Data minimisation (S.4) | 24/7 background location | Medium |

## 4. Competitive & market signal

- Spotify-style JIT consent and Zomato's granular-toggle pilot show the direction of travel; **transparent privacy is becoming a differentiator, not just a compliance tax.**
- ~68% of Indian digital natives weigh data transparency in app choice → first-mover trust advantage is available.

## 5. Evidence rules / truth-in-labeling

- Numbers (MAU, drop-off %, opt-in %) are **directional PM estimates and mock data**, not audited Swiggy metrics.
- The gap analysis is based on the *stated-assumption* current flow, not privileged internal knowledge.

*Related: [[ProblemStatement]] · [[Pain-Point]] · [[Solutioning]]*
