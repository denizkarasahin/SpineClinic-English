# AUDIT.md — Forensic Model Audit (2026-07-18)

**Scope:** shared.js (5,827 lines) + all 15 HTML pages, at committed defaults `_version 55`, `eurKur 53.72`.
**Method:** full read of shared.js; automated V-object dependency sweep across all pages; independent line-by-line recomputation of the Year-1 monthly engine, setup cost and fixed costs in Node (sandbox harness, no browser); targeted numerical confirmation of every suspected defect. **No code was changed.**

**Bottom line:** the Year-1 monthly P&L engine itself is internally correct — my independent recomputation matches `computeYear1()` to the lira (diff = 0 on setup, revenue, net, break-even month, fixed costs). The real defects are in the **projection/display layer**: one latent 53.7× currency-mixing bug in the per-center annual tables, hardcoded investor-page claims that contradict the live model at committed defaults, a tax stream that taxes a floored Year-1, and a family of stale labels left behind by the ramp-years sliders.

---

## 1. Headline numbers — hand recomputation vs code

All three headline figures were recomputed independently from the V defaults, outside the model's own code path:

| Headline | Independent calc | Code | Match |
|---|---|---|---|
| **Total Setup (Istanbul)** | ₺250,000 kira + ₺250,000 depozito + ₺500,000 emlakçı + 360m²×₺7,000 tadilat (₺2,520,000) + 360m²×₺6,750 deko (₺2,430,000) + ₺300,000 mobilya + ₺100,000 ruhsat + 2 printers×€35,000×53.72 (₺3,760,400) + robot €30,000×53.72 (₺1,611,600) = **₺11,722,000 = €218,206** | ₺11,722,000 | ✅ exact |
| **Fixed costs / month (Month-12 reference)** | ₺250,000 rent + ₺21,000 utilities (16.5K+1.5K+3K) + ₺144,000 expert orthotist (90K×1.6) + ₺104,000 fitting orthotist (65K×1.6) + ₺288,000 operator (180K×1.6) + ₺49,600 intern (31K×1.6) + ₺48,000 support (30K×1.6) + ₺10,000 YMM + ₺10,000 general = **₺924,600 = €17,211** | ₺924,600 | ✅ exact |
| **Year-1 total net (Istanbul B2C)** | 12-month loop rebuilt from scratch (mix split, largest-remainder rounding, fee/material/royalty deductions, capacity-derived staffing, quarterly stopaj, periodic netting) = **−₺3,058,025 = −€56,925** | −₺3,058,025 | ✅ exact |

Also reconciled: `basAy` = Month 10, `pozAy` = not reached in Y1 (trend estimate ~Month 25), 5-yr consolidated `totals` = [77, 1176, 2462, 2879, 2936] €K, Stage 1 = €525,121, Stage 2 = €1,702,308, Total Committed = €2,227,429, Y5 EBITDA(100%) = €2,936K — all consistent with CHANGES.md's committed-default table.

**Threshold semantics verified:** intern activates AT exactly the threshold (`>=`), tested at korse=21 (active, ₺49,600) vs 20 (inactive) — matches spec, no off-by-one. Support staff is capacity-derived (the `esikDestek` slider is inert — known, documented in CHANGES.md).

---

## 2. Findings table

Severity: **CRITICAL** = wrong money at committed defaults · **HIGH** = wrong under common/first-class scenario inputs · **MEDIUM** = wrong on edge or inconsistent basis · **LOW** = cosmetic/dead code.

No CRITICAL findings — every headline money number at committed defaults reconciles.

