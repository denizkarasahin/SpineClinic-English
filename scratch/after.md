# After — same outputs at the committed defaults, tip of `fix/model-integrity`

Harness: headless Edge (CDP) driving the real pages, localStorage cleared, live-FX endpoints blocked → fixed committed rate ₺53.93. `V._version` 58. Same harness and settings as scratch/baseline.md; the only V default changes are new keys (none of the existing assumptions moved) — see CHANGES.md.

## Headline outputs

| Output | Value |
|---|---|
| Year-1 net profit — Istanbul clinic | €15,067 |
| Year-1 net — B2B | €76,674 |
| Year-1 operating profit — Istanbul + B2B (projection Y1, Stage 1 box) | €92K / €91,742 |
| Year 1–5 consolidated operating profit (flagship) | [92, 1026, 2027, 2355, 2393] €K |
| Year 1–5 EBITDA, whole business 100% | [92, 1096, 2132, 2355, 2393] €K |
| Operating cash after tax | [73, 774, 1525, 1771, 1799] €K |
| − setup capex / − rights purchase | [214, 325, 304, 0, 0] / [0, 1000, 0, 0, 0] €K |
| FCF (centres-company / investor view) | [-141, -551, 1221, 1771, 1799] €K |
| 5-year cumulative FCF | €4,099K (group view, rights netted: €5,099K) |
| DCF value (reference only) | €9.79M (NPV €9,791K) |
| Terminal value (Year-5 after-tax FCF × 10×) | €17,990K, PV €7,864K |
| Terminal value share of DCF | 80.3% |
| Deal pre-money (negotiated input) | €10.96M (€10,964,800) |
| Post-money | €13.04M |
| Investor stake | %19.02 |
| Investor return multiple — dividends + exit + retained cash (Base 10×) | 2.76× (IRR 28.5%, timed flows) |
| ↳ dividends / exit proceeds / retained cash (investor share) | €678K / €4,551K / €496K |
| ↳ exit-only multiple | 2.19× |
| Stage 2 attributable yield (replaces blended yield) | 33.2% (€540,000 ÷ €1,625,025) |
| Stage 1 box — Year-1 profit / yield | €91,742 / 20.4% |
| Total Committed (Stage 1 + Stage 2) | €2,074,057 (€0.45M + €1.63M) |
| Cumulative operating profit 100% / multiple | €7,893,000 / 3.81× |

## Year 1–5 EBITDA per centre (€K)

| Centre | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | 15 | 763 | 1497 | 1490 | 1485 |
| B2B | 77 | 186 | 240 | 240 | 240 |
| Izmir | 0 | 81 | 163 | 244 | 244 |
| Ankara | 0 | 66 | 197 | 296 | 296 |
| Bursa | 0 | 0 | 24 | 58 | 87 |
| Gaziantep | 0 | 0 | 11 | 27 | 41 |
| Total (100%) | 92 | 1096 | 2132 | 2355 | 2393 |

## Exit EV — every multiple scenario (one set: 8× / 10× / 13×)

| Table | Scenario | Multiple | Exit EV |
|---|---|---|---|
| Summary (whole business 100%) | Base | 10× | €23,930,000 |
| Investor Exit EV KPI (flagship, EV/EBITDA) | Base | 10× | €23.93M |
| Investor Return Analysis | Conservative | 8× EV/EBITDA | €19.14M (total to investor €4.81M, MOIC 2.32×, IRR 23.3%) |
| Investor Return Analysis | Base | 10× EV/EBITDA | €23.93M (total to investor €5.72M, MOIC 2.76×, IRR 28.5%) |
| Investor Return Analysis | Optimistic | 13× EV/EBITDA | €31.11M (total to investor €7.09M, MOIC 3.42×, IRR 35.2%) |
| Investor Return Analysis | For 3× MOIC | 11.1× EBITDA needed | €26.55M |
| Valuation Scenarios (Year 5) | Conservative | 8× | ~€19.14M |
| Valuation Scenarios (Year 5) | Base | 10× | ~€23.93M |
| Valuation Scenarios (Year 5) | Optimistic | 13× | ~€31.11M |
| MOIC sweep (incl. dividends + cash) | 4× … 18× | sweep | 4× €9.57M → 1.44× · 6× €14.36M → 1.88× · 8× (Conservative) €19.14M → 2.32× · 10× (Base) €23.93M → 2.76× · 12× €28.72M → 3.20× · 13× (Optimistic) €31.11M → 3.42× · 15× €35.90M → 3.86× · 18× €43.07M → 4.52× |

## BEFORE / AFTER / DELTA

