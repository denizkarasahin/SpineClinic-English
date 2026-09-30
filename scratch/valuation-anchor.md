# Valuation anchor — required deal pre-money for a target investor return (FU-10)

Solved, not committed: the deal pre-money input stays at **€10,964,800** (verified unchanged after every run). Committed defaults after items 1–9 (`_version` 60): Year-5 EBITDA €1,172K; at the committed price the investor gets **1.34× (IRR 7.4%)** for a 19.26% stake.

**Method.** Investor return = dividends + exit proceeds (Year-5 EBITDA × Base 10× EV/EBITDA) + retained cash at exit, all × the investor stake, ÷ the ticket (€2,112,622). The company-level amounts don't depend on the price, so the stake needed = target × ticket ÷ (return at 100%). The pre-money giving that stake comes from the unchanged two-tranche pricing (Tranche 1 €500K at pre-money ÷ 1.75, the rest at the pre-money), solved by bisection. Ticket and tranche structure are unchanged; the doctor-investor amount is €0, so Osteoid A.Ş. = 100% − investor. Check: solving for today's 1.34× returns €10.965M, i.e. the committed price.

## Committed defaults (satellites 50%, Istanbul 30%)

| Target | Pre-money | Post-money | Investor stake | Osteoid A.Ş. stake | IRR | Osteoid majority |
|---|---|---|---|---|---|---|
| (a) 2.0× | €6.68M | €8.79M | 28.77% | 71.23% | 18.5% | ✓ yes |
| (b) 2.5× | €4.94M | €7.05M | 35.96% | 64.04% | 25.2% | ✓ yes |
| (c) 3.0× | €3.77M | €5.88M | 43.16% | 56.84% | 30.9% | ✓ yes |

The 2.5× case lands at IRR 25.2%, i.e. the "~25%" target.

## 2.5× solve — four cases

| Satellite target share | Istanbul target share | Year-5 EBITDA | Return at committed price | Pre-money for 2.5× | Post-money | Investor stake | Osteoid A.Ş. | IRR | Osteoid majority |
|---|---|---|---|---|---|---|---|---|---|
| 50% | 30% | €1,172K | 1.34× (7.4%) | €4.94M | €7.05M | 35.96% | 64.04% | 25.2% | ✓ |
| 50% | 50% | €1,660K | 1.89× (16.9%) | €7.82M | €9.94M | 25.43% | 74.57% | 25.2% | ✓ |
| 30% | 30% | €798K | 0.94× (-1.6%) | €2.84M | €4.92M | 50.99% | 49.01% | 25.3% | **✗ loses majority** |
| 30% | 50% | €1,286K | 1.49× (10.3%) | €5.75M | €7.84M | 31.98% | 68.02% | 25.3% | ✓ |

⚠ **Red line (Deniz keeps majority):** with satellites at 30% and Istanbul at 30%, 2.5× needs a 50.99% investor stake — Osteoid A.Ş. would drop to 49.01%. The best return compatible with keeping the majority in that case is **2.45× (IRR 24.7%)** at a pre-money of **€2.94M** (investor 49.98%, Osteoid 50.02%). The ticket in the 30%-satellite cases is €2,086,372 (satellite printer capex is sized to volume).

## Live tool

investor.html → The Deal at a Glance → "Required pre-money for target return": target multiple slider `V.targetMoic` (1.5–4.0×, default 2.5) → required pre-money, post-money, investor and Osteoid stakes (with a majority check) and IRR, next to the committed price. It reads the live model and never writes `V.dealPreMoneyEur`.