| ID | Sev | Where | What the code does | What it should do | Magnitude at defaults |
|---|---|---|---|---|---|
| **F1** ✅ **FIXED 2026-07-18** | **HIGH** | shared.js:3975, 3981, 4044–4045 | Annual Detail tables (growth.html): "Royalty / year", "Osteoid A.Ş. royalty" and "Cutting fee" rows compute `braces × €rate × eurKur / 1000` and label the result **€K** — the `× eurKur` converts to ₺, so the cell is ₺K displayed as €K | Drop `× (V.eurKur??50)` — `braces × €rate / 1000` is already €K (exactly what `window._lastRoyaltyRow` at :3847 correctly does) | €0 at defaults (royalty=0, kesim=0); at the documented €75 royalty reference: Istanbul Y3 shows **−€16,374K instead of −€305K — 53.7× overstated**, in every center's table |
| **F2** ✅ **FIXED 2026-07-18** | **HIGH** | shared.js:3248 (+3249–3256, 4135–4136, 3108) | Investor roadmap Year-1 card hardcodes "**Break-even ~Month 4 · Cumulative positive ~Month 11**"; year badges hardcode "Y2 40% / Y3 65% / Y4 85% capacity"; growth.html's y5PayKpi hardcodes "(target; **80% reached by Y5**)" for Bursa/Gaziantep | Bind to the live model: actual defaults are **break-even Month 10, cumulative positive NOT reached in Y1** (trend ~Month 25); with `istRampYears=3` the real ramp is Y2 50% / Y3 100% / Y4 100%; with `bursaRampYears=4` Bursa/Gaziantep reach **75%**, not 80% (renderSummary3yr already computes this correctly at :3067) | Investor page (investor.html) asserts break-even 6 months earlier and cash-positive ~14 months earlier than the committed-default model. Violates CLAUDE.md rule 1 (no static claims) |
| **F3** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:3571 → 3346, 3830 | `istNetRow` floors Istanbul's Year-1 loss at 0 before it enters `totals`; `computeFcfStream` then **taxes the floored stream**, so the entity pays KV on Year-1 B2B profit while its real Istanbul operating loss (−€57K) is invisible to the tax base and never creates a loss carryforward | Tax the unfloored consolidated pre-tax result (the financing-gap row already discloses the gap; the tax layer should still see it) | Y1 tax overstated **€14K** (₺~750K); cumulative 5-yr FCF overstated ~€57K (~0.9%); direction conservative on profit, anti-conservative on "Cumulative Free Cash" (which the FCF-funding toggles' feasibility checks read) |
| **F4** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:1511–1516 | Break-even market share (market.html) = 12 × `sabitGider` ÷ contribution ÷ market — `sabitGider` excludes advertising, kitchen, quarterly withholding and periodic costs | Include the full monthly operating cost base (mature month: + reklamS + mutfakV + kongre/ymmDon + stopaj/3) | Shows **2.94%**, full-cost figure is **3.19%** — understated ~8% |
| **F5** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:3706–3725 vs 3702 | Satellite monthly opex grosses expert orthotist + intern at **×1.23** while the derived fitting/support staff on the same line uses **×sgkCarpan (1.6)** — two SGK conventions inside one formula; flagship uses 1.6 throughout | One convention (×sgkCarpan), or document 1.23 as a deliberate satellite assumption | Satellite staff cost understated ~₺30K/mo/city (~€6.7K/yr/city before the ×1.25 Y5 factor) |
| **F6** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:3669, 3673–3682 vs 3427 | Satellite Y5 gross uses the **full-year-average** unit net (`y1BirimNetEur`); Istanbul Y5 uses the **year-end (last-3-month)** unit net (`sonBirimNet`) — two different unit-economics bases in one consolidated projection | Same basis for both (year-end mix is the stated convention) | Satellites carry a **13.4% lower** per-brace net than the flagship for identical products (₺23,974 vs ₺27,695) — partially offsets F5 in the same rows |
| **F7** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:4031–4035 | `_centerAnnualCfg` books every satellite's setup cost in **Year 2** (`setupY=[0,setup,0,0,0]`, `cumY` subtracts at i===1) — correct for Izmir/Ankara, wrong for **Bursa/Gaziantep which open Year 3** | Index setup to the city's opening year | ~€250–300K per city appears one year early in the growth-page Annual Detail cumulative rows (timing only, totals unchanged) |
| **F8** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:2959–2966, 3162 | `renderSummary3yr` derives "Istanbul net" as `totals − Σ satellites' own 100% net`. Exact in Branch mode (the default). In **Subsidiary mode** `totals` only contains fee+equity income, so the subtraction pushes the minority-interest share into Istanbul's number as a phantom loss (then floors at 0) | Derive Istanbul's own net directly (`istNetRow[_n] + b2bRow[_n]`) instead of by subtraction | €0 at defaults (all four satellites default to Branch); wrong Stage-2/Total-box EBITDA decomposition the moment any satellite is switched to Subsidiary |
| **F9** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:2013–2018 | Mid-year printer top-up charges the clinic (`printerEkMaliyet`) even when `printerAktif=false` (printers excluded from the model) — setup correctly zeroes printer capex, the monthly trigger doesn't check the flag | Gate the top-up on `printerAktif` like the setup line | €0 at defaults (no top-up fires); tested: with printers "Excluded" and a ramp to 140/mo, Y1 still charges ₺1,880,200 |
| **F10** ✅ **FIXED 2026-07-18** | MEDIUM | shared.js:2414–2458; methodology.html:598–599,686; formula-validation.html:706–812 | The two **validation pages** explain satellite Y2 revenue via `getMerkezGelir()` — a legacy path still using the retired `esikDestek` threshold, threshold-gated support staff, and a `kira×0.8` fallback; the live engine uses the capacity engine and `_satRampFrac` ramps | Validation layer must mirror the live formulas (CLAUDE.md: bağlayıcı kural) or drop the legacy explainer | Validation pages show a satellite revenue derivation the model no longer uses — misleads exactly the audience those pages exist to reassure |
| **F11** | MEDIUM | shared.js:2501–2507 | `updateValuationTable` (investor.html vt_* scenario table) counts active centers as `1+izmir+ankara` — **Bursa/Gaziantep ignored** in the Y5 opex estimate (×3 instead of ×5) and the exit-multiple adjustment | Include all active centers | Y5 revenue/opex/margin rows in the Ciro-FAVÖK scenario table understate network opex ~40% |
| **F12** | LOW | shared.js:2072–2073, 1858/1865; no page hosts `senInputs`/`tornadoChart` | Sensitivity panel: (a) `V['_sen_min_'+k] \|\| V[k]` — a legitimate min of **0** (royaltyEur's documented purpose) silently falls back to base; (b) inline `parseInt` truncates fractional slider values (reklamCarpan 0.25→0). **Both currently dead**: the panel exists on no page — yet `runSensitivity()` still runs 19 `computeYear1` passes on every recalc (pure waste) | If the panel returns: `??` instead of `\|\|`, `parseFloat` instead of `parseInt`; either way, early-return `runSensitivity` before computing when no canvas exists | No user-visible effect today; ~19× redundant engine runs per slider drag |
| **F13** | LOW | shared.js:179, 144–146 | `loadScen('baz'/'iyimser'/'kotu')` overwrites `V.kongre` but not `V.donemsel` — the P&L then nets **stale** `donemsel.reklam` out of the **new** kongre (tested: kongre[0]=0 vs donemsel sum 160,000). Presets also write dead keys `korseF`/`malzeme` (nothing reads them — pricing is per-SKU) | Sync `donemsel` when applying a preset; drop the dead keys | No UI button reaches these presets (code-only), so latent |
| **F14** | LOW | V literal :26 | Dead/vestigial keys: `aylikKira` (100000 — nothing reads it; the "monthly rent" sliders drive `V.kira`), `korseF`, `malzeme`, `dcfGrowth`, `dcfGrowth45` (no formula, no page element), `printerAdet` (shadowed by `printerAdetManual`) | Prune at next `_version` bump | None (but `aylikKira:100000` invites the false belief that monthly rent ≠ ₺250K; actual monthly rent = `V.kira` = ₺250,000) |
| **F15** | LOW | shared.js:3594 vs :26 | `gaziantepAcilisAy` is **missing from the V literal** (peers ankara=5, bursa=3 are present); runtime falls back `\|\| 3`. Written by its growth.html slider, so it lives only in localStorage | Add to the literal (+`_version` bump) so defaults are explicit and snapshots are complete | Works today via fallback; a "Reset to Default" gives Gaziantep Month 3 while Ankara resets to Month 5 — asymmetric but currently identical to intent |
| **F16** | LOW | shared.js:1922 vs 2034 | Setup includes "Rent (1st month)" (₺250,000) **and** the monthly loop charges `kira` in all 12 operating months → 13 rent payments in the Y1 window | If setup rent = pre-opening month, relabel ("pre-opening rent"); if it IS Month 1's rent, skip rent in Month 1 of the loop | ₺250,000 / €4,654 — defensible as a pre-opening month, but the label and the (dead) pie chart that skips Month-1 rent both suggest the double-count reading |
| **F17** | LOW | shared.js:4680 vs :26 | Comment says Bursa/Gaziantep FCF-funding toggle "Default off — original decision stays committed default" but the committed literal has `bursaGaziantepFcfFunded:true` (flipped when Deniz's snapshot became the default) | Update the comment | Comment-only; Stage 2 correctly excludes the two setups today |
| **F18** | LOW | shared.js:1041–1169 | `renderGiderDagilim`'s operations pie/stacked bar count personnel as expert orthotist only (no operator/fitting/support/intern) and skip Month-1 rent — but `kurulumPie`/`operasyonPie`/`stackedBar` exist on **no page**; dead code (same for `renderMain`/`renderTrigger`/`updateKapasiteUyari` render targets) | Delete or fix before ever re-hosting these canvases | None today |
| **F19** | LOW | shared.js:5826, 5776–5781 | `fetchEurRate()` auto-applies the live/cached EUR rate on **every page load**, silently overwriting both the committed default (53.72) and any manual override within the hour | By design per the header ("Rate updates live") — but note: committed-default KPIs are FX-floating; snapshot reproducibility requires the same rate | All €-headline numbers drift with the market; e.g. CHANGES.md's before/after tables are only reproducible at ₺53.72 |
| **F20** | LOW | shared.js:2976, 1787, 1349, 3427/3486 | Cosmetics: `fmtKEur` renders negative center-nets as "—" (hides a modeled loss); pinned-KPI royalty uses `tr-TR` grouping inside a €-string; `istGross` series is product-net revenue labeled "Gross"; unit-net derivations round through €K before dividing (±1.5% at low volumes) | Minor cleanups | Cosmetic |
| **F21** | LOW | shared.js:4448 | `svRobotKol()` can write `V.robotKolAktif` (auto-default) without persisting or recalc — first-load state not saved until another setter runs | Persist when it writes | Cosmetic/state |

---

## 3. Proposed diffs — HIGH findings only (NOT applied)

### F1 — Annual Detail royalty/cutting rows: drop the ₺ conversion — ✅ APPLIED 2026-07-18 (verified: at royalty €75 Istanbul row now −€30K/−€168K/−€305K…, reconciles with `_lastRoyaltyRow`; defaults unchanged; 14-page sweep clean)

```diff
--- shared.js:3975
-  const istRoyaltyY   = korseCountIst.map(k => Math.round(k * gv('royaltyEur') * (V.eurKur??50) / 1000));
+  const istRoyaltyY   = korseCountIst.map(k => Math.round(k * gv('royaltyEur') / 1000));

--- shared.js:3981
-  const istCuttingY = korseCountIst.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') * (V.eurKur??50) / 1000));
+  const istCuttingY = korseCountIst.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') / 1000));

--- shared.js:4044-4045 (_centerAnnualCfg)
-    const royaltyY   = korseCountArr.map(k => Math.round(k * gv('royaltyEur') * (V.eurKur??50) / 1000));
-    const cuttingY   = korseCountArr.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') * (V.eurKur??50) / 1000));
+    const royaltyY   = korseCountArr.map(k => Math.round(k * gv('royaltyEur') / 1000));
+    const cuttingY   = korseCountArr.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') / 1000));
```

`royaltyEur` and `kesimEurPer` are already €/brace; `× eurKur` belongs only where a ₺ figure is needed (as in the monthly engine's `royaltyTRY`). Reference implementation that is already correct: `window._lastRoyaltyRow` (shared.js:3847).

### F2 — Investor roadmap / ramp labels: bind to the live model — ✅ APPLIED 2026-07-18 (verified: Year-1 card now reads "Break-even ~Month 10 · Cumulative positive ~Month 25 (trend est.)"; badges follow istRampYears live (3→Y2 50%, 5→Y2 25%); y5PayKpi reach % follows each city's ramp slider; defaults' money figures unchanged; 14-page sweep clean)

```diff
--- shared.js:3246-3257 (renderInvestorRoadmap)
+  const _r = window._lastRows || [];
+  const _basAy = (_r.find(r => r.net >= 0) || {}).ay || null;
+  const _pozAy = (_r.find(r => r.cumBudget >= 0) || {}).ay || null;
+  const _pozTxt = _pozAy ? '~Month ' + _pozAy
+                : (_tahminPozAy(_r) ? '~Month ' + _tahminPozAy(_r) + ' (trend est.)' : 'beyond Year 1');
+  const _iry = V.istRampYears || 5;
+  const _pct = y => Math.round(_istRampFrac(y, _iry) * 100);
   const years = [
     { label:'Year 1', badge:'✓ Monthly model', color:'#534AB7',
-      body:'Istanbul Flagship · Break-even ~Month 4 · Cumulative positive ~Month 11' },
+      body:'Istanbul Flagship · Break-even ' + (_basAy ? '~Month ' + _basAy : 'not reached in Y1')
+           + ' · Cumulative positive ' + _pozTxt },
-    { label:'Year 2', badge:'Expansion', color:'#1D9E75',
-      body:'Istanbul 40% capacity · ' + c2text },
+    { label:'Year 2', badge:'Expansion', color:'#1D9E75',
+      body:'Istanbul ' + _pct(2) + '% of target · ' + c2text },
-    { label:'Year 3', badge:'65% capacity', color:'#BA7517',
+    { label:'Year 3', badge:_pct(3) + '% capacity', color:'#BA7517',
       body: cCount + ' active center' + (cCount>1?'s':'') + ' · ' + _pct(3) + '% of market target' },
-    { label:'Year 4', badge:'85% capacity', color:'#c94f2a',
+    { label:'Year 4', badge:_pct(4) + '% capacity', color:'#c94f2a',
       body: cCount + ' active center' + (cCount>1?'s':'') + ' · ' + _pct(4) + '% of market target' },
```

```diff
--- shared.js:4135-4136 (y5PayLabel)
-    + (V.bursaAktif ? ' · %' + gv('bursaHedefPay').toFixed(1) + ' BUR (target; 80% reached by Y5)' : '')
-    + (V.gaziantepAktif ? ' · %' + gv('gaziantepHedefPay').toFixed(1) + ' GAZ (target; 80% reached by Y5)' : '');
+    + (V.bursaAktif ? ' · %' + gv('bursaHedefPay').toFixed(1) + ' BUR (target; '
+        + Math.round(_satRampFrac(5, 3, V.bursaRampYears || 4) * 100) + '% reached by Y5)' : '')
+    + (V.gaziantepAktif ? ' · %' + gv('gaziantepHedefPay').toFixed(1) + ' GAZ (target; '
+        + Math.round(_satRampFrac(5, 3, V.gaziantepRampYears || 4) * 100) + '% reached by Y5)' : '');
```

(Also update the stale "80%" prose in the renderSummary3yr comment at :3108.)

**F5 — ✅ APPLIED 2026-07-18:** replaced the hardcoded `* 0.23` employer-burden term with `* (sgkCproj - 1)` in all four satellite `{city}MonthlyTRY` blocks, unifying the SGK convention on the model-wide `sgkCarpan` (1.6). Verified: burden delta ₺29,600/mo/city (gross ₺98,400 → ₺128,000); Y5 consolidated net €2,936K → €2,907K (satellites in default Branch mode consolidate the higher opex); Year-1 flagship untouched; 14-page sweep clean. Note F6 (below) still partially offsets this in the same rows (satellites use a lower unit-net basis).

**F6 — ✅ APPLIED 2026-07-18:** the four satellite Y5 gross calcs now use Istanbul's year-end unit-net basis (`sonBirimNet`, last-3-month mix) instead of the full-year-average `y1BirimNetEur` (retired — was the only consumer). Satellites reach full capacity in Y5 with the same premium mix as the flagship, so they must value braces on the same mature basis. Verified: year-end unit net is **+15.5%** above the full-year average (₺27,695 vs ₺23,974); Year-5 consolidated net €2,907K (post-F5) → **€3,104K**, so F6 lifts satellite revenue and partially offsets F5's opex increase, as the audit anticipated (net vs pre-audit €2,936K: +€168K). **Note:** methodology.html:602–606 and formula-validation.html:710–714 carry their own copies of `y1BirimNetEur` with the same basis issue (and their own units — TRY/brace vs €/brace), but they sit inside the wholesale-legacy validation recompute (getMerkezGelir Y2, ×1.5/2.2 B2B) — deferred to **F10**, which reconciles those pages with the live model as one pass. **F10 — ✅ APPLIED 2026-07-18:** both validation pages now MIRROR the live model instead of re-deriving. `buildProjection` exposes `window._lastProjRows` (Istanbul net, B2B, each satellite's net/gross/adet/fullNet, fee/equity/minority, totals) — the exact rows the growth-page table is built from. Rewrote `renderProjection` and `renderMerkezler` on both methodology.html and formula-validation.html to read those rows: the projection table is now the real 5-year consolidated view (Istanbul C1, B2B, satellite memo lines, management-fee + equity income, consolidated total), and the per-center table shows each satellite's full-capacity economics from the live figures. Retired the whole legacy path from the display: `getMerkezGelir` (now unused by any page — dead in shared.js, leave for F14), the `esikDestek`/`kira×0.8` threshold staffing, the full-year-average unit net (the deferred F6 basis — now uses year-end mix, matching the flagship), the `×1.5/2.2` B2B multipliers (now the ramped `b2bGrossRow`), the SSI/SGK-channel rows, and the Year-3-only horizon (now Year 1-5). Static markup updated: projection tables extended to 5 columns, section titles/notes de-SSI'd, "New Center (Izmir/Ankara)" → "(Satellites)". Verified by driving both pages' rewritten functions against live data: their consolidated total equals `window._lastTotals` [77/1209/2559/3033/3104]K exactly; live model (growth totals) unchanged; 14-page sweep clean (formula-validation's only throw is the pre-existing `renderUrunMarj` harness false-positive, unrelated). **MEDIUM sketches (for discussion, not diffed):** F3 — ✅ APPLIED 2026-07-18: `computeFcfStream` now taxes the unfloored accounting result (`accountingPretax` = cash row − `istFinancingGapRow`); the cash/FCF display keeps the documented floored convention. Verified at defaults: Y1 tax €14K→€0 (accounting pre-tax €20K − €20K notional interest = €0 base), cum 5-yr FCF 7,172→7,186 €K; carryforward accrual verified with a forced Y1 loss (−€144K → €167K carry, consumed against Y2). The Tax Optimization waterfall now starts from the accounting pre-tax result with the ramp-year gap disclosed as its own line, so "Taxable profit × 25%" reconciles with "KV paid" exactly. F4 — ✅ APPLIED 2026-07-18 (went one better than the sketch: annual base = 12 × mature-month sabitGider + the year's ACTUAL periodic budget — Σ reklamS/mutfakV/ayStopaj/kongre/ymmDon — rather than annualizing one month's arbitrary periodic snapshot; printer top-ups (capex) stay excluded. Defaults: 2.94% → **3.43%**; responds to advertising multiplier (×3 → 3.61%) which the old formula was blind to; price ↑ still lowers it (2.75% at +₺20K); n/a guard intact); F7 — ✅ APPLIED 2026-07-18 (`_openIdx = (_MERKEZ_ACILIS_YIL[sehir] || 2) - 1` reusing the existing opening-year map; `setupY` and `cumY` now book setup in that index. Verified: Izmir/Ankara setup lands in the Year-2 column, Bursa/Gaziantep in Year-3; consolidated totals unchanged — timing-only in the per-center Annual Detail cumulative rows); F8 — ✅ APPLIED 2026-07-18 (`renderSummary3yr` now takes `istNetRow` as a param; `istNet` and the cum-100 loop use `istNetRow[i] + b2bRow[i]` directly. Verified: Branch-mode defaults unchanged; the 100%-basis boxes — Stage 2 profit, Total cumulative €9,982K, Y5 EBITDA €3,104K, Exit €31,040K — are now identical in Branch and Subsidiary mode, as they must be, instead of collapsing Istanbul to a floored phantom loss in Subsidiary mode); F9 — ✅ APPLIED 2026-07-18 (`printerEkMaliyet = (printerAktif && !ekipmanOsteoidden) ? yeni * birim : 0`, mirroring the setup printer line's exact condition; trigger month still tracked, cost zeroed. Verified: printers Excluded + steep ramp now charges ₺0 top-up (was ₺1,880,200) while setup was already €0; printers-ON still charges normally; defaults unchanged); F11 — count all five `Aktif` flags.

---

## 4. V-object dependency map (condensed)

`_version` = **55**. Restore logic (shared.js:28–40): version match → `Object.assign(V, parsed)` (shallow merge — cached values win over changed literals; keys absent from the cache keep new literal defaults, so **adding** a key is safe without a bump, **changing** an existing default is not); mismatch → wipe wholesale. Nested objects (`donemsel`, `mix`, arrays) are replaced wholesale from cache.

localStorage keys: `osteoid_V` (state), `eur_try_cache` (live FX), `osteoid_gdoc` / `osteoid_term_*` / `osteoid_terms_version` (agreement.html — own versioning, independent of `_version`).

| Key family | Written by | Read by | Bound inputs |
|---|---|---|---|
| Setup: `kira, depozito, emlakci, m2, tadilatM2, dekoM2, mobilya, ruhsat` | `sv/sv2/svAlias`, `loadScen` | computeYear1 setup + monthly rent (`kira`), `getMerkezKurulum`, KPIs | setup.html, expenses.html (dup ids by design) — note: `s_kira` (Setup) and `s_aylikKira` (Fixed) **both drive `V.kira`** — one number is simultaneously first-month setup rent and recurring monthly rent (economically coherent; cross-synced in code) |
| Fixed opex: `elektrik, internet, sarf, mutfak, genelGider, ymmM, stopaj, sgkCarpan` | `sv/sv2` | monthly engine, renderSabit* | expenses.html, fixed.html (dup) |
| Salaries/thresholds: `ortotistM, operatorM, stajyerM, stajyer2M, destekM, ekOrtotistM, esikStajyer1/2` (`esikDestek` inert) | `sv` | engine staffing | expenses/fixed |
| Products: `korseF_*, mal_*, feeSci_*, feeEdu_*, feeLib_*, korseFB2B_*` (30 keys) | `sv` | unit economics (B2C + B2B) | market.html |
| Volume: `korse[12], korseB2B[12], mix[12×5], mixB2B[12×5], aktifAy[5]` | drag canvases, `svKorseB2B`, `updMix*` | engine + capacity | korse/market/growth |
| Periodic: `donemsel{reklam,kongre,atolye,ymm,diger}`, `kongre[12]` (legacy sum, drag-synced), `reklamCarpan` | donem drag | engine periodic netting | periodic.html, expenses.html |
| Market/ramps: `pazarTR, pazarIstPct, hedefOsteoidPay, istRampYears`, per-city `HedefPay/RampYears/NufusPay/Rampa/RampaOran/AcilisAy/Aktif/UseIst*/Kurulum*/SubeMi/FlagshipPay`, `yonetimUcretiPct, b2bHedefAdetYil, b2bRampYears` | `sv`, growth setters (buildProjection, not recalc) | buildProjection | growth.html |
| Capacity (CAP_PARAMS ×14) | `svCap` (fans out to 5 mirrored clones) | `clinicCapacityProfile` | growth.html clinic panels |
| Equipment: `printerAktif, printerEurFiyat, robotKolAktif, robotKolEurFiyat, ekipmanOsteoidden(false, fixed), printerAdet(vestigial)` + `printerAdetManual` (localStorage-only, by design) | sv* toggles | setup capex, top-up trigger, register | setup/expenses |
| Investment/tax: `ipLisansEur, sehirEksklusifEur, workingCapBufferEur, stage1BufferEur, setupOverheadC1–5, kvOrani, vergiDahil, nakdiSermayeAktif, teknokentKapsam, emisyonPrimiAktif, nominalPayOrani, euLegalFaiz, fundAy, exitYili, kisiselVergiOrani, bursaGaziantepFcfFunded, workingCapBufferFcfFunded` | sv + toggles | renderInvestBreakdown, computeFcfStream, tax panel | investor.html |
| DCF/deal: `dcfRate, dcfExitMult, dcfNegotiationDiscount, tranche1Eur, trancheStepUp, feeExitMult, feeStreamAyriMult`, `dcfInvest` (derived at :4648, literal value is a seed only) | `svDcf` (renders DCF only, no recalc) | computeDcfPremoney, getiri table | investor.html |
| Cap table: `osteoidCarpan, yatirimciCarpan, doktorYatirim, doktorCarpan, makineKatkiOran, royaltyOffset*, sweat*` | `sv` | buildRegister | captable.html |
| Competitors: `hedefSpine_*, bilimOrtopedi_*, canErdem_*, nesaOrtopedi_*, proklinik_*, aktifOrtez_*` | `sRV` (saves, no recalc — charts re-render inline) | competition/market charts | competition.html, market.html |
| Sensitivity bounds: `_sen_min_*/_sen_max_*` | inline handlers | runSensitivity | **no page currently hosts the panel** (F12) |

**Anomalies:** read-but-not-in-literal: `printerAdetManual` (intentional, `!==undefined` guard), `gaziantepAcilisAy` (F15). Dead-in-literal: `aylikKira, korseF, malzeme, dcfGrowth, dcfGrowth45` (F14). Orphan render ids: `dcfGrowth/dcfGrowth45` spans, `bursa/gaziantepKurulumOranVal` not seeded by initDynamic (izmir/ankara are). SCEN presets reference only existing keys, but `baz/iyimser/kotu` have no UI and desync `kongre`/`donemsel` (F13).

---

## 5. Edge cases exercised

- **0 braces/month:** engine returns zero revenue, keeps structural fixed costs, capacity profile deactivates staff (0 fitting/support) — no NaN.
- **Exactly at threshold (21/90):** active at the threshold (`>=`) — matches spec.
- **`printerAktif=false` + steep ramp:** setup printer capex correctly ₺0, but mid-year top-up wrongly charges ₺1,880,200 (F9).
- **`sgkCarpan` weekday guard:** `weekdayGunAy = max(1, …)` prevents divide-by-zero; `haftaSonuGunAy=0` handled.
- **`royaltyEur=0` (committed default):** valid scenario throughout — registers, offsets and KPIs all treat 0 as "not applied", no division hazards found.
- **Version bump migration:** wipe-on-mismatch confirmed; new keys fall back to literal defaults when absent from a matching cache.

## 6. Verified-OK (checked, not defects)

- Largest-remainder mix rounding never assigns residue to a not-yet-launched product (both B2C and B2B loops).
- `reklamCarpan` scales only the P&L advertising term while kongre-netting uses the raw dragged value — intentional and documented.
- Working-capital identity `clinicCashCore === −trough === setup + workingCap` holds; stage split reconciles with the ticket (guarded at :4711).
- Doctor fees (Sci/Edu/Lib) correctly apply to the B2B channel; cutting fee applies to Perf/S+P only, in both channels and both unit-economics cards.
- Machinery is never double-counted across clinic-cash / in-kind buckets (`ekipmanOsteoidden` fixed false ⇒ all capex in clinic setup, in-kind €0).
- Turkish locale round-trips (`sv2`, `svMerkez`, `svAliasBlur`, competitor onblur handlers) parse `120.000`-style strings correctly; no `parseFloat("120.000")→120` instance found on any live path.
- `computeFcfStream` loss-carryforward mechanics (offset, cap at 5-yr horizon) are correct given its input; the input flooring is F3.
- Room-rounding convention (`Math.round(designDay)`) — known, deliberate choice (flagged 2026-07; unchanged by request).

---
*Audit run in a Node sandbox replicating the browser environment (localStorage + null-safe getElementById). Reproduction scripts: scratchpad `audit1.js` / `audit2.js`. Approve fixes one finding at a time; F1 and F2 are independent one-line-family changes with no `_version` impact (no V defaults touched).*
