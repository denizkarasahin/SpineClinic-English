# CHANGES — Business case (branch `business-case`, from `origin/fix/review-followups`; `_version` 60 → 61)

Baseline / after with BEFORE-AFTER-DELTA: `scratch/bc-baseline.md`, `scratch/bc-after.md`. New Year-5 EBITDA €1,467K (was €1,172K); cumulative FCF Years 1–5 €1,653K (was €854K); peak funding need €1,344K (was €1,415K). Only BC-4 and BC-5 move numbers.

- **BC-1** — `V.viewMode` ("business" default / "investor"), no UI toggle; the committed value wins over the cache. Investor content is hidden (`.inv-only` / `.biz-only` in style.css), never deleted; in business mode investor.html and captable.html leave the nav and prev/next chain and redirect to the Summary.
- **BC-2** — Hidden in business mode: use of funds, Stage 1/2 and total-investment boxes, exit value, investor-return sensitivity (Summary); investor cover tags, valuation milestone, Stage 1 note (Multi-Year Plan); DCF / exit EV / deal pre-money / investor return / Stage 2 yield definitions, investor funding and the valuation block of the cash-flow ledger (Methodology, Formula Validation); shareholders agreement, investor column, doctor-investor note and equity conversion right (agreement.html keeps the Channel Fee Agreement).
- **BC-3** — Summary business KPIs, all live: braces, revenue, EBITDA and margin per centre + B2B (Y1–5); unit economics per brace (clinic Y1 actual / Y5 mix, B2B, SGK when on); setup capex, opening, operating break-even, payback months and return on setup capital (Y3 EBITDA ÷ setup) per centre; cumulative FCF and peak funding need (lowest point of a monthly cash path tying to year-end cumulative FCF).
- **BC-4** — SGK is incremental volume: `sgkSharePct` (carve-out) → `sgkIncrementalPct` 20% of private clinic volume from Year 2; `sgkTopUp` 0 → ₺5,000; `sgkAktif` true → false (private channel first). SGK braces load fitting capacity; the SGK line shows its own braces, P&L and cash effect on the Multi-Year Plan.
- **BC-5** — Head office is an add-on for functions not already booked (operator/BD, YMM, general expenses, advertising, congresses and workshops stay in Istanbul's costs and are listed live): `hoCostY1Eur` 60,000 → 30,000, `hoPerCentreEur` 15,000 → 10,000, new `hoCapEur` 80,000 → €30K / 50K / 70K / 70K / 70K.
- **BC-6** — Summary sensitivity in business terms: Year-5 EBITDA, cumulative FCF and peak funding need for Istanbul share 15/20/25/30/50%, satellite share 30/50%, national market 15K/20K/25K, channel fee 20/25/30%, SGK off/on, royalty €0/€75 (intercompany to Osteoid A.Ş.), plus a "with upside" column (upside segments stay OFF in the base).
- **BC-7** — Texts address the business, the network and each centre: intros, disclaimers, local-partner wording for Subsidiary mode, "Total setup capex", B2B "Year-1 closing rate"; investor-mode wording kept behind `.inv-only`.

---

# CHANGES — Review follow-ups (branch `fix/review-followups`, from `origin/fix/market-size`; `_version` 59 → 60)

Baseline / after: `scratch/followups-baseline.md`, `scratch/followups-after.md`. New Year-5 EBITDA €1,172K (was €1,519K); investor return 1.34× / IRR 7.4% (was 1.75× / 14.8%).

- **FU-1** — agreement.html: "Channel Fee Agreement", "commission" → "channel fee", live 30% rate (Sci + Edu + Lib), frontman/grey-area note replaced; terms version 4 → 5.
- **FU-2** — Royalty slider + "€75/brace royalty (scenario)" preset + intercompany note on investor.html; base stays €0; group view nets royalty out.
- **FU-3** — Premium-mix ramp (`premiumMixY1/Y2/Y3` 25 / 37.5 / 50%, Y4–5 hold Y3) drives every centre's Years 2–5 unit revenue; Month-12 mix no longer inherited.
- **FU-4** — SGK channel from Year 2 (`sgkAktif`, `sgkSharePct` 30, `sgkPrice` 17,500, `sgkTopUp` 0, `sgkDelayDays` 75): own revenue line, no channel fee, receivables in FCF working capital.
- **FU-5** — Head office (`hoCostY1Eur` 60,000 + `hoPerCentreEur` 15,000/extra centre) in Year-1 monthly costs and, from Year 2, allocated to every centre by revenue share; "central functions for free" texts removed.
- **FU-6** — 50% added to the Summary sensitivity table; live footnote with Istanbul orthotists / rooms / printers per year at 30% and 50%.
- **FU-7** — "CE-marked" wording replaced (3 places); "no local substitute", patents and SRS/EUROSPINE listed in `scratch/content-flags.md`, discount-rate profile flagged, not changed.
- **FU-8** — Report only: satellites at 50% vs 30% target share compared in `scratch/followups-after.md`; defaults unchanged.
- **FU-10** — Valuation anchor solved, not committed: new live "Required pre-money for target return" tool on investor.html (`targetMoic` 1.5–4.0×, never writes `dealPreMoneyEur`); results in `scratch/valuation-anchor.md` (2.5× → €4.94M pre-money, 35.96% stake, IRR 25.2%).
- **FU-9** — Report only: publishing/password options in the hand-over summary; no repo or Pages setting changed.

---

# CHANGES — Market size (branch `fix/market-size`, from `fix/model-integrity`; `_version` 58 → 59)

Baseline / after with BEFORE-AFTER-DELTA: `scratch/market-baseline.md`, `scratch/market-after.md`. New Year-5 EBITDA €1,519K (was €2,393K); Istanbul clinic 1,806 braces/yr from Year 3.

- **MKT-A1** — pazarTR default 20,000 (V already 20,000 since v57; slider markup said 45,000), range 10,000–40,000.
- **MKT-A2** — pazarTR note replaced by the SOSORT/BrAIST/TÜİK/Yılmaz/Weinstein definition.
- **MKT-A3** — "Ministry of Health data" label removed; the "107→161/100K" claim was not present anywhere.
- **MKT-A4** — Market build-up block (kohortTR, braceablePct, bracePerCourse, otherPaedPct): computed paediatric market (18,145) next to pazarTR, >10% gap flagged, pazarTR never overwritten.
- **MKT-B5** — Adult, post-op and fracture upside segments (toggles OFF, low/base/high, "(assumption)", sources).
- **MKT-B6** — When ON, each is its own per-centre channel line (own SKU price, surgeon/trauma/physiatrist channel), only in separate "incl. upside" totals — never in the base, FCF, DCF or investor return.
- **MKT-C7** — pazarIstPct note rewritten; 30.1% base / 21% sensitivity preset buttons.
- **MKT-C8** — hedefOsteoidPay 60 → 30 (on request); Istanbul = 1,806/yr from Year 3.
- **MKT-C9** — Satellites unchanged on NufusPay × pazarTR (Y3: Izmir 473, Ankara 547, Bursa 94, Gaziantep 83).
- **MKT-C10** — 21 divergent `||` fallbacks for market inputs replaced by gv().
- **MKT-D11** — B2B is its own national line on the Summary (own EBITDA, braces, share of national market, own prices); Istanbul card clinic-only.
- **MKT-D12** — "Total braces"/share labels state clinic vs B2B; no clinic sum includes B2B.
- **MKT-E13** — Hedef Spine 3,000/yr (1,286 clinic / 1,714 B2B), operator-estimate label.
- **MKT-E14** — Aktif Ortez Protez row (Özgür Aydoğan) = Özgür's partner centre, 1,000/yr, excluded from competitor totals/average price.
- **MKT-E15** — Other four competitors unchanged, "Model estimate, to be verified".
- **MKT-E16** — Named supply total (9,460) next to pazarTR with the 15,000–25,000 note.
- **MKT-E17** — Competitor-page shares state "vs national market (pazarTR)" or "vs named supply"; competitor data moved into shared.js (was duplicated in two pages).
- **MKT-F18** — ortotistDkFitting 20 → 60 min (slider range to 90); Istanbul fitting orthotists Y1–5 = 1/2/2/2/2.
- **MKT-G19** — Live sensitivity table on index.html (Istanbul target share, Istanbul share, pazarTR → Year-5 EBITDA, investor return, IRR).
- **MKT-H20** — Market definition card + sources list on methodology.html; growth.html target-share note updated.
- **MKT-H21** — Paediatric-cohort demographics note on methodology.html.
- **MKT-I** — Page sweep clean (14 pages); `_version` 59; reports written.

---

# CHANGES — Review §4 "Model integrity" (branch `fix/model-integrity`, `_version` 57 → 58)

Baseline, after-state and the full BEFORE / AFTER / DELTA table: `scratch/baseline.md`, `scratch/after.md`. Report-only content items: `scratch/content-flags.md`. No operating assumption (market share, prices, ramps, fees, salaries, rent) was changed.

- **4-A1** — Setup capex (each centre in its opening year) and the €1.0M rights purchase (Stage 2 year) are now FCF/DCF outflows; group view nets the rights out. Cum. FCF €5,942K → €4,099K.
- **4-A2** — Bursa/Gaziantep setup counted once: excluded from Stage 2 and deducted from Year-3 FCF when self-funded, in Stage 2 otherwise; setup-funding reconciliation + cash ledger added.
- **4-A3** — Istanbul's operating result is no longer floored; a ramp-year loss stays in the P&L and cumulative profit, its financing only in the cash-flow block (no effect at v57; −€57K at v56).
- **4-A4** — DCF terminal value = Year-5 after-tax FCF × multiple; exit EV = Year-5 EBITDA × multiple, labelled EV/EBITDA; TV share of DCF shown (80.3%).
- **4-A5** — Deal pre-money is a negotiated input (`dealPreMoneyEur`, default €10,964,800 = the v57 output); DCF is a reference; `dcfNegotiationDiscount` removed.
- **4-A6** — One exit-multiple set (`dcfExitMult` ± `exitMultLowDelta`/`exitMultHighDelta`, + `multiCenterPremiumX` default 0); hidden +2× removed; valuation table labels now equal the calculation (8×/10×/13×).
- **4-A7** — "Blended yield" (147%) replaced by Stage 2 attributable yield (33.2%: only Stage-2-funded centres); "at Deniz's request" wording removed.
- **4-A8** — `setupOverheadC1–5` → itemised pre-opening overheads (`preOpenHire/Mkt/Legal/OtherC1–5`); existing amounts sit in "other (to be itemised)", new lines €0.
- **4-A9** — Fixed EUR/TRY by default (`eurKurSabit`, `eurKurTarih`); live rate behind an off-by-default header toggle (`liveFxAktif`); rate + date in every header; methodology "real 2026 terms" note.
- **4-A10** — Dividend payout slider (`dividendPayoutPct`, 60); investor return = dividends + exit proceeds + retained cash, separate lines; IRR from timed flows (2.19× exit-only → 2.76× total).
- **4-B11** — Revenue ladder (gross → net after doctor fees → operating profit / EBITDA) in every projection table; post-opex rows renamed "operating profit".
- **4-B12** — Satellite text aligned to the Branch defaults; satellite rows labelled by mode (branch = consolidated, subsidiary = memo).
- **4-B13** — "Total braces" label covers every centre open that year.
- **4-B14** — Istanbul Y2–5 cost described identically (capacity-built) on Multi-Year Plan and Methodology; stale flat-uplift note removed.
- **4-B15** — Every market-share figure names its denominator (national / Istanbul / city market / six competitors).
- **4-B16** — Implementation Timeline rendered from the live model (break-even, cumulative-positive, opening order, centres at target); diabetic-foot/cranial-helmet marked "revenue not modelled".
- **4-B17** — Cover date September 2026; "pre-revenue" dropped.
- **4-D** — Methodology / Formula Validation formulas updated; shared live ledger with FCF-identity and setup-funding checks.

---

# CHANGES — Metric definitions & Exit-Value reconciliation (PROMPT 7)

**What was wrong.** The label "EBITDA" was attached to three different bases: the
Summary/growth Exit Value multiplied a *pre-tax net profit with capex expensed*
(and a footnote admitted an "EBITDA≈net-profit convention"); the Investor DCF
applied the same exit multiple to *after-tax FCF*; the scenario table computed its
own third "Year-5 EBITDA". Three bases, one label.

**The fix — one metric ladder (`metricLadder(scope)` in shared.js), consumed everywhere:**

| Metric | Definition |
|---|---|
| **Operating profit** | revenue − all cash operating costs; equipment purchases expensed when incurred (this model has no capitalization/depreciation). |
| **EBITDA** | operating profit + that year's expensed equipment/setup added back; no depreciation is modeled because capex is expensed, no interest exists → a genuine EBITDA. |
| **FCF** | operating profit − 25% corporate tax (with 5-year loss carryforward). |
| **Exit Value** | Year-5 EBITDA × the exit-multiple slider; exit-year taxation not modeled (stated simplification). |

Every exit multiple now reads `metricLadder(...).ebitda[4]`: the Summary/growth
Exit box (`'100'` whole-business scope), the Investor DCF terminal value + Exit
KPI (`'investor'` flagship-consolidated scope), and the scenario + vt tables.
`computeDcfPremoney` gained a `tvBaseY5` param — EV-based terminal value on
EBITDA, interim years still on after-tax FCF (standard simple-DCF).

**Relabeling (no figure borrows another's name).** "Year-5 EBITDA (100%)" now
shows genuine EBITDA with an "Operating profit €Y" sub-line; figures that are
operating profit are labeled *operating profit* (were "net profit"); the vt table
taxes operating profit (not EBITDA). The "EBITDA≈net-profit convention" text is
deleted everywhere; methodology.html carries one four-line **Metric definitions**
block. The two Exit KPIs keep distinct scopes — "Exit Value — whole business
(100%)" vs "Exit Value — Year 5 (flagship scope)" — with a live **bridge line**
on investor.html: whole-business EV − satellite minority interest = flagship EV,
then × investor stake = the investor's own share. Both KPIs read the one
`dcfExitMult` slider.

**Headline KPI deltas at committed defaults** (Year-5 capex is 0 at defaults, so
EBITDA == operating profit there; the exit-multiple re-basing still moves the
DCF, which was on after-tax FCF):

| KPI | Before (§Prompt-6) | After (PROMPT 7) | Note |
|---|---|---|---|
| Whole-business Exit Value (Summary, 100%) | €31.04M | €31.04M | unchanged — Y5 capex 0; rises by capex×mult in any build-out year |
| Year-5 EBITDA (100%) box | €3.10M (labeled EBITDA, was net profit) | €3.10M EBITDA · €3.10M operating profit | now two honest lines |
| DCF Exit Value — Year 5 (flagship) | €23.33M (on after-tax FCF) | **€31.04M** (on EBITDA) | +€7.71M — an EV/EBITDA multiple belongs on EBITDA |
| DCF value (NPV) | €14.28M | **€17.65M** | terminal re-based to EBITDA |
| Deal pre-money (after 20% discount) | €11.43M | **€14.12M** | follows the NPV |
| Implied Investor MOIC at exit | 1.69× | **2.24×** | exit EV re-based |
| Blended yield (Stage 2) | 182.3% | 182.3% | unchanged — operating-profit based |
| Year-1 net / totals / Total Committed | −₺3,058,025 / [77,1209,2559,3033,3104] / €2,227,429 | (identical) | model math untouched |

**Acceptance checks (all pass).** Identity `EBITDA[4] − capex[4] === operating
profit[4]` exact for all years and both scopes. Bridge ties out on screen (Branch:
€31.04M − €0 = €31.04M; Subsidiary: €31.04M − €3.56M = €27.48M = the flagship KPI).
Both Exit KPIs track the one slider (10→8× → both €31.04M→€24.83M). With
`ekipmanOsteoidden=true` the capex add-back goes to 0 and EBITDA == operating
profit every year (no double-count). Every "EBITDA" string in the repo sits on a
ladder EBITDA figure, a multiple tag, or the definitions text.

---

# CHANGES — Time-and-Motion Capacity Engine (Prompts 1–6)

> **Prompt 6 addendum (B2B Years 2–5 revenue stream) — deltas vs. Prompt-5:**
> The wholesale/orthosis-store (B2B) channel now has a proper ramped Years 2–5
> stream (volume × year-end unit net) replacing the old arbitrary ×1.5–2.2
> multipliers. B2B is nearly pure margin (printers only, no rooms/staff), so
> the headline figures **rise**:
>
> | KPI | Prompt-5 | + B2B stream (Prompt-6) | Δ |
> |---|---|---|---|
> | Year-5 EBITDA (100%) | €2,865,000 | **€2,936,000** | +€71K |
> | Exit Value | €28,650,000 | **€29,360,000** | +€710K |
> | Total multiple | 4.15× | **4.28×** | +0.13× |
> | Consolidated net Y1–5 (€K) | [77,1106,2396,2793,2865] | [77,1176,2462,2879,2936] | — |
>
> B2B volume `b2bAdetRow` = **[420, 930, 1200, 1200, 1200]** braces/yr (Y1 =
> actual; ramps the monthly rate from the Y1 exit rate to the 1,200/yr target
> over 3 years, reaching it in Y3). Year-end B2B unit net ≈ **€202/brace**;
> B2B net contribution `b2bGrossRow` = [€79K (actual), €188K, €243K, €243K,
> €243K]. Y5 printers rise **6 → 7** (the extra B2B printer crosses in Y3,
> +€35K capex that year); the Growth-page Istanbul capacity line now splits the
> count by channel (e.g. "7 printers (6 B2C · 1 B2B)").
>
> **Two honest caveats:**
> 1. The Year-2 volume is **930** (the stated method — linear ramp of the
>    monthly rate — puts Y2 halfway), not the ~660 the prompt sketched; 660 is
>    the annualised exit rate, i.e. the ramp's *starting* anchor, not the Y2
>    value. Y3 reaches 1,200 exactly as specified.
> 2. Setting `b2bHedefAdetYil = 0` removes the **forward** B2B stream cleanly
>    (Y2–5 = 0, printers back to B2C-only 6) but does **not** return the
>    headline to the Prompt-5 numbers, because Prompt-5 already carried an
>    (unjustified) ×2.2 B2B projection in its totals. With B2B truly off,
>    Year-5 EBITDA is **€2,696,000** — lower than Prompt-5's €2,865,000, which
>    is the more correct baseline. Year-1 B2B (actual, €79K) always stays.
>
> **Follow-up tweaks (no default-KPI movement):**
> - B2B assumption sliders (Year-5 target, years-to-target) moved from the
>   Expenses capacity card to the **Multi-Year Plan** page as a "B2B Wholesale
>   Channel" panel in the Year-1 card — presented as a parallel flagship line
>   (printers only), not a satellite clinic.
> - The **capacity assumptions** (time-and-motion sliders) moved off the
>   Expenses page to a collapsible "Capacity assumptions (network-wide)" block
>   **under each clinic** on the Multi-Year Plan. They remain ONE shared set —
>   editing any clinic's copy updates all of them (same clinical process
>   everywhere). Expenses keeps the derived flagship capacity KPIs + space
>   check, now pointing to the plan for edits.
> - Removed the **Branch monthly rent** slider (`subeKiraAy`): the flagship's
>   overflow fitting-office now carries only its one-time fit-out + utilities;
>   branch/clinic rent economics live in the multi-year plan. Only bites when
>   Istanbul's rooms exceed the per-site max (never at defaults → no headline
>   change). `_version` 54 → 55.

