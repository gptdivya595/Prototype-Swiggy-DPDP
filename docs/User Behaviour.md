# User Behaviour — How Users Deal with Consent Today

Observed / assumed behaviour around privacy prompts, and the loop it creates. Basis for JIT design.

## The current consent behaviour loop

1. **Trigger** — user downloads Swiggy, hungry / hurried. Goal = food, not privacy.
2. **Encounter** — hits the bundled "Terms wall" at signup.
3. **Evaluate** — 4,000-word policy, English-only, dense legalese → *cannot* parse in the moment.
4. **Shortcut** — taps "Accept All" / "Continue" to reach food faster (blind acceptance).
5. **Silent collection** — background location, analytics, partner sharing begin invisibly.
6. **Later surprise** — gets Dineout emails after ordering biryani → *"why do they have this?"* → distrust.
7. **Dead end** — wants to revoke, finds no in-app control → emails support or churns silently.

> The behaviour is **rational under time pressure**: the fastest path to food is to accept everything. The product *manufactures* invalid consent by design.

## Key behavioural insights

- **Low patience beats privacy concern in the moment.** Even privacy-conscious users tap "Accept All" when a meeting starts in 5 minutes. → *Don't ask at the worst moment.*
- **Value exchange changes behaviour.** Users *will* opt in when the ask is contextual and rewarded ("₹50 off for WhatsApp alerts"). → JIT + incentive recovers opt-ins.
- **Trust-first users need protection from themselves.** Rapid-tappers (Ramesh) will accept anything; the platform must default them to data-minimal, not exploit the habit.
- **Surprise is the trust-killer.** Data use the user didn't knowingly authorize is the #1 driver of privacy complaints, more than the collection itself.

## Counter-evidence (kept honest)

- Some users *want* personalization and happily share data for it → optional streams stay available, not removed.
- Not every user reads or cares → the design must be safe-by-default *and* frictionless for the indifferent.
- Removing all data collection would break legitimate service (live tracking, fraud) → **minimisation, not elimination.**

## Behavioural design implications → SARAL

| Behaviour | Design response |
|---|---|
| Blind-accept under time pressure | JIT: defer optional asks to the moment of need |
| Opt in for clear value | Incentivised, contextual marketing prompt |
| Rapid-tapping low-literacy users | Data-minimal default + vernacular plain language |
| Surprise → distrust | Transparent, itemised notice + one-tap revocation |
| Can't find controls | In-app Privacy Center, ≤3 taps to withdraw |

*Related: [[User-Segmentation]] · [[Pain-Point]] · [[Solutioning]] · [[ProblemStatement]]*
