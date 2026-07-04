# Solutioning — Swiggy SARAL Progressive Consent Architecture

**SARAL** = **S**imple, **A**ccessible, **R**ational, **A**ctionable, **L**egal. (*saral* = "simple" in Hindi.)

**Core philosophy:** Treat consent as a **product feature, not a legal tax**. Move from *all-or-nothing* to **just-in-time, just-enough, just-for-now.**

## Five pillars

### Pillar 1 — Unbundled consent buckets
Split data into two immutable categories:
- **(A) Essential contract data** — no opt-out needed, inline notice only: phone (OTP + delivery), delivery address (fulfilment), payment token (transaction).
- **(B) Optional value-add data** — granular, **un-ticked**, affirmative toggles: background location, cross-service marketing (Instamart/Dineout), third-party analytics/ad personalization, partner data sharing.

### Pillar 2 — Just-in-time (JIT) micro-notices
Don't ask for everything at onboarding. Ask at the moment of need with a clear value exchange.
- **Location:** only when user taps *"Use current location"* — not at launch.
- **Marketing:** only when user first browses Instamart — *"Get ₹50 off if you enable WhatsApp alerts."*
- **Analytics:** only when idle on home, via a 1-tap plain-language card.

### Pillar 3 — Multilingual plain-language layer
Every notice in 12 languages, at an 8th-grade reading level, with an icon per data category.
> EN: *"We need your delivery address to bring your food. We do NOT share it with anyone else for ads."*
> HI: *"आपका खाना पहुंचाने के लिए हमें आपका पता चाहिए। हम इसे विज्ञापनों के लिए किसी और को नहीं देते।"*

### Pillar 4 — The Consent Ledger (backend)
Immutable, cryptographically-signed event log per consent action. Stores `user_id, data_category, purpose, timestamp, language, notice_version, device_fingerprint, consent_artifact_hash`. Auditable by the Data Protection Board in <2 minutes.
**Stack:** Kafka event streams → Consent Manager microservice → append-only WORM DB → Audit API.

### Pillar 5 — Children's data protection gateway
Age gate at onboarding (self-declaration + heuristic checks). If under 18 → **Guardian Consent Mode**: parent gets OTP + verifiable consent link. Child account runs **data-minimal**: no marketing, no background location, no analytics sharing.

## Why this solution (over alternatives)

| Alternative | Rejected because |
|---|---|
| Single-page granular checklist at onboarding | ~18% drop-off; violates low-patience user context |
| Post-first-order consent prompt | Delays marketing opt-in too late; loses new-user personalization window |
| OS-level permission only | Doesn't satisfy DPDP purpose-specific notice requirement |
| Third-party consent-manager plug-in | Vendor lock-in, slow iteration, weak vernacular UX |

**Chosen because it is:** compliance-first (maps to S.4/5/6/7/9), user-centric (JIT respects the hungry user), business-safe (essential flows unblocked), future-proof (Ledger integrates with external consent managers), and a **competitive moat** (first transparent-privacy food-tech app in India).

## How it resolves both problems at once
- **User problem:** no wall of text, plain language, one-tap revocation, visible control → trust.
- **Compliance need:** unbundled + affirmative + auditable + child-safe → DPDP-aligned.

*Related: [[ProblemStatement]] · [[Pain-Point]] · [[Review-Research]] — metrics & rollout live in the deck / slide JSON.*
