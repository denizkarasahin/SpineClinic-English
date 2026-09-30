# Market-size changes — after

**New Year-5 EBITDA (whole business, 100%): €1,519K** (was €2,393K). Istanbul clinic volume from Year 3: **1,806 braces/yr** (20,000 × 30.1% × 30%).

Same harness as scratch/market-baseline.md; `_version` 59. Upside segments are OFF (defaults), so none of these figures include them.

## BEFORE / AFTER / DELTA

| Output | Before | After | Delta | Caused by |
|---|---|---|---|---|
| **Year-5 EBITDA (100%)** | €2,393K | **€1,519K** | −874K | MKT-C8 hedefOsteoidPay 60→30: −851K (Istanbul clinic 1485→634); MKT-F18 fitting 20→60 min: −23K (Istanbul +1 fitting orthotist from Y2) |
| Year 1–5 EBITDA (100%, €K) | 92 / 1096 / 2132 / 2355 / 2393 | 92 / 630 / 1258 / 1481 / 1519 | 0 / −466 / −874 / −874 / −874 | C8 (Y2–5) and F18 (Y2–5); Year 1 unchanged — monthly engine volumes and Y1 staffing unaffected |
| Istanbul clinic braces Y1–5 | 537 / 2075 / 3612 / 3612 / 3612 | 537 / 1172 / 1806 / 1806 / 1806 | 0 / −903 / −1,806 / −1,806 / −1,806 | C8: 20,000 × 30.1% × 30% = 1,806 from Year 3 (istRampYears 3); Year 1 is the monthly ramp (537) |
| Izmir braces Y1–5 | 0 / 237 / 473 / 710 / 710 | 0 / 237 / 473 / 710 / 710 | 0 | — (NufusPay × pazarTR 20,000 × 50% target share; pazarTR was already 20,000) |
| Ankara braces Y1–5 | 0 / 182 / 547 / 820 / 820 | 0 / 182 / 547 / 820 / 820 | 0 | — (NufusPay × pazarTR 20,000 × 50% target share; pazarTR was already 20,000) |
| Bursa braces Y1–5 | 0 / 0 / 94 / 225 / 338 | 0 / 0 / 94 / 225 / 338 | 0 | — (NufusPay × pazarTR 20,000 × 50% target share; pazarTR was already 20,000) |
| Gaziantep braces Y1–5 | 0 / 0 / 83 / 200 / 300 | 0 / 0 / 83 / 200 / 300 | 0 | — (NufusPay × pazarTR 20,000 × 50% target share; pazarTR was already 20,000) |
| B2B braces Y1–5 (national line) | 420 / 930 / 1200 / 1200 / 1200 | 420 / 930 / 1200 / 1200 / 1200 | 0 | — (now shown as its own line, MKT-D) |
| Istanbul EBITDA Y1–5 (€K) | 15 / 763 / 1497 / 1490 / 1485 | 15 / 297 / 623 / 616 / 611 | 0 / −466 / −874 / −874 / −874 | C8 (volume halved from Y2) 0 / −443 / −851 / −851 / −851; F18 (one more fitting orthotist) 0 / −23 / −23 / −23 / −23 |
| B2B EBITDA Y1–5 (€K) | 77 / 186 / 240 / 240 / 240 | 77 / 186 / 240 / 240 / 240 | 0 / 0 / 0 / 0 / 0 | — |
| Izmir EBITDA Y1–5 (€K) | 0 / 81 / 163 / 244 / 244 | 0 / 81 / 163 / 244 / 244 | 0 / 0 / 0 / 0 / 0 | — |
| Ankara EBITDA Y1–5 (€K) | 0 / 66 / 197 / 296 / 296 | 0 / 66 / 197 / 296 / 296 | 0 / 0 / 0 / 0 / 0 | — |
| Bursa EBITDA Y1–5 (€K) | 0 / 0 / 24 / 58 / 87 | 0 / 0 / 24 / 58 / 87 | 0 / 0 / 0 / 0 / 0 | — |
| Gaziantep EBITDA Y1–5 (€K) | 0 / 0 / 11 / 27 / 41 | 0 / 0 / 11 / 27 / 41 | 0 / 0 / 0 / 0 / 0 | — |
| Istanbul fitting orthotists Y1–5 (+1 expert) | 1 / 1 / 2 / 2 / 2 | 1 / 2 / 2 / 2 / 2 | 0 / +1 / 0 / 0 / 0 | F18: 60-min fittings triple fitting hours → 2 fitting orthotists from Y2; with 20-min fittings at the new (C8) volume it would be 1 / 1 / 1 / 1 / 1. Satellites stay at 1 each. |
| 5-year cumulative FCF | €4,099K | €1,862K | −2,237K | C8 −2,169K, F18 −68K |
| DCF value (reference) | €9,791K | €5,705K | −4,086K | C8 −3,973K, F18 −113K |
| Investor return (dividends + exit + retained cash) | 2.76× (IRR 28.5%) | 1.75× (IRR 14.8%) | -1.01× | C8 → 1.78×, F18 → 1.75×; stake unchanged (19.02%) because the deal pre-money is a fixed input |
| pazarTR / pazarIstPct / hedefOsteoidPay / ortotistDkFitting | 20000 / 30.1% / 60% / 20 min | 20000 / 30.1% / 30% / 60 min | hedefOsteoidPay −30 pts, fitting +40 min | C8, F18 (pazarTR was already 20,000 in the v57 snapshot; A1 only fixed the slider markup/range) |
| Total Committed | €2,074,057 | €2,074,057 | 0 | — (Year 1 unchanged) |

