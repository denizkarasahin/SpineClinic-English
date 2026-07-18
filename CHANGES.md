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