---

# CHANGES — Time-and-Motion Capacity Engine (Prompts 1–5)

**What changed:** clinic footprint and staffing (fitting rooms, fitting orthotists,
workshop support staff, printers, branch offices) are now derived from a single
time-and-motion model instead of fixed headcount thresholds and flat cost
multiples. The engine drives the Year-1 monthly P&L, the Istanbul Year 2–5
projection, and every satellite. Gross revenue was left untouched.

The net effect is a **more conservative, more defensible** model: staffing and
capex now scale with the real weekend-peak patient load and printer throughput,
so every downstream return figure comes down from the previous flat-multiple
version. Nothing became artificially rosier.

---

## Headline KPIs at committed defaults — before vs. after

Before = dashboard at the start of this work (commit `931b1be`, `_version 51`).
After = capacity-engine version (`_version 53`). Same committed slider defaults;
only the derivation logic changed.

| KPI | Before | After | Δ |
|---|---|---|---|
| **Year-1 net** | −€27,439 (−₺1,474,025) | −€56,925 (−₺3,058,025) | −€29,486 |
| **Istanbul Year-5 net** | €1,837K | €1,775K | −€62K |
| **Year-5 EBITDA (100%, all 5 centers)** | €3,051,000 | €2,865,000 | −€186K |
| **Exit Value (Year-5 EBITDA × 10× multiple)** | €30,510,000 | €28,650,000 | −€1,860K |
| **Stage-2 blended yield** | 179.2% | 168.3% | −10.9 pts |
| **Total multiple (cum. 5-yr net ÷ Total Committed)** | 4.50× | 4.15× | −0.35× |
| **Cumulative net profit, 5-yr (100%)** | €9,912,000 | €9,237,000 | −€675K |

