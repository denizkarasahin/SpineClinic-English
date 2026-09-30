# Final business case — after FIN-1 … FIN-3

**Core plan (Istanbul clinic + B2B, Izmir, Ankara — committed default): Year-5 EBITDA €1,053K · cumulative FCF Years 1–5 €2,175K · peak funding need €332K** (Year 2 Month 5) · setup capex €513K.

**Core + Phase 2 (Bursa, Gaziantep switched on): Year-5 EBITDA €1,038K · cumulative FCF €1,835K · peak funding need €332K** · setup capex €817K. Phase 2 adds +289K Year-5 revenue but −15K Year-5 EBITDA and −340K cumulative FCF at the new 30% satellite share — neither Phase 2 centre pays back within Year 5.

Before = the pushed `business-case` state (6d245c9: rights purchase in the cash flow, satellites 50%, all five centres). Same headless-Edge harness (live FX blocked, €1 = ₺53.93); `_version` 62. Attribution: measured after each commit in order FIN-1 → FIN-2 → FIN-3 (order-dependent). The core + Phase 2 after-state equals the FIN-2 state figure for figure, so FIN-3 only changes which centres are in the plan.

## Core plan — BEFORE / AFTER / DELTA

| Output | Before | After | Delta | Caused by |
|---|---|---|---|---|
| **Peak funding need** | €1,344K | **€332K** | −1,012K | FIN-1 −1,000 · FIN-2 −12 · FIN-3 0 |
| **Year-5 EBITDA** | €1,467K | **€1,053K** | −414K | FIN-1 0 · FIN-2 −429 · FIN-3 +15 |
| **Cumulative FCF, Years 1–5** | €1,653K | **€2,175K** | +522K | FIN-1 +1,000 · FIN-2 −818 · FIN-3 +340 |
| Revenue Y1–5 (€K) | 455 / 1,403 / 2,669 / 3,243 / 3,405 | 455 / 1,287 / 2,226 / 2,459 / 2,459 | 0 / −116 / −443 / −784 / −946 | Y5: FIN-1 0 · FIN-2 −657 · FIN-3 −289 |
| EBITDA Y1–5 (€K) | 62 / 542 / 1,203 / 1,427 / 1,467 | 62 / 467 / 985 / 1,058 / 1,053 | 0 / −75 / −218 / −369 / −414 | Y5: FIN-1 0 · FIN-2 −429 · FIN-3 +15 |
| FCF Y1–5 (€K) | -163 / -940 / 576 / 1,075 / 1,105 | -163 / 29 / 717 / 798 / 794 | 0 / +969 / +141 / −277 / −311 | Y2: FIN-1 +1,000 · FIN-2 −31 · FIN-3 0 |
| Cumulative FCF Y1–5 (€K) | -163 / -1,103 / -527 / 548 / 1,653 | -163 / -134 / 583 / 1,381 / 2,175 | 0 / +969 / +1,110 / +833 / +522 |  |
| Setup capex, all centres | €843K | €513K | −330K | FIN-1 0 · FIN-2 −26 · FIN-3 −304 |
| Payback from opening — Istanbul (clinic + B2B) | 17 mo (Y2M5) | 17 mo (Y2M5) | — | FIN-1 17 mo (Y2M5) · FIN-2 17 mo (Y2M5) · FIN-3 17 mo (Y2M5) |
| Payback from opening — Izmir | 18 mo (Y3M6) | 30 mo (Y4M6) | — | FIN-1 18 mo (Y3M6) · FIN-2 31 mo (Y4M7) · FIN-3 30 mo (Y4M6) |
| Payback from opening — Ankara | 17 mo (Y3M9) | 25 mo (Y4M5) | — | FIN-1 17 mo (Y3M9) · FIN-2 25 mo (Y4M5) · FIN-3 25 mo (Y4M5) |
| Payback from opening — Bursa | 33 mo (Y5M11) | not in plan | — | FIN-1 33 mo (Y5M11) · FIN-2 not within Y5 · FIN-3 not in plan |
| Payback from opening — Gaziantep | not within Y5 | not in plan | — | FIN-1 not within Y5 · FIN-2 not within Y5 · FIN-3 not in plan |
| Istanbul — EBITDA Y1–5 (€K) | -15 / 235 / 586 / 587 / 584 | -15 / 232 / 593 / 589 / 584 | 0 / −3 / +7 / +2 / 0 |  |
| B2B — EBITDA Y1–5 (€K) | 77 / 186 / 240 / 240 / 240 | 77 / 186 / 240 / 240 / 240 | 0 / 0 / 0 / 0 / 0 |  |
| Izmir — EBITDA Y1–5 (€K) | 0 / 67 / 155 / 235 / 236 | 0 / 26 / 66 / 100 / 100 | 0 / −41 / −89 / −135 / −136 |  |
| Ankara — EBITDA Y1–5 (€K) | 0 / 54 / 189 / 285 / 286 | 0 / 23 / 86 / 129 / 129 | 0 / −31 / −103 / −156 / −157 |  |
| Bursa — EBITDA Y1–5 (€K) | 0 / 0 / 23 / 55 / 84 | 0 / 0 / 0 / 0 / 0 | 0 / 0 / −23 / −55 / −84 |  |
| Gaziantep — EBITDA Y1–5 (€K) | 0 / 0 / 10 / 25 / 37 | 0 / 0 / 0 / 0 / 0 | 0 / 0 / −10 / −25 / −37 |  |