Changes with no effect on these outputs at the defaults: MKT-A (pazarTR already 20,000; build-up is a cross-check), MKT-B (upside OFF), MKT-C7/C10 (note, preset, fallbacks — the fallbacks only fired when a value was missing), MKT-D (labels/cards), MKT-E (competitor data feeds display only), MKT-G/H (display).

Year-3 volume per city (C9): Izmir 473, Ankara 547, Bursa 94, Gaziantep 83 braces (full-capacity targets 710 / 820 / 450 / 300 — Bursa/Gaziantep open in Year 3).

## Full after-state

| Input / output | Value |
|---|---|
| pazarTR | 20,000 |
| pazarIstPct | 30.1% |
| hedefOsteoidPay | 30% |
| ortotistDkFitting | 60 min |
| 5-year cumulative FCF | €1,862K |
| DCF value (reference) | €5.71M |
| Investor return (dividends + exit + retained cash) | 1.75× (IRR 14.8%, stake 19.02%) |
| Total Committed | €2,074,057 |
| Istanbul fitting orthotists Y1–5 (+1 expert) | 1 / 2 / 2 / 2 / 2 |

### Braces per year

| Line | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul clinic | 537 | 1,172 | 1,806 | 1,806 | 1,806 |
| Izmir | 0 | 237 | 473 | 710 | 710 |
| Ankara | 0 | 182 | 547 | 820 | 820 |
| Bursa | 0 | 0 | 94 | 225 | 338 |
| Gaziantep | 0 | 0 | 83 | 200 | 300 |
| B2B (national line) | 420 | 930 | 1,200 | 1,200 | 1,200 |

### EBITDA per centre (€K)

| Centre | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | 15 | 297 | 623 | 616 | 611 |
| B2B | 77 | 186 | 240 | 240 | 240 |
| Izmir | 0 | 81 | 163 | 244 | 244 |
| Ankara | 0 | 66 | 197 | 296 | 296 |
| Bursa | 0 | 0 | 24 | 58 | 87 |
| Gaziantep | 0 | 0 | 11 | 27 | 41 |
| Total (100%) | 92 | 630 | 1258 | 1481 | 1519 |

## Browser check

All 14 pages loaded in headless Edge with 0 exceptions, 0 console errors, no stuck "Loading…/Calculating…" placeholders and no NaN/undefined text; the Summary sensitivity table restores the defaults after its runs; the FCF-rebuild and setup-funding checks on the validation pages are ✓.