| Output | Before (baseline) | After | Delta | Caused by |
|---|---|---|---|---|
| Year-1 net profit — Istanbul + B2B (model) | €92K | €92K | 0 | — (Year 1 is profitable at v57, so 4-A3 changes nothing here; at v56 the −€57K loss now enters the P&L: cumulative €9,982K → €9,925K, 4.48× → 4.46×) |
| Stage 1 box — Year-1 profit shown | €15,067 | €91,742 | +€76,675 | 4-A3: box now shows Istanbul clinic + B2B (both Stage-1-funded), not the clinic alone |
| Stage 1 box — annual yield | 3.4% | 20.4% | +17.0 pts | 4-A3 (same basis change) |
| Year 1–5 EBITDA, per centre and total | [92, 1096, 2132, 2355, 2393] | [92, 1096, 2132, 2355, 2393] | 0 (every centre) | — no operating assumption changed |
| Consolidated operating profit Y1–5 (€K) | [92, 1026, 2027, 2355, 2393] | [92, 1026, 2027, 2355, 2393] | 0 | — |
| 5-year cumulative FCF | €5,942K | €4,099K | −€1,843K | 4-A1: setup capex (€214K Y1 + €325K Y2 + €304K Y3 = €843K) and the €1,000K rights purchase (Y2) are now outflows. 4-A2: Bursa/Gaziantep €304K is inside that single Y3 outflow (self-funded), not also left in "free cash" |
| DCF value | €13.71M | €9.79M | −€3.92M | 4-A1 (outflows) €13.71M → €12.39M; 4-A4 (TV on after-tax FCF₅ instead of pre-tax EBITDA₅) €12.39M → €9.79M |
| Terminal value | €23,930K (EBITDA₅ × 10) | €17,990K (FCF₅ × 10) | −€5,940K | 4-A4 |
| Terminal value share of DCF | 76.3% | 80.3% | +4.0 pts | 4-A1 raises it (≈84% — the build-out outflows sit in Y1–Y3), 4-A4 brings it back to 80.3%; now shown on the Investor page |
| Deal pre-money | €10.96M | €10.96M | 0 | 4-A5: now a negotiated input, default = the v57 baseline output. Without 4-A5, 4-A1 + 4-A4 would have dragged it to €7.83M |
| Post-money | €13.04M | €13.04M | 0 | 4-A5 (fixed pre-money; ticket unchanged) |
| Investor stake | %19.02 | %19.02 | 0 | 4-A5 |
| Investor return multiple | 2.19× (exit only) | 2.76× (dividends + exit + retained cash) | +0.57× | 4-A10: dividends €678K (60% payout) + retained cash at exit €496K added to the €4,551K exit share; exit-only part unchanged at 2.19× |
| Investor IRR (Base) | 17.0% (MOIC^(1/5)−1) | 28.5% (timed flows) | +11.5 pts | 4-A10: dividends included; Stage 2 timed at its release year instead of all at closing |
| "For 3× MOIC" multiple needed | 13.7× EBITDA needed | 11.1× EBITDA needed | −2.6× | 4-A10 (dividends + retained cash count toward the 3×) |
| Blended yield → Stage 2 attributable yield | 147.3% (whole network ÷ Stage 2) | 33.2% (Izmir + Ankara ÷ Stage 2) | −114.1 pts | 4-A7: numerator is now only the centres Stage 2 funds (€540K vs €2,393K) |
| Exit EV — Summary 100% / Investor KPI | €23,930,000 / €23.93M | €23,930,000 / €23.93M | 0 | — (same EBITDA₅ × 10×; now explicitly labelled EV/EBITDA, 4-A4) |
| Exit EV — Return table 8× / 10× / 13× | €19.14M / €23.93M / €31.11M | €19.14M / €23.93M / €31.11M | 0 | — (this table already used base −2/+3; 4-A6 makes it the single set) |
| Exit EV — Valuation Scenarios table | ~€14.36M / ~€19.14M / ~€26.32M (labelled 4×/6×/9×, computed 6×/8×/11×) | ~€19.14M / ~€23.93M / ~€31.11M (8×/10×/13×) | +€4.78M / +€4.79M / +€4.79M | 4-A6: hidden +2× removed and the table moved onto the single multiple set; labels now equal the calculation |
| Total Committed / Stage 1 / Stage 2 | €2,074,057 / €0.45M / €1.63M | €2,074,057 / €0.45M / €1.63M | 0 | — (4-A8 renamed/itemised the overheads without changing amounts; 4-A2 reconciliation ✓) |
| Cumulative operating profit 100% / multiple | €7,893,000 / 3.81× | €7,893,000 / 3.81× | 0 | — at v57 (see first row for the v56 effect of 4-A3) |

## Consolidated cash-flow checks (live, all ✓)

- Cumulative FCF = Σ(EBITDA − tax − capex − rights ± working capital): [92, 1096, 2132, 2355, 2393] − tax [19, 252, 502, 584, 594] − expensed capex [0, 70, 105, 0, 0] − setup [214, 325, 304, 0, 0] − rights [0, 1000, 0, 0, 0] ± WC [0, 0, 0, 0, 0] = [-141, -551, 1221, 1771, 1799] → Σ €4,099K. Rebuilt exactly in every year (the Methodology / Formula Validation ledger shows the same check live).
- Setup funding: Stage 1 €214,183 (Istanbul) + Stage 2 €325,025 (Izmir + Ankara) + self-funded from free cash €303,775 (Bursa + Gaziantep) = €842,983 = the total setup the FCF stream deducts. With the Bursa/Gaziantep toggle OFF: Stage 1 €214,183 + Stage 2 €628,800 + self-funded €0 = €842,983; FCF unchanged, cash balance +€304K (investor-funded instead).
- Year-end cash balance (investor inflows + FCF, before dividends): [308, 1382, 2603, 4374, 6173] €K — never negative at the defaults.

## Browser check

All 14 pages (index, market, korse, expenses, growth, investor, captable, methodology incl. its Formula Validation tab, setup, fixed, periodic, competition, formula-validation, agreement) loaded in headless Edge: 0 exceptions, 0 console errors, no "Loading…/Calculating…" placeholder left, no NaN/undefined text, header shows "Rate used: ₺53.93 · fixed model rate, as of 20 Jul 2026". Stress scenarios (subsidiary mode, sum-of-parts, royalty €75, Bursa/Gaziantep investor-funded, +1× premium, 10% market share, Izmir/Bursa off) also run without errors and keep both identity checks ✓.
