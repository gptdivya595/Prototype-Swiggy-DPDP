# Swiggy × DPDP — Product Thinking docs

Source package for the light-mode **Swiggy DPDP Act 2023 Product Thinking Deck**
(`../Swiggy-DPDP-Final-PM-Case.pptx` / `.pdf`). Format modeled on the Spotify
*Discovery-Compass-Final-PM-Case* deck, rebuilt light-mode for Swiggy. Covers all 10 areas of
*Product Management Intern.pdf* (Vedantu case).

## Narrative docs
- [ProblemStatement.md](ProblemStatement.md) — product, focus (onboarding consent), why it matters, assumptions.
- [Pain Point.md](Pain%20Point.md) — user pains mapped to DPDP gaps.
- [User Segmentation.md](User%20Segmentation.md) — Priya / Ramesh / Ananya personas + segmentation axes.
- [User Behaviour.md](User%20Behaviour.md) — consent behaviour loop + design implications.
- [Review Research.md](Review%20Research.md) — DPDP Act requirements, current flow, gap analysis.
- [Solutioning.md](Solutioning.md) — Swiggy SARAL 5-pillar architecture + alternatives.

## Slide spec
- [slides/deck.json](slides/deck.json) — authoritative light-mode render spec (design system + 10 slide specs). Source for the builder.
- `slides/slide-01.json … slide-10.json` — per-slide split (reference parity).

## Diagrams (`diagrams/`)
Mermaid source (`.mmd`) + rendered PNG (via `@mermaid-js/mermaid-cli`, light theme):
- **kpi-tree** — VCCR North Star tree *(required)*
- **user-journey** — current bundled loop vs SARAL intervention *(required)*
- **hypothesis-tree** — diagnostic 15%-drop branches
- **consent-architecture** — SARAL 5-pillar system
- **rollout-timeline** — `.mmd` kept as source; the phase timeline is drawn natively in the deck.

## Build
```bash
# render diagrams (light mode)
cd docs/diagrams
for f in kpi-tree user-journey hypothesis-tree consent-architecture; do \
  npx -y @mermaid-js/mermaid-cli@10 -i $f.mmd -o $f.png -b white -t default -w 1800 -s 2; done
# build the deck
python3 ../../code/build_deck.py   # → ../../Swiggy-DPDP-Final-PM-Case.pptx
```

## Deliverable 2 — clickable prototype
The SARAL consent flow is implemented in [`../code`](../code) (Vite + React + TS, Vercel-ready).
See [`../code/README.md`](../code/README.md), [`../code/ARCHITECTURE.md`](../code/ARCHITECTURE.md),
[`../code/PHASES.md`](../code/PHASES.md), and [`../code/ADR-001-prototype-architecture.md`](../code/ADR-001-prototype-architecture.md).

## Deck ↔ PDF coverage
| Slide | PDF section |
|---|---|
| 1 | Problem Statement |
| 2 | User (persona · segmentation · pain) |
| 3 | Current Experience + DPDP gaps |
| 4 | Proposed Solution (SARAL) |
| 5 | Metrics + Success Criteria |
| 6 | Diagnostic Thinking |
| 7 | Dashboard |
| 8 | Rollout Plan |
| 9 | Risks & Trade-offs |
| 10 | Conclusion / decision ask |

## Evidence rules
All figures (MAU, drop-off %, opt-in %, penalties) are **directional PM estimates / mock data**, not audited Swiggy metrics. DPDP section references researched from the published Act; treat specifics as directional for this exercise.
