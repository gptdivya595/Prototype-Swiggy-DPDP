# User Segmentation — Personas & the Target Group

The people whose data is at stake. Segmentation drives who the consent UX must protect and how.

## Primary personas

### 1. Priya — The Privacy-Conscious Urban Diner
- **28, Bangalore.** Orders lunch 3×/week from office; Instamart on weekends. Instagram, LinkedIn, 6 finance apps.
- **Mental model:** understands Swiggy needs address + phone to deliver. Does **not** understand why it needs location when the app is closed, or why she gets Dineout emails after ordering biryani.
- **Privacy attitude:** shares data for clear value; deeply suspicious of dark patterns & hidden sharing.
- **Risk if we fail:** switches to Zomato.

### 2. Ramesh — The Low-Literacy Trust-First User
- **42, Tier-2 city.** First-time smartphone user; weekend family dinners; speaks Kannada at home.
- **Mental model:** doesn't read policies; assumes the app store / government protects him; taps "OK" on any popup to reach food faster.
- **Privacy attitude:** trusts brands by default; **needs protecting from his own rapid-tap habit.**
- **Risk if we fail:** silent churn after one confusing experience.

### 3. Ananya — The Digital-Native Minor (Child User)
- **16, student.** Orders snacks after tuition on her own or a parent's device; parent pays via UPI.
- **Mental model:** unaware browsing + location history is collected; guardian has zero visibility.
- **Privacy attitude:** N/A — DPDP places the **duty of protection on the platform**, not the child.
- **Risk if we fail:** ₹250 cr penalty tier (S.9) + guardian uninstall + social backlash.

## Segmentation axes (for design & measurement)

| Axis | Segments | Why it matters |
|---|---|---|
| **Privacy literacy** | High (Priya) · Low (Ramesh) | Drives language, defaults, friction tolerance |
| **Age** | Adult · **Under-18 (child)** | Triggers Guardian Consent Mode (S.9) |
| **Language** | English-first · Vernacular (60%+) | Drives 12-language plain-language layer |
| **Geography** | Metro · Tier-2/3 | Drop-off & vernacular testing focus |
| **Platform** | iOS · Android | ATT interaction, consent-signal capture |
| **Tenure** | New user · Legacy MAU (bundled consent) | Legacy needs a re-consent "Trust Refresh" |

## Target group for this case

**Primary:** new users at onboarding (all three personas pass through here) — because invalid consent is *created* at signup.
**Highest-protection cohort:** **under-18 child users** (Section 9) — currently unprotected, largest legal exposure.

## Why this problem matters per group
- **Priya:** poor consent UX = churn to a competitor.
- **Ramesh:** needs default protection; can't self-advocate.
- **Ananya's guardian:** legal + reputational landmine; no current mechanism to consent.

*Related: [[User-Behaviour]] · [[Pain-Point]] · [[ProblemStatement]] · [[Solutioning]]*
