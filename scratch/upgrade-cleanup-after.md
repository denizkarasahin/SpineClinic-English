# Upgrade wording, upgrade take-rate, claims, publishing — after (branch `upgrade-cleanup`, `_version` 70, 2026-10-01)

Base: `origin/remove-stdr` (= `main` + DEF-3 snapshot defaults + VR-2 VR switch removal), because the task's base `origin/main` did not yet have those two decisions. The task's "no-VR case keeps its 50% cap" no longer applies — the no-VR case was removed in VR-2.

## Default figures — unchanged (headless Edge, committed defaults)

| | Before (`remove-stdr`, v69) | After (`upgrade-cleanup`, v70) |
|---|---|---|
| Core Year-5 EBITDA | €1,633K | €1,633K |
| Mature-year EBITDA | €1,633K | €1,633K |
| Cumulative FCF, Years 1–5 | €3,701K | €3,701K |
| Cumulative FCF, Years 1–7 | €6,151K | €6,151K |
| Peak funding need | €235K | €235K |

At the default take-rates (clinic 81 = 100 − the Month 10–12 standard share, B2B 78.3) every committed mix row is returned unchanged (identity check, clinic and B2B), so the model is identical by construction.

## Upgrade take-rate (core plan, 7-year runs)

| Clinic take-rate | Y5 EBITDA | Cum FCF Y1–5 | Cum FCF Y1–7 | Peak | Mature EBITDA |
|---|---|---|---|---|---|
| 40% | €1,592K | €3,602K | €5,990K | €235K | €1,592K |
| 60% | €1,633K | €3,695K | €6,145K | €235K | €1,633K |
| 80% | €1,633K | €3,701K | €6,151K | €235K | €1,633K |
| 81% (default) | €1,633K | €3,701K | €6,151K | €235K | €1,633K |
| 90% | €1,633K | €3,704K | €6,154K | €235K | €1,633K |
| B2B take-rate 50% (clinic 81%) | €1,602K | €3,609K | €6,011K | €235K | €1,602K |

Why 60–90% barely moves Years 2–5: Years 2–5 run on the separate upgrade ramp (premiumMixY2 37.5%, Y3+ 50%), which the take-rate only caps; the take-rate itself drives Year 1 from Month 10 (and the Month 1–9 ramp). Below 50% it starts to bind on Years 2–5 (40% row). For comparison — not implemented: if Years 2–5 ran at the 81% Month-10 level (ramp Y2 and Y3+ set to 81%), core Y5 EBITDA would be €1,755K, cumulative FCF €4,030K (5 y) / €6,660K (7 y).

## Wording and claims

- Visible text, business mode, all 12 pages: "premium mix", "premium-mix", "premium share", "premium positioning", "No local substitute", "patent-backed" — 0 hits (also 0 investor-deal terms). Investor-mode copy (investor.html, captable.html and 6 more): 0 hits for the same wording.
- Market / Competition comparison now shows: Osteoid base price ₺40,500 (live `korseF_stdRl`), workshop market average ₺36,620 (volume-weighted, 5 named competitors, excl. partner), competitor range ₺33,000 – ₺40,000. Note: the base price is above the top of the named competitors' range by ₺500.

## Pages

All 14 pages: 0 exceptions / console errors, no NaN / undefined, no stuck "Loading…", no long decimals — at the defaults; with Phase 2 + Phase 3, 7 years, SGK on and take-rates 40% / 50%; and in an investor-mode copy (only the two-decimal deal stakes on investor.html, the FIX-1 exception).

## Publishing (PUB-1)

Option (b): the internal files are removed from the site branch and live on `internal-notes` (this branch — only `scratch/`, `AUDIT.md`, `CLAUDE.md`, no site files). Option (a) (`/docs`) would need the Pages source setting changed, which is off limits. After `upgrade-cleanup` reaches `main`, these URLs return 404: /scratch/after.md, /scratch/baseline.md, /scratch/bc-after.md, /scratch/bc-baseline.md, /scratch/cm-after.md, /scratch/cm-baseline.md, /scratch/content-flags.md, /scratch/final-after.md, /scratch/followups-after.md, /scratch/followups-baseline.md, /scratch/market-after.md, /scratch/market-baseline.md, /scratch/valuation-anchor.md, /scratch/vr-p2-after.md, /AUDIT.md, /CLAUDE.md. Still served: CHANGES.md. The files remain in the git history of the public repository.
