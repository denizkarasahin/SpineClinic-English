# Smooth upgrade ramp + base segments + CHANGES.md — after (branch `smooth-ramp`, `_version` 70 → 71, 2026-10-01)

Base: `origin/main` (95d762f). Headless Edge, committed defaults (core plan: Istanbul + B2B, Izmir, Ankara; adult / post-op / fracture on; SGK off), 7-year runs (Years 1–5 identical to the 5-year run).

## Headline

| | BEFORE | AFTER | Δ |
|---|---|---|---|
| Year-5 EBITDA | €1,633K | **€1,601K** | −€32K |
| Cumulative FCF, Years 1–5 | €3,701K | **€3,580K** | −€121K |
| Cumulative FCF, Years 1–7 | €6,151K | **€5,982K** | −€169K |
| Peak funding need | €235K (month 3) | **€234K** (month 3) | −€1K |
| Mature-year EBITDA | €1,633K | €1,601K | −€32K |
| of which adult / post-op / fracture — Year-5 EBITDA | €265K | **€264K** | −€1K |
| … — mature-year EBITDA / cumulative FCF 5 y / 7 y | €265K / €628K / €1,026K | €265K / €626K / €1,024K | |

Why it moves: Year 1 now reaches 30% upgrades at Month 12 instead of ~81% from Month 10 (lower Year-1 revenue and EBITDA), and the B2B line's Years 2–5 now run at its own path (37.5% / 50%) instead of carrying its Year-1 year-end mix (~78% upgrades). The clinic's Years 2–5 shares are unchanged (37.5% / 50%).

## Years 1–5 (€K)

| | BEFORE Y1–Y5 | AFTER Y1–Y5 | Δ |
|---|---|---|---|
| Revenue | €617K / €1,790K / €2,943K / €3,328K / €3,328K | €555K / €1,717K / €2,877K / €3,261K / €3,261K | −€62K / −€73K / −€66K / −€67K / −€67K |
| EBITDA | €166K / €799K / €1,459K / €1,638K / €1,633K | €134K / €764K / €1,428K / €1,606K / €1,601K | −€32K / −€35K / −€31K / −€32K / −€32K |
| Free cash flow | −€85K / €278K / €1,046K / €1,233K / €1,229K | −€109K / €252K / €1,023K / €1,209K / €1,205K | −€24K / −€26K / −€23K / −€24K / −€24K |
| Cumulative FCF | −€85K / €193K / €1,239K / €2,472K / €3,701K | −€109K / €143K / €1,166K / €2,375K / €3,580K | −€24K / −€50K / −€73K / −€97K / −€121K |

Payback from opening (months): BEFORE istanbul 13, izmir 17, ankara 15 · AFTER istanbul 14, izmir 17, ankara 15.

## Upgrade share (% of braces with at least one upgrade)

| | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Clinic BEFORE (realised) | 0.0% | 0.0% | 33.3% | 25.7% | 25.7% | 25.0% | 40.9% | 34.6% | 38.9% | 82.5% | 80.6% | 81.2% | 37.5% | 50.0% | 50.0% | 50.0% |
| Clinic AFTER — path | 0.0% | 0.0% | 3.0% | 6.0% | 9.0% | 12.0% | 15.0% | 18.0% | 21.0% | 24.0% | 27.0% | 30.0% | 37.5% | 50.0% | 50.0% | 50.0% |
| Clinic AFTER — realised (whole braces) | 0.0% | 0.0% | 3.3% | 5.7% | 8.6% | 11.4% | 15.9% | 17.3% | 20.4% | 23.8% | 27.4% | 29.0% | 37.5% | 50.0% | 50.0% | 50.0% |
| B2B BEFORE (realised) | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | 57.5% | 57.5% | 62.2% | 80.0% | 78.2% | 76.4% | 78.1% | 78.1% | 78.1% | 78.1% |
| B2B AFTER — path | 0.0% | 0.0% | 3.0% | 6.0% | 9.0% | 12.0% | 15.0% | 18.0% | 21.0% | 24.0% | 27.0% | 30.0% | 37.5% | 50.0% | 50.0% | 50.0% |
| B2B AFTER — realised (whole braces) | 0.0% | 0.0% | 4.0% | 8.0% | 8.6% | 11.4% | 15.0% | 17.5% | 20.0% | 24.4% | 25.5% | 30.9% | 37.5% | 50.0% | 50.0% | 50.0% |

Years 6–7: 50.0% / 50.0% (clinic and B2B).

**Monotonic:** clinic path ✓ never decreases (M1 → Y7); B2B path ✓ never decreases; realised Year-1 monthly shares at the defaults: clinic ✓, B2B ✓. The path is never decreasing by construction (an earlier point is capped at the later one); the realised monthly share can differ from the path by a fraction of a brace (whole braces per month), e.g. Month 12 clinic 29.0% vs 30.0%. BEFORE was not monotonic (clinic 33.3% in Month 3 → 25% in Month 6; 81% in Month 12 → 37.5% in Year 2).

## Checks

- All 14 pages: 0 exceptions / console errors, no NaN / undefined, no stuck "Loading…", no long decimals — at the defaults; with Phase 2 + 3, 7 years, SGK on and a changed path (start Month 5, Month-12 40%, long-run clinic 60% / B2B 40%); with the three segments off; investor-mode copy clean except the known two-decimal deal stakes on investor.html.
- Visible text, business mode, 12 pages: "upside outside the base", "outside the base", "premium mix", "premium share", "upside segment" — 0 hits (also 0 investor-deal terms). The one remaining "upside" on the site is "FX upside" (royalty in EUR), unrelated.
- Sensitivity, long-run share (Year 3+, clinic and B2B): 40% → Y5 EBITDA €1,550K; 50% (current) €1,601K; 60% €1,650K.
- PUB-2: CHANGES.md is on internal-notes only; after `smooth-ramp` reaches `main`, /CHANGES.md returns 404 (it remains in the public repo's history).
