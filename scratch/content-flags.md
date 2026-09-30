# Content flags — report only (review §4-C)

These are content decisions for Deniz. **Nothing listed here was changed** on
branch `fix/model-integrity`. Line numbers refer to the files as they stand at
the tip of the branch.

## 1. "CE-marked platform" wording

The product goes through the custom-made route (not CE marking), so these
phrases may overstate the regulatory status.

| Page | Line | Text |
|---|---|---|
| investor.html | 62 | "technology operational in 17 countries, 3,000+ braces produced, **CE-marked platform**; exclusive territorial rights granted; …" (default risk-profile note under the discount-rate buttons) |
| investor.html | 349 | "operational in **17 countries** with 3,000+ braces produced on a **CE-marked design**" ("Why This Venture Is De-Risked" box) |
| captable.html | 222 | "… with **3,000+ braces produced on a CE-marked platform**. This clinic is not the first deployment of untested technology …" |

## 2. "No local substitute" claim

| Page | Line | Text |
|---|---|---|
| investor.html | 62 | "… exclusive territorial rights granted; **no local substitute exists**. Remaining risk is single-site execution, not technology or market risk." |

Related, same idea in different words: investor.html:349 ("so local
competitors cannot access or replicate it").

## 3. Patent numbers and SRS / EUROSPINE acceptance references

**Patent numbers:** no patent number appears on any page. Patent claims are
qualitative only:

| Page | Line | Text |
|---|---|---|
| investor.html | 349 | "the underlying CAD/CAM IP … is proprietary and **patent-backed**, so local competitors cannot access or replicate it" |
| captable.html | 228 | "It's proprietary, **patent-backed (Bracesys)** IP, not an off-the-shelf capability a new entrant could buy …" |

**SRS / EUROSPINE:**

| Page | Line | Text |
|---|---|---|
| investor.html | 851 | Optimistic multiple bullet: "Strategic European/global acquirer + clinical database + **SRS/EUROSPINE publications** → premium" |
| investor.html | 926 | "Osteoid's clinical claim is based not on assertion but on measured, **peer-reviewed** data." |
| investor.html | 933 | "**SRS 2026 Annual Meeting** — Scoliosis Research Society, the world's most selective scoliosis congress (**~30% acceptance rate**)" + author/title line below it |
| investor.html | 936–937 | "**EUROSPINE 2026** … Same study also **accepted** at EUROSPINE 2026" |
| investor.html | 947 | "Proven clinical database + **peer-reviewed publications** can lift EV/EBITDA by **+1x to +3x**" |

Note: a congress abstract acceptance is not a peer-reviewed publication; the
"peer-reviewed" wording at 926/947 leans on these acceptances.

## 4. Tax page contradictions

**Individual exit tax — 0% on one page, 15% on another:**

| Page | Line | Says |
|---|---|---|
| investor.html | 779 | Individuals selling A.Ş. share certificates held >2 years are **fully exempt** (GVK mük. 80) → **0%**. The model applies this: `exitTaxClock()` / `applyExitTax()` in shared.js (Net-to-Investor multiple, investor.html Cash-on-Cash table). |
| captable.html | 261–264 | "Turkish Resident Individual (direct)": **15% stopaj** on the exit gain, effective **15%**, citing GVK Geçici Art. 67. |

Also: investor.html:228 — the Personal Income Tax Rate slider markup says
`value="40"` while the committed default is `V.kisiselVergiOrani = 15`
(the page syncs the slider to 15 on load, so what is shown is 15).

**75% participation exemption shown as "≈ 0%":**

| Page | Line | Says |
|---|---|---|
| captable.html | 239 | "… qualifies for **75%** capital gains exemption under KVK Art. 5/1-e … — effective exit tax **≈ 0%** at the A.Ş. level." (A 75% exemption leaves 25% of the gain taxable at the 25% corporate rate ≈ 6.25% effective, before any distribution tax.) |
| captable.html | 254 | Table row "Turkish Resident Individual (via A.Ş.)": Exit Gain Tax **~0%** |
| captable.html | 256 | Same row: Effective Rate on Exit **0% (2-yr hold)** |
| captable.html | 90 | (consistent) "75% corporate participation exemption on the gain under KVK 5/1-e" |

## 5. "Frontman structure" paragraph

| Page | Line | Text |
|---|---|---|
| agreement.html | 111 | "Since doctors directly referring patients to a center they co-own creates a grey area, a **frontman structure** will be used. Shares are held under a designated legal/natural person, not in the doctor's name." |
