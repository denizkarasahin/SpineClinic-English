// Null-safe getElementById — recalc() calls this across all pages, and most
// pages only have a subset of all ids (by design, since shared.js is one
// script for many page layouts). Missing ids return a no-op stand-in so
// callers don't crash, but each missing id is warned once so a genuine typo
// or broken binding is still visible in devtools — expect many warnings for
// ids that simply belong to other pages, that's normal, not a bug.
const _origGetById = document.getElementById.bind(document);
const _warnedMissingIds = new Set();
document.getElementById = function(id) {
  const el = _origGetById(id);
  if (el) return el;
  if (!_warnedMissingIds.has(id)) {
    _warnedMissingIds.add(id);
    console.warn('getElementById: no element with id "' + id + '" on this page — returning a no-op stand-in');
  }
  return {
    textContent: '', value: '', innerHTML: '', checked: false,
    style: new Proxy({}, { get: () => '', set: () => true }),
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    appendChild: () => {}, setAttribute: () => {}, removeAttribute: () => {},
    querySelectorAll: () => [], querySelector: () => null,
    dataset: {}
  };
};

const V = {"reklamCarpan":1,"mutfak":30000,"genelGider":10000,"ymmM":10000,"stopaj":60000,"royaltyEur":0,"eurKur":53.93,"eurKurSabit":53.93,"eurKurTarih":"2026-07-20","liveFxAktif":false,"kira":150000,"depozito":250000,"emlakci":500000,"m2":360,"tadilatM2":4500,"dekoM2":4500,"mobilya":300000,"ruhsat":100000,"elektrik":16500,"internet":1500,"sarf":3000,"ortotistM":90000,"sgkCarpan":1.6,"stajyerM":31000,"destekM":30000,"stajyer2M":30000,"korse":[24,25,30,35,35,44,44,52,54,63,62,69],"aktifAy":[0,9,2,9],"korseF_stdRl":40500,"korseF_delik":55000,"korseF_sens":50000,"korseF_sensDelik":65000,"mal_stdRl":600,"mal_delik":3500,"mal_sens":2075,"mal_sensDelik":4975,"feeSci_stdRl":10,"feeSci_delik":10,"feeSci_sens":10,"feeSci_sensDelik":10,"feeEdu_stdRl":10,"feeEdu_delik":10,"feeEdu_sens":10,"feeEdu_sensDelik":10,"feeLib_stdRl":10,"feeLib_delik":10,"feeLib_sens":10,"feeLib_sensDelik":10,"pazarTR":20000,"kohortTR":1275000,"braceablePct":0.45,"bracePerCourse":2.75,"otherPaedPct":15,"sgkAktif":false,"sgkIncrementalPct":20,"sgkPrice":17500,"sgkTopUp":5000,"sgkDelayDays":75,"hoCostY1Eur":30000,"hoPerCentreEur":10000,"hoCapEur":80000,"adultAktif":true,"adultBraceYil":2500,"adultFiyat":25000,"postopAktif":true,"postopBraceYil":2000,"postopFiyat":25000,"fractureAktif":true,"fractureBraceYil":1700,"fractureFiyat":25000,"pazarIstPct":30.1,"hedefOsteoidPay":30,"esikStajyer1":21,"esikDestek":40,"esikStajyer2":90,"izmirAktif":true,"izmirHedefPay":30,"izmirUseIst":true,"izmirUseIstGider":true,"izmirKira":80000,"izmirOrtotistM":55000,"izmirStajyerM":25000,"izmirMutfak":18000,"izmirSarf":3000,"izmirUseIstKurulum":true,"izmirKurulumKira":120000,"izmirKurulumDepozito":200000,"izmirKurulumTadilat":4750,"izmirKurulumDeko":2000,"izmirKurulumMobilya":600000,"izmirRampa":[18,19,23,26,26,33,33,39,41,47,47,52],"ankaraAktif":true,"ankaraHedefPay":30,"ankaraUseIst":true,"ankaraUseIstGider":true,"ankaraKira":85000,"ankaraOrtotistM":55000,"ankaraStajyerM":25000,"ankaraMutfak":18000,"ankaraSarf":3000,"ankaraUseIstKurulum":true,"ankaraKurulumKira":120000,"ankaraKurulumDepozito":200000,"ankaraKurulumTadilat":4750,"ankaraKurulumDeko":2000,"ankaraKurulumMobilya":600000,"ankaraRampa":[19,20,24,28,28,35,35,42,43,50,50,55],"bursaAktif":true,"bursaHedefPay":30,"bursaUseIst":true,"bursaUseIstGider":true,"bursaKira":80000,"bursaOrtotistM":55000,"bursaStajyerM":25000,"bursaMutfak":18000,"bursaSarf":3000,"bursaUseIstKurulum":true,"bursaKurulumKira":120000,"bursaKurulumDepozito":200000,"bursaKurulumTadilat":4750,"bursaKurulumDeko":2000,"bursaKurulumMobilya":600000,"bursaRampa":[18,19,23,26,26,33,33,39,41,47,47,52],"gaziantepAktif":true,"gaziantepHedefPay":30,"gaziantepUseIst":true,"gaziantepUseIstGider":true,"gaziantepKira":85000,"gaziantepOrtotistM":55000,"gaziantepStajyerM":25000,"gaziantepMutfak":18000,"gaziantepSarf":3000,"gaziantepUseIstKurulum":true,"gaziantepKurulumKira":120000,"gaziantepKurulumDepozito":200000,"gaziantepKurulumTadilat":4750,"gaziantepKurulumDeko":2000,"gaziantepKurulumMobilya":600000,"gaziantepRampa":[19,20,24,28,28,35,35,42,43,50,50,55],"istInflowReductionPct":50,"horizonYears":5,"izmirHomePct":5.2,"izmirRegionPct":6,"izmirRegionCapturePct":60,"izmirYouthWeight":1,"ankaraHomePct":6.8,"ankaraRegionPct":5,"ankaraRegionCapturePct":60,"ankaraYouthWeight":1,"bursaHomePct":3.8,"bursaRegionPct":2.1,"bursaRegionCapturePct":60,"bursaYouthWeight":1,"gaziantepHomePct":2.5,"gaziantepRegionPct":7.3,"gaziantepRegionCapturePct":60,"gaziantepYouthWeight":1,"printerAdet":2,"printerEurFiyat":35000,"robotKolAktif":true,"robotKolEurFiyat":30000,"ekipmanOsteoidden":false,"kesimEurPer":0,"dcfRate":18,"dcfExitMult":10,"exitMultLowDelta":2,"exitMultHighDelta":3,"multiCenterPremiumX":0,"dealPreMoneyEur":10964800,"tranche1Eur":500000,"dividendPayoutPct":60,"targetMoic":2.5,"trancheStepUp":1.75,"dcfInvest":705646,"kongre":[160000,210000,65000,30000,205000,120000,70000,20000,70000,195000,70000,30000],"donemsel":{"reklam":[30000,35000,35000,30000,30000,20000,30000,20000,30000,20000,30000,30000],"kongre":[0,175000,0,0,175000,0,0,0,0,175000,0,0],"atolye":[100000,0,0,0,0,100000,0,0,0,0,0,0],"ymm":[0,0,0,0,0,0,0,0,0,0,0,0],"diger":[30000,0,30000,0,0,0,40000,0,40000,0,40000,0]},"korseFB2B_stdRl":15000,"korseFB2B_delik":22000,"korseFB2B_sens":25000,"korseFB2B_sensDelik":35000,"korseB2B":[10,10,25,25,35,35,40,40,45,45,55,55],"_sen_min_kira":80000,"_sen_max_kira":300000,"_sen_min_tadilatM2":2500,"_sen_max_tadilatM2":11500,"_sen_min_dekoM2":2250,"_sen_max_dekoM2":11250,"_sen_min_ortotistM":55000,"_sen_max_ortotistM":160000,"_sen_min_operatorM":90000,"_sen_max_operatorM":240000,"_sen_min_stajyerM":16000,"_sen_max_stajyerM":62000,"_sen_min_reklamCarpan":0.25,"_sen_max_reklamCarpan":3,"_sen_min_royaltyEur":0,"_sen_max_royaltyEur":150,"_sen_min_eurKur":30,"_sen_max_eurKur":95,"printerAktif":true,"hedefSpine_KorseK":1260,"hedefSpine_KorseB":1680,"hedefSpine_FiyatK":40000,"bilimOrtopedi_KorseK":720,"bilimOrtopedi_FiyatK":35000,"bilimOrtopedi_KorseB":780,"canErdem_KorseK":900,"canErdem_KorseB":840,"canErdem_FiyatK":35000,"canErdem_FiyatB":20000,"nesaOrtopedi_KorseK":900,"nesaOrtopedi_KorseB":780,"nesaOrtopedi_FiyatK":33000,"proklinik_KorseK":480,"proklinik_KorseB":660,"proklinik_FiyatK":40000,"proklinik_FiyatB":20000,"aktifOrtez_KorseK":1080,"aktifOrtez_KorseB":410,"aktifOrtez_FiyatK":40000,"aktifOrtez_FiyatB":22000,"izmirRampaOran":0.75,"izmirKurulumOran":0.75,"ankaraRampaOran":0.8,"ankaraKurulumOran":0.75,"bursaRampaOran":0.75,"bursaKurulumOran":0.75,"gaziantepRampaOran":0.8,"gaziantepKurulumOran":0.75,"operatorM":150000,"workingCapBufferEur":500000,"stage1BufferEur":200000,"kvOrani":25,"vergiDahil":true,"exitYili":5,"kisiselVergiOrani":15,"fundAy":0,"makineKatkiOran":50,"osteoidCarpan":1,"yatirimciCarpan":1,"doktorYatirim":0,"doktorCarpan":1.5,"sweatEur":80000,"sweatVestAy":48,"sweatCliffAy":12,"sweatElapsedAy":0,"sweatMaxPct":5,"sweatCarpan":1,"sweatVestedToday":true,"royaltyOffsetYil":1,"royaltyOffsetPct":0,"yonetimUcretiPct":5,"izmirFlagshipPay":65,"ankaraFlagshipPay":65,"bursaFlagshipPay":65,"gaziantepFlagshipPay":65,"izmirSubeMi":true,"ankaraSubeMi":true,"bursaSubeMi":true,"gaziantepSubeMi":true,"euLegalFaiz":5,"preOpenHireC1":0,"preOpenMktC1":0,"preOpenLegalC1":0,"preOpenOtherC1":30000,"preOpenHireC2":0,"preOpenMktC2":0,"preOpenLegalC2":0,"preOpenOtherC2":30000,"preOpenHireC3":0,"preOpenMktC3":0,"preOpenLegalC3":0,"preOpenOtherC3":45000,"preOpenHireC4":0,"preOpenMktC4":0,"preOpenLegalC4":0,"preOpenOtherC4":40000,"preOpenHireC5":0,"preOpenMktC5":0,"preOpenLegalC5":0,"preOpenOtherC5":40000,"bursaGaziantepFcfFunded":true,"nakdiSermayeAktif":true,"teknokentKapsam":false,"emisyonPrimiAktif":true,"nominalPayOrani":10,"feeStreamAyriMult":false,"feeExitMult":12,"istRampYears":3,"izmirRampYears":3,"ankaraRampYears":3,"bursaRampYears":4,"gaziantepRampYears":3,"bursaAcilisAy":3,"ankaraAcilisAy":5,"gaziantepAcilisAy":3,"workingCapBufferFcfFunded":false,"hastaPerOdaGun":6,"odaMaxPerKlinik":6,"odaM2":10,"calismaGunAy":26,"haftaSonuGunAy":9,"haftaSonuTalepPct":60,"visitPerKorse":1,"ortotistDkFitting":60,"expertDkHasta":8,"destekDkHasta":45,"staffUtilPct":75,"korsePerPrinterAy":66,"ekOrtotistM":65000,"subeSetupTRY":900000,"izmirDestekM":25000,"ankaraDestekM":25000,"bursaDestekM":25000,"gaziantepDestekM":25000,"b2bHedefAdetYil":1200,"b2bRampYears":3,"viewMode":"business","phase2Aktif":false,"phase3Aktif":false,"_version":71,"upgradeStartMonth":3,"upgradeM12Pct":30,"upgradeY2EndPct":45,"upgradeLongRunPct":50,"upgradeStartMonthB2B":3,"upgradeM12PctB2B":30,"upgradeY2EndPctB2B":45,"upgradeLongRunPctB2B":50,"upgradeSplit":[[34,31,17],[33,28,19],[31,29,21]],"upgradeSplitB2B":[[38,34,8],[33,28,17],[35,32,10]]};
// ── PHASE 2 / PHASE 3 (FIN-3, P2-1) ────────────────────────────────────────
// Core plan = Istanbul (clinic + B2B), Izmir, Ankara. Gaziantep is the Phase 2
// option (V.phase2Aktif, default false) and Bursa the Phase 3 option
// (V.phase3Aktif, default false). V.gaziantepAktif / V.bursaAktif become
// accessors = the centre's own toggle (kept in V._gaziantepOn / V._bursaOn)
// AND its phase switch — so every one of the model's many "is this centre
// active" reads (totals, capex, funding need, KPIs, tables) excludes it while
// its phase is off, with no second code path. Setting V.{centre}Aktif writes
// the centre's own toggle. JSON/localStorage keep both keys; on restore the
// raw key comes after the accessor, so it wins.
const _PHASE_KEY = { gaziantep: 'phase2Aktif', bursa: 'phase3Aktif' };
['bursa', 'gaziantep'].forEach(s => {
  const raw = '_' + s + 'On', pk = _PHASE_KEY[s];
  V[raw] = V[s + 'Aktif'] !== false;
  Object.defineProperty(V, s + 'Aktif', { enumerable: true, configurable: true,
    get() { return this[raw] === true && this[pk] === true; },
    set(v) { this[raw] = !!v; } });
});

// ── UPGRADE PATH (SR-1) ───────────────────────────────────────────────────
// One continuous upgrade take-rate path — % of braces sold with at least one
// upgrade (wear-time sensor, perforated shell, or both) on the standard brace:
// 0% before V.upgradeStartMonth, then linear to V.upgradeM12Pct at Month 12;
// Year 2 linear from there to V.upgradeY2EndPct (Year-2 share = the midpoint);
// Year 3 onward V.upgradeLongRunPct. B2B: the same shape with its own …B2B
// inputs. Never decreasing (an earlier point is capped at the later one). Within a
// period the upgrade share is split among the upgrades launched that month
// (V.aktifAy) in the committed Month 10-12 proportions (V.upgradeSplit /
// upgradeSplitB2B: Perforated, Sensor, Sensor + Perforated) — before
// Perforated launches (Month 10) the upgrade is Sensor only. Year 1 runs the
// monthly engine on these rows; Years 2+ blend the standard and upgraded unit
// economics at the yearly share.
function upgradePath(ch, Vlike) {
  const S = Vlike || V, sfx = ch === 'b2b' ? 'B2B' : '';
  const g = k => +(S[k + sfx] ?? S[k] ?? 0);
  const start = Math.max(1, Math.min(12, Math.round(g('upgradeStartMonth'))));
  // never decreasing: an earlier point is capped at the later one, so the long-run share is always as set
  const lr = Math.max(0, Math.min(100, g('upgradeLongRunPct')));
  const y2e = Math.max(0, Math.min(lr, g('upgradeY2EndPct')));
  const m12 = Math.max(0, Math.min(y2e, g('upgradeM12Pct')));
  const months = [...Array(12).keys()].map(i => i + 1 < start ? 0 : m12 * (i + 2 - start) / (13 - start));
  const years = [months.reduce((a, b) => a + b, 0) / 12, (m12 + y2e) / 2, lr, lr, lr, lr, lr];
  return { months, years, start, m12, y2e, lr };
}
function upgradeRows(ch, Vlike) {
  const S = Vlike || V, P = upgradePath(ch, S), act = S.aktifAy || [];
  const split = (ch === 'b2b' ? S.upgradeSplitB2B : S.upgradeSplit) || [[1, 1, 1]];
  return P.months.map((s, i) => {
    const w = (i >= 9 && split[i - 9] ? split[i - 9] : split[0]).map((x, j) => i >= (act[j + 1] || 0) ? +x || 0 : 0);
    const t = w.reduce((a, b) => a + b, 0);
    if (!(t > 0) || !(s > 0)) return [100, 0, 0, 0];
    return [100 - s].concat(w.map(x => s * x / t));
  });
}
function renderUpgradePath() {
  if (_origGetById('mixTableWrap')) buildMixTable();
  if (_origGetById('mixB2BTableWrap')) buildMixB2BTable();
  const el = _origGetById('upgradePathTbl');
  if (!el) return;
  const C = upgradePath('clinic'), B = upgradePath('b2b'), f = v => (Math.round(v * 10) / 10).toFixed(1) + '%';
  const th = [...Array(12).keys()].map(i => '<th>M' + (i + 1) + '</th>').join('') + [2, 3, 4, 5, 6, 7].map(y => '<th style="background:#f4f3ff;">Y' + y + '</th>').join('');
  const row = (l, P) => '<tr><td style="text-align:left;font-weight:700;">' + l + '</td>' + P.months.map(v => '<td>' + f(v) + '</td>').join('') + P.years.slice(1).map(v => '<td style="background:#f9f8ff;">' + f(v) + '</td>').join('') + '</tr>';
  el.innerHTML = '<div class="tbl-wrap"><table class="proj-tbl" style="font-size:10px;"><thead><tr><th style="text-align:left;">Upgrade share</th>' + th + '</tr></thead><tbody>'
    + row('Clinic', C) + row('B2B', B) + '</tbody></table></div>'
    + '<div style="font-size:10px;color:#888;margin-top:4px;">Year 1 by month (the monthly engine), Years 2–7 by year (Year 2 = midpoint of its linear rise). Before Perforated launches (Month ' + ((V.aktifAy || [])[1] + 1) + ') the upgrade is the wear-time sensor only; from then on the split follows the committed Month 10–12 proportions. Never decreasing. ⚠ Scenario input, not a forecast.</div>';
}

// ── VIEW MODE (BC-1) ──────────────────────────────────────────────────────
// V.viewMode = "business" (default) shows the pure business case: volumes,
// unit economics, P&L, cash, capex, payback, sensitivity. "investor" restores
// the deal / valuation / investor-return content, which is hidden — never
// deleted — in business mode (CSS classes .inv-only / .biz-only in style.css;
// investor.html and captable.html redirect to the Summary). There is
// deliberately no UI toggle: the committed value below is authoritative and is
// re-applied after the localStorage restore, so switching means editing
// "viewMode" in V above.
const _VIEW_MODE = V.viewMode === 'investor' ? 'investor' : 'business';
function isBiz() { return _VIEW_MODE !== 'investor'; }
document.documentElement.classList.add('mode-' + _VIEW_MODE);
if (isBiz() && ['yatirimci', 'captable'].indexOf(window.PAGE_ID) >= 0) location.replace('index.html');
// Restore state from localStorage if available; clear cache on version mismatch
(function() {
  try {
    const saved = localStorage.getItem('osteoid_V');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed._version === V._version) {
        Object.assign(V, parsed);
      } else {
        localStorage.removeItem('osteoid_V');
      }
    }
  } catch(e) {}
  // Fixed-rate default (review 4-A9): unless the viewer has switched the live
  // rate on, the model always runs on the fixed model rate — a cached live
  // rate from an earlier session must not leak into the figures.
  if (V.liveFxAktif !== true && V.eurKurSabit > 0) V.eurKur = V.eurKurSabit;
  V.viewMode = _VIEW_MODE; // committed flag wins over any cached value (BC-1)
})();
function numFmt(key, val) {
  val = parseFloat(val);
  if (key==='sgkCarpan') return val.toFixed(2).replace('.',',');
  if (key==='m2') return String(val);
  if (key==='pazarIstPct') return val.toFixed(1).replace('.',',');
  return val.toLocaleString('tr-TR');
}

function sv(key, val) {
  val = parseFloat(val);
  V[key] = val;
  const el = document.getElementById(key);
  if (el) el.textContent = numFmt(key, val);
  // Eşik etiketlerini güncelle
  if (key === 'esikStajyer1') { ['esikLabel1','metEsik1'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=val;}); }
  if (key === 'esikDestek')   { ['esikLabel2','metEsik2'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=val;}); }
  if (key === 'esikStajyer2') { ['esikLabel3','metEsik3'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=val;}); }
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function sv2(key, slId, el) {
  const raw = (el.textContent||'').replace(/\./g,'').replace(',','.');
  const val = parseFloat(raw);
  if (!isNaN(val)) {
    V[key] = val;
    const sl = document.getElementById(slId);
    if (sl) sl.value = val;
  } else {
    el.textContent = numFmt(key, V[key]);
  }
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function gv(k) { return V[k] ?? 0; }
function ffTRY(n) { if(n===0) return '—'; return (n<0?'-₺':'₺')+Math.abs(n).toLocaleString('tr-TR'); }
function ff(n) {
  if(n===0) return '—';
  const eur = Math.round(Math.abs(n) / (V.eurKur ?? 50));
  return (n<0?'-€':'€') + eur.toLocaleString('en-US');
}
function feEur(tryVal) { return ff(tryVal); }
function cls(n) { return n>0?'pc':n<0?'nc':'zc'; }

// Shared capacity-assumption spec — ONE network-wide set, rendered as an
// editable block under each clinic on the Multi-Year Plan (see capAssumeGroupHTML
// / renderCapAssume / svCap below). Declared up here (before the top-level
// initDynamic() call) to stay out of the temporal dead zone.
const CAP_PREFIXES = ['ist','izmir','ankara','bursa','gaziantep'];
const CAP_PARAMS = [
  { k:'hastaPerOdaGun',   l:'Patients per fitting room / day',        min:4,     max:10,     step:1 },
  { k:'odaMaxPerKlinik',  l:'Max fitting rooms per site',             min:2,     max:10,     step:1 },
  { k:'odaM2',            l:'m² per fitting room',                    min:8,     max:20,     step:1 },
  { k:'calismaGunAy',     l:'Working days / month (6-day week)',      min:22,    max:27,     step:1 },
  { k:'haftaSonuGunAy',   l:'Weekend + school-holiday days / month',  min:6,     max:12,     step:1 },
  { k:'haftaSonuTalepPct',l:'% patients needing weekend/holiday slots',min:30,   max:90,     step:5 },
  { k:'visitPerKorse',    l:'Fitting-room visits per brace',          min:1,     max:3,      step:1 },
  { k:'ortotistDkFitting',l:'Orthotist minutes per fitting (≤ 1 hour)', min:10,    max:90,     step:1 },
  { k:'expertDkHasta',    l:'Expert QC minutes per patient',          min:5,     max:15,     step:1 },
  { k:'destekDkHasta',    l:'Workshop minutes per B2C brace',         min:20,    max:90,     step:5 },
  { k:'staffUtilPct',     l:'Usable share of an 8h staff day (%)',    min:60,    max:90,     step:1 },
  { k:'korsePerPrinterAy',l:'Braces per printer / month',             min:30,    max:90,     step:1 },
  { k:'ekOrtotistM',      l:'Extra orthotist base salary (₺)',        min:40000, max:120000, step:5000 },
  { k:'subeSetupTRY',     l:'Branch fitting-office setup (₺, one-time)',min:400000,max:2500000,step:50000 },
];

// Ramp-to-target fractions — how much of a city's designated market-
// potential (its Year-5 target) has been reached by calendar year `yearIdx`
// (1-5), as a function of the user-adjustable "years to reach potential"
// slider (V.{city}RampYears, 1-5). Two shapes, since Istanbul already has a
// real Year-1 result (not a guess) while the satellites start from zero on
// the month they open:
//  - _istRampFrac: Istanbul's Year 1 is pinned to its own actual first-year
//    performance (frac 0, handled by the caller, not here); the slider
//    controls how many years it then takes to close the gap up to the Year-5
//    target, interpolating evenly. rampYears=1 means Year 1 already IS the
//    target.
//  - _satRampFrac: a satellite's opening year is itself the first ramp step
//    (scaled by how many months of that year it's actually open —
//    openMonthsFrac), reaching 100% of its full-capacity target after
//    rampYears total steps since opening. rampYears=1 means full target from
//    the month it opens (still scaled by that first partial year).
// Both clamp rampYears to the slider's own 1-5 range so a corrupted/missing
// V field can't throw the ramp outside what the UI ever allows.
function _istRampFrac(yearIdx, rampYears) {
  const n = Math.max(1, Math.min(5, rampYears || 5));
  return n <= 1 ? 1 : Math.min(1, (yearIdx - 1) / (n - 1));
}
function _satRampFrac(yearIdx, openYear, rampYears, openMonthsFrac) {
  if (yearIdx < openYear) return 0;
  const n = Math.max(1, Math.min(5, rampYears || 4));
  const steps = yearIdx - openYear; // 0 in the opening year itself
  let frac = Math.min(1, (steps + 1) / n);
  if (steps === 0 && openMonthsFrac !== undefined) frac *= openMonthsFrac;
  return frac;
}

const SCEN = {
  // royaltyEur carries its own assumption per scenario — the royalty
  // structure isn't final, so each named case states what it's betting on
  // (baz: the €75 reference; iyimser: none yet agreed, €0 is a real state
  // not a placeholder; kotu: a worse-than-baseline rate stacked on weaker volume).
  // korseF/malzeme dropped — dead keys nothing reads (pricing is per-SKU korseF_*/mal_*), audit F13.
  baz:     { mutfak:20000, stopaj:60000, royaltyEur:75,  korse:[5,10,15,20,25,25,30,30,35,35,40,45], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] },
  iyimser: { mutfak:18000, stopaj:60000, royaltyEur:0,   korse:[8,14,20,26,30,32,36,38,42,44,48,55], kongre:[0,50000,0,100000,0,300000,100000,0,0,200000,0,200000] },
  kotu:    { mutfak:22000, stopaj:60000, royaltyEur:100, korse:[3,7,10,14,18,20,22,25,28,28,33,38], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] },
  // Setup-cost scenario — a named point on the same live sliders, not a
  // hardcoded override; the committed default now starts here (see V's
  // kira/depozito/emlakci/m2 below), this button just resets back to it.
  fullSelfOwned: { kira:250000, depozito:250000, emlakci:500000, m2:360, tadilatM2:7000, dekoM2:6750, mobilya:300000, ruhsat:100000 },
};

// Every slider key a scenario preset is allowed to touch. loadScen() only
// applies keys actually present on the chosen scenario object, so a setup
// scenario leaves revenue assumptions untouched and vice versa.
const SCEN_SLIDER_KEYS = ['mutfak','stopaj','royaltyEur',
  'kira','depozito','emlakci','m2','tadilatM2','dekoM2','mobilya','ruhsat'];

function loadScen(key, btn) {
  document.querySelectorAll('.sb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const s = SCEN[key];
  SCEN_SLIDER_KEYS.forEach(k => {
    if (s[k] === undefined) return;
    V[k] = s[k];
    document.getElementById(k).textContent = numFmt(k, s[k]);
    const sl = document.getElementById('s_'+k); if (sl) sl.value = s[k];
    if (k === 'kira') {
      // expenses.html's Setup tab uses a separate span id to avoid colliding
      // with the Fixed Costs tab's own "kira" span on the same page; both
      // tabs' sliders drive the same V.kira and need to be kept in sync.
      const kk = document.getElementById('kira_k'); if (kk) kk.textContent = numFmt('kira', s[k]);
      const slA = document.getElementById('s_aylikKira'); if (slA) slA.value = s[k];
    }
  });
  if (s.korse) s.korse.forEach((v,i)=>{ V.korse[i]=v; });
  if (window._redrawRamp) window._redrawRamp();
  // A preset's `kongre` array is its conference/periodic budget — write it into
  // donemsel.kongre (the live source the P&L reads), then rebuild V.kongre as
  // the per-month sum of ALL donemsel categories, matching the drag-chart's own
  // sync. Previously it set V.kongre directly and left donemsel stale, so the
  // P&L netted the OLD donemsel.reklam out of the NEW kongre (audit F13).
  if (s.kongre && V.donemsel && V.donemsel.kongre) {
    s.kongre.forEach((v,i)=>{ V.donemsel.kongre[i]=v; });
    V.kongre = Array.from({length:12}, (_,i) => Object.keys(V.donemsel).reduce((sum,k)=>sum+(V.donemsel[k][i]||0),0));
  }
  if (window._redrawDonem) window._redrawDonem();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
  recalc();
}

function buildMixTable() {
  const wrap = document.getElementById('mixTableWrap');
  if (!wrap) return;

  const COLORS = ['#D85A30','#1D9E75','#534AB7','#D4537E'];
  const LABELS = ['Std-Rep.','Perf+Rep.','Sens+Rep.','Sns+Rep+Prf'];
  const _rows = upgradeRows('clinic'); // SR-1: read-only view of the upgrade path

  // Header
  let html = '<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr>';
  html += '<th style="text-align:left;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;white-space:nowrap;">Month</th>';
  LABELS.forEach(function(label, pi) {
    html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;color:'+COLORS[pi]+';">'+label+'</th>';
  });
  html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;">Total</th>';
  html += '</tr></thead><tbody>';

  for (let i = 0; i < 12; i++) {
    html += '<tr><td style="padding:6px 8px;border:1px solid #eeeee9;font-weight:600;color:#555;white-space:nowrap;">Month '+(i+1)+'</td>';
    for (let pi = 0; pi < 4; pi++) {
      const aktif = i >= (V.aktifAy[pi] || 0);
      const val   = _rows[i][pi];
      if (aktif) {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#fff;text-align:center;"><span id="mx_'+i+'_'+pi+'" style="min-width:28px;font-weight:700;color:'+COLORS[pi]+';font-size:11px;">'+(Math.round(val*10)/10).toFixed(1)+'%</span></td>';
      } else {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#f8f8f6;">'
              + '<div style="text-align:center;font-size:11px;color:#ccc;" id="mx_'+i+'_'+pi+'">—</div></td>';
      }
    }
    const tot = _rows[i].reduce(function(s,v){return s+v;}, 0);
    html += '<td id="mxtot_'+i+'" style="padding:6px 8px;border:1px solid #eeeee9;text-align:center;font-weight:700;font-size:11px;">'+Math.round(tot)+'%</td>';
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  wrap.innerHTML = html;
}

function buildMixB2BTable() {
  const wrap = document.getElementById('mixB2BTableWrap');
  if (!wrap) return;
  const COLORS = ['#D85A30','#1D9E75','#534AB7','#D4537E'];
  const LABELS = ['Std-Rep.','Perf+Rep.','Sens+Rep.','Sns+Rep+Prf'];
  const _rows = upgradeRows('b2b'); // SR-1: read-only view of the upgrade path
  let html = '<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr>';
  html += '<th style="text-align:left;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;white-space:nowrap;">Month</th>';
  LABELS.forEach(function(label, pi) {
    html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;color:'+COLORS[pi]+';">'+label+'</th>';
  });
  html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;">Total</th></tr></thead><tbody>';
  for (let i = 0; i < 12; i++) {
    html += '<tr><td style="padding:6px 8px;border:1px solid #eeeee9;font-weight:600;color:#555;white-space:nowrap;">Month '+(i+1)+'</td>';
    for (let pi = 0; pi < 4; pi++) {
      const aktif = i >= (V.aktifAy[pi] || 0);
      const val   = _rows[i][pi];
      if (aktif) {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#fff;text-align:center;"><span id="mxb2_'+i+'_'+pi+'" style="min-width:28px;font-weight:700;color:'+COLORS[pi]+';font-size:11px;">'+(Math.round(val*10)/10).toFixed(1)+'%</span></td>';
      } else {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#f8f8f6;"><div style="text-align:center;font-size:11px;color:#ccc;" id="mxb2_'+i+'_'+pi+'">—</div></td>';
      }
    }
    const tot = _rows[i].reduce(function(s,v){return s+v;},0);
    html += '<td id="mxb2tot_'+i+'" style="padding:6px 8px;border:1px solid #eeeee9;text-align:center;font-weight:700;font-size:11px;">'+Math.round(tot)+'%</td></tr>';
  }
  html += '</tbody></table></div>';
  wrap.innerHTML = html;
}


function _updateB2BBadges() {
  const badges = document.getElementById('b2bRampBadges');
  if (!badges) return;
  badges.innerHTML = (V.korseB2B||[]).map((v,i) =>
    `<span style="font-size:11px;font-weight:700;background:#EDF4FF;color:#378ADD;border:1px solid #B3D4F5;border-radius:4px;padding:2px 7px;">Mo${i+1}: ${v}</span>`
  ).join('');
}

function svKorseB2B(idx, val) {
  val = parseInt(val) || 0;
  if (!V.korseB2B) V.korseB2B = [0,0,0,0,0,0,0,0,0,0,0,0];
  V.korseB2B[idx] = val;
  const dp = document.getElementById('b2bRamp_'+idx);
  if (dp) dp.textContent = val;
  _updateB2BBadges();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderPazarChartB2B(rowsB2B) {
  _updateB2BBadges();
  const tKorseB2B = rowsB2B.reduce((s,r)=>s+(r.korse||0),0);
  const tGelirB2B = rowsB2B.reduce((s,r)=>s+(r.gelirNet||0),0);
  const kpiB2B = document.getElementById('kpiGridB2B');
  if (kpiB2B) {
    const pazarTR = gv('pazarTR');
    const payB2B = pazarTR > 0 ? (tKorseB2B / pazarTR * 100).toFixed(1) : '0.0';
    kpiB2B.innerHTML = [
      { label:'B2B total braces', val: tKorseB2B+' units', c:'neu' },
      { label:'B2B net revenue after fees & materials', val: ff(tGelirB2B), c: tGelirB2B>0?'pos':'neu' },
      { label:'B2B — share of national market (vs pazarTR ' + pazarTR.toLocaleString('en-US') + ' braces/yr)', val: payB2B+'%', c: parseFloat(payB2B)>=1?'pos':'neu' },
    ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div></div>`).join('');
  }
  if (mixB2BChartInst) { mixB2BChartInst.destroy(); mixB2BChartInst = null; }
  const ctx2 = _origGetById('mixB2BChart');
  if (!ctx2) return;
  const PNAMES=['Std-Report','Perf+Rpl','Sensor+Rpl','Sns+Rpl+Perf'];
  const PCOLORS=['rgba(216,90,48,0.8)','rgba(29,158,117,0.8)','rgba(83,74,183,0.8)','rgba(212,83,126,0.8)'];
  mixB2BChartInst = new Chart(ctx2, {
    data: {
      labels: rowsB2B.map(r=>'Month '+r.ay),
      datasets: [
        ...PNAMES.map((name,pi)=>({
          type:'bar', label:name,
          data: rowsB2B.map(r=>(r.k&&r.k[pi])||0),
          backgroundColor:PCOLORS[pi], borderWidth:0, stack:'mix', order:2
        })),
        { type:'line', label:'TR B2B market avg./month',
          data: rowsB2B.map(()=>Math.round(gv('pazarTR')/12)),
          borderColor:'#888', borderWidth:1.5, borderDash:[6,4], pointRadius:0, tension:0,
          fill:false, order:1, yAxisID:'y' },
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins: {
        legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
        tooltip:{ mode:'index', callbacks:{ label: c=>{
          if(c.dataset.stack==='mix') {
            const total = rowsB2B[c.dataIndex].korse;
            return c.dataset.label+': '+c.raw+' units ('+Math.round(c.raw/(total||1)*100)+'%)';
          }
          return c.dataset.label+': '+c.raw+' units';
        }}}
      },
      scales: {
        x:{ stacked:true, grid:{display:false} },
        y:{ stacked:true, title:{display:true,text:'Units / month',font:{size:10}}, grid:{color:'rgba(0,0,0,0.05)'} }
      }
    }
  });

  // B2B satış tablosu
  const b2bTbl = document.getElementById('b2bTblWrap');
  if (b2bTbl) {
    const tBrutB2B  = rowsB2B.reduce((s,r)=>s+(r.gelirBrut||0),0);
    const tSciB2B = rowsB2B.reduce((s,r)=>s+(r.feeSciB2B||0),0);
    const tEduB2B = rowsB2B.reduce((s,r)=>s+(r.feeEduB2B||0),0);
    const tLibB2B = rowsB2B.reduce((s,r)=>s+(r.feeLibB2B||0),0);
    const tBaskiB2B = rowsB2B.reduce((s,r)=>s+(r.baskiTop||0),0);
    const tRoyB2B   = rowsB2B.reduce((s,r)=>s+(r.royaltyTop||0),0);
    const tpK2 = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0]);
    const th2 = `<thead><tr>
      <th>Month</th>
      <th style="color:#D85A30;">Std-Rep.</th>
      <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
      <th>Total</th><th>Gross Revenue</th><th>Sci. Study Fee</th><th>Education Fee</th><th>Library Fee</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    </tr></thead>`;
    const tb2_rows = rowsB2B.map(r => {
      const kk = r.k || [0,0,0,0];
      return `<tr>
        <td>Month ${r.ay}</td>
        <td style="color:#D85A30;">${kk[0]||'—'}</td>
        <td style="color:#1D9E75;">${kk[1]||'—'}</td><td style="color:#534AB7;">${kk[2]||'—'}</td><td style="color:#D4537E;">${kk[3]||'—'}</td>
        <td><b>${r.korse||'—'}</b></td>
        <td>${r.korse?ff(r.gelirBrut):'—'}</td>
        <td class="${r.feeSciB2B?'nc':'zc'}">${r.feeSciB2B?ff(-r.feeSciB2B):'—'}</td>
        <td class="${r.feeEduB2B?'nc':'zc'}">${r.feeEduB2B?ff(-r.feeEduB2B):'—'}</td>
        <td class="${r.feeLibB2B?'nc':'zc'}">${r.feeLibB2B?ff(-r.feeLibB2B):'—'}</td>
        <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
        <td class="${r.royaltyTop?'nc':'zc'}">${r.royaltyTop?ff(-r.royaltyTop):'—'}</td>
        <td class="${cls(r.gelirNet)}">${r.korse?ff(r.gelirNet):'—'}</td>
      </tr>`;
    }).join('');
    const topRow2 = `<tr style="background:#f0efe9;font-weight:700;">
      <td>Total</td>
      <td style="color:#D85A30;">${tpK2[0]}</td>
      <td style="color:#1D9E75;">${tpK2[1]}</td><td style="color:#534AB7;">${tpK2[2]}</td><td style="color:#D4537E;">${tpK2[3]}</td>
      <td><b>${tKorseB2B}</b></td>
      <td>${ff(tBrutB2B)}</td>
      <td class="${tSciB2B?'nc':'zc'}">${tSciB2B?ff(-tSciB2B):'—'}</td>
      <td class="${tEduB2B?'nc':'zc'}">${tEduB2B?ff(-tEduB2B):'—'}</td>
      <td class="${tLibB2B?'nc':'zc'}">${tLibB2B?ff(-tLibB2B):'—'}</td>
      <td class="nc">${ff(-tBaskiB2B)}</td><td class="nc">${ff(-tRoyB2B)}</td>
      <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    </tr>`;
    b2bTbl.innerHTML = '<div class="tbl-wrap"><table id="b2bTable">' + th2 + '<tbody>' + tb2_rows + topRow2 + '</tbody></table></div>';
  }
}


// Named anchors on the discount-rate slider — dragging the slider to a value
// off these three just shows no button as active; svRiskProfile() is only
// reached by clicking one of the buttons. Declared before initDynamic() since
// it calls _refreshRiskProfile() (which reads this) at page load.
const RISK_PROFILE_ANCHORS = [
  { rate: 32, id: 'riskBtn_32', color: '#c94f2a', label: 'Unproven concept' },
  { rate: 20, id: 'riskBtn_20', color: '#534AB7', label: 'Proven technology, new venue' },
  { rate: 14, id: 'riskBtn_14', color: '#1a7a45', label: 'Established operations' },
];
// ── Exit Tax Structuring (shareholder-level only — does not touch KV on
// operating profit). Structure assumption, not tax advice: GVK mük. 80
// exempts individuals from income tax on the gain from selling A.Ş. share
// certificates (hisse senedi/ilmühaber) held >2 years; Ltd. şirket shares
// never qualify for individuals regardless of holding period; corporate
// sellers get a 75% KV exemption on qualifying participation gains under
// KVK 5/1-e (not modeled here — display-only on captable.html). Confirm
// certificate printing dates, ilmühaber validity, and KVK 5/1-e conditions
// with the YMM before signing.
// Flagship is locked in as A.Ş. (share certificates printed) — this is what
// makes the individual 2-year exit-tax exemption available at all (GVK mük.
// 80). No Ltd. toggle for the flagship anymore; exemption is a pure
// holding-period clock. Satellites (Izmir/Ankara) are a separate,
// independent Ltd.-vs-Branch(şube) choice — see _refreshSubeMi below.
function exitTaxClock() {
  const heldMonths = (V.exitYili ?? 5) * 12 - (V.fundAy ?? 0);
  const exempt = heldMonths >= 24;
  return { heldMonths, exempt };
}
function applyExitTax(grossPayout, costBasis) {
  const { exempt } = exitTaxClock();
  const gain = Math.max(0, grossPayout - costBasis);
  const tax = exempt ? 0 : gain * (V.kisiselVergiOrani ?? 40) / 100;
  return { exempt, gain, tax, netPayout: grossPayout - tax };
}
// Satellite Entity Mode (growth.html) — Branch (committed default) vs. Subsidiary Ltd.
// (şube). Structure assumption, not tax advice: Turkey has no group
// taxation, so a subsidiary's losses stay trapped in its own Ltd. (only
// offset that Ltd.'s own future profit, 5-yr carryforward), while a
// branch's losses flow straight into the flagship's own taxable profit —
// see buildProjection()'s izmirFeeRow/izmirEquityRow/izmirMinorityRow fork.
// Mode-aware labels for satellite rows (review 4-B12). The committed defaults
// run every satellite as a BRANCH (şube): its 100% operating profit IS summed
// into the flagship total (via the "satellite branches" line), there is no
// management fee and no minority. Only a satellite switched to Subsidiary mode
// is a memo line whose flagship take is fee + equity share.
function _satRowTag(sehir, opensY3) {
  const y3 = opensY3 ? ', opens Year 3' : '';
  return V[sehir + 'SubeMi']
    ? '— branch: 100% consolidated into the total (via the satellite line below)' + y3
    : '— subsidiary: own 100% result, memo only (flagship takes fee + equity below)' + y3;
}
function _satAggLabels() {
  const ss = ['izmir','ankara','bursa','gaziantep'].filter(c => V[c + 'Aktif']);
  const nBranch = ss.filter(c => V[c + 'SubeMi']).length, nSub = ss.length - nBranch;
  return {
    anySub: nSub > 0,
    fee: '↳ Management fee income to flagship' + (nSub ? '' : ' (n/a — all satellites are branches)'),
    equity: nSub === 0 ? '↳ Satellite branches — 100% of operating profit consolidated'
          : nBranch === 0 ? '↳ Equity income from subsidiaries (flagship % of net after fee)'
          : '↳ Satellites consolidated (branches 100% + subsidiaries\' equity share)',
  };
}
function _refreshSubeMi(sehir) {
  const isSube = !!V[sehir+'SubeMi'];
  const color = { izmir:'#1D9E75', ankara:'#E8963C', bursa:'#c94f2a', gaziantep:'#8a6d1a' }[sehir] || '#534AB7';
  const btnSub = document.getElementById(sehir+'ModeBtn_sub');
  const btnBranch = document.getElementById(sehir+'ModeBtn_branch');
  if (btnSub)    { btnSub.style.background    = !isSube ? color : '#fff'; btnSub.style.color    = !isSube ? '#fff' : color; }
  if (btnBranch) { btnBranch.style.background =  isSube ? color : '#fff'; btnBranch.style.color =  isSube ? '#fff' : color; }
  const payWrap = document.getElementById(sehir+'FlagshipPayWrap');
  if (payWrap) payWrap.style.display = isSube ? 'none' : '';
  const note = document.getElementById(sehir+'SubeNote');
  if (note) note.style.display = isSube ? 'block' : 'none';
}
function svSubeMi(sehir, isSube) {
  V[sehir+'SubeMi'] = isSube;
  _refreshSubeMi(sehir);
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function initDynamic() {
  _refreshPrinterDisplay();
  renderCapacityCard();
  renderCapAssume();
  svRobotKol();
  _refreshVergiDahil();
  _refreshFeeStreamAyriMult();
  _refreshSubeMi('izmir');
  _refreshSubeMi('ankara');
  _refreshSubeMi('bursa');
  _refreshSubeMi('gaziantep');
  _refreshNakdiSermaye();
  _refreshTeknokentKapsam();
  _refreshEmisyonPrimi();
  _refreshBursaGaziantepFcfFunded();
  _refreshWorkingCapBufferFcfFunded();
  ['exitYili','kisiselVergiOrani','fundAy','euLegalFaiz','nominalPayOrani'].forEach(function(k) {
    const sl = document.getElementById('s_'+k);
    const sp = document.getElementById(k);
    if (sl) sl.value = V[k];
    if (sp) sp.textContent = V[k];
  });
  const _kvSl = document.getElementById('s_kvOrani');
  const _kvSp = document.getElementById('kvOrani');
  if (_kvSl) _kvSl.value = V.kvOrani ?? 25;
  if (_kvSp) _kvSp.textContent = V.kvOrani ?? 25;
  const _feSl = document.getElementById('s_feeExitMult');
  const _feSp = document.getElementById('feeExitMult');
  if (_feSl) _feSl.value = V.feeExitMult ?? 12;
  if (_feSp) _feSp.textContent = V.feeExitMult ?? 12;
  // Init DCF sliders (dcfGrowth/dcfGrowth45 retired — no formula read them and
  // no page bound them; removed from V, audit F14)
  ['dcfRate'].forEach(function(k) {
    const sl = document.getElementById('s_'+k);
    const sp = document.getElementById(k);
    if (sl) sl.value = V[k];
    if (sp) sp.textContent = V[k];
  });
  _refreshRiskProfile();
  // Contribution Register + Sweat Equity sliders (currently on captable.html)
  // are synced by the generic input[type=range][id] loop below — no
  // page-specific handling needed since that loop derives V's key from the
  // s_ prefix and runs on whichever page the sliders happen to live on.
  const _exitSl = document.getElementById('s_dcfExitMult');
  const _exitSp = document.getElementById('dcfExitMult');
  if (_exitSl) _exitSl.value = V.dcfExitMult || 10;
  if (_exitSp) _exitSp.textContent = (V.dcfExitMult || 10) + '×';
  ['workingCapBufferEur'].forEach(function(k) {
    const sl = document.getElementById('s_'+k);
    const sp = document.getElementById(k);
    if (sl) sl.value = V[k];
    if (sp) sp.textContent = (V[k]||0).toLocaleString('tr-TR');
  });
  const kDisp = document.getElementById('kesimEurPerDisp');
  if (kDisp) kDisp.textContent = V.kesimEurPer ?? 50;
  const rSlider = document.getElementById('s_royaltyEur');
  if (rSlider) rSlider.value = V.royaltyEur ?? 75;
  // product sliders init from V
  initRampCanvas();
  initB2BRampCanvas();
  initDonemCanvas();
  initSensitivityInputs();
  buildMixTable();  // aktifAy'e göre mix tablosunu dinamik oluştur
  buildMixB2BTable();

  // Tüm slider pozisyonlarını ve değer span'larını V ile senkronize et
  document.querySelectorAll('input[type=range][id]').forEach(function(sl) {
    var key = sl.id.indexOf('s_') === 0 ? sl.id.slice(2) : sl.id;
    if (V[key] !== undefined && !Array.isArray(V[key])) sl.value = V[key];
  });
  document.querySelectorAll('.sl-val[id]').forEach(function(sp) {
    var key = sp.id;
    if (V[key] !== undefined && !Array.isArray(V[key])) sp.textContent = numFmt(key, V[key]);
  });
  // KurulumOranVal spans: not in V by that key name, so general loop misses them
  ['izmir','ankara'].forEach(function(s) {
    const vl = document.getElementById(s+'KurulumOranVal');
    if (vl) vl.textContent = '×' + parseFloat(V[s+'KurulumOran'] || 1.0).toFixed(2);
  });
}

// ── DRAGGABLE RAMP CANVAS ─────────────────────────────────────────────────────
function initRampCanvas() {
  const wrap = _origGetById('rampWrap');
  const canvas = _origGetById('rampCanvas');
  if (!canvas || !wrap) return;
  const MAX_VAL = 100, PAD_L = 32, PAD_R = 12, PAD_T = 24, PAD_B = 36;
  let dragging = null, dragStartY = 0, dragStartVal = 0;

  function resize() {
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    drawRamp();
  }

  function barLayout() {
    const W = canvas.width - PAD_L - PAD_R;
    const H = canvas.height - PAD_T - PAD_B;
    const n = V.korse.length;
    const gap = Math.max(2, Math.floor(W / n * 0.12));
    const bw  = Math.max(2, Math.floor((W - gap * (n - 1)) / n));
    return { W, H, n, gap, bw };
  }

  function drawRamp() {
    const ctx = canvas.getContext('2d');
    const { W, H, n, gap, bw } = barLayout();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // grid lines
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 1;
    [25,50,75,100].forEach(g => {
      const y = PAD_T + H - (g / MAX_VAL) * H;
      ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(PAD_L + W, y); ctx.stroke();
      ctx.fillStyle = '#aaa';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(g, PAD_L - 4, y + 3);
    });

    // bars
    V.korse.forEach((val, i) => {
      const x  = PAD_L + i * (bw + gap);
      const bh = (val / MAX_VAL) * H;
      const y  = PAD_T + H - bh;
      const isHover = dragging === i;

      // bar fill
      ctx.fillStyle = isHover ? '#B84420' : 'rgba(216,90,48,0.78)';
      ctx.beginPath();
      ctx.roundRect(x, y, bw, bh, [3, 3, 0, 0]);
      ctx.fill();

      // drag handle line on top
      ctx.strokeStyle = isHover ? '#fff' : 'rgba(255,255,255,0.7)';
      ctx.lineWidth = isHover ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 4, y + 1);
      ctx.lineTo(x + bw - 4, y + 1);
      ctx.stroke();

      // value label above bar
      ctx.fillStyle = isHover ? '#B84420' : '#555';
      ctx.font = isHover ? 'bold 12px Arial' : '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(val, x + bw / 2, y - 5);

      // month label below
      ctx.fillStyle = '#888';
      ctx.font = '10px Arial';
      ctx.fillText('Month ' + (i + 1), x + bw / 2, PAD_T + H + PAD_B - 8);
    });

    // update badges
    const badges = document.getElementById('rampBadges');
    if (badges) {
      badges.innerHTML = V.korse.map((v,i) =>
        `<span style="font-size:11px;font-weight:700;background:#fdf0ea;color:#D85A30;border:1px solid #f0c4a8;border-radius:4px;padding:2px 7px;">Mo${i+1}: ${v}</span>`
      ).join('');
    }
  }

  function hitBar(x, y) {
    const { H, gap, bw } = barLayout();
    for (let i = 0; i < V.korse.length; i++) {
      const bx = PAD_L + i * (bw + gap);
      const val = V.korse[i];
      const bh  = (val / MAX_VAL) * H;
      const by  = PAD_T + H - bh;
      // hit zone: full column width, 10px above top handle
      if (x >= bx && x <= bx + bw && y >= by - 10 && y <= by + 10) return i;
    }
    return null;
  }

  function yToVal(y) {
    const H = canvas.height - PAD_T - PAD_B;
    const raw = Math.round(((PAD_T + H - y) / H) * MAX_VAL);
    return Math.max(0, Math.min(MAX_VAL, raw));
  }

  function onDown(ex, ey) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (ex - rect.left) * scaleX;
    const cy = (ey - rect.top)  * scaleY;
    const hit = hitBar(cx, cy);
    if (hit !== null) {
      dragging = hit;
      dragStartY   = cy;
      dragStartVal = V.korse[hit];
      canvas.style.cursor = 'ns-resize';
    }
  }

  function onMove(ex, ey) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (ex - rect.left) * scaleX;
    const cy = (ey - rect.top)  * scaleY;

    if (dragging !== null) {
      V.korse[dragging] = yToVal(cy);
      drawRamp();
      recalc();
    } else {
      // cursor feedback
      const hit = hitBar(cx, cy);
      canvas.style.cursor = hit !== null ? 'ns-resize' : 'default';
    }
  }

  function onUp() {
    if (dragging === null) return;
    dragging = null;
    canvas.style.cursor = 'default';
    drawRamp();
    localStorage.setItem('osteoid_V', JSON.stringify(V));
  }

  // mouse
  canvas.addEventListener('mousedown',  e => onDown(e.clientX, e.clientY));
  window.addEventListener('mousemove',  e => { if (dragging !== null) onMove(e.clientX, e.clientY); });
  window.addEventListener('mouseup',    onUp);
  // also allow hover cursor without dragging
  canvas.addEventListener('mousemove',  e => onMove(e.clientX, e.clientY));

  // touch
  canvas.addEventListener('touchstart', e => { e.preventDefault(); onDown(e.touches[0].clientX, e.touches[0].clientY); }, {passive:false});
  window.addEventListener('touchmove',  e => { if (dragging !== null) { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); } }, {passive:false});
  window.addEventListener('touchend',   onUp);

  new ResizeObserver(resize).observe(wrap);
  resize();

  // expose redraw for scenario reloads
  window._redrawRamp = drawRamp;
}

// ── DRAGGABLE B2B RAMP CANVAS ─────────────────────────────────────────────────
function initB2BRampCanvas() {
  const wrap   = _origGetById('b2bRampWrap');
  const canvas = _origGetById('b2bRampCanvas');
  if (!canvas || !wrap) return;
  const MAX_VAL = 200, PAD_L = 36, PAD_R = 12, PAD_T = 24, PAD_B = 36;
  let dragging = null;

  function resize() {
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    drawB2BRamp();
  }

  function barLayout() {
    const W = canvas.width - PAD_L - PAD_R;
    const H = canvas.height - PAD_T - PAD_B;
    const n = (V.korseB2B || []).length;
    const gap = Math.max(2, Math.floor(W / n * 0.12));
    const bw  = Math.max(2, Math.floor((W - gap * (n - 1)) / n));
    return { W, H, n, gap, bw };
  }

  function drawB2BRamp() {
    if (!V.korseB2B) V.korseB2B = [0,0,0,0,0,0,0,0,0,0,0,0];
    const ctx = canvas.getContext('2d');
    const { W, H, n, gap, bw } = barLayout();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // grid lines
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 1;
    [50,100,150,200].forEach(g => {
      const y = PAD_T + H - (g / MAX_VAL) * H;
      ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(PAD_L + W, y); ctx.stroke();
      ctx.fillStyle = '#aaa';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(g, PAD_L - 4, y + 3);
    });

    // bars
    V.korseB2B.forEach((val, i) => {
      const x  = PAD_L + i * (bw + gap);
      const bh = Math.max(0, (val / MAX_VAL) * H);
      const y  = PAD_T + H - bh;
      const isHover = dragging === i;

      ctx.fillStyle = isHover ? '#1a6aaa' : 'rgba(55,138,221,0.78)';
      ctx.beginPath();
      ctx.roundRect(x, y, bw, bh, [3, 3, 0, 0]);
      ctx.fill();

      ctx.strokeStyle = isHover ? '#fff' : 'rgba(255,255,255,0.7)';
      ctx.lineWidth = isHover ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 4, y + 1);
      ctx.lineTo(x + bw - 4, y + 1);
      ctx.stroke();

      ctx.fillStyle = isHover ? '#1a6aaa' : '#555';
      ctx.font = isHover ? 'bold 12px Arial' : '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(val, x + bw / 2, y - 5);

      ctx.fillStyle = '#888';
      ctx.font = '10px Arial';
      ctx.fillText('Month ' + (i + 1), x + bw / 2, PAD_T + H + PAD_B - 8);
    });

    _updateB2BBadges();
  }

  function hitBar(x, y) {
    const { H, gap, bw } = barLayout();
    for (let i = 0; i < (V.korseB2B || []).length; i++) {
      const bx  = PAD_L + i * (bw + gap);
      const val = V.korseB2B[i];
      const bh  = Math.max(0, (val / MAX_VAL) * H);
      const by  = PAD_T + H - bh;
      if (x >= bx && x <= bx + bw && y >= by - 10 && y <= by + 10) return i;
    }
    return null;
  }

  function yToVal(y) {
    const H = canvas.height - PAD_T - PAD_B;
    const raw = Math.round(((PAD_T + H - y) / H) * MAX_VAL / 5) * 5;
    return Math.max(0, Math.min(MAX_VAL, raw));
  }

  function onDown(ex, ey) {
    const rect = canvas.getBoundingClientRect();
    const cx = (ex - rect.left) * (canvas.width / rect.width);
    const cy = (ey - rect.top)  * (canvas.height / rect.height);
    const hit = hitBar(cx, cy);
    if (hit !== null) { dragging = hit; canvas.style.cursor = 'ns-resize'; }
  }

  function onMove(ex, ey) {
    const rect = canvas.getBoundingClientRect();
    const cx = (ex - rect.left) * (canvas.width / rect.width);
    const cy = (ey - rect.top)  * (canvas.height / rect.height);
    if (dragging !== null) {
      V.korseB2B[dragging] = yToVal(cy);
      drawB2BRamp();
      recalc();
    } else {
      canvas.style.cursor = hitBar(cx, cy) !== null ? 'ns-resize' : 'default';
    }
  }

  function onUp() {
    if (dragging === null) return;
    dragging = null;
    canvas.style.cursor = 'default';
    drawB2BRamp();
    localStorage.setItem('osteoid_V', JSON.stringify(V));
  }

  canvas.addEventListener('mousedown',  e => onDown(e.clientX, e.clientY));
  window.addEventListener('mousemove',  e => { if (dragging !== null) onMove(e.clientX, e.clientY); });
  window.addEventListener('mouseup',    onUp);
  canvas.addEventListener('mousemove',  e => onMove(e.clientX, e.clientY));

  canvas.addEventListener('touchstart', e => { e.preventDefault(); onDown(e.touches[0].clientX, e.touches[0].clientY); }, {passive:false});
  window.addEventListener('touchmove',  e => { if (dragging !== null) { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); } }, {passive:false});
  window.addEventListener('touchend',   onUp);

  new ResizeObserver(resize).observe(wrap);
  resize();

  window._redrawB2BRamp = drawB2BRamp;
}

let mChart=null;


// ── DRAGGABLE DÖNEMSEL GİDER CANVAS ──────────────────────────────────────────
function initDonemCanvas() {
  const wrap   = _origGetById('donemWrap');
  const canvas = _origGetById('donemCanvas');
  if (!wrap || !canvas) return;

  const CATS = [
    { key:'reklam', label:'Advertising / Marketing', color:'rgba(83,74,183,0.80)',  max:150000, step:5000  },
    { key:'atolye', label:'Workshop / Training',      color:'rgba(29,158,117,0.80)', max:400000, step:10000 },
    { key:'kongre', label:'Conference / Symposium',   color:'rgba(216,90,48,0.80)', max:700000, step:25000 },
    { key:'ymm',    label:'CPA / Financial Advisor',  color:'rgba(139,90,43,0.80)', max:50000,  step:2500  },
    { key:'diger',  label:'Other',                    color:'rgba(136,135,128,0.80)',max:300000, step:10000 }
  ];

  // Eksik anahtarları sıfır dizisiyle doldur (eski localStorage verileri için)
  if (!V.donemsel) V.donemsel = {};
  CATS.forEach(c => { if (!V.donemsel[c.key]) V.donemsel[c.key] = Array(12).fill(0); });

  const PAD_L=44, PAD_R=12, PAD_T=20, PAD_B=32;
  let dragging = null; // {catIdx, monthIdx}

  function globalMax() {
    return Math.max(...CATS.map(c => Math.max(...V.donemsel[c.key])));
  }

  function resize() {
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    draw();
  }

  function layout() {
    const W  = canvas.width  - PAD_L - PAD_R;
    const H  = canvas.height - PAD_T - PAD_B;
    const n  = 12;
    const nc = CATS.length;
    const groupGap = Math.max(3, Math.floor(W / n * 0.18));
    const barGap   = 1;
    const groupW   = Math.floor((W - groupGap * (n-1)) / n);
    const bw       = Math.max(2, Math.floor((groupW - barGap*(nc-1)) / nc));
    return { W, H, n, nc, groupGap, barGap, groupW, bw };
  }

  function draw() {
    const ctx = canvas.getContext('2d');
    const { W, H, n, nc, groupGap, barGap, groupW, bw } = layout();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxVal = Math.max(globalMax(), 100000);

    // grid
    const gridSteps = [0, 0.25, 0.5, 0.75, 1.0];
    ctx.textAlign = 'right';
    ctx.font = '10px Arial';
    gridSteps.forEach(f => {
      const y = PAD_T + H - f * H;
      ctx.strokeStyle = 'rgba(0,0,0,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(PAD_L+W, y); ctx.stroke();
      ctx.fillStyle = '#aaa';
      const label = f===0?'0': f===1 ? Math.round(maxVal/(V.eurKur ?? 50)/1000)+'K' : Math.round((maxVal*f)/(V.eurKur ?? 50)/1000)+'K';
      ctx.fillText('€'+label, PAD_L-4, y+3);
    });

    // bars
    for (let i=0; i<n; i++) {
      const gx = PAD_L + i*(groupW+groupGap);

      CATS.forEach((cat, ci) => {
        const val = V.donemsel[cat.key][i] || 0;
        const bh  = (val / maxVal) * H;
        const x   = gx + ci*(bw+barGap);
        const y   = PAD_T + H - bh;
        const isDrag = dragging && dragging.catIdx===ci && dragging.monthIdx===i;

        ctx.fillStyle = isDrag ? cat.color.replace('0.80','1.0') : cat.color;
        if (bh > 0) {
          ctx.beginPath();
          ctx.roundRect(x, y, bw, bh, [2,2,0,0]);
          ctx.fill();
          // handle
          ctx.strokeStyle = 'rgba(255,255,255,0.8)';
          ctx.lineWidth = isDrag ? 2 : 1;
          ctx.beginPath(); ctx.moveTo(x+1, y+1); ctx.lineTo(x+bw-1, y+1); ctx.stroke();
        } else {
          // ghost bar when 0
          ctx.fillStyle = 'rgba(0,0,0,0.04)';
          ctx.fillRect(x, PAD_T+H-4, bw, 4);
        }

        // value label above non-zero bar (only if wide enough)
        if (val > 0 && bw >= 10) {
          ctx.fillStyle = isDrag ? '#333' : '#555';
          ctx.font = '9px Arial';
          ctx.textAlign = 'center';
          const lbl = val>=1000 ? (val/1000).toFixed(0)+'K' : val;
          ctx.fillText(lbl, x+bw/2, y-3);
        }
      });

      // month label
      ctx.fillStyle = '#888';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Mo'+(i+1), PAD_L + i*(groupW+groupGap) + groupW/2, PAD_T+H+PAD_B-8);
    }

    // update legend
    const leg = document.getElementById('donemLegend');
    if (leg) {
      leg.innerHTML = CATS.map(c => {
        const total = V.donemsel[c.key].reduce((a,b)=>a+b,0);
        return `<span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#444;">
          <span style="width:10px;height:10px;border-radius:2px;background:${c.color};flex-shrink:0;"></span>
          ${c.label} <b style="color:#222">€${Math.round(total/(V.eurKur ?? 50)).toLocaleString('en-US')}</b>
        </span>`;
      }).join('');
    }
  }

  function hitBar(cx, cy) {
    const { H, groupGap, barGap, groupW, bw } = layout();
    const maxVal = Math.max(globalMax(), 100000);
    for (let i=0; i<12; i++) {
      const gx = PAD_L + i*(groupW+groupGap);
      for (let ci=0; ci<CATS.length; ci++) {
        const x  = gx + ci*(bw+barGap);
        const val= V.donemsel[CATS[ci].key][i]||0;
        const bh = (val/maxVal)*H;
        const y  = PAD_T+H-bh;
        if (cx>=x && cx<=x+bw && cy>=y-10 && cy<=PAD_T+H+8) return {catIdx:ci, monthIdx:i};
      }
    }
    return null;
  }

  function yToVal(cy, catIdx) {
    const { H } = layout();
    const maxVal = Math.max(globalMax(), 100000);
    const cat  = CATS[catIdx];
    const raw  = ((PAD_T+H-cy)/H)*maxVal;
    const snapped = Math.round(raw/cat.step)*cat.step;
    return Math.max(0, Math.min(cat.max, snapped));
  }

  function coords(e) {
    const rect = canvas.getBoundingClientRect();
    const scX  = canvas.width/rect.width, scY = canvas.height/rect.height;
    const src  = e.touches ? e.touches[0] : e;
    return { cx:(src.clientX-rect.left)*scX, cy:(src.clientY-rect.top)*scY };
  }

  canvas.addEventListener('mousedown', e => {
    const {cx,cy} = coords(e);
    const hit = hitBar(cx,cy);
    if (hit) { dragging=hit; canvas.style.cursor='ns-resize'; }
  });
  window.addEventListener('mousemove', e => {
    const {cx,cy} = coords(e);
    if (dragging) {
      V.donemsel[CATS[dragging.catIdx].key][dragging.monthIdx] = yToVal(cy, dragging.catIdx);
      // sync legacy kongre total
      V.kongre = Array.from({length:12},(_,i)=>CATS.reduce((s,c)=>s+(V.donemsel[c.key][i]||0),0));
      draw(); recalc();
    } else {
      canvas.style.cursor = hitBar(cx,cy) ? 'ns-resize' : 'default';
    }
  });
  canvas.addEventListener('mousemove', e => {
    if (!dragging) { const {cx,cy}=coords(e); canvas.style.cursor=hitBar(cx,cy)?'ns-resize':'default'; }
  });
  window.addEventListener('mouseup', () => { if (!dragging) return; dragging=null; canvas.style.cursor='default'; draw(); localStorage.setItem('osteoid_V', JSON.stringify(V)); });

  canvas.addEventListener('touchstart', e => { e.preventDefault(); const {cx,cy}=coords(e); const hit=hitBar(cx,cy); if(hit){dragging=hit;} }, {passive:false});
  window.addEventListener('touchmove',  e => { if(dragging){e.preventDefault(); const {cx,cy}=coords(e); V.donemsel[CATS[dragging.catIdx].key][dragging.monthIdx]=yToVal(cy,dragging.catIdx); V.kongre=Array.from({length:12},(_,i)=>CATS.reduce((s,c)=>s+(V.donemsel[c.key][i]||0),0)); draw(); recalc();} }, {passive:false});
  window.addEventListener('touchend',   () => { if (!dragging) return; dragging=null; draw(); localStorage.setItem('osteoid_V', JSON.stringify(V)); });

  new ResizeObserver(resize).observe(wrap);
  resize();
  window._redrawDonem = draw;
}


// ── GİDER DAĞILIMI CHARTS ────────────────────────────────────────────────────
let kPie=null, oPie=null, sBar=null;

function renderGiderDagilim(rows) {
  // ── 1. Kurulum pie ──
  const tadTop = gv('m2')*gv('tadilatM2');
  const dekTop = gv('m2')*gv('dekoM2');
  const kData = [
    { label:'Rent (pre-opening month)', val: gv('kira'),     color:'#534AB7' },
    { label:'Deposit',             val: gv('depozito'), color:'#7F77DD' },
    { label:'Real Estate Agent',   val: gv('emlakci'),  color:'#AFA9EC' },
    { label:'Renovation',          val: tadTop,         color:'#D85A30' },
    { label:'Decoration',          val: dekTop,         color:'#F0997B' },
    { label:'Equipment & Hardware',val: gv('mobilya'),  color:'#1D9E75' },
    { label:'License & Permits',   val: gv('ruhsat'),   color:'#9FE1CB' },
  ].filter(d=>d.val>0);

  if (kPie) kPie.destroy();
  if (!_origGetById('kurulumPie')) { /* canvas removed */ }
  else   kPie = new Chart(_origGetById('kurulumPie'), {
    type:'doughnut',
    data:{
      labels: kData.map(d=>d.label),
      datasets:[{ data:kData.map(d=>d.val), backgroundColor:kData.map(d=>d.color), borderWidth:1, borderColor:'#fff', hoverOffset:6 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'52%',
      plugins:{
        legend:{ position:'bottom', labels:{ font:{size:10}, boxWidth:8, padding:6,
          generateLabels: chart => chart.data.labels.map((l,i)=>({
            text: l+' — €'+Math.round(chart.data.datasets[0].data[i]/(V.eurKur ?? 50)/1000)+'K',
            fillStyle: chart.data.datasets[0].backgroundColor[i],
            strokeStyle:'#fff', lineWidth:1, index:i
          }))
        }},
        tooltip:{ callbacks:{ label: c=>' €'+Math.round(c.raw/(V.eurKur ?? 50)).toLocaleString('en-US') } }
      }
    }
  });

  // ── 2. Operasyon pie (12 ay toplam) ──
  const ortoBrut = gv('ortotistM')*gv('sgkCarpan');
  const totalKira    = rows.reduce((s,r,i)=>s+(i===0?0:gv('kira')),0);
  const totalElektrik= rows.length * (gv('elektrik')+gv('internet')+gv('sarf'));
  const totalPersonel= rows.length * ortoBrut;
  const totalReklam  = rows.reduce((s,r)=>s+r.reklamS,0);
  const totalMutfak  = rows.reduce((s,r)=>s+r.mutfakV,0);
  const totalStopaj  = rows.reduce((s,r)=>s+r.ayStopaj,0);
  const totalKongre  = Object.keys(V.donemsel).reduce((s,k)=>s+V.donemsel[k].reduce((a,b)=>a+b,0),0);
  const totalBaski   = rows.reduce((s,r)=>s+r.baskiTop,0);
  const totalSci     = rows.reduce((s,r)=>s+r.feeSci,0);
  const totalEdu     = rows.reduce((s,r)=>s+r.feeEdu,0);
  const totalLib     = rows.reduce((s,r)=>s+r.feeLib,0);

  const oData = [
    { label:'Rent',                val: totalKira,      color:'#534AB7' },
    { label:'Personnel (gross)',   val: totalPersonel,  color:'#D85A30' },
    { label:'Electricity/Int./Supplies', val: totalElektrik, color:'#1D9E75' },
    { label:'Advertising',         val: totalReklam,    color:'#378ADD' },
    { label:'Kitchen/Cleaning',    val: totalMutfak,    color:'#EF9F27' },
    { label:'Withholding Tax',     val: totalStopaj,    color:'#9FE1CB' },
    { label:'Periodic Costs',      val: totalKongre,    color:'#F0997B' },
    { label:'Brace Print',         val: totalBaski,     color:'#AFA9EC' },
    { label:'Scientific Study Fee',val: totalSci,       color:'#D4537E' },
    { label:'Education Fee',       val: totalEdu,       color:'#E37FA0' },
    { label:'Library Fee',         val: totalLib,       color:'#F0A8C0' },
  ].filter(d=>d.val>0);

  if (oPie) oPie.destroy();
  if (!_origGetById('operasyonPie')) { /* canvas removed */ }
  else   oPie = new Chart(_origGetById('operasyonPie'), {
    type:'doughnut',
    data:{
      labels: oData.map(d=>d.label),
      datasets:[{ data:oData.map(d=>d.val), backgroundColor:oData.map(d=>d.color), borderWidth:1, borderColor:'#fff', hoverOffset:6 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'52%',
      plugins:{
        legend:{ position:'bottom', labels:{ font:{size:10}, boxWidth:8, padding:6,
          generateLabels: chart => chart.data.labels.map((l,i)=>({
            text: l+' — €'+Math.round(chart.data.datasets[0].data[i]/(V.eurKur ?? 50)/1000)+'K',
            fillStyle: chart.data.datasets[0].backgroundColor[i],
            strokeStyle:'#fff', lineWidth:1, index:i
          }))
        }},
        tooltip:{ callbacks:{ label: c=>' €'+Math.round(c.raw/(V.eurKur ?? 50)).toLocaleString('en-US') } }
      }
    }
  });

  // ── 3. Stacked bar (aylık) ──
  const labels = rows.map(r=>'Month '+r.ay);
  const ortoBrutVal = gv('ortotistM')*gv('sgkCarpan');

  const stackSets = [
    { label:'Rent',             data: rows.map((r,i)=>i===0?0:gv('kira')),                       bg:'#534AB7' },
    { label:'Personnel',        data: rows.map(()=>Math.round(ortoBrutVal)),                            bg:'#D85A30' },
    { label:'Elct./Int./Sup.',  data: rows.map(()=>gv('elektrik')+gv('internet')+gv('sarf')),          bg:'#1D9E75' },
    { label:'Advertising',      data: rows.map(r=>r.reklamS),                                           bg:'#378ADD' },
    { label:'Kitchen',          data: rows.map(r=>r.mutfakV),                                           bg:'#EF9F27' },
    { label:'Withholding',      data: rows.map(r=>r.ayStopaj),                                          bg:'#9FE1CB' },
    { label:'Periodic',         data: rows.map(r=>r.kongre),                                            bg:'#F0997B' },
    { label:'Print',            data: rows.map(r=>r.baskiTop),                                          bg:'#AFA9EC' },
    { label:'Sci. Study Fee',   data: rows.map(r=>Math.round(r.feeSci)),                                bg:'#D4537E' },
    { label:'Education Fee',    data: rows.map(r=>Math.round(r.feeEdu)),                                bg:'#E37FA0' },
    { label:'Library Fee',      data: rows.map(r=>Math.round(r.feeLib)),                                bg:'#F0A8C0' },
  ];

  if (sBar) sBar.destroy();
  if (!_origGetById('stackedBar')) { /* canvas removed */ }
  else   sBar = new Chart(_origGetById('stackedBar'), {
    type:'bar',
    data:{
      labels,
      datasets: stackSets.map(s=>({
        label:s.label, data:s.data, backgroundColor:s.bg, borderWidth:0, stack:'gider'
      }))
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
        tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(c.raw/(V.eurKur ?? 50)).toLocaleString('en-US') } }
      },
      scales:{
        x:{ stacked:true, grid:{display:false} },
        y:{ stacked:true, ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur ?? 50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
      }
    }
  });
}


// ── KURULUM DONUT ─────────────────────────────────────────────────────────────
let kurulumDonutInst = null;
function renderKurulumDonut(kira, depozito, emlakci, tadilatTop, dekoTopV, mobilya, ruhsat) {
  const canvas = _origGetById('kurulumDonut');
  if (!canvas) return;
  const data = [
    { label:'Rent (pre-opening)', val: kira,     color:'#534AB7' },
    { label:'Deposit',           val: depozito,  color:'#7F77DD' },
    { label:'Real Estate Agent', val: emlakci,   color:'#AFA9EC' },
    { label:'Renovation',        val: tadilatTop,color:'#D85A30' },
    { label:'Decoration',        val: dekoTopV,  color:'#F0997B' },
    { label:'Equipment',         val: mobilya,   color:'#1D9E75' },
    { label:'License',           val: ruhsat,    color:'#9FE1CB' },
  ].filter(d => d.val > 0);

  if (kurulumDonutInst) { kurulumDonutInst.destroy(); kurulumDonutInst = null; }
  const total = data.reduce((s,d)=>s+d.val,0);

  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
  const W = canvas.width, H = canvas.height;
  const cx = W * 0.38, cy = H / 2;
  const ro = Math.max(10, Math.min(cx, cy) - 8), ri = ro * 0.52;

  ctx.clearRect(0,0,W,H);
  let angle = -Math.PI/2;
  data.forEach(d => {
    const sweep = (d.val/total) * Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, ro, angle, angle+sweep);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    angle += sweep;
  });
  // hole
  ctx.beginPath(); ctx.arc(cx,cy,ri,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
  // center text
  ctx.fillStyle='#1a1a1a'; ctx.font='bold 11px Arial'; ctx.textAlign='center';
  ctx.fillText('Total', cx, cy-6);
  ctx.font='bold 13px Arial';
  ctx.fillText('€'+Math.round(total/(V.eurKur ?? 50)/1000)+'K', cx, cy+10);

  // legend right side
  const legX = W*0.76, legY0 = H/2 - (data.length*14)/2;
  data.forEach((d,i) => {
    const y = legY0 + i*16;
    ctx.fillStyle = d.color;
    ctx.fillRect(legX-14, y-7, 10, 10);
    ctx.fillStyle = '#444'; ctx.font='10px Arial'; ctx.textAlign='left';
    ctx.fillText(d.label, legX, y+2);
    ctx.fillStyle='#888'; ctx.textAlign='right';
    ctx.fillText(Math.round(d.val/total*100)+'%', W-8, y+2);
  });
}

// ── SABİT GİDER PASTA ────────────────────────────────────────────────────────
let sabitPieInst = null;
function renderSabitBar(aylikKira, elektrik, internet, sarf, ortoBrut, operatorBrut, stajyerBrut, destekBrutBar, mutfak, genelGider, ymmM, staj2Brut) {
  stajyerBrut = stajyerBrut || 0;
  const canvas = _origGetById('sabitBar');
  if (!canvas) return;

  const items = [
    { label:'Rent',                val:aylikKira,          color:'#534AB7' },
    { label:'Operator (gross)',    val:(operatorBrut||0),  color:'#2980B9' },
    { label:'Orthotist (gross)',   val:ortoBrut,           color:'#D85A30' },
    { label:'Intern (gross)',      val:stajyerBrut,        color:'#EF9F27' },
    { label:'Support Staff (gross)', val:(destekBrutBar||0), color:'#F0A070' },
    { label:'2nd Intern (gross)',  val:(staj2Brut||0),     color:'#FFBE7A' },
    { label:'Electricity/Water',   val:elektrik,           color:'#1D9E75' },
    { label:'Internet/Phone',      val:internet,           color:'#888780' },
    { label:'Consumables',         val:(sarf||0),          color:'#D4537E' },
    { label:'Kitchen',             val:(mutfak||0),        color:'#BA7517' },
    { label:'General Expenses',    val:(genelGider||0),    color:'#9F8ECC' },
    { label:'CPA / Financial Adv.',val:(ymmM||0),          color:'#8B5A2B' },
  ].filter(d=>d.val>0);

  const total = items.reduce((s,d)=>s+d.val,0);

  if (sabitPieInst) { sabitPieInst.destroy(); sabitPieInst = null; }
  sabitPieInst = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: items.map(d => d.label),
      datasets: [{
        data: items.map(d => d.val),
        backgroundColor: items.map(d => d.color),
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '52%',
      plugins: {
        legend: {
          position: 'right',
          labels: { font: { size: 11 }, boxWidth: 12, padding: 8,
            generateLabels: function(chart) {
              return chart.data.labels.map((lbl, i) => ({
                text: lbl + '  €' + Math.round(items[i].val/(V.eurKur ?? 50)/1000) + 'K  (' + Math.round(items[i].val/total*100) + '%)',
                fillStyle: items[i].color,
                strokeStyle: '#fff',
                lineWidth: 1,
                index: i,
                hidden: false,
              }));
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              const v = ctx.parsed;
              return ' €' + Math.round(v/(V.eurKur ?? 50)).toLocaleString('en-US') + '  (' + Math.round(v/total*100) + '%)';
            }
          }
        },
        datalabels: {
          display: function(ctx) {
            const v = ctx.dataset.data[ctx.dataIndex];
            return Math.round(v / total * 100) >= 5;
          },
          formatter: function(value) {
            return '%' + Math.round(value / total * 100);
          },
          color: '#fff',
          font: { size: 11, weight: '700' },
          textShadowBlur: 4,
          textShadowColor: 'rgba(0,0,0,0.4)',
        }
      }
    }
  });
}


// ── TABLO GRAFİĞİ ─────────────────────────────────────────────────────────────
let tblChartInst = null;
let tblTab = 'gelir';

function setTblTab(tab, btn) {
  tblTab = tab;
  document.querySelectorAll('.tct').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (window._lastYearly) renderTblChart();
}

// 5-year version (Year 1-5, €K) of the Summary page's Revenue&Cost/Cost
// Distribution/Cumulative chart — was Year-1-only monthly detail; see the
// window._lastYearly comment in buildProjection() for what each series means
// and why (Istanbul-only Gross/Opex bars, full-consolidated Net line, cost-
// by-center distribution instead of cost-by-category since categories were
// never modeled past Year 1).
function renderTblChart() {
  const Y = window._lastYearly;
  if (tblChartInst) { tblChartInst.destroy(); tblChartInst = null; }
  const ctx = _origGetById('tblChart');
  if (!ctx || !Y) return;
  const labels = ['Year 1','Year 2','Year 3','Year 4','Year 5'];
  const _kumNote = document.getElementById('kumNote');
  if (_kumNote) _kumNote.style.display = 'none';
  const eurK = v => '€' + Math.round(v).toLocaleString('en-US') + 'K';

  if (tblTab === 'gelir') {
    tblChartInst = new Chart(ctx, {
      data: {
        labels,
        datasets: [
          { type:'bar', label:'Istanbul Gross Revenue', data: Y.istGross, backgroundColor:'rgba(26,122,69,0.55)', borderColor:'#1a7a45', borderWidth:1, order:2, yAxisID:'y' },
          { type:'bar', label:'Istanbul Opex', data: Y.istOpex, backgroundColor:'rgba(192,57,43,0.55)', borderColor:'#c0392b', borderWidth:1, order:2, yAxisID:'y' },
          { type:'line', label:'Consolidated Net (All Centers)', data: Y.consolidatedNet, borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.07)', borderWidth:2.5, pointRadius:4, pointBackgroundColor: Y.consolidatedNet.map(v=>v>=0?'#1a7a45':'#c0392b'), tension:0.3, fill:false, order:1, yAxisID:'y' },
        ]
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        plugins: {
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
          tooltip:{ mode:'index', callbacks:{ label: c => c.dataset.label+': '+eurK(c.raw) } }
        },
        scales: {
          x:{ grid:{display:false} },
          y:{ ticks:{ callback: v=>eurK(v) }, grid:{color:'rgba(0,0,0,0.05)'} }
        }
      }
    });

  } else if (tblTab === 'dagılım') {
    const sets = [
      { label:'Istanbul Opex',  data: Y.entityCost.istanbul,  color:'#534AB7' },
      { label:'Izmir Cost',     data: Y.entityCost.izmir,     color:'#1D9E75' },
      { label:'Ankara Cost',    data: Y.entityCost.ankara,    color:'#E8963C' },
      { label:'Bursa Cost',     data: Y.entityCost.bursa,     color:'#c94f2a' },
      { label:'Gaziantep Cost', data: Y.entityCost.gaziantep, color:'#8a6d1a' },
    ];
    tblChartInst = new Chart(ctx, {
      type:'bar',
      data:{ labels, datasets: sets.map(s=>({ label:s.label, data:s.data, backgroundColor:s.color, borderWidth:0, stack:'g' })) },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:8 } },
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': '+eurK(c.raw) } }
        },
        scales:{
          x:{ stacked:true, grid:{display:false} },
          y:{ stacked:true, ticks:{ callback: v=>eurK(v) }, grid:{color:'rgba(0,0,0,0.05)'} }
        }
      }
    });

  } else { // kumulatif
    const basabasYr = Y.consolidatedNet.findIndex(v=>v>=0);
    const pozIdx     = Y.cum.findIndex(v=>v>=0);
    if (_kumNote) {
      _kumNote.style.display = '';
      let kumNoteText, kumNoteColor;
      if (pozIdx >= 0) {
        kumNoteText = 'Cumulative positive reached at Year ' + (pozIdx+1);
        kumNoteColor = '#534AB7';
        _kumNote.style.background = '#f4f3ff';
      } else {
        kumNoteText = 'Cumulative positive not reached within the 5-year model';
        kumNoteColor = '#c0392b';
        _kumNote.style.background = '#fff5f5';
      }
      _kumNote.textContent = kumNoteText;
      _kumNote.style.color = kumNoteColor;
      _kumNote.style.borderLeftColor = kumNoteColor;
    }
    tblChartInst = new Chart(ctx, {
      data:{
        labels,
        datasets:[
          { type:'bar',  label:'Annual Net (All Centers)', data: Y.consolidatedNet,
            backgroundColor: Y.consolidatedNet.map(v=>v>=0?'rgba(26,122,69,0.6)':'rgba(192,57,43,0.5)'),
            borderColor:     Y.consolidatedNet.map(v=>v>=0?'#1a7a45':'#c0392b'), borderWidth:1, yAxisID:'y', order:2 },
          { type:'line', label:'Cumulative (€K)', data: Y.cum,
            borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.08)', borderWidth:2.5,
            pointRadius: Y.cum.map((v,i) => i===basabasYr||i===pozIdx ? 7 : 3),
            pointBackgroundColor: Y.cum.map(v=>v>=0?'#1a7a45':'#c0392b'),
            tension:0.3, fill:true, yAxisID:'y2', order:1 }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': '+eurK(c.raw) } },
          annotation: {}
        },
        scales:{
          x:{ grid:{display:false} },
          y:{ position:'left', ticks:{ callback: v=>eurK(v) }, grid:{color:'rgba(0,0,0,0.05)'}, title:{display:true,text:'Annual Net (€K)',font:{size:10}} },
          y2:{ position:'right', ticks:{ callback: v=>eurK(v) }, grid:{display:false}, title:{display:true,text:'Cumulative (€K)',font:{size:10}} }
        }
      }
    });
  }
}

function renderRamp() {
  if (window._redrawRamp) window._redrawRamp();
}

function renderMain(rows) {
  if(mChart) mChart.destroy();
  const nv=rows.map(r=>Math.round(r.net/1000));
  const cv=rows.map(r=>Math.round(r.cumBudget/1000));
  const ctxMain=_origGetById('mainChart'); if(!ctxMain) return; const ctx=ctxMain.getContext('2d');
  mChart=new Chart(ctx,{
    data:{
      labels:rows.map(r=>'Month '+r.ay),
      datasets:[
        { type:'bar', label:'Monthly Net (€K)', data:nv, backgroundColor:nv.map(v=>v>=0?'rgba(26,122,69,0.7)':'rgba(192,57,43,0.7)'), borderColor:nv.map(v=>v>=0?'#1a7a45':'#c0392b'), borderWidth:1, yAxisID:'y', borderRadius:3 },
        { type:'line', label:'Cumulative (€K)', data:cv, borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.07)', borderWidth:2, pointRadius:4, pointBackgroundColor:cv.map(v=>v>=0?'#1a7a45':'#c0392b'), tension:0.3, fill:true, yAxisID:'y2' }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur ?? 50)).toLocaleString('en-US')+'K'}} },
      scales:{ y:{position:'left',title:{display:true,text:'Monthly Net (€K)'},grid:{color:'rgba(0,0,0,0.05)'}}, y2:{position:'right',title:{display:true,text:'Cumulative (€K)'},grid:{display:false}} }
    }
  });
}

// alias: ürün mix sayfasındaki korse fiyatı/malzeme sliderlarını ana V ile senkronize eder
function svAlias(vKey, slId1, slId2, val) {
  val = parseFloat(val);
  V[vKey] = val;
  const el1 = document.getElementById(vKey);      if(el1) el1.textContent = numFmt(vKey, val);
  const el2 = document.getElementById(slId2.replace('s_',''));  // span id
  if(el2) el2.textContent = val.toLocaleString('tr-TR');
  const s1 = document.getElementById(slId1);      if(s1) s1.value = val;
  const s2 = document.getElementById('s_'+slId2); if(s2) s2.value = val;
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function svAliasBlur(vKey, slId1, spanId, el) {
  const raw = (el.textContent||'').replace(/\./g,'').replace(',','.');
  const val = parseFloat(raw);
  if(!isNaN(val)) {
    V[vKey] = val;
    const s1 = document.getElementById(slId1); if(s1) s1.value = val;
    const mainEl = document.getElementById(vKey); if(mainEl) mainEl.textContent = numFmt(vKey, val);
  } else { el.textContent = V[vKey].toLocaleString('tr-TR'); }
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}


// ── PAZAR PAYI & MIX CHARTS ──────────────────────────────────────────────────
let pazarChartInst = null, mixChartInst = null, mixB2BChartInst = null;

// ── Market build-up (MKT-A4) — bottom-up cross-check of pazarTR ────────────
// Paediatric market = birth cohort × braceable share × braces per treatment
// course × (1 + other paediatric indications: juvenile / neuromuscular /
// Scheuermann). Shown next to pazarTR; it never overwrites it — pazarTR stays
// an independent input. A >10% gap is flagged.
// Istanbul-share presets (MKT-C7): named points on the live pazarIstPct slider.
// Royalty scenario presets (FU-2) — named points on the live royaltyEur slider.
function setRoyalty(v) {
  sv('royaltyEur', v);
  const sl = document.getElementById('s_royaltyEur'); if (sl) sl.value = v;
}
function setIstShare(v) {
  sv('pazarIstPct', v);
  const sl = document.getElementById('s_pazarIstPct'); if (sl) sl.value = v;
}
// ── Upside segments (MKT-B5/B6) — excluded from the base by default ─────────
// Each is its own national market (braces/yr), its own SKU price (default =
// the standard SKU list price) and its own referral channel (spine surgeons /
// trauma / physiatrists) — never merged into the paediatric line. When ON, a
// centre's segment volume = segment market × the centre's city share × the
// centre's target share × the centre's own penetration path (its paediatric
// braces ÷ its paediatric target, year by year). Contribution per brace =
// price × (1 − standard-SKU referral-fee %) − standard material − royalty;
// incremental rooms/staff are NOT modelled, so treat it as an upper bound.
// The base totals, FCF, DCF and investor return never include it; it only
// is included in every total when switched on (UP-1).
function upsideSegments() {
  return [
    { key:'adult',    label:'Adult / degenerative',            low:1000, base:2500, high:5000, min:1000, max:5000,
      src:'65+ population 9.1M (TÜİK 2024); Schwab et al., Spine 2005' },
    { key:'postop',   label:'Post-op TLSO after spinal fusion', low:1000, base:2000, high:5000, min:1000, max:5000,
      src:'Surgeon-dependent; Turkish fusion count not yet sourced' },
    { key:'fracture', label:'Fracture TLSO (traumatic + osteoporotic)', low:500, base:1700, high:3900, min:500, max:3900,
      src:'Thoracolumbar fractures ~30/100,000/yr (Zileli et al., Neurospine 2021) × conservative share × braced share × custom share' },
  ].map(s => Object.assign(s, { aktif: V[s.key + 'Aktif'] === true, vol: gv(s.key + 'BraceYil'), price: gv(s.key + 'Fiyat') }));
}
function svToggle(key, checked) {
  V[key] = !!checked;
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function renderUpsideSummary() {
  const el = document.getElementById('upsideSummary');
  if (!el) return;
  const segs = upsideSegments();
  const act = segs.filter(s => s.aktif);
  const incl = gv('pazarTR') + act.reduce((a, s) => a + s.vol, 0);
  const U = window._lastProjRows && window._lastProjRows.upside;
  el.innerHTML = 'National market — base (pazarTR, paediatric): <b>' + gv('pazarTR').toLocaleString('en-US') + '</b> braces/yr · '
    + (act.length ? 'Total incl. active upside (' + act.map(s => s.label).join(', ') + '): <b>' + incl.toLocaleString('en-US') + '</b> braces/yr'
                  + (U ? ' · Osteoid upside volume Y5 ' + U.totalBraces[4].toLocaleString('en-US') + ' braces, net contribution Y5 €' + U.totalContribK[4].toLocaleString('en-US') + 'K — <b>included in every total</b> (revenue, EBITDA, FCF, funding need, KPIs; the extra fittings load capacity)' : '')
                  : 'No upside segment is switched on — every figure in the dashboard is the paediatric case only.');
  segs.forEach(s => {
    const cb = document.getElementById(s.key + 'AktifToggle'); if (cb) cb.checked = s.aktif;
  });
}
// ── BUSINESS CASE (BC-3) — "is this a good business?" ─────────────────────
// Pure read of the live model (_lastProjRows, _lastFcf, metricLadder('100'),
// the Year-1 monthly rows, buildOutPlan) — nothing here is typed or re-modelled.
// Per-centre monthly cash: Year 1 from the monthly engine (Istanbul clinic +
// the B2B line printed there); Years 2-5 spread evenly over the months each
// centre is open that year (annual model). Pre-tax cash per centre = EBITDA −
// expensed capex; tax is network-level (25% CIT with loss carryforward).
//   payback      = months from opening until cumulative cash ≥ setup capex
//                  (opening losses included in the cumulative)
//   break-even   = first month from opening with a non-negative monthly result
//   return on setup capital = Year-3 EBITDA ÷ setup capex
//   peak funding need = lowest point of the network's cumulative cash, monthly
//                  — purely operational: setup capex in each opening month,
//                  opening losses, tax and working capital spread over each
//                  year; year-ends tie to the FCF.
function computeBusinessCase() {
  const HZ = window._lastHorizon, f = window._lastFcf;
  const rows = window._lastRows || [], rowsB = window._lastRowsB2B || [];
  if (!HZ || !f) return null;
  const kur = V.eurKur ?? 50, N = HZ.n, H = 12 * N;
  const plan = f.plan, pc = key => plan.centres.find(c => c.key === key) || {};
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const mk = (key, label, aktif, openMonth, setupK, extra) => Object.assign({ key, label, aktif, openMonth, setupK,
    braces: HZ.centres[key].braces, rev: HZ.centres[key].rev, ebitda: HZ.centres[key].ebitda, op: HZ.centres[key].op, mature: HZ.mature[key] }, extra || {});
  const centres = [
    mk('istanbul', 'Istanbul', true, 1, (pc('istanbul').totalEur || 0) / 1000),
    mk('b2b', 'B2B (national line, printed in Istanbul)', true, 1, 0, { inIstanbul: true }),
  ].concat(['izmir', 'ankara', 'bursa', 'gaziantep'].map(s => mk(s, cap(s), !!V[s + 'Aktif'], _satOpenMonth(s), pc(s).aktif ? pc(s).totalEur / 1000 : 0)));
  const act = (c, i) => Math.max(0, Math.min(12, 12 * (i + 1) - c.openMonth + 1)); // months open in year i
  centres.forEach(c => {
    c.monthly = new Array(H).fill(0);
    if (!c.aktif) return;
    for (let m = 1; m <= H; m++) {
      const i = Math.ceil(m / 12) - 1;
      if (m < c.openMonth) continue;
      if (i === 0 && c.key === 'istanbul') c.monthly[m - 1] = ((rows[m - 1] || {}).net || 0) / kur / 1000;
      else if (i === 0 && c.key === 'b2b') c.monthly[m - 1] = ((rowsB[m - 1] || {}).gelirNet || 0) / kur / 1000;
      else { const a = act(c, i); c.monthly[m - 1] = a > 0 ? (c.op[i] || 0) / a : 0; }
    }
    c.margin = c.ebitda.map((e, i) => c.rev[i] > 0 ? e / c.rev[i] * 100 : null);
  });
  // Payback / break-even per site: Istanbul carries the B2B line (same printers, same setup).
  const ist = centres[0], b2b = centres[1];
  const site = c => c.key === 'istanbul' ? ist.monthly.map((v, j) => v + b2b.monthly[j]) : c.monthly;
  centres.forEach(c => {
    if (!c.aktif || c.inIstanbul) return;
    const mo = site(c);
    let cum = -c.setupK, pay = null, be = null, trough = cum;
    for (let m = c.openMonth; m <= H; m++) {
      cum += mo[m - 1]; trough = Math.min(trough, cum);
      if (be === null && mo[m - 1] >= 0) be = m;
      if (pay === null && cum >= 0) pay = m;
    }
    c.breakEvenMonth = be; c.paybackMonth = pay;
    c.paybackMonths = pay ? pay - c.openMonth + 1 : null;
    c.cumAtY5 = cum; c.cumAtEnd = cum; c.troughK = trough; // lowest cumulative = setup + opening losses
    c.rosc = c.setupK > 0 ? (c.ebitda[2] || 0) / c.setupK * 100 : null;
  });
  // Network monthly cash → peak funding need (purely operational)
  let cum = 0, low = 0, lowMonth = 1;
  const cumMonthly = [];
  for (let m = 1; m <= H; m++) {
    const i = Math.ceil(m / 12) - 1;
    centres.forEach(c => { if (c.aktif && c.openMonth === m) cum -= c.setupK; });
    cum += centres.reduce((a, c) => a + c.monthly[m - 1], 0) - (HZ.tot.tax[i] || 0) / 12 + (HZ.tot.wc[i] || 0) / 12;
    cumMonthly.push(cum);
    if (cum < low) { low = cum; lowMonth = m; }
  }
  const tot = { braces: HZ.tot.braces.slice(), rev: HZ.tot.rev.slice(), ebitda: HZ.tot.ebitda.slice() };
  tot.margin = tot.ebitda.map((e, i) => tot.rev[i] > 0 ? e / tot.rev[i] * 100 : null);
  const matureNet = centres.filter(c => c.aktif).reduce((a, c) => a + (c.mature ? c.mature.ebitda : 0), 0);
  return { n: N, centres, tot, sgkBraces: HZ.sgkBraces, sgkOn: V.sgkAktif === true, upBraces: HZ.upBraces,
           unit: window._lastUnitEcon, fcf: HZ.tot.fcf.slice(), cumFcf: HZ.tot.cum.slice(), taxK: HZ.tot.tax.slice(), capexK: HZ.tot.capex.slice(),
           setupOutK: HZ.tot.setup.slice(), wcK: HZ.tot.wc.slice(), matureEbitdaK: matureNet,
           cumMonthly, peakNeedK: -low, peakNeedMonth: lowMonth, totalSetupK: plan.totalSetupEur / 1000,
           yearEndCheck: [...Array(N).keys()].map(i => Math.round(cumMonthly[12 * i + 11] - HZ.tot.cum[i])) };
}
function _ym(m) { const y = Math.ceil(m / 12); return 'Year ' + y + ' Month ' + (m - (y - 1) * 12); }
// Per-centre table (braces, revenue, EBITDA, margin: Years 1–N + mature year) —
// the same renderer on the Summary and the Multi-Year Plan (CM-3).
function centreTableHtml(B) {
  const kK = v => v === null || v === undefined ? '—' : (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const n = v => Math.round(v || 0).toLocaleString('en-US');
  const pct = v => v === null || v === undefined ? '—' : Math.round(v) + '%';
  const R = 'style="text-align:right;"', RM = 'style="text-align:right;background:#f4f3ff;"';
  const yrs = [...Array(B.n).keys()].map(i => '<th ' + R + '>Y' + (i + 1) + '</th>').join('') + '<th ' + RM + '>Mature year</th>';
  const row = (lbl, arr, fmt, mat, st) => '<tr' + (st ? ' style="' + st + '"' : '') + '><td style="text-align:left;">' + lbl + '</td>' + arr.map(v => '<td ' + R + '>' + fmt(v) + '</td>').join('') + '<td ' + RM + '>' + (mat === undefined ? '' : fmt(mat)) + '</td></tr>';
  const grp = t => '<tr><td colspan="' + (B.n + 2) + '" style="text-align:left;font-size:10px;font-weight:700;color:#555;background:#f0efe9;text-transform:uppercase;letter-spacing:0.3px;">' + t + '</td></tr>';
  const C = B.centres.filter(c => c.aktif), M = c => c.mature || {};
  const sumM = k => C.reduce((a, c) => a + (M(c)[k] || 0), 0);
  let h = '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">By centre (€K)</th>' + yrs + '</tr></thead><tbody>';
  h += grp('Braces per year');
  C.forEach(c => { h += row(c.label, c.braces, n, M(c).privBraces); });
  if (B.sgkOn) h += row('SGK extra braces (all centres, upside line)', B.sgkBraces, n, sumM('sgkBraces'), 'color:#185FA5;');
  if (B.upBraces.some(v => v)) h += row('Upside segments — adult / post-op / fracture (all centres)', B.upBraces, n, sumM('upBraces'), 'color:#8a6d1a;');
  h += row('<b>Total</b>', B.tot.braces, v => '<b>' + n(v) + '</b>', sumM('braces'));
  h += grp('Revenue (list price × braces' + (B.sgkOn ? '; SGK inside each centre' : '') + ')');
  C.forEach(c => { h += row(c.label, c.rev, kK, M(c).rev); });
  h += row('<b>Total</b>', B.tot.rev, v => '<b>' + kK(v) + '</b>', sumM('rev'));
  h += grp('EBITDA');
  C.forEach(c => { h += row(c.label, c.ebitda, kK, M(c).ebitda); });
  h += row('<b>Total</b>', B.tot.ebitda, v => '<b>' + kK(v) + '</b>', sumM('ebitda'));
  h += grp('EBITDA margin');
  C.forEach(c => { h += row(c.label, c.margin, pct, M(c).margin); });
  h += row('<b>Total</b>', B.tot.margin, v => '<b>' + pct(v) + '</b>', sumM('rev') > 0 ? sumM('ebitda') / sumM('rev') * 100 : null);
  h += '</tbody></table></div><div style="font-size:10px;color:#888;margin-top:4px;"><b>Mature year</b> = each centre in steady state: volume at its target share (Istanbul at its effective share with the satellites open), full staffing and capacity, SGK per its toggle, upside segments if switched on, head-office add-on allocated by revenue share across the fully open network — not a calendar year. ' + (B.n > 5 ? 'Years 6–' + B.n + ' continue each centre on its own ramp on the Year-5 price, mix and cost basis (no further inflation step-ups or new openings).' : '') + ' ⚠ Scenario outputs, not forecasts.</div>';
  return h;
}
function renderBusinessCase() {
  const B = window._lastBusinessCase;
  const g = _origGetById('cmCentreTbl');
  if (g && B) g.innerHTML = centreTableHtml(B);
  const el = document.getElementById('bcKpis');
  if (!el || !B) return;
  const kK = v => v === null || v === undefined ? '—' : (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const kE = v => (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US');
  const n = v => Math.round(v || 0).toLocaleString('en-US');
  const pct = v => v === null || v === undefined ? '—' : Math.round(v) + '%';
  const tdR = 'style="text-align:right;"';
  const N = B.n, last = N - 1;
  const yrs = [...Array(N).keys()].map(i => '<th ' + tdR + '>Y' + (i + 1) + '</th>').join('');
  const row = (lbl, arr, fmt, st) => '<tr' + (st ? ' style="' + st + '"' : '') + '><td style="text-align:left;">' + lbl + '</td>' + arr.map(v => '<td ' + tdR + '>' + fmt(v) + '</td>').join('') + '</tr>';
  const C = B.centres.filter(c => c.aktif);
  const y5 = 4, tile = (lbl, val, sub, col) => '<div style="border:1px solid #e0e0dc;border-radius:6px;padding:10px 12px;background:#fff;"><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">' + lbl + '</div><div style="font-size:18px;font-weight:700;color:' + (col || '#333') + ';">' + val + '</div>' + (sub ? '<div style="font-size:10px;color:#888;margin-top:2px;">' + sub + '</div>' : '') + '</div>';
  let h = '<div style="font-size:11px;color:#555;margin-bottom:8px;">Horizon: <b>' + N + ' years</b> (toggle on the Multi-Year Plan) · plan: ' + C.map(c => c.label.split(' (')[0]).join(', ') + '</div>'
    + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-bottom:16px;">'
    + tile('Year-5 revenue', kK(B.tot.rev[y5]), n(B.tot.braces[y5]) + ' braces incl. B2B' + (B.sgkOn ? ' and SGK' : ''))
    + tile('Year-5 EBITDA', kK(B.tot.ebitda[y5]), 'margin ' + pct(B.tot.margin[y5]), B.tot.ebitda[y5] >= 0 ? '#1a7a45' : '#c0392b')
    + tile('Mature-year EBITDA', kK(B.matureEbitdaK), 'every open centre in steady state', B.matureEbitdaK >= 0 ? '#1a7a45' : '#c0392b')
    + tile('Cumulative FCF, Years 1–' + N, kK(B.cumFcf[last]), 'after tax, setup capex and working capital', B.cumFcf[last] >= 0 ? '#1a7a45' : '#c0392b')
    + tile('Peak funding need', kK(B.peakNeedK), 'lowest cumulative cash, ' + _ym(B.peakNeedMonth), '#c94f2a')
    + tile('Setup capex, all centres', kK(B.totalSetupK), 'fit-out + equipment + pre-opening')
    + '</div>';
  h += centreTableHtml(B);
  // Unit economics per brace
  const U = B.unit;
  if (U) {
    const cols = [['Clinic private — Year 1 actual', U.privY1], ['Clinic private — Year 5 (' + Math.round(U.premY5Pct) + '% upgrade take-rate)', U.privY5], ['B2B', U.b2b]];
    if (U.sgk.on) cols.push(['SGK (upside line)', U.sgk]);
    ((window._lastProjRows && window._lastProjRows.upside && window._lastProjRows.upside.segments) || []).filter(s => s.aktif).forEach(s => {
      cols.push([s.label.split(' (')[0] + ' (upside)', { gross: s.unit.gross, fee: s.unit.sci + s.unit.edu + s.unit.lib, mat: s.unit.mat, roy: s.unit.roy, net: s.unit.net }]);
    });
    const ur = (lbl, key, sign, b) => '<tr' + (b ? ' style="font-weight:700;"' : '') + '><td style="text-align:left;">' + lbl + '</td>' + cols.map(c => '<td ' + tdR + '>' + kE((sign || 1) * c[1][key]) + '</td>').join('') + '</tr>';
    h += '<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin:16px 0 6px;">Unit economics per brace (€)</div>'
      + '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">€ per brace</th>' + cols.map(c => '<th ' + tdR + '>' + c[0] + '</th>').join('') + '</tr></thead><tbody>'
      + ur('Price', 'gross') + ur('− Channel fee (doctor)', 'fee', -1) + ur('− Material / print (incl. cutting)', 'mat', -1) + ur('− Royalty (intercompany to Osteoid A.Ş.)', 'roy', -1)
      + ur('= Net contribution', 'net', 1, true)
      + '<tr><td style="text-align:left;">Net contribution, % of price</td>' + cols.map(c => '<td ' + tdR + '>' + pct(c[1].gross > 0 ? c[1].net / c[1].gross * 100 : null) + '</td>').join('') + '</tr>'
      + '</tbody></table></div>'
      + (U.sgk.on ? '' : '<div style="font-size:10px;color:#888;margin-top:4px;">SGK channel is off (default — private channel first); switch it on on the Multi-Year Plan to add its column and volume.</div>');
  }
  // Setup capex, break-even, payback, maturity
  const yr = v => v === null || v === undefined || !isFinite(v) ? '—' : v.toFixed(1) + ' yrs';
  h += '<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin:16px 0 6px;">Setup capex, payback and maturity by centre</div>'
    + '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">Centre</th><th ' + tdR + '>Setup capex</th><th ' + tdR + '>Opens</th><th ' + tdR + '>Operating break-even</th><th ' + tdR + '>Deepest cumulative cash</th><th ' + tdR + '>Payback (months from opening)</th><th ' + tdR + '>Return on setup capital (Y3 EBITDA ÷ setup)</th><th ' + tdR + '>Mature-year EBITDA</th><th ' + tdR + '>Payback at maturity (setup ÷ mature EBITDA)</th><th ' + tdR + '>Years to maturity (from opening)</th></tr></thead><tbody>';
  C.forEach(c => {
    const M = c.mature || {};
    if (c.inIstanbul) { h += '<tr><td style="text-align:left;">' + c.label + '</td><td colspan="6" style="text-align:left;color:#888;font-size:11px;">No own setup — printed on the Istanbul printers; included in the Istanbul break-even and payback.</td><td ' + tdR + '>' + kK(M.ebitda) + '</td><td ' + tdR + '>—</td><td ' + tdR + '>' + (M.yearsToMaturity || '—') + '</td></tr>'; return; }
    h += '<tr><td style="text-align:left;">' + c.label + (c.key === 'istanbul' ? ' <span style="font-size:10px;color:#888;">(clinic + B2B line)</span>' : '') + '</td>'
      + '<td ' + tdR + '>' + kK(c.setupK) + '</td><td ' + tdR + '>' + _ym(c.openMonth) + '</td>'
      + '<td ' + tdR + '>' + (c.breakEvenMonth ? _ym(c.breakEvenMonth) + ' (month ' + (c.breakEvenMonth - c.openMonth + 1) + ')' : 'not within Year ' + N) + '</td>'
      + '<td ' + tdR + '>' + kK(c.troughK) + '</td>'
      + '<td ' + tdR + '><b>' + (c.paybackMonths ? c.paybackMonths + ' months</b> · ' + _ym(c.paybackMonth) : 'not within Year ' + N + '</b> (cumulative ' + kK(c.cumAtEnd) + ' at Year ' + N + ')') + '</td>'
      + '<td ' + tdR + '>' + pct(c.rosc) + '</td>'
      + '<td ' + tdR + '>' + kK(M.ebitda) + '</td><td ' + tdR + '>' + (M.ebitda > 0 ? yr(M.paybackYears) : 'never (EBITDA ≤ 0)') + '</td><td ' + tdR + '>' + (M.yearsToMaturity ? M.yearsToMaturity + ' (Year ' + M.maturityYear + ')' : '—') + '</td></tr>';
  });
  h += '</tbody></table></div>'
    + '<div style="font-size:10px;color:#888;margin-top:4px;">Payback: cumulative pre-tax cash from opening (EBITDA − expensed capex, opening losses included) reaches the setup capex (fit-out + equipment + pre-opening). Year 1 is monthly (monthly engine); later years spread each annual result evenly over the months the centre is open. <b>Payback at maturity</b> = setup capex ÷ mature-year EBITDA (simple years, pre-tax). ' + (V.bursaAktif || V.gaziantepAktif ? 'Bursa/Gaziantep open in Year 3, so their Year-3 EBITDA is a part year. ' : '') + '⚠ Scenario output, not a forecast.</div>';
  // Cash
  h += '<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin:16px 0 6px;">Cash — whole network (€K)</div>'
    + '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">€K</th>' + yrs + '</tr></thead><tbody>'
    + row('EBITDA', B.tot.ebitda, kK)
    + row('− Corporate tax (25%, loss carryforward)', B.taxK.map(v => -v), kK)
    + row('− Capex expensed in opex (printers, branch fit-out)', B.capexK.map(v => -v), kK)
    + row('− Setup capex (each centre in its opening year)', B.setupOutK.map(v => -v), kK)
    + row('± Working capital (SGK receivables)', B.wcK, kK)
    + row('<b>= Free cash flow</b>', B.fcf, v => '<b>' + kK(v) + '</b>')
    + row('<b>Cumulative FCF</b>', B.cumFcf, v => '<b>' + kK(v) + '</b>')
    + '</tbody></table></div>'
    + '<div style="font-size:10px;color:#888;margin-top:4px;"><b>Peak funding need ' + kK(B.peakNeedK) + '</b> — the lowest point of cumulative cash (' + _ym(B.peakNeedMonth) + '), on a monthly path that is purely operational: setup capex in each opening month, opening losses, tax and working capital spread over each year; the path ties to the year-end cumulative FCF above. It is the cash the network needs before it funds itself — how it is financed is not part of this business case.</div>';
  el.innerHTML = h;
}

// ── PHASE 2 / PHASE 3 OPTIONS (FIN-3, P2-1) — Summary and Multi-Year Plan ──
// Phase 2 = Gaziantep (V.phase2Aktif), Phase 3 = Bursa (V.phase3Aktif). Live
// scenario runs (guarded like the sensitivity tables, committed state restored
// afterwards) give each phase block the centre's own setup / EBITDA / payback /
// mature year and its effect on the network at both horizons.
function svHorizon(n) {
  V.horizonYears = +n === 7 ? 7 : 5;
  recalc();
  if (typeof buildProjection === 'function') buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshHorizonUi() {
  document.querySelectorAll('.horizonBtn').forEach(b => {
    const on = +b.dataset.h === (V.horizonYears === 7 ? 7 : 5);
    b.style.background = on ? '#534AB7' : '#fff'; b.style.color = on ? '#fff' : '#534AB7';
  });
}
function svPhase2(checked) { _svPhase('phase2Aktif', 'gaziantep', checked); }
function svPhase3(checked) { _svPhase('phase3Aktif', 'bursa', checked); }
function _svPhase(key, s, checked) {
  V[key] = !!checked;
  if (V[s + 'Aktif'] && _origGetById(s + 'RampaChartCanvas')) initMerkezRampa(s);
  recalc();
  if (typeof buildProjection === 'function') buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshPhase2Ui() {
  _refreshHorizonUi();
  const on = { gaziantep: V.phase2Aktif === true, bursa: V.phase3Aktif === true };
  document.querySelectorAll('.phase2Toggle').forEach(cb => { cb.checked = on.gaziantep; });
  document.querySelectorAll('.phase3Toggle').forEach(cb => { cb.checked = on.bursa; });
  ['bursa', 'gaziantep'].forEach(s => {
    const cb = _origGetById(s + 'Toggle');
    if (cb) { cb.checked = !!V[s + 'Aktif']; cb.disabled = !on[s]; }
    ['RampaWrap', 'HedefWrap'].forEach(w => { const e = _origGetById(s + w); if (e) e.style.display = V[s + 'Aktif'] ? '' : 'none'; });
  });
  const n = _origGetById('phase2CardNote');
  if (n) {
    const off = [!on.gaziantep ? 'Phase 2 (Gaziantep)' : null, !on.bursa ? 'Phase 3 (Bursa)' : null].filter(Boolean);
    n.style.display = off.length ? '' : 'none';
    n.textContent = off.join(' and ') + (off.length > 1 ? ' are off — the centre toggles below take' : ' is off — the centre toggle below takes') + ' effect once the phase is switched on above.';
  }
}
function _p2Snap() {
  const B = window._lastBusinessCase;
  if (!B) return null;
  const pick = k => { const c = B.centres.find(x => x.key === k); return c && c.aktif ? { setupK: c.setupK, open: c.openMonth, ebitda: c.ebitda.slice(), pay: c.paybackMonths, payM: c.paybackMonth, cumEnd: c.cumAtEnd, rosc: c.rosc, mature: c.mature } : null; };
  return { rev5: B.tot.rev[4], e5: B.tot.ebitda[4], mat: B.matureEbitdaK, cum5: B.cumFcf[4], cum7: B.n >= 7 ? B.cumFcf[6] : null, n: B.n, peak: B.peakNeedK, setup: B.totalSetupK, bursa: pick('bursa'), gaziantep: pick('gaziantep') };
}
// Three full model runs at a 7-year horizon — core; core + Phase 2 (Gaziantep);
// core + Phase 2 + Phase 3 (Bursa) — give every block both horizons at once:
// Years 1-5 of a 7-year run are identical to the 5-year run. Each block shows
// the centre's own setup / EBITDA / payback / mature year and its effect on
// the network = whole network with it minus without it (head-office add-on
// step, Istanbul's share reduction for the region, capacity and tax
// included). Phase 3 is measured on top of Phase 2.
function renderPhase2Option() {
  _refreshPhase2Ui();
  const IDS = { 2: ['phase2Opt', 'phase2OptG'], 3: ['phase3Opt', 'phase3OptG'] };
  const els = n => IDS[n].map(id => _origGetById(id)).filter(Boolean);
  if ((!els(2).length && !els(3).length) || window._inScenario) return;
  const st = { p2: V.phase2Aktif === true, p3: V.phase3Aktif === true, hz: V.horizonYears };
  const S = {};
  window._inScenario = true;
  try {
    V.horizonYears = 7;
    [['core', false, false], ['p2', true, false], ['p3', true, true]].forEach(([k, a, b]) => { V.phase2Aktif = a; V.phase3Aktif = b; recalc(); S[k] = _p2Snap(); });
  } finally { V.phase2Aktif = st.p2; V.phase3Aktif = st.p3; V.horizonYears = st.hz; recalc(); window._inScenario = false; }
  _refreshPhase2Ui();
  if (!S.core || !S.p2 || !S.p3) return;
  const kK = v => v === null || v === undefined ? '—' : (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const dK = v => (v > 0 ? '+' : v < 0 ? '−' : '') + '€' + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const R = 'style="text-align:right;"';
  const cur = st.p2 && st.p3 ? 'p3' : st.p2 ? 'p2' : !st.p3 ? 'core' : 'p3only';
  const curLbl = { core: 'core plan', p2: 'core + Phase 2', p3: 'core + Phase 2 + Phase 3', p3only: 'core + Phase 3 without Phase 2' }[cur];
  const block = (n, key, name, base, withIt, baseLbl, withLbl, baseKey, withKey) => {
    const c = withIt[key];
    let h = '';
    if (!c) h += '<div style="font-size:11px;color:#888;">' + name + ' is switched off on its own toggle (Multi-Year Plan, Year 3 card) — nothing to add.</div>';
    else {
      const row = (l, v) => '<tr><td style="text-align:left;">' + l + '</td><td ' + R + '>' + v + '</td></tr>';
      const M = c.mature || {};
      h += '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">Phase ' + n + ' centre</th><th ' + R + '>' + name + '</th></tr></thead><tbody>'
        + row('Setup capex (fit-out + equipment + pre-opening)', kK(c.setupK))
        + row('Opens', _ym(c.open))
        + row('EBITDA Year 3 (part year) / Year 4 / Year 5', kK(c.ebitda[2]) + ' / ' + kK(c.ebitda[3]) + ' / ' + kK(c.ebitda[4]))
        + row('Payback from opening (7-year horizon)', c.pay ? '<b>' + c.pay + ' months</b> · ' + _ym(c.payM) : '<b>not within Year 7</b> (cumulative ' + kK(c.cumEnd) + ' at Year 7)')
        + row('<b>Mature-year EBITDA</b>', '<b>' + kK(M.ebitda) + '</b>' + (M.maturityYear ? ' (Year ' + M.maturityYear + ')' : ''))
        + row('Payback at maturity (setup ÷ mature EBITDA)', M.ebitda > 0 ? M.paybackYears.toFixed(1) + ' yrs' : 'never (EBITDA ≤ 0)')
        + row('Return on setup capital (Y3 EBITDA ÷ setup)', c.rosc === null || c.rosc === undefined ? '—' : Math.round(c.rosc) + '%')
        + '</tbody></table></div>';
    }
    const mark = k => cur === k ? ' <b>(current)</b>' : '';
    const nr = (l, a, b) => { const d = b - a; return '<tr><td style="text-align:left;">' + l + '</td><td ' + R + '>' + kK(a) + '</td><td ' + R + '>' + kK(b) + '</td><td style="text-align:right;color:' + (d >= 0 ? '#1a7a45' : '#c0392b') + ';"><b>' + dK(d) + '</b></td></tr>'; };
    h += '<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin:12px 0 6px;">Effect on the network <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#888;">(' + withLbl + ' minus ' + baseLbl.toLowerCase() + ', 5- and 7-year horizon)</span></div>'
      + '<div class="tbl-wrap"><table><thead><tr><th style="text-align:left;">Network</th><th ' + R + '>' + baseLbl + mark(baseKey) + '</th><th ' + R + '>' + withLbl + mark(withKey) + '</th><th ' + R + '>Effect of Phase ' + n + '</th></tr></thead><tbody>'
      + nr('Year-5 revenue', base.rev5, withIt.rev5) + nr('Year-5 EBITDA', base.e5, withIt.e5) + nr('Mature-year EBITDA (all open centres)', base.mat, withIt.mat)
      + nr('Cumulative FCF, Years 1–5', base.cum5, withIt.cum5) + nr('Cumulative FCF, Years 1–7', base.cum7, withIt.cum7)
      + nr('Peak funding need', base.peak, withIt.peak) + nr('Setup capex, all centres', base.setup, withIt.setup)
      + '</tbody></table></div>'
      + '<div style="font-size:10px;color:#888;margin-top:4px;">Live: full model runs (core, core + Phase 2, core + Phase 2 + Phase 3) at a 7-year horizon — Years 1–5 are identical to the 5-year run, so both horizons come from the same runs. Effect = the whole network with ' + name + ' minus the whole network without it: head-office add-on step, the reduction in Istanbul\'s share for that region, capacity and tax included — not only the centre\'s own result.' + (n === 3 ? ' Phase 3 is measured on top of Phase 2 (core + Gaziantep).' : '') + ' Current plan: <b>' + curLbl + '</b> — every total, capex, funding-need and KPI figure on the dashboard is that plan at ' + (V.horizonYears === 7 ? 7 : 5) + ' years. ⚠ Scenario outputs, not forecasts.</div>';
    return h;
  };
  els(2).forEach(el => { el.innerHTML = block(2, 'gaziantep', 'Gaziantep', S.core, S.p2, 'Core plan', 'Core + Phase 2', 'core', 'p2'); });
  els(3).forEach(el => { el.innerHTML = block(3, 'bursa', 'Bursa', S.p2, S.p3, 'Core + Phase 2', 'Core + Phase 2 + Phase 3', 'p2', 'p3'); });
}

// ── Central costs already booked (BC-5) — read live from V / the Year-1 engine.
// The head-office add-on must not repeat any of these. No separate sales-rep
// line exists: physician acquisition is the operator's role.
function hoBookedCentral() {
  const k = V.eurKur ?? 50, rows = window._lastRows || [];
  const sum = a => (a || []).reduce((s, v) => s + (+v || 0), 0);
  return [
    { label: 'Operator — business development, satellite roll-out, doctor relations (net ₺' + gv('operatorM').toLocaleString('en-US') + '/mo × SSI ' + gv('sgkCarpan') + ')', eurYr: gv('operatorM') * gv('sgkCarpan') * 12 / k },
    { label: 'CPA / financial advisor (YMM) — monthly + periodic', eurYr: (gv('ymmM') * 12 + sum((V.donemsel || {}).ymm)) / k },
    { label: 'General expenses (admin)', eurYr: gv('genelGider') * 12 / k },
    { label: 'Advertising / marketing (× multiplier ' + (V.reklamCarpan ?? 1) + ')', eurYr: sum((V.donemsel || {}).reklam) * (V.reklamCarpan ?? 1) / k },
    { label: 'Conferences, workshops &amp; other periodic (doctor relations)', eurYr: rows.reduce((s, r) => s + (r.kongre || 0), 0) / k },
  ];
}

// ── SGK line (BC-4) — its own P&L and cash effect, network total ──────────
// Reads _lastProjRows.sgk (braces, revenue, direct cost, extra capacity) and
// the cash effect set by computeFcfStream. Shown even when the toggle is off,
// as "what switching it on would add" is only known with it on — so when off
// it says so instead of printing zeros as if they were a result.
function renderSgkLine() {
  const el = document.getElementById('sgkLine');
  const S = window._lastProjRows && window._lastProjRows.sgk;
  if (!el || !S) return;
  if (!S.on) { el.innerHTML = '<div style="font-size:10px;color:#888;">SGK line is <b>off</b> (default — private channel first). Switch it on to see its braces, P&amp;L and cash effect here; every other figure in the dashboard then includes it.</div>'; return; }
  const k = v => (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const sum = a => a.reduce((s, v) => s + v, 0);
  const tr = (l, a, f, b) => '<tr' + (b ? ' style="font-weight:700;"' : '') + '><td style="text-align:left;">' + l + '</td>' + a.map(v => '<td>' + f(v) + '</td>').join('') + '<td>' + f(sum(a)) + '</td></tr>';
  const n = v => Math.round(v).toLocaleString('en-US');
  el.innerHTML = '<table class="proj-tbl" style="font-size:10px;"><thead><tr><th style="text-align:left;">SGK line (upside, network)</th><th>Y1</th><th>Y2</th><th>Y3</th><th>Y4</th><th>Y5</th><th>Σ</th></tr></thead><tbody>'
    + tr('Extra SGK braces (' + S.pct + '% of private clinic volume)', S.braces.total, n)
    + tr('Revenue (SUT ₺' + gv('sgkPrice').toLocaleString('en-US') + ' + top-up ₺' + gv('sgkTopUp').toLocaleString('en-US') + ')', S.revK, k)
    + tr('− Material &amp; royalty (no channel fee)', S.directK.map(v => -v), k)
    + tr('− Extra fitting capacity (staff, branch utilities)', S.extraOpexK.map(v => -v), k)
    + tr('= EBITDA effect', S.ebitdaK, k, true)
    + tr('− Extra printers / branch fit-out', S.extraCapexK.map(v => -v), k)
    + (S.cashK ? tr('= Pre-tax cash effect incl. receivables (' + gv('sgkDelayDays') + ' days)', S.cashK, k, true) : '')
    + '</tbody></table>';
}

// ── Named supply (MKT-E13..E17) — one source for both competitor pages ─────
// Volumes live in V ({id}_KorseK clinic, {id}_KorseB B2B). Özgür's centre
// (Aktif Ortez Protez) is an Osteoid PARTNER, not a competitor: it is in the
// named-supply total but never in competitor totals or the competitor average
// price. Named supply = the five competitors + the partner centre — current
// producers; Osteoid's own planned volume is shown separately (part of the
// partner's volume is already Osteoid-supplied, so adding Osteoid B2B on top
// would double count).
function namedSupplyRows() {
  const EST = 'Model estimate, to be verified';
  return [
    { id:'hedefSpine',    partner:false, src:'Operator estimate, cross-validated by competitors, Skolyoz Babanne and ISST Schroth instructors' },
    { id:'bilimOrtopedi', partner:false, src:EST },
    { id:'nesaOrtopedi',  partner:false, src:EST },
    { id:'canErdem',      partner:false, src:EST },
    { id:'proklinik',     partner:false, src:EST },
    { id:'aktifOrtez',    partner:true,  src:'Osteoid partner centre (60–100 braces a month); ~half of volume now supplied by Osteoid' },
  ].map(r => Object.assign(r, { k: gv(r.id + '_KorseK'), b: gv(r.id + '_KorseB'), fk: gv(r.id + '_FiyatK'), total: gv(r.id + '_KorseK') + gv(r.id + '_KorseB') }));
}
function namedSupply() {
  const rows = namedSupplyRows();
  const comp = rows.filter(r => !r.partner), part = rows.filter(r => r.partner);
  const sum = a => a.reduce((s, r) => s + r.total, 0);
  const compClinic = comp.reduce((s, r) => s + r.k, 0);
  const fks = comp.map(r => r.fk).filter(v => v > 0);
  return { rows, competitors: sum(comp), partner: sum(part), named: sum(rows), nCompetitors: comp.length,
           compMinPrice: fks.length ? Math.min(...fks) : 0, compMaxPrice: fks.length ? Math.max(...fks) : 0,
           compAvgPrice: compClinic > 0 ? Math.round(comp.reduce((s, r) => s + r.k * r.fk, 0) / compClinic) : 0 };
}
function namedSupplyTag(id) {
  const r = namedSupplyRows().find(x => x.id === id);
  if (!r) return '';
  return '<div style="font-size:10px;margin:4px 0 2px;color:' + (r.partner ? '#1a7a45' : '#8a6d1a') + ';">' + (r.partner ? '<b>Partner — not a competitor.</b> ' : '') + r.src + '</div>';
}
// KPI block shared by market.html (Competition tab) and competition.html.
function supplyKpiHtml(fmtPrice) {
  const ns = namedSupply();
  const clinic = (window._lastRows || []).reduce((s, r) => s + (r.korse || 0), 0);
  const b2b = (V.korseB2B || []).reduce((s, v) => s + (+v || 0), 0);
  const nat = gv('pazarTR');
  const k = [
    { label:'Osteoid clinic, Year 1 (braces)', val: clinic.toLocaleString('en-US'), c:'pos' },
    { label:'Osteoid clinic share — vs national market (pazarTR ' + nat.toLocaleString('en-US') + ')', val: (nat > 0 ? clinic / nat * 100 : 0).toFixed(1) + '%', c:'neu' },
    { label:'Osteoid clinic share — vs named supply + Osteoid clinic (' + (ns.named + clinic).toLocaleString('en-US') + ')', val: ((ns.named + clinic) > 0 ? clinic / (ns.named + clinic) * 100 : 0).toFixed(1) + '%', c:'neu' },
    { label:'Osteoid B2B, Year 1 — share of national market (separate line)', val: b2b.toLocaleString('en-US') + ' · ' + (nat > 0 ? b2b / nat * 100 : 0).toFixed(1) + '%', c:'neu' },
    { label:'Competitors (' + ns.nCompetitors + ', excl. partner) — braces/yr', val: ns.competitors.toLocaleString('en-US'), c:'neu' },
    { label:"Partner centre (Özgür's) — braces/yr", val: ns.partner.toLocaleString('en-US'), c:'pos' },
    { label:'Named supply (competitors + partner) — vs national market', val: ns.named.toLocaleString('en-US') + ' vs ' + nat.toLocaleString('en-US'), c:'neu' },
    { label:'Osteoid base price — standard brace with medical report, VR-guided design and fitting: premium quality at a market price', val: fmtPrice(gv('korseF_stdRl')), c:'pos' },
    { label:'Workshop market average — clinic price, volume-weighted (' + ns.nCompetitors + ' named competitors, excl. partner)', val: fmtPrice(ns.compAvgPrice), c:'neu' },
    { label:'Competitor clinic price range (excl. partner)', val: fmtPrice(ns.compMinPrice) + ' – ' + fmtPrice(ns.compMaxPrice), c:'neu' },
  ].map(x => '<div class="kpi"><div class="kpi-label">' + x.label + '</div><div class="kpi-val ' + x.c + '">' + x.val + '</div></div>').join('');
  return k + '<div style="grid-column:1/-1;font-size:10px;color:#888;">Named supply plus hospital and small-workshop production is consistent with a 15,000–25,000 treated market.</div>';
}
// ── Market sensitivity (MKT-G19) — Summary page ────────────────────────────
// Every cell is a full live model run: set one input, recalc(), read Year-5
// EBITDA (whole business, 100%) and the investor return (dividends + exit +
// retained cash, at the fixed deal pre-money), then restore. Guarded so the
// nested recalc() calls never re-enter this table.
function renderMarketSensitivity() {
  const el = _origGetById('mktSensBody');
  if (!el || window._inScenario || isBiz()) return;
  const keys = ['hedefOsteoidPay', 'pazarIstPct', 'pazarTR'];
  const base = {}; keys.forEach(k => { base[k] = V[k]; });
  const cases = [
    ['Istanbul target share (hedefOsteoidPay)', 'hedefOsteoidPay', [15, 20, 25, 30, 50], v => v + '%'],
    ['Istanbul share of national market (pazarIstPct)', 'pazarIstPct', [21, 30.1], v => v + '%'],
    ['National market (pazarTR)', 'pazarTR', [15000, 20000, 25000], v => v.toLocaleString('en-US') + '/yr'],
  ];
  const out = [], capNote = {};
  window._inScenario = true;
  try {
    cases.forEach(([grp, k, vals, fmt]) => vals.forEach(v => {
      Object.assign(V, base); V[k] = v; recalc();
      const R = window._lastInvestorReturn || {}, L = metricLadder('100');
      out.push({ grp, lbl: fmt(v), isBase: Math.abs(v - base[k]) < 1e-9, e5: L ? L.ebitda[4] : 0, moic: R.moic, irr: R.irr });
      // FU-6: capture Istanbul's capacity build-out (time & motion) for the footnote
      if (k === 'hedefOsteoidPay' && (v === 30 || v === 50)) {
        const cap = window._lastIstCapBuildout || [];
        capNote[v] = { orth: cap.map(c => c ? c.orthotists : '—'), rooms: cap.map(c => c ? c.rooms : '—'), printers: cap.map(c => c ? c.printers : '—'),
                       braces: ((window._lastProjRows || {}).braces || {}).istanbul || [] };
      }
    }));
  } finally {
    Object.assign(V, base); recalc(); window._inScenario = false;
  }
  let lastGrp = '';
  el.innerHTML = out.map(r => {
    const head = r.grp !== lastGrp ? '<tr><td colspan="4" style="text-align:left;font-size:10px;font-weight:700;color:#555;background:#f0efe9;">' + r.grp + '</td></tr>' : '';
    lastGrp = r.grp;
    return head + '<tr' + (r.isBase ? ' class="r-bas"' : '') + '><td style="text-align:left;">' + r.lbl + (r.isBase ? ' <b>(current)</b>' : '') + '</td>'
      + '<td>' + (r.e5 < 0 ? '-€' : '€') + Math.abs(Math.round(r.e5)).toLocaleString('en-US') + 'K</td>'
      + '<td>' + (r.moic !== undefined ? r.moic.toFixed(2) + '×' : '—') + '</td>'
      + '<td>' + (r.irr !== null && r.irr !== undefined ? r.irr.toFixed(1) + '%' : '—') + '</td></tr>';
  }).join('');
  const cn = document.getElementById('mktSensCap');
  if (cn) cn.innerHTML = [30, 50].filter(v => capNote[v]).map(v => '<b>Istanbul at ' + v + '% target share</b> — braces ' + capNote[v].braces.join(' / ')
      + ' · fitting orthotists (+1 expert) ' + capNote[v].orth.join(' / ') + ' · fitting rooms ' + capNote[v].rooms.join(' / ') + ' · printers ' + capNote[v].printers.join(' / ') + ' (Years 1–5)').join('<br>')
    + '<br>Orthotists, rooms and printers are sized each year by the time-and-motion engine from that year\'s volume (fitting ' + (V.ortotistDkFitting || 60) + ' min per brace, weekend-peak design day) — their cost is inside each case\'s EBITDA.';
}
// ── Business sensitivity (BC-6) — Summary page, business terms only ───────
// Every cell is a full live model run: one input changed at a time from the
// current settings, recalc(), read Year-5 EBITDA, 5-year cumulative FCF and
// peak funding need at the current settings (upside segments as toggled); the
// last column repeats the run with the three upside segments flipped — they are separate
// lines, so the base columns never include them. Everything is restored
// afterwards; guarded so nested recalc() calls never re-enter this table.
function renderBusinessSensitivity() {
  const el = _origGetById('bcSensBody');
  if (!el || window._inScenario || !isBiz()) return;
  const PRODS = ['stdRl','delik','sens','sensDelik'];
  const feeKeys = [].concat(...PRODS.map(p => ['feeSci_' + p, 'feeEdu_' + p, 'feeLib_' + p]));
  const SAT = ['izmir','ankara','bursa','gaziantep'];
  const UPS = ['adultAktif','postopAktif','fractureAktif'];
  const keys = ['hedefOsteoidPay','pazarTR','sgkAktif','royaltyEur','upgradeLongRunPct','upgradeLongRunPctB2B'].concat(SAT.map(s => s + 'HedefPay'), feeKeys, UPS);
  const base = {}; keys.forEach(k => { base[k] = V[k]; });
  const feeNow = PRODS.reduce((s, p) => s + gv('feeSci_' + p) + gv('feeEdu_' + p) + gv('feeLib_' + p), 0) / PRODS.length;
  const feeUniform = PRODS.every(p => ['feeSci_','feeEdu_','feeLib_'].every(f => Math.abs(gv(f + p) - gv('feeSci_stdRl')) < 1e-9));
  const set = {
    ist: v => { V.hedefOsteoidPay = v; },
    sat: v => { SAT.forEach(s => { V[s + 'HedefPay'] = v; }); },
    mkt: v => { V.pazarTR = v; },
    fee: v => { feeKeys.forEach(k => { V[k] = v / 3; }); },
    sgk: v => { V.sgkAktif = v; },
    roy: v => { V.royaltyEur = v; },
    up: v => { V.upgradeLongRunPct = v; V.upgradeLongRunPctB2B = v; },
  };
  const cases = [
    ['Istanbul target market share (Year 5)', 'ist', [15, 20, 25, 30, 50], v => v + '%', v => Math.abs(v - base.hedefOsteoidPay) < 1e-9],
    ['Satellite target market share (' + SAT.filter(s => V[s + 'Aktif']).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ') + ')', 'sat', [30, 50], v => v + '%', v => SAT.every(s => !V[s + 'Aktif'] || Math.abs(v - base[s + 'HedefPay']) < 1e-9)],
    ['National market (braces/yr)', 'mkt', [15000, 20000, 25000], v => v.toLocaleString('en-US'), v => Math.abs(v - base.pazarTR) < 1e-9],
    ['Channel fee (% of price, all products)', 'fee', [20, 25, 30], v => v + '%', v => feeUniform && Math.abs(v - feeNow) < 1e-9],
    ['SGK line (extra braces, Year 2+)', 'sgk', [false, true], v => v ? 'on (' + gv('sgkIncrementalPct') + '% extra)' : 'off', v => v === (base.sgkAktif === true)],
    ['Royalty per brace — intercompany to Osteoid A.Ş.', 'roy', [0, 75], v => '€' + v, v => Math.abs(v - (base.royaltyEur || 0)) < 1e-9],
    ['Long-run upgrade share — Year 3 onward, clinic and B2B', 'up', [40, 50, 60], v => v + '%', v => Math.abs(v - (base.upgradeLongRunPct ?? 0)) < 1e-9 && Math.abs(v - (base.upgradeLongRunPctB2B ?? 0)) < 1e-9],
  ];
  const run = () => { recalc(); const L = metricLadder('100'), B = window._lastBusinessCase; return { e5: L ? L.ebitda[4] : 0, mat: B ? B.matureEbitdaK : 0, cum: B ? B.cumFcf[B.n - 1] : 0, peak: B ? B.peakNeedK : 0 }; };
  const cumHdr = _origGetById('bcSensCumHdr');
  if (cumHdr) cumHdr.textContent = 'Cumulative FCF, Years 1–' + (V.horizonYears === 7 ? 7 : 5);
  const out = [];
  const upNow = UPS.some(u => V[u] === true);
  const hdr = _origGetById('bcSensUpHdr');
  if (hdr) hdr.textContent = upNow ? 'Year-5 EBITDA without upside' : 'Year-5 EBITDA with upside';
  window._inScenario = true;
  try {
    cases.forEach(([grp, k, vals, fmt, isB]) => vals.forEach(v => {
      Object.assign(V, base); set[k](v);
      const r = run();
      UPS.forEach(u => { V[u] = !upNow; });
      const r2 = run();
      out.push(Object.assign(r, { grp, lbl: fmt(v), isBase: isB(v), e5Up: r2.e5 }));
    }));
  } finally {
    Object.assign(V, base); recalc(); window._inScenario = false;
  }
  const kK = v => (v < 0 ? '−€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  let lastGrp = '';
  el.innerHTML = out.map(r => {
    const head = r.grp !== lastGrp ? '<tr><td colspan="6" style="text-align:left;font-size:10px;font-weight:700;color:#555;background:#f0efe9;">' + r.grp + '</td></tr>' : '';
    lastGrp = r.grp;
    return head + '<tr' + (r.isBase ? ' class="r-bas"' : '') + '><td style="text-align:left;">' + r.lbl + (r.isBase ? ' <b>(current)</b>' : '') + '</td>'
      + '<td>' + kK(r.e5) + '</td><td>' + kK(r.mat) + '</td><td>' + kK(r.cum) + '</td><td>' + kK(r.peak) + '</td><td style="color:#8a6d1a;">' + kK(r.e5Up) + '</td></tr>';
  }).join('');
}
// ── REGIONAL CATCHMENT (CM-1) — satellites ─────────────────────────────────
// A satellite serves its home province plus part of the surrounding provinces:
//   catchment % = HomePct + RegionPct × RegionCapturePct / 100   (of Turkey's population)
//   market      = pazarTR × catchment % × YouthWeight
//   volume      = market × {city}HedefPay
// Population shares: TÜİK 2024 address-based population, approximate — to be
// verified. YouthWeight (default 1.0) corrects for a region whose share of
// 10–17-year-olds differs from its population share.
function catchmentRegions() {
  return {
    izmir:     { home: 'İzmir',     region: ['Manisa', 'Aydın', 'Denizli', 'Muğla', 'Uşak'] },
    ankara:    { home: 'Ankara',    region: ['Konya', 'Eskişehir', 'Kırıkkale', 'Kırşehir', 'Çankırı', 'Bolu'] },
    bursa:     { home: 'Bursa',     region: ['Balıkesir', 'Yalova', 'Bilecik'] },
    gaziantep: { home: 'Gaziantep', region: ['Şanlıurfa', 'Kahramanmaraş', 'Hatay', 'Adıyaman', 'Osmaniye', 'Kilis'] },
  };
}
function satCatchmentPct(s) { return gv(s + 'HomePct') + gv(s + 'RegionPct') * gv(s + 'RegionCapturePct') / 100; }
function satMarketShare(s) { return satCatchmentPct(s) / 100 * (V[s + 'YouthWeight'] ?? 1); } // fraction of pazarTR
function svCatch(key, val) { sv(key, val); }
function renderCatchment() {
  const R = catchmentRegions();
  Object.keys(R).forEach(s => {
    const inp = _origGetById(s + 'CatchInputs'), tbl = _origGetById(s + 'CatchTable'), lbl = _origGetById(s + 'CatchLbl');
    const cat = satCatchmentPct(s), w = V[s + 'YouthWeight'] ?? 1, mkt = gv('pazarTR') * satMarketShare(s);
    if (lbl) lbl.textContent = cat.toFixed(1) + '% regional catchment';
    if (inp && !inp.dataset.built) {
      const sl = (k, l, min, max, step) => '<div class="sl-row" style="margin-bottom:0;margin-top:6px;"><label style="font-size:10px;">' + l + '</label><div class="sl-controls"><input type="range" id="s_' + s + k + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + gv(s + k) + '" oninput="svCatch(\'' + s + k + '\',this.value)"><span class="sl-val" id="' + s + k + '" style="min-width:40px;">' + numFmt(s + k, gv(s + k)) + '</span></div></div>';
      inp.innerHTML = sl('HomePct', 'Home province (' + R[s].home + ') — % of Turkey\'s population', 0, 20, 0.1)
        + sl('RegionPct', 'Surrounding provinces served — combined % of population', 0, 20, 0.1)
        + sl('RegionCapturePct', 'Share of the surrounding provinces\' patients who come here (%)', 0, 100, 5)
        + sl('YouthWeight', 'Youth weight (10–17-year-olds vs population share, ×)', 0.5, 2, 0.05);
      inp.dataset.built = '1';
    }
    if (tbl) {
      const r = (a, b, c, d) => '<tr><td style="text-align:left;">' + a + '</td><td>' + b + '</td><td>' + c + '</td><td>' + d + '</td></tr>';
      tbl.innerHTML = '<table class="proj-tbl" style="font-size:10px;margin-top:6px;"><thead><tr><th style="text-align:left;">Catchment</th><th>Population share</th><th>Capture</th><th>Catchment</th></tr></thead><tbody>'
        + r('Home: ' + R[s].home, gv(s + 'HomePct').toFixed(1) + '%', '100%', gv(s + 'HomePct').toFixed(1) + '%')
        + r('Region: ' + R[s].region.join(', '), gv(s + 'RegionPct').toFixed(1) + '%', gv(s + 'RegionCapturePct') + '%', (gv(s + 'RegionPct') * gv(s + 'RegionCapturePct') / 100).toFixed(1) + '%')
        + '<tr style="font-weight:700;"><td style="text-align:left;">Catchment × youth weight ' + w.toFixed(2) + '</td><td></td><td></td><td>' + (cat * w).toFixed(1) + '%</td></tr>'
        + '</tbody></table><div style="font-size:10px;color:#888;margin-top:3px;">Market = pazarTR ' + gv('pazarTR').toLocaleString('en-US') + ' × ' + (cat * w).toFixed(1) + '% = <b>' + Math.round(mkt).toLocaleString('en-US') + '</b> braces/yr; target volume at ' + gv(s + 'HedefPay') + '% = <b>' + Math.round(mkt * gv(s + 'HedefPay') / 100).toLocaleString('en-US') + '</b>/yr. ⚠ Population shares: TÜİK 2024 address-based population, approximate — to be verified.'
        + (s === 'gaziantep' ? ' South-east provinces have Turkey\'s highest fertility (Şanlıurfa TFR 3.28, TÜİK 2024); set the youth weight from TÜİK age-group data before relying on it.' : '') + '</div>';
    }
  });
}
// ── Istanbul effective share + overlap check (CM-2) — Summary and Multi-Year Plan
function renderIstOverlap() {
  const E = window._lastIstEff;
  const els = ['istEffShare', 'bcOverlap'].map(id => _origGetById(id)).filter(Boolean);
  if (!E || !els.length) return;
  const S = ['izmir','ankara','bursa','gaziantep'];
  const openIn = (s, i) => V[s + 'Aktif'] && _satOpenMonth(s) <= 12 * (i + 1);
  const H = E.pct.length;
  const sum = [...Array(H).keys()].map(i => E.pct[i] + S.reduce((a, s) => a + (openIn(s, i) ? satMarketShare(s) * 100 : 0), 0));
  const ok = sum.every(v => v <= 100 + 1e-9);
  const cols = [...Array(H).keys()].map(i => '<th>Y' + (i + 1) + '</th>').join('');
  const f = v => v.toFixed(1) + '%';
  const row = (l, a, b) => '<tr' + (b ? ' style="font-weight:700;"' : '') + '><td style="text-align:left;">' + l + '</td>' + a.map(v => '<td>' + v + '</td>').join('') + '</tr>';
  const h = '<table class="proj-tbl" style="font-size:10px;"><thead><tr><th style="text-align:left;">Share of the national market (pazarTR)</th>' + cols + '</tr></thead><tbody>'
    + row('Istanbul — input share (pazarIstPct)', E.pct.map(() => f(gv('pazarIstPct'))))
    + row('− inflow now served by open satellites (× ' + gv('istInflowReductionPct') + '%)', E.reduction.map(v => v ? '−' + v.toFixed(1) + '%' : '—'))
    + row('= Istanbul effective share', E.pct.map(f), true)
    + S.filter(s => V[s + 'Aktif']).map(s => row(s.charAt(0).toUpperCase() + s.slice(1) + ' catchment (× youth weight)', E.pct.map((_, i) => openIn(s, i) ? f(satMarketShare(s) * 100) : '—'))).join('')
    + row('All open centres', sum.map(f), true)
    + '</tbody></table><div style="font-size:10px;margin-top:4px;color:' + (ok ? '#1a7a45' : '#c0392b') + ';">'
    + (ok ? '✓ Overlap check: the open centres together cover at most ' + f(Math.max(...sum)) + ' of the national market in any year (≤ 100%).'
          : '⚠ Overlap check: the open centres cover more than 100% of the national market (' + f(Math.max(...sum)) + ') — catchments or the Istanbul share double count patients.')
    + ' Istanbul\'s target volume each year uses its effective share; a satellite\'s home-province share is not deducted from Istanbul.</div>';
  els.forEach(el => { el.innerHTML = h; });
}
function marketBuildUp() {
  const core = gv('kohortTR') * gv('braceablePct') / 100 * gv('bracePerCourse');
  const paed = core * (1 + gv('otherPaedPct') / 100);
  const gapPct = gv('pazarTR') > 0 ? (paed / gv('pazarTR') - 1) * 100 : 0;
  return { core: Math.round(core), paed: Math.round(paed), gapPct };
}
function renderMarketBuildUp() {
  const el = document.getElementById('mktBuildPaed');
  if (!el) return;
  const m = marketBuildUp();
  el.textContent = m.paed.toLocaleString('en-US') + ' braces/yr';
  const c = document.getElementById('mktBuildCore');
  if (c) c.textContent = m.core.toLocaleString('en-US');
  const n = document.getElementById('mktBuildNote');
  if (n) {
    const big = Math.abs(m.gapPct) > 10;
    n.textContent = 'vs pazarTR ' + gv('pazarTR').toLocaleString('en-US') + ': ' + (m.gapPct >= 0 ? '+' : '') + m.gapPct.toFixed(1) + '%'
      + (big ? ' — ⚠ the build-up differs from the pazarTR input by more than 10%; pazarTR is NOT changed automatically.' : ' — within ±10% of the pazarTR input.');
    n.style.color = big ? '#c94f2a' : '#1a7a45';
  }
}

function renderPazarChart(rows) {
  renderMarketBuildUp();
  renderUpsideSummary();
  const pazarTR    = gv('pazarTR');
  const pazarIstPct= gv('pazarIstPct') / 100;
  const pazarIst   = Math.round(pazarTR * pazarIstPct);
  const totalKorse = rows.reduce((s,r) => s + r.korse, 0);

  const _pIstEl = document.getElementById('pazarIstAdet'); if(_pIstEl) _pIstEl.textContent = pazarIst.toLocaleString('tr-TR');

  const payTR  = totalKorse / pazarTR * 100;

  // Break-even market share — derived from the live P&L, so it responds to
  // price/cost changes (was previously a hardcoded 17 braces, price-blind).
  // At the mature product mix (last modeled month): contribution per brace =
  // net revenue ÷ braces. Annual cost base to cover = the mature staffing
  // run-rate (12 × Month-12 sabitGider) PLUS the year's actual non-sabit
  // operating budget — advertising, kitchen, quarterly withholding, periodic
  // costs (conferences/workshops/CPA/other) — which the old formula ignored
  // entirely, understating break-even ~15% (audit F4). One-off printer
  // top-ups (capex, printerEkMaliyet) stay excluded. Break-even share = that
  // volume ÷ the Istanbul annual market. If a brace doesn't cover its own
  // variable cost (net ≤ 0), no volume breaks even → "n/a".
  const _mature = rows[rows.length - 1] || {};
  const _netPerBrace = (_mature.korse > 0) ? (_mature.gelirNet / _mature.korse) : 0;
  const _annualPeriodic = rows.reduce((s,r) =>
    s + (r.reklamS||0) + (r.mutfakV||0) + (r.ayStopaj||0) + (r.kongre||0) + (r.ymmDon||0), 0);
  const _annualFixed = 12 * (_mature.sabitGider || 0) + _annualPeriodic;
  const _beShare = (_netPerBrace > 0 && pazarIst > 0)
    ? (_annualFixed / _netPerBrace) / pazarIst * 100
    : null;

  // KPI
  document.getElementById('pazarKpi').innerHTML = [
    { label:'Turkey market (year) — pazarTR input', val: pazarTR.toLocaleString('tr-TR')+' units', c:'neu' },
    { label:'Named supply (5 competitors + partner centre)', val: namedSupply().named.toLocaleString('tr-TR')+' units', c:'neu', sub:'Named supply plus hospital and small-workshop production is consistent with a 15,000–25,000 treated market.' },
    { label:'Istanbul market (year)',      val: pazarIst.toLocaleString('tr-TR')+' units', c:'neu' },
    { label:'Year 1 braces (total) (from brace ramp)', val: totalKorse+' units', c:'neu' },
    { label:'Break-even market share — vs Istanbul market of ' + pazarIst.toLocaleString('en-US') + ' braces/yr', val: _beShare === null ? 'n/a' : _beShare.toFixed(1)+'%', c:'neg' },
  ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div>${k.sub ? `<div style="font-size:9px;color:#888;margin-top:2px;">${k.sub}</div>` : ''}</div>`).join('');

  // B2C KPI mirror (korse.html) — same 3-card format as kpiGridB2B below it.
  const kpiB2C = document.getElementById('kpiGridB2C');
  if (kpiB2C) {
    const tGelirB2C = rows.reduce((s,r)=>s+(r.gelirNet||0),0);
    kpiB2C.innerHTML = [
      { label:'B2C total braces', val: totalKorse+' units', c:'neu' },
      { label:'B2C net revenue after fees & materials', val: ff(tGelirB2C), c: tGelirB2C>0?'pos':'neu' },
      { label:'TR market share (B2C) — vs national market of ' + pazarTR.toLocaleString('en-US') + ' braces/yr', val: payTR.toFixed(1)+'%', c: payTR>=1?'pos':'neu' },
    ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div></div>`).join('');
  }

  // Mix stacked bar — ürün karışımı + pazar payı referans çizgisi
  if (mixChartInst) mixChartInst.destroy();
  const ctx2 = _origGetById('mixChart');
  if (!ctx2) return;
  const PNAMES=['Std-Report','Perf+Rpl','Sensor+Rpl','Sns+Rpl+Perf'];
  const PCOLORS=['rgba(216,90,48,0.8)','rgba(29,158,117,0.8)','rgba(83,74,183,0.8)','rgba(212,83,126,0.8)'];
  const aylikPazar = pazarIst / 12;
  const basabasAy  = rows.find(r=>r.net>=0)?.ay || null;
  const basabasKorse = basabasAy ? rows[basabasAy-1].korse : null;

  mixChartInst = new Chart(ctx2, {
    data: {
      labels: rows.map(r=>'Month '+r.ay),
      datasets: [
        ...PNAMES.map((name,pi)=>({
          type:'bar', label:name,
          data: rows.map(r=>(r.k&&r.k[pi])||0),
          backgroundColor:PCOLORS[pi], borderWidth:0, stack:'mix', order:2
        })),
        { type:'line', label:'Istanbul market avg. / month',
          data: rows.map(()=>Math.round(aylikPazar)),
          borderColor:'#D85A30', borderWidth:2,
          borderDash:[6,4], pointRadius:0, tension:0,
          fill:false, stack:undefined, order:1, yAxisID:'y' },
        { type:'line', label:'Break-even units',
          data: rows.map(r => basabasKorse || null),
          borderColor:'#1a7a45', borderWidth:2,
          borderDash:[3,3], pointRadius:0, tension:0,
          fill:false, stack:undefined, order:1, yAxisID:'y',
          segment:{ borderColor: ctx => ctx.p0DataIndex < (basabasAy||13)-1 ? 'transparent' : '#1a7a45' }
        },
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins: {
        legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
        tooltip:{ mode:'index', callbacks:{ label: c=>{
          if(c.dataset.stack==='mix') {
            const total = rows[c.dataIndex].korse;
            return c.dataset.label+': '+c.raw+' units ('+Math.round(c.raw/(total||1)*100)+'%)';
          }
          return c.dataset.label+': '+c.raw+' units';
        }}}
      },
      scales: {
        x:{ stacked:true, grid:{display:false} },
        y:{ stacked:true, title:{display:true,text:'Units / month',font:{size:10}}, grid:{color:'rgba(0,0,0,0.05)'} }
      }
    }
  });
}



function setGrafTab(tab, btn) {
  ['rampa','netcum','gider','dagilim'].forEach(t => {
    document.getElementById('grafPanel_'+t).style.display = t===tab ? '' : 'none';
  });
  document.querySelectorAll('#grafTabBar .tct').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // ramp canvas needs resize after becoming visible
  if (tab==='rampa' && window._redrawRamp) setTimeout(window._redrawRamp, 10);
  // Chart.js charts need resize after becoming visible
  if (tab==='netcum' && mChart) setTimeout(()=>mChart.resize(), 10);
  if (tab==='gider' && sBar) setTimeout(()=>sBar.resize(), 10);
  if (tab==='dagilim') {
    if (kPie) setTimeout(()=>kPie.resize(), 10);
    if (oPie) setTimeout(()=>oPie.resize(), 10);
  }
}

function toggleMixViz(btn) {
  const wrap = document.getElementById('mixVizWrap');
  const hidden = wrap.style.display === 'none';
  wrap.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? 'Hide' : 'Show';
}

function updAktifAy(prodIdx, val) {
  V.aktifAy[prodIdx] = parseInt(val);
  buildMixTable();  // tabloyu yeniden oluştur
  buildMixB2BTable();
  // SR-1: the mix rows follow the upgrade path and V.aktifAy — nothing to shift
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}



// ── SNAPSHOT KAYDET ──────────────────────────────────────────────────────────
function saveSnapshot() {
  localStorage.setItem('osteoid_V', JSON.stringify(V));
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('osteoid_')) data[k] = localStorage.getItem(k);
  }
  const nameEl = document.getElementById('snapshotName');
  const name = (nameEl && nameEl.value.trim()) || ('osteoid_' + new Date().toISOString().slice(0, 10));
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name.endsWith('.json') ? name : name + '.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function loadSnapshot(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
      setTimeout(() => location.reload(), 100);
    } catch(err) {
      alert('Error: invalid snapshot file.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}



function renderTrigger(rows) {
  const { results, triggerAy } = calc4AyOrtalama(rows);

  // KPI grid
  const kpiEl = document.getElementById('triggerKpi');
  if (kpiEl) {
    const last4 = results.filter(r=>r.avg4!==null).slice(-4);
    kpiEl.innerHTML = last4.map(r =>
      '<div class="kpi"><div class="kpi-label">Month '+r.ay+' — 4-month avg.</div>'
      +'<div class="kpi-val '+(r.avg4>=0?'pos':'neg')+'">'+ff(r.avg4)+'</div></div>'
    ).join('');
  }

  // Tetikleyici mesajı
  const msgEl = document.getElementById('triggerVal');
  if (msgEl) {
    if (triggerAy) {
      const _rSehir = V.izmirAktif ? 'Izmir' : V.ankaraAktif ? 'Ankara' : '2nd center';
      msgEl.className = 'tl-val pos';
      msgEl.textContent = '✓ Triggered at Month '+triggerAy+' — '+_rSehir+' opening signal';
    } else {
      const lastAvg = results.filter(r=>r.avg4!==null).slice(-1)[0];
      const gap = lastAvg ? ff(-lastAvg.avg4) : '—';
      msgEl.className = 'tl-val neg';
      msgEl.textContent = 'Not triggered yet — cumulative gap: '+gap;
    }
  }
}


// ── PINNED KPI BAR UPDATE ─────────────────────────────────────────────────────
function updatePinnedKpi(rows, tGelir, basAy, pozAy, tKorse) {
  const set = (id, val, cls) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = val;
    if (cls) el.className = 'kpi-bar-val ' + cls;
  };
  set('pkpi_gelir',  ff(tGelir),                         tGelir>=0?'pos':'neg');
  const _tahminCum = !pozAy ? _tahminPozAy(rows) : null;
  const _cumLabel  = pozAy ? 'Month '+pozAy : (_tahminCum ? '~Month '+_tahminCum : '>Month 24');
  set('pkpi_bas',    basAy ? 'Month '+basAy : 'Not reached', basAy?'pos':'neg');
  set('pkpi_cum',    _cumLabel, pozAy?'neu':'neg');
  set('pkpi_korse',  tKorse+' units',                      '');
  // Yıl 1 kartı KPI'ları
  const _s = (id,v,c) => { const e=document.getElementById(id); if(e){e.textContent=v; if(c)e.className='year-kpi-val '+c;} };
  // y1GelirKpi (Multi-Year Plan Year-1 card) is set by buildProjection — consolidated operating profit, 4-B11.
  _s('y1BasKpi',   basAy?'Month '+basAy:'Not reached', basAy?'pos':'neg');
  _s('y1CumKpi',   _cumLabel, pozAy?'neu':'neg');
  _s('y1KorseKpi', tKorse+' units', '');
  const {triggerAy:_tAy} = calc4AyOrtalama(rows);
  const _aktifSehir = V.izmirAktif ? 'Izmir' : V.ankaraAktif ? 'Ankara' : '2nd center';
  _s('y1TriggerKpi', _tAy?'✓ Triggered Month '+_tAy+' — '+_aktifSehir+' signal':'Not triggered yet', _tAy?'pos':'neg');
  const royTL = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const royEur= Math.round(royTL/(V.eurKur ?? 50));
  set('pkpi_royalty','€'+royEur.toLocaleString('en-US'), 'neg'); // en-US grouping to match every other €-prefixed figure (audit F20)

  // trigger
  const {triggerAy} = calc4AyOrtalama(rows);
  const tel = document.getElementById('pkpi_trigger');
  if (tel) {
    if (triggerAy) {
      tel.textContent = 'Month '+triggerAy+' ✓';
      tel.className = 'kpi-bar-val pos';
    } else {
      tel.textContent = 'Not yet';
      tel.className = 'kpi-bar-val neg';
    }
  }
}


// ── DUYARLILIK / TORNADO ANALİZİ ─────────────────────────────────────────────
const SEN_ITEMS = [
  { key:'kira',       label:'Monthly Rent',            unit:'₺',  step:10000, minR:0.5, maxR:2.0  },
  { key:'tadilatM2',  label:'Renovation (₺/m²)',       unit:'₺',  step:500,   minR:0.5, maxR:2.5  },
  { key:'dekoM2',     label:'Decoration (₺/m²)',       unit:'₺',  step:250,   minR:0.5, maxR:2.5  },
  { key:'ortotistM',  label:'Orthotist Salary (net)',  unit:'₺',  step:5000,  minR:0.6, maxR:1.8  },
  { key:'operatorM',  label:'Operator Salary (net)',   unit:'₺',  step:5000,  minR:0.6, maxR:1.6  },
  { key:'stajyerM',   label:'Intern Salary (net)',     unit:'₺',  step:2000,  minR:0.5, maxR:2.0  },
  { key:'reklamCarpan',label:'Advertising Multiplier',  unit:'',   step:0.25, minR:0.25,maxR:3.0  },
  { key:'eurKur',     label:'EUR/TRY Rate',            unit:'',   step:5,     minR:0.6, maxR:1.8  },
  // Absolute range, not ratio-based: royaltyEur=0 is a legitimate scenario
  // value, and scaling a 0 baseline by any ratio would collapse min/max to
  // a single point right when testing "what if a royalty is added" matters most.
  { key:'royaltyEur', label:'Royalty (€/brace)',        unit:'',   step:5,     absMin:0, absMax:150 },
];

let senMetric = 'gelir';
let tornadoInst = null;

function setSenMetric(m, btn) {
  senMetric = m;
  document.querySelectorAll('#senInputs').forEach(()=>{});
  document.querySelectorAll('.tct').forEach(b => {
    if(['gelir','bas','cum'].some(x=>b.getAttribute('onclick')?.includes("'"+x+"'"))) 
      b.classList.remove('active');
  });
  btn.classList.add('active');
  runSensitivity();
}

function initSensitivityInputs() {
  const wrap = document.getElementById('senInputs');
  if (!wrap) return;
  wrap.innerHTML = SEN_ITEMS.map(item => {
    const baz   = V[item.key] ?? 0;
    // Absolute-range items (e.g. royaltyEur, where 0 is a legitimate baseline
    // and ratio scaling would collapse min/max to a single point) use fixed
    // bounds instead of baz-relative ones.
    const isAbs = item.absMin !== undefined;
    const minV  = isAbs ? (V['_sen_min_'+item.key] ?? item.absMin) : Math.round(baz * item.minR / item.step) * item.step;
    const maxV  = isAbs ? (V['_sen_max_'+item.key] ?? item.absMax) : Math.round(baz * item.maxR / item.step) * item.step;
    const minSlBounds = isAbs ? [item.absMin, item.absMax] : [Math.round(baz*0.2/item.step)*item.step, baz];
    const maxSlBounds = isAbs ? [item.absMin, item.absMax] : [baz, Math.round(baz*3.5/item.step)*item.step];
    V['_sen_min_'+item.key] = minV;
    V['_sen_max_'+item.key] = maxV;
    const fmtV  = v => item.unit === '₺' ? '€'+Math.round(v/(V.eurKur ?? 50)).toLocaleString('en-US') : v.toLocaleString('tr-TR');
    return `
    <div style="background:#fafaf8;border:1px solid #e0e0dc;border-radius:6px;padding:12px 14px;">
      <div style="font-size:11px;font-weight:700;color:#333;margin-bottom:8px;">${item.label}</div>
      <div style="font-size:10px;color:#888;margin-bottom:4px;">Base: <b style="color:#534AB7;">${fmtV(baz)}</b></div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
        <span style="font-size:10px;color:#888;min-width:26px;">Min</span>
        <input type="range" min="${minSlBounds[0]}" max="${minSlBounds[1]}" step="${item.step}" value="${minV}"
          style="flex:1;accent-color:#c0392b;"
          oninput="V['_sen_min_${item.key}']=parseFloat(this.value);document.getElementById('smn_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseFloat(this.value)/(V.eurKur ?? 50)).toLocaleString(\'en-US\')' : 'parseFloat(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
        <span id="smn_${item.key}" style="min-width:64px;font-size:11px;font-weight:700;color:#c0392b;text-align:right;">${fmtV(minV)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:10px;color:#888;min-width:26px;">Max</span>
        <input type="range" min="${maxSlBounds[0]}" max="${maxSlBounds[1]}" step="${item.step}" value="${maxV}"
          style="flex:1;accent-color:#1a7a45;"
          oninput="V['_sen_max_${item.key}']=parseFloat(this.value);document.getElementById('smx_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseFloat(this.value)/(V.eurKur ?? 50)).toLocaleString(\'en-US\')' : 'parseFloat(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
        <span id="smx_${item.key}" style="min-width:64px;font-size:11px;font-weight:700;color:#1a7a45;text-align:right;">${fmtV(maxV)}</span>
      </div>
    </div>`;
  }).join('');
}

// Pure Year-1 (Istanbul HQ clinic) monthly P&L engine. Shared by recalc()
// (live dashboard) and calcMetric() (sensitivity what-if) so the two views
// can never diverge again. Reads Vlike only — never mutates it.
function computeYear1(Vlike) {
  const gv1 = k => Vlike[k] ?? 0;
  const eurKur = Vlike.eurKur ?? 50;

  const royaltyTRY = gv1('royaltyEur') * eurKur;
  const mutfakV = gv1('mutfak'), stopajV = gv1('stopaj');
  const genelGiderV = gv1('genelGider');
  const aylikKira = gv1('kira'), elektrik = gv1('elektrik'), internet = gv1('internet');
  const sarf = gv1('sarf'), sgkC = gv1('sgkCarpan');
  const ortoBrut = gv1('ortotistM') * sgkC;
  const operatorBrut = gv1('operatorM') * sgkC;
  const ymmM = gv1('ymmM');
  // Head-office ADD-ON (BC-5): only central functions NOT already booked
  // elsewhere (see hoBookedCentral) — V.hoCostY1Eur per year, capped at
  // V.hoCapEur. In Year 1 Istanbul is the only open centre, so it carries all
  // of it, as a fixed monthly cost inside sabitGider.
  const hoAy = Math.min(gv1('hoCostY1Eur'), Vlike.hoCapEur ?? Infinity) * eurKur / 12;
  const kesimEurPer = gv1('kesimEurPer');

  const m2 = gv1('m2'), tm2 = gv1('tadilatM2'), dm2 = gv1('dekoM2');
  const tadilatTop = m2*tm2, dekoTopV = m2*dm2;

  const printerEurFiyat = Vlike.printerEurFiyat || 35000;
  const printerAktif = Vlike.printerAktif !== false;
  const robotKolAktif = !!Vlike.robotKolAktif;
  const robotKolEurFiyat = Vlike.robotKolEurFiyat || 30000;
  // Scenario switch, not a fact: true = Osteoid A.Ş. supplies printers/robot
  // arm as an intercompany transfer (clinic bears none of that capex or its
  // mid-year top-up cost); false = the clinic buys and owns the equipment.
  const ekipmanOsteoidden = Vlike.ekipmanOsteoidden !== false;

  const korseArr = Vlike.korse || [];
  const korseB2BArr = Vlike.korseB2B || [];
  // Opening printer count for the monthly engine: manual override, else the
  // FIRST active month's combined (B2C+B2B) need via clinicCapacityProfile,
  // floored at 2. The engine tops up as the ramp climbs (see the loop), so the
  // year-end peak is reached via mid-year purchases rather than front-loaded —
  // which is what lets the top-up trigger actually fire. The peak-sized count
  // shown on the printer card comes from the separate _autoPrinterAdet().
  // clinicCapacityProfile reads V's capacity sliders — during a calcMetric
  // scenario clone V IS Vlike, so this stays consistent.
  let _openB2C = 0, _openB2B = 0;
  for (let _i = 0; _i < Math.max(korseArr.length, korseB2BArr.length); _i++) {
    const _b2c = Number(korseArr[_i]) || 0, _b2b = Number(korseB2BArr[_i]) || 0;
    if (_b2c > 0 || _b2b > 0) { _openB2C = _b2c; _openB2B = _b2b; break; }
  }
  const startPrinterAdet = Vlike.printerAdetManual !== undefined
    ? Vlike.printerAdetManual
    : Math.max(2, clinicCapacityProfile(_openB2C, _openB2B).printers);

  const printerMaliyet = (printerAktif && !ekipmanOsteoidden) ? startPrinterAdet * printerEurFiyat * eurKur : 0;
  const robotKolMaliyet = (robotKolAktif && !ekipmanOsteoidden) ? robotKolEurFiyat * eurKur : 0;
  const kurulumTop = -(gv1('kira')+gv1('depozito')+gv1('emlakci')+tadilatTop+dekoTopV+gv1('mobilya')+gv1('ruhsat')+printerMaliyet+robotKolMaliyet);

  const fStdRl=gv1('korseF_stdRl'), mStdRl=gv1('mal_stdRl');
  const fDelik=gv1('korseF_delik'), mDelik=gv1('mal_delik');
  const fSens=gv1('korseF_sens'), mSens=gv1('mal_sens');
  const fSD=gv1('korseF_sensDelik'), mSD=gv1('mal_sensDelik');
  // Doctor referral commission is split into 3 separately-named, independently
  // adjustable fees (Scientific Study / Education / Library), each its own
  // per-product rate — replacing both the old per-product doctor-fee % and the
  // separate channel-maintenance fee (removed entirely, folded into this set).
  const feeSciP = {
    stdRl: gv1('feeSci_stdRl')/100,
    delik: gv1('feeSci_delik')/100, sens: gv1('feeSci_sens')/100, sensDelik: gv1('feeSci_sensDelik')/100,
  };
  const feeEduP = {
    stdRl: gv1('feeEdu_stdRl')/100,
    delik: gv1('feeEdu_delik')/100, sens: gv1('feeEdu_sens')/100, sensDelik: gv1('feeEdu_sensDelik')/100,
  };
  const feeLibP = {
    stdRl: gv1('feeLib_stdRl')/100,
    delik: gv1('feeLib_delik')/100, sens: gv1('feeLib_sens')/100, sensDelik: gv1('feeLib_sensDelik')/100,
  };
  // esikDestek no longer gates support staff — support is now capacity-derived
  // (see the loop). Intern thresholds (_e1/_e3) stay.
  const _e1 = Vlike.esikStajyer1 ?? 15, _e3 = Vlike.esikStajyer2 ?? 76;
  const stajBrut = gv1('stajyerM')*sgkC, destekBrut = gv1('destekM')*sgkC, staj2Brut = gv1('stajyer2M')*sgkC;

  const printerBirimMaliyet = printerEurFiyat * eurKur;
  let aktifPrinterSayisi = startPrinterAdet;
  const printerTetikAylari = [];

  const mixArr = upgradeRows('clinic', Vlike); // SR-1: continuous upgrade path
  const aktifAyArr = Vlike.aktifAy || [];
  const kongreArr = Vlike.kongre || [];
  const donemsel = Vlike.donemsel || {};
  const reklamArr = donemsel.reklam || [];
  const ymmArr = donemsel.ymm || [];
  // donemsel.reklam (the draggable Periodic Costs chart) is the sole
  // advertising input — reklamCarpan is a sensitivity multiplier on it, not
  // a second budget. Default 1.0 = no scaling.
  const reklamCarpan = Vlike.reklamCarpan ?? 1.0;

  let cumBudget=kurulumTop, rows=[], tGelir=0, tGider=0, tNet=0, tKorse=0, cumKorse=0;
  let basAy=null, pozAy=null;

  for (let i=0; i<12; i++) {
    const korse = korseArr[i]||0;
    const reklamRaw = reklamArr[i]||0;
    const reklamS = reklamRaw * reklamCarpan;
    const ymmDon = ymmArr[i]||0;
    // Netting uses the raw dragged value, since V.kongre was summed from raw
    // donemsel values (see the drag-chart sync) — only the P&L-facing reklamS
    // term above is scaled by the multiplier.
    const kongre = Math.max(0, (kongreArr[i]||0)-reklamRaw-ymmDon);

    const rawMx = (mixArr[i] || [100,0,0,0]).map((v,pi) => i < (aktifAyArr[pi]||0) ? 0 : v);
    const tot = rawMx.reduce((s,v)=>s+v,0) || 100;
    const k = rawMx.map(v => Math.round(korse*v/tot));
    // Largest-remainder rounding: leftover/excess from per-bucket rounding
    // goes to whichever already-launched product has the biggest share this
    // month — never to a product whose aktifAy hasn't started yet.
    let biggestIdx = 0;
    for (let pi = 1; pi < rawMx.length; pi++) { if (rawMx[pi] > rawMx[biggestIdx]) biggestIdx = pi; }
    k[biggestIdx] = Math.max(0, k[biggestIdx] + (korse - k.reduce((s,v)=>s+v,0)));

    const gelirBrut = k[0]*fStdRl + k[1]*fDelik + k[2]*fSens + k[3]*fSD;
    const feeSci    = k[0]*fStdRl*feeSciP.stdRl + k[1]*fDelik*feeSciP.delik + k[2]*fSens*feeSciP.sens + k[3]*fSD*feeSciP.sensDelik;
    const feeEdu    = k[0]*fStdRl*feeEduP.stdRl + k[1]*fDelik*feeEduP.delik + k[2]*fSens*feeEduP.sens + k[3]*fSD*feeEduP.sensDelik;
    const feeLib    = k[0]*fStdRl*feeLibP.stdRl + k[1]*fDelik*feeLibP.delik + k[2]*fSens*feeLibP.sens + k[3]*fSD*feeLibP.sensDelik;
    const kesimTRY  = kesimEurPer * eurKur;
    const kesimTop  = (k[1]+k[3]) * kesimTRY;
    // Cutting fee (kesim) is a real cost the clinic pays Osteoid Inc. for
    // delik/sensDelik perforation — subtracted here like royaltyTop, and
    // "Cutting / Osteoid Inc." KPI now reflects money actually deducted.
    const baskiTop  = k[0]*mStdRl + k[1]*(mDelik+kesimTRY) + k[2]*mSens + k[3]*(mSD+kesimTRY);
    const royaltyTop = korse * royaltyTRY;
    const gelirNet  = gelirBrut - feeSci - feeEdu - feeLib - baskiTop - royaltyTop;

    // Capacity profile for THIS month, from combined B2C + B2B load. Drives
    // the printer top-up trigger and the derived staffing below — B2B braces
    // consume printers only (no rooms/orthotist/workshop), which the profile
    // already encodes.
    const b2bAy = Number(korseB2BArr[i]) || 0;
    const cap = clinicCapacityProfile(korse, b2bAy);

    // Printer tetikleyici — bu ayın korsesi mevcut kapasite aşıyorsa ek printer al.
    // Capacity/timing is still tracked even when the cost is zeroed — but the
    // COST is charged only under the exact same condition as the setup printer
    // line (printerMaliyet): printers must be in the model (printerAktif) AND
    // clinic-owned (!ekipmanOsteoidden). Previously the top-up ignored
    // printerAktif, so a ramp that crossed a printer threshold still charged
    // the clinic even with printers Excluded — while setup charged €0 (F9).
    const gerekliPrinter = cap.printers;
    let printerEkMaliyet = 0;
    if (gerekliPrinter > aktifPrinterSayisi) {
      const yeniPrinter = gerekliPrinter - aktifPrinterSayisi;
      printerEkMaliyet = (printerAktif && !ekipmanOsteoidden) ? yeniPrinter * printerBirimMaliyet : 0;
      aktifPrinterSayisi = gerekliPrinter;
      printerTetikAylari.push({ ay: i+1, adet: yeniPrinter, maliyet: printerEkMaliyet });
    }

    const ayStopaj = (i===2||i===5||i===8||i===11) ? stopajV : 0;
    // Interns stay threshold-gated (training pipeline, not capacity math).
    const ayStajyer = korse >= _e1 ? stajBrut   : 0;
    const ayStaj2   = korse >= _e3 ? staj2Brut  : 0;
    // Support (workshop) staff and fitting orthotists are now sized by the
    // time-and-motion capacity engine, replacing the single esikDestek
    // threshold hire. The expert orthotist remains the existing ortoBrut
    // line — fitting orthotists are ADDITIONAL headcount at ekOrtotistM each,
    // so no double-count.
    const ortotistSayisi = cap.orthotists;
    const destekSayisi    = cap.supportStaff;
    const fittingOrtoBrut = ortotistSayisi * gv1('ekOrtotistM') * sgkC;
    const ayDestek        = destekSayisi * destekBrut; // derived count × brut (field name kept for the Fixed-Costs display)

    const sabitGider = aylikKira + (elektrik+internet+sarf) + ortoBrut + fittingOrtoBrut + operatorBrut + ymmM + ayStajyer + ayDestek + ayStaj2 + genelGiderV + hoAy;
    const gider = -(sabitGider + reklamS + ymmDon + mutfakV + ayStopaj + kongre + printerEkMaliyet);
    const net = gelirNet + gider;
    cumBudget += net;
    if (basAy===null && net>=0) basAy = i+1;
    if (pozAy===null && cumBudget>=0) pozAy = i+1;

    rows.push({ay:i+1, hoAy, korse, k, gelirBrut, feeSci, feeEdu, feeLib, baskiTop, royaltyTop, kesimTop, gelirNet, sabitGider, ayStajyer, ayDestek, ayStaj2, fittingOrtoBrut, ortotistSayisi, destekSayisi, odaSayisi: cap.rooms, peakDayPatients: cap.peakDayPatients, expertLoadPct: cap.expertLoadPct, reklamS, ymmDon, mutfakV, ayStopaj, kongre, printerEkMaliyet, gider, net, cumBudget});
    cumKorse += korse;
    tGelir += gelirNet; tGider += gider; tNet += net; tKorse += korse;
  }

  return {
    rows, tGelir, tGider, tNet, tKorse, cumKorse, basAy, pozAy, cumBudget,
    kurulumTop, tadilatTop, dekoTopV, printerMaliyet, robotKolMaliyet, printerTetikAylari,
    fStdRl, fDelik, fSens, fSD, mStdRl, mDelik, mSens, mSD,
  };
}

function calcMetric(overrides) {
  // Temporarily override V values, run the shared Year-1 engine, restore.
  const saved = {};
  Object.entries(overrides).forEach(([k,v]) => { saved[k]=V[k]; V[k]=v; });

  const { tGelir, basAy, pozAy } = computeYear1(V);

  // Restore
  Object.entries(saved).forEach(([k,v]) => { V[k]=v; });

  if(senMetric==='gelir') return tGelir;
  if(senMetric==='bas')   return basAy || 13;  // 13 = ulaşılamadı
  if(senMetric==='cum')   return pozAy || 13;
  return tGelir;
}

function runSensitivity() {
  // Early-out on pages without the panel (currently every page) — the tornado
  // chart and its table both live behind #tornadoChart, so with no canvas
  // there's nothing to render and the ~19 calcMetric passes below are pure
  // waste on every recalc (audit F12). Guard hoisted above the passes.
  if (!_origGetById('tornadoChart') && !_origGetById('senTableBody')) return;
  const bazResult = calcMetric({});
  // ?? not || so a legitimate min/max of 0 (e.g. royaltyEur, whose whole point
  // is testing "what if a royalty is added" from a 0 baseline) isn't discarded
  // back to the base value (audit F12).
  const results = SEN_ITEMS.map(item => {
    const minResult = calcMetric({ [item.key]: V['_sen_min_'+item.key] ?? V[item.key] });
    const maxResult = calcMetric({ [item.key]: V['_sen_max_'+item.key] ?? V[item.key] });
    return { ...item, baz: V[item.key], minV: V['_sen_min_'+item.key]??V[item.key], maxV: V['_sen_max_'+item.key]??V[item.key], minR: minResult, maxR: maxResult, range: Math.abs(maxResult-minResult) };
  }).sort((a,b)=>b.range-a.range);

  // Tornado chart
  if(tornadoInst) { tornadoInst.destroy(); tornadoInst=null; }
  const ctx = _origGetById('tornadoChart');
  if(!ctx) return;

  const isAy = senMetric==='bas'||senMetric==='cum';
  const fmt  = v => isAy ? 'Month '+(v>=13?'≥13':v) : ff(Math.round(v));
  const metricLabel = senMetric==='gelir'?'Year 1 Net Revenue (€K)':senMetric==='bas'?'Break-Even Month':'Cumulative Positive Month';

  // For time metrics: lower is better (invert colors)
  const minColor = isAy ? 'rgba(26,122,69,0.75)'   : 'rgba(192,57,43,0.75)';
  const maxColor = isAy ? 'rgba(192,57,43,0.75)'   : 'rgba(26,122,69,0.75)';

  const divider = isAy ? 1 : 1000;
  const suffix  = isAy ? '' : 'K';

  tornadoInst = new Chart(ctx, {
    type:'bar',
    data:{
      labels: results.map(r=>r.label),
      datasets:[
        { label:'At min value', data: results.map(r=>+(r.minR/divider).toFixed(1)),
          backgroundColor: minColor, borderWidth:0, borderRadius:3 },
        { label:'At max value', data: results.map(r=>+(r.maxR/divider).toFixed(1)),
          backgroundColor: maxColor, borderWidth:0, borderRadius:3 },
        { label:'Base', data: results.map(()=>+(bazResult/divider).toFixed(1)),
          type:'line', borderColor:'#1a1a1a', borderWidth:2, pointRadius:4,
          pointBackgroundColor:'#1a1a1a', fill:false, tension:0 },
      ]
    },
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
        tooltip:{ callbacks:{ label: c => c.dataset.label+': '+c.raw+suffix } }
      },
      scales:{
        x:{ title:{display:true,text:metricLabel,font:{size:11}}, grid:{color:'rgba(0,0,0,0.05)'} },
        y:{ grid:{display:false} }
      }
    }
  });

  // Table
  const tbody = document.getElementById('senTableBody');
  if(!tbody) return;
  const fmtV = (item,v) => item.unit==='₺' ? '€'+Math.round(v/(V.eurKur ?? 50)).toLocaleString('en-US') : Math.round(v).toLocaleString('tr-TR');
  tbody.innerHTML = results.map(r => {
    const bazFmt = fmt(bazResult);
    const minFmt = fmt(r.minR);
    const maxFmt = fmt(r.maxR);
    const minDiff= r.minR - bazResult;
    const maxDiff= r.maxR - bazResult;
    const minCls = isAy ? (minDiff<0?'pc':'nc') : (minDiff<0?'nc':'pc');
    const maxCls = isAy ? (maxDiff<0?'pc':'nc') : (maxDiff>0?'pc':'nc');
    const sign = v => v>=0?'+':'';
    return `<tr>
      <td>${r.label}</td>
      <td>${fmtV(r,r.baz)}</td>
      <td>${fmtV(r,r.minV)}</td>
      <td class="${minCls}">${minFmt} <span style="font-size:10px;opacity:0.7;">(${sign(isAy?-minDiff:minDiff)}${isAy?Math.abs(minDiff).toFixed(0):(minDiff/1000).toFixed(0)}${isAy?' months':'K'})</span></td>
      <td>${fmtV(r,r.maxV)}</td>
      <td class="${maxCls}">${maxFmt} <span style="font-size:10px;opacity:0.7;">(${sign(isAy?-maxDiff:maxDiff)}${isAy?Math.abs(maxDiff).toFixed(0):(maxDiff/1000).toFixed(0)}${isAy?' months':'K'})</span></td>
      <td style="font-weight:700;">${isAy?Math.abs(r.maxR-r.minR).toFixed(0)+' months':ff(Math.abs(r.maxR-r.minR))}</td>
    </tr>`;
  }).join('');
}


function initMerkezRampa(sehir) {
  initMerkezRampaChart(sehir);
  renderMerkezRampaChart(sehir);
}

function initMerkezRampaChart(sehir) {
  const canvas = document.getElementById(sehir + 'RampaChartCanvas');
  if (!canvas || canvas._rampaInit) return;
  canvas._rampaInit = true;
  var dragging = false;

  function getIdxVal(e) {
    var rect = canvas.getBoundingClientRect();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    var x = clientX - rect.left;
    var y = clientY - rect.top;
    var W = canvas.width || canvas.offsetWidth || 280;
    var H = canvas.height || 80;
    var padTop = 14, padBot = 12;
    var idx = Math.min(11, Math.max(0, Math.floor(x / (W / 12))));
    var pct = 1 - Math.max(0, Math.min(1, (y - padTop) / (H - padTop - padBot)));
    var val = Math.max(0, Math.min(200, Math.round(pct * 100)));
    return { idx: idx, val: val };
  }

  function onDown(e) {
    if (V[sehir + 'UseIst']) return;
    dragging = true;
    var r = getIdxVal(e);
    V[sehir + 'Rampa'][r.idx] = r.val;
    renderMerkezRampaChart(sehir);
    e.preventDefault();
  }
  function onMove(e) {
    if (!dragging) return;
    var r = getIdxVal(e);
    V[sehir + 'Rampa'][r.idx] = r.val;
    renderMerkezRampaChart(sehir);
    e.preventDefault();
  }
  function onUp() {
    if (!dragging) return;
    dragging = false;
    buildProjection();
    localStorage.setItem('osteoid_V', JSON.stringify(V));
  }

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('touchstart', onDown, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup', onUp);
  document.addEventListener('touchend', onUp);
}

function updMerkezRampa(sehir, i, v) {
  if (V[sehir+'UseIst']) return;
  V[sehir+'Rampa'][parseInt(i)] = parseInt(v);
  const el = document.getElementById('mrv_'+sehir+'_'+i);
  if (el) el.textContent = v;
  renderMerkezRampaChart(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderMerkezRampaChart(sehir) {
  const canvas = document.getElementById(sehir + 'RampaChartCanvas');
  if (!canvas) return;
  const rampa = V[sehir + 'Rampa'] || [];
  const color = sehir === 'izmir' ? '#1D9E75' : '#534AB7';
  const useIst = V[sehir + 'UseIst'];
  const W = canvas.offsetWidth || 280;
  const H = 80;
  canvas.width = W;
  canvas.height = H;
  canvas.style.cursor = useIst ? 'default' : 'ns-resize';
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  const max = Math.max.apply(null, rampa.concat([30]));
  const chartMax = Math.ceil(max * 1.15);
  const n = 12;
  const slotW = W / n;
  const barW = slotW * 0.65;
  const padTop = 14, padBot = 12;
  rampa.forEach(function(v, i) {
    const x = i * slotW + (slotW - barW) / 2;
    const barH = Math.max(2, Math.round((v / chartMax) * (H - padTop - padBot)));
    const y = H - padBot - barH;
    ctx.fillStyle = color;
    ctx.globalAlpha = useIst ? 0.5 : 0.8;
    ctx.fillRect(x, y, barW, barH);
    ctx.globalAlpha = 1;
    if (v > 0) {
      ctx.fillStyle = useIst ? '#aaa' : color;
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(v, x + barW / 2, y - 2);
    }
    ctx.fillStyle = '#aaa';
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Mo' + (i + 1), x + barW / 2, H - 1);
  });
  if (!useIst) {
    ctx.fillStyle = '#bbb';
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('↕ drag', W - 2, padTop);
  }
}

function updMerkezRampaOran(sehir, val) {
  const oran = parseFloat(val);
  V[sehir + 'RampaOran'] = oran;
  const valEl = document.getElementById(sehir + 'RampaOranVal');
  if (valEl) valEl.textContent = '×' + oran.toFixed(2);
  V[sehir + 'Rampa'] = (V.korse || []).map(function(v) { return Math.max(1, Math.round(v * oran)); });
  initMerkezRampa(sehir);
  renderMerkezRampaChart(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

// Manual "opening month" slider shared by every satellite that doesn't use
// Izmir's auto-trigger mechanism — Ankara (Year 2) and Bursa/Gaziantep
// (Year 3, one wave later). The opening year is fixed per city here since
// there's no dynamic way to derive it generically from V.
const _MERKEZ_ACILIS_YIL = { ankara: 2, bursa: 3, gaziantep: 3 };
function svMerkezAcilisAy(sehir, val) {
  val = parseInt(val);
  V[sehir + 'AcilisAy'] = val;
  const vl = document.getElementById(sehir + 'AcilisAyVal');
  if (vl) vl.textContent = 'Year ' + (_MERKEZ_ACILIS_YIL[sehir] || 2) + ' Month ' + val;
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function toggleMerkez(sehir, aktif) {
  V[sehir+'Aktif'] = aktif;
  // Rampa wrap
  const rWrap = document.getElementById(sehir+'RampaWrap');
  if (rWrap) rWrap.style.display = aktif ? '' : 'none';
  // Yıl 5 hedef slider
  const hWrap = document.getElementById(sehir+'HedefWrap');
  if (hWrap) hWrap.style.display = aktif ? '' : 'none';
  // Merkez KPI güncelle
  const mk = document.getElementById('y2MerkezKpi');
  if (mk) {
    const aktifler = ['Istanbul'];
    if (V.izmirAktif) aktifler.push('Izmir');
    if (V.ankaraAktif) aktifler.push('Ankara');
    mk.textContent = aktifler.join(' + ');
  }
  if (aktif) { initMerkezRampa(sehir); }
  else { V[sehir+'UseIst'] = false; const cb = document.getElementById(sehir+'IstToggle'); if(cb) cb.checked = false; const ow = document.getElementById(sehir+'OranWrap'); if(ow) ow.style.display='none'; }
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function _updateKurulumOzet(sehir) {
  const ozet = document.getElementById(sehir+'KurulumOzet');
  if (!ozet) return;
  const top = getMerkezKurulum(sehir);
  const eurKur = V.eurKur ?? 50;
  const useIst = V[sehir+'UseIstKurulum'] !== false;
  const oran   = V[sehir+'KurulumOran'] || 1.0;
  const label  = useIst ? 'IST ×' + parseFloat(oran).toFixed(2) + ': ' : 'Custom: ';
  ozet.innerHTML = label + '<span id="'+sehir+'KurulumTop">~€' + Math.round(top/eurKur/1000) + 'K</span>';
}

function toggleIstKurulum(sehir, useIst) {
  V[sehir+'UseIstKurulum'] = useIst;
  const wrap     = document.getElementById(sehir+'KurulumSliders');
  const oranWrap = document.getElementById(sehir+'KurulumOranWrap');
  if (wrap) wrap.style.display = useIst ? 'none' : 'flex';
  if (oranWrap) oranWrap.style.display = useIst ? 'flex' : 'none';
  if (useIst) {
    const oran = V[sehir+'KurulumOran'] || 1.0;
    const sl = document.getElementById('s_'+sehir+'KurulumOran');
    const vl = document.getElementById(sehir+'KurulumOranVal');
    if (sl) sl.value = oran;
    if (vl) vl.textContent = '×'+parseFloat(oran).toFixed(2);
  }
  _updateKurulumOzet(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function updMerkezKurulumOran(sehir, val) {
  V[sehir+'KurulumOran'] = parseFloat(val);
  const vl = document.getElementById(sehir+'KurulumOranVal');
  if (vl) vl.textContent = '×'+parseFloat(val).toFixed(2);
  _updateKurulumOzet(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function getMerkezKurulum(sehir) {
  const useIst = V[sehir+'UseIstKurulum'] !== false;
  const m2 = gv('m2');
  const _ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
  // Printer capex sized to THIS satellite's own full-capacity monthly volume,
  // not Istanbul's Year-1 count. Satellites are 100% B2C — the model routes no
  // B2B to satellites — so printer sizing passes 0 B2B.
  const _satFullMonthly = gv('pazarTR') * satMarketShare(sehir) * ((V[sehir+'HedefPay']||0)/100) / 12; // regional catchment (CM-1)
  const _satPrinters = clinicCapacityProfile(_satFullMonthly, 0).printers;
  const _satPrinterCapex = (V.printerAktif !== false && !_ekipmanOsteoidden) ? _satPrinters * (V.printerEurFiyat||35000) * (V.eurKur ?? 50) : 0;
  if (useIst) {
    const oran = V[sehir+'KurulumOran'] || 1.0;
    const _rM = (V.robotKolAktif && !_ekipmanOsteoidden) ? (V.robotKolEurFiyat||30000)*(V.eurKur ?? 50) : 0;
    return (gv('kira') + gv('depozito') + gv('emlakci') + m2*gv('tadilatM2') + m2*gv('dekoM2') + gv('mobilya') + gv('ruhsat') + _satPrinterCapex + _rM) * oran;
  } else {
    const kira     = V[sehir+'KurulumKira']     || gv('kira');
    const depozito = V[sehir+'KurulumDepozito'] || gv('depozito');
    const tadilat  = V[sehir+'KurulumTadilat']  || gv('tadilatM2');
    const deko     = V[sehir+'KurulumDeko']     || gv('dekoM2');
    const mobilya  = V[sehir+'KurulumMobilya']  || gv('mobilya');
    // Custom branch previously had ZERO printer capex (its ₺600K equipment
    // field can't cover even one €35K printer) — add the same profile-sized
    // printer term here so a self-built satellite still budgets its printers.
    return kira + depozito + gv('emlakci') + m2*tadilat + m2*deko + mobilya + gv('ruhsat') + _satPrinterCapex;
  }
}


function svMerkez(key, slId, el) {
  const raw = (el.textContent||'').replace(/\./g,'').replace(',','.');
  const val = parseFloat(raw);
  if (!isNaN(val)) {
    V[key] = val;
    const sl = document.getElementById(slId);
    if (sl) sl.value = val;
    buildProjection();
    localStorage.setItem('osteoid_V', JSON.stringify(V));
  } else {
    const v = V[key] || 0;
    el.textContent = v >= 1000 ? v.toLocaleString('tr-TR') : String(v);
  }
}


function updateMerkezGiderNotu(sehir) {
  const notu = document.getElementById(sehir + 'GiderNotu');
  if (!notu) return;
  const useIst = V[sehir + 'UseIstGider'] !== false;
  if (!useIst) { notu.textContent = 'Custom expenses'; return; }
  const rows = window._lastRows || [];
  const yillik = rows.reduce(function(s, r) { return s + (r.sabitGider || 0); }, 0);
  if (yillik > 0) {
    const ay = Math.round(yillik / 12).toLocaleString('tr-TR');
    notu.textContent = 'IST base — €' + Math.round(parseInt(ay.replace(/\./g,''))/(V.eurKur ?? 50)) + '/month';
  } else {
    notu.textContent = 'IST base';
  }
}

function toggleIstGider(sehir, useIst) {
  V[sehir+'UseIstGider'] = useIst;
  const wrap = document.getElementById(sehir+'GiderSliders');
  if (wrap) wrap.style.display = useIst ? 'none' : '';
  updateMerkezGiderNotu(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}


// getMerkezGelir() removed (audit F14) — a retired satellite-revenue path that
// used the abandoned esikDestek threshold staffing + kira×0.8 fallback. Nothing
// calls it anymore: the live model sizes satellites via clinicCapacityProfile +
// _satRampFrac in buildProjection(), and the Methodology / Formula-Validation
// pages now read those live rows (window._lastProjRows) — see F10.


function toggleIstRampa(sehir, useIst) {
  V[sehir + 'UseIst'] = useIst;
  const oranWrap = document.getElementById(sehir + 'OranWrap');
  if (useIst) {
    const oran = V[sehir + 'RampaOran'] || 0.4;
    V[sehir + 'Rampa'] = (V.korse || []).map(function(v) { return Math.max(1, Math.round(v * oran)); });
    const slider = document.getElementById('s_' + sehir + 'RampaOran');
    if (slider) slider.value = oran;
    const valEl = document.getElementById(sehir + 'RampaOranVal');
    if (valEl) valEl.textContent = '×' + oran.toFixed(2);
    if (oranWrap) oranWrap.style.display = '';
  } else {
    if (oranWrap) oranWrap.style.display = 'none';
  }
  initMerkezRampa(sehir);
  buildProjection();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}


function updateValuationTable(rows, tNet) {
  const eurKur = V.eurKur ?? 50;
  // Year 5 EBITDA (FAVÖK) — genuine EBITDA from the metric ladder (opProfit +
  // expensed-capex add-back), investor scope; not totals[4], which is operating
  // profit and would borrow the EBITDA name (PROMPT 7). Reads the same
  // one-cycle-behind globals this function already used for totals.
  const t3 = window._lastTotals || [];
  const _vtLadder = metricLadder('investor');
  const y5Favok = _vtLadder ? _vtLadder.ebitda[4] : (t3[4] || t3[2] || 0); // €K

  // Y1 model verisi
  const y1BrutGelir = rows.reduce((s,r) => s + (r.gelirBrut||0), 0);
  const y1GelirNet  = rows.reduce((s,r) => s + (r.gelirNet||0), 0); // hekim/malzeme/royalty sonrası, opex öncesi

  // Ürün brüt marjı: brüt gelirin opex öncesi ne kadarı kalıyor (ürün mix sabit varsayımı)
  // Bu oran büyüme ile değişmez — fiyat ve komisyon yapısı aynı kalır
  const productMargin = (y1BrutGelir > 0 && y1GelirNet > 0) ? y1GelirNet / y1BrutGelir : 0.65;

  // Olgunluk dönemi opex: Y1 son çeyrek aylık ort. × 12
  // (Son 3 ay startup maliyetlerinden arınmış, daha temsili)
  const q4OpexAy = rows.slice(-3).reduce((s,r) => s + Math.abs(r.gider||0), 0) / 3;
  const q4OpexYilEurK = Math.round(q4OpexAy * 12 / eurKur / 1000);

  // Active centres — all five count (audit F11). No automatic multi-centre
  // multiple premium any more (review 4-A6): the old hidden +2× made the
  // table labelled 4×/6×/9× actually compute 6×/8×/11×. A premium, if wanted,
  // is the explicit "multi-centre premium" slider inside exitMultSet().
  const aktifMerkez = 1 + (V.izmirAktif?1:0) + (V.ankaraAktif?1:0) + (V.bursaAktif?1:0) + (V.gaziantepAktif?1:0);
  const _ms = exitMultSet();

  // Y5 Ciro = (Y5 FAVÖK + Y5 tahmini opex) / ürün brüt marjı
  // Mantık: FAVÖK = Ciro × ürün_marjı − opex  →  Ciro = (FAVÖK + opex) / ürün_marjı
  // Y5 opex tahmini: olgunluk opex × merkez sayısı (sabit maliyet ağırlıklı yapı)
  const y5OpexEstEurK = q4OpexYilEurK * aktifMerkez;
  const y5Ciro = productMargin > 0 ? Math.round((y5Favok + y5OpexEstEurK) / productMargin) : 0;

  // FAVÖK marjı tüm senaryolar için aynı (Ciro ve FAVÖK senaryo bağımsız)
  const favokMarj = y5Ciro > 0 ? Math.round(y5Favok / y5Ciro * 100) : 0;

  const scenarios = [
    { id:'c', mult: _ms.low },
    { id:'b', mult: _ms.base },
    { id:'o', mult: _ms.high },
  ];
  // Pre-tax base for the tax / net-profit rows is OPERATING profit, not EBITDA
  // (EBITDA sits above pre-tax by the year's capex, so taxing EBITDA would
  // overstate tax). EV and margin ride on EBITDA; tax and net kâr on opProfit.
  // At defaults Year-5 capex is 0 so the two coincide. PROMPT 7.
  const y5OpProfit = _vtLadder ? _vtLadder.opProfit[4] : y5Favok; // €K
  scenarios.forEach(s => {
    const evEur = y5Favok * s.mult;  // €K — EV on EBITDA
    const evM   = (evEur / 1000).toFixed(2);  // €M
    const set = (id, val) => { const e = document.getElementById(id); if(e) e.textContent = val; };
    const vergiOrani = (V.kvOrani ?? 25) / 100;
    const vergiEur   = Math.round(y5OpProfit * vergiOrani);  // €K — tax on pre-tax operating profit
    const netKarEur  = y5OpProfit - vergiEur;
    set('vt_ciro_'  + s.id, y5Ciro  > 0 ? '~€' + (y5Ciro/1000).toFixed(2)   + 'M' : '—');
    set('vt_favok_' + s.id, y5Favok > 0 ? '~€' + (y5Favok/1000).toFixed(2)  + 'M' : '—');
    set('vt_marj_'  + s.id, favokMarj > 0 ? '%' + favokMarj                          : '—');
    set('vt_vergi_' + s.id, vergiEur  > 0 ? '-€' + (vergiEur/1000).toFixed(2)  + 'M' : '—');
    set('vt_netkâr_'+ s.id, netKarEur > 0 ? '~€' + (netKarEur/1000).toFixed(2) + 'M' : '—');
    set('vt_ev_'    + s.id, evEur   > 0 ? '~€' + evM + 'M' : '—');
    set('vt_mult_'  + s.id, s.mult + '× EV/EBITDA');
    set('vt_lowDeltaLbl', V.exitMultLowDelta ?? 2);
    set('vt_highDeltaLbl', V.exitMultHighDelta ?? 3);
    const notEl = document.getElementById('vt_not_' + s.id);
    if (notEl) {
      notEl.textContent = notEl.dataset.base + ' · ' + aktifMerkez + (aktifMerkez === 1 ? ' centre' : ' centres') + (_ms.premium ? ' · incl. +' + _ms.premium + '× multi-centre premium (slider)' : '');
    }
  });
  if (typeof renderGetiriTable === 'function') renderGetiriTable();
}


function recalc() {
  const royaltyTRY = gv('royaltyEur') * (V.eurKur ?? 50);  // €royalty → ₺
  const mutfakV=gv('mutfak'), stopajV=gv('stopaj');
  const genelGiderV=gv('genelGider');
  const aylikKira=gv('kira'), elektrik=gv('elektrik'), internet=gv('internet');
  const sarf=gv('sarf'), ortotistM=gv('ortotistM'), sgkC=gv('sgkCarpan');
  const ortoBrut=ortotistM*sgkC;
  const operatorBrut = gv('operatorM') * sgkC;
  const ymmM = gv('ymmM');

  // Intern / Support Staff / Junior Orthotist only draw a salary once monthly brace
  // volume clears their threshold (esikStajyer1/esikDestek/esikStajyer2) — computeYear1
  // already gates this correctly for the P&L; this reference run is so the Fixed Costs
  // display (indicator boxes, bar chart, monthly KPI) shows the SAME gated reality
  // instead of always showing the full salary as if these roles were active every month.
  // Reference point = Month 12 (the ramp's most mature month) — "what would I be
  // paying right now, at the end of Year 1."
  const _refRow = computeYear1(V).rows[11];
  const _refKorse = V.korse ? V.korse[V.korse.length-1] : 0;
  // Interns (esikStajyer1/esikStajyer2) stay threshold-gated. Support staff is
  // no longer threshold-gated (esikDestek) — it's capacity-derived by the
  // time-and-motion engine, read from the Month-12 reference row below.
  const _esik1 = V.esikStajyer1 ?? 15, _esik2 = V.esikStajyer2 ?? 76;
  const _refDestekSay = _refRow.destekSayisi || 0;
  const stajyerBrut = _refRow.ayStajyer;
  const destekBrutBar = _refRow.ayDestek;
  const staj2Brut = _refRow.ayStaj2;
  const sabitBase = aylikKira+elektrik+internet+sarf+ortoBrut+operatorBrut+mutfakV+genelGiderV+ymmM+stajyerBrut+destekBrutBar+staj2Brut + Math.min(gv('hoCostY1Eur'), V.hoCapEur ?? Infinity)*(V.eurKur ?? 50)/12; // Month 12 reference (incl. head-office add-on, BC-5)
  document.getElementById('sabitAylik').textContent=ff(-sabitBase);
  renderSabitBar(aylikKira, elektrik, internet, sarf, ortoBrut, operatorBrut, stajyerBrut, destekBrutBar, mutfakV, genelGiderV, ymmM, staj2Brut);

  // Brüt maliyet göstergeleri — Operator/Expert Orthotist are always active (Month 1,
  // no threshold); Intern/Junior Orthotist/Support Staff show "Not active yet" below
  // their threshold instead of a full gross salary they aren't actually drawing.
  const _sgkC = gv('sgkCarpan');
  const brutPairsFixed = [
    ['brutOperator',  gv('operatorM')],
    ['brutOrtotist',  gv('ortotistM')],
  ];
  brutPairsFixed.forEach(([id, net]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = Math.round(net * _sgkC).toLocaleString('tr-TR');
  });
  const brutPairsGated = [
    ['brutStajyer',   gv('stajyerM'),  _refKorse >= _esik1, _esik1],
    ['brutYeniMezun', gv('stajyer2M'), _refKorse >= _esik2, _esik2],
  ];
  brutPairsGated.forEach(([id, net, aktif, esik]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (aktif) {
      el.textContent = Math.round(net * _sgkC).toLocaleString('tr-TR');
      el.style.color = '';
    } else {
      el.textContent = 'Not active yet (needs ≥' + esik + '/mo, currently ' + _refKorse + ')';
      el.style.color = '#c94f2a';
    }
  });
  // Support staff — capacity-derived (time & motion), no longer esikDestek-gated.
  const _brutDestekEl = document.getElementById('brutDestek');
  if (_brutDestekEl) {
    if (_refDestekSay > 0) {
      _brutDestekEl.textContent = (_refDestekSay > 1 ? _refDestekSay + ' × ' : '') + Math.round(gv('destekM') * _sgkC).toLocaleString('tr-TR') + (_refDestekSay > 1 ? '' : '') ;
      _brutDestekEl.style.color = '';
    } else {
      _brutDestekEl.textContent = 'None at current volume';
      _brutDestekEl.style.color = '#c94f2a';
    }
  }
  // Threshold badges next to each role's title — interns gated; support badge
  // reflects the capacity-derived count instead of a threshold.
  [['esikLabel1', _refKorse >= _esik1], ['esikLabel2', _refDestekSay > 0], ['esikLabel3', _refKorse >= _esik2]].forEach(([id, aktif]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.background = aktif ? '#e8f8f0' : '#f5e0d8';
    el.style.color = aktif ? '#1D9E75' : '#c94f2a';
  });

  // Hekim payı ₺ gösterimi
  const _danisPairs = [
    ['stdRl',     gv('korseF_stdRl')],
    ['delik',     gv('korseF_delik')],
    ['sens',      gv('korseF_sens')],
    ['sensDelik', gv('korseF_sensDelik')],
  ];
  _danisPairs.forEach(([k, fiyat]) => {
    const sciTL = Math.round(fiyat * gv('feeSci_' + k) / 100);
    const eduTL = Math.round(fiyat * gv('feeEdu_' + k) / 100);
    const libTL = Math.round(fiyat * gv('feeLib_' + k) / 100);
    const elSci = document.getElementById('sciTL_' + k);
    if (elSci) elSci.textContent = sciTL.toLocaleString('tr-TR');
    const elEdu = document.getElementById('eduTL_' + k);
    if (elEdu) elEdu.textContent = eduTL.toLocaleString('tr-TR');
    const elLib = document.getElementById('libTL_' + k);
    if (elLib) elLib.textContent = libTL.toLocaleString('tr-TR');
    const elCiro = document.getElementById('ciroTL_' + k);
    const elCiroB2B = document.getElementById('ciroB2BTL_' + k);
    if (elCiro || elCiroB2B) {
      const royaltyTRY = gv('royaltyEur') * (V.eurKur ?? 50);
      const mal = gv('mal_' + k);
      // Cutting fee (kesim) applies to delik/sensDelik braces only — same
      // condition computeYear1() uses for kesimTop inside baskiTop, and the
      // B2B card below already applied; the retail card was missing it.
      const kesimTRY = (k === 'delik' || k === 'sensDelik') ? gv('kesimEurPer') * (V.eurKur ?? 50) : 0;
      if (elCiro) {
        const ciro = fiyat - sciTL - eduTL - libTL - mal - kesimTRY - royaltyTRY;
        elCiro.textContent = ciro.toLocaleString('tr-TR');
        const elEur = document.getElementById('ciroEur_' + k);
        if (elEur) elEur.textContent = Math.round(ciro / (V.eurKur ?? 50)).toLocaleString('en-US');
      }
      if (elCiroB2B) {
        const fB2B = gv('korseFB2B_' + k);
        const sciB2B = Math.round(fB2B * gv('feeSci_' + k) / 100);
        const eduB2B = Math.round(fB2B * gv('feeEdu_' + k) / 100);
        const libB2B = Math.round(fB2B * gv('feeLib_' + k) / 100);
        const ciroB2B = fB2B - sciB2B - eduB2B - libB2B - mal - kesimTRY - royaltyTRY;
        elCiroB2B.textContent = ciroB2B.toLocaleString('tr-TR');
        const elB2BEur = document.getElementById('ciroB2BEur_' + k);
        if (elB2BEur) elB2BEur.textContent = Math.round(ciroB2B / (V.eurKur ?? 50)).toLocaleString('en-US');
      }
    }
    const elFiyatEur = document.getElementById('eurFiyat_' + k);
    if (elFiyatEur) elFiyatEur.textContent = Math.round(fiyat / (V.eurKur ?? 50)).toLocaleString('en-US');
  });



  const Y1 = computeYear1(V);
  const { tadilatTop, dekoTopV, kurulumTop, printerMaliyet, robotKolMaliyet,
          rows, tGelir, tGider, tNet, tKorse, cumKorse, basAy, pozAy,
          fStdRl, fDelik, fSens, fSD, mStdRl, mDelik, mSens, mSD } = Y1;

  // Same 12 monthly sabitGider values the P&L uses — not a separate estimate.
  document.getElementById('sabitYillik').textContent=ff(-rows.reduce((s,r)=>s+(r.sabitGider||0),0));

  const m2=gv('m2'), tm2=gv('tadilatM2'), dm2=gv('dekoM2');
  document.getElementById('tadilatTop').textContent='€'+Math.round(tadilatTop/(V.eurKur ?? 50)).toLocaleString('en-US');
  document.getElementById('dekoTop').textContent='€'+Math.round(dekoTopV/(V.eurKur ?? 50)).toLocaleString('en-US');
  document.getElementById('tadilatDekoTop').textContent=ff(-(tadilatTop+dekoTopV));
  document.getElementById('m2d').textContent=m2;
  document.getElementById('tm2d').textContent=tm2.toLocaleString('tr-TR');
  document.getElementById('dm2d').textContent=dm2.toLocaleString('tr-TR');

  _refreshPrinterDisplay();
  renderCapacityCard();
  svRobotKol();
  document.getElementById('kurulumTop').textContent=ff(kurulumTop);
  renderKurulumDonut(gv('kira'),gv('depozito'),gv('emlakci'),tadilatTop,dekoTopV,gv('mobilya')+printerMaliyet+robotKolMaliyet,gv('ruhsat'));
  window._lastInvestBreakdown = renderInvestBreakdown(kurulumTop, rows);
  window._lastRegister = buildRegister(V);
  refreshAgreementTerms();

  // ── B2B Gelir ──────────────────────────────────────────────────────────────
  const fB2Rl = gv('korseFB2B_stdRl');
  const fB2D = gv('korseFB2B_delik'), fB2S = gv('korseFB2B_sens'), fB2SD = gv('korseFB2B_sensDelik');
  const kesimTRYb2 = gv('kesimEurPer') * (V.eurKur ?? 50);
  let tGelirB2B = 0;
  const rowsB2B = [];
  if (!V.korseB2B) V.korseB2B = [0,0,0,0,0,0,0,0,0,0,0,0];
  const _mixB2BEff = upgradeRows('b2b'); // SR-1: continuous upgrade path (B2B)
  for (let i2 = 0; i2 < 12; i2++) {
    const kB2 = V.korseB2B[i2] || 0;
    const rawB2 = (_mixB2BEff[i2] || [100,0,0,0]).map((v,pi) => i2 < (V.aktifAy[pi]||0) ? 0 : v);
    const totB2 = rawB2.reduce((s,v)=>s+v,0) || 100;
    const kB2u = rawB2.map(v => Math.round(kB2 * v / totB2));
    // Same largest-remainder fix as the clinic loop — never dump rounding
    // residue onto a product whose aktifAy hasn't started yet.
    let biggestIdxB2 = 0;
    for (let pi = 1; pi < rawB2.length; pi++) { if (rawB2[pi] > rawB2[biggestIdxB2]) biggestIdxB2 = pi; }
    kB2u[biggestIdxB2] = Math.max(0, kB2u[biggestIdxB2] + (kB2 - kB2u.reduce((s,v)=>s+v,0)));
    const brutB2 = kB2u[0]*fB2Rl + kB2u[1]*fB2D + kB2u[2]*fB2S + kB2u[3]*fB2SD;
    const feeSciB2 = kB2u[0]*fB2Rl*(gv('feeSci_stdRl')/100) + kB2u[1]*fB2D*(gv('feeSci_delik')/100) + kB2u[2]*fB2S*(gv('feeSci_sens')/100) + kB2u[3]*fB2SD*(gv('feeSci_sensDelik')/100);
    const feeEduB2 = kB2u[0]*fB2Rl*(gv('feeEdu_stdRl')/100) + kB2u[1]*fB2D*(gv('feeEdu_delik')/100) + kB2u[2]*fB2S*(gv('feeEdu_sens')/100) + kB2u[3]*fB2SD*(gv('feeEdu_sensDelik')/100);
    const feeLibB2 = kB2u[0]*fB2Rl*(gv('feeLib_stdRl')/100) + kB2u[1]*fB2D*(gv('feeLib_delik')/100) + kB2u[2]*fB2S*(gv('feeLib_sens')/100) + kB2u[3]*fB2SD*(gv('feeLib_sensDelik')/100);
    const baskiB2 = kB2u[0]*mStdRl + kB2u[1]*(mDelik+kesimTRYb2) + kB2u[2]*mSens + kB2u[3]*(mSD+kesimTRYb2);
    const royB2 = kB2 * royaltyTRY;
    const netB2 = brutB2 - feeSciB2 - feeEduB2 - feeLibB2 - baskiB2 - royB2;
    tGelirB2B += netB2;
    rowsB2B.push({ ay: i2+1, korse: kB2, k: kB2u, gelirBrut: brutB2, feeSciB2B: feeSciB2, feeEduB2B: feeEduB2, feeLibB2B: feeLibB2, baskiTop: baskiB2, royaltyTop: royB2, gelirNet: netB2 });
  }

  // Net marj: gerçek yıllık brüt gelir vs net gelir oranı (ağırlıklı)
  const tBrut = rows.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const brütMarj = tBrut > 0 ? Math.round(tGelir / tBrut * 100) : 0;
  // Kümülatif pozitif tahmini (12 ayda ulaşılamazsa)
  let pozAyLabel, pozAyClass, pozAySub = '';
  if (pozAy) {
    pozAyLabel = 'Month ' + pozAy; pozAyClass = 'pos';
  } else {
    const tahmin = _tahminPozAy(rows);
    if (tahmin) {
      pozAyLabel = '~Month ' + tahmin + ' (estimated)'; pozAyClass = 'neg';
      pozAySub = 'Linear trend past Month 12 · Istanbul clinic only';
    } else {
      pozAyLabel = 'Not reached'; pozAyClass = 'neg';
      pozAySub = 'Trend not yet improving';
    }
  }
  const _royTL = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const _ksmTL = rows.reduce((s,r)=>s+(r.kesimTop||0),0);
  const _sciTL = rows.reduce((s,r)=>s+(r.feeSci||0),0);
  const _eduTL = rows.reduce((s,r)=>s+(r.feeEdu||0),0);
  const _libTL = rows.reduce((s,r)=>s+(r.feeLib||0),0);
  document.getElementById('kpiGrid').innerHTML=[
    {label:'Total braces — clinic (excl. B2B)', val:tKorse+' units',                            sub:'',                 c:'neu'},
    {label:'Clinic net revenue after doctor fees & materials (year)', val:feEur(tGelir),                              sub:ffTRY(tGelir),         c:tGelir>=0?'pos':'neg'},
    {label:'B2B net revenue after doctor fees & materials (year)', val:feEur(tGelirB2B),                           sub:ffTRY(tGelirB2B),      c:tGelirB2B>0?'pos':'neu'},
    {label:'Cumulative year-end',       val:feEur(rows[11].cumBudget),                  sub:ffTRY(rows[11].cumBudget), c:rows[11].cumBudget>=0?'pos':'neg'},
    {label:'Monthly break-even',        val:basAy?'Month '+basAy:'Not reached',         sub:'',                 c:basAy?'pos':'neg'},
    {label:'Cumulative positive',       val:pozAyLabel,                                 sub:pozAySub,            c:pozAyClass},
    {label:'Total Committed (Stage 1+2)', val:'€'+Math.round(window._lastInvestBreakdown.investorTicketEur).toLocaleString('en-US'), sub:'', c:'neg'},
    {label:'Setup cost',                val:feEur(kurulumTop),                          sub:ffTRY(kurulumTop),     c:'neg'},
    {label:'Scientific study fee',      val:feEur(-_sciTL),                             sub:ffTRY(-_sciTL),        c:'neg'},
    {label:'Education fee',             val:feEur(-_eduTL),                             sub:ffTRY(-_eduTL),        c:'neg'},
    {label:'Library fee',               val:feEur(-_libTL),                             sub:ffTRY(-_libTL),        c:'neg'},
    {label:'Royalty / year',            val: gv('royaltyEur')===0 ? '— (not applied)' : '-€'+Math.round(_royTL/(V.eurKur ?? 50)).toLocaleString('en-US'), sub: gv('royaltyEur')===0 ? '' : ffTRY(-_royTL), c: gv('royaltyEur')===0 ? 'neu' : 'neg'},
    {label:'Osteoid Inc. royalty',      val:'€'+Math.round(_royTL/(V.eurKur ?? 50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Cutting / Osteoid Inc.',    val:'€'+Math.round(_ksmTL/(V.eurKur ?? 50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Net margin / brace',        val:brütMarj+'%',                               sub:'',                 c:'neu'},
  ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div>${k.sub?`<div style="font-size:10px;color:#aaa;margin-top:2px;line-height:1.2;">${k.sub}</div>`:''}</div>`).join('');

  // Show orthotist/support headcount columns only when the capacity engine
  // ever needs more than one of either in Year 1 (on defaults both stay 1, so
  // the table keeps its original shape). The two extra columns shift the B2B
  // section's colspans, handled below.
  const showStaffCols = rows.some(r => (r.ortotistSayisi||0) > 1 || (r.destekSayisi||0) > 1);
  const staffHead = showStaffCols ? '<th>Ortho.</th><th>Support</th>' : '';
  const b2bSepCols = showStaffCols ? 24 : 22;
  const b2bMidCols = showStaffCols ? 10 : 8;
  const th=`<thead><tr>
    <th>Month</th>
    <th style="color:#D85A30;">Std-Rep.</th>
    <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
    <th>Gross Rev.</th><th>Sci. Study Fee</th><th>Education Fee</th><th>Library Fee</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    <th>Fixed</th><th>Intern</th><th>Advertising</th><th>Kitchen</th><th>Withholding</th><th>Periodic/YMM</th><th>Printer</th>${staffHead}
    <th>Tot.Cost</th><th>Monthly Net</th><th>Cumulative</th>
  </tr></thead>`;
  const tb_rows=rows.map(r=>{
    const isBas=r.ay===basAy, isPoz=r.ay===pozAy, rc=isPoz?'r-cum':isBas?'r-bas':'';
    const kk=r.k||[r.korse,0,0,0];
    const donYmm = (r.kongre||0)+(r.ymmDon||0);
    return `<tr class="${rc}">
      <td>Month ${r.ay}${isBas?' ✓':''}${isPoz?' ★':''}</td>
      <td style="color:#D85A30;">${kk[0]||'—'}</td>
      <td style="color:#1D9E75;">${kk[1]||'—'}</td><td style="color:#534AB7;">${kk[2]||'—'}</td><td style="color:#D4537E;">${kk[3]||'—'}</td>
      <td>${ff(r.gelirBrut)}</td><td class="nc">${ff(-r.feeSci)}</td>
      <td class="nc">${ff(-r.feeEdu)}</td>
      <td class="nc">${ff(-r.feeLib)}</td>
      <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
      <td class="nc">${ff(-r.royaltyTop)}</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="nc">${ff(-r.sabitGider)}</td><td class="${r.ayStajyer?'nc':'zc'}">${r.ayStajyer?ff(-r.ayStajyer):'—'}</td><td class="nc">${ff(-r.reklamS)}</td>
      <td class="nc">${ff(-r.mutfakV)}</td>
      <td class="${r.ayStopaj?'nc':'zc'}">${r.ayStopaj?ff(-r.ayStopaj):'—'}</td>
      <td class="${donYmm?'nc':'zc'}">${donYmm?ff(-donYmm):'—'}</td><td class="${r.printerEkMaliyet?'nc':'zc'}">${r.printerEkMaliyet?ff(-r.printerEkMaliyet):'—'}</td>
      ${showStaffCols ? `<td>${r.ortotistSayisi||0}</td><td>${r.destekSayisi||0}</td>` : ''}
      <td class="nc">${ff(r.gider)}</td>
      <td class="${cls(r.net)}">${ff(r.net)}</td>
      <td class="${cls(r.cumBudget)}">${ff(r.cumBudget)}</td>
    </tr>`;
  }).join('');
  // Toplam satırı — tüm sütunlar
  const tSci       = rows.reduce((s,r)=>s+(r.feeSci||0),0);
  const tEdu       = rows.reduce((s,r)=>s+(r.feeEdu||0),0);
  const tLib       = rows.reduce((s,r)=>s+(r.feeLib||0),0);
  const tBaski     = rows.reduce((s,r)=>s+(r.baskiTop||0),0);
  const tRoyalty   = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const tSabit     = rows.reduce((s,r)=>s+(r.sabitGider||0),0);
  const tStajyer   = rows.reduce((s,r)=>s+(r.ayStajyer||0),0);
  const tReklam    = rows.reduce((s,r)=>s+(r.reklamS||0),0);
  const tMutfak    = rows.reduce((s,r)=>s+(r.mutfakV||0),0);
  const tStopaj    = rows.reduce((s,r)=>s+(r.ayStopaj||0),0);
  const tKongre    = rows.reduce((s,r)=>s+(r.kongre||0)+(r.ymmDon||0),0);
  const tPrinter   = rows.reduce((s,r)=>s+(r.printerEkMaliyet||0),0);
  const tpKk = rows.reduce((s,r)=>{const k=r.k||[0,0,0,0]; return s.map((v,j)=>v+k[j]);}, [0,0,0,0]);
  const topRow = `<tr style="background:#f0efe9;font-weight:700;">
    <td>Total</td>
    <td style="color:#D85A30;">${tpKk[0]}</td>
    <td style="color:#1D9E75;">${tpKk[1]}</td><td style="color:#534AB7;">${tpKk[2]}</td><td style="color:#D4537E;">${tpKk[3]}</td>
    <td>${ff(tBrut)}</td><td class="nc">${ff(-tSci)}</td>
    <td class="nc">${ff(-tEdu)}</td>
    <td class="nc">${ff(-tLib)}</td>
    <td class="nc">${ff(-tBaski)}</td><td class="nc">${ff(-tRoyalty)}</td>
    <td class="${cls(tGelir)}">${ff(tGelir)}</td>
    <td class="nc">${ff(-tSabit)}</td><td class="nc">${ff(-tStajyer)}</td><td class="nc">${ff(-tReklam)}</td>
    <td class="nc">${ff(-tMutfak)}</td><td class="nc">${ff(-tStopaj)}</td><td class="nc">${ff(-tKongre)}</td><td class="${tPrinter?'nc':'zc'}">${tPrinter?ff(-tPrinter):'—'}</td>
    ${showStaffCols ? `<td>${Math.max(...rows.map(r=>r.ortotistSayisi||0))}</td><td>${Math.max(...rows.map(r=>r.destekSayisi||0))}</td>` : ''}
    <td class="${cls(tGider)}">${ff(tGider)}</td>
    <td class="${cls(tNet)}">${ff(tNet)}</td>
    <td class="${cls(rows[11].cumBudget)}">${ff(rows[11].cumBudget)}</td>
  </tr>`;
  // B2B bölümü
  const b2bSep = `<tr style="background:#1a1a1a;color:#fff;font-size:10px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">
    <td colspan="${b2bSepCols}" style="padding:5px 8px;">B2B Channel</td></tr>`;
  const b2b_rows = rowsB2B.map(r => {
    const kk = r.k || [r.korse,0,0,0];
    return `<tr style="background:#f7f6ff;">
      <td>Month ${r.ay}</td>
      <td style="color:#D85A30;">${kk[0]||'—'}</td>
      <td style="color:#1D9E75;">${kk[1]||'—'}</td><td style="color:#534AB7;">${kk[2]||'—'}</td><td style="color:#D4537E;">${kk[3]||'—'}</td>
      <td>${ff(r.gelirBrut)}</td>
      <td class="nc">${ff(-r.feeSciB2B)}</td>
      <td class="nc">${ff(-r.feeEduB2B)}</td>
      <td class="nc">${ff(-r.feeLibB2B)}</td>
      <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
      <td class="nc">${ff(-r.royaltyTop)}</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc" colspan="${b2bMidCols}">—</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc">—</td>
    </tr>`;
  }).join('');
  const b2bKk = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0]);
  const b2bBrut  = rowsB2B.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const b2bSci = rowsB2B.reduce((s,r)=>s+(r.feeSciB2B||0),0);
  const b2bEdu = rowsB2B.reduce((s,r)=>s+(r.feeEduB2B||0),0);
  const b2bLib = rowsB2B.reduce((s,r)=>s+(r.feeLibB2B||0),0);
  const b2bBaski = rowsB2B.reduce((s,r)=>s+(r.baskiTop||0),0);
  const b2bRoy   = rowsB2B.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const b2bTopRow = `<tr style="background:#e8e6ff;font-weight:700;">
    <td>Total</td>
    <td style="color:#D85A30;">${b2bKk[0]}</td>
    <td style="color:#1D9E75;">${b2bKk[1]}</td><td style="color:#534AB7;">${b2bKk[2]}</td><td style="color:#D4537E;">${b2bKk[3]}</td>
    <td>${ff(b2bBrut)}</td>
    <td class="nc">${ff(-b2bSci)}</td>
    <td class="nc">${ff(-b2bEdu)}</td>
    <td class="nc">${ff(-b2bLib)}</td>
    <td class="nc">${ff(-b2bBaski)}</td>
    <td class="nc">${ff(-b2bRoy)}</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc" colspan="${b2bMidCols}">—</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc">—</td>
  </tr>`;
  const tb = '<tbody>' + tb_rows + topRow + (rowsB2B.length ? b2bSep + b2b_rows + b2bTopRow : '') + '</tbody>';
  const _mt = document.getElementById('mainTable'); if (_mt) _mt.innerHTML=th+tb;

  renderRamp();
  if(window._redrawDonem) window._redrawDonem();
  window._lastRows = rows;
  window._lastGelirB2B = tGelirB2B;
  // Year-1 operating profit for the Stage 1 box = Istanbul clinic + B2B (both
  // flagship lines funded by Stage 1), unfloored — a loss shows as a loss (4-A3).
  renderStage1Return(window._lastInvestBreakdown, tNet + tGelirB2B);
  window._lastRowsB2B = rowsB2B; // Year-1 B2B monthly rows — buildProjection reads the year-end unit economics for the Y2-5 B2B stream
  updatePinnedKpi(rows, tGelir, basAy, pozAy, tKorse);
  updateValuationTable(rows, tNet);
  buildProjection();
  runSensitivity();
  renderTblChart();
  renderPazarChart(rows);
  renderPazarChartB2B(rowsB2B);
  renderTrigger(rows);
  updateKapasiteUyari(rows);
  renderGiderDagilim(rows);
  renderMain(rows);
  if (!window._inScenario) renderMarketSensitivity();
  if (!window._inScenario) renderBusinessSensitivity();
  renderPhase2Option();
  renderUpgradePath();
}

function toggleTablo(btn) {
  const wrap = document.getElementById('tblWrap');
  const hidden = wrap.style.display === 'none';
  wrap.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? 'Hide Table' : 'Show Table';
}

function toggleB2BTablo(btn) {
  const wrap = document.getElementById('b2bTblWrap');
  if (!wrap) return;
  const hidden = wrap.style.display === 'none';
  wrap.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? 'Hide Table' : 'Show Table';
}

function tog(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.tog');
  const opening = body.style.display === 'none' || body.style.display === '';
  // on first click style is '' (from CSS display:none), treat as closed
  const isClosed = getComputedStyle(body).display === 'none';
  if (isClosed) {
    body.style.display = 'block';
    arrow.textContent = '▾';
    header.classList.add('open');
  } else {
    body.style.display = 'none';
    arrow.textContent = '▸';
    header.classList.remove('open');
  }
}

// ── 4 AYLIK HAREKETLİ ORTALAMA TETİKLEYİCİ ──────────────────────────────────
function calc4AyOrtalama(rows) {
  // Ay 4'ten itibaren son 4 ayın ortalama net'ini hesapla
  const results = rows.map((r, i) => {
    if (i < 3) return { ay: r.ay, avg4: null };
    const sum4 = rows.slice(i-3, i+1).reduce((s,x) => s + x.net, 0);
    return { ay: r.ay, avg4: Math.round(sum4 / 4) };
  });
  // Tetikleyici: ilk pozitif ortalama
  const trigger = results.find(r => r.avg4 !== null && r.avg4 >= 0);
  return { results, triggerAy: trigger ? trigger.ay : null };
}


let projChartInst = null;
initDynamic();
recalc();

function renderSummary3yr(totals, izmirRow, ankaraRow, b2bRow, y1KorseNet, izmirY5Gelir, ankaraY5Gelir, izmirY5Adet, ankaraY5Adet, bursaRow, gaziantepRow, bursaY5Gelir, gaziantepY5Gelir, bursaY5Adet, gaziantepY5Adet, istNetRow) {
  const el = document.getElementById('summaryOutcomes3yr');
  if (!el) return;
  const eurKur = V.eurKur ?? 50;

  // Market size per city (from V) — for display only
  const pazarTR     = gv('pazarTR');
  const istAdet     = window._lastIstEff ? window._lastIstEff.target[4] : Math.round(pazarTR * gv('pazarIstPct') / 100 * gv('hedefOsteoidPay') / 100); // Year-5 effective share (CM-2)

  // Revenue at full market penetration — per center (all in €K), net after own operating costs
  const _n = totals.length - 1; // last year index (4 for 5-year model)
  // Istanbul's own 100% net (incl. B2B), taken DIRECTLY from its own rows —
  // not by subtracting satellites out of the consolidated total. The old
  // subtraction only held in Branch mode (where totals carries each
  // satellite's full 100% net); in Subsidiary mode totals carries just the
  // flagship's fee+equity slice, so subtracting each satellite's full net
  // pushed the minority share in as a phantom Istanbul loss, then floored to
  // 0 (audit F8). istNetRow[i] is the unfloored operating result (a ramp-year
  // loss stays negative — review 4-A3); b2bRow[i] ≥ 0.
  const _istRow = istNetRow || [];
  const istNet     = (_istRow[_n] || 0);            // Istanbul CLINIC only — B2B is its own national line (MKT-D11)
  const b2bNetY5   = (b2bRow[_n] || 0);
  const izmirNet   = izmirRow[_n]  || 0;  // net after center-specific opex (= izmirFullNet)
  const ankaraNet  = ankaraRow[_n] || 0;  // net after center-specific opex (= ankaraFullNet)
  // Bursa/Gaziantep open Year 3, so their _n (=Year 5) figure is whatever
  // fraction of full-capacity target (bursaFullNet/gaziantepFullNet) their
  // Years-to-reach-target slider has reached by then — see _satRampFrac.
  const bursaNet = bursaRow[_n] || 0;
  const gaziantepNet = gaziantepRow[_n] || 0;
  // Combined total = net consolidated (matches Multi-Year Plan page)
  const totalNet  = totals[_n] || 0;

  // Year 1 Istanbul (model-driven, shown as-is) — revenue ladder, 4-B11
  const _RV = (window._lastProjRows && window._lastProjRows.rev) || null;
  const _y1Gross = _RV ? _RV.ist.gross[0] + _RV.b2b.gross[0] : 0;
  const _y1After = _RV ? _RV.ist.afterFees[0] + _RV.b2b.afterFees[0] : 0;
  const _y1Op = (istNetRow ? (istNetRow[0] || 0) : 0) + (b2bRow[0] || 0);
  const y1Braces = (V.korse || []).reduce((s, v) => s + v, 0);
  const y1PctOfTarget = istAdet > 0 ? Math.round(y1Braces / istAdet * 100) : 0;

  const fmtEur  = v => v > 0 ? '€' + v.toLocaleString('en-US') : '—';
  // Show a modeled loss as a negative, not "—" (which hid it) — a satellite's
  // own inputs can imply a negative net at any scale (audit F20). Zero → "—".
  const fmtKEur = v => v > 0 ? '~€' + (v * 1000).toLocaleString('en-US')
                    : v < 0 ? '-€' + Math.abs(v * 1000).toLocaleString('en-US') : '—';
  const fmtN    = v => v > 0 ? v.toLocaleString('en-US') + ' units/yr' : '—';

  const clinicCard = (name, badge, color, adet, payPct, net, note, revLabel, mktAdet) => `
    <div style="border:1px solid ${color}44;border-left:3px solid ${color};border-radius:6px;padding:12px 16px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#ddd;">${name}</div>
        <div style="font-size:10px;font-weight:700;color:${color};background:${color}22;padding:2px 8px;border-radius:10px;">${badge}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">${revLabel || 'Operating profit (Year 5)'}</div>
          <div style="font-size:18px;font-weight:700;color:${color};">${fmtKEur(net)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Target volume</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${fmtN(adet)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Market share target</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${payPct}%</div>
          ${mktAdet ? `<div style="font-size:9px;color:#888;">of the city market, ${Math.round(mktAdet).toLocaleString('en-US')} braces/yr</div>` : ''}
        </div>
      </div>
      ${note ? `<div style="font-size:10px;color:#777;margin-top:8px;padding-top:8px;border-top:1px solid #2a2a3e;">${note}</div>` : ''}
    </div>`;

  let html = '';

  // ── Year 1 baseline card (model-driven) ──
  html += `
    <div style="border:2px solid #534AB7;border-radius:6px;padding:12px 16px;margin-bottom:16px;background:#0f0f1f;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#ddd;">Istanbul Flagship — Year 1</div>
        <div style="font-size:10px;font-weight:700;color:#534AB7;background:#534AB722;padding:2px 8px;border-radius:10px;">✓ Monthly model — verified</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Operating profit (Year 1)</div>
          <div style="font-size:22px;font-weight:700;color:#534AB7;">${fmtKEur(_y1Op)}</div>
          <div style="font-size:10px;color:#888;margin-top:2px;">clinic ${fmtKEur(istNetRow ? (istNetRow[0] || 0) : 0)} + B2B line ${fmtKEur(b2bRow[0] || 0)}</div>
          <div style="font-size:10px;color:#888;margin-top:2px;">Gross revenue (clinic + B2B line) ${fmtKEur(_y1Gross)} · net after doctor fees ${fmtKEur(_y1After)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Clinic braces Year 1 (excl. B2B)</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${y1Braces.toLocaleString('en-US')} units</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Progress to target</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${y1PctOfTarget}% of capacity</div>
        </div>
      </div>
    </div>

    <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:10px;">
      <div style="font-size:10px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:1px;">At full market penetration — per clinic</div>
      <div style="font-size:10px;color:#888;">We are expecting roughly 5 years to achieve market potential.</div>
    </div>`;

  // ── Per-center cards ──
  html += clinicCard(
    'Istanbul Flagship',
    'IST · ' + gv('hedefOsteoidPay').toFixed(0) + '% market share',
    '#534AB7', istAdet,
    gv('hedefOsteoidPay').toFixed(1),
    istNet,
    'Istanbul clinic only · operating profit after all operating costs · B2B is shown separately below',
    undefined, Math.round(pazarTR * (window._lastIstEff ? window._lastIstEff.pct[4] : gv('pazarIstPct')) / 100)
  );
  {
    const _PB = window._lastProjRows || {};
    const _b2bAd = (_PB.braces && _PB.braces.b2b) ? _PB.braces.b2b[_n] : 0;
    const _b2bSharePct = pazarTR > 0 ? _b2bAd / pazarTR * 100 : 0;
    html += `
    <div style="border:1px solid #378ADD44;border-left:3px solid #378ADD;border-radius:6px;padding:12px 16px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#ddd;">B2B — national wholesale line (printed in Istanbul)</div>
        <div style="font-size:10px;font-weight:700;color:#378ADD;background:#378ADD22;padding:2px 8px;border-radius:10px;">Not part of Istanbul clinic volume or share</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">EBITDA contribution (Year 5)</div><div style="font-size:18px;font-weight:700;color:#378ADD;">${fmtKEur(b2bNetY5)}</div></div>
        <div><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">B2B braces (Year 5)</div><div style="font-size:14px;font-weight:600;color:#bbb;">${fmtN(_b2bAd)}</div></div>
        <div><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Share of national market</div><div style="font-size:14px;font-weight:600;color:#bbb;">${_b2bSharePct.toFixed(1)}%</div><div style="font-size:9px;color:#888;">vs national market (pazarTR) ${pazarTR.toLocaleString('en-US')}/yr</div></div>
      </div>
      <div style="font-size:10px;color:#777;margin-top:8px;padding-top:8px;border-top:1px solid #2a2a3e;">Own B2B unit prices (₺${gv('korseFB2B_stdRl').toLocaleString('en-US')}–₺${gv('korseFB2B_sensDelik').toLocaleString('en-US')} per brace by SKU, Market page); consumes printers only — no rooms, orthotists or workshop time.</div>
    </div>`;
  }

  if (V.izmirAktif) {
    html += clinicCard(
      'Izmir Center',
      'IZM · ' + gv('izmirHedefPay').toFixed(0) + '% market share',
      '#1D9E75', izmirY5Adet || 0,
      gv('izmirHedefPay').toFixed(1),
      izmirNet,
      'Operating profit after centre-specific opex (own rent, orthotist, staff) and its head-office allocation. Gross revenue: ~€' + (_RV ? _RV.izmir.gross[4] : 0) + 'K',
      'Operating profit (Year 5)', pazarTR * satMarketShare('izmir')
    );
  }

  if (V.ankaraAktif) {
    html += clinicCard(
      'Ankara Center',
      'ANK · ' + gv('ankaraHedefPay').toFixed(0) + '% market share',
      '#E8963C', ankaraY5Adet || 0,
      gv('ankaraHedefPay').toFixed(1),
      ankaraNet,
      'Operating profit after centre-specific opex (own rent, orthotist, staff) and its head-office allocation. Gross revenue: ~€' + (_RV ? _RV.ankara.gross[4] : 0) + 'K',
      'Operating profit (Year 5)', pazarTR * satMarketShare('ankara')
    );
  }

  if (V.bursaAktif) {
    const bursaReachPct = Math.round(_satRampFrac(5, 3, V.bursaRampYears || 4) * 100);
    html += clinicCard(
      'Bursa Center',
      'BUR · ' + gv('bursaHedefPay').toFixed(0) + '% market share',
      '#c94f2a', bursaY5Adet || 0,
      gv('bursaHedefPay').toFixed(1),
      bursaNet,
      'Opens Year 3 — ' + bursaReachPct + '% of full-capacity target reached by Year 5 within this model\'s horizon (adjustable via the "Years to reach target" slider on the Multi-Year Plan page). Operating profit after centre-specific opex. Gross revenue: ~€' + (_RV ? _RV.bursa.gross[4] : 0) + 'K',
      'Operating profit (Year 5, ' + bursaReachPct + '% of target)', pazarTR * satMarketShare('bursa')
    );
  }

  if (V.gaziantepAktif) {
    const gaziantepReachPct = Math.round(_satRampFrac(5, 3, V.gaziantepRampYears || 4) * 100);
    html += clinicCard(
      'Gaziantep Center',
      'GAZ · ' + gv('gaziantepHedefPay').toFixed(0) + '% market share',
      '#8a6d1a', gaziantepY5Adet || 0,
      gv('gaziantepHedefPay').toFixed(1),
      gaziantepNet,
      'Opens Year 3 — ' + gaziantepReachPct + '% of full-capacity target reached by Year 5 within this model\'s horizon (adjustable via the "Years to reach target" slider on the Multi-Year Plan page). Operating profit after centre-specific opex. Gross revenue: ~€' + (_RV ? _RV.gaziantep.gross[4] : 0) + 'K',
      'Operating profit (Year 5, ' + gaziantepReachPct + '% of target)', pazarTR * satMarketShare('gaziantep')
    );
  }

  // ── Total ──
  html += `
    <div style="border:2px solid #534AB7;border-radius:6px;padding:14px 16px;margin-top:4px;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <div style="font-size:11px;font-weight:700;color:#aaa;">Combined — consolidated operating profit (Year 5, all active centers)</div>
        <div style="font-size:10px;color:#555;margin-top:3px;">After operating costs for all centers · <a href="growth.html" style="color:#534AB7;text-decoration:none;font-weight:700;">Full Growth Model →</a></div>
      </div>
      <div style="font-size:26px;font-weight:700;color:#534AB7;">${fmtKEur(totalNet)}</div>
    </div>
    <div style="font-size:10px;color:#555;margin-top:10px;">⚠ These are Year-5 capacity targets — not year-bound projections. All centers show net after their own operating costs. Each center uses its own rent/staff params; combined total matches the Multi-Year Plan page.</div>`;

  // ── Stage 2 Investment & Return — Stage 2 ATTRIBUTABLE yield (review 4-A7):
  // Year-5 profit of ONLY the centres Stage 2 actually funds (Izmir, Ankara,
  // and Bursa/Gaziantep unless their setup is self-funded from free cash —
  // same funding map as buildOutPlan) ÷ Stage 2 investment. Profit is the
  // flagship-attributable part (management fee + equity share; = 100% of the
  // centre's operating profit in Branch mode). Istanbul/B2B are excluded —
  // Stage 1 funded them. Replaces the old "blended yield", which divided the
  // whole network's Year-5 profit (Istanbul included) by Stage 2 alone.
  const inv2 = window._lastInvestBreakdown;
  if (inv2) {
    const stage2Eur = inv2.stage2Eur;
    const _P2 = window._lastProjRows;
    const _plan2 = (window._lastFcf && window._lastFcf.plan) || buildOutPlan();
    const _s2Centres = _plan2.centres.filter(c => c.aktif && c.funding === 'stage2' && c.key !== 'istanbul');
    const _s2Names = _s2Centres.map(c => c.label);
    const satelliteNetEur = _s2Centres.reduce((sum, c) => {
      const r = _P2 && _P2.sat[c.key];
      return sum + (r ? ((r.fee[_n] || 0) + (r.equity[_n] || 0)) : 0);
    }, 0) * 1000; // €K -> EUR
    const stage2YieldPct = stage2Eur > 0 ? (satelliteNetEur / stage2Eur) * 100 : 0;
    const _s2NamesEl = document.getElementById('stage2CentresLbl');
    if (_s2NamesEl) _s2NamesEl.textContent = _s2Names.join(' + ') || 'none';
    const fmtEurFull = v => (v < 0 ? '-€' : '€') + Math.round(Math.abs(v)).toLocaleString('en-US');
    const stage2YieldColor = stage2YieldPct >= 0 ? '#1a7a45' : '#c94f2a';
    // Mirror the same three figures into the 12-Month Summary section's own
    // Stage 2 box (index.html), right next to Stage 1's — null-safe, only
    // index.html has these ids.
    const stage2InvestTopEl = document.getElementById('stage2InvestEur');
    if (stage2InvestTopEl) stage2InvestTopEl.textContent = fmtEurFull(stage2Eur);
    const stage2ProfitTopEl = document.getElementById('stage2ProfitEur');
    if (stage2ProfitTopEl) stage2ProfitTopEl.textContent = fmtEurFull(satelliteNetEur);
    const stage2YieldTopEl = document.getElementById('stage2YieldPct');
    if (stage2YieldTopEl) {
      stage2YieldTopEl.textContent = stage2YieldPct.toFixed(1) + '%';
      stage2YieldTopEl.style.color = stage2YieldColor;
    }
    html += `
    <div class="inv-only" style="border:1px solid #D85A3044;border-left:3px solid #D85A30;border-radius:6px;padding:12px 16px;margin-top:16px;">
      <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin-bottom:10px;">Stage 2 Investment &amp; Return <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#888;">— the Committed tranche, funds the Izmir/Ankara/Bursa/Gaziantep build-outs</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Stage 2 investment</div>
          <div style="font-size:18px;font-weight:700;color:#D85A30;">${fmtEurFull(stage2Eur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Year-5 operating profit of Stage-2-funded centres (${_s2Names.join(' + ') || 'none'}; flagship-attributable)</div>
          <div style="font-size:18px;font-weight:700;color:#333;">${fmtEurFull(satelliteNetEur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Stage 2 attributable yield</div>
          <div style="font-size:18px;font-weight:700;color:${stage2YieldColor};">${stage2YieldPct.toFixed(1)}%</div>
        </div>
      </div>
      <div style="font-size:10px;color:#888;margin-top:8px;">Stage 2 attributable yield = Year-5 operating profit of only the centres Stage 2 funds (${_s2Names.join(', ') || 'none'}) ÷ Stage 2 investment. Profit is the flagship-attributable share — management fee + equity share in Subsidiary mode, 100% of the centre's operating profit in Branch mode (the default). Istanbul and B2B are excluded (Stage 1 funded them); Bursa/Gaziantep drop out when their setup is self-funded from free cash. Stage 2 investment includes the deferred working-capital buffer, so this is a single-year ratio on the whole tranche, not an IRR.</div>
    </div>`;

    // ── Total Investment & Return — Total Committed (Stage 1+2) buys the
    // whole business: Istanbul's build-out AND all four satellite build-outs
    // together. So the "whole business"
    // comparison is Total Committed against the entire network's cumulative
    // net profit across all 5 model years (not a single year's snapshot) —
    // 100% basis per center (whole-business view).
    const totalCommittedEur = inv2.investorTicketEur;
    let cum100NetEur = 0;
    for (let yi = 0; yi < 5; yi++) {
      // Istanbul's own 100% net (incl. B2B) taken directly, per F8 — same
      // reason as istNet above (subtraction is wrong in Subsidiary mode).
      const istYear = (_istRow[yi] || 0) + (b2bRow[yi] || 0);
      cum100NetEur += istYear + (izmirRow[yi]||0) + (ankaraRow[yi]||0) + (bursaRow[yi]||0) + (gaziantepRow[yi]||0);
    }
    cum100NetEur *= 1000; // €K -> EUR
    const totalMultiple = totalCommittedEur > 0 ? cum100NetEur / totalCommittedEur : 0;
    const totalMultipleColor = totalMultiple >= 1 ? '#1a7a45' : '#c94f2a';
    // Exit Value (100%) — same "whole business" convention as the two stats
    // above: Year 5's 100% net profit (satelliteNetEur, already computed
    // above and inclusive of Istanbul) × the same Exit Multiple slider
    // (V.dcfExitMult) investor.html's own "Exit Value — Year 5" KPI uses.
    // That KPI values the flagship's consolidated after-tax FCF instead —
    // smaller in scope, same multiple — so the two are deliberately
    // different numbers, not a duplicate.
    const exitMult100 = exitMultSet().base; // one set, 4-A6
    // Exit Value on genuine Year-5 EBITDA (opProfit + expensed-capex add-back),
    // the single metric-ladder base every multiple now uses — replacing the old
    // convention that applied the exit multiple to operating profit under the
    // EBITDA label (PROMPT 7). €K → EUR. At defaults Y5 capex is 0 so EBITDA ==
    // operating profit here, but the two diverge in any capex year.
    const _ladder100 = metricLadder('100');
    const ebitda100Eur = (_ladder100 ? _ladder100.ebitda[4] : (satelliteNetEur/1000)) * 1000;
    const opProfit100Eur = (_ladder100 ? _ladder100.opProfit[4] : (satelliteNetEur/1000)) * 1000; // = satelliteNetEur; shown next to EBITDA so neither borrows the other's name
    const exitValue100Eur = ebitda100Eur * exitMult100;
    const totalInvestTopEl = document.getElementById('totalInvestEurBox');
    if (totalInvestTopEl) totalInvestTopEl.textContent = fmtEurFull(totalCommittedEur);
    const totalProfitTopEl = document.getElementById('totalProfitEurBox');
    if (totalProfitTopEl) totalProfitTopEl.textContent = fmtEurFull(cum100NetEur);
    const totalMultipleTopEl = document.getElementById('totalMultipleBox');
    if (totalMultipleTopEl) {
      totalMultipleTopEl.textContent = totalMultiple.toFixed(2) + '×';
      totalMultipleTopEl.style.color = totalMultipleColor;
    }
    const totalExitTopEl = document.getElementById('totalExitValueBox');
    if (totalExitTopEl) totalExitTopEl.textContent = fmtEurFull(exitValue100Eur);
    const totalEbitdaTopEl = document.getElementById('totalEbitdaBox');
    if (totalEbitdaTopEl) totalEbitdaTopEl.textContent = fmtEurFull(ebitda100Eur);
    const totalOpProfitTopEl = document.getElementById('totalOpProfitBox');
    if (totalOpProfitTopEl) totalOpProfitTopEl.textContent = fmtEurFull(opProfit100Eur);
    const totalExitLabelTopEl = document.getElementById('totalExitValueLabel');
    if (totalExitLabelTopEl) totalExitLabelTopEl.innerHTML = 'Exit Value — whole business (100%) <span style="color:#185FA5;">(' + exitMult100 + '× EBITDA)</span>';
    html += `
    <div class="inv-only" style="border:2px solid #534AB7;border-radius:6px;padding:12px 16px;margin-top:16px;background:#f9f8ff;">
      <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.3px;margin-bottom:10px;">Total Investment &amp; Return <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#888;">— Total Committed (Stage 1+2) funds the entire business: Istanbul and all four satellite build-outs</span></div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;">
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Total Committed</div>
          <div style="font-size:18px;font-weight:700;color:#534AB7;">${fmtEurFull(totalCommittedEur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Cumulative operating profit (100%, sum of Years 1-5)</div>
          <div style="font-size:18px;font-weight:700;color:#333;">${fmtEurFull(cum100NetEur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Multiple</div>
          <div style="font-size:18px;font-weight:700;color:${totalMultipleColor};">${totalMultiple.toFixed(2)}×</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Year 5 EBITDA (100%)</div>
          <div style="font-size:18px;font-weight:700;color:#333;">${fmtEurFull(ebitda100Eur)}</div>
          <div style="font-size:10px;color:#888;margin-top:2px;">Operating profit ${fmtEurFull(opProfit100Eur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Exit Value — whole business (100%) <span style="color:#185FA5;">(${exitMult100}× EBITDA)</span></div>
          <div style="font-size:18px;font-weight:700;color:#185FA5;">${fmtEurFull(exitValue100Eur)}</div>
        </div>
      </div>
      <div style="font-size:10px;color:#888;margin-top:8px;">Metric ladder (all 100% ownership, pre fee/equity split): <b>Operating profit</b> = revenue − all cash operating costs, capex expensed. <b>EBITDA</b> = operating profit + the capex expensed that year added back (this model expenses capex rather than depreciating it, and carries no interest, so operating-profit + capex is a true EBITDA; at defaults Year-5 capex is 0, so EBITDA equals operating profit here but diverges in any capex year). <b>After-tax net</b> = pre-tax − 25% corporate tax (shown on the Investor page). Multiple = the sum of every center's own 100% operating profit across all 5 model years ÷ Total Committed — a cumulative multi-year figure, not an annual rate (comparable to a simple gross MOIC, not IRR). Exit Value = Year-5 EBITDA × the Exit Multiple slider (${exitMult100}×, industry-appropriate: healthcare clinics typically trade at 6–12× EV/EBITDA at exit, a proven de-risked platform like this one commanding the higher end — same slider and same EBITDA base as the Investor page). The flagship's actual entitlement is smaller — see "Exit Value — Year 5" and "Implied Investor MOIC at Exit" on the <a href="investor.html" style="color:#534AB7;">Investor page</a> for the equity-adjusted figures.</div>
    </div>`;
  }

  el.innerHTML = html;
}

// ── Implementation Timeline (growth.html) — read from the live model (4-B16)
// Every month/centre claim here is derived: product launch months from
// V.aktifAy, intern start from the esikStajyer1 threshold, break-even and
// cumulative-positive from the Year-1 monthly rows (cumulative includes setup),
// the 2nd-centre trigger from the 4-month moving average, the opening order
// from _satOpenMonth(), and "centres at full target by Year 5" from the same
// ramp fractions the projection uses.
function _centresAtTargetY5() {
  const list = [{ n:'Istanbul', ok: _istRampFrac(5, V.istRampYears || 5) >= 1 }];
  [['izmir','Izmir',2],['ankara','Ankara',2],['bursa','Bursa',3],['gaziantep','Gaziantep',3]].forEach(([k, n, oy]) => {
    if (V[k + 'Aktif']) list.push({ n, ok: _satRampFrac(5, oy, V[k + 'RampYears'] || 4) >= 1 });
  });
  return { total: list.length, atTarget: list.filter(c => c.ok).map(c => c.n) };
}
function renderTimeline(rows) {
  const el = _origGetById('implTimeline');
  if (!el || !rows || !rows.length) return;
  const ym = m => 'Year ' + Math.ceil(m / 12) + ' Month ' + (m - (Math.ceil(m / 12) - 1) * 12);
  const launch = pi => { const a = (V.aktifAy || [])[pi]; return (a !== undefined && a < 12) ? 'Month ' + (a + 1) : null; };
  const interns = rows.find(r => (r.ayStajyer || 0) > 0);
  const lp = [['Sensor', 2], ['Perforated', 1], ['Sensor+perforated', 3]].map(([n, pi]) => launch(pi) ? n + ' brace from ' + launch(pi) : null).filter(Boolean);
  const bas = (rows.find(r => r.net >= 0) || {}).ay || null;
  const poz = (rows.find(r => r.cumBudget >= 0) || {}).ay || null;
  const tahmin = poz ? null : _tahminPozAy(rows);
  const { triggerAy } = calc4AyOrtalama(rows);
  const opens = [['izmir','Izmir'],['ankara','Ankara'],['bursa','Bursa'],['gaziantep','Gaziantep']]
    .filter(([k]) => V[k + 'Aktif']).map(([k, n]) => ({ n, m: _satOpenMonth(k) })).sort((a, b) => a.m - b.m);
  const cap = _centresAtTargetY5();
  const item = (dot, period, title, desc) => '<div class="tl-item"><div class="tl-dot ' + dot + '"></div><div class="tl-period">' + period + '</div><div class="tl-title">' + title + '</div><div class="tl-desc">' + desc + '</div></div>';
  let html = item('y1', 'Year 1 · from Month 1', 'Center 1 opening — Istanbul Flagship',
    'Licence, team, first doctor activations; standard braces first. '
    + (interns ? 'Intern joins at Month ' + interns.ay + ' (≥' + (V.esikStajyer1 ?? 15) + ' braces/month). ' : 'No intern within Year 1 at this ramp. ')
    + (lp.length ? lp.join(' · ') + '.' : ''));
  html += item('y1', 'Year 1', bas ? 'Monthly break-even at Month ' + bas : 'Monthly break-even not reached in Year 1',
    'Cumulative cash (after the one-time setup) turns positive '
    + (poz ? 'at Month ' + poz : tahmin ? 'at ~Month ' + tahmin + ' (linear trend beyond Year 1)' : 'beyond the modelled horizon')
    + '. Diabetic-foot and cranial-helmet cases may start in this period but are outside this model — <b>revenue not modelled</b>.');
  html += item('trigger', triggerAy ? 'Month ' + triggerAy + ' · Trigger' : 'Trigger',
    '4-month moving average net profit → 2nd centre signal',
    triggerAy ? 'Fires at Month ' + triggerAy + ' in the current model; Izmir opens 3 months later, never before Month 13.'
              : 'Does not fire within Year 1 in the current model — Izmir defaults to Year 2 Month 1.');
  opens.forEach(o => {
    html += item(o.m <= 24 ? 'y2' : 'y3', ym(o.m), o.n + ' opening', 'Opening order from the live model (Izmir: trigger-based; others: their opening-month sliders).');
  });
  html += item('y3', 'Year 5', cap.atTarget.length + ' of ' + cap.total + ' centres at full target',
    (cap.atTarget.length ? cap.atTarget.join(', ') + ' reach 100% of their designated market potential by Year 5' : 'No centre reaches its full target by Year 5')
    + (cap.atTarget.length < cap.total ? '; the others are still ramping (see each centre\'s "years to reach target" slider).' : '.')
    + (isBiz() ? '' : ' Year-5 figures are the exit valuation basis.'));
  el.innerHTML = html;
  const ms = document.getElementById('y5CapMilestone');
  if (ms) ms.textContent = cap.atTarget.length + ' of ' + cap.total + ' centres at full target';
}

function renderInvestorRoadmap(el, totals, korseM1, feeIncomeRow, equityIncomeRow, minorityRow, b2bRow, fcfData, izmirRow, ankaraRow, istFinancingGapRow, bursaRow, gaziantepRow) {
  const fmtK = v => v > 0 ? '~€' + v + 'K' : v < 0 ? '-€' + Math.abs(v) + 'K' : '—';
  const fmtCell = v => v > 0
    ? `<td style="text-align:right;color:#1a7a45;font-weight:600;">~€${v}K</td>`
    : v < 0
    ? `<td style="text-align:right;color:#c0392b;font-weight:600;">-€${Math.abs(v)}K</td>`
    : `<td style="text-align:right;color:#bbb;">—</td>`;
  const growCell = (v1, vN) => v1 > 0
    ? `<td style="text-align:right;color:#534AB7;font-weight:700;">+${Math.round((vN/v1-1)*100)}%</td>`
    : `<td style="color:#bbb;">—</td>`;
  const fmtSignedCell = v => {
    const color = v > 0 ? '#1a7a45' : v < 0 ? '#c0392b' : '#888';
    const sign = v > 0 ? '+' : '';
    return `<td style="text-align:right;color:${color};font-weight:600;">${sign}€${v}K</td>`;
  };

  const c2text = V.izmirAktif && V.ankaraAktif ? 'Izmir + Ankara open'
               : V.izmirAktif  ? 'Izmir center opens'
               : V.ankaraAktif ? 'Ankara center opens'
               : 'Istanbul scales';
  const cCount = 1 + (V.izmirAktif ? 1 : 0) + (V.ankaraAktif ? 1 : 0) + (V.bursaAktif ? 1 : 0) + (V.gaziantepAktif ? 1 : 0);

  // Year-1 claims and per-year capacity badges are read off the LIVE model
  // (window._lastRows + the istRampYears ramp), never hardcoded — at one
  // point this card asserted "Break-even ~Month 4 · Cumulative positive
  // ~Month 11" while the committed defaults actually produced Month 10 /
  // not reached in Y1 (audit finding F2).
  const _rmRows = window._lastRows || [];
  const _rmBasAy = (_rmRows.find(r => r.net >= 0) || {}).ay || null;
  const _rmPozAy = (_rmRows.find(r => r.cumBudget >= 0) || {}).ay || null;
  const _rmTahmin = (!_rmPozAy && _rmRows.length) ? _tahminPozAy(_rmRows) : null;
  const _rmPozTxt = _rmPozAy ? '~Month ' + _rmPozAy
                  : (_rmTahmin ? '~Month ' + _rmTahmin + ' (trend est.)' : 'beyond Year 1');
  const _rmIstRampYears = V.istRampYears || 5;
  const _rmPct = y => Math.round(_istRampFrac(y, _rmIstRampYears) * 100);
  const years = [
    { label:'Year 1', badge:'✓ Monthly model', color:'#534AB7',
      body:'Istanbul Flagship · Break-even ' + (_rmBasAy ? '~Month ' + _rmBasAy : 'not reached in Y1')
           + ' · Cumulative positive ' + _rmPozTxt },
    { label:'Year 2', badge:'Expansion', color:'#1D9E75',
      body:'Istanbul ' + _rmPct(2) + '% of market target · ' + c2text },
    { label:'Year 3', badge:_rmPct(3) + '% capacity', color:'#BA7517',
      body: cCount + ' active center' + (cCount>1?'s':'') + ' · ' + _rmPct(3) + '% of market target' },
    { label:'Year 4', badge:_rmPct(4) + '% capacity', color:'#c94f2a',
      body: cCount + ' active center' + (cCount>1?'s':'') + ' · ' + _rmPct(4) + '% of market target' },
    { label:'Year 5', badge:'Exit basis', color:'#2c4a2e',
      body: (function(){ const c = _centresAtTargetY5(); return c.atTarget.length + ' of ' + c.total + ' centres at full market target'; })() },
  ];

  const _rv = window._lastProjRows && window._lastProjRows.rev ? window._lastProjRows.rev.total : null;
  const _rmLad = metricLadder('investor');
  let html = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:20px;">`;
  years.forEach((y, i) => {
    const v = totals[i];
    html += `
      <div style="border:${i===4?'2px':'1px'} solid ${y.color}${i===4?'':'55'};border-radius:6px;padding:12px 10px;background:${i===4?y.color+'0a':'#fff'};">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${y.color};margin-bottom:3px;">${y.label}</div>
        <div style="font-size:9px;font-weight:700;background:${y.color}20;color:${y.color};padding:1px 6px;border-radius:8px;display:inline-block;margin-bottom:7px;">${y.badge}</div>
        <div style="font-size:20px;font-weight:700;color:${y.color};margin-bottom:1px;">${fmtK(v)}</div>
        <div style="font-size:9px;color:#999;margin-bottom:5px;">consolidated operating profit</div>
        <div style="font-size:10px;color:#666;line-height:1.4;">${y.body}</div>
      </div>`;
  });
  html += `</div>`;

  html += `<div class="tbl-wrap" style="margin-bottom:8px;"><table>
    <thead><tr>
      <th style="text-align:left;">€K</th>
      <th>Y1</th><th>Y2</th><th>Y3</th><th>Y4</th><th>Y5</th><th>Y1→Y5</th>
    </tr></thead>
    <tbody>
      ${_rv ? `<tr style="background:#f7f7f4;"><td style="font-size:10px;font-weight:700;text-transform:uppercase;color:#555;" colspan="7">Revenue — 100% of every active centre + B2B</td></tr>
      <tr><td>Gross revenue</td>${_rv.gross.map(fmtCell).join('')}${growCell(_rv.gross[0], _rv.gross[4])}</tr>
      <tr><td style="font-size:11px;">− Doctor fees (Scientific / Education / Library)</td>${_rv.fees.map(v=>fmtCell(-v)).join('')}<td></td></tr>
      ${_rv.sgk && _rv.sgk.some(v => v) ? `<tr><td style="font-size:11px;color:#185FA5;">of which SGK channel (Year 2+, no channel fee)</td>${_rv.sgk.map(fmtCell).join('')}<td></td></tr>` : ''}
      <tr><td><b>Net revenue after doctor fees</b></td>${_rv.afterFees.map(fmtCell).join('')}${growCell(_rv.afterFees[0], _rv.afterFees[4])}</tr>
      <tr style="background:#f7f7f4;"><td style="font-size:10px;font-weight:700;text-transform:uppercase;color:#555;" colspan="7">Operating profit (after all operating costs)</td></tr>` : ''}
      <tr><td>Istanbul clinic</td>${fmtCell(korseM1[0])}${fmtCell(korseM1[1])}${fmtCell(korseM1[2])}${fmtCell(korseM1[3])}${fmtCell(korseM1[4])}${growCell(korseM1[0],korseM1[4])}</tr>
      ${b2bRow[0]>0||b2bRow[1]>0 ? `<tr><td style="color:#378ADD;">B2B channel (Istanbul)</td>${fmtCell(b2bRow[0])}${fmtCell(b2bRow[1])}${fmtCell(b2bRow[2])}${fmtCell(b2bRow[3])}${fmtCell(b2bRow[4])}${growCell(b2bRow[0],b2bRow[4])}</tr>` : ''}
      ${V.izmirAktif ? `<tr><td style="color:#1D9E75;">Izmir Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('izmir', false)}</span></td>${fmtCell(izmirRow[0])}${fmtCell(izmirRow[1])}${fmtCell(izmirRow[2])}${fmtCell(izmirRow[3])}${fmtCell(izmirRow[4])}${growCell(izmirRow[1],izmirRow[4])}</tr>` : ''}
      ${V.ankaraAktif ? `<tr><td style="color:#E8963C;">Ankara Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('ankara', false)}</span></td>${fmtCell(ankaraRow[0])}${fmtCell(ankaraRow[1])}${fmtCell(ankaraRow[2])}${fmtCell(ankaraRow[3])}${fmtCell(ankaraRow[4])}${growCell(ankaraRow[1],ankaraRow[4])}</tr>` : ''}
      ${V.bursaAktif ? `<tr><td style="color:#c94f2a;">Bursa Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('bursa', true)}</span></td>${fmtCell(bursaRow[0])}${fmtCell(bursaRow[1])}${fmtCell(bursaRow[2])}${fmtCell(bursaRow[3])}${fmtCell(bursaRow[4])}${growCell(bursaRow[2],bursaRow[4])}</tr>` : ''}
      ${V.gaziantepAktif ? `<tr><td style="color:#8a6d1a;">Gaziantep Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('gaziantep', true)}</span></td>${fmtCell(gaziantepRow[0])}${fmtCell(gaziantepRow[1])}${fmtCell(gaziantepRow[2])}${fmtCell(gaziantepRow[3])}${fmtCell(gaziantepRow[4])}${growCell(gaziantepRow[2],gaziantepRow[4])}</tr>` : ''}
      ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="color:#BA7517;">${_satAggLabels().fee}</td>${fmtCell(feeIncomeRow[0])}${fmtCell(feeIncomeRow[1])}${fmtCell(feeIncomeRow[2])}${fmtCell(feeIncomeRow[3])}${fmtCell(feeIncomeRow[4])}${growCell(feeIncomeRow[1],feeIncomeRow[4])}</tr>` : ''}
      ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="color:#1D9E75;">${_satAggLabels().equity}</td>${fmtCell(equityIncomeRow[0])}${fmtCell(equityIncomeRow[1])}${fmtCell(equityIncomeRow[2])}${fmtCell(equityIncomeRow[3])}${fmtCell(equityIncomeRow[4])}${growCell(equityIncomeRow[1],equityIncomeRow[4])}</tr>` : ''}
      <tr style="font-weight:700;border-top:2px solid #e0e0dc;"><td>Consolidated operating profit (flagship)</td>${fmtCell(totals[0])}${fmtCell(totals[1])}${fmtCell(totals[2])}${fmtCell(totals[3])}${fmtCell(totals[4])}${growCell(totals[0],totals[4])}</tr>
      ${_rmLad ? `<tr><td style="font-size:11px;">EBITDA <span style="font-size:10px;color:#999;">(operating profit + expensed capex added back)</span></td>${_rmLad.ebitda.map(fmtCell).join('')}<td></td></tr>` : ''}
      ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="font-size:10px;color:#999;">Memo: Minority interest (local investors — not in total above)</td>${minorityRow.map(v=>`<td style="text-align:right;font-size:10px;color:#999;">${v>0?'€'+v+'K':'—'}</td>`).join('')}<td></td></tr>` : ''}
      ${fcfData ? `<tr style="border-top:1px solid #e0e0dc;"><td>${fcfData.vergiDahil?'Operating cash flow (after tax)':'Operating cash flow (pre-tax)'}</td>${fcfData.opCash.map(fmtSignedCell).join('')}<td></td></tr>
      <tr><td style="font-size:11px;">− Setup capex <span style="font-size:10px;color:#999;">(each centre in its opening year)</span></td>${fcfData.setupOut.map(v=>fmtSignedCell(-v)).join('')}<td></td></tr>
      <tr><td style="font-size:11px;color:#999;">± Working capital <span style="font-size:10px;">(SGK receivables: SGK revenue × delay days ÷ 365; private channel paid at fitting)</span></td>${fcfData.wcChange.map(fmtSignedCell).join('')}<td></td></tr>
      <tr style="font-weight:700;"><td>Free cash flow — centres company / investor view</td>${fcfData.fcf.map(fmtSignedCell).join('')}<td></td></tr>
      <tr><td style="font-size:10px;color:#999;">Memo: group view (Osteoid A.Ş. + centres) — royalty is intercompany, nets to €0</td>${fcfData.fcfGroup.map(v=>`<td style="text-align:right;font-size:10px;color:#999;">${v<0?'-':''}€${Math.abs(v)}K</td>`).join('')}<td></td></tr>
      <tr><td style="font-size:11px;color:#534AB7;">+ Investor funding <span style="font-size:10px;color:#999;">(financing — Stage 1 at closing, Stage 2 in its release year; not profit)</span></td>${fcfData.investorIn.map(fmtSignedCell).join('')}<td></td></tr>
      <tr style="font-weight:700;"><td>Year-end cash balance <span style="font-weight:400;font-size:10px;color:#999;">(before dividends)</span></td>${fcfData.cashBalance.map(fmtSignedCell).join('')}<td></td></tr>` : ''}
      ${fcfData && fcfData.vergiDahil ? `<tr><td style="font-size:10px;color:#999;">↳ Loss carryforward balance (year-end)</td>${fcfData.carryEnd.map(c=>`<td style="text-align:right;font-size:10px;color:#999;">${c>0?'€'+c+'K':'—'}</td>`).join('')}<td></td></tr>` : ''}
    </tbody>
  </table></div>
  <div style="font-size:10px;color:#888;">⚠ Istanbul C1 Y1–Y5 = operating profit (net after all operating costs), one consistent basis every year — a ramp-year loss, if any, is shown as a negative here and flows into every total; how it is financed (Stage 1 working capital) appears only in the cash-flow block below, never as profit. Satellite rows show each centre's own operating profit. At the committed defaults every satellite is a <b>branch</b> of the flagship: its full result (including any loss) is consolidated into the total through the "satellite branches" line — no management fee, no minority interest. A satellite switched to <b>Subsidiary</b> mode becomes a memo line: the flagship then takes only a management fee on its gross revenue plus its equity share of the profit after that fee, and the rest is minority interest. See <a href="captable.html" style="color:#534AB7;font-weight:700;">Cap Table</a> for the Network Structure explainer.${fcfData ? ' Operating cash flow = the consolidated post-opex total above (every year, same basis)'+(fcfData.vergiDahil?', taxed at '+fcfData.kvOraniPct+'% corporate tax (KV) with 5-year loss carryforward. Orthosis sales are VAT-exempt (KDV Kanunu 17/4-s) — no VAT is modeled.':' — corporate tax is currently switched off.')+' Free cash flow = operating cash flow − setup capex of every active centre (in its opening year) ± working capital (SGK receivables). Setup capex is not depreciated for tax (a conservative simplification).' : ''} &nbsp;<a href="growth.html" style="color:#534AB7;font-weight:700;">Full Multi-Year Model →</a></div>`;

  el.innerHTML = html;
}

// FCF for every year (Y1 included) comes from the same consolidated
// projection `totals` row — Istanbul net (post-opex, already including any
// clinic-paid mid-year printer top-up via printerEkMaliyet) + satellite
// fee/equity income + B2B — one consistent basis, no year-specific sourcing.
// Corporate tax (KV) is applied to
// positive annual pre-tax profit with a 5-year loss carryforward; a single
// running balance is enough since this model only spans 5 years, so no
// carryforward vintage can age past its legal 5-year window before the
// projection ends. No VAT logic — orthosis sales are VAT-exempt in full
// under KDV Kanunu 17/4-s, so no VAT line ever applies to any revenue here.
// KVK 10/1-ı — notional interest deduction on cash paid into A.Ş. share
// capital ("nakdi sermaye artışı faiz indirimi"), claimable for 5 accounting
// periods from the contribution date. Flagship is locked in as A.Ş., so
// eligibility is just the on/off toggle below (no entity-type gate). Uses
// the single V.fundAy funding date (the milestone-tranche system was
// removed earlier in this project; see shared.js history) rather than
// per-tranche dates.
// Rate basis: the law's indicator rate is TCMB's TRY commercial-loan rate,
// but the investor's cash here is contributed in EUR (foreign currency) —
// applying a TRY commercial rate (~45%) to a EUR contribution wildly
// overstates the deduction. V.euLegalFaiz is a low, EUR-context legal/
// minimum interest rate instead — still a structure assumption requiring
// YMM confirmation of the exact applicable rate for FX-denominated capital.
function computeNakdiSermayeDeduction() {
  const active = V.nakdiSermayeAktif !== false;
  const deduction = [0,0,0,0,0];
  const reg = window._lastRegister;
  const fundedCashEur = reg ? reg.byKey.investor.valueEur : 0;
  const fundAy = V.fundAy ?? 0;
  const fundingYear = Math.floor(fundAy / 12) + 1; // 1-indexed accounting period
  const perYearEur = fundedCashEur * ((V.euLegalFaiz ?? 5) / 2) / 100;
  const perYearK = Math.round(perYearEur / 1000);
  if (active) {
    for (let y = 1; y <= 5; y++) {
      if (y >= fundingYear && y <= fundingYear + 4) deduction[y-1] = perYearK;
    }
  }
  return { active, deduction, fundedCashEur, fundingYear, perYearK };
}

// Global opening month (1 = Year 1 Month 1) of each satellite — the single
// source for WHEN a centre opens, shared by the projection ramp and the
// build-out cash plan below. Izmir opens off the 4-month-moving-average
// trigger (trigger + 3 months prep, never before Month 13); Ankara/Bursa/
// Gaziantep use their own opening-month sliders inside their opening year.
function _satOpenMonth(sehir) {
  if (sehir === 'izmir') {
    const { triggerAy } = calc4AyOrtalama(window._lastRows || []);
    return triggerAy ? Math.max(13, triggerAy + 3) : 13;
  }
  return ((_MERKEZ_ACILIS_YIL[sehir] || 2) - 1) * 12 + (V[sehir + 'AcilisAy'] || 3);
}

// ── BUILD-OUT CASH PLAN — setup capex by year (review 4-A1) ─────────────────
// Setup capex never passes through any centre's P&L (it is not expensed and
// not depreciated), so it must be taken out of free cash flow explicitly, in
// the year each centre opens.
// Funding source of each setup (Stage 1 / Stage 2 / self-funded from free
// cash) is recorded so each setup is counted exactly once (review 4-A2).
// Pre-opening overheads per centre (review 4-A8) — the one-off costs of
// getting a centre open that are not fit-out capex: pre-hiring & training,
// launch marketing, legal / licensing / advisory, and "other (to be
// itemised)". The previous single "Overhead — dial it in to round the total to
// a clean number" plug now sits entirely in "other" at its old amount; the
// three itemised lines start at €0 until real quotes exist (no invented
// numbers). n = centre number (1 Istanbul … 5 Gaziantep).
// (A function, not a top-level const: recalc() runs at load before a const
// declared this far down would be initialised.)
function preOpenItems() {
  return [
    { k:'Hire',  l:'Pre-hiring & training' },
    { k:'Mkt',   l:'Launch marketing' },
    { k:'Legal', l:'Legal, licensing & advisory' },
    { k:'Other', l:'Other (to be itemised)' },
  ];
}
function preOpeningOverheads(n) {
  const o = { total: 0 };
  preOpenItems().forEach(it => { o[it.k] = V['preOpen' + it.k + 'C' + n] ?? 0; o.total += o[it.k]; });
  return o;
}

function buildOutPlan() {
  const eurK = V.eurKur ?? 50;
  const fcfFundedSat = V.bursaGaziantepFcfFunded === true;
  const centres = [
    { key:'istanbul', n:1, label:'Istanbul', aktif:true, baseEur: -computeYear1(V).kurulumTop / eurK, openMonth: 1 },
  ].concat(['izmir','ankara','bursa','gaziantep'].map((s, j) => ({
    key: s, n: j + 2, label: s.charAt(0).toUpperCase() + s.slice(1), aktif: !!V[s + 'Aktif'],
    baseEur: getMerkezKurulum(s) / eurK, openMonth: _satOpenMonth(s),
  })));
  centres.forEach(c => {
    c.preOpen = preOpeningOverheads(c.n);
    c.overheadEur = c.preOpen.total;
    c.totalEur = c.aktif ? c.baseEur + c.overheadEur : 0;
    c.yearIdx = Math.max(0, Math.min(4, Math.ceil(c.openMonth / 12) - 1));
    c.funding = c.n === 1 ? 'stage1' : (c.n >= 4 && fcfFundedSat) ? 'fcf' : 'stage2';
  });
  // Stage 2 closes before the first Stage-2-funded centre opens (Year 2 at the
  // committed defaults) — investor-mode funding timing only.
  const s2 = centres.filter(c => c.aktif && c.funding === 'stage2');
  const stage2YearIdx = s2.length ? Math.min(...s2.map(c => c.yearIdx)) : 1;
  const setupByYearK = [0,0,0,0,0], selfFundedSetupK = [0,0,0,0,0];
  centres.forEach(c => {
    setupByYearK[c.yearIdx] += c.totalEur / 1000;
    if (c.funding === 'fcf') selfFundedSetupK[c.yearIdx] += c.totalEur / 1000;
  });
  return {
    centres, stage2YearIdx,
    setupByYearK: setupByYearK.map(Math.round),
    selfFundedSetupK: selfFundedSetupK.map(Math.round),
    totalSetupEur: centres.reduce((s, c) => s + c.totalEur, 0),
  };
}

function computeFcfStream() {
  const totals = window._lastTotals || [];
  if (totals.length < 5) return null;
  // `totals` is buildProjection()'s single consolidated post-opex net row —
  // Istanbul net + satellite fee/equity income + B2B, for every year
  // including Y1 (istNetRow[0] there is built from the exact same
  // rows.gider/rows.gelirNet sums a separate Y1-only path used to read
  // directly, so this is not a precision loss, just one source instead of two).
  const pretaxFcf = totals.slice(0, 5);

  const vergiDahil = V.vergiDahil !== false;
  const kvOraniPct = V.kvOrani ?? 25;
  const kvRate = kvOraniPct / 100;

  // Lever 1 reduces the TAXABLE base only — it's a notional deduction, not a
  // real cash outflow, so cash flow (taxedFcf) is always real pretax cash
  // minus the tax actually owed, never reduced by the deduction itself. If
  // the deduction pushes a year's base negative, that excess becomes part of
  // the SAME loss-carryforward balance ordinary losses already use — no
  // separate carryforward tracking, so an unused deduction never persists
  // beyond what the existing 5-yr carryforward mechanism already allows.
  const nakdi = computeNakdiSermayeDeduction();
  // `totals` is no longer floored (review 4-A3), so the cash row IS the
  // accounting pre-tax result — the tax base sees every loss directly and
  // feeds the carryforward (audit F3's intent, now without a separate row).
  const accountingPretax = pretaxFcf.slice();
  const taxableBase = accountingPretax.map((v,i) => v - nakdi.deduction[i]);

  let carry = 0;
  const taxedFcf = [], taxPaid = [], carryEnd = [];
  for (let i = 0; i < 5; i++) {
    const cashPretax = pretaxFcf[i];
    const taxBase = taxableBase[i];
    if (!vergiDahil) { taxedFcf.push(cashPretax); taxPaid.push(0); carryEnd.push(0); continue; }
    if (taxBase <= 0) {
      carry += -taxBase;
      taxedFcf.push(cashPretax); // no tax owed — full pretax cash retained
      taxPaid.push(0);
    } else {
      const offset = Math.min(carry, taxBase);
      const taxable = taxBase - offset;
      const tax = Math.round(taxable * kvRate);
      carry -= offset;
      taxedFcf.push(cashPretax - tax);
      taxPaid.push(tax);
    }
    carryEnd.push(carry);
  }

  // Build-out outflows (review 4-A1): FCF = operating cash after tax − setup
  // capex ± working capital. Working capital: no receivable/
  // payable timing is modelled (private channel is paid at fitting; the SGK
  // channel with its 60–90-day lag is excluded) → 0 every year, shown as such.
  // The Working Capital Buffer is cash held in reserve, not spent — not an outflow.
  const plan = buildOutPlan();
  const opCash = taxedFcf;                    // operating cash flow after tax (€K)
  const setupOut = plan.setupByYearK;          // €K, in each centre's opening year
  // SGK receivables (FU-4): revenue booked at fitting, cash sgkDelayDays
  // later → the receivable balance at year-end ≈ that year's SGK revenue ×
  // delay/365; its increase is a cash outflow (the private channel is paid at
  // fitting, so it carries no receivable).
  const _sgkRev = (window._lastProjRows && window._lastProjRows.rev && window._lastProjRows.rev.total.sgk) || [0,0,0,0,0];
  const _sgkRecv = _sgkRev.map(v => v * gv('sgkDelayDays') / 365);
  const wcChange = [0,1,2,3,4].map(i => -Math.round(_sgkRecv[i] - (i ? _sgkRecv[i-1] : 0)));
  const fcf = opCash.map((v,i) => v - setupOut[i] + wcChange[i]);   // whole business (centres company)
  // Royalty to Osteoid A.Ş. (FU-2) is an intercompany transfer too: a cost in
  // the centres-company view (already inside operating profit), revenue at
  // Osteoid A.Ş. — so the group view adds it back.
  const _BR = (window._lastProjRows && window._lastProjRows.braces) || null;
  const royaltyK = [0,1,2,3,4].map(i => _BR ? Math.round(((_BR.istanbul[i]||0) + (_BR.izmir[i]||0) + (_BR.ankara[i]||0) + (_BR.bursa[i]||0) + (_BR.gaziantep[i]||0) + (_BR.b2b[i]||0) + ((_BR.sgk && _BR.sgk.total[i])||0) + ((_BR.upside && _BR.upside.total[i])||0)) * gv('royaltyEur') / 1000) : 0);
  // SGK line cash effect (BC-4): EBITDA effect − its extra capex + its receivables change
  const _sgkL = window._lastProjRows && window._lastProjRows.sgk;
  if (_sgkL) _sgkL.cashK = _sgkL.ebitdaK.map((v, i) => v - _sgkL.extraCapexK[i] + wcChange[i]);
  const fcfGroup = fcf.map((v,i) => v + royaltyK[i]);             // group view — royalty nets out
  const runSum = arr => { let r = 0; return arr.map(v => (r += v)); };
  const cum = runSum(fcf), cumGroup = runSum(fcfGroup), cumOpCash = runSum(opCash);

  // Cash ledger (review 4-A2): investor inflows (Stage 1 in Year 1, Stage 2 in
  // the Stage 2 year) + FCF. Every setup leaves once through FCF; its funding
  // arrives once — via Stage 1/Stage 2 here, or not at all when self-funded
  // (then operating cash pays for it). Reads the breakdown computed earlier in
  // the same recalc() pass.
  const _inv = window._lastInvestBreakdown;
  const investorIn = [0,0,0,0,0];
  if (_inv) {
    investorIn[0] += Math.round(_inv.stage1Eur / 1000);
    investorIn[plan.stage2YearIdx] += Math.round(_inv.stage2Eur / 1000);
  }
  const cashBalance = runSum(fcf.map((v,i) => v + investorIn[i]));

  return { pretaxFcf, accountingPretax, opCash, taxPaid, carryEnd, vergiDahil, kvOraniPct, nakdi,
           setupOut, royaltyK, wcChange, fcf, fcfGroup, cum, cumGroup, cumOpCash, plan,
           investorIn, cashBalance };
}

// ── METRIC LADDER (single source of truth for the exit-value metrics) ─────────
// One place that defines the four Year-1…Year-5 rungs every exit multiple and
// valuation figure should read from, so "EBITDA" stops meaning three different
// bases across the Summary, Investor DCF and scenario table (audit PROMPT 7).
// Pure: reads only globals buildProjection() already populated (_lastProjRows,
// _lastIstCapBuildout, _lastFcf, _lastRows) — never recomputes the model.
//
//   opProfit → the existing net rows: revenue − all cash opex, with capex
//              EXPENSED (this model has no capitalization/depreciation). Consumed
//              as-is, not re-derived.
//   capex    → per-year capex that ACTUALLY reduced opProfit, so the add-back
//              stays consistent with what was expensed. In this model only the
//              flagship expenses capex through its annual opex: Year-1 mid-year
//              printer top-ups (from the monthly engine) + Years 2-5 printer
//              purchases and branch fit-out (from the capacity build-out).
//              Already respects ekipmanOsteoidden — printerCapexEurK is 0 when
//              Osteoid supplies the kit, exactly as it was in opProfit, so the
//              add-back is 0 too. Satellite SETUP equipment is a separate
//              investment line that never hit the satellite annual net, so it is
//              NOT added back here (adding back what was never subtracted would
//              overstate EBITDA).
//   ebitda   = opProfit + capex. Genuine EBITDA: no D&A (capex is expensed),
//              no interest in the model, tax not yet applied.
//   fcf      → the existing taxed stream (25% CIT + 5-yr loss carryforward) from
//              computeFcfStream(); consumed, not duplicated. Modeled on the
//              flagship-consolidated basis (the only basis the tax layer runs
//              on) regardless of scope.
//
// scope: '100'      → whole business at 100% ownership (Istanbul own net + B2B +
//                     every satellite's own full net) — the Summary/growth
//                     "whole business" basis.
//        'investor' → the flagship-consolidated total (own clinic + B2B +
//                     management fee + equity share of satellites; minority
//                     excluded) — the Investor page / DCF basis.
// This preserves the existing per-page scope split; only the base metric unifies.
function metricLadder(scope) {
  const P = window._lastProjRows;
  const fcfData = window._lastFcf;
  const cap = window._lastIstCapBuildout || [];
  const rows = window._lastRows || [];
  if (!P) return null;
  const eurKur = V.eurKur ?? 50;
  const toEur = v => Math.round(v / eurKur / 1000);

  // opProfit — consume the existing net rows for the requested scope.
  let opProfit;
  if (scope === 'investor') {
    opProfit = (P.totals || []).slice(); // flagship-consolidated (istNet + b2b + fee + equity)
  } else { // '100'
    opProfit = [0,1,2,3,4].map(i =>
      (P.istNet[i]||0) + (P.b2b[i]||0)
      + (P.sat.izmir.net[i]||0) + (P.sat.ankara.net[i]||0)
      + (P.sat.bursa.net[i]||0) + (P.sat.gaziantep.net[i]||0));
  }

  // capex — the flagship-expensed capex that actually reduced opProfit. Same for
  // both scopes (it's the flagship's own, and it sits inside both the 100% and
  // the investor-consolidated opProfit). Year 1 from the monthly engine's
  // printer top-ups; Years 2-5 from the capacity build-out (printer purchases +
  // branch fit-out only — utilities stay in opex as genuine recurring cost).
  const y1PrinterCapex = toEur(rows.reduce((s,r) => s + (r.printerEkMaliyet||0), 0));
  const capex = [0,1,2,3,4].map(i => {
    if (i === 0) return y1PrinterCapex;
    const c = cap[i] || {};
    return (c.printerCapexEurK || 0) + (c.branchSetupEurK || 0);
  });

  // ebitda = opProfit + capex add-back (genuine — see header).
  const ebitda = opProfit.map((v,i) => v + (capex[i]||0));

  // fcf — the taxed stream AFTER build-out outflows (setup capex, review 4-A1), flagship-consolidated / investor view. Identity:
  // fcf = ebitda − tax − (capex + setup) ± working capital.
  const fcf = (fcfData && fcfData.fcf) ? fcfData.fcf.slice() : opProfit.map(()=>0);
  const setup = (fcfData && fcfData.setupOut) ? fcfData.setupOut.slice() : [0,0,0,0,0];

  return { opProfit, capex, ebitda, fcf, setup };
}

// ── VALIDATION LEDGER (Methodology + Formula Validation pages) ─────────────
// Renders the live cash-flow / valuation / investor-return chain from the
// same globals every page uses, with the identity checks shown explicitly:
//   FCF = EBITDA − tax − expensed capex − setup capex ± working capital
//   Stage 1 setup + Stage 2 setup + self-funded setup = total setup
//   DCF = Σ PV(FCF₁₋₅) + PV(FCF₅ × Base multiple)
// Nothing here is typed — every figure is read from the model (CLAUDE.md rule).
function renderValidationLedger(elId) {
  const el = document.getElementById(elId);
  const f = window._lastFcf, L = metricLadder('investor'), d = window._lastDcf, deal = window._lastDeal, R = window._lastInvestorReturn;
  if (!el || !f || !L) return;
  const k = v => (v < 0 ? '-€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const sum = a => a.reduce((s, v) => s + v, 0);
  const tr = (label, arr, cls) => '<tr' + (cls ? ' class="' + cls + '"' : '') + '><td>' + label + '</td>' + arr.map(v => '<td class="result">' + k(v) + '</td>').join('') + '<td class="result">' + k(sum(arr)) + '</td></tr>';
  const rebuilt = [0,1,2,3,4].map(i => L.ebitda[i] - f.taxPaid[i] - L.capex[i] - f.setupOut[i] + f.wcChange[i]);
  const fcfOk = rebuilt.every((v, i) => v === f.fcf[i]);
  const byStage = { stage1: 0, stage2: 0, fcf: 0 };
  f.plan.centres.forEach(c => { byStage[c.funding] += c.totalEur; });
  const setupOk = Math.abs(byStage.stage1 + byStage.stage2 + byStage.fcf - f.plan.totalSetupEur) < 0.5 && Math.abs(sum(f.setupOut) * 1000 - f.plan.totalSetupEur) < 3000;
  const ms = exitMultSet();
  const _biz = isBiz();
  let h = '<table class="proj-tbl"><thead><tr><th style="min-width:300px;">' + (_biz ? 'Cash flow — whole business (centres company)' : 'Cash flow — centres company / investor view') + '</th><th style="text-align:right;">Y1</th><th style="text-align:right;">Y2</th><th style="text-align:right;">Y3</th><th style="text-align:right;">Y4</th><th style="text-align:right;">Y5</th><th style="text-align:right;">Σ</th></tr></thead><tbody>'
    + tr('EBITDA (operating profit + expensed capex)', L.ebitda)
    + tr('− Corporate tax (25%, 5-yr loss carryforward)', f.taxPaid.map(v => -v))
    + tr('− Capex expensed inside opex (printers, branch fit-out)', L.capex.map(v => -v))
    + tr('− Setup capex (each centre in its opening year)', f.setupOut.map(v => -v))
    + tr('± Working capital (SGK receivables)', f.wcChange)
    + tr('= Free cash flow', f.fcf, 'grp')
    + '<tr><td colspan="7" style="font-size:11px;color:' + (fcfOk ? '#1a7a45' : '#c0392b') + ';">' + (fcfOk ? '✓' : '⚠') + ' Check: the rows above rebuild FCF exactly in every year; cumulative 5-year FCF = ' + k(f.cum[4]) + '.</td></tr>'
    + tr('Memo: group view (Osteoid A.Ş. consolidated — royalty nets out)', f.fcfGroup)
    + (_biz
      ? '<tr><td>Cumulative free cash flow</td>' + f.cum.map(v => '<td class="result">' + k(v) + '</td>').join('') + '<td></td></tr>'
      : tr('+ Investor funding (financing, not profit)', f.investorIn)
        + '<tr><td>Year-end cash balance (before dividends)</td>' + f.cashBalance.map(v => '<td class="result">' + k(v) + '</td>').join('') + '<td></td></tr>')
    + '</tbody></table>';
  if (_biz) h += '<div class="note" style="margin-top:8px;">' + (setupOk ? '✓' : '⚠') + ' Setup check: the setup of every active centre (capex + pre-opening overheads) adds up to ' + k(f.plan.totalSetupEur / 1000) + ' — the same total the FCF stream deducts, each centre once, in its opening year.</div>';
  else h += '<div class="note" style="margin-top:8px;">' + (setupOk ? '✓' : '⚠') + ' Setup funding: Stage 1 ' + k(byStage.stage1 / 1000) + ' + Stage 2 ' + k(byStage.stage2 / 1000) + ' + self-funded from free cash ' + k(byStage.fcf / 1000) + ' = ' + k(f.plan.totalSetupEur / 1000) + ' total setup (capex + pre-opening overheads) of all active centres — the same total the FCF stream deducts (each setup counted once).</div>';
  if (d && deal && !_biz) {
    h += '<div class="fbox">'
      + '<span class="k">Exit multiples</span>  = one set: Conservative ' + ms.low + '× · Base ' + ms.base + '× · Optimistic ' + ms.high + '× (multi-centre premium +' + ms.premium + '×)\n'
      + '<span class="k">DCF TV</span>          = FCF₅ ' + k(f.fcf[4]) + ' × ' + ms.base + '× = ' + k(d.tv) + ' → PV ' + k(d.pvTv) + '\n'
      + '<span class="k">DCF value</span>       = Σ PV(FCF₁₋₅) ' + k(d.sumPvFcf) + ' + PV(TV) ' + k(d.pvTv) + ' = ' + k(d.npv) + ' (TV share ' + d.tvSharePct + '%) — reference only\n'
      + '<span class="k">Exit EV</span>         = Year-5 EBITDA ' + k(L.ebitda[4]) + ' × ' + ms.base + '× = ' + k(L.ebitda[4] * ms.base) + ' (EV/EBITDA)\n'
      + '<span class="k">Deal pre-money</span>  = negotiated input €' + Math.round(deal.premoney).toLocaleString('en-US') + ' → investor stake ' + deal.stakes.investor.toFixed(2) + '% (two-tranche blend)\n'
      + (R ? '<span class="r">Investor return</span> = dividends ' + k(R.divInvTotK) + ' + exit ' + k(R.exitInvK) + ' + retained cash ' + k(R.cashInvK) + ' = ' + k(R.totalK) + ' ÷ ticket ' + k(R.ticket / 1000) + ' = ' + R.moic.toFixed(2) + '×' + (R.irr !== null ? ', IRR ' + R.irr.toFixed(1) + '%' : '') + '\n' : '')
      + '</div>';
  }
  el.innerHTML = h;
}

// 5 Yıllık Projeksiyon — dinamik
function buildProjection() {
  // Yıl 1 verileri recalc rows'tan
  const rows = window._lastRows || [];
  const eurKur = V.eurKur ?? 50;
  const toEur  = v => Math.round(v / eurKur / 1000); // ₺ → €K

  // Yıl 1: model verisi
  const y1KorseNet = rows.reduce((s,r) => s + (r.gelirNet||0), 0);
  const y1Korse    = rows.reduce((s,r) => s + (r.korse||0), 0);
  const y1Sci      = rows.reduce((s,r) => s + (r.feeSci||0), 0); // bilimsel çalışma bedeli ₺
  const y1Edu      = rows.reduce((s,r) => s + (r.feeEdu||0), 0); // eğitim bedeli ₺
  const y1Lib      = rows.reduce((s,r) => s + (r.feeLib||0), 0); // kütüphane bedeli ₺

  // Pazar verisi
  const pazarTR    = gv('pazarTR');
  const pazarIstPct= gv('pazarIstPct') / 100;
  const pazarIst   = Math.round(pazarTR * pazarIstPct);

  // Yıl 5 hedef: İstanbul pazar payından korse adedi
  // Hedef pay = Yıl 5'te mevcut İstanbul pazar payının 2 katı (büyüme varsayımı)
  // Ya da doğrudan pazar payından: y5Korse = pazarIst * hedefPay
  const y1Pay = y1Korse / (pazarIst || 1);
  // Yıl 5 hedef pazar payı = Pazar & Ürün bölümündeki pazarIstPct slider değeri
  // Kullanıcı bu slider'da İstanbul'daki hedef payını belirliyor
  const hedefOsteoidPay = gv('hedefOsteoidPay') / 100;  // Yıl 5 Osteoid hedef payı
  const growthFactors = [1, 1.6, 2.4]; // Yıl 1-3

  // Yıl 5 hedef korse adeti ve geliri — hedefOsteoidPay'den türetilir
  // ── Istanbul overlap with open satellites (CM-2) ────────────────────────
  // pazarIstPct includes patients travelling to Istanbul from other provinces.
  // Once a satellite is open, the patients of its surrounding provinces that
  // it captures should not also count in Istanbul: Istanbul's share is reduced
  // by RegionPct × RegionCapturePct/100 × istInflowReductionPct/100 per open
  // satellite (pro rata to the months it is open in its opening year). The
  // satellite's home-province share is not deducted — it was never in
  // Istanbul's number beyond that province's population share.
  const _istRed = [0,1,2,3,4].map(i => ['izmir','ankara','bursa','gaziantep'].reduce((a, s) => {
    if (!V[s + 'Aktif']) return a;
    const open = Math.max(0, Math.min(12, 12 * (i + 1) - _satOpenMonth(s) + 1)) / 12;
    return a + open * gv(s + 'RegionPct') * gv(s + 'RegionCapturePct') / 100 * gv('istInflowReductionPct') / 100;
  }, 0));
  const istEffPct = _istRed.map(r => Math.max(0, gv('pazarIstPct') - r)); // % of pazarTR, per year
  const istTargetAdet = istEffPct.map(p => Math.round(pazarTR * p / 100 * hedefOsteoidPay));
  window._lastIstEff = { pct: istEffPct, reduction: _istRed, target: istTargetAdet };
  const y5KorseAdet = istTargetAdet[4];
  const y5PayPct    = (hedefOsteoidPay * 100).toFixed(1);

  // Yıl sonu (Ay 10-12) mix'inden birim net gelir — mix olgunlaştığında üst ürün ağırlığı artar
  const lastRows = rows.slice(-3);  // son 3 ay
  const sonKorse = lastRows.reduce((s,r) => s + (r.korse||0), 0) || 1;
  const sonGelirNet = lastRows.reduce((s,r) => s + (r.gelirNet||0), 0);
  const y1KorseAdeti = y1Korse || 1;
  const sonBirimNet  = toEur(sonGelirNet) / sonKorse * 1000;  // €/adet — Year-1 year-end mix (display/validation only)

  // ── Upgrade path, Years 2+ (FU-3, SR-1) ─────────────────────────────────
  // Years 2+ use the yearly share of the same continuous upgrade path that
  // drives the Year-1 monthly mix (upgradePath): Year 2 = midpoint of its
  // linear rise, Year 3 onward the long-run share. Year 1 itself always stays
  // the monthly model.
  // Unit economics per pool (standard = Std-Reported; premium = the other
  // three) come from each SKU's live price, doctor fees, material, cutting fee
  // and royalty, weighted within the pool by the Year-1 last-quarter counts.
  // Every centre's Years 2-5 revenue = braces × this year's mix-weighted unit.
  const _PRODS = ['stdRl','delik','sens','sensDelik'];
  const _PREM  = [false, true, true, true];
  const _kesimTRYp = gv('kesimEurPer') * eurKur, _royTRYp = gv('royaltyEur') * eurKur;
  const _prodUnit = _PRODS.map(p => {
    const price = gv('korseF_' + p);
    const sci = price * gv('feeSci_' + p) / 100, edu = price * gv('feeEdu_' + p) / 100, lib = price * gv('feeLib_' + p) / 100;
    const mat = gv('mal_' + p) + ((p === 'delik' || p === 'sensDelik') ? _kesimTRYp : 0);
    return { gross: price, sci, edu, lib, mat, roy: _royTRYp, net: price - sci - edu - lib - mat - _royTRYp };
  });
  const _cntOf = rs => rs.reduce((acc, r) => { const kk = r.k || []; return acc.map((v, j) => v + (kk[j] || 0)); }, [0,0,0,0]);
  const _cntQ4 = _cntOf(lastRows), _cntY1 = _cntOf(rows);
  function _pool(prem) {
    const idx = _PRODS.map((_, j) => j).filter(j => _PREM[j] === prem);
    let w = idx.map(j => _cntQ4[j]); let tot = w.reduce((a, b) => a + b, 0);
    if (tot <= 0) { w = idx.map(j => _cntY1[j]); tot = w.reduce((a, b) => a + b, 0); }
    if (tot <= 0) { w = idx.map(() => 1); tot = idx.length; }
    const o = {};
    ['gross','sci','edu','lib','mat','roy','net'].forEach(m => { o[m] = idx.reduce((s, j, n) => s + _prodUnit[j][m] * w[n], 0) / tot / eurKur; });
    return o; // € per brace
  }
  const _stdU = _pool(false), _premU = _pool(true);
  const _premShare = upgradePath('clinic').years.slice(0, 5).map(v => v / 100); // SR-1: one continuous path
  // B2B Years 2+ (SR-1): own price list, same deductions as the Year-1 B2B engine,
  // pools weighted by the Year-1 B2B last-quarter counts, at the B2B path's yearly share.
  const _rowsB2Bq = window._lastRowsB2B || [];
  const _prodUnitB2B = _PRODS.map(p => {
    const price = gv('korseFB2B_' + p);
    const sci = price * gv('feeSci_' + p) / 100, edu = price * gv('feeEdu_' + p) / 100, lib = price * gv('feeLib_' + p) / 100;
    const mat = gv('mal_' + p) + ((p === 'delik' || p === 'sensDelik') ? _kesimTRYp : 0);
    return { gross: price, sci, edu, lib, mat, roy: _royTRYp, net: price - sci - edu - lib - mat - _royTRYp };
  });
  const _cntQ4B = _cntOf(_rowsB2Bq.slice(-3)), _cntY1B = _cntOf(_rowsB2Bq);
  const _poolB2B = prem => {
    const idx = _PRODS.map((_, j) => j).filter(j => _PREM[j] === prem);
    let w = idx.map(j => _cntQ4B[j]); let tot = w.reduce((a, b) => a + b, 0);
    if (tot <= 0) { w = idx.map(j => _cntY1B[j]); tot = w.reduce((a, b) => a + b, 0); }
    if (tot <= 0) { w = idx.map(() => 1); tot = idx.length; }
    const o = {}; ['gross','sci','edu','lib','mat','roy','net'].forEach(m => { o[m] = idx.reduce((s, j, n) => s + _prodUnitB2B[j][m] * w[n], 0) / tot / eurKur; }); return o;
  };
  const _stdUB = _poolB2B(false), _premUB = _poolB2B(true), _b2bShare = upgradePath('b2b').years.map(v => v / 100);
  const _b2bUnit = i => { const p = _b2bShare[i], o = {}; Object.keys(_stdUB).forEach(m => { o[m] = (1 - p) * _stdUB[m] + p * _premUB[m]; }); return o; }; // € per B2B brace
  // private-pay unit economics for year index i (0-4), € per brace
  const _privUnit = i => { const p = _premShare[i], o = {}; Object.keys(_stdU).forEach(m => { o[m] = (1 - p) * _stdU[m] + p * _premU[m]; }); return o; };
  // ── SGK channel (BC-4) — INCREMENTAL volume, Year 2 onward, never Year 1 ──
  // SGK braces come on TOP of each centre's private clinic volume: patients
  // who would not buy privately but are fitted on a medical report, at the
  // SUT price (sgkPrice) + the patient's top-up above SUT (sgkTopUp). Volume =
  // sgkIncrementalPct % of that centre's private clinic braces (it no longer
  // carves a share out of private volume, FU-4's cannibalisation). No channel
  // fee on SGK braces; material (mix-average) and royalty still apply; the
  // extra braces also load the fitting capacity (rooms, orthotists, printers)
  // below. Revenue is booked at fitting; the cash arrives sgkDelayDays later
  // (a working-capital outflow in the FCF). Default OFF — Year-1 policy is
  // private channel first; SGK is a toggleable upside line.
  const _sgkOn = V.sgkAktif === true;
  const _sgkS = Math.max(0, gv('sgkIncrementalPct')) / 100;
  const _sgkSi = i => (_sgkOn && i > 0) ? _sgkS : 0;       // SGK braces per private brace, year i
  const _sgkRevEur = (gv('sgkPrice') + gv('sgkTopUp')) / eurKur;
  // Unit economics PER PRIVATE BRACE (every caller multiplies by the private
  // clinic brace count): the private brace itself + s SGK braces riding on it.
  const mixUnit = i => {
    const o = _privUnit(i), s = _sgkSi(i);
    if (!s) return Object.assign(o, { sgkGross: 0, privNet: o.net });
    return { gross: o.gross + s * _sgkRevEur, sci: o.sci, edu: o.edu, lib: o.lib,
             mat: o.mat * (1 + s), roy: o.roy * (1 + s), net: o.net + s * (_sgkRevEur - o.mat - o.roy), sgkGross: s * _sgkRevEur, privNet: o.net };
  };
  const _premPct = c => { const t = c.reduce((a, b) => a + b, 0); return t > 0 ? (c[1] + c[2] + c[3]) / t * 100 : 0; };
  window._lastPremiumMix = { y1ActualPct: _premPct(_cntY1), q4Pct: _premPct(_cntQ4), m12Pct: _premPct(_cntOf(rows.slice(-1))),
                             sharePct: _premShare.map(p => p * 100), stdNetEur: Math.round(_stdU.net), premNetEur: Math.round(_premU.net),
                             unitNetEur: [0,1,2,3,4].map(i => Math.round(mixUnit(i).net)), privUnitNetEur: [0,1,2,3,4].map(i => Math.round(_privUnit(i).net)),
                             sgkUnitNetEur: Math.round(_sgkRevEur - _privUnit(4).mat - _privUnit(4).roy) };
  // Unit economics per brace (€) for the Summary business KPIs (BC-3):
  // clinic private channel — Year 1 actual (monthly engine) and Year 5 mix;
  // B2B — Year-1 last-quarter unit (the basis its Years 2-5 use); SGK — SUT +
  // top-up, no channel fee, same material and royalty as a private brace.
  {
    const _sumR = (rs, f) => rs.reduce((s, r) => s + (f(r) || 0), 0);
    const _unitOf = (rs, fees) => { const n = _sumR(rs, r => r.korse) || 1; const g = _sumR(rs, r => r.gelirBrut) / eurKur / n, fe = _sumR(rs, fees) / eurKur / n, m = _sumR(rs, r => r.baskiTop) / eurKur / n, ro = _sumR(rs, r => r.royaltyTop) / eurKur / n;
      return { gross: g, fee: fe, mat: m, roy: ro, net: g - fe - m - ro }; };
    const _p5 = _privUnit(4), _b3 = (window._lastRowsB2B || []).slice(-3);
    window._lastUnitEcon = {
      privY1: _unitOf(rows, r => (r.feeSci || 0) + (r.feeEdu || 0) + (r.feeLib || 0)),
      privY5: { gross: _p5.gross, fee: _p5.sci + _p5.edu + _p5.lib, mat: _p5.mat, roy: _p5.roy, net: _p5.net },
      b2b: _unitOf(_b3, r => (r.feeSciB2B || 0) + (r.feeEduB2B || 0) + (r.feeLibB2B || 0)),
      sgk: { gross: _sgkRevEur, fee: 0, mat: _p5.mat, roy: _p5.roy, net: _sgkRevEur - _p5.mat - _p5.roy, on: _sgkOn },
      premY5Pct: _premShare[4] * 100,
    };
  }

  // ── Yıl 1 gider tabanı ──
  const lerp = (a, b, t) => Math.round(a + (b-a)*t);
  const y1Gider    = Math.abs(rows.reduce((s,r) => s+(r.gider||0), 0)); // ₺
  const y1GiderEur = toEur(y1Gider); // €K


  // ── Istanbul private-clinic channel — one consistent basis every year:
  // gross revenue, opex, and net (gross − opex, NOT floored — a ramp-year loss
  // stays a loss, review 4-A3). Y1 used to show gross instead of net here,
  // which made Year 1 a different metric than Years 2-5 and silently broke
  // anything that summed this row across years (computeFcfStream).
  const y1BrutM1 = toEur(y1KorseNet);
  const istRampYears = V.istRampYears || 5;
  // Istanbul brace count per year — single source (the consolidated
  // korseCount* group below reuses this exact array). Needed here to size
  // the capacity-derived Y2-5 opex.
  const korseCountIst = [1,2,3,4,5].map(y => y===1 ? y1Korse : lerp(y1Korse, istTargetAdet[y - 1], _istRampFrac(y, istRampYears))); // target at that year's effective share (CM-2)
  // ── Upside segments (UP-1) — adult / post-op / fracture ─────────────────
  // A segment that is switched on is part of the plan: its braces are fitted
  // at the centres (they load the capacity engine), and its revenue, channel
  // fee, material and royalty flow into each centre's P&L — so into every
  // total, FCF, funding need and KPI. Volume per centre = the segment's
  // national market × the centre's share of the national market × the
  // centre's target share, on that centre's own ramp; Year 2 onward (Year 1
  // stays the verified monthly engine). Own SKU price; channel fee and
  // material at the standard SKU's rates.
  const _upSegsOn = upsideSegments().filter(sg => sg.aktif);
  const _upUnit = sg => { const g = sg.price / eurKur, sci = g * gv('feeSci_stdRl') / 100, edu = g * gv('feeEdu_stdRl') / 100, lib = g * gv('feeLib_stdRl') / 100, mat = gv('mal_stdRl') / eurKur, roy = gv('royaltyEur');
    return { gross: g, sci, edu, lib, mat, roy, net: g - sci - edu - lib - mat - roy }; }; // € per brace
  const _upFull = (share, tgt) => _upSegsOn.map(sg => sg.vol * share * tgt); // braces/yr per segment at full target
  const _upIstFull = _upFull(istEffPct[4] / 100, gv('hedefOsteoidPay') / 100);
  const _upBy = { istanbul: [0,1,2,3,4].map(i => _upFull(istEffPct[i] / 100, gv('hedefOsteoidPay') / 100).map(b => i === 0 || istTargetAdet[i] <= 0 ? 0 : b * korseCountIst[i] / istTargetAdet[i])) };
  _upBy.istanbul.full = _upIstFull;
  const _upBraces = c => [0,1,2,3,4].map(i => _upBy[c] ? _upBy[c][i].reduce((a, b) => a + b, 0) : 0);
  const _upK = (c, key) => [0,1,2,3,4].map(i => _upBy[c] ? _upBy[c][i].reduce((a, b, j) => a + b * _upUnit(_upSegsOn[j])[key], 0) / 1000 : 0); // €K
  // Net revenue (after doctor fees, materials, royalty) — Y1 actual; Y2-5 =
  // braces × that year's premium-mix unit net (FU-3).
  const _upIstNetK = _upK('istanbul', 'net');
  const istGrossRow = [1,2,3,4,5].map((y, i) => y===1 ? y1BrutM1 : Math.round(korseCountIst[i] * mixUnit(i).net / 1000 + _upIstNetK[i])); // + upside (UP-1)

  // ── B2B channel (flagship Istanbul) — Years 2-5 ramped stream ────────────
  // B2B braces are printed centrally and shipped to buyer clinics — they
  // consume PRINTERS ONLY (no rooms, orthotist or workshop time), so B2B
  // scales printer capex but adds no staff/premises opex. Volume ramps the
  // MONTHLY rate from the Year-1 exit rate (korseB2B[11]) toward the Year-5
  // target (b2bHedefAdetYil/12) over b2bRampYears, then holds. If the target
  // is below the exit rate the ramp declines — a valid scenario, allowed.
  const _rowsB2Bproj = window._lastRowsB2B || [];
  const _b2bY1Adet   = (V.korseB2B || []).reduce((s,v) => s + (Number(v)||0), 0); // actual Y1 total
  const _b2bExitRate = Number((V.korseB2B || [])[11]) || 0;                       // Y1 exit monthly rate
  const _b2bTargetMo = (V.b2bHedefAdetYil || 0) / 12;
  const _b2bRampYears = V.b2bRampYears || 3;
  // b2bHedefAdetYil = 0 is an off switch: the forward (Y2-5) stream is removed
  // cleanly and printers fall back to B2C-only. Year 1 always keeps its actual
  // B2B (historical). A target that's positive but below the exit rate ramps
  // DOWN — a valid scenario, allowed.
  const _b2bOff = (V.b2bHedefAdetYil || 0) <= 0;
  const b2bAdetRow = [1,2,3,4,5].map(y => {
    if (y === 1) return _b2bY1Adet;
    if (_b2bOff) return 0;
    const mo = _b2bExitRate + (_b2bTargetMo - _b2bExitRate) * _istRampFrac(y, _b2bRampYears);
    return Math.max(0, Math.round(mo * 12));
  });
  // Year-end B2B unit net (€/brace) — last 3 months of the Year-1 B2B engine,
  // exactly the B2C sonBirimNet convention. B2B bears the SAME deductions the
  // Y1 B2B engine applies (Scientific/Education/Library doctor fees + print/
  // material cost + royalty); it does NOT bear rooms/orthotist/workshop, which
  // are volume-independent of B2B. rowsB2B.gelirNet already nets all of these.
  const _b2bLast3   = _rowsB2Bproj.slice(-3);
  const _b2bLast3Ad = _b2bLast3.reduce((s,r) => s + (r.korse||0), 0) || 1;
  const _b2bLast3Net= _b2bLast3.reduce((s,r) => s + (r.gelirNet||0), 0);
  const _b2bUnitNetEur = toEur(_b2bLast3Net) / _b2bLast3Ad * 1000; // €/brace (0 if no Y1 B2B)
  // Year 1 = actual Y1 B2B net (exact, matches the monthly model); Years 2-5 =
  // ramped volume × year-end unit net. €K net contribution.
  const b2bGrossRow = b2bAdetRow.map((a,i) => i===0 ? toEur(window._lastGelirB2B||0) : Math.round(a * _b2bUnit(i).net / 1000)); // SR-1: B2B upgrade path

  // ── Istanbul Years 2-5 opex — capacity-derived (time & motion) ───────────
  // Year 1 (index 0) keeps its real monthly-engine opex (y1GiderEur). Years
  // 2-5 are capacity-built (review 4-B14 — one method, described the same way
  // on the Multi-Year Plan and Methodology pages): the STRUCTURAL Y1 base (rent,
  // expert orthotist, operator, interns, utilities, kitchen, admin, advertising)
  // carries real cost step-ups of ×1.15/1.18/1.22/1.25, then ADD freshly derived
  // capacity lines: (a) printer capex, (b) fitting-orthotist + support staff,
  // (c) branch premises. The Y1 base is first stripped of its own capacity
  // staff (the fitting-orthotist + support lines Prompt 2 added to the
  // monthly engine) so those are never double-counted when the derived lines
  // are added back on top.
  const sgkCproj = gv('sgkCarpan');
  const _y1CapStaffTRY = rows.reduce((s,r) => s + (r.fittingOrtoBrut||0) + (r.ayDestek||0), 0);
  const _y1HoTRY = rows.reduce((s,r) => s + (r.hoAy||0), 0);
  const y1BaseGiderEur = toEur(y1Gider - _y1CapStaffTRY - _y1HoTRY); // structural Y1 opex, €K (capacity staff and head office removed — head office is allocated explicitly, FU-5)
  const _inflMult = [1, 1.15, 1.18, 1.22, 1.25];
  // B2B printer sizing per year uses the ramped B2B stream (b2bAdetRow[y]/12),
  // not a flat hold — B2B consumes printers only (never rooms/orthotist/
  // workshop), so it lifts printer capex but no other opex line.
  // Year-1 closing printer count = Y1's peak monthly requirement (floored at
  // 2), the starting floor for Y2+ cumulative printer purchases (Prompt 2).
  let _y1PrinterClose = 2;
  (V.korse || []).forEach((k, i) => {
    _y1PrinterClose = Math.max(_y1PrinterClose, clinicCapacityProfile(Number(k)||0, Number((V.korseB2B||[])[i])||0).printers);
  });
  const _ekipmanOsteoiddenProj = V.ekipmanOsteoidden !== false;
  const _printerBirimEur = V.printerEurFiyat || 35000; // € per printer
  const _ekOrtotistM = V.ekOrtotistM || 65000;
  const _destekMproj = gv('destekM');
  const _subeSetupTRY = V.subeSetupTRY || 900000;
  const _branchUtilAy = gv('elektrik') + gv('internet') + gv('sarf');
  // Per-year build-out detail for the Growth page. Index 0 = Year 1's own
  // peak-month profile (from the monthly engine), for display completeness.
  const _y1PeakProf = clinicCapacityProfile(Math.max(...(V.korse||[0]).map(Number)), _b2bExitRate);
  const _y1MaxB2C = Math.max(...(V.korse||[0]).map(Number));
  const _y1B2cPrinters = Math.max(1, Math.ceil(_y1MaxB2C / (V.korsePerPrinterAy||66)));
  const _istCapY1 = {
    printers: _y1PrinterClose, newPrinters: 0, b2cPrinters: _y1B2cPrinters, b2bPrinters: Math.max(0, _y1PrinterClose - _y1B2cPrinters),
    orthotists: _y1PeakProf.orthotists, support: _y1PeakProf.supportStaff,
    rooms: _y1PeakProf.rooms, branches: _y1PeakProf.branches, newBranches: 0, branchSetupEurK: 0, printerCapexEurK: 0,
  };
  const _kppLoop = V.korsePerPrinterAy || 66;
  // One capacity run over Years 2-5. withSgk = size on private + SGK fitting
  // volume (the live model); false = private only (the counterfactual that
  // isolates the SGK line's own extra capacity cost, BC-4).
  function _istOpexRun(withSgk) {
  const istCapBuildout = [_istCapY1, null, null, null, null];
  let _prevPrinters = _y1PrinterClose;
  let _prevBranches = 0;
  const istOpexRow = [0,1,2,3,4].map(i => {
    if (i === 0) return y1GiderEur; // Year 1 — real monthly-engine opex, unchanged
    const monthlyB2C = (korseCountIst[i] * (1 + (withSgk ? _sgkSi(i) : 0)) + _upBraces('istanbul')[i]) / 12; // SGK (BC-4) and upside (UP-1) braces are fitted too
    const monthlyB2B = b2bAdetRow[i] / 12; // ramped B2B stream — printers only
    const prof = clinicCapacityProfile(monthlyB2C, monthlyB2B);
    // (a) printer capex — cumulative required vs prior year, charged in the
    // year acquired; ekipmanOsteoidden (Osteoid supplies the kit) zeroes it.
    // Printers are shared hardware; the B2C/B2B split below is display-only.
    const cumPrinters = Math.max(_prevPrinters, prof.printers);
    const newPrinters = Math.max(0, cumPrinters - _prevPrinters);
    const printerCapexEurK = _ekipmanOsteoiddenProj ? 0 : newPrinters * _printerBirimEur / 1000;
    const _b2cPrinters = Math.max(1, Math.ceil(monthlyB2C / _kppLoop));
    const _b2bPrinters = Math.max(0, cumPrinters - _b2cPrinters);
    _prevPrinters = cumPrinters;
    // (b) staff opex — fitting orthotists (at ekOrtotistM) + workshop support
    // (at destekM), each grossed by SGK and annualised. The expert orthotist
    // and interns are already in the structural base, so they're not re-added.
    const staffTRY = prof.orthotists * _ekOrtotistM * sgkCproj * 12 + prof.supportStaff * _destekMproj * sgkCproj * 12;
    // (c) branch premises ONLY — printers are global (a) and staff global (b),
    // so a branch adds just its one-time fit-out (for branches opened THIS
    // year) plus utilities for every active branch, annualised. (Recurring
    // branch rent is not modelled separately — the branch's own economics
    // live in the multi-year plan; only fit-out + utilities are attributed
    // to the flagship's overflow branch here.)
    const newBranches = Math.max(0, prof.branches - _prevBranches);
    const branchTRY = newBranches * _subeSetupTRY + prof.branches * (_branchUtilAy * 12);
    _prevBranches = prof.branches;
    // (d) inflated structural base + derived € (all €K)
    const opexEurK = Math.round(y1BaseGiderEur * _inflMult[i]) + printerCapexEurK + toEur(staffTRY) + toEur(branchTRY);
    istCapBuildout[i] = {
      printers: cumPrinters, newPrinters, b2cPrinters: _b2cPrinters, b2bPrinters: _b2bPrinters,
      orthotists: prof.orthotists, support: prof.supportStaff,
      rooms: prof.rooms, branches: prof.branches, newBranches,
      branchSetupEurK: toEur(newBranches * _subeSetupTRY), printerCapexEurK: Math.round(printerCapexEurK),
    };
    return Math.round(opexEurK);
  });
  return { opex: istOpexRow, cap: istCapBuildout };
  }
  const _istRun = _istOpexRun(true);
  const _istRunNoSgk = _sgkOn ? _istOpexRun(false) : _istRun;
  const istOpexRow = _istRun.opex, istCapBuildout = _istRun.cap;
  // Istanbul's SGK capacity delta, taken now — istOpexRow is mutated later by
  // the head-office allocation.
  const _sgkIstDeltaK = [0,1,2,3,4].map(i => i ? _istRun.opex[i] - _istRunNoSgk.opex[i] : 0);
  window._lastIstCapBuildout = istCapBuildout;
  // Istanbul operating result, NOT floored (review 4-A3): a ramp-year loss is
  // a loss — it stays in the P&L, in cumulative profit and in the tax base.
  // How it is financed (Stage 1 working capital) is a cash-flow matter, shown
  // only in the cash-flow block (investor inflows → cash balance), never by
  // moving the loss out of the profit line. (Previously floored at 0 with the
  // loss parked in an "opex gap financed by raised capital" row.)
  const istNetRow   = istGrossRow.map((g,i) => g - istOpexRow[i]);
  // Operating loss per year (0 when profitable) — informational only; it is
  // already inside istNetRow and every total built from it.
  const istFinancingGapRow = istGrossRow.map((g,i) => Math.max(0, istOpexRow[i] - g));
  window._lastIstFinancingGapRow = istFinancingGapRow;

  const korseM1    = istNetRow; // Istanbul private-clinic net, post-opex, every year


  // Tetik ayına göre 2. merkez açılış zamanlaması
  // Tetikten 3 ay sonra açılış — en erken Yıl 2 başı (ay 13), en geç ay 24
  const {triggerAy: _trigAy} = calc4AyOrtalama(rows);
  const _acilisAy = _trigAy ? Math.max(13, _trigAy + 3) : 13; // İzmir için otomatik tetik
  const _aktifAyYil2 = Math.max(0, Math.min(12, 25 - _acilisAy));
  // Ankara bağımsız açılış ayı (slider) — global ay numarasına çevir (13-24)
  const _ankaraAcilisAyYil2 = V.ankaraAcilisAy || 3;
  const _ankaraAcilisAy = 12 + _ankaraAcilisAyYil2;
  const _ankaraAktifAyYil2 = Math.max(0, Math.min(12, 25 - _ankaraAcilisAy));
  // Bursa/Gaziantep open in Year 3 (global months 25-36), one year later than
  // Izmir/Ankara's Year 2 — same manual-slider opening mechanism as Ankara,
  // just shifted a year.
  const _bursaAcilisAyYil3 = V.bursaAcilisAy || 3;
  const _bursaAcilisAy = 24 + _bursaAcilisAyYil3;
  const _bursaAktifAyYil3 = Math.max(0, Math.min(12, 37 - _bursaAcilisAy));
  const _gaziantepAcilisAyYil3 = V.gaziantepAcilisAy || 3;
  const _gaziantepAcilisAy = 24 + _gaziantepAcilisAyYil3;
  const _gaziantepAktifAyYil3 = Math.max(0, Math.min(12, 37 - _gaziantepAcilisAy));

  // Years to reach each city's designated market-potential target (1-5,
  // user-adjustable — see _satRampFrac/_istRampFrac above). Defaults match
  // this model's original fixed ramp shape as closely as the linear
  // generalization allows.
  const izmirRampYears = V.izmirRampYears || 4;
  const ankaraRampYears = V.ankaraRampYears || 4;
  const bursaRampYears = V.bursaRampYears || 4;
  const gaziantepRampYears = V.gaziantepRampYears || 4;

  updateMerkezGiderNotu('izmir');
  updateMerkezGiderNotu('ankara');
  updateMerkezGiderNotu('bursa');
  updateMerkezGiderNotu('gaziantep');

  // İzmir / Ankara açılış tarihi — Nisan 2026 başlangıç + acilisAy - 1 ay
  const _aylar = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // Generalized to any year, not just Year 2 — Bursa/Gaziantep open in Year 3
  // (global months 25-36); ay=15 still resolves to "Year 2 Month 3" exactly
  // as before.
  function _acilisLabel(ay) {
    const d = new Date(2026, 3, 1); // April 2026
    d.setMonth(d.getMonth() + ay - 1);
    const yil = Math.ceil(ay / 12);
    const ayInYil = ay - (yil - 1) * 12;
    return 'Year ' + yil + ' Month ' + ayInYil + ' · ' + _aylar[d.getMonth()] + ' ' + d.getFullYear();
  }
  const _izmirAcilisKpi = document.getElementById('izmirAcilisKpi');
  const _ankaraAcilisKpi = document.getElementById('ankaraAcilisKpi');
  const _bursaAcilisKpi = document.getElementById('bursaAcilisKpi');
  const _gaziantepAcilisKpi = document.getElementById('gaziantepAcilisKpi');
  if (_izmirAcilisKpi) _izmirAcilisKpi.style.display = V.izmirAktif ? '' : 'none';
  if (_ankaraAcilisKpi) _ankaraAcilisKpi.style.display = V.ankaraAktif ? '' : 'none';
  if (_bursaAcilisKpi) _bursaAcilisKpi.style.display = V.bursaAktif ? '' : 'none';
  if (_gaziantepAcilisKpi) _gaziantepAcilisKpi.style.display = V.gaziantepAktif ? '' : 'none';
  const _izmirAcilisEl = document.getElementById('izmirAcilisTarihi');
  const _ankaraAcilisEl = document.getElementById('ankaraAcilisTarihi');
  const _bursaAcilisEl = document.getElementById('bursaAcilisTarihi');
  const _gaziantepAcilisEl = document.getElementById('gaziantepAcilisTarihi');
  if (_izmirAcilisEl && V.izmirAktif) _izmirAcilisEl.textContent = _acilisLabel(_acilisAy);
  if (_ankaraAcilisEl && V.ankaraAktif) _ankaraAcilisEl.textContent = _acilisLabel(_ankaraAcilisAy);
  if (_bursaAcilisEl && V.bursaAktif) _bursaAcilisEl.textContent = _acilisLabel(_bursaAcilisAy);
  if (_gaziantepAcilisEl && V.gaziantepAktif) _gaziantepAcilisEl.textContent = _acilisLabel(_gaziantepAcilisAy);

  // Büyüme Mantığı tetik notu
  const _trigNote = document.getElementById('triggerNote');
  if (_trigNote) {
    const _sehirAdi = V.izmirAktif ? 'Izmir' : V.ankaraAktif ? 'Ankara' : '2nd center';
    const _acilisLabel = _acilisAy <= 12 ? 'Year 1 Month '+_acilisAy : 'Year 2 Month '+(_acilisAy-12);
    if (_trigAy) {
      _trigNote.textContent = 'Trigger fires at Month '+_trigAy+' in current model — '+_sehirAdi+' opening at '+_acilisLabel+' (trigger + 3 months prep). 4-month moving average filters single-month fluctuations.';
    } else {
      _trigNote.textContent = 'Trigger not yet firing in current model — 12 months ends before ramp reaches sufficient profit. '+_sehirAdi+' opening defaults to Year 2 start.';
    }
  }

  // İzmir tetik bilgi kutusu
  const _izmirTInfo = document.getElementById('izmirTriggerInfo');
  if (_izmirTInfo) {
    const _acilisYilAy = _acilisAy <= 12 ? 'Year 1 Month '+_acilisAy : 'Year 2 Month '+(_acilisAy-12);
    if (_trigAy) {
      _izmirTInfo.innerHTML = '◎ Trigger: <b>Month '+_trigAy+'</b> &nbsp;→&nbsp; Opening: <b>'+_acilisYilAy+'</b> &nbsp;→&nbsp; <b>'+_aktifAyYil2+' months</b> active in Year 2';
    } else {
      _izmirTInfo.innerHTML = '◎ No trigger yet — default opening: <b>Year 2 Month 1</b> &nbsp;→&nbsp; <b>12 months</b> active';
    }
  }

  // Yıl 5 hedef gelirleri (gross brace revenue at target market share)
  // Satellite markets = pazarTR × regional catchment × youth weight (CM-1)
  const pazarIzmir  = Math.round(gv('pazarTR') * satMarketShare('izmir'));
  const pazarAnkara = Math.round(gv('pazarTR') * satMarketShare('ankara'));
  const pazarBursa = Math.round(gv('pazarTR') * satMarketShare('bursa'));
  const pazarGaziantep = Math.round(gv('pazarTR') * satMarketShare('gaziantep'));
  // Satellites use the same per-year premium-mix unit economics as Istanbul
  // (mixUnit, FU-3) — one product basis for every centre (audit F6's intent).

  const izmirY5Adet  = V.izmirAktif  ? Math.round(pazarIzmir  * gv('izmirHedefPay')  / 100) : 0;
  const ankaraY5Adet = V.ankaraAktif ? Math.round(pazarAnkara * gv('ankaraHedefPay') / 100) : 0;
  const izmirY5Gelir  = Math.round(izmirY5Adet  * mixUnit(4).net / 1000); // FU-3: Year-5 mix
  const ankaraY5Gelir = Math.round(ankaraY5Adet * mixUnit(4).net / 1000); // FU-3
  // "Y5Adet"/"Y5Gelir" naming kept consistent with Izmir/Ankara even though
  // Bursa/Gaziantep (Year-3 openers) may not fully reach this full-capacity
  // target by the model's actual Year 5, depending on their ramp-years
  // slider — see _satRampFrac / the ramp block below.
  const bursaY5Adet = V.bursaAktif ? Math.round(pazarBursa * gv('bursaHedefPay') / 100) : 0;
  const gaziantepY5Adet = V.gaziantepAktif ? Math.round(pazarGaziantep * gv('gaziantepHedefPay') / 100) : 0;
  const bursaY5Gelir = Math.round(bursaY5Adet * mixUnit(4).net / 1000); // FU-3
  const gaziantepY5Gelir = Math.round(gaziantepY5Adet * mixUnit(4).net / 1000); // FU-3

  // Center-specific Y5 opex — the centre's own clinic costs. Central functions
  // (quality, IT, HR, group finance — not already booked) are charged separately as the head-office add-on
  // allocation below (FU-5).
  //
  // Each satellite's fitting orthotists + workshop support staff are now sized
  // by the SAME time-and-motion engine as Istanbul, from the satellite's own
  // full-capacity monthly volume (its Year-5 target ÷ 12). Satellites are 100%
  // B2C (no B2B routed to them), so profile B2B = 0. The existing single
  // orthotist line is the satellite's EXPERT (kept); derived fitting
  // orthotists come on top at {sehir}OrtotistM, and support staff at a
  // dedicated {sehir}DestekM (default 25000) rather than the intern salary.
  // The profile's room-overflow (rooms > per-site max) is surfaced as a
  // warning tag on the card — satellites never auto-open sub-branches.
  // Upside volume per satellite (UP-1), on the satellite's own ramp.
  const _upSatFr = { izmir: y => _satRampFrac(y, 2, izmirRampYears, _aktifAyYil2 / 12), ankara: y => _satRampFrac(y, 2, ankaraRampYears, _ankaraAktifAyYil2 / 12),
                     bursa: y => _satRampFrac(y, 3, bursaRampYears, _bursaAktifAyYil3 / 12), gaziantep: y => _satRampFrac(y, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12) };
  ['izmir','ankara','bursa','gaziantep'].forEach(s => {
    const full = V[s + 'Aktif'] ? _upFull(satMarketShare(s), gv(s + 'HedefPay') / 100) : _upSegsOn.map(() => 0);
    _upBy[s] = [0,1,2,3,4].map(i => full.map(b => b * _upSatFr[s](i + 1)));
    _upBy[s].full = full;
  });
  const _upFullSum = s => _upBy[s].full.reduce((a, b) => a + b, 0);
  const _satProf = {};
  ['izmir','ankara','bursa','gaziantep'].forEach(function(s) {
    const y5Adet = s==='izmir' ? izmirY5Adet : s==='ankara' ? ankaraY5Adet : s==='bursa' ? bursaY5Adet : gaziantepY5Adet;
    const prof = clinicCapacityProfile(((y5Adet||0) * (1 + _sgkSi(4)) + _upFullSum(s)) / 12, 0); // + SGK (BC-4) and upside (UP-1) braces
    const ortoM = V[s+'OrtotistM'] || 55000;
    const destekM = V[s+'DestekM'] || 25000;
    prof.derivedStaffTRY = prof.orthotists * ortoM * sgkCproj + prof.supportStaff * destekM * sgkCproj;
    const _p0 = _sgkOn ? clinicCapacityProfile(((y5Adet||0) + _upFullSum(s)) / 12, 0) : prof;
    prof.sgkStaffEurK = Math.round(toEur(12 * (prof.derivedStaffTRY - (_p0.orthotists * ortoM * sgkCproj + _p0.supportStaff * destekM * sgkCproj))) * 1.25); // Y5 full-capacity SGK staff cost, €K
    _satProf[s] = prof;
  });
  window._lastSatProfiles = _satProf;
  // Employer SGK burden on the satellite's expert orthotist + intern uses the
  // model-wide multiplier (sgkCproj - 1 = the on-top employer share, so net ×
  // sgkCproj gross) — matching both the derived fitting/support staff on the
  // same line (_satProf...derivedStaffTRY, which already uses sgkCproj) and
  // the flagship's own staffing. Previously a stale hardcoded 23% understated
  // the burden ~₺30K/mo/city vs. the 60% (sgkCarpan 1.6) used everywhere else
  // (audit F5).
  const izmirMonthlyTRY  = (V.izmirKira||80000)  + (V.izmirOrtotistM||55000)  + (V.izmirStajyerM||25000)
    + (V.izmirMutfak||18000)  + (V.izmirSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.izmirOrtotistM||55000)  + (V.izmirStajyerM||25000))  * (sgkCproj - 1))
    + _satProf.izmir.derivedStaffTRY;
  const ankaraMonthlyTRY = (V.ankaraKira||85000) + (V.ankaraOrtotistM||55000) + (V.ankaraStajyerM||25000)
    + (V.ankaraMutfak||18000) + (V.ankaraSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.ankaraOrtotistM||55000) + (V.ankaraStajyerM||25000)) * (sgkCproj - 1))
    + _satProf.ankara.derivedStaffTRY;
  const bursaMonthlyTRY = (V.bursaKira||80000) + (V.bursaOrtotistM||55000) + (V.bursaStajyerM||25000)
    + (V.bursaMutfak||18000) + (V.bursaSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.bursaOrtotistM||55000) + (V.bursaStajyerM||25000)) * (sgkCproj - 1))
    + _satProf.bursa.derivedStaffTRY;
  const gaziantepMonthlyTRY = (V.gaziantepKira||85000) + (V.gaziantepOrtotistM||55000) + (V.gaziantepStajyerM||25000)
    + (V.gaziantepMutfak||18000) + (V.gaziantepSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.gaziantepOrtotistM||55000) + (V.gaziantepStajyerM||25000)) * (sgkCproj - 1))
    + _satProf.gaziantep.derivedStaffTRY;
  const izmirY5GiderEur  = Math.round(toEur(izmirMonthlyTRY  * 12) * 1.25);
  const ankaraY5GiderEur = Math.round(toEur(ankaraMonthlyTRY * 12) * 1.25);
  const bursaY5GiderEur = Math.round(toEur(bursaMonthlyTRY * 12) * 1.25);
  const gaziantepY5GiderEur = Math.round(toEur(gaziantepMonthlyTRY * 12) * 1.25);

  // Full-capacity net at Y5 (gross minus center-specific operating cost base).
  // Not floored at 0 — a satellite's own inputs (target market share vs. its
  // fixed opex) can genuinely imply a loss at any scale, and hiding that
  // behind a floor would silently mask exactly the Branch-vs-Subsidiary tax
  // difference this model exists to show. At realistic/default inputs this
  // stays comfortably positive, so removing the floor doesn't move any
  // existing default-scenario number.
  const izmirFullNet  = V.izmirAktif  ? (izmirY5Gelir  - izmirY5GiderEur) : 0;
  const ankaraFullNet = V.ankaraAktif ? (ankaraY5Gelir - ankaraY5GiderEur) : 0;
  // New centers: user-adjustable ramp (V.{city}RampYears, 1-5) — interpolate
  // from full-capacity net to avoid cost-base distortion.
  // FU-3: each year's revenue = ramped braces × that year's mix unit net;
  // the centre's full-capacity opex ramps with the same fraction as before.
  const _satYearNet = (aktif, adet, gider, fr, i) => aktif ? Math.round(adet * fr * mixUnit(i).net / 1000 - gider * fr) : 0;
  const izmirRow  = [1,2,3,4,5].map((y,i) => _satYearNet(V.izmirAktif,  izmirY5Adet,  izmirY5GiderEur,  _satRampFrac(y, 2, izmirRampYears,  _aktifAyYil2  / 12), i));
  const ankaraRow = [1,2,3,4,5].map((y,i) => _satYearNet(V.ankaraAktif, ankaraY5Adet, ankaraY5GiderEur, _satRampFrac(y, 2, ankaraRampYears, _ankaraAktifAyYil2 / 12), i));
  // Bursa/Gaziantep open in Year 3 — same ramp mechanism as Izmir/Ankara,
  // shifted one year later. At the default 4-year ramp they don't reach 100%
  // of full-capacity net within this model's 5-year horizon (there's no
  // Year 6 to reach it in); dialing their ramp-years slider down to 3 or
  // less reaches it by Year 5 instead.
  const bursaFullNet = V.bursaAktif ? (bursaY5Gelir - bursaY5GiderEur) : 0;
  const gaziantepFullNet = V.gaziantepAktif ? (gaziantepY5Gelir - gaziantepY5GiderEur) : 0;
  const bursaRow = [1,2,3,4,5].map((y,i) => _satYearNet(V.bursaAktif, bursaY5Adet, bursaY5GiderEur, _satRampFrac(y, 3, bursaRampYears, _bursaAktifAyYil3 / 12), i));
  const gaziantepRow = [1,2,3,4,5].map((y,i) => _satYearNet(V.gaziantepAktif, gaziantepY5Adet, gaziantepY5GiderEur, _satRampFrac(y, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12), i));

  // ── Hub-and-spoke: satellite management fee + ownership split ────────────
  // In Subsidiary mode a satellite is a separate Ltd. şirket, majority-owned
  // by the flagship with its own local investors: the flagship charges a
  // management fee on the satellite's GROSS revenue (before any profit split)
  // — earning the fee on 100% of satellite revenue but bearing it only
  // pro-rata to its own equity stake in the remaining profit. That asymmetry
  // is the engine of the model.
  // NOTE: all four satellites default to BRANCH mode ({sehir}SubeMi = true) in
  // the committed defaults — a branch consolidates 100% of the satellite's
  // P&L (incl. losses) into the flagship, with no fee and no minority interest.
  //
  // A satellite can alternatively be run as a flagship Branch (şube) instead
  // — no separate legal entity, so no fee (a company cannot invoice itself)
  // and no minority interest (a branch cannot take local investors); its
  // full net (100%, unclamped — including a loss) consolidates directly into
  // the flagship's own P&L. Turkey has no group taxation: a Subsidiary's
  // losses are trapped in its own Ltd. (only offset its own future profit,
  // 5-yr carryforward) and never touch flagship taxable profit; a Branch's
  // losses flow straight into the flagship's own taxable profit because they
  // ARE the flagship's own P&L, not a separate return.
  const izmirGrossRow  = [1,2,3,4,5].map((y,i) => Math.round(izmirY5Adet  * _satRampFrac(y, 2, izmirRampYears,  _aktifAyYil2  / 12) * mixUnit(i).net / 1000));
  const ankaraGrossRow = [1,2,3,4,5].map((y,i) => Math.round(ankaraY5Adet * _satRampFrac(y, 2, ankaraRampYears, _ankaraAktifAyYil2 / 12) * mixUnit(i).net / 1000));
  // Bursa/Gaziantep: same gross-revenue ramp mechanism, shifted to Year 3 —
  // see bursaRampYears/gaziantepRampYears above.
  const bursaGrossRow = [1,2,3,4,5].map((y,i) => Math.round(bursaY5Adet * _satRampFrac(y, 3, bursaRampYears, _bursaAktifAyYil3 / 12) * mixUnit(i).net / 1000));
  const gaziantepGrossRow = [1,2,3,4,5].map((y,i) => Math.round(gaziantepY5Adet * _satRampFrac(y, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12) * mixUnit(i).net / 1000));

  // Upside segments (UP-1) in each satellite's operating result and net revenue
  // (before the head-office split, the management fee and the equity split).
  [['izmir', izmirRow, izmirGrossRow], ['ankara', ankaraRow, ankaraGrossRow], ['bursa', bursaRow, bursaGrossRow], ['gaziantep', gaziantepRow, gaziantepGrossRow]].forEach(([s, row, gross]) => {
    const up = _upK(s, 'net');
    for (let i = 0; i < 5; i++) { row[i] += Math.round(up[i]); gross[i] += Math.round(up[i]); }
  });
  // ── Head-office add-on (BC-5; FU-5 allocation) ───────────────────────────
  // Only central functions NOT already booked: the operator (business
  // development / doctor relations), YMM bookkeeping, general expenses,
  // advertising, congresses, workshops and other periodic marketing already
  // sit in Istanbul's own costs (Year 1 monthly engine, carried into Years 2-5
  // by the structural base) and serve the whole network — see
  // hoBookedCentral(). The add-on covers quality & regulatory, IT & systems,
  // HR/payroll and group finance controlling.
  // Cost per year = min(hoCapEur, hoCostY1Eur + hoPerCentreEur × (open centres − 1)). Year 1
  // (Istanbul only) is already inside the monthly engine. From Year 2 it is
  // allocated to every open centre by revenue share (net revenue after doctor
  // fees and materials; Istanbul's share includes its B2B line) and charged in
  // each centre's operating result — satellites no longer get central
  // functions for free.
  const _hoPlan = buildOutPlan().centres;
  const _hoOpen = [0,1,2,3,4].map(i => _hoPlan.filter(c => c.aktif && c.yearIdx <= i).length);
  const hoTotalK = _hoOpen.map(n => Math.round(Math.min(V.hoCapEur ?? Infinity, gv('hoCostY1Eur') + gv('hoPerCentreEur') * Math.max(0, n - 1)) / 1000));
  const _hoRev = { istanbul: istGrossRow.map((g,i) => g + (b2bGrossRow[i]||0)), izmir: izmirGrossRow, ankara: ankaraGrossRow, bursa: bursaGrossRow, gaziantep: gaziantepGrossRow };
  const hoAlloc = { istanbul: [0,0,0,0,0], izmir: [0,0,0,0,0], ankara: [0,0,0,0,0], bursa: [0,0,0,0,0], gaziantep: [0,0,0,0,0] };
  hoAlloc.istanbul[0] = hoTotalK[0]; // Year 1: all Istanbul, inside the monthly engine
  for (let i = 1; i < 5; i++) {
    const base = Object.keys(_hoRev).reduce((s,c) => s + Math.max(0, _hoRev[c][i]||0), 0);
    Object.keys(hoAlloc).forEach(c => { hoAlloc[c][i] = base > 0 ? Math.round(hoTotalK[i] * Math.max(0, _hoRev[c][i]||0) / base) : (c === 'istanbul' ? hoTotalK[i] : 0); });
    istOpexRow[i] += hoAlloc.istanbul[i];
    istNetRow[i] -= hoAlloc.istanbul[i];
    istFinancingGapRow[i] = Math.max(0, -istNetRow[i]);
    izmirRow[i] -= hoAlloc.izmir[i]; ankaraRow[i] -= hoAlloc.ankara[i]; bursaRow[i] -= hoAlloc.bursa[i]; gaziantepRow[i] -= hoAlloc.gaziantep[i];
  }
  const yonetimUcretiOran = (V.yonetimUcretiPct ?? 5) / 100;
  const izmirIsSube  = !!V.izmirSubeMi;
  const ankaraIsSube = !!V.ankaraSubeMi;
  const bursaIsSube = !!V.bursaSubeMi;
  const gaziantepIsSube = !!V.gaziantepSubeMi;
  const izmirFlagshipPayOran  = (V.izmirFlagshipPay  ?? 65) / 100;
  const ankaraFlagshipPayOran = (V.ankaraFlagshipPay ?? 65) / 100;
  const bursaFlagshipPayOran = (V.bursaFlagshipPay ?? 65) / 100;
  const gaziantepFlagshipPayOran = (V.gaziantepFlagshipPay ?? 65) / 100;

  const izmirFeeRow  = izmirIsSube  ? izmirGrossRow.map(()=>0)  : izmirGrossRow.map(g  => Math.round(g * yonetimUcretiOran));
  const ankaraFeeRow = ankaraIsSube ? ankaraGrossRow.map(()=>0) : ankaraGrossRow.map(g => Math.round(g * yonetimUcretiOran));
  const bursaFeeRow = bursaIsSube ? bursaGrossRow.map(()=>0) : bursaGrossRow.map(g => Math.round(g * yonetimUcretiOran));
  const gaziantepFeeRow = gaziantepIsSube ? gaziantepGrossRow.map(()=>0) : gaziantepGrossRow.map(g => Math.round(g * yonetimUcretiOran));
  // Subsidiary: satellite's own net additionally bears the management fee
  // before it's split, floored at 0 — a Ltd.'s loss stays trapped inside it,
  // never reducing the flagship's equity-income line. Branch: no fee, full
  // net (can be negative) passes straight through.
  const izmirNetAfterFeeRow  = izmirIsSube  ? izmirRow.slice()  : izmirRow.map((n,i)  => Math.max(0, n  - izmirFeeRow[i]));
  const ankaraNetAfterFeeRow = ankaraIsSube ? ankaraRow.slice() : ankaraRow.map((n,i) => Math.max(0, n  - ankaraFeeRow[i]));
  const bursaNetAfterFeeRow = bursaIsSube ? bursaRow.slice() : bursaRow.map((n,i) => Math.max(0, n - bursaFeeRow[i]));
  const gaziantepNetAfterFeeRow = gaziantepIsSube ? gaziantepRow.slice() : gaziantepRow.map((n,i) => Math.max(0, n - gaziantepFeeRow[i]));
  const izmirEquityRow  = izmirIsSube  ? izmirNetAfterFeeRow.slice()  : izmirNetAfterFeeRow.map(n  => Math.round(n * izmirFlagshipPayOran));
  const ankaraEquityRow = ankaraIsSube ? ankaraNetAfterFeeRow.slice() : ankaraNetAfterFeeRow.map(n => Math.round(n * ankaraFlagshipPayOran));
  const bursaEquityRow = bursaIsSube ? bursaNetAfterFeeRow.slice() : bursaNetAfterFeeRow.map(n => Math.round(n * bursaFlagshipPayOran));
  const gaziantepEquityRow = gaziantepIsSube ? gaziantepNetAfterFeeRow.slice() : gaziantepNetAfterFeeRow.map(n => Math.round(n * gaziantepFlagshipPayOran));
  // Branch: no minority interest — a branch cannot take local investors.
  const izmirMinorityRow  = izmirIsSube  ? izmirRow.map(()=>0)  : izmirNetAfterFeeRow.map((n,i)  => n  - izmirEquityRow[i]);
  const ankaraMinorityRow = ankaraIsSube ? ankaraRow.map(()=>0) : ankaraNetAfterFeeRow.map((n,i) => n  - ankaraEquityRow[i]);
  const bursaMinorityRow = bursaIsSube ? bursaRow.map(()=>0) : bursaNetAfterFeeRow.map((n,i) => n - bursaEquityRow[i]);
  const gaziantepMinorityRow = gaziantepIsSube ? gaziantepRow.map(()=>0) : gaziantepNetAfterFeeRow.map((n,i) => n - gaziantepEquityRow[i]);
  // Flagship-side aggregates — these, not the satellites' own 100% net, are
  // what flows into the flagship's consolidated view, valuation, AND taxable
  // profit (via computeFcfStream(), which taxes `totals` below with the
  // standard 5-yr loss carryforward) — so a Branch's loss reduces flagship
  // KV exactly like a bad month at the Istanbul clinic would, while a
  // Subsidiary's loss (floored above) never does.
  const feeIncomeRow    = [0,1,2,3,4].map(i => izmirFeeRow[i]    + ankaraFeeRow[i]    + bursaFeeRow[i]    + gaziantepFeeRow[i]);
  const equityIncomeRow = [0,1,2,3,4].map(i => izmirEquityRow[i] + ankaraEquityRow[i] + bursaEquityRow[i] + gaziantepEquityRow[i]);
  const minorityRow     = [0,1,2,3,4].map(i => izmirMinorityRow[i] + ankaraMinorityRow[i] + bursaMinorityRow[i] + gaziantepMinorityRow[i]);

  // B2B: flagship (Istanbul) only — the ramped Years 2-5 stream computed above
  // (b2bGrossRow, €K net). Separately zeroable via b2bHedefAdetYil = 0.
  const b2bRow = b2bGrossRow;

  // ── Revenue ladder per centre (review 4-B11) ──────────────────────────────
  // The projection's per-centre "net" rows are OPERATING PROFIT (after all
  // opex), so they must not be labelled revenue. Gross revenue (list price ×
  // braces) and the three doctor fees are derived here on the same basis as
  // the existing rows: Year 1 = the monthly engine's actual sums; Years 2-5 =
  // the same ramp fractions × Year-1 year-end (last-3-month) unit economics —
  // gross €/brace and fee-% of gross — exactly the basis the net rows use.
  //   Gross revenue → − doctor fees = Net revenue after doctor fees
  //   → − materials, royalty/cutting and all opex = Operating profit.
  const _fees3 = [r => r.feeSci||0, r => r.feeEdu||0, r => r.feeLib||0];
  const _sumRows = (rs, f) => rs.reduce((acc, r) => acc + f(r), 0);
  const _pct = (rs, f) => { const g = _sumRows(rs, r => r.gelirBrut||0); return g > 0 ? _sumRows(rs, f) / g : 0; };
  // FU-3: clinic revenue ladder from the same premium-mix unit economics.
  function _revFromBraces(braces, y1Actual) {
    const gross = [], sci = [], edu = [], lib = [], sgk = [];
    braces.forEach((b, i) => {
      if (i === 0 && y1Actual) { gross.push(y1Actual[0]); sci.push(y1Actual[1]); edu.push(y1Actual[2]); lib.push(y1Actual[3]); sgk.push(0); return; }
      const u = mixUnit(i);
      gross.push(Math.round(b * u.gross / 1000)); sci.push(Math.round(b * u.sci / 1000)); edu.push(Math.round(b * u.edu / 1000)); lib.push(Math.round(b * u.lib / 1000));
      sgk.push(Math.round(b * u.sgkGross / 1000));
    });
    const fees = sci.map((v, i) => v + edu[i] + lib[i]);
    return { gross, sci, edu, lib, fees, sgk, afterFees: gross.map((g, i) => g - fees[i]) };
  }
  function _revLines(gross, r3, y1Actual) {
    const [sci, edu, lib] = r3.map((rr, k) => gross.map((g, i) => (i === 0 && y1Actual) ? y1Actual[k] : Math.round(g * rr)));
    const fees = sci.map((v, i) => v + edu[i] + lib[i]);
    return { gross, sci, edu, lib, fees, sgk: gross.map(() => 0), afterFees: gross.map((g, i) => g - fees[i]) };
  }
  const _y1BrutK = toEur(_sumRows(rows, r => r.gelirBrut||0));
  const revIst = _revFromBraces(korseCountIst, [_y1BrutK, toEur(y1Sci), toEur(y1Edu), toEur(y1Lib)]);
  const _satRev = (adet, openYear, ramp, frac1) => _revFromBraces(
    [1,2,3,4,5].map(y => adet * _satRampFrac(y, openYear, ramp, frac1)), null);
  const revIzmir     = _satRev(izmirY5Adet,     2, izmirRampYears,     _aktifAyYil2 / 12);
  const revAnkara    = _satRev(ankaraY5Adet,    2, ankaraRampYears,    _ankaraAktifAyYil2 / 12);
  const revBursa     = _satRev(bursaY5Adet,     3, bursaRampYears,     _bursaAktifAyYil3 / 12);
  const revGaziantep = _satRev(gaziantepY5Adet, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12);
  const _b2bF3 = [r => r.feeSciB2B||0, r => r.feeEduB2B||0, r => r.feeLibB2B||0];
  const _b2bUnitBrutEur = _b2bLast3Ad > 0 ? _sumRows(_b2bLast3, r => r.gelirBrut||0) / eurKur / _b2bLast3Ad : 0;
  const revB2B = _revLines(b2bAdetRow.map((a, i) => i === 0 ? toEur(_sumRows(_rowsB2Bproj, r => r.gelirBrut||0)) : Math.round(a * _b2bUnit(i).gross / 1000)), // SR-1: B2B upgrade path
                           _b2bF3.map(f => _pct(_b2bLast3, f)), _b2bF3.map(f => toEur(_sumRows(_rowsB2Bproj, f))));
  const _revAll = [revIst, revB2B, revIzmir, revAnkara, revBursa, revGaziantep];
  // Upside segments (UP-1) — revenue ladder of every centre, then a per-segment
  // summary of what is already inside the totals.
  [['istanbul', revIst], ['izmir', revIzmir], ['ankara', revAnkara], ['bursa', revBursa], ['gaziantep', revGaziantep]].forEach(([c, r]) => {
    const g = _upK(c, 'gross'), sci = _upK(c, 'sci'), edu = _upK(c, 'edu'), lib = _upK(c, 'lib');
    for (let i = 0; i < 5; i++) {
      r.gross[i] += Math.round(g[i]); r.sci[i] += Math.round(sci[i]); r.edu[i] += Math.round(edu[i]); r.lib[i] += Math.round(lib[i]);
      r.fees[i] = r.sci[i] + r.edu[i] + r.lib[i]; r.afterFees[i] = r.gross[i] - r.fees[i];
    }
    r.upside = g.map(Math.round);
  });
  const _upCs = ['istanbul','izmir','ankara','bursa','gaziantep'];
  const _upSegs = upsideSegments().map(sg => {
    const j = _upSegsOn.findIndex(x => x.key === sg.key), u = _upUnit(sg);
    const raw = [0,1,2,3,4].map(i => j < 0 ? 0 : _upCs.reduce((a, c) => a + _upBy[c][i][j], 0));
    return { key: sg.key, label: sg.label, aktif: sg.aktif, market: sg.vol, unitEur: Math.round(u.net), unit: u,
             braces: raw.map(Math.round), grossK: raw.map(b => Math.round(b * u.gross / 1000)), contribK: raw.map(b => Math.round(b * u.net / 1000)) };
  });
  const upside = { segments: _upSegs, included: true,
    byCentre: Object.fromEntries(_upCs.map(c => [c, _upBraces(c).map(Math.round)])),
    totalBraces: [0,1,2,3,4].map(i => _upSegs.reduce((a, s) => a + s.braces[i], 0)),
    totalContribK: [0,1,2,3,4].map(i => _upSegs.reduce((a, s) => a + s.contribK[i], 0)) };
  const revTotal = {};
  ['gross','sci','edu','lib','fees','sgk','afterFees'].forEach(k => { revTotal[k] = [0,1,2,3,4].map(i => _revAll.reduce((acc, r) => acc + r[k][i], 0)); });

  // Consolidated FLAGSHIP view = own clinic (Istanbul + B2B) + management fee
  // income (100% of all active satellites' fees) + equity income from
  // satellites (flagshipPay% of each satellite's net-after-fee). Minority
  // interest (minorityRow) is deliberately excluded — it belongs to local
  // investors, not the flagship.
  const totals = [0,1,2,3,4].map(i => korseM1[i]+feeIncomeRow[i]+equityIncomeRow[i]+b2bRow[i]);

  // ── Brace counts per year — clinic channel only (Istanbul + Izmir + Ankara);
  // B2B is tracked separately (see korse.html / kpiGridB2B) and not folded in
  // here so this stays consistent with Year 1's and Year 5's existing brace
  // KPIs, which have always excluded B2B. Uses the SAME _istRampFrac/
  // _satRampFrac ramp fractions as the revenue projection above, so brace
  // counts and revenue tell the same growth story instead of two
  // independently-guessed curves.
  // korseCountIst declared earlier (single source for the capacity-derived opex above)
  const korseCountIzmir  = [1,2,3,4,5].map(y => Math.round(izmirY5Adet  * _satRampFrac(y, 2, izmirRampYears,  _aktifAyYil2  / 12)));
  const korseCountAnkara = [1,2,3,4,5].map(y => Math.round(ankaraY5Adet * _satRampFrac(y, 2, ankaraRampYears, _ankaraAktifAyYil2 / 12)));
  const korseCountBursa  = [1,2,3,4,5].map(y => Math.round(bursaY5Adet  * _satRampFrac(y, 3, bursaRampYears,  _bursaAktifAyYil3 / 12)));
  const korseCountGaziantep = [1,2,3,4,5].map(y => Math.round(gaziantepY5Adet * _satRampFrac(y, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12)));
  const korseCountTotal  = [0,1,2,3,4].map(i => korseCountIst[i] + korseCountIzmir[i] + korseCountAnkara[i] + korseCountBursa[i] + korseCountGaziantep[i]);
  // For the Tax Optimization panel's Lever 2 (teknokent royalty pipe) — total
  // royalty paid to Osteoid A.Ş. across all active centers, €K/yr.
  // ── SGK line (BC-4) — its own P&L and cash effect, network total ────────
  // Braces = private braces × sgkIncrementalPct per centre (Year 2+). Revenue
  // at SUT + top-up; direct cost = material + royalty; extra capacity = the
  // difference between the capacity runs with and without the SGK volume
  // (Istanbul) and the SGK share of each satellite's derived staff (ramped
  // like the satellite's other opex). Receivables per computeFcfStream.
  const _sgkCentres = { istanbul: korseCountIst, izmir: korseCountIzmir, ankara: korseCountAnkara, bursa: korseCountBursa, gaziantep: korseCountGaziantep };
  const sgkBraces = {};
  Object.keys(_sgkCentres).forEach(c => { sgkBraces[c] = _sgkCentres[c].map((b, i) => Math.round(b * _sgkSi(i))); });
  sgkBraces.total = [0,1,2,3,4].map(i => Object.keys(_sgkCentres).reduce((a, c) => a + sgkBraces[c][i], 0));
  const _satFr = { izmir: y => _satRampFrac(y, 2, izmirRampYears, _aktifAyYil2 / 12), ankara: y => _satRampFrac(y, 2, ankaraRampYears, _ankaraAktifAyYil2 / 12),
                   bursa: y => _satRampFrac(y, 3, bursaRampYears, _bursaAktifAyYil3 / 12), gaziantep: y => _satRampFrac(y, 3, gaziantepRampYears, _gaziantepAktifAyYil3 / 12) };
  const _sgkCapexK = [0,1,2,3,4].map(i => { const a = _istRun.cap[i] || {}, b = _istRunNoSgk.cap[i] || {}; return i ? Math.round((a.printerCapexEurK||0) + (a.branchSetupEurK||0) - (b.printerCapexEurK||0) - (b.branchSetupEurK||0)) : 0; });
  const _sgkOpexK = [0,1,2,3,4].map(i => i ? _sgkIstDeltaK[i] - _sgkCapexK[i]
      + ['izmir','ankara','bursa','gaziantep'].reduce((a, s) => a + (V[s + 'Aktif'] ? Math.round(_satProf[s].sgkStaffEurK * _satFr[s](i + 1)) : 0), 0) : 0);
  const sgkLine = {
    on: _sgkOn, pct: gv('sgkIncrementalPct'), braces: sgkBraces,
    revK: sgkBraces.total.map(b => Math.round(b * _sgkRevEur / 1000)),
    directK: sgkBraces.total.map((b, i) => Math.round(b * (_privUnit(i).mat + _privUnit(i).roy) / 1000)),
    extraOpexK: _sgkOpexK, extraCapexK: _sgkCapexK,
  };
  sgkLine.contribK = sgkLine.revK.map((v, i) => v - sgkLine.directK[i]);
  sgkLine.ebitdaK = sgkLine.contribK.map((v, i) => v - sgkLine.extraOpexK[i]);
  window._lastRoyaltyRow = korseCountTotal.map((k, i) => Math.round((k + sgkBraces.total[i] + upside.totalBraces[i]) * gv('royaltyEur') / 1000));

  // Yıl 2 KPI güncelle
  window._lastTotals = totals;
  window._lastFeeIncomeRow = feeIncomeRow; // €K, Y1-Y5, pretax — for the DCF sum-of-parts toggle
  // Full live 5-year projection rows (€K) — single source the Methodology /
  // Formula-Validation pages read so their tables MIRROR the live model rather
  // than re-deriving with retired formulas (getMerkezGelir/esikDestek/×1.5-2.2
  // B2B/full-year unit net) — audit F10. Every row here is exactly what the
  // growth-page projection table and consolidated total are built from.
  window._lastProjRows = {
    istNet: korseM1, b2b: b2bGrossRow,
    braces: { istanbul: korseCountIst, izmir: korseCountIzmir, ankara: korseCountAnkara, bursa: korseCountBursa, gaziantep: korseCountGaziantep, b2b: b2bAdetRow, sgk: sgkBraces, upside: Object.assign({ total: upside.totalBraces }, upside.byCentre) },
    sgk: sgkLine,
    upside,
    ho: { total: hoTotalK, openCentres: _hoOpen, alloc: hoAlloc },
    rev: { ist: revIst, b2b: revB2B, izmir: revIzmir, ankara: revAnkara, bursa: revBursa, gaziantep: revGaziantep, total: revTotal },
    fee: feeIncomeRow, equity: equityIncomeRow, minority: minorityRow, totals,
    sat: {
      izmir:     { net: izmirRow,     fee: izmirFeeRow,     equity: izmirEquityRow,     gross: izmirGrossRow,     adet: izmirY5Adet,     fullGross: izmirY5Gelir,     fullNet: izmirFullNet,     aktif: !!V.izmirAktif,     isSube: izmirIsSube,     openYear: 2, ramp: izmirRampYears,     hedefPay: gv('izmirHedefPay'),     color:'#1D9E75' },
      ankara:    { net: ankaraRow,    fee: ankaraFeeRow,    equity: ankaraEquityRow,    gross: ankaraGrossRow,    adet: ankaraY5Adet,    fullGross: ankaraY5Gelir,    fullNet: ankaraFullNet,    aktif: !!V.ankaraAktif,    isSube: ankaraIsSube,    openYear: 2, ramp: ankaraRampYears,    hedefPay: gv('ankaraHedefPay'),    color:'#E8963C' },
      bursa:     { net: bursaRow,     fee: bursaFeeRow,     equity: bursaEquityRow,     gross: bursaGrossRow,     adet: bursaY5Adet,     fullGross: bursaY5Gelir,     fullNet: bursaFullNet,     aktif: !!V.bursaAktif,     isSube: bursaIsSube,     openYear: 3, ramp: bursaRampYears,     hedefPay: gv('bursaHedefPay'),     color:'#c94f2a' },
      gaziantep: { net: gaziantepRow, fee: gaziantepFeeRow, equity: gaziantepEquityRow, gross: gaziantepGrossRow, adet: gaziantepY5Adet, fullGross: gaziantepY5Gelir, fullNet: gaziantepFullNet, aktif: !!V.gaziantepAktif, isSube: gaziantepIsSube, openYear: 3, ramp: gaziantepRampYears, hedefPay: gv('gaziantepHedefPay'), color:'#8a6d1a' },
    },
  };

  // ── 5-Year dataset for the Summary page's Revenue&Cost/Cost Distribution/
  // Cumulative chart (renderTblChart) — reuses only already-computed rows
  // above, no new modeling. Gross/Opex bars stay Istanbul-only (the only
  // entity with real per-year opex, matching what those bars always meant);
  // the Net line is the full consolidated flagship total. Cost Distribution
  // is by center (Istanbul opex + each satellite's own gross-minus-net),
  // since per-category expense detail (rent/staff/ads/...) was never modeled
  // past Year 1. Cumulative starts from the same Setup Cost the Year-1
  // monthly model's own cumBudget already reconciles to (kurulumTop, derived
  // from rows[0] so this never drifts from the real trough), then layers on
  // each year's consolidated net.
  const kurulumTopEur = rows.length ? (rows[0].cumBudget - rows[0].net) / eurKur / 1000 : 0; // €K, matches totals' units
  const cumRow5yr = [];
  { let run = kurulumTopEur; totals.forEach(t => { run += t; cumRow5yr.push(Math.round(run)); }); }
  window._lastYearly = {
    istGross: istGrossRow.map(Math.round),
    istOpex: istOpexRow.map(Math.round),
    consolidatedNet: totals.map(Math.round),
    entityCost: {
      istanbul: istOpexRow.map(Math.round),
      izmir: izmirGrossRow.map((g,i) => Math.max(0, Math.round(g - izmirRow[i]))),
      ankara: ankaraGrossRow.map((g,i) => Math.max(0, Math.round(g - ankaraRow[i]))),
      bursa: bursaGrossRow.map((g,i) => Math.max(0, Math.round(g - bursaRow[i]))),
      gaziantep: gaziantepGrossRow.map((g,i) => Math.max(0, Math.round(g - gaziantepRow[i]))),
    },
    cum: cumRow5yr,
  };
  // For the Tax Optimization panel's Lever 4 (Branch-loss consolidation) —
  // surfaces which satellite (if any) is in Branch mode and loss-making;
  // the actual tax effect already flows through equityIncomeRow -> totals ->
  // computeFcfStream() above, this is display-only.
  window._lastBranchLoss = {
    izmir:  { isSube: izmirIsSube,  row: izmirEquityRow.slice() },
    ankara: { isSube: ankaraIsSube, row: ankaraEquityRow.slice() },
    bursa: { isSube: bursaIsSube, row: bursaEquityRow.slice() },
    gaziantep: { isSube: gaziantepIsSube, row: gaziantepEquityRow.slice() },
  };
  window._lastFcf = computeFcfStream();
  // ── HORIZON & MATURE YEAR (CM-3) ───────────────────────────────────────────
  // Years 1-5 are the model above, unchanged. With V.horizonYears = 7, Years
  // 6-7 continue every centre on its own ramp (a late opener keeps climbing to
  // its target) on the Year-5 price, mix and cost basis — no further inflation
  // step-up, no new openings, no one-off capex (Istanbul and B2B are already at
  // target by Year 5). Head office stays at its Year-5 cost, split by revenue
  // share; tax continues the loss carryforward; working capital follows the
  // SGK receivables. The MATURE YEAR of each centre is the same steady state
  // at 100% of its ramp: volume at target share, full staffing/capacity, SGK
  // per its toggle, upside segments if on, head office allocated across the
  // fully open network.
  window._lastHorizon = (function () {
    const N = V.horizonYears === 7 ? 7 : 5, f = window._lastFcf, L = metricLadder('100');
    const u4 = mixUnit(4), s4 = _sgkSi(4);
    const upNetFull = c => _upBy[c].full.reduce((a, b, j) => a + b * _upUnit(_upSegsOn[j]).net, 0) / 1000;
    const upGrossFull = c => _upBy[c].full.reduce((a, b, j) => a + b * _upUnit(_upSegsOn[j]).gross, 0) / 1000;
    const upBrFull = c => _upBy[c].full.reduce((a, b) => a + b, 0);
    const SAT = { izmir: [izmirY5Adet, izmirY5GiderEur, korseCountIzmir, izmirRow, revIzmir, 2],
                  ankara: [ankaraY5Adet, ankaraY5GiderEur, korseCountAnkara, ankaraRow, revAnkara, 2],
                  bursa: [bursaY5Adet, bursaY5GiderEur, korseCountBursa, bursaRow, revBursa, 3],
                  gaziantep: [gaziantepY5Adet, gaziantepY5GiderEur, korseCountGaziantep, gaziantepRow, revGaziantep, 3] };
    const cap4 = istCapBuildout[4] || {};
    const istSteady = { net: istGrossRow[4], opex: istOpexRow[4] - (hoAlloc.istanbul[4] || 0) - (cap4.printerCapexEurK || 0) - (cap4.branchSetupEurK || 0),
                        gross: revIst.gross[4], priv: korseCountIst[4], sgk: korseCountIst[4] * s4, up: upBrFull('istanbul') };
    const b2bSteady = { net: b2bGrossRow[4], gross: revB2B.gross[4], priv: b2bAdetRow[4] };
    // one year at ramp fraction fr per satellite (fr = 1 → mature)
    const satYear = (s, fr) => { const [adet, gider] = SAT[s]; if (!V[s + 'Aktif']) return { net: 0, opex: 0, gross: 0, priv: 0, sgk: 0, up: 0 };
      return { net: (adet * u4.net / 1000 + upNetFull(s)) * fr, opex: gider * fr, gross: (adet * u4.gross / 1000 + upGrossFull(s)) * fr, priv: adet * fr, sgk: adet * fr * s4, up: upBrFull(s) * fr }; };
    const allocHo = parts => { // parts: {centre: net revenue}; Istanbul's weight includes B2B (as in the model)
      const w = { istanbul: Math.max(0, parts.istanbul + parts.b2b) };
      Object.keys(SAT).forEach(s => { w[s] = Math.max(0, parts[s] || 0); });
      const tot = Object.values(w).reduce((a, b) => a + b, 0), ho = hoTotalK[4] || 0, o = {};
      Object.keys(w).forEach(k => { o[k] = tot > 0 ? ho * w[k] / tot : (k === 'istanbul' ? ho : 0); });
      return o;
    };
    const stateAt = frOf => { // frOf(s) → ramp fraction; returns per-centre {braces, rev, ebitda}
      const y = { istanbul: istSteady, b2b: b2bSteady };
      Object.keys(SAT).forEach(s => { y[s] = satYear(s, frOf(s)); });
      const ho = allocHo(Object.fromEntries(Object.keys(y).map(k => [k, y[k].net])));
      const o = {};
      o.istanbul = { priv: y.istanbul.priv, sgk: y.istanbul.sgk, up: y.istanbul.up, rev: y.istanbul.gross, ebitda: y.istanbul.net - y.istanbul.opex - ho.istanbul };
      o.b2b = { priv: y.b2b.priv, sgk: 0, up: 0, rev: y.b2b.gross, ebitda: y.b2b.net };
      Object.keys(SAT).forEach(s => { o[s] = { priv: y[s].priv, sgk: y[s].sgk, up: y[s].up, rev: y[s].gross, ebitda: y[s].net - y[s].opex - ho[s] }; });
      return o;
    };
    const keys = ['istanbul', 'b2b'].concat(Object.keys(SAT));
    const ext = [5, 6].slice(0, N - 5).map(i => stateAt(s => _upSatFr[s](i + 1)));
    const base = {
      istanbul: { braces: korseCountIst, rev: revIst.gross, ebitda: istNetRow.map((v, i) => v + (L.capex[i] || 0)), op: istNetRow },
      b2b: { braces: b2bAdetRow, rev: revB2B.gross, ebitda: b2bGrossRow, op: b2bGrossRow },
    };
    Object.keys(SAT).forEach(s => { const [, , br, row, rv] = SAT[s]; base[s] = { braces: br, rev: rv.gross, ebitda: row, op: row }; });
    const centres = {};
    keys.forEach(k => {
      const b = base[k], e = ext.map(x => x[k]);
      centres[k] = { braces: b.braces.slice(0, 5).concat(e.map(x => Math.round(x.priv))), rev: b.rev.slice(0, 5).concat(e.map(x => Math.round(x.rev))),
                     ebitda: b.ebitda.slice(0, 5).concat(e.map(x => Math.round(x.ebitda))), op: b.op.slice(0, 5).concat(e.map(x => Math.round(x.ebitda))) };
    });
    const sgkBr = (sgkBraces.total || [0,0,0,0,0]).slice(0, 5).concat(ext.map(x => Math.round(keys.reduce((a, k) => a + x[k].sgk, 0))));
    const upBr = upside.totalBraces.slice(0, 5).concat(ext.map(x => Math.round(keys.reduce((a, k) => a + x[k].up, 0))));
    const tot = { ebitda: L.ebitda.slice(), capex: L.capex.slice(), tax: f.taxPaid.slice(), setup: f.setupOut.slice(), wc: f.wcChange.slice(), fcf: f.fcf.slice(),
                  rev: revTotal.gross.slice(),
                  braces: [0,1,2,3,4].map(i => keys.reduce((a, k) => a + (base[k].braces[i] || 0), 0) + (sgkBr[i] || 0) + (upBr[i] || 0)) };
    let carry = f.carryEnd[4] || 0, recvPrev = (revTotal.sgk[4] || 0) * gv('sgkDelayDays') / 365;
    const kv = (V.kvOrani ?? 25) / 100, taxOn = V.vergiDahil !== false;
    ext.forEach((x, j) => {
      const i = 5 + j;
      const e = keys.reduce((a, k) => a + centres[k].ebitda[i], 0);
      let tax = 0;
      if (taxOn) { if (e <= 0) carry += -e; else { const off = Math.min(carry, e); carry -= off; tax = Math.round((e - off) * kv); } }
      const sgkRevK = sgkBr[i] * _sgkRevEur / 1000, recv = sgkRevK * gv('sgkDelayDays') / 365;
      const wc = -Math.round(recv - recvPrev); recvPrev = recv;
      tot.ebitda.push(e); tot.capex.push(0); tot.tax.push(tax); tot.setup.push(0); tot.wc.push(wc); tot.fcf.push(e - tax + wc);
      tot.rev.push(keys.reduce((a, k) => a + centres[k].rev[i], 0));
      tot.braces.push(keys.reduce((a, k) => a + centres[k].braces[i], 0) + sgkBr[i] + upBr[i]);
    });
    { let r = 0; tot.cum = tot.fcf.map(v => (r += v)); }
    // mature year per centre
    const M = stateAt(() => 1), plan = f.plan, setupOf = k => { const c = plan.centres.find(x => x.key === k); return c && c.aktif ? c.totalEur / 1000 : 0; };
    const firstFull = fn => { for (let y = 1; y <= 15; y++) if (fn(y) >= 1 - 1e-9) return y; return null; };
    const mature = {};
    keys.forEach(k => {
      const m = M[k], aktif = k === 'istanbul' || k === 'b2b' || !!V[k + 'Aktif'];
      const openYear = SAT[k] ? SAT[k][5] : 1;
      const fy = k === 'istanbul' ? firstFull(y => _istRampFrac(y, istRampYears)) : k === 'b2b' ? firstFull(y => _istRampFrac(y, _b2bRampYears)) : firstFull(y => _upSatFr[k](y));
      const setupK = k === 'b2b' ? 0 : setupOf(k);
      mature[k] = aktif ? { privBraces: Math.round(m.priv), sgkBraces: Math.round(m.sgk), upBraces: Math.round(m.up), braces: Math.round(m.priv + m.sgk + m.up),
                            rev: Math.round(m.rev), ebitda: Math.round(m.ebitda), margin: m.rev > 0 ? m.ebitda / m.rev * 100 : null, setupK,
                            paybackYears: setupK > 0 && m.ebitda > 0 ? setupK / m.ebitda : null,
                            maturityYear: fy, yearsToMaturity: fy ? fy - openYear + 1 : null } : null;
    });
    return { n: N, centres, tot, sgkBraces: sgkBr, upBraces: upBr, mature };
  })();
  renderTimeline(rows);
  renderUpsideSummary();
  renderSgkLine();
  renderCatchment();
  renderIstOverlap();
  window._lastBusinessCase = computeBusinessCase();
  renderBusinessCase();
  const _hoN = document.getElementById('hoNote');
  if (_hoN && window._lastProjRows && window._lastProjRows.ho) {
    const H = window._lastProjRows.ho;
    _hoN.textContent = 'Head-office add-on Y1–5 €' + H.total.join('K / €') + 'K for ' + H.openCentres.join(' / ') + ' open centres (cap €' + Math.round((V.hoCapEur ?? 0) / 1000) + 'K). Year 1 sits in Istanbul\'s monthly fixed costs; from Year 2 it is split by revenue share (see each centre\'s Annual Financial Detail).';
  }
  const _mHo = document.getElementById('mHoTerms');
  if (_mHo) _mHo.textContent = '€' + Math.round(gv('hoCostY1Eur') / 1000) + 'K in Year 1 + €' + Math.round(gv('hoPerCentreEur') / 1000) + 'K per additional open centre, capped at €' + Math.round((V.hoCapEur ?? 0) / 1000) + 'K';
  const _hoB = document.getElementById('hoBooked');
  if (_hoB) _hoB.innerHTML = '<b>Already booked central costs (not in the add-on)</b> — Year 1, Istanbul, carried into Years 2–5 in Istanbul\'s structural cost base (×1.15–1.25) and serving every centre:<br>'
    + hoBookedCentral().map(c => '• ' + c.label + ': <b>€' + Math.round(c.eurYr / 1000).toLocaleString('en-US') + 'K/yr</b>').join('<br>')
    + '<br><b>Add-on covers only:</b> quality &amp; regulatory (MDR / ISO 13485 QMS), IT &amp; systems (CRM, scan/CAD licences), HR &amp; payroll administration, group finance controlling &amp; consolidation beyond the YMM bookkeeping.';
  const _sgkCb = document.getElementById('sgkAktifToggle'); if (_sgkCb) _sgkCb.checked = V.sgkAktif === true;
  const _pmN = document.getElementById('premiumMixNote');
  if (_pmN && window._lastPremiumMix) {
    const pm = window._lastPremiumMix;
    const _cp = upgradePath('clinic'), _bp = upgradePath('b2b'), _p1 = v => (Math.round(v * 10) / 10).toFixed(1) + '%';
    _pmN.textContent = 'Upgrade path (set on the Market page) — clinic: Year 1 average ' + _p1(pm.y1ActualPct) + ' (Month 12 ' + _p1(pm.m12Pct) + '), Year 2 ' + _p1(_cp.years[1]) + ', Year 3 onward ' + _p1(_cp.years[2]) + '; B2B: Month 12 ' + _p1(_bp.m12) + ', Year 2 ' + _p1(_bp.years[1]) + ', Year 3 onward ' + _p1(_bp.years[2]) + '. Unit net revenue per brace: standard brace €' + pm.stdNetEur.toLocaleString('en-US') + ', with an upgrade €' + pm.premNetEur.toLocaleString('en-US') + ' → Years 2-5 €' + pm.unitNetEur.slice(1).map(v => v.toLocaleString('en-US')).join(' / ') + '.';
  }
  renderSummary3yr(totals, izmirRow, ankaraRow, b2bRow, y1KorseNet, izmirY5Gelir, ankaraY5Gelir, izmirY5Adet, ankaraY5Adet, bursaRow, gaziantepRow, bursaY5Gelir, gaziantepY5Gelir, bursaY5Adet, gaziantepY5Adet, korseM1);
  const _roadmapEl = document.getElementById('investorRoadmap');
  if (_roadmapEl) renderInvestorRoadmap(_roadmapEl, totals, korseM1, feeIncomeRow, equityIncomeRow, minorityRow, b2bRow, window._lastFcf, izmirRow, ankaraRow, istFinancingGapRow, bursaRow, gaziantepRow);
  if (typeof renderDcf === 'function') { renderDcf(); renderGetiriTable(); }
  renderDeRiskedNarrative();
  renderTaxOptPanel();
  // Izmir/Ankara open within Year 2, so they're always shown once toggled
  // active; Bursa/Gaziantep don't open until Year 3, so they're excluded
  // from the Year 2 label specifically (this mirrors bursaAcilisKpi/
  // gaziantepAcilisKpi, which are Year-3-card KPIs, not Year-2).
  const _aktifCenterLabelY2 = ['Istanbul'].concat(V.izmirAktif?['Izmir']:[]).concat(V.ankaraAktif?['Ankara']:[]).join(' + ');
  const _aktifCenterLabelY3plus = ['Istanbul'].concat(V.izmirAktif?['Izmir']:[]).concat(V.ankaraAktif?['Ankara']:[]).concat(V.bursaAktif?['Bursa']:[]).concat(V.gaziantepAktif?['Gaziantep']:[]).join(' + ');
  // Year 1-4 cards all show the consolidated OPERATING PROFIT (4-B11) — one basis.
  const _y1g = document.getElementById('y1GelirKpi');
  if (_y1g) { _y1g.textContent = (totals[0] < 0 ? '-€' : '~€') + Math.abs(totals[0]) + 'K'; _y1g.className = 'year-kpi-val ' + (totals[0] >= 0 ? 'pos' : 'neg'); }
  ['y2','y3','y4'].forEach((yid, idx) => {
    const i = idx + 1; // totals/korseCountTotal index: Year 2=1, Year 3=2, Year 4=3
    const gEl = document.getElementById(yid+'GelirKpi');
    if (gEl) gEl.textContent = '~€' + totals[i] + 'K';
    const kEl = document.getElementById(yid+'KorseKpi');
    if (kEl) kEl.textContent = korseCountTotal[i].toLocaleString('tr-TR') + ' clinic units (+ B2B line ' + b2bAdetRow[i].toLocaleString('tr-TR') + ', separate)';
    const mEl = document.getElementById(yid+'MerkezKpi');
    if (mEl) mEl.textContent = yid === 'y2' ? _aktifCenterLabelY2 : _aktifCenterLabelY3plus;
  });
  // Kurulum özet güncelle — full label+value rebuild for consistency
  ['izmir','ankara','bursa','gaziantep'].forEach(_updateKurulumOzet);

  // ── Annual Financial Detail — Istanbul (same metrics as the 12-Month Summary,
  // one column per year). Years 2-5 have no monthly/per-product granularity in
  // this projection, so several rows fall back to a Year-1 ratio/mix held
  // constant — same approximation style already used for the Scientific Study /
  // Education / Library fee rows above. Every approximated row is labeled, not asserted as fact.
  const _y1Model = computeYear1(V);
  const istGrossY = istGrossRow; // pre-fixed-opex, €K — same basis every year
  const istNetY   = istNetRow;   // = korseM1; post-opex net, €K — same basis every year

  // Cumulative year-end — Istanbul clinic only, same definition as the 12-Month Summary's "Cumulative year-end"
  const istCumY = [toEur(rows[11].cumBudget)];
  for (let i=1;i<5;i++) istCumY.push(istCumY[i-1] + istNetY[i]);

  // Break-even / cumulative-positive are monthly concepts only meaningful inside Year 1's
  // actual monthly model — Years 2-5 show year-level status instead of a month number.
  const _basAyRow = rows.find(r=>r.net>=0);
  const _pozAyRow = rows.find(r=>r.cumBudget>=0);
  const istBasAyLabels = [_basAyRow?('Month '+_basAyRow.ay):'Not reached in Y1', '—','—','—','—'];
  let istPozAyLabels;
  if (_pozAyRow) {
    istPozAyLabels = ['Month '+_pozAyRow.ay, 'Already positive', 'Already positive', 'Already positive', 'Already positive'];
  } else {
    const _tahmin = _tahminPozAy(rows);
    istPozAyLabels = [_tahmin ? ('~Month '+_tahmin+' (estimated)') : 'Not reached in Y1'];
    for (let i=1;i<5;i++) {
      if (istCumY[i] >= 0 && istCumY[i-1] < 0) istPozAyLabels.push('Reached this year');
      else if (istCumY[i] >= 0) istPozAyLabels.push('Already positive');
      else istPozAyLabels.push('Not yet');
    }
  }

  const istInvestY = [V.dcfInvest ? Math.round(V.dcfInvest/1000) : null, null, null, null, null];
  const istSetupY  = [toEur(_y1Model.kurulumTop), 0, 0, 0, 0];
  const istSciY = revIst.sci, istEduY = revIst.edu, istLibY = revIst.lib; // 4-B11: same basis as gross
  const istRoyaltyY   = korseCountIst.map(k => Math.round(k * gv('royaltyEur') / 1000));

  // Cutting fee (Perf/S+P braces only) — Year 1's actual last-3-month product mix held
  // constant; this projection has no per-product mix at all beyond Year 1.
  const _sonK = lastRows.reduce((s,r) => { const k=r.k||[0,0,0,0]; return s.map((v,j)=>v+k[j]); }, [0,0,0,0]);
  const _sonKesimPct = sonKorse > 0 ? (_sonK[1]+_sonK[3]) / sonKorse : 0;
  const istCuttingY = korseCountIst.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') / 1000));

  // Margin: Year 1 = brace-level margin (net ÷ list price, matches 12-Month Summary exactly);
  // Years 2-5 = operating margin (post-opex net ÷ pre-opex gross) — a different basis, since
  // list-price data doesn't exist beyond Year 1 here. The two are not directly comparable.
  const _y1TBrut = rows.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const _y1BraceMarj = _y1TBrut > 0 ? Math.round(y1KorseNet/_y1TBrut*100) : 0;
  const istMarginY = [_y1BraceMarj].concat(istNetY.slice(1).map((n,idx) => revIst.gross[idx+1] > 0 ? Math.round(n/revIst.gross[idx+1]*100) : null));

  // Capacity build-out cells — Istanbul only. "2+1 orthotists" = 2 fitting +
  // the 1 expert; "4/6 rooms" = rooms of the per-site max; branch fit-out
  // capex is called out in its landing year.
  const _odaMax = V.odaMaxPerKlinik || 6;
  // Printer count/capex split by channel (display only — printers are shared
  // hardware, bought once). A total > PRINTER_OPS_FLAG in any year gets a ⚠
  // space/ops flag for the founder.
  const PRINTER_OPS_FLAG = 15; // Y5 printer count above this warns (space/logistics)
  const istCapCells = istCapBuildout.map(c => {
    if (!c) return '—';
    const split = c.b2bPrinters > 0 ? ' (' + c.b2cPrinters + ' B2C · ' + c.b2bPrinters + ' B2B)' : '';
    const flag = c.printers > PRINTER_OPS_FLAG ? ' ⚠ >' + PRINTER_OPS_FLAG + ' printers' : '';
    const capex = c.printerCapexEurK ? ' · capex €' + c.printerCapexEurK + 'K' : '';
    const bits = c.printers + ' printers' + split + capex + ' · ' + c.orthotists + '+1 orthotists · ' + c.support + ' support · ' + c.rooms + '/' + _odaMax + ' rooms · ' + c.branches + ' branch' + (c.branches===1?'':'es');
    return (c.branchSetupEurK ? bits + ' · +€' + c.branchSetupEurK + 'K fit-out' : bits) + flag;
  });
  renderAnnualDetailTable('istAnnualDetailWrap', 'Istanbul', {
    braces: korseCountIst, grossRev: revIst.gross, afterFees: revIst.afterFees, hoAlloc: hoAlloc.istanbul, netRevenue: istNetY, cumEnd: istCumY,
    basAyLabels: istBasAyLabels, pozAyLabels: istPozAyLabels,
    invest: istInvestY, setup: istSetupY,
    sciFee: istSciY, eduFee: istEduY, libFee: istLibY,
    royalty: istRoyaltyY, cuttingFee: istCuttingY, margin: istMarginY,
    capBuildout: istCapCells,
  });

  // ── Same Annual Financial Detail metrics for Izmir / Ankara. These centers have
  // no monthly model at all (they're ramped from a single full-capacity target),
  // so "Monthly break-even" never applies, and doctor fee/channel/cutting-fee %
  // borrow Istanbul's Year-1 ratios — a second layer of approximation on top of
  // the one Istanbul's own Y2-5 columns already carry. Setup cost lands entirely
  // in the opening year (Year 2 in this model), not spread out.
  // grossRow is passed in already correctly shaped for this city's opening
  // year (Year 2 for Izmir/Ankara, Year 3 for Bursa/Gaziantep) — computed
  // once above (izmirGrossRow/ankaraGrossRow/bursaGrossRow/gaziantepGrossRow)
  // rather than re-derived here, so this works for either ramp shape without
  // hardcoding one of them.
  function _centerAnnualCfg(sehir, korseCountArr, netRevArr, grossRow, feeRow, netAfterFeeRow, equityRow, minorityRowLocal, flagshipPayPct, rev) {
    const aktif = !!V[sehir+'Aktif'];
    const isSube = !!V[sehir+'SubeMi'];
    const grossY = grossRow;
    const setupEurK = aktif ? toEur(getMerkezKurulum(sehir)) : 0;
    // Setup cost lands in the city's OWN opening year, not always Year 2:
    // Izmir/Ankara open Year 2 (index 1), Bursa/Gaziantep open Year 3 (index
    // 2). Reuses the same _MERKEZ_ACILIS_YIL opening-year map the projection
    // uses elsewhere (izmir absent → default 2). Booking Bursa/Gaziantep setup
    // in Year 2 (before they exist) was audit F7.
    const _openIdx = (_MERKEZ_ACILIS_YIL[sehir] || 2) - 1; // 0-based year index
    const setupY = [0,0,0,0,0];
    setupY[_openIdx] = setupEurK;
    // Cumulative uses the satellite's own bottom line AFTER the management
    // fee — that's the real cash position from a local investor's view.
    const cumY = [0];
    for (let i=1;i<5;i++) cumY.push(cumY[i-1] + netAfterFeeRow[i] - (i===_openIdx ? setupEurK : 0));
    const pozAyLabels = ['—'];
    for (let i=1;i<5;i++) {
      if (!aktif) { pozAyLabels.push('Not opened'); continue; }
      pozAyLabels.push(cumY[i] >= 0 ? (i===1 || cumY[i-1] < 0 ? 'Reached this year' : 'Already positive') : 'Not yet');
    }
    const sciY = rev.sci, eduY = rev.edu, libY = rev.lib; // 4-B11: fee-% of gross, year-end mix
    const royaltyY   = korseCountArr.map(k => Math.round(k * gv('royaltyEur') / 1000));
    const cuttingY   = korseCountArr.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') / 1000));
    const marginY    = netRevArr.map((n,i) => rev.gross[i] > 0 ? Math.round(n/rev.gross[i]*100) : null);
    // Capacity build-out — same compact line as Istanbul, from the satellite's
    // own full-capacity profile (100% B2C). Shown from the opening year on
    // (years with braces); a room count over the per-site max gets an inline
    // ⚠ — satellites never auto-open sub-branches, so it's a flag, not a spend.
    const _odaMaxSat = V.odaMaxPerKlinik || 6;
    const _prof = _satProf[sehir];
    let capCells = ['—','—','—','—','—'];
    if (aktif && _prof) {
      const _over = _prof.rooms > _odaMaxSat;
      const _line = _prof.printers + ' printers · ' + _prof.orthotists + '+1 orthotists · ' + _prof.supportStaff + ' support · ' + _prof.rooms + '/' + _odaMaxSat + ' rooms' + (_over ? ' ⚠ over per-site max' : '');
      capCells = korseCountArr.map(k => k > 0 ? _line : '—');
    }
    return {
      braces: korseCountArr, grossRev: rev.gross, afterFees: rev.afterFees, hoAlloc: hoAlloc[sehir], netRevenue: netRevArr, cumEnd: cumY,
      basAyLabels: ['—','—','—','—','—'], pozAyLabels,
      invest: [null,null,null,null,null], setup: setupY,
      sciFee: sciY, eduFee: eduY, libFee: libY,
      royalty: royaltyY, cuttingFee: cuttingY, margin: marginY, capBuildout: capCells,
      // Hub-and-spoke split — only Izmir/Ankara pass these; Istanbul (the
      // flagship's own clinic) doesn't, so renderAnnualDetailTable skips
      // these rows for Istanbul.
      mgmtFee: feeRow, netAfterFee: netAfterFeeRow, flagshipEquity: equityRow,
      minorityLocal: minorityRowLocal, flagshipPayPct, isSube,
    };
  }
  const izmirDetailEl = document.getElementById('izmirAnnualDetailSection');
  if (izmirDetailEl) izmirDetailEl.style.display = V.izmirAktif ? '' : 'none';
  if (V.izmirAktif) {
    renderAnnualDetailTable('izmirAnnualDetailWrap', 'Izmir', _centerAnnualCfg('izmir', korseCountIzmir, izmirRow, izmirGrossRow, izmirFeeRow, izmirNetAfterFeeRow, izmirEquityRow, izmirMinorityRow, Math.round(izmirFlagshipPayOran*100), revIzmir));
  }
  const ankaraDetailEl = document.getElementById('ankaraAnnualDetailSection');
  if (ankaraDetailEl) ankaraDetailEl.style.display = V.ankaraAktif ? '' : 'none';
  if (V.ankaraAktif) {
    renderAnnualDetailTable('ankaraAnnualDetailWrap', 'Ankara', _centerAnnualCfg('ankara', korseCountAnkara, ankaraRow, ankaraGrossRow, ankaraFeeRow, ankaraNetAfterFeeRow, ankaraEquityRow, ankaraMinorityRow, Math.round(ankaraFlagshipPayOran*100), revAnkara));
  }
  const bursaDetailEl = document.getElementById('bursaAnnualDetailSection');
  if (bursaDetailEl) bursaDetailEl.style.display = V.bursaAktif ? '' : 'none';
  if (V.bursaAktif) {
    renderAnnualDetailTable('bursaAnnualDetailWrap', 'Bursa', _centerAnnualCfg('bursa', korseCountBursa, bursaRow, bursaGrossRow, bursaFeeRow, bursaNetAfterFeeRow, bursaEquityRow, bursaMinorityRow, Math.round(bursaFlagshipPayOran*100), revBursa));
  }
  const gaziantepDetailEl = document.getElementById('gaziantepAnnualDetailSection');
  if (gaziantepDetailEl) gaziantepDetailEl.style.display = V.gaziantepAktif ? '' : 'none';
  if (V.gaziantepAktif) {
    renderAnnualDetailTable('gaziantepAnnualDetailWrap', 'Gaziantep', _centerAnnualCfg('gaziantep', korseCountGaziantep, gaziantepRow, gaziantepGrossRow, gaziantepFeeRow, gaziantepNetAfterFeeRow, gaziantepEquityRow, gaziantepMinorityRow, Math.round(gaziantepFlagshipPayOran*100), revGaziantep));
  }

  // Tablo güncelle
  const wrap = document.getElementById('projTableWrap');
  if (wrap) {
    const _lad = metricLadder('investor');
    const _ebitdaTbl = _lad ? _lad.ebitda : null;
    const fmtK = v => '€' + v + 'K';
    const fmt = v => v > 0 ? `<td class="val-pos">~€${v}K</td>` : v < 0 ? `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>` : '<td style="color:#aaa;">—</td>';
    const grow = (v1, vN) => v1 > 0 ? `<td class="val-grow">+${Math.round((vN/v1-1)*100)}%</td>` : '<td style="color:#aaa;">—</td>';
    wrap.innerHTML = `
    <table class="rev-table">
      <thead><tr>
        <th>€K</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th><th>Y1→Y5</th>
      </tr></thead>
      <tbody>
        <tr style="background:#f0efe9;"><td colspan="7" style="font-size:10px;font-weight:700;text-transform:uppercase;color:#555;">Revenue — 100% of every active centre + B2B</td></tr>
        <tr><td>Gross revenue <span style="font-weight:400;font-size:10px;opacity:0.7;">(list price × braces)</span></td>${revTotal.gross.map(fmt).join('')}${grow(revTotal.gross[0],revTotal.gross[4])}</tr>
        <tr><td style="font-size:11px;color:#c94f2a;">− Doctor fees <span style="font-weight:400;font-size:10px;opacity:0.7;">(Scientific ${fmtK(revTotal.sci[4])} · Education ${fmtK(revTotal.edu[4])} · Library ${fmtK(revTotal.lib[4])} in Y5)</span></td>${revTotal.fees.map(v=>fmt(-v)).join('')}<td style="color:#aaa;">—</td></tr>
        ${revTotal.sgk.some(v => v) ? `<tr><td style="font-size:11px;color:#185FA5;">of which SGK channel <span style="font-weight:400;font-size:10px;opacity:0.7;">(extra braces = ${gv('sgkIncrementalPct')}% of private clinic volume from Year 2, at ₺${(gv('sgkPrice') + gv('sgkTopUp')).toLocaleString('en-US')}/brace incl. top-up, no channel fee; cash ${gv('sgkDelayDays')} days later)</span></td>${revTotal.sgk.map(fmt).join('')}<td style="color:#aaa;">—</td></tr>` : ''}
        <tr><td><b>Net revenue after doctor fees</b></td>${revTotal.afterFees.map(fmt).join('')}${grow(revTotal.afterFees[0],revTotal.afterFees[4])}</tr>
        <tr style="background:#f0efe9;"><td colspan="7" style="font-size:10px;font-weight:700;text-transform:uppercase;color:#555;">Operating profit (after materials, royalty/cutting and all operating costs)</td></tr>
        <tr><td>Istanbul clinic</td>${fmt(korseM1[0])}${fmt(korseM1[1])}${fmt(korseM1[2])}${fmt(korseM1[3])}${fmt(korseM1[4])}${grow(korseM1[0],korseM1[4])}</tr>
        ${b2bRow[0] > 0 || b2bRow[1] > 0 ? `<tr><td style="color:#378ADD;">B2B channel (Istanbul)</td>${fmt(b2bRow[0])}${fmt(b2bRow[1])}${fmt(b2bRow[2])}${fmt(b2bRow[3])}${fmt(b2bRow[4])}${grow(b2bRow[0],b2bRow[4])}</tr>` : ''}
        ${V.izmirAktif  ? `<tr><td style="color:#1D9E75;">Izmir Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('izmir', false)}</span></td>${fmt(izmirRow[0])}${fmt(izmirRow[1])}${fmt(izmirRow[2])}${fmt(izmirRow[3])}${fmt(izmirRow[4])}${grow(izmirRow[1],izmirRow[4])}</tr>` : ''}
        ${V.ankaraAktif ? `<tr><td style="color:#E8963C;">Ankara Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('ankara', false)}</span></td>${fmt(ankaraRow[0])}${fmt(ankaraRow[1])}${fmt(ankaraRow[2])}${fmt(ankaraRow[3])}${fmt(ankaraRow[4])}${grow(ankaraRow[1],ankaraRow[4])}</tr>` : ''}
        ${V.bursaAktif ? `<tr><td style="color:#c94f2a;">Bursa Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('bursa', true)}</span></td>${fmt(bursaRow[0])}${fmt(bursaRow[1])}${fmt(bursaRow[2])}${fmt(bursaRow[3])}${fmt(bursaRow[4])}${grow(bursaRow[2],bursaRow[4])}</tr>` : ''}
        ${V.gaziantepAktif ? `<tr><td style="color:#8a6d1a;">Gaziantep Center <span style="font-weight:400;font-size:10px;opacity:0.7;">${_satRowTag('gaziantep', true)}</span></td>${fmt(gaziantepRow[0])}${fmt(gaziantepRow[1])}${fmt(gaziantepRow[2])}${fmt(gaziantepRow[3])}${fmt(gaziantepRow[4])}${grow(gaziantepRow[2],gaziantepRow[4])}</tr>` : ''}
        ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="color:#BA7517;">${_satAggLabels().fee}</td>${fmt(feeIncomeRow[0])}${fmt(feeIncomeRow[1])}${fmt(feeIncomeRow[2])}${fmt(feeIncomeRow[3])}${fmt(feeIncomeRow[4])}${grow(feeIncomeRow[1],feeIncomeRow[4])}</tr>` : ''}
        ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="color:#1D9E75;">${_satAggLabels().equity}</td>${fmt(equityIncomeRow[0])}${fmt(equityIncomeRow[1])}${fmt(equityIncomeRow[2])}${fmt(equityIncomeRow[3])}${fmt(equityIncomeRow[4])}${grow(equityIncomeRow[1],equityIncomeRow[4])}</tr>` : ''}

        <tr class="total"><td>Consolidated operating profit — flagship (clinic + B2B + satellite fee/equity)</td>${fmt(totals[0])}${fmt(totals[1])}${fmt(totals[2])}${fmt(totals[3])}${fmt(totals[4])}${grow(totals[0],totals[4])}</tr>
        <tr><td style="font-size:11px;color:#888;">Memo: head-office add-on (quality &amp; regulatory, IT, HR, group finance) — already inside the rows above, allocated by revenue share</td>${hoTotalK.map(v => fmt(-v)).join('')}<td style="color:#aaa;">—</td></tr>
        ${_ebitdaTbl ? `<tr><td style="font-size:11px;">EBITDA <span style="font-weight:400;font-size:10px;opacity:0.7;">(operating profit + expensed printer/branch capex added back)</span></td>${_ebitdaTbl.map(fmt).join('')}<td style="color:#aaa;">—</td></tr>` : ''}
        ${(V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? `<tr><td style="font-size:11px;color:#999;">Memo: Minority interest — ${isBiz() ? 'local partner' : 'local investors'} (not in total above)</td>${minorityRow.map(v=>`<td style="font-size:11px;color:#999;">${v>0?'€'+v+'K':'—'}</td>`).join('')}<td style="color:#aaa;font-size:11px;">—</td></tr>` : ''}
        <tr style="background:#f7f4ee;"><td colspan="7" style="font-size:10px;font-weight:700;text-transform:uppercase;color:#8a6d1a;">Upside segments — already included in the rows above (memo; toggle on the Market page)</td></tr>
        ${upside.segments.some(s => s.aktif)
          ? upside.segments.filter(s => s.aktif).map(s => `<tr><td style="font-size:11px;color:#8a6d1a;">${s.label} <span style="font-weight:400;font-size:10px;opacity:0.7;">(own SKU + channel: spine surgeons / trauma / physiatrists · ${s.braces[4].toLocaleString('en-US')} braces in Y5 · contribution, no incremental opex)</span></td>${s.contribK.map(fmt).join('')}<td style="color:#aaa;">—</td></tr>`).join('')
            + ''
          : '<tr><td colspan="7" style="font-size:11px;color:#aaa;">No upside segment switched on — the figures above are the paediatric case only.</td></tr>'}
        <tr style="background:#f0efe9;"><td style="font-size:11px;color:#888;">Year 5 target brace count (IST share: %${y5PayPct})</td><td colspan="5" style="text-align:center;color:#888;font-size:11px;">${y5KorseAdet.toLocaleString('tr-TR')} units/year</td></tr>
      </tbody>
    </table>`;
  }

  const noteEl = document.getElementById('projTableNote');
  if (noteEl) noteEl.textContent = 'Istanbul Y1–Y5 = operating profit (net after all operating costs), one consistent basis every year — a ramp-year loss, if any, stays negative in this row and in every total (' + (isBiz() ? 'how it is financed is a cash item — see the peak funding need on the Summary' : 'its financing by Stage 1 working capital is a cash-flow item, shown on the Investor page') + '). Istanbul Y2–Y5 opex is capacity-built: the structural base (Year 1\'s rent, expert orthotist, operator, interns, utilities, kitchen, admin, advertising and periodic costs — with Year 1\'s capacity-driven staff taken out) carries real cost step-ups of ×1.15 / ×1.18 / ×1.22 / ×1.25, and on top of it fitting orthotists, workshop support staff, printers (capex in the year bought) and branch fitting offices (one-time fit-out + utilities; no separate branch rent) are sized each year from that year\'s brace volume by the time-and-motion engine — the same method the Methodology page describes. All four satellites default to Branch (şube) mode: 100% of each centre\'s P&L (including any loss) is consolidated into these figures, with no management fee and no minority interest; besides their own clinic opex they carry a revenue-share allocation of the head-office add-on (quality & regulatory, IT, HR, group finance — functions not already booked). Switching a satellite to Subsidiary Ltd. above turns its row into a memo line — its result then reaches the flagship only as management fee income (on 100% of its gross revenue) plus the flagship\'s equity share of its profit after that fee; the rest is minority interest belonging to ' + (isBiz() ? 'the local partner' : 'local investors') + '. New centers interpolated from full-market net. Figures in €K. Not final.';

  // Yıl 5 kartı KPI'ları güncelle
  const y5g = document.getElementById('y5GelirKpi');
  const y5p = document.getElementById('y5PayKpi');
  const y5k = document.getElementById('y5KorseKpi');
  if (y5g) y5g.textContent = '~€' + totals[4] + 'K';
  const y5PayLabel = '(each % of its own city market) %' + y5PayPct + ' IST'
    + (V.izmirAktif  ? ' · %' + gv('izmirHedefPay').toFixed(1)  + ' IZM' : '')
    + (V.ankaraAktif ? ' · %' + gv('ankaraHedefPay').toFixed(1) + ' ANK' : '')
    + (V.bursaAktif ? ' · %' + gv('bursaHedefPay').toFixed(1) + ' BUR (target; '
        + Math.round(_satRampFrac(5, 3, bursaRampYears) * 100) + '% reached by Y5)' : '')
    + (V.gaziantepAktif ? ' · %' + gv('gaziantepHedefPay').toFixed(1) + ' GAZ (target; '
        + Math.round(_satRampFrac(5, 3, gaziantepRampYears) * 100) + '% reached by Y5)' : '');
  if (y5p) y5p.textContent = y5PayLabel;
  const y5AdetLabel = y5KorseAdet.toLocaleString('tr-TR')
    + (V.izmirAktif  ? ' + ' + izmirY5Adet.toLocaleString('tr-TR')  : '')
    + (V.ankaraAktif ? ' + ' + ankaraY5Adet.toLocaleString('tr-TR') : '')
    + (V.bursaAktif ? ' + ' + korseCountBursa[4].toLocaleString('tr-TR') : '')
    + (V.gaziantepAktif ? ' + ' + korseCountGaziantep[4].toLocaleString('tr-TR') : '')
    + ' units/year';
  if (y5k) y5k.textContent = y5AdetLabel;

  // Grafik
  const ctxRev = _origGetById('revenueChart');
  if (!ctxRev) return;
  if (projChartInst) { projChartInst.destroy(); projChartInst = null; }
  projChartInst = new Chart(ctxRev.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Year 1','Year 2','Year 3','Year 4','Year 5'],
      datasets: [
        { label:'Istanbul clinic — operating profit', data:korseM1, backgroundColor:'rgba(44,74,46,0.85)', borderColor:'#2c4a2e', borderWidth:1, borderRadius:3 },
        ...(b2bRow[0] > 0 || b2bRow[1] > 0 ? [{ label:'B2B — operating profit', data:b2bRow, backgroundColor:'rgba(55,138,221,0.7)', borderColor:'#378ADD', borderWidth:1, borderRadius:3 }] : []),
        ...((V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? [{ label:'Satellite fee income', data:feeIncomeRow, backgroundColor:'rgba(186,117,23,0.7)', borderColor:'#BA7517', borderWidth:1, borderRadius:3 }] : []),
        ...((V.izmirAktif||V.ankaraAktif||V.bursaAktif||V.gaziantepAktif) ? [{ label:'Satellite equity income', data:equityIncomeRow, backgroundColor:'rgba(29,158,117,0.7)', borderColor:'#1D9E75', borderWidth:1, borderRadius:3 }] : []),
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins: {
        legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:12 } },
        tooltip:{ mode:'index', callbacks:{ label: c => c.dataset.label+': €'+c.raw+'K' } }
      },
      scales: {
        x:{ stacked:true, grid:{display:false} },
        y:{ stacked:true, ticks:{ callback: v=>'€'+v+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
      }
    }
  });
}

// Renders a per-year "Annual Financial Detail" table for one center, mirroring
// the 12-Month Summary's own KPI set (shared.js:kpiGrid) so the two pages tell
// a consistent story instead of independently-labeled numbers. cfg values are
// €K unless noted; null renders as "—". Reused for Istanbul, Izmir, Ankara.
function renderAnnualDetailTable(elId, sehirLabel, cfg) {
  const el = document.getElementById(elId);
  if (!el) return;
  const fmtEurK = v => (v===null||v===undefined) ? '<td style="color:#aaa;">—</td>' : (v>=0 ? `<td class="val-pos">€${v}K</td>` : `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>`);
  // "Not applicable this year" (setup cost outside the opening year) uses "—"; a real
  // computed zero fee shows "€0K" — the two aren't the same.
  const fmtCost = v => (!v) ? '<td style="color:#aaa;">—</td>' : `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>`;
  const fmtCostOrZero = v => (v===null||v===undefined) ? '<td style="color:#aaa;">—</td>' : (v===0 ? '<td>€0K</td>' : `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>`);
  const fmtRoyalty = v => (!v) ? '<td style="color:#aaa;">— (not applied)</td>' : `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>`;
  const fmtRoyaltyPos = v => (v===null||v===undefined) ? '<td style="color:#aaa;">—</td>' : `<td>€${v}K</td>`;
  const fmtUnits = v => `<td>${Math.round(v).toLocaleString('tr-TR')} units</td>`;
  const fmtPct = v => (v===null||v===undefined) ? '<td style="color:#aaa;">—</td>' : `<td>${v}%</td>`;
  const fmtText = v => `<td style="font-size:11px;">${v}</td>`;
  const row = (label, cells, note, cls) => `<tr${cls?` class="${cls}"`:''}><td>${label}${note?` <span style="font-weight:400;opacity:0.6;font-size:10px;">${note}</span>`:''}</td>${cells.join('')}</tr>`;
  el.innerHTML = `
  <table class="rev-table">
    <thead><tr><th>${sehirLabel} — Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th></tr></thead>
    <tbody>
      ${row('Total braces', cfg.braces.map(fmtUnits))}
      ${cfg.grossRev ? row('Gross revenue', cfg.grossRev.map(fmtEurK), '(list price × braces)') : ''}
      ${cfg.afterFees ? row('Net revenue after doctor fees', cfg.afterFees.map(fmtEurK), '(gross − Sci/Edu/Library fees)') : ''}
      ${cfg.hoAlloc ? row('Head-office allocation', cfg.hoAlloc.map(fmtCost), '(add-on: quality, IT, HR, group finance — by revenue share; included in operating profit below)') : ''}
      ${row('Operating profit', cfg.netRevenue.map(fmtEurK), '(after materials, royalty/cutting and all operating costs incl. head office)', 'total')}
      ${cfg.mgmtFee ? (cfg.isSube
        ? row('Management fee to flagship', cfg.mgmtFee.map(()=>'<td style="color:#aaa;">n/a — internal</td>'), '(branch/şube — a company cannot invoice itself)')
        : row('Management fee to flagship', cfg.mgmtFee.map(fmtCostOrZero), '(% of gross revenue — see growth.html slider)')
      ) : ''}
      ${cfg.netAfterFee ? row(cfg.isSube ? 'Net (fully consolidated, branch)' : 'Net after management fee', cfg.netAfterFee.map(fmtEurK), null, 'total') : ''}
      ${row('Cumulative year-end', cfg.cumEnd.map(fmtEurK), null, 'total')}
      ${row('Monthly break-even', cfg.basAyLabels.map(fmtText))}
      ${row('Cumulative positive', cfg.pozAyLabels.map(fmtText))}
      ${row((isBiz() ? 'Total setup capex' : 'Total investment'), cfg.invest.map(fmtEurK))}
      ${row('Setup cost', cfg.setup.map(fmtCost))}
      ${row('Scientific study fee', cfg.sciFee.map(fmtCostOrZero), '(Y1 actual · Y2-5 year-end fee % of gross)')}
      ${row('Education fee', cfg.eduFee.map(fmtCostOrZero), '(Y1 actual · Y2-5 year-end fee % of gross)')}
      ${row('Library fee', cfg.libFee.map(fmtCostOrZero), '(Y1 actual · Y2-5 year-end fee % of gross)')}
      ${row('Royalty / year', cfg.royalty.map(fmtRoyalty))}
      ${row('Osteoid A.Ş. royalty', cfg.royalty.map(fmtRoyaltyPos))}
      ${row('Cutting / Osteoid A.Ş.', cfg.cuttingFee.map(fmtRoyaltyPos), '(Y1 product mix % fixed · projection)')}
      ${row('Net margin', cfg.margin.map(fmtPct), '(Y1: brace-level net ÷ list price · Y2-5: operating profit ÷ gross revenue — not directly comparable)')}
      ${cfg.capBuildout ? row('Capacity build-out', cfg.capBuildout.map(fmtText), '(time &amp; motion — printers/orthotists/support/rooms/branches; Y1 = peak-month)') : ''}
      ${cfg.flagshipEquity ? row('↳ Flagship equity income', cfg.flagshipEquity.map(fmtEurK), cfg.isSube ? '(100% — branch, fully consolidated, incl. any loss)' : '('+cfg.flagshipPayPct+'% ownership — see growth.html slider)') : ''}
      ${cfg.minorityLocal ? (cfg.isSube
        ? row(isBiz() ? '↳ Local partner share (minority)' : '↳ Local investor share (minority)', cfg.minorityLocal.map(()=>'<td style="color:#aaa;">n/a — branch</td>'), isBiz() ? '(a branch has no local partner)' : '(a branch cannot take local investors)')
        : row(isBiz() ? '↳ Local partner share (minority)' : '↳ Local investor share (minority)', cfg.minorityLocal.map(fmtRoyaltyPos), '('+(100-cfg.flagshipPayPct)+'% ownership — not flagship income)')
      ) : ''}
    </tbody>
  </table>`;
}
// ── CAPACITY ENGINE (time & motion) ──────────────────────────────────────────
// Pure function — reads only its two arguments plus the capacity sliders in
// V, touches no revenue/cost figure. Used by every clinic (flagship, Istanbul
// branches, satellites) to size fitting rooms, orthotists, workshop support
// staff and printers against a single month's brace volume.
//
// designDay = the worse of the weekend/holiday peak or the weekday average,
// rounded to a whole patient count before anything is sized off it (rooms,
// orthotists, expert load) — you can't build half a fitting room for 0.67 of
// a patient. B2B braces consume printers only: no rooms, no orthotist
// fitting time, no workshop time (patients never set foot in the clinic).
function clinicCapacityProfile(korseB2C_ay, korseB2B_ay) {
  korseB2C_ay = korseB2C_ay || 0;
  korseB2B_ay = korseB2B_ay || 0;
  const active = korseB2C_ay > 0;

  const hastaPerOdaGun    = V.hastaPerOdaGun    || 6;
  const odaMaxPerKlinik   = V.odaMaxPerKlinik   || 6;
  const odaM2             = V.odaM2             || 10;
  const calismaGunAy      = V.calismaGunAy      || 26;
  const haftaSonuGunAy    = V.haftaSonuGunAy    || 9;
  const haftaSonuTalepPct = V.haftaSonuTalepPct ?? 60;
  const visitPerKorse     = V.visitPerKorse     || 1;
  const ortotistDkFitting = V.ortotistDkFitting || 60;
  const expertDkHasta     = V.expertDkHasta     || 8;
  const destekDkHasta     = V.destekDkHasta     || 45;
  const staffUtilPct      = V.staffUtilPct      || 75;
  const korsePerPrinterAy = V.korsePerPrinterAy || 66;

  const visitsAy       = korseB2C_ay * visitPerKorse;
  const weekdayGunAy   = Math.max(1, calismaGunAy - haftaSonuGunAy); // guard divide-by-zero
  const peakDayRaw     = haftaSonuGunAy > 0 ? (visitsAy * (haftaSonuTalepPct / 100)) / haftaSonuGunAy : 0;
  const weekdayAvgRaw  = (visitsAy * (1 - haftaSonuTalepPct / 100)) / weekdayGunAy;
  const designDay      = Math.round(Math.max(peakDayRaw, weekdayAvgRaw));

  const staffDayCap = 8 * (staffUtilPct / 100); // usable staff-hours/day

  const rooms       = active ? Math.max(1, Math.ceil(designDay / hastaPerOdaGun)) : 0;
  const branches     = active ? Math.max(0, Math.ceil((rooms - odaMaxPerKlinik) / odaMaxPerKlinik)) : 0;
  const orthotists   = active ? Math.max(1, Math.ceil((designDay * ortotistDkFitting / 60) / staffDayCap)) : 0;
  // Workshop support work is schedulable across the month, not day-peaked —
  // averaged over working days, not sized to the design day. B2B adds zero.
  const supportStaff = active ? Math.max(1, Math.ceil((korseB2C_ay * destekDkHasta / 60) / (staffDayCap * calismaGunAy))) : 0;
  const expertLoadPct = (designDay * expertDkHasta / 60 / 8) * 100; // report only, warn > 60
  const printers      = Math.max(1, Math.ceil((korseB2C_ay + korseB2B_ay) / korsePerPrinterAy));
  const roomM2        = rooms * odaM2; // for the space sanity note vs V.m2

  return { printers, rooms, branches, orthotists, supportStaff, expertLoadPct, peakDayPatients: designDay, roomM2 };
}

// ── PRINTER & ROBOT KOL ───────────────────────────────────────────────────────
// Auto printer count sizes to the single busiest COMBINED (B2C+B2B) month —
// previously read only V.korse and silently ignored B2B entirely, which
// understated printer needs whenever B2B volume ran ahead of B2C.
function _autoPrinterAdet() {
  const korse = (V.korse || []).map(Number);
  const korseB2B = (V.korseB2B || []).map(Number);
  const n = Math.max(korse.length, korseB2B.length);
  let bestB2C = 0, bestB2B = 0, bestTotal = -1;
  for (let i = 0; i < n; i++) {
    const b2c = korse[i] || 0, b2b = korseB2B[i] || 0;
    if (b2c + b2b > bestTotal) { bestTotal = b2c + b2b; bestB2C = b2c; bestB2B = b2b; }
  }
  return Math.max(2, clinicCapacityProfile(bestB2C, bestB2B).printers);
}
// Lineer regresyonla kümülatif pozitife tahmini varış ayı.
// rows: 12 aylık hesap satırları. Dönüş: null (eğim<=0) veya tahmini ay sayısı (13+).
function _tahminPozAy(rows) {
  const n = rows.length;
  const nets = rows.map(r => r.net);
  // En küçük kareler doğrusal regresyon: net = a + b*t (t=1..n)
  const sumT = n*(n+1)/2, sumT2 = n*(n+1)*(2*n+1)/6;
  const sumN = nets.reduce((s,v)=>s+v,0);
  const sumTN = nets.reduce((s,v,i)=>s+v*(i+1),0);
  const b = (n*sumTN - sumT*sumN) / (n*sumT2 - sumT*sumT); // aylık büyüme eğimi
  const a = (sumN - b*sumT) / n;                            // sabit terim
  // Ay 12'den itibaren ileri projeksiyon
  let cum = rows[n-1].cumBudget;
  for (let k = 1; k <= 120; k++) {
    const projNet = a + b * (n + k);
    cum += projNet;
    if (cum >= 0) return n + k;
  }
  return null; // 10 yıl içinde ulaşılamıyor
}

function _refreshPrinterDisplay() {
  const autoAdet = _autoPrinterAdet();
  const adet = (V.printerAdetManual !== undefined) ? V.printerAdetManual : autoAdet;
  V.printerAdet = adet;
  const eur = adet * (V.printerEurFiyat||35000);
  // Capacity range follows the Braces-per-printer slider (korsePerPrinterAy):
  // lower bound ≈ ⅔ of the rated monthly throughput, upper = the rated figure.
  const _kpp = V.korsePerPrinterAy || 66;
  const kapMin = Math.round(adet * _kpp * 2/3), kapMax = adet * _kpp;
  const korse    = (V.korse    || []).map(Number);
  const korseB2B = (V.korseB2B || []).map(Number);
  const toplam   = korse.map((v,i) => v + (korseB2B[i]||0));
  const maxK = toplam.length ? Math.max.apply(null, toplam) : 0;
  const printerAktif = V.printerAktif !== false;
  const printerCb = document.getElementById('printerToggle');
  if (printerCb) printerCb.checked = printerAktif;
  const printerTag = document.getElementById('printerAktifTag');
  if (printerTag) {
    // Same treatment as robotKolTag — "Included" alone doesn't say who bears
    // the printer capex, so fold in ekipmanOsteoidden too.
    const ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
    if (!printerAktif) { printerTag.textContent = 'Excluded'; printerTag.style.color = '#888'; }
    else if (ekipmanOsteoidden) { printerTag.textContent = 'Included (Osteoid-owned)'; printerTag.style.color = '#534AB7'; }
    else { printerTag.textContent = 'Included (Clinic-owned)'; printerTag.style.color = '#c94f2a'; }
  }
  document.getElementById('printerAdet').textContent = adet;
  document.getElementById('printerTRY').textContent = printerAktif ? '€'+Math.round(eur).toLocaleString('en-US') : '—';
  document.getElementById('printerKapasite').textContent = '~'+kapMin+'–'+kapMax+' braces/month';
  document.getElementById('printerEurDisp').textContent = (V.printerEurFiyat||35000).toLocaleString('tr-TR');
  const priceSl = document.getElementById('s_printerEurFiyat');
  if (priceSl) priceSl.value = V.printerEurFiyat||35000;
  const priceSp = document.getElementById('printerFiyatVal');
  if (priceSp) priceSp.textContent = (V.printerEurFiyat||35000).toLocaleString('tr-TR');
  var info = document.getElementById('printerAutoInfo');
  if (info) info.textContent = '';
}
// KPI row reports what the current brace ramp's busiest combined (B2C+B2B)
// month requires; the space-sanity note uses the flagship's Year-5 target
// volume. The engine also feeds the live P&L (Prompts 2-4) — this card is
// where its assumptions are edited.
function renderCapacityCard() {
  const el = document.getElementById('capRooms');
  if (!el) return;
  const korse = (V.korse || []).map(Number);
  const korseB2B = (V.korseB2B || []).map(Number);
  const n = Math.max(korse.length, korseB2B.length);
  let bestB2C = 0, bestB2B = 0, bestTotal = -1;
  for (let i = 0; i < n; i++) {
    const b2c = korse[i] || 0, b2b = korseB2B[i] || 0;
    if (b2c + b2b > bestTotal) { bestTotal = b2c + b2b; bestB2C = b2c; bestB2B = b2b; }
  }
  const cap = clinicCapacityProfile(bestB2C, bestB2B);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('capRooms', cap.rooms + ' room' + (cap.rooms===1?'':'s'));
  set('capBranches', cap.branches);
  set('capOrthotists', cap.orthotists);
  set('capSupportStaff', cap.supportStaff);
  const loadEl = document.getElementById('capExpertLoad');
  if (loadEl) {
    loadEl.textContent = cap.expertLoadPct.toFixed(0) + '%';
    loadEl.className = 'kpi-val ' + (cap.expertLoadPct > 60 ? 'neg' : 'neu');
  }
  set('capPeakDay', cap.peakDayPatients + ' patients');
  set('capRoomM2', cap.roomM2 + ' m²');

  // Space sanity — flagship at Year-5 target volume: fitting-room m² vs total
  // clinic m² (V.m2). Rooms > 40% of the floorplate warns (leaves too little
  // for workshop / waiting / office).
  const noteEl = document.getElementById('capSpaceNote');
  if (noteEl) {
    const pazarIst = Math.round(gv('pazarTR') * gv('pazarIstPct')/100);
    const y5Adet = window._lastIstEff ? window._lastIstEff.target[4] : Math.round(pazarIst * gv('hedefOsteoidPay')/100); // effective share (CM-2)
    const y5b2b = Number((V.korseB2B||[])[11]) || 0;
    const y5Prof = clinicCapacityProfile(y5Adet/12, y5b2b);
    const m2 = V.m2 || 360;
    const roomM2 = y5Prof.roomM2;
    const pct = m2 > 0 ? roomM2 / m2 * 100 : 0;
    const over = pct > 40;
    noteEl.innerHTML = (over ? '⚠ ' : '') + roomM2 + ' m² of fitting rooms ('
      + y5Prof.rooms + ' × ' + (V.odaM2||10) + ' m²) inside ' + m2 + ' m² — '
      + (over
          ? 'that is ' + pct.toFixed(0) + '% of the floorplate, leaving little for workshop, waiting and office. Consider a larger site or a branch fitting office.'
          : 'workshop, waiting, office in the remaining ' + (m2 - roomM2) + ' m² (' + pct.toFixed(0) + '% in rooms).');
    noteEl.style.background = over ? '#fff8e8' : '';
    noteEl.style.borderColor = over ? '#f0d080' : '';
    noteEl.style.color = over ? '#8a6d1a' : '';
  }
}

function capAssumeGroupHTML(p) {
  const rows = CAP_PARAMS.map(pr => {
    const val = V[pr.k];
    return '<div class="sl-row"><label style="font-size:10px;">' + pr.l + '</label>'
      + '<div class="sl-controls"><input type="range" id="s_cap_' + p + '_' + pr.k + '" min="' + pr.min + '" max="' + pr.max + '" step="' + pr.step + '" value="' + val + '" oninput="svCap(\'' + pr.k + '\',this.value)">'
      + '<span class="sl-val" id="cap_' + p + '_' + pr.k + '" style="min-width:56px;">' + numFmt(pr.k, val) + '</span></div></div>';
  }).join('');
  return '<details open style="margin-top:10px;"><summary style="cursor:pointer;font-size:10px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Capacity assumptions (time &amp; motion — network-wide; edits apply to every clinic)</summary>'
    + '<div class="sl-grid" style="margin-top:8px;">' + rows + '</div></details>';
}
// Inject once per container that exists on the page (only the Multi-Year Plan
// has them). Idempotent via the data-rendered guard.
function renderCapAssume() {
  CAP_PREFIXES.forEach(p => {
    const el = _origGetById(p + 'CapAssume'); // real element or null — not the null-safe stub
    if (el && !el.dataset.capRendered) {
      el.innerHTML = capAssumeGroupHTML(p);
      el.dataset.capRendered = '1';
    }
  });
}
// One setter for all mirror copies: update V, keep every clinic's slider/label
// in lockstep, then recalc.
function svCap(key, val) {
  val = parseFloat(val);
  V[key] = val;
  CAP_PREFIXES.forEach(p => {
    const sl = document.getElementById('s_cap_' + p + '_' + key);
    if (sl && parseFloat(sl.value) !== val) sl.value = val;
    const sp = document.getElementById('cap_' + p + '_' + key);
    if (sp) sp.textContent = numFmt(key, val);
  });
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function svPrinterFiyat(val) {
  val = parseInt(val);
  V.printerEurFiyat = val;
  const disp = document.getElementById('printerFiyatVal');
  if (disp) disp.textContent = val.toLocaleString('tr-TR');
  _refreshPrinterDisplay();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function svRobotKol() {
  const delikAy = (V.aktifAy||[])[1]; const sdAy = (V.aktifAy||[])[3];
  const autoAktif = (delikAy !== undefined && delikAy < 12) || (sdAy !== undefined && sdAy < 12);
  if (V.robotKolAktif === undefined) { V.robotKolAktif = autoAktif; try { localStorage.setItem('osteoid_V', JSON.stringify(V)); } catch(e) {} } // ilk yüklemede otomatik varsayılan — persist so it isn't recomputed each load (audit F21)
  const aktif = V.robotKolAktif;
  const cb = document.getElementById('robotKolToggle');
  if (cb) cb.checked = aktif;
  const tag = document.getElementById('robotKolTag');
  if (tag) {
    // Tag reflects both whether the robot arm is used at all (robotKolAktif)
    // and, if so, who bears its capex (ekipmanOsteoidden) — "Included" alone
    // would be ambiguous about which side pays.
    const ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
    if (!aktif) { tag.textContent = 'Excluded'; tag.style.color = '#888'; }
    else if (ekipmanOsteoidden) { tag.textContent = 'Included (Osteoid-owned)'; tag.style.color = '#534AB7'; }
    else { tag.textContent = 'Included (Clinic-owned)'; tag.style.color = '#c94f2a'; }
  }
  const tryEl = document.getElementById('robotKolTRY');
  if (tryEl) tryEl.textContent = aktif ? '€'+(V.robotKolEurFiyat||30000).toLocaleString('en-US') : '—';
  const priceSl = document.getElementById('s_robotKolEurFiyat');
  if (priceSl) priceSl.value = V.robotKolEurFiyat||30000;
  const priceSp = document.getElementById('robotKolFiyatVal');
  if (priceSp) priceSp.textContent = (V.robotKolEurFiyat||30000).toLocaleString('tr-TR');
  const eurDispEl = document.getElementById('robotKolEurDisp');
  if (eurDispEl) eurDispEl.textContent = (V.robotKolEurFiyat||30000).toLocaleString('tr-TR');
  const infoEl = document.getElementById('robotKolInfo');
  if (infoEl) {
    const dLabel = (delikAy !== undefined && delikAy < 12) ? 'Month '+(delikAy+1)+'+' : 'Inactive';
    const sLabel = (sdAy !== undefined && sdAy < 12) ? 'Month '+(sdAy+1)+'+' : 'Inactive';
    infoEl.textContent = 'SKU status — Perforated: '+dLabel+' · S+D: '+sLabel;
  }
}
function svRobotKolToggle(checked) {
  V.robotKolAktif = checked;
  svRobotKol();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
// Corporate tax (KV) toggle — Klinik Ltd. is subject to 25% KV by default (no
// VAT logic anywhere: orthosis sales are fully VAT-exempt under KDV Kanunu
// 17/4-s, so there's nothing to model on that side).
function _refreshVergiDahil() {
  if (V.vergiDahil === undefined) V.vergiDahil = true;
  const aktif = V.vergiDahil;
  const cb = document.getElementById('vergiDahilToggle');
  if (cb) cb.checked = aktif;
  const tag = document.getElementById('vergiDahilTag');
  if (tag) { tag.textContent = aktif ? 'Applied (with loss carryforward)' : 'Not applied (pre-tax)'; tag.style.color = aktif ? '#534AB7' : '#c94f2a'; }
}
function svVergiDahil(checked) {
  V.vergiDahil = checked;
  _refreshVergiDahil();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
// DCF sum-of-parts toggle — values the satellite management-fee income
// stream at its own (typically higher) multiple instead of blending it into
// the main business's exit multiple.
function _refreshFeeStreamAyriMult() {
  const aktif = !!V.feeStreamAyriMult;
  const cb = document.getElementById('feeStreamAyriMultToggle');
  if (cb) cb.checked = aktif;
  const tag = document.getElementById('feeStreamAyriMultTag');
  if (tag) { tag.textContent = aktif ? 'On (valued separately)' : 'Off (blended into one multiple)'; tag.style.color = aktif ? '#534AB7' : '#888'; }
  const row = document.getElementById('feeExitMultRow');
  if (row) row.style.display = aktif ? '' : 'none';
}
function svFeeStreamAyriMult(checked) {
  V.feeStreamAyriMult = checked;
  _refreshFeeStreamAyriMult();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function svPrinterToggle(checked) {
  V.printerAktif = checked;
  _refreshPrinterDisplay(); // keeps the Included/Excluded + ownership tag logic in one place, same pattern as svRobotKolToggle/svRobotKol
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function svPrinterAdet(delta) {
  const current = V.printerAdetManual !== undefined ? V.printerAdetManual : _autoPrinterAdet();
  const next = Math.max(1, current + delta);
  V.printerAdetManual = next;
  V.printerAdet = next;
  _refreshPrinterDisplay();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function svRobotKolFiyat(val) {
  val = parseInt(val);
  V.robotKolEurFiyat = val;
  const disp = document.getElementById('robotKolFiyatVal');
  if (disp) disp.textContent = val.toLocaleString('tr-TR');
  const tryEl = document.getElementById('robotKolTRY');
  if (tryEl && V.robotKolAktif) tryEl.textContent = '€'+val.toLocaleString('en-US');
  const lbl = document.getElementById('robotKolEurDisp');
  if (lbl) lbl.textContent = val.toLocaleString('tr-TR');
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function updateKapasiteUyari(rows) {
  const el  = document.getElementById('kapasiteUyari');
  const txt = document.getElementById('kapasiteUyariText');
  if (!el || !txt) return;

  // Printer tetiklenme aylarını rows'tan topla
  const tetikAylari = rows.filter(r => r.printerEkMaliyet > 0);

  // Capacity strain: Year 1 warns (never opens branches) when a month's room
  // need exceeds the per-site max, or expert QC load runs past 60%.
  const odaMax = V.odaMaxPerKlinik || 6;
  const odaAsim = rows.filter(r => (r.odaSayisi || 0) > odaMax);
  const expertAsim = rows.filter(r => (r.expertLoadPct || 0) > 60);

  const parts = [];
  if (tetikAylari.length > 0) {
    const ayListesi = tetikAylari.map(r => {
      const adet = Math.round(r.printerEkMaliyet / ((V.printerEurFiyat||35000) * (V.eurKur ?? 50)));
      return 'Month ' + r.ay + ': +' + adet + ' printer (€' + Math.round(r.printerEkMaliyet/(V.eurKur ?? 50)).toLocaleString('en-US') + ')';
    }).join(' · ');
    parts.push({ kind:'ok', text: 'Automatic printer purchase triggered — ' + ayListesi });
  }
  if (odaAsim.length > 0) {
    const mos = odaAsim.map(r => 'M'+r.ay+' ('+r.odaSayisi+' rooms)').join(', ');
    parts.push({ kind:'warn', text: 'Fitting rooms exceed the '+odaMax+'-room per-site max in ' + mos + ' — Year 1 flags this; a branch fitting office would open in the multi-year plan.' });
  }
  if (expertAsim.length > 0) {
    const mos = expertAsim.map(r => 'M'+r.ay+' ('+Math.round(r.expertLoadPct)+'%)').join(', ');
    parts.push({ kind:'warn', text: 'Expert QC load exceeds 60% in ' + mos + ' — a second QC-qualified orthotist may be needed.' });
  }

  if (parts.length === 0) { el.style.display = 'none'; return; }

  el.style.display = 'block';
  const anyWarn = parts.some(p => p.kind === 'warn');
  txt.textContent = parts.map(p => p.text).join('  ·  ');
  const iconSpan = el.querySelector('span[style]');
  const titleSpan = el.querySelector('.kapasiteUyariBaslik');
  if (anyWarn) {
    el.style.background = '#fff8e8';
    el.style.borderColor = '#f0d080';
    if (iconSpan) iconSpan.style.color = '#8a6d1a';
    if (titleSpan) { titleSpan.textContent = '⚠ Capacity Strain'; titleSpan.style.color = '#8a6d1a'; }
  } else {
    el.style.background = '#e8f5ee';
    el.style.borderColor = '#68c48a';
    if (iconSpan) iconSpan.style.color = '#1a7a45';
    if (titleSpan) { titleSpan.textContent = '✓ Printer Triggered'; titleSpan.style.color = '#1a7a45'; }
  }
}


// ── YATIRIM DÖKÜMÜ (Investor Ticket + Clinic cash + Osteoid parent in-kind) ──
// V.dcfInvest is fully derived here — never typed directly.
//  (1) Investor Ticket = the cash this round actually asks for: the working
//      capital buffer + setup capex. Satellite funding
//      (Izmir/Ankara) is a separate future ask, not part of this ticket.
//  (2) Clinic cash = setup capex + working capital (the deepest Year-1 cash
//      trough beyond setup, i.e. operating burn before break-even). Both are
//      read straight off computeYear1()'s own monthly cumBudget line, so this
//      never drifts from the real P&L. Kept as its own figure only because
//      the Nakdi Sermaye tax deduction and Cash-on-Cash Return table still
//      key off it — not part of the Investor Ticket above.
//  (3) Osteoid parent in-kind = machinery only (when ekipmanOsteoidden=true —
//      when false, its cost already lives inside clinic setup above, so it's
//      never counted twice).
// Identity: clinicCashCore === -trough === setupCash + workingCapital, by
// construction (workingCapital is defined as kurulumTop - trough). The
// working-capital BUFFER (V.workingCapBufferEur) is a separate, investor-
// contributed safety margin on top of that model-derived figure — it never
// touches the trough calc itself, so the identity above still holds for the
// core figures; only the reported clinic-cash subtotal (and hence total
// investment) includes the buffer on top.
function renderInvestBreakdown(kurulumTop, rows) {
  const eurK = V.eurKur ?? 50;
  const troughTRY = Math.min(kurulumTop, ...rows.map(r => r.cumBudget));
  const setupCashTRY = -kurulumTop;
  const workingCapTRY = kurulumTop - troughTRY;          // >= 0
  const clinicCashCoreTRY = setupCashTRY + workingCapTRY; // === -troughTRY
  const workingCapBufferEur = gv('workingCapBufferEur');
  const clinicCashEur = clinicCashCoreTRY / eurK + workingCapBufferEur;

  const ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
  const printerAdet = V.printerAdetManual !== undefined ? V.printerAdetManual : _autoPrinterAdet();
  const machineryEur = printerAdet * (V.printerEurFiyat || 35000) + (V.robotKolAktif ? (V.robotKolEurFiyat || 30000) : 0);
  const machineryParentEur = ekipmanOsteoidden ? machineryEur : 0;
  // Osteoid parent in-kind is machinery only.
  const parentInKindEur = machineryParentEur;

  const totalInvestEur = clinicCashEur + parentInKindEur;
  V.dcfInvest = Math.round(totalInvestEur); // derived — kept only for snapshot/backward-compat reads

  // Setup cost covers five centers — Istanbul (Center 1, this model's own
  // capex), Izmir (Center 2), Ankara (Center 3), Bursa (Center 4) and
  // Gaziantep (Center 5) — each their own setup-cost model already used by
  // the Multi-Year Plan's Annual Detail tables. This round funds all five
  // build-outs up front, not just Istanbul's. Each center also carries its
  // itemised pre-opening overheads (preOpeningOverheads, review 4-A8).
  const setupCostsEur = setupCashTRY / eurK;
  // Per-centre setup (capex + overhead) comes from the ONE build-out plan the
  // FCF stream also deducts (buildOutPlan) — so the amount funded here and the
  // amount taken out of free cash are the same number (review 4-A2). An
  // inactive satellite carries no setup in either place.
  const _plan = buildOutPlan();
  const _pc = _plan.centres;
  const overheadC1 = _pc[0].overheadEur, overheadC2 = _pc[1].overheadEur, overheadC3 = _pc[2].overheadEur,
        overheadC4 = _pc[3].overheadEur, overheadC5 = _pc[4].overheadEur;
  const setupC1Eur = _pc[0].totalEur;
  const setupC2Eur = _pc[1].totalEur;
  const setupC3Eur = _pc[2].totalEur;
  const setupC4Eur = _pc[3].totalEur;
  const setupC5Eur = _pc[4].totalEur;

  // Toggle: Bursa/Gaziantep (Center 4/5) open Year 3, by which point the
  // flagship's own after-tax free cash flow (computeFcfStream(), Years 1-2
  // cumulative) already comfortably covers their combined setup cost — see
  // the Cumulative Free Cash KPI on this page. When on, their setup cost is
  // drawn from that operating cash flow instead of the Investor Ticket, so
  // it drops out of Stage 2 and Total Committed shrinks accordingly. The
  // committed default is ON (V.bursaGaziantepFcfFunded=true — self-funded from
  // operating cash flow), set from Deniz's snapshot; toggling off folds the
  // two setups back into the Investor Ticket. Either is a valid scenario.
  const fcfFundedSatellites = V.bursaGaziantepFcfFunded === true;
  const satelliteFcfEur = setupC4Eur + setupC5Eur;

  // Two-stage committed structure: one Shareholders' Agreement signed at
  // Stage-1 closing, but Stage 2's cash (satellite build-outs) only moves once
  // Istanbul milestones are met (see agreement.html's "Structure — Stage 1 &
  // Stage 2" term card). Stage 1 ("Bridge") funds tangible build-out +
  // working capital; Stage 2 ("Committed") the satellite build-outs,
  // released on milestone.
  // The Working Capital Buffer slider is one pool, split by stage1BufferEur:
  // up to that much is front-loaded into Stage 1, the rest (floored at 0, in
  // case stage1BufferEur is dialed above the whole buffer) rolls into Stage 2.
  const stage1BufferEur = gv('stage1BufferEur');
  const stage2BufferEur = Math.max(0, workingCapBufferEur - stage1BufferEur);
  // Toggle: the Stage 2 buffer (deferred remainder) releases once Istanbul
  // is already operational and milestones are met — by then real income
  // exists to draw on, unlike the Stage 1 buffer (needed at Day-1 closing,
  // before any income exists, so it always stays investor-funded). When on,
  // this drops out of Stage 2 and Total Committed shrinks accordingly —
  // same mechanism as the Bursa/Gaziantep FCF-funding toggle above. Default
  // off — the original investor-funded buffer stays the committed default.
  const workingCapBufferFcfFunded = V.workingCapBufferFcfFunded === true;
  const stage1Eur = setupC1Eur + (workingCapTRY / eurK) + stage1BufferEur;
  const stage2Eur = setupC2Eur + setupC3Eur + (fcfFundedSatellites ? 0 : satelliteFcfEur) + (workingCapBufferFcfFunded ? 0 : stage2BufferEur);
  const investorTicketEur = stage1Eur + stage2Eur;
  // Identity guard — Investor Ticket is defined as the two stage subtotals
  // added together (so the breakdown table's grand total always matches what
  // it's summing); this warns if a future edit breaks that on either side.
  if (Math.abs((stage1Eur + stage2Eur) - investorTicketEur) > 0.5) {
    console.warn('Investor Ticket stage split does not reconcile with the total — check renderInvestBreakdown().');
  }

  const _setupByStage = { stage1: 0, stage2: 0, fcf: 0 };
  _pc.forEach(c => { _setupByStage[c.funding] += c.totalEur; });
  const _setupCheckOk = Math.abs(_setupByStage.stage1 + _setupByStage.stage2 + _setupByStage.fcf - _plan.totalSetupEur) < 0.5
    && Math.abs(_setupByStage.stage1 - setupC1Eur) < 0.5
    && Math.abs(_setupByStage.stage2 - (setupC2Eur + setupC3Eur + (fcfFundedSatellites ? 0 : satelliteFcfEur))) < 0.5;
  if (!_setupCheckOk) console.warn('Setup funding does not reconcile (Stage 1 + Stage 2 + self-funded ≠ total setup) — check renderInvestBreakdown()/buildOutPlan().');

  const tbody = document.getElementById('investBreakdownBody');
  if (tbody) {
    const line = (label, eur, cls) =>
      '<tr class="' + (cls||'') + '"><td style="text-align:left;">' + label + '</td>'
      + '<td>₺' + Math.round(eur*eurK).toLocaleString('tr-TR') + '</td>'
      + '<td>€' + Math.round(eur).toLocaleString('en-US') + '</td></tr>';
    tbody.innerHTML =
      '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#534AB7;font-size:10px;text-transform:uppercase;">Stage 1 — Bridge (at closing) — tangible build-out + working capital</td></tr>'
      + line('Setup cost — Center 1, Istanbul (capex' + (overheadC1 ? ' + pre-opening overheads' : '') + ')', setupC1Eur)
      + line('Working capital (Y1 burn beyond setup)', workingCapTRY/eurK)
      + line('Stage 1 buffer (immediate reserve)', stage1BufferEur)
      + line('Stage 1 — subtotal', stage1Eur, 'r-bas')
      + '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#D85A30;font-size:10px;text-transform:uppercase;padding-top:8px;">Stage 2 — Committed (milestone-triggered) — released once Istanbul is operational and milestones are met</td></tr>'
      + line('Setup cost — Center 2, Izmir (capex' + (overheadC2 ? ' + pre-opening overheads' : '') + ')', setupC2Eur)
      + line('Setup cost — Center 3, Ankara (capex' + (overheadC3 ? ' + pre-opening overheads' : '') + ')', setupC3Eur)
      + (fcfFundedSatellites ? '' :
          line('Setup cost — Center 4, Bursa (capex' + (overheadC4 ? ' + pre-opening overheads' : '') + ')', setupC4Eur)
          + line('Setup cost — Center 5, Gaziantep (capex' + (overheadC5 ? ' + pre-opening overheads' : '') + ')', setupC5Eur))
      + (workingCapBufferFcfFunded ? '' : line('Working capital buffer (deferred remainder)', stage2BufferEur))
      + line('Stage 2 — subtotal', stage2Eur, 'r-bas')
      + line('TOTAL COMMITTED (Investor Ticket — Stage 1 + Stage 2)', investorTicketEur, 'r-cum')
      + (fcfFundedSatellites || workingCapBufferFcfFunded ?
          '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#1a7a45;font-size:10px;text-transform:uppercase;padding-top:8px;">Self-funded from flagship operating cash flow — excluded from Investor Ticket</td></tr>'
          + (fcfFundedSatellites ?
              line('Setup cost — Center 4, Bursa (capex' + (overheadC4 ? ' + pre-opening overheads' : '') + ')', setupC4Eur)
              + line('Setup cost — Center 5, Gaziantep (capex' + (overheadC5 ? ' + pre-opening overheads' : '') + ')', setupC5Eur)
            : '')
          + (workingCapBufferFcfFunded ? line('Working capital buffer (deferred remainder)', stage2BufferEur) : '')
          + line('Self-funded — subtotal (paid out of operating cash, deducted from that year\'s free cash flow)', (fcfFundedSatellites ? satelliteFcfEur : 0) + (workingCapBufferFcfFunded ? stage2BufferEur : 0), 'r-bas')
        : '')
      // Setup funding reconciliation (review 4-A2): every active centre's setup
      // is funded from exactly one source, and the three sources add up to the
      // same total the FCF stream deducts.
      + '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#555;font-size:10px;text-transform:uppercase;padding-top:8px;">Setup funding check — each setup counted exactly once</td></tr>'
      + line('Setup funded by Stage 1 (Istanbul)', _setupByStage.stage1)
      + line('Setup funded by Stage 2', _setupByStage.stage2)
      + line('Setup self-funded from free cash', _setupByStage.fcf)
      + line('= Total setup, all active centres (same total the FCF stream deducts)' + (_setupCheckOk ? ' ✓' : ' ⚠ mismatch'), _plan.totalSetupEur, 'r-bas')
      + '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#555;font-size:10px;text-transform:uppercase;padding-top:8px;">Clinic cash (model-derived — feeds the Tax Optimization and Cash-on-Cash Return sections only)</td></tr>'
      + line('Setup cost (capex)', setupCostsEur)
      + line('Working capital (Y1 burn beyond setup)', workingCapTRY/eurK)
      + line('Working capital buffer (additional reserve)', workingCapBufferEur)
      + line('Clinic cash — subtotal', clinicCashEur, 'r-bas')
      + '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#555;font-size:10px;text-transform:uppercase;padding-top:8px;">Osteoid parent — in-kind (machinery only)</td></tr>'
      + line('Machinery (3D printer + robot arm)' + (ekipmanOsteoidden ? '' : ' — inside clinic setup above'), machineryParentEur)
      + line('Parent in-kind — subtotal', parentInKindEur, 'r-bas')
      + line('TOTAL INVESTMENT (legacy blended figure — clinic cash + in-kind)', totalInvestEur, 'r-cum');
  }
  _pc.forEach(c => {
    const e = document.getElementById('preOpenTotalC' + c.n);
    if (e) e.textContent = '€' + Math.round(c.preOpen.total).toLocaleString('en-US');
  });
  const setupDisp1 = document.getElementById('setupCostsEurDisp');
  if (setupDisp1) setupDisp1.textContent = '€' + Math.round(setupC1Eur).toLocaleString('tr-TR');
  const setupDisp2 = document.getElementById('setupCostsEurDisp2');
  if (setupDisp2) setupDisp2.textContent = '€' + Math.round(setupC2Eur).toLocaleString('tr-TR');
  const setupDisp3 = document.getElementById('setupCostsEurDisp3');
  if (setupDisp3) setupDisp3.textContent = '€' + Math.round(setupC3Eur).toLocaleString('tr-TR');
  const setupDisp4 = document.getElementById('setupCostsEurDisp4');
  if (setupDisp4) setupDisp4.textContent = '€' + Math.round(setupC4Eur).toLocaleString('tr-TR');
  const setupDisp5 = document.getElementById('setupCostsEurDisp5');
  if (setupDisp5) setupDisp5.textContent = '€' + Math.round(setupC5Eur).toLocaleString('tr-TR');

  // Feasibility note for the Bursa/Gaziantep self-funding toggle — reads the
  // 5-year FCF stream computed by buildProjection() (one recalc cycle behind
  // on first load, like every other cross-reference into window._lastFcf on
  // this page; harmless since it's informational only, not part of the math
  // above). Counted exactly once (review 4-A2): when ON, the two setups are
  // NOT in Stage 2 and ARE deducted from free cash flow in their opening year
  // (Year 3); when OFF they are in Stage 2 (funding) and the same outflow sits
  // in Year 3's FCF. The check compares operating cash after tax accumulated
  // through Year 2 (before any build-out) with the setup, and reports the
  // lowest year-end cash balance (investor inflows + FCF) over Years 1-5.
  const fcfNoteEl = document.getElementById('fcfFundedNote');
  if (fcfNoteEl) {
    if (!fcfFundedSatellites) {
      fcfNoteEl.style.display = 'none';
    } else {
      const fcf = window._lastFcf;
      const cumY2 = fcf ? fcf.cumOpCash[1] : null;
      fcfNoteEl.style.display = 'block';
      if (cumY2 === null) {
        fcfNoteEl.textContent = 'Feasibility check will appear once the 5-year projection loads.';
      } else {
        const neededK = Math.round(satelliteFcfEur / 1000);
        const spareK = cumY2 - neededK;
        const minBal = fcf.cashBalance ? Math.min(...fcf.cashBalance) : null;
        const minYr = minBal !== null ? fcf.cashBalance.indexOf(minBal) + 1 : null;
        const balTxt = minBal === null ? '' : ' Lowest year-end cash balance (investor inflows + free cash flow, after every setup): €' + minBal.toLocaleString('en-US') + 'K in Year ' + minYr + (minBal >= 0 ? ' — never negative.' : ' — NEGATIVE: the plan is not fully funded.');
        fcfNoteEl.innerHTML = (spareK >= 0
          ? '✓ Operating cash after tax through Year 2 (€' + cumY2.toLocaleString('en-US') + 'K) covers Bursa+Gaziantep\'s combined setup (€' + neededK.toLocaleString('en-US') + 'K), €' + spareK.toLocaleString('en-US') + 'K to spare. That setup is deducted once, from Year 3\'s free cash flow — it is not in Stage 2.'
          : '⚠ Operating cash after tax through Year 2 (€' + cumY2.toLocaleString('en-US') + 'K) falls €' + (-spareK).toLocaleString('en-US') + 'K short of Bursa+Gaziantep\'s combined setup (€' + neededK.toLocaleString('en-US') + 'K) — the shortfall would still need to come from the Investor Ticket or a bridge.')
          + balTxt;
      }
    }
  }

  // Feasibility note for the working-capital-buffer self-funding toggle —
  // Stage 2 as a whole releases once Istanbul is already operational and
  // milestones are met (well before Bursa/Gaziantep's Year-3 opening), so
  // cum[0] (cumulative after-tax free cash through Year 1) is the earliest
  // plausible reference point, not cum[1] like the Bursa/Gaziantep check.
  const bufferNoteEl = document.getElementById('workingCapFcfNote');
  if (bufferNoteEl) {
    if (!workingCapBufferFcfFunded) {
      bufferNoteEl.style.display = 'none';
    } else {
      const fcf = window._lastFcf;
      const cumY1 = fcf ? fcf.cumOpCash[0] : null;
      bufferNoteEl.style.display = 'block';
      if (cumY1 === null) {
        bufferNoteEl.textContent = 'Feasibility check will appear once the 5-year projection loads.';
      } else {
        const neededK = Math.round(stage2BufferEur / 1000);
        const spareK = cumY1 - neededK;
        bufferNoteEl.innerHTML = spareK >= 0
          ? '✓ Cumulative Free Cash through Year 1 (€' + cumY1.toLocaleString('en-US') + 'K) covers the deferred working-capital buffer (€' + neededK.toLocaleString('en-US') + 'K), €' + spareK.toLocaleString('en-US') + 'K to spare.'
          : '⚠ Cumulative Free Cash through Year 1 (€' + cumY1.toLocaleString('en-US') + 'K) falls €' + (-spareK).toLocaleString('en-US') + 'K short of the deferred working-capital buffer (€' + neededK.toLocaleString('en-US') + 'K) — the shortfall would still need to come from the Investor Ticket or a bridge.';
      }
    }
  }

  return { clinicCashEur, parentInKindEur, totalInvestEur, investorTicketEur, stage1Eur, stage2Eur, fcfFundedSatellites, satelliteFcfEur, workingCapBufferFcfFunded, stage2BufferEur };
}

// ── USE OF FUNDS STRIP (index.html) ──────────────────────────────────────────
// Two-segment bar: Stage 1 / Stage 2 build-outs — reads the same
// stage1Eur/stage2Eur renderInvestBreakdown() already
// computed (passed in via inv), so it can never drift from the Investment
// Breakdown table or the hero cards on investor.html. Null-safe: index.html
// is the only page with these ids, every other page just skips it.
function renderUseOfFundsStrip(inv) {
  const bar1 = document.getElementById('useOfFundsStage1');
  const bar2 = document.getElementById('useOfFundsStage2');
  if (!inv || (!bar1 && !bar2)) return;
  const stage2BuildOutsEur = inv.stage2Eur; // satellite setup + deferred buffer
  const total = inv.stage1Eur + inv.stage2Eur; // === investorTicketEur
  const pct1 = total > 0 ? (inv.stage1Eur / total) * 100 : 34;
  const pct2 = 100 - pct1;
  const fmtEurAbbr = v => '€' + Math.round(v).toLocaleString('en-US');
  if (bar1) {
    bar1.style.width = pct1.toFixed(1) + '%';
    bar1.textContent = fmtEurAbbr(inv.stage1Eur);
    bar1.title = 'Stage 1 — Bridge (at closing): ' + fmtEurAbbr(inv.stage1Eur);
  }
  if (bar2) {
    bar2.style.width = pct2.toFixed(1) + '%';
    bar2.textContent = fmtEurAbbr(stage2BuildOutsEur);
    bar2.title = 'Stage 2 — build-outs (Izmir/Ankara/Bursa/Gaziantep setup + deferred buffer): ' + fmtEurAbbr(stage2BuildOutsEur);
  }
}

// ── STAGE 1 INVESTMENT & RETURN (index.html) ─────────────────────────────────
// Simple annual yield: Year 1 true net profit (revenue minus ALL Y1 operating
// costs — rent, salaries, marketing, etc. — the same tNet computeYear1()
// already tracks, not the revenue-only tGelir) ÷ Stage 1's own investment
// (tangible build-out + working capital, renderInvestBreakdown). Using profit
// rather than revenue keeps this on the same basis as the Stage 2 block below
// (izmirNet/ankaraNet there are already net of each satellite's own opex) —
// not a discounted or multi-year return, just this year's cash yield on the
// money Stage 1 put in. Null-safe: index.html is the only page with these ids.
function renderStage1Return(inv, tNetTRY) {
  const el = document.getElementById('stage1InvestEur');
  if (!el || !inv) return;
  const eurK = V.eurKur ?? 50;
  const stage1Eur = inv.stage1Eur;
  const y1ProfitEur = tNetTRY / eurK;
  const yieldPct = stage1Eur > 0 ? (y1ProfitEur / stage1Eur) * 100 : 0;
  const fmtEurFull = v => (v < 0 ? '-€' : '€') + Math.round(Math.abs(v)).toLocaleString('en-US');
  el.textContent = fmtEurFull(stage1Eur);
  const revEl = document.getElementById('stage1ProfitEur');
  if (revEl) revEl.textContent = fmtEurFull(y1ProfitEur);
  const yieldEl = document.getElementById('stage1YieldPct');
  if (yieldEl) {
    yieldEl.textContent = yieldPct.toFixed(1) + '%';
    yieldEl.style.color = yieldPct >= 0 ? '#1a7a45' : '#c94f2a';
  }
}

// Fractional-year simple payback: interpolates linearly within whichever year
// the cumulative FCF line crosses denomK (€K). Returns null if never recovered
// within the array's horizon (rendered as "not within Nyr").
function _calcPayback(cumArr, denomK) {
  if (denomK <= 0) return 0;
  let prev = 0;
  for (let i = 0; i < cumArr.length; i++) {
    if (cumArr[i] >= denomK) {
      const gain = cumArr[i] - prev;
      const frac = gain > 0 ? (denomK - prev) / gain : 0;
      return i + frac;
    }
    prev = cumArr[i];
  }
  return null;
}

// Cash-on-cash return — two views of the same after-tax FCF stream (fcfData.cum,
// €K) against the two denominators already computed by renderInvestBreakdown().
// Both denominators are consumed as-is from window._lastInvestBreakdown — never
// recomputed here — so machinery is never double-counted regardless of the
// ekipmanOsteoidden toggle (it already sits inside clinicCashEur when the
// clinic owns it, and inside totalInvestEur's parent-in-kind slice otherwise).
function renderCashReturn(fcfData) {
  const inv = window._lastInvestBreakdown;
  const tbody = document.getElementById('cashReturnBody');
  if (!inv || !tbody) return;

  // Numerator = cumulative operating cash after tax, BEFORE build-out capex
  // (that is funded by the capital in the denominator, so
  // netting them out here would count the investment twice). The investor's
  // own return — dividends + exit — is the Investor Return Analysis table.
  const cumFcfK = fcfData.cumOpCash[4];
  const cum = fcfData.cumOpCash;
  const clinicCashK = inv.clinicCashEur / 1000;
  const totalInvestK = inv.totalInvestEur / 1000;

  const fmtEurK = k => '€' + Math.round(k).toLocaleString('en-US') + 'K';
  const fmtMult = m => (m===null || m===undefined) ? '—' : m.toFixed(2) + '×';
  const fmtYrs  = y => y === null ? 'Not within 5yr' : y.toFixed(1) + ' yr';

  const rows = [
    { label:'Return on cash invested', sub:'external investor\'s cash-on-cash view', denomK: clinicCashK },
    { label:'Return on total capital (incl. in-kind)', sub:'includes Osteoid A.Ş.\'s in-kind contribution', denomK: totalInvestK },
  ];

  const clock = exitTaxClock();

  tbody.innerHTML = rows.map(r => {
    const grossMult = r.denomK > 0 ? cumFcfK / r.denomK : null;
    const payback = _calcPayback(cum, r.denomK);
    // Exit-tax treatment applies to the gain portion of the payout only —
    // return of capital (the denominator itself) is never taxed here.
    const tax = applyExitTax(cumFcfK, r.denomK);
    const netMult = r.denomK > 0 ? tax.netPayout / r.denomK : null;
    return `<tr>
      <td style="text-align:left;">${r.label}<br><span style="font-size:10px;color:#888;">${r.sub}</span></td>
      <td>${fmtEurK(r.denomK)}</td>
      <td>${fmtEurK(cumFcfK)}</td>
      <td class="${grossMult!==null && grossMult>=1 ? 'pc' : 'nc'}">${fmtMult(grossMult)}</td>
      <td class="${netMult!==null && netMult>=1 ? 'pc' : 'nc'}">${fmtMult(netMult)}</td>
      <td>${fmtYrs(payback)}</td>
    </tr>`;
  }).join('');

  const chipEl = document.getElementById('exitTax_clock_chip');
  if (chipEl) {
    if (clock.exempt) {
      chipEl.textContent = '✓ 2-yr exempt at exit — held ' + clock.heldMonths + ' months (≥24 required), A.Ş. share certificates (structure assumption, confirm with tax advisor)';
      chipEl.style.color = '#1a7a45'; chipEl.style.background = '#f0faf4'; chipEl.style.borderColor = '#b4e0c4';
    } else {
      chipEl.textContent = '✗ taxable at exit — held ' + clock.heldMonths + ' months (<24 required) (structure assumption, confirm with tax advisor)';
      chipEl.style.color = '#8a6d1a'; chipEl.style.background = '#fff8e8'; chipEl.style.borderColor = '#f0d080';
    }
  }
  const explainEl = document.getElementById('exitTax_explain');
  if (explainEl) {
    explainEl.textContent = clock.exempt
      ? 'Gross and net multiples match: the gain is fully exempt from personal income tax under this structure (GVK mük. 80 — A.Ş. share certificates, ≥2yr hold).'
      : 'Net multiple is lower than gross: ' + (V.kisiselVergiOrani ?? 40) + '% personal income tax applies to the gain portion of the payout under this structure.';
  }
  const certEl = document.getElementById('exitTax_cert_chip');
  if (certEl) {
    certEl.textContent = '☐ Clock starts at share certificate/ilmühaber issuance for this cash, not company formation — print certificates at month ' + (V.fundAy ?? 0) + ' (funding date), not at signing if funding is later.';
  }
}

// ── Tax Optimization panel (investor.html) — corporate-level KV levers, as
// distinct from the shareholder-level Exit Tax Structuring above. Structure
// assumptions under current Turkish law; all items require YMM confirmation.
function _refreshNakdiSermaye() {
  const cb = document.getElementById('nakdiSermayeToggle');
  const tag = document.getElementById('nakdiSermayeTag');
  const active = V.nakdiSermayeAktif !== false;
  if (cb) cb.checked = active;
  if (tag) { tag.textContent = active ? 'Active' : 'Off'; tag.style.color = active ? '#534AB7' : '#888'; }
}
function svNakdiSermaye(checked) {
  V.nakdiSermayeAktif = checked;
  _refreshNakdiSermaye();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshTeknokentKapsam() {
  const cb = document.getElementById('teknokentToggle');
  const tag = document.getElementById('teknokentTag');
  const on = !!V.teknokentKapsam;
  if (cb) cb.checked = on;
  if (tag) { tag.textContent = on ? 'On — scope confirmed by YMM' : 'Off — until YMM confirms scope'; tag.style.color = on ? '#534AB7' : '#888'; }
}
function svTeknokentKapsam(checked) {
  V.teknokentKapsam = checked;
  _refreshTeknokentKapsam();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshBursaGaziantepFcfFunded() {
  const cb = document.getElementById('bursaGaziantepFcfFundedToggle');
  if (cb) cb.checked = V.bursaGaziantepFcfFunded === true;
}
function svBursaGaziantepFcfFunded(checked) {
  V.bursaGaziantepFcfFunded = checked;
  _refreshBursaGaziantepFcfFunded();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshWorkingCapBufferFcfFunded() {
  const cb = document.getElementById('workingCapBufferFcfFundedToggle');
  if (cb) cb.checked = V.workingCapBufferFcfFunded === true;
}
function svWorkingCapBufferFcfFunded(checked) {
  V.workingCapBufferFcfFunded = checked;
  _refreshWorkingCapBufferFcfFunded();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}
function _refreshEmisyonPrimi() {
  const cb = document.getElementById('emisyonPrimiToggle');
  if (cb) cb.checked = V.emisyonPrimiAktif !== false;
}
function svEmisyonPrimi(checked) {
  V.emisyonPrimiAktif = checked;
  _refreshEmisyonPrimi();
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderTaxOptPanel() {
  const fcfData = window._lastFcf;
  if (!fcfData) return;
  const fmtEurK = v => (v>=0?'€':'-€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
  const kvOraniPct = V.kvOrani ?? 25;
  const kvRate = kvOraniPct / 100;

  // ── Lever 1: Nakdi Sermaye Artışı Faiz İndirimi (KVK 10/1-ı) ──
  _refreshNakdiSermaye();
  const nakdi = fcfData.nakdi || computeNakdiSermayeDeduction();
  const nakdiBody = document.getElementById('nakdiTableBody');
  if (nakdiBody) {
    if (!nakdi.active) {
      nakdiBody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#aaa;font-size:11px;">Inactive — toggle is off</td></tr>';
    } else {
      const kvSaved = nakdi.deduction.map(d => Math.round(d * kvRate));
      nakdiBody.innerHTML =
        '<tr><td style="text-align:left;">Notional interest deduction</td>' + nakdi.deduction.map(d=>`<td>${d?fmtEurK(d):'—'}</td>`).join('') + '</tr>' +
        '<tr><td style="text-align:left;">KV saved (deduction × '+kvOraniPct+'%)</td>' + kvSaved.map(v=>`<td class="pc">${v?fmtEurK(v):'—'}</td>`).join('') + '</tr>';
    }
  }
  const nakdiNote = document.getElementById('nakdiSermayeNote');
  if (nakdiNote) {
    nakdiNote.textContent = nakdi.active
      ? 'Deduction = ' + fmtEurK(Math.round(nakdi.fundedCashEur/1000)) + ' funded cash × ('+(V.euLegalFaiz??5)+'/2)% = ' + fmtEurK(nakdi.perYearK) + '/yr, claimable Years ' + nakdi.fundingYear + '–' + Math.min(5, nakdi.fundingYear+4) + ' (5-period window from funding month ' + (V.fundAy??0) + ')'
      : 'Deduction rate = half the EU legal/minimum interest rate (this cash is EUR, not TRY — see note above), per KVK 10/1-ı, applied to the funded cash amount above for 5 accounting periods from the funding month';
  }

  // ── Lever 2: Teknokent royalty pipe (4691) ──
  _refreshTeknokentKapsam();
  const royaltyEur = gv('royaltyEur');
  const royaltyRow = window._lastRoyaltyRow || [0,0,0,0,0];
  const teknokentBody = document.getElementById('teknokentTableBody');
  const teknokentChip = document.getElementById('teknokent_chip');
  if (teknokentBody) {
    if (royaltyEur === 0) {
      teknokentBody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#aaa;font-size:11px;">No royalty in current scenario — lever inactive.</td></tr>';
      if (teknokentChip) teknokentChip.style.display = 'none';
    } else {
      const clinicKvSaved = royaltyRow.map(r => Math.round(r * kvRate));
      // Osteoid A.Ş.'s own P&L isn't modeled here (separate legal entity) —
      // the only real number available is the clinic-side saving; teknokent
      // scope only changes whether that same royalty income is ALSO
      // untaxed at Osteoid's end, which this model can't independently verify.
      const groupBenefit = clinicKvSaved.slice();
      teknokentBody.innerHTML =
        '<tr><td style="text-align:left;">Annual royalty to Osteoid A.Ş.</td>' + royaltyRow.map(v=>`<td>${v?fmtEurK(v):'—'}</td>`).join('') + '</tr>' +
        '<tr><td style="text-align:left;">Clinic KV saved (royalty × '+kvOraniPct+'%)</td>' + clinicKvSaved.map(v=>`<td class="pc">${v?fmtEurK(v):'—'}</td>`).join('') + '</tr>' +
        '<tr><td style="text-align:left;">Group-level net benefit'+(V.teknokentKapsam?' (royalty exempt at Osteoid too)':' (Osteoid-level treatment unconfirmed)')+'</td>' + groupBenefit.map(v=>`<td class="${V.teknokentKapsam?'pc':''}">${v?fmtEurK(v):'—'}</td>`).join('') + '</tr>';
      if (teknokentChip) teknokentChip.style.display = 'block';
    }
  }

  // ── Lever 3: Emisyon primi (KVK 5/1-ç) — display only ──
  _refreshEmisyonPrimi();
  const reg = window._lastRegister;
  const investorCashEur = reg ? reg.byKey.investor.valueEur : 0;
  const nominalOran = (V.nominalPayOrani ?? 10) / 100;
  const nominalEur = Math.round(investorCashEur * nominalOran);
  const premiumEur = investorCashEur - nominalEur;
  const setTxt = (id,v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  setTxt('emisyon_nominal', fmtEurK(Math.round(nominalEur/1000)));
  setTxt('emisyon_premium', fmtEurK(Math.round(premiumEur/1000)));

  // ── Lever 4: Branch-loss consolidation — surfaces the tax layer's existing effect ──
  const bl = window._lastBranchLoss;
  const branchBody = document.getElementById('branchLossTableBody');
  if (branchBody) {
    const rows = [];
    if (bl && bl.izmir.isSube)  rows.push({ label:'Izmir (Branch)',  row: bl.izmir.row });
    if (bl && bl.ankara.isSube) rows.push({ label:'Ankara (Branch)', row: bl.ankara.row });
    if (!rows.length) {
      branchBody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#aaa;font-size:11px;">No satellite currently in Branch mode — Lever 4 inactive (see Satellite Entity Mode on the Multi-Year Plan page).</td></tr>';
    } else {
      branchBody.innerHTML = rows.map(r => {
        const cells = r.row.map(v => v < 0 ? `<td style="color:#c94f2a;">${fmtEurK(v)}</td>` : `<td class="${v>0?'pc':''}">${v?fmtEurK(v):'—'}</td>`).join('');
        return '<tr><td style="text-align:left;">'+r.label+' P&L consolidated into flagship</td>' + cells + '</tr>';
      }).join('');
    }
  }

  // ── Waterfall: pre-tax profit → levers → taxable profit → KV → effective rate ──
  const wfBody = document.getElementById('taxOptWaterfallBody');
  if (wfBody) {
    // Waterfall starts from the accounting pre-tax result — the same base
    // computeFcfStream() taxes (unfloored since review 4-A3, so a ramp-year
    // loss appears here directly) — so "Taxable profit" always reconciles
    // with the "KV paid" row below it.
    const pretax = fcfData.accountingPretax || fcfData.pretaxFcf;
    const dedRow = nakdi.active ? nakdi.deduction : [0,0,0,0,0];
    const taxableProfit = pretax.map((v,i) => v - dedRow[i]);
    const kvPaid = fcfData.taxPaid;
    const effRate = pretax.map((v,i) => v > 0 ? (kvPaid[i]/v*100) : 0);
    const fmtSigned = v => (v>=0?'€':'-€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
    wfBody.innerHTML =
      '<tr><td style="text-align:left;"><b>Pre-tax profit (accounting)</b></td>' + pretax.map(v=>`<td>${fmtSigned(v)}</td>`).join('') + '</tr>' +
      '<tr><td style="text-align:left;color:#534AB7;">− Lever 1: notional interest deduction</td>' + dedRow.map(v=>`<td style="color:#534AB7;">${v?'-'+fmtEurK(v):'—'}</td>`).join('') + '</tr>' +
      '<tr><td style="text-align:left;"><b>Taxable profit</b></td>' + taxableProfit.map(v=>`<td>${fmtSigned(v)}</td>`).join('') + '</tr>' +
      '<tr><td style="text-align:left;">KV @ '+kvOraniPct+'% (net of 5-yr carryforward)</td>' + kvPaid.map(v=>`<td class="${v?'nc':''}">${v?'-'+fmtEurK(v):'—'}</td>`).join('') + '</tr>' +
      '<tr style="background:#f0efe9;font-weight:700;"><td style="text-align:left;">Effective KV rate (KV paid ÷ pre-tax profit)</td>' + effRate.map(v=>`<td>${v?v.toFixed(1)+'%':'—'}</td>`).join('') + '</tr>';
  }
}

// Keeps the "Agreement" tab (investor.html) and the standalone agreement.html
// page's term cards live. Both pages used to set these once inside their own
// window.addEventListener('load', ...) handler — correct at first paint, but
// stale forever after if any register- or fee-affecting slider moved
// afterward without a full page reload. Called from recalc() every time, on
// every page, so it's always current; null-safe for pages without these ids.
function refreshAgreementTerms() {
  const reg = window._lastRegister;
  const tutarEl = document.getElementById('term_Y_tutar');
  if (tutarEl && reg) {
    // Investment Amount = actual cash paid in for shares (Lead Investor +
    // any Doctor-Investor cash) — not V.dcfInvest, which also blends in
    // Osteoid's in-kind contribution (that's Osteoid's own equity basis,
    // never a cash payment).
    const invest = reg.byKey.investor.valueEur + reg.byKey.doctorInvestor.valueEur;
    tutarEl.textContent = '€' + Math.round(invest).toLocaleString('tr-TR');
  }
  const komisyonEl = document.getElementById('term_H_komisyon');
  if (komisyonEl) {
    const _komProds = ['stdRl','delik','sens','sensDelik'];
    const _komAvg = _komProds.reduce((s,p) => s + (V['feeSci_'+p]??10) + (V['feeEdu_'+p]??10) + (V['feeLib_'+p]??10), 0) / _komProds.length;
    // Channel fee = Scientific Study + Education + Library fee (FU-1), averaged
    // across products — live from the Market page sliders, never a typed %.
    const _avg = pre => _komProds.reduce((s,p) => s + (V[pre+p]??10), 0) / _komProds.length;
    const _r = v => Math.round(v * 10) / 10;
    komisyonEl.textContent = _r(_komAvg) + '% (Scientific ' + _r(_avg('feeSci_')) + '% + Education ' + _r(_avg('feeEdu_')) + '% + Library ' + _r(_avg('feeLib_')) + '%, avg. across products)';
  }
}

// ── CONTRIBUTION REGISTER ────────────────────────────────────────────────────
// Single source of truth for ownership % — shared by captable.html (editable
// master table, one row per party with inline multiplier sliders) and
// investor.html (read-only mirror + DCF/return payout calcs). Every
// negotiable bargaining term here is a V-backed slider; nothing is hardcoded.
//
// pct_i = (value_i × carpan_i × vestedFraction_i) / Σ(same), then the
// orthotist's sweat-equity pct is clamped to V.sweatMaxPct and the remaining
// three parties are rescaled (preserving their relative ratios) to fill the
// rest — a governance cap, not part of the organic contribution-weighting
// formula.
//
// Reads window._lastInvestBreakdown (set by renderInvestBreakdown, always
// called earlier in the same recalc() pass) for the clinic-cash / machinery
// figures — same "reads a shared window global" convention already used by
// computeFcfStream() — so this never re-derives (and risks diverging from)
// the investment breakdown's own trough/machinery math.
function buildRegister(V) {
  const inv = window._lastInvestBreakdown;
  if (!inv) return null;
  const Y1 = computeYear1(V);
  const eurK = V.eurKur ?? 50;

  // ── Osteoid (parent) in-kind — machinery only counted when Osteoid owns it
  // (ekipmanOsteoidden), scaled by the negotiable "contributed at X% of
  // market" slider; same machinery figure renderInvestBreakdown already uses.
  const ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
  const printerAdet = V.printerAdetManual !== undefined ? V.printerAdetManual : _autoPrinterAdet();
  const machineryFullEur = printerAdet * (V.printerEurFiyat ?? 35000) + (V.robotKolAktif ? (V.robotKolEurFiyat ?? 30000) : 0);
  const makineOran = (V.makineKatkiOran ?? 100) / 100;
  const machineryContribEur = ekipmanOsteoidden ? machineryFullEur * makineOran : 0;
  // Osteoid's in-kind bucket here is machinery only.
  const osteoidRawEur = machineryContribEur;

  // Royalty + cutting-fee double-dip offset: Osteoid already extracts these as
  // a perpetual cash stream from the clinic P&L, so its equity claim is
  // reduced by the (undiscounted) PV of that stream over the offset horizon —
  // live off actual Year-1 royalty/cutting totals, not a typed placeholder.
  // Royalty €0 (the committed default) makes this a no-op, same as €0 being a
  // valid royalty scenario elsewhere in the model.
  const royaltyY1Eur = Y1.rows.reduce((s,r)=>s+(r.royaltyTop||0),0) / eurK;
  const cuttingY1Eur = Y1.rows.reduce((s,r)=>s+(r.kesimTop||0),0) / eurK;
  const royaltyOffsetYil = V.royaltyOffsetYil ?? 5;
  const royaltyOffsetPct = (V.royaltyOffsetPct ?? 100) / 100;
  const royaltyOffsetEur = (royaltyY1Eur + cuttingY1Eur) * royaltyOffsetYil * royaltyOffsetPct;

  const osteoidNetEur = osteoidRawEur - royaltyOffsetEur; // can go negative if offset > contribution
  const osteoidCarpan = V.osteoidCarpan ?? 1.0;
  const osteoidWeight = Math.max(0, osteoidNetEur) * osteoidCarpan;

  // ── Lead investor cash — the actual external cash raised (clinic setup +
  // working capital + buffer), deliberately EXCLUDING Osteoid's in-kind slice
  // of Total Investment so the two parties' contributions are never double
  // counted in the register.
  const investorRawEur = inv.clinicCashEur;
  const yatirimciCarpan = V.yatirimciCarpan ?? 1.0;
  const investorWeight = Math.max(0, investorRawEur) * yatirimciCarpan;

  // ── Doctor-investor cash — separate from the (equity-free) referral
  // channel; a doctor putting in actual cash as a co-investor.
  const doktorRawEur = V.doktorYatirim ?? 0;
  const doktorCarpan = V.doktorCarpan ?? 1.0;
  const doktorWeight = Math.max(0, doktorRawEur) * doktorCarpan;

  // ── Orthotist / operator sweat equity — 0 before the cliff, then linear
  // monthly vesting; "vested today" toggle switches the display between
  // today's vested value and the fully-vested target.
  const sweatEur = V.sweatEur ?? 80000;
  const vestAy = V.sweatVestAy ?? 48;
  const cliffAy = V.sweatCliffAy ?? 12;
  const elapsedAy = V.sweatElapsedAy ?? 0;
  const vestedFrac = elapsedAy < cliffAy ? 0 : Math.min(1, elapsedAy / vestAy);
  const sweatVestedToday = V.sweatVestedToday !== false;
  const sweatFracUsed = sweatVestedToday ? vestedFrac : 1;
  const sweatRawEur = sweatEur * sweatFracUsed;
  const sweatCarpan = V.sweatCarpan ?? 1.0;
  const sweatWeight = Math.max(0, sweatRawEur) * sweatCarpan;

  const totalWeight = osteoidWeight + investorWeight + doktorWeight + sweatWeight;
  let pO = 0, pI = 0, pD = 0, pR = 0;
  if (totalWeight > 0) {
    pO = osteoidWeight  / totalWeight * 100;
    pI = investorWeight / totalWeight * 100;
    pD = doktorWeight   / totalWeight * 100;
    pR = sweatWeight     / totalWeight * 100;
  }

  // Sweat cap: clamp to V.sweatMaxPct, renormalize the other three so they
  // still sum to (100 - cap), preserving their relative ratios.
  const sweatMaxPct = V.sweatMaxPct ?? 5;
  let capApplied = false;
  if (pR > sweatMaxPct) {
    capApplied = true;
    const remaining = 100 - sweatMaxPct;
    const otherSum = pO + pI + pD;
    const scale = otherSum > 0 ? remaining / otherSum : 0;
    pO *= scale; pI *= scale; pD *= scale;
    pR = sweatMaxPct;
  }
  // Floating-point safety net — force an exact 100 total.
  const sum2 = pO + pI + pD + pR;
  if (sum2 > 0 && Math.abs(sum2 - 100) > 1e-9) {
    const fix = 100 / sum2;
    pO *= fix; pI *= fix; pD *= fix; pR *= fix;
  }

  const parties = [
    { key:'osteoid', label:'Osteoid (Parent) — Machinery (in-kind)', short:'Osteoid', color:'#534AB7',
      valueEur: osteoidRawEur, netEur: osteoidNetEur, carpan: osteoidCarpan, vestedPct: 100,
      weight: osteoidWeight, pct: pO,
      detail: { machineryFullEur, machineryContribEur, royaltyOffsetEur, makineOran: makineOran*100 } },
    { key:'investor', label:'Lead Investor — Cash', short:'Investor', color:'#1a7a45',
      valueEur: investorRawEur, netEur: investorRawEur, carpan: yatirimciCarpan, vestedPct: 100,
      weight: investorWeight, pct: pI },
    { key:'doctorInvestor', label:'Doctor-Investor — Cash', short:'Doctor-Investor', color:'#2c7bb6',
      valueEur: doktorRawEur, netEur: doktorRawEur, carpan: doktorCarpan, vestedPct: 100,
      weight: doktorWeight, pct: pD },
    { key:'orthotist', label:'Orthotist / Operators — Sweat Equity', short:'Orthotist', color:'#BA7517',
      valueEur: sweatEur, netEur: sweatRawEur, carpan: sweatCarpan, vestedPct: Math.round(sweatFracUsed*1000)/10,
      weight: sweatWeight, pct: pR,
      detail: { vestedFrac, sweatFracUsed, capApplied, sweatMaxPct } },
  ];

  return { parties, totalWeight, capApplied, sweatMaxPct,
    byKey: parties.reduce((m,p)=>{ m[p.key]=p; return m; }, {}) };
}

// Renders the Contribution Register table on investor.html — the sliders that
// feed it (weight multipliers, sweat vesting, etc.) live directly below this
// table on the same page; this just renders whatever buildRegister() already
// computed, plus the cap/control-risk notes that go with it.
function renderOwnershipMirror(reg) {
  const tbody = document.getElementById('ownershipMirrorBody');
  if (tbody) {
    if (!reg) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#aaa;font-size:11px;">Will be calculated once the model loads...</td></tr>';
    } else {
      const fmtEur = v => '€' + Math.round(v).toLocaleString('en-US');
      tbody.innerHTML = reg.parties.map(p => `<tr>
          <td style="text-align:left;color:${p.color};font-weight:700;">${p.label}</td>
          <td>${fmtEur(p.netEur)}</td>
          <td>${p.carpan.toFixed(2)}×</td>
          <td style="font-weight:700;color:${p.color};">${p.pct.toFixed(2)}%</td>
        </tr>`).join('')
        + `<tr style="background:#f0efe9;font-weight:700;"><td>Total</td><td>—</td><td>—</td><td>100.00%</td></tr>`;
    }
  }

  const cvt = document.getElementById('chk_sweatVestedToday');
  if (cvt) cvt.checked = V.sweatVestedToday !== false;
  const royNoteEl = document.getElementById('royaltyOffsetRateNote');
  if (royNoteEl) royNoteEl.textContent = gv('royaltyEur');

  const capNote = document.getElementById('reg_sweat_cap_note');
  if (capNote) {
    if (reg && reg.capApplied) {
      capNote.style.display = 'block';
      capNote.textContent = '⚠ Sweat equity was clamped to the ' + reg.sweatMaxPct + '% cap — the weighted contribution formula implied more, so Osteoid/Lead Investor/Doctor-Investor were rescaled proportionally to absorb the difference.';
    } else {
      capNote.style.display = 'none';
    }
  }
  // Control Risk now checks the priced-round Osteoid stake (window._lastDeal),
  // not the reference-only Contribution Register — that's the split that
  // actually determines control since the priced round sets the deal.
  const warnEl = document.getElementById('warn_control');
  const deal = window._lastDeal;
  if (warnEl) warnEl.style.display = (deal && deal.stakes.osteoid < 50.01) ? 'block' : 'none';
}

function svSweatVestedToday(checked) {
  V.sweatVestedToday = checked;
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

// ── DCF DEĞERLEMESİ ──────────────────────────────────────────────────────────
// Shared by renderDcf() (investor.html) and captable.html's reconciliation
// section — same taxed FCF stream, same formula, called from both places
// instead of two copies of the same math that could quietly drift apart.
// Terminal value basis (review 4-A4): DCF TV = Year-5 AFTER-TAX free cash
// flow × the exit multiple — the same after-tax FCF basis as the discounted
// Years 1-5 (the methodology text always said so; the code had drifted to
// pre-tax EBITDA). The investor EXIT EV is a different figure on a different
// basis — Year-5 EBITDA × multiple, "EV/EBITDA" — and is never shown under the
// DCF's name. tvShare = PV(TV) ÷ DCF value, surfaced on the Investor page.
// ONE exit-multiple set for the whole dashboard (review 4-A6): base =
// dcfExitMult + the multi-centre premium slider (default 0 — the old automatic
// +2× for 3+ centres is gone), low = base − exitMultLowDelta (floored at 2×),
// high = base + exitMultHighDelta. Every scenario table, the DCF terminal value,
// the investor Exit EV and the Summary exit box read these — no table carries
// its own private multiples. The fee-stream multiple (feeExitMult) is a separate,
// separately-labelled input used only by the sum-of-parts DCF toggle.
function exitMultSet() {
  const premium = V.multiCenterPremiumX ?? 0;
  const base = (V.dcfExitMult ?? 10) + premium;
  return { base, premium,
           low: Math.max(2, base - (V.exitMultLowDelta ?? 2)),
           high: base + (V.exitMultHighDelta ?? 3) };
}

function computeDcfPremoney(fcf, r, exitMult) {
  const tv = fcf[4] > 0 ? Math.round(fcf[4] * exitMult) : 0;
  const pv = fcf.map((cf, i) => cf / Math.pow(1 + r, i + 1));
  const pvTv = tv / Math.pow(1 + r, 5);
  const npv = pv.reduce((s, v) => s + v, 0) + pvTv; // €K
  const tvShare = npv > 0 ? pvTv / npv : 0;
  return { tv, pv, pvTv, npv, tvShare, premoney_eur: Math.round(npv) * 1000 };
}

function _refreshRiskProfile() {
  const rate = V.dcfRate ?? 20;
  RISK_PROFILE_ANCHORS.forEach(a => {
    const btn = document.getElementById(a.id);
    if (!btn) return;
    const active = Math.abs(rate - a.rate) < 0.001;
    btn.style.background = active ? a.color : '#fff';
    btn.style.color = active ? '#fff' : a.color;
  });
}
// Feeds both the full "Why This Venture Is De-Risked" section (captable.html)
// and its compact mirror (investor.html) — null-safe getElementById means
// each page only populates the ids it actually has.
function renderDeRiskedNarrative() {
  const rate = V.dcfRate ?? 20;
  const anchor = RISK_PROFILE_ANCHORS.find(a => Math.abs(rate - a.rate) < 0.001);
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('deRisked_rate', rate + '%');
  set('deRisked_profile', anchor ? anchor.label : 'Custom');
}
function svRiskProfile(rate) {
  svDcf('dcfRate', rate);
  const sl = document.getElementById('s_dcfRate');
  if (sl) sl.value = rate;
}
function svDcf(key, val) {
  val = parseFloat(val);
  V[key] = val;
  if (key === 'dcfRate')     { const e = document.getElementById('dcfRate');     if(e) e.textContent = val; _refreshRiskProfile(); }
  if (key === 'dcfExitMult') { const e = document.getElementById('dcfExitMult'); if(e) e.textContent = val + '×'; recalc(); localStorage.setItem('osteoid_V', JSON.stringify(V)); return; }
  renderDcf();
  renderGetiriTable();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderDcf() {
  const fcfData = window._lastFcf;
  if (!fcfData) return;

  const r          = (V.dcfRate ?? 28) / 100;
  const exitMult   = exitMultSet().base;   // one set, 4-A6
  const reg        = window._lastRegister;
  const inv        = window._lastInvestBreakdown;

  // Same taxed FCF stream shown in the investor projection table (buildProjection
  // → computeFcfStream) — DCF and the displayed FCF row can never diverge.
  // Centres-company FCF: operating cash after tax minus setup capex in the
  // year each centre opens (review 4-A1).
  const fcf = fcfData.fcf;
  // Year-5 EBITDA (investor scope, same scope as this fcf stream) from the
  // metric ladder — the terminal value's exit multiple applies to EBITDA, while
  // the interim years discount after-tax FCF. Standard simple-DCF convention;
  // exit taxation ignored, stated in methodology (PROMPT 7).
  const _ladderInv = metricLadder('investor');
  const ebitdaY5 = _ladderInv ? _ladderInv.ebitda[4] : fcf[4];

  // DCF on after-tax FCF throughout, terminal included (4-A4). ebitdaY5 is used
  // only for the separately-named Exit EV (EV/EBITDA) below.
  const { tv, pv, pvTv, npv, tvShare, premoney_eur: blendedPremoney_eur } = computeDcfPremoney(fcf, r, exitMult);

  // Sum-of-parts toggle: value the management-fee income stream at its own
  // (higher) multiple instead of blending it into the main business's
  // multiple. Fee income is high-margin, asset-light and recurring (no
  // clinic capex, no brace-level cost of goods), which typically commands a
  // richer multiple than a capital-intensive clinic operation — so lumping
  // it into one blended multiple understates it. To avoid double-counting
  // (fee income is already inside the consolidated `fcf`), it's carved out
  // of the main stream first, tax-adjusted at the same effective rate, then
  // each piece is discounted/terminal-valued separately and summed.
  let feeSplit = null;
  if (V.feeStreamAyriMult && window._lastFeeIncomeRow) {
    const feeExitMult = V.feeExitMult ?? 12;
    const kvRate = (V.kvOrani ?? 25) / 100;
    const feePretax = window._lastFeeIncomeRow; // €K, Y1-Y5, pretax
    const feeAfterTax = fcfData.vergiDahil ? feePretax.map(v => Math.round(v * (1 - kvRate))) : feePretax;
    const mainFcf = fcf.map((v,i) => v - feeAfterTax[i]);
    // Both pieces keep the one DCF basis (4-A4): TV = each stream's own
    // Year-5 after-tax cash flow × its multiple (core at the main exit
    // multiple, fee stream at the separately-labelled fee multiple).
    const mainCalc = computeDcfPremoney(mainFcf, r, exitMult);
    const feeCalc = computeDcfPremoney(feeAfterTax, r, feeExitMult);
    feeSplit = { corePremoney: mainCalc.premoney_eur, feePremoney: feeCalc.premoney_eur, feeExitMult,
                 pvTv: mainCalc.pvTv + feeCalc.pvTv, tv: mainCalc.tv + feeCalc.tv, npv: mainCalc.npv + feeCalc.npv };
  }
  const dcfValue_eur = feeSplit ? (feeSplit.corePremoney + feeSplit.feePremoney) : blendedPremoney_eur;
  // Terminal value and its share of the DCF — shown on the Investor page so a
  // reader can see how much of the valuation sits beyond Year 5 (4-A4).
  const dcfTvK = feeSplit ? feeSplit.tv : tv;
  const dcfPvTvK = feeSplit ? feeSplit.pvTv : pvTv;
  const dcfNpvK = feeSplit ? feeSplit.npv : npv;
  const dcfTvSharePct = dcfNpvK > 0 ? dcfPvTvK / dcfNpvK * 100 : 0;
  window._lastDcf = { basis: 'Year-5 after-tax FCF × exit multiple', tv: dcfTvK, pvTv: Math.round(dcfPvTvK),
                      npv: Math.round(dcfNpvK), dcfValueEur: dcfValue_eur, tvSharePct: +dcfTvSharePct.toFixed(1),
                      sumPvFcf: Math.round(dcfNpvK - dcfPvTvK), fcf: fcf.slice(), sumOfParts: !!feeSplit };

  // Deal Pre-Money = a NEGOTIATED INPUT (V.dealPreMoneyEur slider), not a
  // model output (review 4-A5). It used to be DCF × (1 − discount), so the
  // stake re-solved with every scenario input and the investor return stayed
  // ~flat whatever the market share — scenarios were not comparable. Now the
  // price is fixed and every scenario moves the investor's return, as it
  // would after a signed term sheet. The DCF is shown next to it as a
  // reference only (premium/discount of the deal price vs the DCF below).
  // Default = the committed-default output of the old formula at _version 57
  // (DCF €13.706M × (1 − 20%) = €10,964,800) — a starting point, not a price.
  const premoney_eur = gv('dealPreMoneyEur');
  const preVsDcfPct = dcfValue_eur > 0 ? (premoney_eur / dcfValue_eur - 1) * 100 : null;

  // Post-Money = deal pre-money + actual NEW CASH raised (Investor Ticket +
  // any Doctor-Investor cash).
  const investorTicketEur = inv ? inv.investorTicketEur : 0;
  const doktorYatirimEur = V.doktorYatirim ?? 0;
  const postmoney_eur = premoney_eur + investorTicketEur + doktorYatirimEur;

  // Two-tranche pricing: same investor, two sequential closings at two
  // different pre-money valuations (Tranche 1 discounted further to reflect
  // pre-milestone risk, Tranche 2 at the full negotiated deal pre-money once
  // Istanbul is de-risked). T2 pre-money is just the existing Deal Pre-Money;
  // T1 pre-money is that divided down by the step-up factor. T1 buys its
  // stake of the pre-T2 company; T2 buys its stake of the post-T1 company;
  // the same investor holds both, so their blended stake is T1's diluted
  // remainder plus their fresh T2 stake. This blended figure IS the Investor
  // Stake used everywhere below (hero KPI, MOIC, getiriTable, Control Risk,
  // captable.html) — the flat cash÷post-money calc doesn't reflect that the
  // ticket is actually priced in two sequential rounds, so it's replaced
  // rather than shown alongside as a second, conflicting stake number.
  const trancheStepUp = V.trancheStepUp ?? 1.75;
  const tranche1Eur = V.tranche1Eur ?? 500000;
  const t2preEur = premoney_eur;
  const t1preEur = trancheStepUp > 0 ? t2preEur / trancheStepUp : t2preEur;
  const tranche2Eur = Math.max(0, investorTicketEur - tranche1Eur);
  const t1stake = (t1preEur + tranche1Eur) > 0 ? tranche1Eur / (t1preEur + tranche1Eur) : 0;
  const t2stake = (t2preEur + tranche2Eur) > 0 ? tranche2Eur / (t2preEur + tranche2Eur) : 0;
  const blendedStake = t1stake * (1 - t2stake) + t2stake;

  // Priced-round stake: the Lead Investor's stake is the two-tranche blended
  // figure above (not a flat cash÷post-money ratio). Doctor-Investor cash is
  // still a single, un-tranched contribution, so it keeps the flat calc.
  // Osteoid takes the remainder. Sweat equity is deliberately NOT a stake in
  // this priced round — it's a separate governance/incentive mechanism
  // tracked only in the Contribution Register (reference view, captable.html),
  // which has its own vesting clock. The Contribution Register's weighted-
  // carpan split no longer drives stake here at all — it still feeds the
  // Ownership Register table below and captable.html.
  const yatirimci_pct = blendedStake * 100;
  const doktor_pct    = postmoney_eur > 0 ? (doktorYatirimEur / postmoney_eur) * 100 : 0;
  const osteoid_pct = 100 - yatirimci_pct - doktor_pct;

  // Single source of truth for the priced-round deal — every other stake
  // consumer (renderGetiriTable/moicSensTable, the Control Risk warning,
  // captable.html reconciliation) reads this instead of the Contribution
  // Register, so the whole app can never show two different splits again.
  window._lastDeal = {
    premoney: premoney_eur,
    postmoney: postmoney_eur,
    stakes: { investor: yatirimci_pct, doctor: doktor_pct, osteoid: osteoid_pct },
    ticket: investorTicketEur,
    tranche: {
      t1preEur, t1Eur: tranche1Eur, t1stakePct: t1stake * 100,
      t2preEur, t2Eur: tranche2Eur, t2stakePct: t2stake * 100,
      blendedStakePct: blendedStake * 100,
    },
    stage1: inv ? inv.stage1Eur : 0,
    stage2: inv ? inv.stage2Eur : 0,
  };

  const set = (id, v) => { const e = document.getElementById(id); if(e) e.textContent = v; };
  const fmtEur = v => '€' + (Math.abs(v)/1000000).toFixed(2) + 'M';
  const fmtPct = v => '%' + v.toFixed(2);

  // Exit Value = Year-5 EBITDA (investor scope, from the ladder) × exit multiple.
  // ebitdaY5 is €K; ×1000 → EUR, matching the prior fcf[4]-based unit convention
  // exactly (PROMPT 7). MOIC at exit rides on the same EBITDA-based EV.
  const exitValue_eur = ebitdaY5 > 0 ? ebitdaY5 * exitMult * 1000 : 0;
  const investorMoicExit = investorTicketEur > 0 ? (exitValue_eur * (yatirimci_pct/100)) / investorTicketEur : 0; // exit-only part
  set('dcf_exitValue',       exitValue_eur > 0 ? fmtEur(exitValue_eur) : '—');

  // ── Exit-value scope bridge (PROMPT 7 §4) — tie the two Exit KPIs on screen.
  // Summary page shows the whole-business EV (100% ownership of every center);
  // this page shows the flagship-consolidated EV (own clinic + B2B + management
  // fee + equity share of satellites). The ONLY scope difference is the local-
  // investor MINORITY interest in the satellites (not a flat %, and not the
  // fee-multiple split — the fee is inside both). Both KPIs read the SAME
  // V.dcfExitMult slider (exitMult here == exitMult100 there). Then the
  // investor's OWN share = flagship EV × their priced-round stake.
  const _l100 = metricLadder('100');
  const wholeBizEbitdaY5 = _l100 ? _l100.ebitda[4] : ebitdaY5;   // €K, 100% scope
  const wholeBizExitEur  = wholeBizEbitdaY5 > 0 ? wholeBizEbitdaY5 * exitMult * 1000 : 0;
  const minorityExitEur  = Math.max(0, wholeBizExitEur - exitValue_eur); // satellite minority slice of EV
  const investorShareEur = exitValue_eur * (yatirimci_pct / 100);
  const bridgeEl = document.getElementById('exitScopeBridge');
  if (bridgeEl) {
    const feeSep = (V.feeStreamAyriMult && window._lastFeeIncomeRow)
      ? ' &nbsp;·&nbsp; Note: the sum-of-parts toggle is on, so the DCF <i>pre-money</i> values the management-fee stream separately at ' + (V.feeExitMult ?? 12) + '× — that affects the DCF valuation above, not this exit EV (both exit figures use the same ' + exitMult + '× on EBITDA).'
      : '';
    bridgeEl.innerHTML =
      '<b>Exit-value scope bridge</b> (both use the same ' + exitMult + '× exit multiple on Year-5 EBITDA): '
      + 'Whole-business EV <b>' + fmtEur(wholeBizExitEur) + '</b> (100%, Summary page) '
      + '− local-investor minority interest in the satellites <b>' + fmtEur(minorityExitEur) + '</b> '
      + '= flagship-consolidated EV <b>' + fmtEur(exitValue_eur) + '</b> (shown above). '
      + (minorityExitEur === 0 ? 'All satellites are in Branch mode, so minority = €0 and the two figures match. ' : 'Satellites in Subsidiary mode carry local investors, hence the gap. ')
      + 'Your own share at exit = flagship EV × your ' + fmtPct(yatirimci_pct) + ' stake = <b>' + fmtEur(investorShareEur) + '</b> (the exit-proceeds line of the investor return; dividends and retained cash are separate lines).'
      + feeSep;
  }
  set('dcf_premoney',        dcfValue_eur !== 0 ? (dcfValue_eur < 0 ? '-' : '') + fmtEur(dcfValue_eur) : '—');
  set('dcf_tv_value',        dcfTvK > 0 ? fmtEur(dcfTvK * 1000) + ' (PV ' + fmtEur(dcfPvTvK * 1000) + ')' : '—');
  set('dcf_tv_share',        dcfNpvK > 0 ? dcfTvSharePct.toFixed(1) + '%' : '—');
  set('dcf_tv_basis',        'FCF₅ (after tax) ' + (window._lastFcf ? '€' + fcf[4] + 'K' : '') + ' × ' + exitMult + '×' + (feeSplit ? ' · fee stream separately at ' + feeSplit.feeExitMult + '× (sum-of-parts)' : ''));
  set('dcf_premoney_final',  premoney_eur > 0 ? fmtEur(premoney_eur) : '—');
  set('dcf_premoney_vs_dcf', preVsDcfPct === null ? 'DCF reference is ≤ 0 in this scenario' : 'Deal price is ' + Math.abs(preVsDcfPct).toFixed(1) + '% ' + (preVsDcfPct >= 0 ? 'above' : 'below') + ' the DCF reference (' + fmtEur(dcfValue_eur) + ')');
  set('dcf_postmoney',       fmtEur(postmoney_eur));
  set('dcf_investor_ticket', investorTicketEur > 0 ? fmtEur(investorTicketEur) : '—');
  set('dcf_stage1',         inv && inv.stage1Eur > 0 ? fmtEur(inv.stage1Eur) : '—');
  set('dcf_stage2',         inv && inv.stage2Eur > 0 ? fmtEur(inv.stage2Eur) : '—');
  renderUseOfFundsStrip(inv);

  // Two-tranche pricing table — T1/T2 priced independently, blended stake is
  // what the same investor ends up holding after both closings dilute them.
  const trTbody = document.getElementById('trancheTableBody');
  if (trTbody) {
    const fmtEurFull = v => '€' + Math.round(v).toLocaleString('en-US');
    trTbody.innerHTML =
      '<tr><td style="text-align:left;">Tranche 1</td><td>' + fmtEurFull(t1preEur) + '</td><td>' + fmtEurFull(tranche1Eur) + '</td><td>' + (t1stake*100).toFixed(2) + '%</td></tr>'
      + '<tr><td style="text-align:left;">Tranche 2</td><td>' + fmtEurFull(t2preEur) + '</td><td>' + fmtEurFull(tranche2Eur) + '</td><td>' + (t2stake*100).toFixed(2) + '%</td></tr>'
      + '<tr class="r-cum"><td style="text-align:left;"><b>Blended (Investor Total)</b></td><td>—</td><td>' + fmtEurFull(investorTicketEur) + '</td><td><b>' + (blendedStake*100).toFixed(2) + '%</b></td></tr>';
  }
  set('dcf_yatirimci_hisse', fmtPct(yatirimci_pct));
  set('dcf_osteoid_hisse',   fmtPct(osteoid_pct));
  // Hero MOIC = dividends + exit proceeds + retained cash (Base multiple), 4-A10.
  const _Rh = computeInvestorReturns(exitMult);
  window._lastInvestorReturn = _Rh;
  renderValuationAnchor();
  set('dcf_investor_moic_exit', _Rh && _Rh.moic > 0 ? _Rh.moic.toFixed(2)+'×' : '—');
  set('dcf_investor_moic_split', _Rh ? 'exit only ' + investorMoicExit.toFixed(2) + '× · dividends + retained cash add ' + (_Rh.moic - investorMoicExit).toFixed(2) + '×' + (_Rh.irr !== null ? ' · IRR ' + _Rh.irr.toFixed(1) + '%' : '') : '—');
  set('dcf_core_premoney',   feeSplit ? fmtEur(feeSplit.corePremoney) : '—');
  set('dcf_fee_premoney',    feeSplit ? fmtEur(feeSplit.feePremoney) : '—');
  const feeRowEl = document.getElementById('dcfFeeSplitRow');
  if (feeRowEl) feeRowEl.style.display = feeSplit ? '' : 'none';

  const cumFcf = fcfData.cum[4];
  const cumEl = document.getElementById('kpi_cumFcf');
  if (cumEl) cumEl.textContent = (cumFcf>=0?'€':'-€') + Math.abs(cumFcf).toLocaleString('en-US') + 'K';

  renderCashReturn(fcfData);
  renderOwnershipMirror(reg);

  // Tablo
  const tbody = document.getElementById('dcfTableBody');
  if (!tbody) return;
  const disc = pv.map(v => Math.round(v));
  const fmtE = v => {
    const cls = v >= 0 ? 'pc' : 'nc';
    return '<td class="'+cls+'">'+(v<0?'-':'')+'€'+(Math.abs(v)/1000).toFixed(2)+'M</td>';
  };
  tbody.innerHTML =
    '<tr><td>Free Cash Flow'+(fcfData.vergiDahil?' (after tax, €M)':' (pre-tax, €M)')+'</td>'
    + fcf.map(v => fmtE(v)).join('')
    + '<td style="color:#888;font-size:11px;">TV = FCF₅ × '+exitMult+'×: €'+(tv/1000).toFixed(2)+'M</td></tr>'
    + '<tr><td style="color:#888;font-size:11px;">Discount factor (1/(1+r)ⁿ)</td>'
    + fcf.map((_,i)=>'<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,i+1)).toFixed(3)+'</td>').join('')
    + '<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,5)).toFixed(3)+'</td></tr>'
    + '<tr><td>PV (Discounted, €M)</td>'
    + disc.map(v=>'<td class="'+(v>=0?'pc':'nc')+'">'+(v<0?'-':'')+'€'+(Math.abs(v)/1000).toFixed(2)+'M</td>').join('')
    + '<td class="neu">€'+(Math.round(pvTv)/1000).toFixed(2)+'M</td></tr>'
    + '<tr class="r-cum"><td><b>DCF Value (NPV)</b></td>'
    + '<td colspan="5" style="text-align:center;font-weight:700;">'
    + 'Σ PV = €'+(Math.round(npv)/1000).toFixed(2)+'M &nbsp;≈&nbsp; <b>'+fmtEur(dcfValue_eur)+'</b>'
    + '</td><td class="neu" style="font-size:11px;">PV(TV) €'+(Math.round(pvTv)/1000).toFixed(2)+'M = '+(npv>0?(pvTv/npv*100).toFixed(1):'0')+'% of DCF</td></tr>'
    + (feeSplit ? '<tr><td colspan="7" style="font-size:10px;color:#888;">Sum-of-parts is ON: the DCF value above = core stream at '+exitMult+'× + management-fee stream at '+feeSplit.feeExitMult+'× (fee multiple, labelled separately) — the blended row above is shown for reference.</td></tr>' : '');
}


// ── INVESTOR RETURN = DIVIDENDS + EXIT (review 4-A10) ───────────────────────
// The draft dividend policy (agreement.html, "at least [60]% of distributable
// profit … from the first cumulative-positive year") is modelled explicitly:
//   distributable[i] = after-tax net income of year i, after retained losses
//                      from earlier years are covered (no dividend while
//                      cumulative net income is ≤ 0);
//   dividend[i]      = payout% × distributable[i], capped at the cash actually
//                      available that year (opening cash + investor inflows +
//                      FCF) — never paid out of cash the company does not have.
//                      The policy's "working-capital reserve" is not modelled
//                      beyond that cap (stated simplification).
//   exit equity      = Exit EV (Year-5 EBITDA × multiple) + cash retained on the
//                      balance sheet at the end of Year 5 (no debt modelled).
// Investor share of each = × the priced-round stake. Lines are kept separate.
// IRR: timed cash flows — Stage 1 at closing (t=0), Stage 2 at the start of its
// release year, dividends at each year-end, exit proceeds at t=5.
function _irr(flows) { // flows: [{t, v}] — bisection on NPV, returns % or null
  const npv = r => flows.reduce((s, f) => s + f.v / Math.pow(1 + r, f.t), 0);
  let lo = -0.99, hi = 5;
  if (npv(lo) * npv(hi) > 0) return null;
  for (let k = 0; k < 200; k++) { const m = (lo + hi) / 2; (npv(lo) * npv(m) <= 0) ? hi = m : lo = m; }
  return ((lo + hi) / 2) * 100;
}
function computeInvestorReturns(exitMult, stakeOverride) {
  const f = window._lastFcf, deal = window._lastDeal;
  if (!f || !deal) return null;
  const L = metricLadder('investor');
  const payout = (V.dividendPayoutPct ?? 60) / 100;
  const stake = (stakeOverride !== undefined) ? stakeOverride : deal.stakes.investor / 100;
  const netIncome = f.accountingPretax.map((v, i) => v - (f.taxPaid[i] || 0)); // €K, after tax
  let lossPool = 0, cash = 0;
  const dividends = [], cashEnd = [], distributable = [];
  for (let i = 0; i < 5; i++) {
    let d0 = 0;
    if (netIncome[i] < 0) lossPool += -netIncome[i];
    else { const cover = Math.min(lossPool, netIncome[i]); lossPool -= cover; d0 = netIncome[i] - cover; }
    distributable.push(Math.round(d0));
    const avail = cash + (f.investorIn[i] || 0) + (f.fcf[i] || 0);
    const d = Math.max(0, Math.min(d0 * payout, avail));
    dividends.push(Math.round(d));
    cash = avail - d;
    cashEnd.push(Math.round(cash));
  }
  const ebitdaY5 = L ? L.ebitda[4] : 0;
  const exitEvK = ebitdaY5 > 0 ? ebitdaY5 * exitMult : 0;
  const retainedCashK = Math.max(0, cashEnd[4]);
  const divInvK = dividends.map(d => d * stake);
  const divInvTotK = divInvK.reduce((a, b) => a + b, 0);
  const exitInvK = exitEvK * stake;
  const cashInvK = retainedCashK * stake;
  const totalK = divInvTotK + exitInvK + cashInvK;
  const ticket = deal.ticket;
  const moic = ticket > 0 ? totalK * 1000 / ticket : 0;
  const s2t = (f.plan && f.plan.stage2YearIdx) || 1;
  const flows = [{ t: 0, v: -(deal.stage1 || 0) / 1000 }, { t: s2t, v: -(deal.stage2 || 0) / 1000 }]
    .concat(divInvK.map((v, i) => ({ t: i + 1, v })))
    .concat([{ t: 5, v: exitInvK + cashInvK }]);
  return { payoutPct: payout * 100, stake, netIncome, distributable, dividends, cashEnd, exitEvK, retainedCashK,
           divInvK, divInvTotK, exitInvK, cashInvK, totalK, moic, irr: _irr(flows), ticket, exitMult, stage2YearIdx: s2t };
}

// ── VALUATION ANCHOR (FU-10) — solve the pre-money for a target return ──────
// Same two-tranche pricing as renderDcf (ticket, Tranche-1 amount and step-up
// unchanged): stake(pre) is monotone decreasing in pre-money, and the return's
// company-level parts (dividends, exit EV, retained cash) do not depend on the
// price — so the required pre-money is found by bisection on stake(pre). It
// only READS the model; the committed deal pre-money (V.dealPreMoneyEur) is
// never written.
function _stakeForPreMoney(pre) {
  const inv = window._lastInvestBreakdown; if (!inv) return null;
  const ticket = inv.investorTicketEur, dr = V.doktorYatirim ?? 0;
  const t1 = V.tranche1Eur ?? 500000, step = V.trancheStepUp ?? 1.75;
  const t1pre = step > 0 ? pre / step : pre, t2 = Math.max(0, ticket - t1);
  const s1 = (t1pre + t1) > 0 ? t1 / (t1pre + t1) : 0, s2 = (pre + t2) > 0 ? t2 / (pre + t2) : 0;
  const investor = s1 * (1 - s2) + s2;
  const post = pre + ticket + dr;
  const doctor = post > 0 ? dr / post : 0;
  return { investor, doctor, osteoid: 1 - investor - doctor, post, ticket };
}
function solvePreMoneyForMoic(target) {
  const ms = exitMultSet();
  const at = pre => { const s = _stakeForPreMoney(pre); const R = s ? computeInvestorReturns(ms.base, s.investor) : null; return { s, R }; };
  let lo = 100000, hi = 500000000;
  const mLo = at(lo).R, mHi = at(hi).R;
  if (!mLo || !mHi) return null;
  if (mLo.moic < target) return { feasible: false, reason: 'target above the return even at a €0.1M pre-money', maxMoic: mLo.moic };
  if (mHi.moic > target) return { feasible: false, reason: 'target below the return even at a €500M pre-money' };
  for (let k = 0; k < 100; k++) { const mid = (lo + hi) / 2; (at(mid).R.moic > target) ? lo = mid : hi = mid; }
  const pre = Math.round((lo + hi) / 2 / 1000) * 1000;
  const { s, R } = at(pre);
  return { feasible: true, pre, post: s.post, investorPct: s.investor * 100, osteoidPct: s.osteoid * 100, doctorPct: s.doctor * 100,
           moic: R.moic, irr: R.irr, majority: s.osteoid > 0.5, ticket: s.ticket, exitMult: ms.base };
}
function renderValuationAnchor() {
  const el = document.getElementById('anchorOut');
  if (!el) return;
  const t = gv('targetMoic');
  const r = solvePreMoneyForMoic(t);
  const eur = v => '€' + (v / 1e6).toFixed(2) + 'M';
  if (!r) { el.textContent = '—'; return; }
  if (!r.feasible) { el.innerHTML = 'Target ' + t.toFixed(1) + '× is not reachable at any pre-money: ' + r.reason + (r.maxMoic ? ' (max ≈ ' + r.maxMoic.toFixed(2) + '×)' : '') + '.'; return; }
  const deal = window._lastDeal || {};
  el.innerHTML = 'Required deal pre-money for <b>' + t.toFixed(1) + '×</b>: <b>' + eur(r.pre) + '</b> · post-money ' + eur(r.post)
    + ' · investor stake <b>' + r.investorPct.toFixed(2) + '%</b> · Osteoid A.Ş. ' + r.osteoidPct.toFixed(2) + '% ' + (r.majority ? '(keeps majority ✓)' : '<b style="color:#c0392b;">(loses majority ⚠)</b>')
    + ' · IRR ' + (r.irr !== null ? r.irr.toFixed(1) + '%' : '—')
    + '<br><span style="color:#888;">For comparison, the committed deal pre-money is ' + eur(deal.premoney || 0) + ' (' + (deal.stakes ? deal.stakes.investor.toFixed(2) : '—') + '% stake). This tool only solves — it never changes the deal pre-money input. Same ticket (€' + Math.round(r.ticket).toLocaleString('en-US') + '), tranche structure and Base exit multiple (' + r.exitMult + '×).</span>';
}

// ── YATIRIMCI GETİRİ ANALİZİ ─────────────────────────────────────────────────
function renderGetiriTable() {
  const t = window._lastTotals || [];
  const fcfData = window._lastFcf;
  const deal = window._lastDeal;
  if (!t || t.length < 5 || !fcfData || !deal) return;

  // Lead investor's own cash ticket and ownership % from the priced round
  // (renderDcf's window._lastDeal) — the same numbers the hero KPI cards
  // show, never the Contribution Register's weighted split.
  const invest    = deal.ticket;
  const hisse_pct = deal.stakes.investor / 100;

  const _ms = exitMultSet();
  const exitMult = _ms.base;

  // Year 5 EBITDA (€) — consumed from the single metric ladder (investor scope,
  // matching this table's flagship-consolidated stake basis), not recomputed
  // here. Genuine EBITDA (opProfit + expensed-capex add-back), the same base the
  // Summary Exit box and the DCF terminal value now use (PROMPT 7). The "For 3×
  // MOIC — n× EBITDA needed" back-solve below divides by this same figure, so
  // it stays consistent.
  const _ladderInv = metricLadder('investor');
  const y5ebitda_eur = (_ladderInv ? _ladderInv.ebitda[4] : (t[4] ?? 0)) * 1000;

  // Scenarios offset from the same exitMult used for the DCF terminal value
  // so DCF pre-money and Base exit EV share one consistent Year-5 multiple
  const senaryolar = [
    { id:'c', label:'Conservative', mult: _ms.low,  rowClass:'' },
    { id:'b', label:'Base',         mult: _ms.base, rowClass:'' },
    { id:'o', label:'Optimistic',   mult: _ms.high, rowClass:'r-bas' },
  ];

  const lbl = document.getElementById('gtr_invest_lbl');
  if (lbl) lbl.textContent = Math.round(invest).toLocaleString('tr-TR');

  const tbody = document.getElementById('getiriTableBody');
  if (!tbody) return;

  const fmtEur  = v => { if (v <= 0) return '—'; return '€'+(v/1000000).toFixed(2)+'M'; };
  const fmtPct  = v => (v * 100).toFixed(1) + '%';
  const fmtMoic = v => v > 0 ? v.toFixed(2)+'×' : '—';
  const moicCls = v => v >= 3 ? 'pc' : v >= 2 ? 'neu' : 'nc';
  const fmtIrr  = i => i !== null && i !== undefined ? i.toFixed(1)+'%' : '—';
  const irrCls  = i => { if (i === null || i === undefined) return 'nc'; return i >= 25 ? 'pc' : i >= 15 ? 'neu' : 'nc'; };

  // Each scenario = dividends (same in every row — they don't depend on the
  // exit multiple) + exit proceeds + retained cash at exit (4-A10).
  const scenRows = senaryolar.map(s => {
    const R = computeInvestorReturns(s.mult);
    const ev_eur = R.exitEvK * 1000;
    return `<tr class="${s.rowClass}">
      <td><b>${s.label}</b> <span style="color:#999;font-size:10px;">${s.mult}× EV/EBITDA</span></td>
      <td class="neu">${fmtEur(ev_eur)}</td>
      <td class="neu">${fmtPct(hisse_pct)}</td>
      <td>${fmtEur(R.exitInvK * 1000)}</td>
      <td>${fmtEur(R.cashInvK * 1000)}</td>
      <td>${fmtEur(R.divInvTotK * 1000)}</td>
      <td class="${moicCls(R.moic)}"><b>${fmtEur(R.totalK * 1000)}</b></td>
      <td class="${moicCls(R.moic)}">${fmtMoic(R.moic)}</td>
      <td class="${irrCls(R.irr)}">${fmtIrr(R.irr)}</td>
    </tr>`;
  }).join('');

  // "For 3× MOIC" target row — the exit EV (and multiple) at which dividends +
  // retained cash + exit proceeds reach 3× the ticket:
  //   (EV × stake) + dividends + cash share = 3 × invest  →  EV = (3×invest − div − cash) / stake
  const _Rb = computeInvestorReturns(exitMult);
  const target3x_ev   = hisse_pct > 0 ? Math.max(0, 3 * invest - (_Rb.divInvTotK + _Rb.cashInvK) * 1000) / hisse_pct : 0;
  const target3x_mult = y5ebitda_eur > 0 ? target3x_ev / y5ebitda_eur : 0;
  const _R3 = computeInvestorReturns(target3x_mult);
  const targetRow = `<tr style="border-top:2px dashed #a89ff7;background:#f4f3ff;">
    <td style="color:#534AB7;"><b>For 3× MOIC</b> <span style="font-size:10px;">${y5ebitda_eur > 0 ? target3x_mult.toFixed(1) : '—'}× EBITDA needed</span></td>
    <td style="color:#534AB7;">${fmtEur(target3x_ev)}</td>
    <td class="neu">${fmtPct(hisse_pct)}</td>
    <td>${fmtEur(_R3.exitInvK * 1000)}</td>
    <td>${fmtEur(_R3.cashInvK * 1000)}</td>
    <td>${fmtEur(_R3.divInvTotK * 1000)}</td>
    <td class="pc"><b>${fmtEur(_R3.totalK * 1000)}</b></td>
    <td class="pc">${fmtMoic(_R3.moic)}</td>
    <td class="${irrCls(_R3.irr)}">${fmtIrr(_R3.irr)}</td>
  </tr>`;

  tbody.innerHTML = scenRows + targetRow;

  // Base-case investor cash flows by year — each return component on its own line.
  const cfEl = document.getElementById('investorCashflowBody');
  if (cfEl) {
    const k = v => (v < 0 ? '-€' : '€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
    const cellsY = arr => arr.map(v => '<td>' + (Math.round(v) ? k(v) : '—') + '</td>').join('');
    const inv0 = [-(deal.stage1||0)/1000, 0, 0, 0, 0, 0];
    inv0[_Rb.stage2YearIdx] += -(deal.stage2||0)/1000;
    const divRow = [0].concat(_Rb.divInvK);
    const exitRow = [0,0,0,0,0,_Rb.exitInvK];
    const cashRow = [0,0,0,0,0,_Rb.cashInvK];
    const net = inv0.map((v,i) => v + divRow[i] + exitRow[i] + cashRow[i]);
    cfEl.innerHTML =
      '<tr><td style="text-align:left;">Investment (Stage 1 at closing; Stage 2 at the start of its release year = the preceding year-end column)</td>' + cellsY(inv0) + '</tr>'
      + '<tr><td style="text-align:left;">Dividends to investor (' + Math.round(_Rb.payoutPct) + '% payout × ' + fmtPct(hisse_pct) + ' stake)</td>' + cellsY(divRow) + '</tr>'
      + '<tr><td style="text-align:left;">Exit proceeds — Exit EV (' + exitMult + '× EV/EBITDA) × stake</td>' + cellsY(exitRow) + '</tr>'
      + '<tr><td style="text-align:left;">Retained cash at exit × stake</td>' + cellsY(cashRow) + '</tr>'
      + '<tr class="r-cum"><td style="text-align:left;"><b>Net cash flow to investor</b></td>' + cellsY(net) + '</tr>'
      + '<tr><td style="text-align:left;font-size:10px;color:#888;">Memo: company dividends paid (100%)</td><td>—</td>' + _Rb.dividends.map(v => '<td style="font-size:10px;color:#888;">' + (v ? k(v) : '—') + '</td>').join('') + '</tr>'
      + '<tr><td style="text-align:left;font-size:10px;color:#888;">Memo: company cash at year-end after dividends (100%)</td><td>—</td>' + _Rb.cashEnd.map(v => '<td style="font-size:10px;color:#888;">' + k(v) + '</td>').join('') + '</tr>';
    const sumEl = document.getElementById('investorReturnSummary');
    if (sumEl) sumEl.textContent = 'Base case: dividends ' + k(_Rb.divInvTotK) + ' + exit proceeds ' + k(_Rb.exitInvK) + ' + retained cash ' + k(_Rb.cashInvK) + ' = ' + k(_Rb.totalK) + ' on a €' + Math.round(invest/1000).toLocaleString('en-US') + 'K ticket → ' + fmtMoic(_Rb.moic) + ', IRR ' + fmtIrr(_Rb.irr) + '.';
  }

  // MOIC sensitivity mini-table across exit multiples
  const sensEl = document.getElementById('moicSensBody');
  if (sensEl) {
    // A sensitivity SWEEP, not a scenario set — the three scenario multiples
    // (low/base/high from exitMultSet) are merged in and tagged so the sweep
    // and the scenario table can never disagree (4-A6).
    const _tag = m => m === _ms.base ? ' (Base)' : m === _ms.low ? ' (Conservative)' : m === _ms.high ? ' (Optimistic)' : '';
    const mults = [...new Set([4, 6, 8, 10, 12, 15, 18, _ms.low, _ms.base, _ms.high])].sort((a,b)=>a-b);
    sensEl.innerHTML = mults.map(m => {
      const ev   = y5ebitda_eur * m;
      const _Rm  = computeInvestorReturns(m);   // dividends + exit + retained cash (4-A10)
      const moic = _Rm.moic;
      return `<tr>
        <td>${m}×${_tag(m)}</td>
        <td class="neu">${fmtEur(ev)}</td>
        <td class="${moicCls(moic)}">${fmtMoic(moic)}</td>
        <td class="${irrCls(_Rm.irr)}">${fmtIrr(_Rm.irr)}</td>
      </tr>`;
    }).join('');
  }
}

function initLayout() {
  const pid = window.PAGE_ID || '';
  const pages = [
    ['index.html','index','Summary'],
    ['market.html','pazar','Market &amp; Competition'],
    ['korse.html','korse','Brace Ramp'],
    ['expenses.html','giderler','Expenses'],
    ['growth.html','buyume','Multi-Year Plan'],
    ['investor.html','yatirimci','Investor &amp; Agreement', 'inv'],
    ['captable.html','captable','Cap Table', 'inv'],
    ['methodology.html','metodoloji','Methodology &amp; Validation']
  ].filter(p => !(isBiz() && p[3] === 'inv')); // BC-1/2: deal & valuation pages leave the nav in business mode
  const navLinks = pages.map(([href,id,label]) =>
    `  <a href="${href}"${pid===id?' class="active"':''}>${label}</a>`
  ).join('\n');
  const el = document.getElementById('layout-header');
  if (!el) return;
  el.innerHTML = `<div class="inv-header">
  <div class="inv-header-left">
    <div class="inv-logo">Osteoid Health Technologies Inc.</div>
    <div style="display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.5px;background:#534AB7;color:#fff;padding:3px 10px;border-radius:3px;margin-bottom:10px;">This model has been prepared for Osteoid Centers Ltd.</div>
    <div class="inv-title">Osteoid Centers<br>Istanbul — Center 1</div>
    <div class="inv-sub">Custom orthosis clinic chain · 3D printing infrastructure · Technology-driven production<br>
    All values are dynamic — change via slider or text input, model updates instantly.<br>
    <span style="font-size:10px;color:#b0b0c0;margin-top:4px;display:inline-block;">All financial figures shown in <strong style="color:#a89ff7;">EUR (€)</strong> · TRY amounts shown below in grey · Fixed model EUR/TRY rate (live rate optional, off by default)</span></div>
  </div>
  <div class="inv-header-right">
    <div class="inv-badge">${isBiz() ? 'Confidential — Business Case' : 'Confidential — Investor Only'}</div>
    <div id="eurRateWidget" style="margin-top:10px;padding:10px 14px;background:#1a1a2e;border:1px solid #3a3a5c;border-radius:6px;">
      <div style="font-size:9px;color:#8888aa;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">EUR / TRY Rate</div>
      <div style="display:flex;align-items:center;justify-content:flex-end;gap:6px;margin-bottom:4px;">
        <span style="font-size:12px;color:#a89ff7;white-space:nowrap;">1 EUR = ₺</span>
        <input id="eurRateInput" type="number" step="0.5" min="1" value="${(V.eurKur ?? 50).toFixed(2)}"
          style="width:68px;font-size:15px;font-weight:700;color:#a89ff7;background:#0d0d1a;border:1px solid #4a4a6c;border-radius:4px;padding:3px 6px;text-align:right;">
      </div>
      <div id="eurRateTime" style="font-size:10px;color:#8888aa;margin-bottom:6px;text-align:right;">${_eurRateLabel()}</div>
      <label style="display:flex;align-items:center;justify-content:flex-end;gap:5px;font-size:10px;color:#8888aa;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" id="liveFxToggle" ${V.liveFxAktif === true ? 'checked' : ''} onchange="svLiveFx(this.checked)" style="width:12px;height:12px;accent-color:#534AB7;cursor:pointer;"> Use live rate (off = fixed model rate)
      </label>
      <div style="display:flex;gap:6px;justify-content:flex-end;">
        <button id="eurCheckBtn" onclick="checkLiveEurRate()"
          style="font-size:11px;font-weight:600;padding:5px 10px;border-radius:4px;border:1px solid #4a4a6c;background:#1a1a2e;color:#a89ff7;cursor:pointer;">
          &#128225; Check Rate
        </button>
        <button onclick="applyEurRateFromInput()"
          style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;border:none;background:#534AB7;color:#fff;cursor:pointer;">
          &#10003; Apply
        </button>
      </div>
    </div>
    <div class="inv-meta" style="margin-top:10px;">
      <span>Date</span> September 2026<br>
      <span>Location</span> Istanbul<br>
      <span>Parent Co.</span> Osteoid Inc. (TGB)
    </div>
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;">
      <input id="snapshotName" type="text" placeholder="snapshot_name" style="font-size:11px;padding:5px 8px;border:1px solid #444;border-radius:4px;width:130px;background:#2a2a2a;color:#ccc;">
      <button onclick="saveSnapshot()" style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;border:1px solid #534AB7;background:#534AB7;color:#fff;cursor:pointer;">&#8595; Save</button>
      <label style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;border:1px solid #888;background:#fff;color:#555;cursor:pointer;">&#8679; Load<input type="file" accept=".json" style="display:none" onchange="loadSnapshot(event)"></label>
      <button onclick="localStorage.removeItem('osteoid_V');location.reload();" style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;border:1px solid #888;background:#fff;color:#555;cursor:pointer;">&#8635; Reset to Default</button>
    </div>
  </div>
</div>
<div class="nav-wrap"><div class="nav-bar">
${navLinks}
</div></div>`;
}

// ── EUR/TRY Rate (review 4-A9) ────────────────────────────────────────────────
// Default: the FIXED model rate V.eurKurSabit (dated V.eurKurTarih), so euro
// figures do not change between viewings. The live rate is opt-in via the
// header toggle (V.liveFxAktif, default off); when on, V.eurKur holds the
// fetched rate and V.eurKurLiveTarih its timestamp. The rate actually used and
// its date are always printed in the header of every page.
function _fmtRateDate(d) {
  const dt = (d instanceof Date) ? d : new Date(d);
  return isNaN(dt) ? String(d || '—') : dt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}
function _eurRateLabel() {
  const r = (V.eurKur ?? 50).toFixed(2);
  if (V.liveFxAktif === true && V.eurKurLiveTarih) {
    const d = new Date(V.eurKurLiveTarih);
    return 'Rate used: ₺' + r + ' · live, ' + _fmtRateDate(d) + ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  return 'Rate used: ₺' + r + ' · fixed model rate, as of ' + _fmtRateDate(V.eurKurTarih);
}
function _updateRateWidget() {
  const inputEl = document.getElementById('eurRateInput');
  const timeEl  = document.getElementById('eurRateTime');
  const tg = document.getElementById('liveFxToggle');
  if (inputEl) inputEl.value = (V.eurKur ?? 50).toFixed(2);
  if (tg) tg.checked = V.liveFxAktif === true;
  if (timeEl) { timeEl.textContent = _eurRateLabel(); timeEl.style.color = V.liveFxAktif === true ? '#4CAF50' : '#8888aa'; }
}

function _applyEurRate(rate, date) {
  V.eurKur = Math.round(rate * 100) / 100;
  if (date) V.eurKurLiveTarih = date.toISOString();
  try { localStorage.setItem('osteoid_V', JSON.stringify(V)); } catch(e) {}
  _updateRateWidget();
  if (typeof recalc === 'function') recalc();
  if (typeof buildProjection === 'function') buildProjection();
}

// Header toggle: on → fetch and use the live rate; off → back to the fixed model rate.
function svLiveFx(checked) {
  V.liveFxAktif = !!checked;
  if (V.liveFxAktif) { fetchEurRate(); return; }
  _applyEurRate(V.eurKurSabit || V.eurKur, null);
}

// Tries multiple public EUR/TRY APIs in order; calls onSuccess(rate) or onFail()
var _EUR_APIS = [
  { url: 'https://api.exchangerate-api.com/v4/latest/EUR',
    extract: function(d) { return d && d.rates && d.rates.TRY; } },
  { url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json',
    extract: function(d) { return d && d.eur && d.eur.try; } },
  { url: 'https://api.frankfurter.app/latest?from=EUR&to=TRY',
    extract: function(d) { return d && d.rates && d.rates.TRY; } }
];

function _fetchEurTryLive(onSuccess, onFail) {
  var apis = _EUR_APIS;
  function tryIdx(i) {
    if (i >= apis.length) { onFail(); return; }
    fetch(apis[i].url)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var rate = apis[i].extract(data);
        if (rate && rate > 0) { onSuccess(rate); }
        else { tryIdx(i + 1); }
      })
      .catch(function() { tryIdx(i + 1); });
  }
  tryIdx(0);
}

function fetchEurRate() {
  // Live rate is opt-in (4-A9): with the toggle off, never touch the network
  // and never overwrite the fixed model rate.
  if (V.liveFxAktif !== true) { _updateRateWidget(); return; }
  // Use cache if fresh (< 1 hour)
  try {
    var cached = localStorage.getItem('eur_try_cache');
    if (cached) {
      var _c = JSON.parse(cached);
      if (Date.now() - _c.ts < 3600000) { _applyEurRate(_c.rate, new Date(_c.ts)); return; }
    }
  } catch(e) {}
  _fetchEurTryLive(function(rate) {
    try { localStorage.setItem('eur_try_cache', JSON.stringify({ rate: rate, ts: Date.now() })); } catch(e) {}
    _applyEurRate(rate, new Date());
  }, function() {
    _updateRateWidget();
  });
}

function checkLiveEurRate() {
  var btn    = document.getElementById('eurCheckBtn');
  var timeEl = document.getElementById('eurRateTime');
  if (btn) { btn.textContent = '⧖ Checking…'; btn.disabled = true; }
  _fetchEurTryLive(function(rate) {
    try { localStorage.setItem('eur_try_cache', JSON.stringify({ rate: rate, ts: Date.now() })); } catch(e) {}
    var inputEl = document.getElementById('eurRateInput');
    if (inputEl) inputEl.value = rate.toFixed(2);
    if (timeEl) {
      var now = new Date();
      var t = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      var d = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      timeEl.textContent = '● ' + d + ' ' + t + ' · live — press Apply to use';
      timeEl.style.color = '#f0b030';
    }
    if (btn) { btn.innerHTML = '&#128225; Check Rate'; btn.disabled = false; }
  }, function() {
    if (timeEl) { timeEl.textContent = '⚠ All rate sources failed — enter manually'; timeEl.style.color = '#e74c3c'; }
    if (btn) { btn.innerHTML = '&#128225; Check Rate'; btn.disabled = false; }
  });
}

function applyEurRateFromInput() {
  const inputEl = document.getElementById('eurRateInput');
  if (!inputEl) return;
  const rate = parseFloat(inputEl.value);
  if (!rate || rate <= 0) return;
  // A manually applied rate becomes the fixed model rate, dated today, and
  // switches the live rate off (4-A9).
  V.eurKurSabit = Math.round(rate * 100) / 100;
  V.eurKurTarih = new Date().toISOString().slice(0, 10);
  V.liveFxAktif = false;
  _applyEurRate(rate, null);
}

initLayout();
fetchEurRate();
setInterval(fetchEurRate, 30 * 60 * 1000); // refresh every 30 min — no-op unless the live-rate toggle is on
