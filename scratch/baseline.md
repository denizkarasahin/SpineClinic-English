# Baseline — committed defaults before the model-integrity fixes

Harness: headless Edge (CDP) driving the real pages, localStorage cleared, live-FX endpoints blocked → fixed committed rate ₺53.93. `V._version` 57. Commit `0ed56a6` (the v57 V snapshot that was pending in the working tree, committed first on this branch). All € figures at ₺53.93.

## Headline outputs

| Output | Value |
|---|---|
| Year-1 net profit — Istanbul clinic | €15,067 |
| Year-1 net — B2B | €76,674 |
| Year-1 net — Istanbul + B2B (projection Y1) | €92K |
| Year 1–5 consolidated operating profit (flagship) | [92, 1026, 2027, 2355, 2393] €K |
| Year 1–5 EBITDA, whole business 100% | [92, 1096, 2132, 2355, 2393] €K |
| 5-year cumulative FCF | €5,942K (FCF by year [73, 774, 1525, 1771, 1799] €K) |
| DCF value | €13.71M (NPV €13,706K) |
| Terminal value (Year-5 EBITDA × 10×) | €23,930K, PV €10,460K |
| Terminal value share of DCF | 76.3% |
| Deal pre-money (DCF × (1 − 20%)) | €10.96M (€10,964,800) |
| Post-money | €13.04M |
| Investor stake | %19.02 |
| Investor return multiple (exit only, Base 10×) | 2.19× |
| Blended yield (Stage 2) | 147.3% (€2,393,000 ÷ €1,625,025) |
| Stage 1 box — Year-1 profit / yield | €15,067 / 3.4% |
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

Istanbul EBITDA = operating profit + expensed printer/branch capex ([0, 70, 105, 0, 0] €K). Satellites and B2B expense no capex, so their EBITDA = operating profit.

## Exit EV — every multiple scenario

| Table | Scenario | Multiple (as computed) | Exit EV |
|---|---|---|---|
| Summary (whole business 100%) | Base | 10× | €23,930,000 |
| Investor exit KPI (flagship) | Base | 10× | €23.93M |
| Investor Return Analysis | Conservative | 8× EBITDA | €19.14M (MOIC 1.76×, IRR 11.9%) |
| Investor Return Analysis | Base | 10× EBITDA | €23.93M (MOIC 2.19×, IRR 17.0%) |
| Investor Return Analysis | Optimistic | 13× EBITDA | €31.11M (MOIC 2.85×, IRR 23.3%) |
| Investor Return Analysis | For 3× MOIC | 13.7× EBITDA needed | €32.72M |
| Valuation Scenarios (Year 5) | Conservative (labelled 4×) | 6× (label + hidden +2×) | ~€14.36M |
| Valuation Scenarios (Year 5) | Base (labelled 6×) | 8× (label + hidden +2×) | ~€19.14M |
| Valuation Scenarios (Year 5) | Optimistic (labelled 9×) | 11× (label + hidden +2×) | ~€26.32M |
| MOIC sweep | 4× … 18× | sweep | 4× €9.57M · 6× €14.36M · 8× €19.14M · 10× €23.93M · 12× €28.72M · 15× €35.90M · 18× €43.07M |

## Reference: previous committed snapshot (`245afbd`, _version 56, ₺53.72)

The review's figures (Year-1 loss ≈ −€55K, cumulative profit ≈ €9.6M, 4.33×, blended yield 176%, Istanbul setup ≈ €244K) match this older snapshot evaluated at a live rate, not the v57 defaults. Same harness at v56:

| Output | v56 |
|---|---|
| Year-1 Istanbul net | -€56,925 (floored to 0 in the projection; €57K "opex gap" row) |
| Cumulative operating profit / multiple | €9,982,000 / 4.48× |
| Blended yield | 182.3% |
| DCF / pre-money / stake / MOIC | €17.66M / €14.12M / %16.10 / 2.24× |
| Total Committed | €2,227,429 |
