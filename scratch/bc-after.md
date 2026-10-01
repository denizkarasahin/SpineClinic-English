# Business case — after (BC-1 … BC-7)

**Year-5 EBITDA €1,467K** (was €1,172K) · **cumulative FCF Years 1–5 €1,653K** (was €854K) · **peak funding need €1,344K** in Year 2 Month 5 (was €1,415K).

Same harness and definitions as scratch/bc-baseline.md; `_version` 61, `viewMode` "business". Only BC-4 (SGK) and BC-5 (head office) move numbers; the after state is identical, figure for figure, to the state measured right after the BC-5 commit, so BC-1/2/3/6/7 (mode flag, hiding, KPIs, sensitivity, text) change no number. Attribution: BC-4 measured at commit 6f970e2, then BC-5 on top (order-dependent). Peak funding need and payback, which did not exist before BC-3, were computed for the baseline by running the same read-only `computeBusinessCase()` against a checkout of the baseline commit 2417743.

## BEFORE / AFTER / DELTA

| Output | Before | After | Delta | Caused by |
|---|---|---|---|---|
| **Peak funding need** | €1,415K | **€1,344K** | −71K | BC-4 −33 · BC-5 −38 |
| **Year-5 EBITDA (network, 100%)** | €1,172K | **€1,467K** | +295K | BC-4 +245 · BC-5 +50 |
| **Cumulative FCF, Years 1–5** | €854K | **€1,653K** | +799K | BC-4 +632 · BC-5 +167 |
| EBITDA Y1–5, total (€K) | 32 / 422 / 968 / 1,146 / 1,172 | 62 / 542 / 1,203 / 1,427 / 1,467 | +30 / +120 / +235 / +281 / +295 | Y5: BC-4 +245 · BC-5 +50 |
| Revenue Y1–5, total (€K) | 455 / 1,218 / 2,279 / 2,755 / 2,889 | 455 / 1,403 / 2,669 / 3,243 / 3,405 | 0 / +185 / +390 / +488 / +516 | Y5: BC-4 +516 · BC-5 0 |
| FCF Y1–5, total (€K) | -185 / -1,061 / 371 / 849 / 880 | -163 / -940 / 576 / 1,075 / 1,105 | +22 / +121 / +205 / +226 / +225 | Y5: BC-4 +187 · BC-5 +38 |
| Cumulative FCF Y1–5 (€K) | -185 / -1,246 / -875 / -26 / 854 | -163 / -1,103 / -527 / 548 / 1,653 | +22 / +143 / +348 / +574 / +799 |  |
| Istanbul — EBITDA Y1–5 (€K) | -45 / 148 / 441 / 448 / 446 | -15 / 235 / 586 / 587 / 584 | +30 / +87 / +145 / +139 / +138 | Y5: BC-4 +112 · BC-5 +26 |
| Istanbul — revenue Y1–5 (€K) | 334 / 680 / 1,133 / 1,133 / 1,133 | 334 / 808 / 1,368 / 1,368 / 1,368 | 0 / +128 / +235 / +235 / +235 | Y5: BC-4 +235 · BC-5 0 |
| Istanbul — pre-tax cash flow Y1–5 (€K) | -259 / 113 / 406 / 448 / 446 | -229 / 200 / 551 / 587 / 584 | +30 / +87 / +145 / +139 / +138 |  |
| B2B — EBITDA Y1–5 (€K) | 77 / 186 / 240 / 240 / 240 | 77 / 186 / 240 / 240 / 240 | 0 / 0 / 0 / 0 / 0 | — (no SGK; its head-office share sits in Istanbul's row) |
| B2B — revenue Y1–5 (€K) | 121 / 306 / 395 / 395 / 395 | 121 / 306 / 395 / 395 / 395 | 0 / 0 / 0 / 0 / 0 | — |
| B2B — pre-tax cash flow Y1–5 (€K) | 77 / 186 / 240 / 240 / 240 | 77 / 186 / 240 / 240 / 240 | 0 / 0 / 0 / 0 / 0 |  |
| Izmir — EBITDA Y1–5 (€K) | 0 / 46 / 119 / 183 / 184 | 0 / 67 / 155 / 235 / 236 | 0 / +21 / +36 / +52 / +52 | Y5: BC-4 +44 · BC-5 +8 |
| Izmir — revenue Y1–5 (€K) | 0 / 126 / 297 / 446 / 446 | 0 / 163 / 358 / 538 / 538 | 0 / +37 / +61 / +92 / +92 | Y5: BC-4 +92 · BC-5 0 |
| Izmir — pre-tax cash flow Y1–5 (€K) | 0 / -96 / 119 / 183 / 184 | 0 / -75 / 155 / 235 / 236 | 0 / +21 / +36 / +52 / +52 |  |
| Ankara — EBITDA Y1–5 (€K) | 0 / 42 / 148 / 226 / 227 | 0 / 54 / 189 / 285 / 286 | 0 / +12 / +41 / +59 / +59 | Y5: BC-4 +50 · BC-5 +9 |
| Ankara — revenue Y1–5 (€K) | 0 / 106 / 343 / 515 / 515 | 0 / 126 / 414 / 621 / 621 | 0 / +20 / +71 / +106 / +106 | Y5: BC-4 +106 · BC-5 0 |
| Ankara — pre-tax cash flow Y1–5 (€K) | 0 / -141 / 148 / 226 / 227 | 0 / -129 / 189 / 285 / 286 | 0 / +12 / +41 / +59 / +59 |  |
| Bursa — EBITDA Y1–5 (€K) | 0 / 0 / 16 / 39 / 59 | 0 / 0 / 23 / 55 / 84 | 0 / 0 / +7 / +16 / +25 | Y5: BC-4 +21 · BC-5 +4 |
| Bursa — revenue Y1–5 (€K) | 0 / 0 / 59 / 141 / 212 | 0 / 0 / 71 / 170 / 256 | 0 / 0 / +12 / +29 / +44 | Y5: BC-4 +44 · BC-5 0 |
| Bursa — pre-tax cash flow Y1–5 (€K) | 0 / 0 / -136 / 39 / 59 | 0 / 0 / -129 / 55 / 84 | 0 / 0 / +7 / +16 / +25 |  |
| Gaziantep — EBITDA Y1–5 (€K) | 0 / 0 / 4 / 10 / 16 | 0 / 0 / 10 / 25 / 37 | 0 / 0 / +6 / +15 / +21 | Y5: BC-4 +18 · BC-5 +3 |
| Gaziantep — revenue Y1–5 (€K) | 0 / 0 / 52 / 125 / 188 | 0 / 0 / 63 / 151 / 227 | 0 / 0 / +11 / +26 / +39 | Y5: BC-4 +39 · BC-5 0 |
| Gaziantep — pre-tax cash flow Y1–5 (€K) | 0 / 0 / -148 / 10 / 16 | 0 / 0 / -142 / 25 / 37 | 0 / 0 / +6 / +15 / +21 |  |
| Braces Y1–5 — Izmir | 0 / 217 / 473 / 710 / 710 | 0 / 237 / 473 / 710 / 710 | 0 / +20 / 0 / 0 / 0 | BC-5: Izmir opens Month 13 instead of 14 (the smaller Year-1 head-office cost lets the 2nd-centre trigger fire a month earlier) |
| Braces — every other centre | unchanged | unchanged | 0 | SGK braces are now extra volume and the line is off by default, so private volume is the same as before |
| Setup capex — Istanbul | €214,183 | €214,183 | 0 | — |
| Setup capex — Izmir | €141,887 | €141,887 | 0 | — |
| Setup capex — Ankara | €183,137 | €183,137 | 0 | — |
| Setup capex — Bursa | €151,887 | €151,887 | 0 | — |
| Setup capex — Gaziantep | €151,887 | €151,887 | 0 | — |
| Istanbul fitting orthotists Y1–5 (+1 expert) | 1 / 2 / 2 / 2 / 2 | 1 / 2 / 2 / 2 / 2 | 0 | — |
| Istanbul fitting rooms Y1–5 | 1 / 2 / 2 / 2 / 2 | 1 / 2 / 2 / 2 / 2 | 0 | — |
| Istanbul printers Y1–5 | 2 / 3 / 4 / 4 / 4 | 2 / 3 / 4 / 4 / 4 | 0 | — |
| Payback from opening — Istanbul (clinic + B2B) | 20 mo | 17 mo | −3 mo | BC-4 → 19 mo · BC-5 → 17 mo |
| Payback from opening — Izmir | 21 mo | 18 mo | −3 mo | BC-4 → 18 mo · BC-5 → 18 mo |
| Payback from opening — Ankara | 20 mo | 17 mo | −3 mo | BC-4 → 17 mo · BC-5 → 17 mo |
| Payback from opening — Bursa | not within Y5 | 33 mo | — | BC-4 → 34 mo · BC-5 → 33 mo |
| Payback from opening — Gaziantep | not within Y5 | not within Y5 | — | BC-4 → not within Y5 · BC-5 → not within Y5 |

### Why the numbers moved

- **BC-4 — SGK is incremental, default off.** The baseline carved 30% of every centre's clinic braces out of private volume from Year 2 and priced them at SUT ₺17,500 (€289 net per SGK brace vs €494 private in Year 5). Now SGK braces are extra volume (`sgkIncrementalPct` 20% of private volume, SUT + ₺5,000 top-up = ₺22,500, no channel fee, 75-day receivables) and the line is **off** by default. Turning the carve-out off lifts Year-5 EBITDA by +245K and removes the SGK receivables (working capital back to €0). With SGK switched on (Summary sensitivity), Year-5 EBITDA rises by a further ~€305K, all of it contribution: at 20% extra volume Istanbul's fitting capacity absorbs the braces (orthotists and rooms unchanged; one extra printer in Year 3), and no satellite needs extra staff.
- **BC-5 — head-office add-on only.** Head office was €60K + €15K per extra centre (€60K / 90K / 120K / 120K / 120K) and described as finance, marketing, quality and IT — but marketing, business development and bookkeeping were already booked in Istanbul. It is now an add-on for functions not booked: €30K + €10K per extra centre, capped at €80K → €30K / €50K / €70K / €70K / €70K. Year-5 EBITDA +50K. The lower Year-1 cost also makes the 2nd-centre trigger fire earlier, so Izmir opens in Month 13 instead of 14 (more Year-2 Izmir revenue and EBITDA).

## BC-5 — central costs already booked (report)

All in Istanbul's Year-1 monthly engine, carried into Years 2–5 by Istanbul's structural cost base (×1.15 / 1.18 / 1.22 / 1.25). They serve the whole network, so the head-office add-on does not repeat them (values at the committed defaults, €53.93/€):

| Central cost already booked | Where | €/yr (Year 1) |
|---|---|---|
| Operator — business development, satellite roll-out, doctor relations (₺150,000 net/mo × SSI 1.6) | Fixed costs `operatorM` | €53K |
| Conferences / symposia, workshops / training, other periodic (doctor relations, central marketing) | Periodic costs `donemsel.kongre/atolye/diger` | €17K |
| Advertising / marketing (× multiplier 1.0) | Periodic costs `donemsel.reklam` | €6K |
| CPA / financial advisor (YMM), monthly + periodic | Fixed costs `ymmM` + `donemsel.ymm` | €2K |
| General expenses (admin) | Fixed costs `genelGider` | €2K |

No separate sales-rep or BD-manager line exists; physician acquisition is the operator's role. Satellites book only their own clinic costs (rent, expert orthotist, intern, kitchen, supplies, utilities + time-and-motion fitting/support staff), so no central function is booked twice. The add-on (€30K + €10K per extra open centre, cap €80K) covers only quality & regulatory (MDR / ISO 13485 QMS), IT & systems (CRM, scan/CAD licences), HR & payroll administration and group finance controlling beyond the YMM bookkeeping. The same list is rendered live on the Multi-Year Plan (Head-Office Add-On block).

## Visible-text grep, business mode

Searched every page's rendered text (`document.body.innerText`) in headless Edge after load, for: pre-money, post-money, stake(s), ticket, tranche, MOIC, IRR, exit, investor, dividend, cap table, frontman, convertible (case-insensitive, word boundaries where needed). Before reading the text, every inner tab was clicked and every tab pane, collapsed section and inline `display:none` element was forced visible. Only the business-mode CSS (`.inv-only`) stayed hidden, so text a viewer can reveal by expanding something is covered too.

| Pages | State | Hits |
|---|---|---|
| All 12 business-mode pages + investor.html / captable.html (both redirect to the Summary) | committed defaults | **0** |
| All 12 business-mode pages | all satellites Subsidiary, SGK on, adult/post-op/fracture on, royalty €75 | **0** |

Hits found and fixed along the way:
- Growth-page Subsidiary note and the four "remainder to local investors" slider labels now read "local partner" in business mode.
- Methodology: "Exit Value" in the B2B note.
- Competition, Market, Methodology and Formula Validation disclaimers: "not for investment decisions".
- Centre detail tables: "Total investment" is now "Total setup capex".
- B2B "Year-1 exit rate" is now "Year-1 closing (Month 12) rate".

Outside visible text:
- Page `<title>`s contain none of the terms, except investor.html ("Osteoid — Investor"), which redirects.
- No chart dataset label or `title` attribute on a business-mode page matches. The only matching chart labels ("Return on cash invested", "Lead Investor — Cash", "Doctor-Investor — Cash") draw into canvases that exist only on investor.html and captable.html.
- Comments and variable names in shared.js still use investor terms (not visible).

## Browser check

All 14 pages loaded in headless Edge (live FX blocked, `_version` 61, business mode): 0 exceptions, 0 console errors, no NaN/undefined text, no stuck "Loading…/Calculating…" placeholder. investor.html and captable.html redirect to the Summary; the nav shows 6 pages. Repeated in a non-default state (all satellites Subsidiary, SGK on, all upside segments on, royalty €75): same result. Investor mode restore: a copy with `"viewMode":"investor"` loads all 14 pages with 0 errors and the full 8-page nav (investor.html and captable.html load normally). The Summary's monthly cash path ties to year-end cumulative FCF in every year (difference 0); the validation-page FCF rebuild and setup checks stay ✓.

## Full after-state

## Braces per year (private clinic channel; B2B separately)

| Centre | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | 537 | 1,172 | 1,806 | 1,806 | 1,806 |
| B2B | 420 | 930 | 1,200 | 1,200 | 1,200 |
| Izmir | 0 | 237 | 473 | 710 | 710 |
| Ankara | 0 | 182 | 547 | 820 | 820 |
| Bursa | 0 | 0 | 94 | 225 | 338 |
| Gaziantep | 0 | 0 | 83 | 200 | 300 |

**SGK incremental braces (all centres):** 0 / 0 / 0 / 0 / 0

## Revenue (gross, list price × braces)

| Centre | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | €334K | €808K | €1,368K | €1,368K | €1,368K |
| B2B | €121K | €306K | €395K | €395K | €395K |
| Izmir | €0K | €163K | €358K | €538K | €538K |
| Ankara | €0K | €126K | €414K | €621K | €621K |
| Bursa | €0K | €0K | €71K | €170K | €256K |
| Gaziantep | €0K | €0K | €63K | €151K | €227K |
| Total | €455K | €1,403K | €2,669K | €3,243K | €3,405K |

## EBITDA

| Centre | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | −€15K | €235K | €586K | €587K | €584K |
| B2B | €77K | €186K | €240K | €240K | €240K |
| Izmir | €0K | €67K | €155K | €235K | €236K |
| Ankara | €0K | €54K | €189K | €285K | €286K |
| Bursa | €0K | €0K | €23K | €55K | €84K |
| Gaziantep | €0K | €0K | €10K | €25K | €37K |
| Total | €62K | €542K | €1,203K | €1,427K | €1,467K |

## Free cash flow

Per centre = pre-tax operating cash flow after expensed capex and that centre's setup capex (in its opening year). Tax is only computed for the whole business (25% CIT with a 5-year loss carryforward), so it appears as a total-level line, together with the IP licence + city exclusivity purchase (intercompany to Osteoid A.Ş.) and SGK receivables.

| Line | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Istanbul | −€229K | €200K | €551K | €587K | €584K |
| B2B | €77K | €186K | €240K | €240K | €240K |
| Izmir | €0K | −€75K | €155K | €235K | €236K |
| Ankara | €0K | −€129K | €189K | €285K | €286K |
| Bursa | €0K | €0K | −€129K | €55K | €84K |
| Gaziantep | €0K | €0K | −€142K | €25K | €37K |
| − Corporate tax (total) | −€11K | −€122K | −€288K | −€352K | −€362K |
| − IP licence & city exclusivity (intercompany) | €0K | −€1,000K | €0K | €0K | €0K |
| ± Working capital (SGK receivables) | €0K | €0K | €0K | €0K | €0K |
| **= FCF (total)** | −€163K | −€940K | €576K | €1,075K | €1,105K |
| Cumulative FCF | −€163K | −€1,103K | −€527K | €548K | €1,653K |

## Setup capex per centre (fit-out + equipment + pre-opening overheads)

| Centre | Setup | Opening year |
|---|---|---|
| Istanbul | €214,183 | Year 1 |
| Izmir | €141,887 | Year 2 |
| Ankara | €183,137 | Year 2 |
| Bursa | €151,887 | Year 3 |
| Gaziantep | €151,887 | Year 3 |
| **Total** | **€842,981** | |

## Istanbul capacity (time-and-motion engine)

| | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Fitting orthotists (+1 expert) | 1 | 2 | 2 | 2 | 2 |
| Fitting rooms | 1 | 2 | 2 | 2 | 2 |
| Printers | 2 | 3 | 4 | 4 | 4 |

Head office Y1–5: €30K / €50K / €70K / €70K / €70K (open centres 1 / 3 / 5 / 5 / 5).