## Core + Phase 2 — BEFORE / AFTER / DELTA

| Output | Before | After | Delta |
|---|---|---|---|
| **Peak funding need** | €1,344K | **€332K** | −1,012K |
| **Year-5 EBITDA** | €1,467K | **€1,038K** | −429K |
| **Cumulative FCF, Years 1–5** | €1,653K | **€1,835K** | +182K |
| Revenue Y1–5 (€K) | 455 / 1,403 / 2,669 / 3,243 / 3,405 | 455 / 1,287 / 2,307 / 2,652 / 2,748 | 0 / −116 / −362 / −591 / −657 |
| EBITDA Y1–5 (€K) | 62 / 542 / 1,203 / 1,427 / 1,467 | 62 / 467 / 966 / 1,043 / 1,038 | 0 / −75 / −237 / −384 / −429 |
| FCF Y1–5 (€K) | -163 / -940 / 576 / 1,075 / 1,105 | -163 / 29 / 399 / 787 / 783 | 0 / +969 / −177 / −288 / −322 |
| Cumulative FCF Y1–5 (€K) | -163 / -1,103 / -527 / 548 / 1,653 | -163 / -134 / 265 / 1,052 / 1,835 | 0 / +969 / +792 / +504 / +182 |
| Setup capex, all centres | €843K | €817K | −26K |
| Payback from opening — Istanbul (clinic + B2B) | 17 mo (Y2M5) | 17 mo (Y2M5) | — |
| Payback from opening — Izmir | 18 mo (Y3M6) | 31 mo (Y4M7) | — |
| Payback from opening — Ankara | 17 mo (Y3M9) | 25 mo (Y4M5) | — |
| Payback from opening — Bursa | 33 mo (Y5M11) | not within Y5 | — |
| Payback from opening — Gaziantep | not within Y5 | not within Y5 | — |
| Istanbul — EBITDA Y1–5 (€K) | -15 / 235 / 586 / 587 / 584 | -15 / 232 / 579 / 579 / 575 | 0 / −3 / −7 / −8 / −9 |
| B2B — EBITDA Y1–5 (€K) | 77 / 186 / 240 / 240 / 240 | 77 / 186 / 240 / 240 / 240 | 0 / 0 / 0 / 0 / 0 |
| Izmir — EBITDA Y1–5 (€K) | 0 / 67 / 155 / 235 / 236 | 0 / 26 / 64 / 98 / 99 | 0 / −41 / −91 / −137 / −137 |
| Ankara — EBITDA Y1–5 (€K) | 0 / 54 / 189 / 285 / 286 | 0 / 23 / 84 / 127 / 127 | 0 / −31 / −105 / −158 / −159 |
| Bursa — EBITDA Y1–5 (€K) | 0 / 0 / 23 / 55 / 84 | 0 / 0 / 5 / 12 / 18 | 0 / 0 / −18 / −43 / −66 |
| Gaziantep — EBITDA Y1–5 (€K) | 0 / 0 / 10 / 25 / 37 | 0 / 0 / -6 / -13 / -21 | 0 / 0 / −16 / −38 / −58 |