Consolidated net by year (€K, 100% all centers):
`[77, 1234, 2591, 2959, 3051]` → `[77, 1106, 2396, 2793, 2865]`

---

## Why each moved

- **Year-1 net (−€29K):** the monthly engine now hires a fitting orthotist
  (₺104K/mo gross) from Month 1 and sizes workshop support by throughput
  (1 support all year) instead of the old ≥40-braces threshold that only kicked
  in at Month 8. Real staffing, applied earlier.
- **Istanbul Year-5 net / EBITDA:** Years 2–5 opex is no longer a flat ×1.15–1.25
  on Year 1. The structural base still inflates, but fitting orthotists (1→2),
  support (1→2) and printer purchases (2 in Y2, 2 in Y3) are added on top as the
  ramp climbs — lumpy capex lands in the year acquired.
- **Satellites (−~€36K/yr each):** each satellite now carries a derived fitting
  orthotist + support line at full capacity, and its setup budgets printers
  sized to its own volume (the self-built branch previously budgeted **zero**
  printers).
- **Exit / multiple / blended yield:** all read off the lower Year-5 EBITDA and
  cumulative net, so they fall proportionally.

---

## Structural changes

1. **Capacity engine** (`clinicCapacityProfile`) — one pure function sizing
   printers, rooms, fitting orthotists, support staff and branches from a
   month's brace volume. Weekend/holiday-peak sizing (patients are school
   children). B2B consumes printers only.
2. **Year-1 monthly engine** — printer top-up trigger and staffing routed
   through the engine; `esikDestek` threshold retired (interns stay
   threshold-gated).
3. **Istanbul Y2–5** — capacity-derived opex (structural-base inflation +
   printer capex + derived staff + branch premises), replacing flat multiples.
4. **Satellites** — same engine, each with its own target volume; printer capex
   sized per-satellite; derived staff added; room-overflow warning (satellites
   never auto-open sub-branches).
5. **Consistency** — printer capacity range follows the `korsePerPrinterAy`
   slider; `printerAdetManual` override still wins over auto everywhere; new
   `V` keys fall back to defaults on the existing version-bump migration; a
   Year-5 space-sanity note (fitting-room m² vs. total m²) added to the
   Expenses capacity card.

## Known display note

`esikDestek` no longer drives the model (support staff is capacity-derived).
Its slider on Expenses/Fixed-Costs and the threshold rows on the
Methodology/Formula-Validation pages are legacy display only; the live P&L and
the Fixed-Costs support-staff indicator are routed through the engine. The two
validation pages read the real `window._lastYearly.istOpex` for Istanbul Y2–3
cost so their figures stay in sync with the model.