### Why the numbers moved

- **FIN-1 — rights payment removed.** The €1,000K IP licence + city exclusivity purchase (Year 2) is gone from FCF, the monthly cash path and every page. EBITDA and revenue are unchanged; Year-2 FCF +1,000K, cumulative FCF +1,000K, peak funding need €1,344K → €344K — now purely operational (setup capex, opening losses, tax, working capital). Paybacks are unchanged (they never included it).
- **FIN-2 — satellites at 30%.** Izmir/Ankara/Bursa/Gaziantep Year-5 volume falls by 40% (target share 50 → 30%): Year-5 EBITDA −429K; satellite printer capex is sized to volume, so Ankara's setup falls slightly. Izmir payback 18 → 31 mo (Y4M7), Ankara 17 → 25 mo (Y4M5); Bursa no longer pays back within Year 5.
- **FIN-3 — Bursa and Gaziantep become Phase 2 (off).** Removing two loss-making-to-marginal Year-3 openings from the core plan: setup capex −304K, Year-5 EBITDA +15K, cumulative FCF +340K; the head-office add-on stays at €50K from Year 2 (3 open centres) instead of €70K. Peak funding need is unchanged (€332K, Year 2 Month 5 — before the Year-3 openings).

## Grep — rights payment

**Code** (`*.html`, `shared.js`, `style.css`), case-insensitive, for `ipLisans`, `sehirEksklusif`, `licence/license purchase`, `exclusiv…` and `rights`:

| Term | Hits |
|---|---|
| `ipLisans`, `sehirEksklusif`, licence/license purchase, exclusivity | **0** |
| `rights` | 1 line: agreement.html, "Exit Mechanics" term card (investor column) |

That one line is about "Tag-along rights" and "Drag-along rights". These are shareholder protections, not a payment, and the card shows only in investor mode. Deleted identifiers are also at 0: `rightsOut`, `rightsEur`, `rightsByYearK`, `useOfFundsRights`, `deRisked_ip` / `deRisked_excl`, `dcf_rights_purchase`.

**Visible text**, rendered in headless Edge with all tabs, collapsed sections and `display:none` elements forced open:

| Mode | Pages | Hits |
|---|---|---|
| Business | all 12 | **0** |
| Investor (copy with `viewMode` "investor") | all 14 | 2 |

Both investor-mode hits are the same tag-along / drag-along sentence.

CHANGES.md and older scratch reports still mention the rights purchase as history. They are documents, not the model, and were left as written.

## Browser check

All 14 pages loaded with 0 exceptions, 0 console errors, no NaN/undefined and no stuck "Loading…/Calculating…" placeholder, in each of these states:
- committed defaults (core plan), where investor.html and captable.html redirect to the Summary
- Phase 2 on with SGK on
- investor-mode copy, where the full 8-page nav comes back

Switching Phase 2 on live on the Multi-Year Plan (`svPhase2(true)`):
- makes Bursa and Gaziantep active and enables their toggles
- shows their ramp panels
- saves the choice
- moves Year-5 EBITDA to the core + Phase 2 figure (€1,038K)
