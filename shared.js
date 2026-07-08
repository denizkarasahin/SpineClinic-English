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

const V = {"korseF":37800,"malzeme":50,"reklamCarpan":1.0,"mutfak":30000,"genelGider":10000,"ymmM":10000,"stopaj":60000,"royaltyEur":0,"eurKur":53.49,"kira":200000,"depozito":400000,"emlakci":400000,"m2":300,"tadilatM2":7000,"dekoM2":6750,"mobilya":300000,"ruhsat":100000,"aylikKira":100000,"elektrik":16500,"internet":1500,"sarf":3000,"ortotistM":90000,"sgkCarpan":1.6,"stajyerM":31000,"destekM":30000,"stajyer2M":30000,"korse":[15,15,20,25,25,33,35,41,42,50,50,55],"aktifAy":[0,0,9,2,9],"mix":[[50,50,0,0,0],[50,50,0,0,0],[45,36,0,19,0],[53,35,0,12,0],[53,36,0,11,0],[52,37,0,11,0],[75,10,0,15,0],[75,10,0,15,0],[74,10,0,16,0],[43,10,19,17,11],[40,12,20,17,11],[38,12,20,18,12]],"korseF_stdR":30000,"korseF_stdRl":35000,"korseF_delik":55000,"korseF_sens":50000,"korseF_sensDelik":65000,"mal_stdR":500,"mal_stdRl":600,"mal_delik":1600,"mal_sens":2075,"mal_sensDelik":1250,"feeSci_stdR":10,"feeSci_stdRl":10,"feeSci_delik":10,"feeSci_sens":10,"feeSci_sensDelik":10,"feeEdu_stdR":10,"feeEdu_stdRl":10,"feeEdu_delik":10,"feeEdu_sens":10,"feeEdu_sensDelik":10,"feeLib_stdR":10,"feeLib_stdRl":10,"feeLib_delik":10,"feeLib_sens":10,"feeLib_sensDelik":10,"pazarTR":40000,"pazarIstPct":30.1,"hedefOsteoidPay":35.5,"esikStajyer1":21,"esikDestek":40,"esikStajyer2":90,"izmirAktif":true,"izmirHedefPay":35,"izmirUseIst":false,"izmirUseIstGider":true,"izmirKira":80000,"izmirOrtotistM":55000,"izmirStajyerM":25000,"izmirMutfak":18000,"izmirSarf":3000,"izmirUseIstKurulum":true,"izmirKurulumKira":120000,"izmirKurulumDepozito":200000,"izmirKurulumTadilat":4750,"izmirKurulumDeko":2000,"izmirKurulumMobilya":600000,"izmirRampa":[8,8,11,15,19,19,23,26,26,34,34,38],"ankaraAktif":true,"ankaraHedefPay":35,"ankaraUseIst":false,"ankaraUseIstGider":true,"ankaraKira":85000,"ankaraOrtotistM":55000,"ankaraStajyerM":25000,"ankaraMutfak":18000,"ankaraSarf":3000,"ankaraUseIstKurulum":true,"ankaraKurulumKira":120000,"ankaraKurulumDepozito":200000,"ankaraKurulumTadilat":4750,"ankaraKurulumDeko":2000,"ankaraKurulumMobilya":600000,"ankaraRampa":[8,8,12,16,20,20,24,28,28,36,36,40],"izmirNufusPay":7.1,"ankaraNufusPay":8.2,"printerAdet":2,"printerEurFiyat":35000,"robotKolAktif":true,"robotKolEurFiyat":30000,"ekipmanOsteoidden":false,"kesimEurPer":0,"dcfRate":20,"dcfGrowth":18,"dcfGrowth45":45,"dcfExitMult":10,"dcfNegotiationDiscount":60,"dcfInvest":1008662,"kongre":[160000,210000,65000,30000,205000,120000,70000,20000,70000,195000,70000,30000],"donemsel":{"reklam":[30000,35000,35000,30000,30000,20000,30000,20000,30000,20000,30000,30000],"kongre":[0,175000,0,0,175000,0,0,0,0,175000,0,0],"atolye":[100000,0,0,0,0,100000,0,0,0,0,0,0],"ymm":[0,0,0,0,0,0,0,0,0,0,0,0],"diger":[30000,0,30000,0,0,0,40000,0,40000,0,40000,0]},"korseFB2B_stdR":12500,"korseFB2B_stdRl":15000,"korseFB2B_delik":22000,"korseFB2B_sens":25000,"korseFB2B_sensDelik":35000,"korseB2B":[10,10,25,25,35,35,40,40,45,45,55,55],"mixB2B":[[64,36,0,0,0],[66,34,0,0,0],[66,22,12,0,0],[62,25,13,0,0],[58,27,15,0,0],[52,33,15,0,0],[56,10,14,14,6],[56,10,16,14,4],[54,9,16,15,6],[52,10,18,16,4],[50,12,16,13,9],[50,11,18,16,5]],"_sen_min_kira":100000,"_sen_max_kira":400000,"_sen_min_tadilatM2":3500,"_sen_max_tadilatM2":17500,"_sen_min_dekoM2":3500,"_sen_max_dekoM2":17000,"_sen_min_ortotistM":55000,"_sen_max_ortotistM":160000,"_sen_min_operatorM":85000,"_sen_max_operatorM":230000,"_sen_min_stajyerM":16000,"_sen_max_stajyerM":62000,"_sen_min_reklamCarpan":0.25,"_sen_max_reklamCarpan":3.0,"_sen_min_royaltyEur":0,"_sen_max_royaltyEur":150,"_sen_min_eurKur":30,"_sen_max_eurKur":95,"printerAktif":true,"hedefSpine_KorseK":900,"hedefSpine_KorseB":1200,"hedefSpine_FiyatK":40000,"bilimOrtopedi_KorseK":720,"bilimOrtopedi_FiyatK":35000,"bilimOrtopedi_KorseB":780,"canErdem_KorseK":600,"canErdem_KorseB":840,"canErdem_FiyatK":35000,"canErdem_FiyatB":20000,"nesaOrtopedi_KorseB":780,"nesaOrtopedi_FiyatK":33000,"proklinik_KorseK":480,"proklinik_KorseB":660,"proklinik_FiyatK":40000,"proklinik_FiyatB":20000,"aktifOrtez_KorseK":600,"aktifOrtez_KorseB":420,"aktifOrtez_FiyatK":40000,"aktifOrtez_FiyatB":22000,"izmirRampaOran":0.75,"izmirKurulumOran":0.75,"ankaraRampaOran":0.8,"ankaraKurulumOran":0.65,"operatorM":145000,"ipLisansEur":400000,"sehirEksklusifEur":400000,"workingCapBufferEur":500000,"kvOrani":20,"vergiDahil":true,"exitYili":5,"kisiselVergiOrani":15,"fundAy":0,"makineKatkiOran":50,"osteoidCarpan":1,"yatirimciCarpan":1.0,"doktorYatirim":0,"doktorCarpan":1.5,"sweatEur":80000,"sweatVestAy":48,"sweatCliffAy":12,"sweatElapsedAy":0,"sweatMaxPct":5,"sweatCarpan":1.0,"sweatVestedToday":true,"royaltyOffsetYil":1,"royaltyOffsetPct":0,"yonetimUcretiPct":5,"izmirFlagshipPay":65,"ankaraFlagshipPay":65,"izmirSubeMi":true,"ankaraSubeMi":true,"tcmbFaiz":45,"nakdiSermayeAktif":true,"teknokentKapsam":false,"emisyonPrimiAktif":true,"nominalPayOrani":10,"feeStreamAyriMult":false,"feeExitMult":12,"_version":33};
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

const SCEN = {
  // royaltyEur carries its own assumption per scenario — the royalty
  // structure isn't final, so each named case states what it's betting on
  // (baz: the €75 reference; iyimser: none yet agreed, €0 is a real state
  // not a placeholder; kotu: a worse-than-baseline rate stacked on weaker volume).
  baz:     { korseF:37800, malzeme:50, mutfak:20000, stopaj:60000, royaltyEur:75,  korse:[5,10,15,20,25,25,30,30,35,35,40,45], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] },
  iyimser: { korseF:37800, malzeme:50, mutfak:18000, stopaj:60000, royaltyEur:0,   korse:[8,14,20,26,30,32,36,38,42,44,48,55], kongre:[0,50000,0,100000,0,300000,100000,0,0,200000,0,200000] },
  kotu:    { korseF:30000, malzeme:50, mutfak:22000, stopaj:60000, royaltyEur:100, korse:[3,7,10,14,18,20,22,25,28,28,33,38], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] },
  // Setup-cost scenarios — two named points on the same live sliders, not a
  // hardcoded override. Neither is "the truth"; pick one as a starting point
  // and keep adjusting the sliders from there.
  leanSetup:     { kira:150000, depozito:150000, emlakci:80000, m2:200, tadilatM2:4000, dekoM2:2000, mobilya:400000, ruhsat:90000, ekipmanOsteoidden:true },
  fullSelfOwned: { kira:250000, depozito:250000, emlakci:500000, m2:360, tadilatM2:7000, dekoM2:6750, mobilya:300000, ruhsat:100000, ekipmanOsteoidden:false },
};

// Every slider key a scenario preset is allowed to touch. loadScen() only
// applies keys actually present on the chosen scenario object, so a setup
// scenario leaves revenue assumptions untouched and vice versa.
const SCEN_SLIDER_KEYS = ['korseF','malzeme','mutfak','stopaj','royaltyEur',
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
  if (s.ekipmanOsteoidden !== undefined) {
    V.ekipmanOsteoidden = s.ekipmanOsteoidden;
    _refreshEkipmanOsteoidden();
  }
  if (s.korse) s.korse.forEach((v,i)=>{ V.korse[i]=v; });
  if (window._redrawRamp) window._redrawRamp();
  // sync donemsel from kongre shorthand
  if (s.kongre) s.kongre.forEach((v,i)=>{ V.kongre[i]=v; });
  if (window._redrawDonem) window._redrawDonem();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
  recalc();
}

function buildMixTable() {
  const wrap = document.getElementById('mixTableWrap');
  if (!wrap) return;

  const COLORS = ['#888780','#D85A30','#1D9E75','#534AB7','#D4537E'];
  const LABELS = ['Std-NR','Std-Rep.','Perf+Rep.','Sens+Rep.','Sns+Rep+Prf'];

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
    for (let pi = 0; pi < 5; pi++) {
      const aktif = i >= (V.aktifAy[pi] || 0);
      const val   = V.mix[i][pi];
      if (aktif) {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#fff;">'
              + '<div style="display:flex;align-items:center;gap:4px;">'
              + '<input type="range" style="flex:1;accent-color:'+COLORS[pi]+';" min="0" max="100" step="1" value="'+val+'" oninput="updMix('+i+','+pi+',this.value)">'
              + '<span id="mx_'+i+'_'+pi+'" style="min-width:28px;font-weight:700;color:'+COLORS[pi]+';font-size:11px;">'+val+'%</span>'
              + '</div></td>';
      } else {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#f8f8f6;">'
              + '<div style="text-align:center;font-size:11px;color:#ccc;" id="mx_'+i+'_'+pi+'">—</div></td>';
      }
    }
    const tot = V.mix[i].reduce(function(s,v){return s+v;}, 0);
    html += '<td id="mxtot_'+i+'" style="padding:6px 8px;border:1px solid #eeeee9;text-align:center;font-weight:700;font-size:11px;">'+tot+'%</td>';
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  wrap.innerHTML = html;
}

function buildMixB2BTable() {
  const wrap = document.getElementById('mixB2BTableWrap');
  if (!wrap) return;
  const COLORS = ['#888780','#D85A30','#1D9E75','#534AB7','#D4537E'];
  const LABELS = ['Std-NR','Std-Rep.','Perf+Rep.','Sens+Rep.','Sns+Rep+Prf'];
  if (!V.mixB2B) V.mixB2B = Array.from({length:12}, () => [50,50,0,0,0]);
  let html = '<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr>';
  html += '<th style="text-align:left;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;white-space:nowrap;">Month</th>';
  LABELS.forEach(function(label, pi) {
    html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;color:'+COLORS[pi]+';">'+label+'</th>';
  });
  html += '<th style="text-align:center;padding:6px 8px;background:#f0efe9;border:1px solid #e0e0dc;font-size:11px;">Total</th></tr></thead><tbody>';
  for (let i = 0; i < 12; i++) {
    html += '<tr><td style="padding:6px 8px;border:1px solid #eeeee9;font-weight:600;color:#555;white-space:nowrap;">Month '+(i+1)+'</td>';
    for (let pi = 0; pi < 5; pi++) {
      const aktif = i >= (V.aktifAy[pi] || 0);
      const val   = V.mixB2B[i][pi];
      if (aktif) {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#fff;"><div style="display:flex;align-items:center;gap:4px;">'
              + '<input type="range" style="flex:1;accent-color:'+COLORS[pi]+';" min="0" max="100" step="1" value="'+val+'" oninput="updMixB2B('+i+','+pi+',this.value)">'
              + '<span id="mxb2_'+i+'_'+pi+'" style="min-width:28px;font-weight:700;color:'+COLORS[pi]+';font-size:11px;">'+val+'%</span>'
              + '</div></td>';
      } else {
        html += '<td style="padding:4px 6px;border:1px solid #eeeee9;background:#f8f8f6;"><div style="text-align:center;font-size:11px;color:#ccc;" id="mxb2_'+i+'_'+pi+'">—</div></td>';
      }
    }
    const tot = V.mixB2B[i].reduce(function(s,v){return s+v;},0);
    html += '<td id="mxb2tot_'+i+'" style="padding:6px 8px;border:1px solid #eeeee9;text-align:center;font-weight:700;font-size:11px;">'+tot+'%</td></tr>';
  }
  html += '</tbody></table></div>';
  wrap.innerHTML = html;
}

function updMixB2B(ayIdx, prodIdx, val) {
  if (!V.mixB2B) V.mixB2B = Array.from({length:12}, () => [50,50,0,0,0]);
  const newVal = Math.min(100, Math.max(0, parseInt(val)));
  if (newVal === V.mixB2B[ayIdx][prodIdx]) return;
  const others = V.mixB2B[ayIdx].map((v,pi) => pi===prodIdx ? 0 : v);
  const othersSum = others.reduce((s,v)=>s+v,0);
  V.mixB2B[ayIdx][prodIdx] = newVal;
  if (othersSum > 0) {
    const remaining = 100 - newVal;
    let distributed = 0;
    others.forEach((v, pi) => {
      if (pi === prodIdx) return;
      const share = Math.round(v / othersSum * remaining);
      V.mixB2B[ayIdx][pi] = share;
      distributed += share;
    });
    const leftover = 100 - newVal - distributed;
    if (leftover !== 0) {
      for (let pi = V.mixB2B[ayIdx].length-1; pi >= 0; pi--) {
        if (pi !== prodIdx) { V.mixB2B[ayIdx][pi] += leftover; break; }
      }
    }
  } else {
    for (let pi = 0; pi < V.mixB2B[ayIdx].length; pi++) {
      if (pi !== prodIdx) { V.mixB2B[ayIdx][pi] = 100 - newVal; break; }
    }
  }
  V.mixB2B[ayIdx].forEach((v, pi) => {
    const sp = document.getElementById('mxb2_'+ayIdx+'_'+pi);
    const sl = document.querySelector('input[oninput*="updMixB2B('+ayIdx+','+pi+'"]');
    if (sp) sp.textContent = v+'%';
    if (sl) sl.value = v;
  });
  const totEl = document.getElementById('mxb2tot_'+ayIdx);
  if (totEl) { totEl.textContent = V.mixB2B[ayIdx].reduce((s,v)=>s+v,0)+'%'; totEl.style.color='#1a7a45'; }
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
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
    const payB2B = pazarTR > 0 ? (tKorseB2B / pazarTR * 100).toFixed(2) : '0.00';
    kpiB2B.innerHTML = [
      { label:'B2B total braces', val: tKorseB2B+' units', c:'neu' },
      { label:'B2B annual net revenue', val: ff(tGelirB2B), c: tGelirB2B>0?'pos':'neu' },
      { label:'TR market share (B2B)', val: payB2B+'%', c: parseFloat(payB2B)>=1?'pos':'neu' },
    ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div></div>`).join('');
  }
  if (mixB2BChartInst) { mixB2BChartInst.destroy(); mixB2BChartInst = null; }
  const ctx2 = _origGetById('mixB2BChart');
  if (!ctx2) return;
  const PNAMES=['Std-NoReport','Std-Report','Perf+Rpl','Sensor+Rpl','Sns+Rpl+Perf'];
  const PCOLORS=['rgba(136,135,128,0.8)','rgba(216,90,48,0.8)','rgba(29,158,117,0.8)','rgba(83,74,183,0.8)','rgba(212,83,126,0.8)'];
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
    const tpK2 = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0,0]);
    const th2 = `<thead><tr>
      <th>Month</th>
      <th style="color:#888780;">Std-NR</th><th style="color:#D85A30;">Std-Rep.</th>
      <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
      <th>Total</th><th>Gross Revenue</th><th>Sci. Study Fee</th><th>Education Fee</th><th>Library Fee</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    </tr></thead>`;
    const tb2_rows = rowsB2B.map(r => {
      const kk = r.k || [0,0,0,0,0];
      return `<tr>
        <td>Month ${r.ay}</td>
        <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
        <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
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
      <td style="color:#888780;">${tpK2[0]}</td><td style="color:#D85A30;">${tpK2[1]}</td>
      <td style="color:#1D9E75;">${tpK2[2]}</td><td style="color:#534AB7;">${tpK2[3]}</td><td style="color:#D4537E;">${tpK2[4]}</td>
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
// Satellite Entity Mode (growth.html) — Subsidiary Ltd. (default) vs. Branch
// (şube). Structure assumption, not tax advice: Turkey has no group
// taxation, so a subsidiary's losses stay trapped in its own Ltd. (only
// offset that Ltd.'s own future profit, 5-yr carryforward), while a
// branch's losses flow straight into the flagship's own taxable profit —
// see buildProjection()'s izmirFeeRow/izmirEquityRow/izmirMinorityRow fork.
function _refreshSubeMi(sehir) {
  const isSube = !!V[sehir+'SubeMi'];
  const color = sehir === 'izmir' ? '#1D9E75' : '#534AB7';
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
  svRobotKol();
  _refreshEkipmanOsteoidden();
  _refreshVergiDahil();
  _refreshFeeStreamAyriMult();
  _refreshSubeMi('izmir');
  _refreshSubeMi('ankara');
  _refreshNakdiSermaye();
  _refreshTeknokentKapsam();
  _refreshEmisyonPrimi();
  ['exitYili','kisiselVergiOrani','fundAy','tcmbFaiz','nominalPayOrani'].forEach(function(k) {
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
  // Init DCF sliders
  ['dcfRate','dcfGrowth','dcfGrowth45'].forEach(function(k) {
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
  // dcfInvestDisp is no longer a typed slider — it's kept in sync by
  // renderInvestBreakdown() (called from recalc()) since it's a derived total.
  ['ipLisansEur','sehirEksklusifEur','workingCapBufferEur'].forEach(function(k) {
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
    { label:'Rent (1st month)',    val: gv('kira'),     color:'#534AB7' },
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
    { label:'Rent',              val: kira,      color:'#534AB7' },
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
  if (window._lastRows) renderTblChart(window._lastRows);
}

function renderTblChart(rows) {
  window._lastRows = rows;
  if (tblChartInst) { tblChartInst.destroy(); tblChartInst = null; }
  const ctx = _origGetById('tblChart');
  if (!ctx) return;
  const labels = rows.map(r => 'Month ' + r.ay);
  const _kumNote = document.getElementById('kumNote');
  if (_kumNote) _kumNote.style.display = 'none';

  if (tblTab === 'gelir') {
    tblChartInst = new Chart(ctx, {
      data: {
        labels,
        datasets: [
          { type:'bar', label:'Gross Revenue', data: rows.map(r=>r.gelirBrut), backgroundColor:'rgba(26,122,69,0.55)', borderColor:'#1a7a45', borderWidth:1, order:2, yAxisID:'y' },
          { type:'bar', label:'Total Costs', data: rows.map(r=>Math.abs(r.gider)), backgroundColor:'rgba(192,57,43,0.55)', borderColor:'#c0392b', borderWidth:1, order:2, yAxisID:'y' },
          { type:'bar', label:'Fees (Sci+Edu+Lib)', data: rows.map(r=>Math.round(r.feeSci+r.feeEdu+r.feeLib)), backgroundColor:'rgba(212,83,126,0.6)', borderColor:'#D4537E', borderWidth:1, order:2, yAxisID:'y' },
          { type:'line', label:'Monthly Net', data: rows.map(r=>r.net), borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.07)', borderWidth:2.5, pointRadius:4, pointBackgroundColor: rows.map(r=>r.net>=0?'#1a7a45':'#c0392b'), tension:0.3, fill:false, order:1, yAxisID:'y' },
        ]
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        plugins: {
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
          tooltip:{ mode:'index', callbacks:{ label: c => c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur ?? 50)).toLocaleString('en-US') } }
        },
        scales: {
          x:{ grid:{display:false} },
          y:{ ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur ?? 50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
        }
      }
    });

  } else if (tblTab === 'dagılım') {
    const ortoBrutVal = gv('ortotistM') * gv('sgkCarpan');
    const sets = [
      { label:'Rent',           data: rows.map((r,i)=>i===0?0:gv('kira')),                     color:'#534AB7' },
      { label:'Personnel',      data: rows.map(()=>Math.round(ortoBrutVal)),                          color:'#D85A30' },
      { label:'Elct./Int./Sup.',data: rows.map(()=>gv('elektrik')+gv('internet')+gv('sarf')),        color:'#1D9E75' },
      { label:'Advertising',    data: rows.map(r=>r.reklamS),                                         color:'#378ADD' },
      { label:'Kitchen',        data: rows.map(r=>r.mutfakV),                                         color:'#EF9F27' },
      { label:'Withholding',    data: rows.map(r=>r.ayStopaj),                                        color:'#9FE1CB' },
      { label:'YMM (periodic)', data: rows.map(r=>r.ymmDon||0),                                       color:'#C9A6E8' },
      { label:'Periodic',       data: rows.map(r=>r.kongre),                                          color:'#F0997B' },
      { label:'Print Cost',     data: rows.map(r=>r.baskiTop),                                        color:'#AFA9EC' },
      { label:'Sci. Study Fee', data: rows.map(r=>Math.round(r.feeSci)),                              color:'#D4537E' },
      { label:'Education Fee',  data: rows.map(r=>Math.round(r.feeEdu)),                              color:'#E37FA0' },
      { label:'Library Fee',    data: rows.map(r=>Math.round(r.feeLib)),                              color:'#F0A8C0' },
    ];
    tblChartInst = new Chart(ctx, {
      type:'bar',
      data:{ labels, datasets: sets.map(s=>({ label:s.label, data:s.data, backgroundColor:s.color, borderWidth:0, stack:'g' })) },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:8 } },
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(c.raw/(V.eurKur ?? 50)).toLocaleString('en-US') } }
        },
        scales:{
          x:{ stacked:true, grid:{display:false} },
          y:{ stacked:true, ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur ?? 50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
        }
      }
    });

  } else { // kumulatif
    const basabasAy = rows.find(r=>r.net>=0)?.ay || null;
    const pozAy     = rows.find(r=>r.cumBudget>=0)?.ay || null;
    if (_kumNote) {
      _kumNote.style.display = '';
      let kumNoteText, kumNoteColor;
      if (pozAy) {
        kumNoteText = 'Cumulative positive reached at Month ' + pozAy;
        kumNoteColor = '#534AB7';
        _kumNote.style.background = '#f4f3ff';
      } else {
        const tahmin2 = _tahminPozAy(rows);
        if (tahmin2) {
          kumNoteText = 'Not reached within 12 months — expected at ~Month ' + tahmin2 + ' based on growth trend';
        } else {
          kumNoteText = 'Cumulative positive not reached within 12 months';
        }
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
          { type:'bar',  label:'Monthly Net', data: rows.map(r=>Math.round(r.net/1000)),
            backgroundColor: rows.map(r=>r.net>=0?'rgba(26,122,69,0.6)':'rgba(192,57,43,0.5)'),
            borderColor:     rows.map(r=>r.net>=0?'#1a7a45':'#c0392b'), borderWidth:1, yAxisID:'y', order:2 },
          { type:'line', label:'Cumulative (€K)', data: rows.map(r=>Math.round(r.cumBudget/1000)),
            borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.08)', borderWidth:2.5,
            pointRadius: rows.map(r => r.ay===basabasAy||r.ay===pozAy ? 7 : 3),
            pointBackgroundColor: rows.map(r=>r.cumBudget>=0?'#1a7a45':'#c0392b'),
            tension:0.3, fill:true, yAxisID:'y2', order:1 }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur ?? 50)).toLocaleString('en-US')+'K' } },
          annotation: {}
        },
        scales:{
          x:{ grid:{display:false} },
          y:{ position:'left', ticks:{ callback: v=>'€'+v+'K' }, grid:{color:'rgba(0,0,0,0.05)'}, title:{display:true,text:'Monthly Net (€K)',font:{size:10}} },
          y2:{ position:'right', ticks:{ callback: v=>'€'+v+'K' }, grid:{display:false}, title:{display:true,text:'Cumulative (€K)',font:{size:10}} }
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

function renderPazarChart(rows) {
  const pazarTR    = gv('pazarTR');
  const pazarIstPct= gv('pazarIstPct') / 100;
  const pazarIst   = Math.round(pazarTR * pazarIstPct);
  const totalKorse = rows.reduce((s,r) => s + r.korse, 0);

  const _pIstEl = document.getElementById('pazarIstAdet'); if(_pIstEl) _pIstEl.textContent = pazarIst.toLocaleString('tr-TR');

  const payTR  = totalKorse / pazarTR * 100;
  const payIst = totalKorse / pazarIst * 100;

  // KPI
  document.getElementById('pazarKpi').innerHTML = [
    { label:'Turkey market (year)',        val: pazarTR.toLocaleString('tr-TR')+' units', c:'neu' },
    { label:'Istanbul market (year)',      val: pazarIst.toLocaleString('tr-TR')+' units', c:'neu' },
    { label:'Year 1 braces (total)',       val: totalKorse+' units', c:'neu' },
    { label:'TR market share',             val: payTR.toFixed(2)+'%', c: payTR>=1?'pos':'neu' },
    { label:'Istanbul market share',       val: payIst.toFixed(2)+'%', c: payIst>=2?'pos':'neu' },
    { label:'Break-even market share (IST)',val: ((17/pazarIst)*100).toFixed(2)+'%', c:'neg' },
  ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div></div>`).join('');

  // Mix stacked bar — ürün karışımı + pazar payı referans çizgisi
  if (mixChartInst) mixChartInst.destroy();
  const ctx2 = _origGetById('mixChart');
  if (!ctx2) return;
  const PNAMES=['Std-NoReport','Std-Report','Perf+Rpl','Sensor+Rpl','Sns+Rpl+Perf'];
  const PCOLORS=['rgba(136,135,128,0.8)','rgba(216,90,48,0.8)','rgba(29,158,117,0.8)','rgba(83,74,183,0.8)','rgba(212,83,126,0.8)'];
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
  // zero out mix for months before aktif
  for(let i=0; i<parseInt(val); i++) {
    if(V.mix[i][prodIdx] > 0) {
      V.mix[i][0] += V.mix[i][prodIdx];  // shift back to stdR
      V.mix[i][prodIdx] = 0;
      // update UI
      const sp = document.getElementById('mx_'+i+'_'+prodIdx);
      const sp0 = document.getElementById('mx_'+i+'_0');
      const sl = document.querySelector(`[oninput*="updMix(${i},${prodIdx}"]`);
      if(sp) sp.textContent = '0%';
      if(sl) sl.value = 0;
      if(sp0) sp0.textContent = V.mix[i][0]+'%';
      const tot = document.getElementById('mxtot_'+i);
      if(tot) tot.textContent = V.mix[i].reduce((s,v)=>s+v,0)+'%';
    }
  }
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function updMix(ayIdx, prodIdx, val) {
  const newVal = Math.min(100, Math.max(0, parseInt(val)));
  const old    = V.mix[ayIdx][prodIdx];
  const delta  = newVal - old;
  if (delta === 0) return;

  // Diğer ürünlerin toplamı — değiştirileni hariç tut
  const others = V.mix[ayIdx].map((v,pi) => pi===prodIdx ? 0 : v);
  const othersSum = others.reduce((s,v)=>s+v,0);

  // Yeni değeri ata
  V.mix[ayIdx][prodIdx] = newVal;

  // Kalanı orantısal olarak dağıt
  if (othersSum > 0) {
    const remaining = 100 - newVal;
    let distributed = 0;
    const n = others.length;
    others.forEach((v, pi) => {
      if (pi === prodIdx) return;
      const share = Math.round(v / othersSum * remaining);
      V.mix[ayIdx][pi] = share;
      distributed += share;
    });
    // Yuvarlama hatası son aktif ürüne ver
    const leftover = 100 - newVal - distributed;
    if (leftover !== 0) {
      for (let pi = V.mix[ayIdx].length-1; pi >= 0; pi--) {
        if (pi !== prodIdx) { V.mix[ayIdx][pi] += leftover; break; }
      }
    }
  } else {
    // Diğer tüm ürünler sıfır — ilk non-changed ürüne kalanı ver
    const remainder = 100 - newVal;
    for (let pi = 0; pi < V.mix[ayIdx].length; pi++) {
      if (pi !== prodIdx) { V.mix[ayIdx][pi] = remainder; break; }
    }
  }

  // UI güncelle — tüm sütun
  V.mix[ayIdx].forEach((v, pi) => {
    const sp  = document.getElementById('mx_'+ayIdx+'_'+pi);
    const sl  = document.querySelector('input[oninput*="updMix('+ayIdx+','+pi+'"]');
    if (sp) sp.textContent = v+'%';
    if (sl) sl.value = v;
  });

  const totEl = document.getElementById('mxtot_'+ayIdx);
  const tot   = V.mix[ayIdx].reduce((s,v)=>s+v,0);
  if (totEl) { totEl.textContent = tot+'%'; totEl.style.color = '#1a7a45'; }
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
  _s('y1GelirKpi', ff(tGelir), tGelir>=0?'pos':'neg');
  _s('y1BasKpi',   basAy?'Month '+basAy:'Not reached', basAy?'pos':'neg');
  _s('y1CumKpi',   _cumLabel, pozAy?'neu':'neg');
  _s('y1KorseKpi', tKorse+' units', '');
  const {triggerAy:_tAy} = calc4AyOrtalama(rows);
  const _aktifSehir = V.izmirAktif ? 'Izmir' : V.ankaraAktif ? 'Ankara' : '2nd center';
  _s('y1TriggerKpi', _tAy?'✓ Triggered Month '+_tAy+' — '+_aktifSehir+' signal':'Not triggered yet', _tAy?'pos':'neg');
  const royTL = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const royEur= Math.round(royTL/(V.eurKur ?? 50));
  set('pkpi_royalty','€'+royEur.toLocaleString('tr-TR'), 'neg');

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
          oninput="V['_sen_min_${item.key}']=parseInt(this.value);document.getElementById('smn_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseInt(this.value)/(V.eurKur ?? 50)).toLocaleString(\'en-US\')' : 'parseInt(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
        <span id="smn_${item.key}" style="min-width:64px;font-size:11px;font-weight:700;color:#c0392b;text-align:right;">${fmtV(minV)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:10px;color:#888;min-width:26px;">Max</span>
        <input type="range" min="${maxSlBounds[0]}" max="${maxSlBounds[1]}" step="${item.step}" value="${maxV}"
          style="flex:1;accent-color:#1a7a45;"
          oninput="V['_sen_max_${item.key}']=parseInt(this.value);document.getElementById('smx_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseInt(this.value)/(V.eurKur ?? 50)).toLocaleString(\'en-US\')' : 'parseInt(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
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
  const maxKorse = korseArr.length ? Math.max(...korseArr.map(Number)) : 0;
  // Auto printer count (mirrors _autoPrinterAdet), derived locally so this
  // function never has to write V.printerAdet as a side effect.
  const autoPrinterAdet = Math.max(2, Math.ceil(maxKorse / 66));
  const startPrinterAdet = Vlike.printerAdetManual !== undefined ? Vlike.printerAdetManual : autoPrinterAdet;

  const printerMaliyet = (printerAktif && !ekipmanOsteoidden) ? startPrinterAdet * printerEurFiyat * eurKur : 0;
  const robotKolMaliyet = (robotKolAktif && !ekipmanOsteoidden) ? robotKolEurFiyat * eurKur : 0;
  const kurulumTop = -(gv1('kira')+gv1('depozito')+gv1('emlakci')+tadilatTop+dekoTopV+gv1('mobilya')+gv1('ruhsat')+printerMaliyet+robotKolMaliyet);

  const fStdR=gv1('korseF_stdR'), mStdR=gv1('mal_stdR');
  const fStdRl=gv1('korseF_stdRl'), mStdRl=gv1('mal_stdRl');
  const fDelik=gv1('korseF_delik'), mDelik=gv1('mal_delik');
  const fSens=gv1('korseF_sens'), mSens=gv1('mal_sens');
  const fSD=gv1('korseF_sensDelik'), mSD=gv1('mal_sensDelik');
  // Doctor referral commission is split into 3 separately-named, independently
  // adjustable fees (Scientific Study / Education / Library), each its own
  // per-product rate — replacing both the old per-product doctor-fee % and the
  // separate channel-maintenance fee (removed entirely, folded into this set).
  const feeSciP = {
    stdR: gv1('feeSci_stdR')/100, stdRl: gv1('feeSci_stdRl')/100,
    delik: gv1('feeSci_delik')/100, sens: gv1('feeSci_sens')/100, sensDelik: gv1('feeSci_sensDelik')/100,
  };
  const feeEduP = {
    stdR: gv1('feeEdu_stdR')/100, stdRl: gv1('feeEdu_stdRl')/100,
    delik: gv1('feeEdu_delik')/100, sens: gv1('feeEdu_sens')/100, sensDelik: gv1('feeEdu_sensDelik')/100,
  };
  const feeLibP = {
    stdR: gv1('feeLib_stdR')/100, stdRl: gv1('feeLib_stdRl')/100,
    delik: gv1('feeLib_delik')/100, sens: gv1('feeLib_sens')/100, sensDelik: gv1('feeLib_sensDelik')/100,
  };
  const _e1 = Vlike.esikStajyer1 ?? 15, _e2 = Vlike.esikDestek ?? 30, _e3 = Vlike.esikStajyer2 ?? 76;
  const stajBrut = gv1('stajyerM')*sgkC, destekBrut = gv1('destekM')*sgkC, staj2Brut = gv1('stajyer2M')*sgkC;

  const printerKapAyMax = 66;  // günde 3 korse × 22 iş günü
  const printerBirimMaliyet = printerEurFiyat * eurKur;
  let aktifPrinterSayisi = startPrinterAdet;
  const printerTetikAylari = [];

  const mixArr = Vlike.mix || [];
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

    const rawMx = (mixArr[i] || [100,0,0,0,0]).map((v,pi) => i < (aktifAyArr[pi]||0) ? 0 : v);
    const tot = rawMx.reduce((s,v)=>s+v,0) || 100;
    const k = rawMx.map(v => Math.round(korse*v/tot));
    // Largest-remainder rounding: leftover/excess from per-bucket rounding
    // goes to whichever already-launched product has the biggest share this
    // month — never to a product whose aktifAy hasn't started yet.
    let biggestIdx = 0;
    for (let pi = 1; pi < rawMx.length; pi++) { if (rawMx[pi] > rawMx[biggestIdx]) biggestIdx = pi; }
    k[biggestIdx] = Math.max(0, k[biggestIdx] + (korse - k.reduce((s,v)=>s+v,0)));

    const gelirBrut = k[0]*fStdR + k[1]*fStdRl + k[2]*fDelik + k[3]*fSens + k[4]*fSD;
    const feeSci    = k[0]*fStdR*feeSciP.stdR + k[1]*fStdRl*feeSciP.stdRl + k[2]*fDelik*feeSciP.delik + k[3]*fSens*feeSciP.sens + k[4]*fSD*feeSciP.sensDelik;
    const feeEdu    = k[0]*fStdR*feeEduP.stdR + k[1]*fStdRl*feeEduP.stdRl + k[2]*fDelik*feeEduP.delik + k[3]*fSens*feeEduP.sens + k[4]*fSD*feeEduP.sensDelik;
    const feeLib    = k[0]*fStdR*feeLibP.stdR + k[1]*fStdRl*feeLibP.stdRl + k[2]*fDelik*feeLibP.delik + k[3]*fSens*feeLibP.sens + k[4]*fSD*feeLibP.sensDelik;
    const kesimTRY  = kesimEurPer * eurKur;
    const kesimTop  = (k[2]+k[4]) * kesimTRY;
    // Cutting fee (kesim) is a real cost the clinic pays Osteoid Inc. for
    // delik/sensDelik perforation — subtracted here like royaltyTop, and
    // "Cutting / Osteoid Inc." KPI now reflects money actually deducted.
    const baskiTop  = k[0]*mStdR + k[1]*mStdRl + k[2]*(mDelik+kesimTRY) + k[3]*mSens + k[4]*(mSD+kesimTRY);
    const royaltyTop = korse * royaltyTRY;
    const gelirNet  = gelirBrut - feeSci - feeEdu - feeLib - baskiTop - royaltyTop;

    // Printer tetikleyici — bu ayın korsesi mevcut kapasite aşıyorsa ek printer al.
    // Capacity/timing is still tracked even when Osteoid A.Ş. supplies the
    // equipment (ekipmanOsteoidden) — only the cost hitting the clinic P&L is zeroed.
    const gerekliPrinter = Math.ceil(korse / printerKapAyMax);
    let printerEkMaliyet = 0;
    if (gerekliPrinter > aktifPrinterSayisi) {
      const yeniPrinter = gerekliPrinter - aktifPrinterSayisi;
      printerEkMaliyet = ekipmanOsteoidden ? 0 : yeniPrinter * printerBirimMaliyet;
      aktifPrinterSayisi = gerekliPrinter;
      printerTetikAylari.push({ ay: i+1, adet: yeniPrinter, maliyet: printerEkMaliyet });
    }

    const ayStopaj = (i===2||i===5||i===8||i===11) ? stopajV : 0;
    const ayStajyer = korse >= _e1 ? stajBrut   : 0;
    const ayDestek  = korse >= _e2 ? destekBrut : 0;
    const ayStaj2   = korse >= _e3 ? staj2Brut  : 0;

    const sabitGider = aylikKira + (elektrik+internet+sarf) + ortoBrut + operatorBrut + ymmM + ayStajyer + ayDestek + ayStaj2 + genelGiderV;
    const gider = -(sabitGider + reklamS + ymmDon + mutfakV + ayStopaj + kongre + printerEkMaliyet);
    const net = gelirNet + gider;
    cumBudget += net;
    if (basAy===null && net>=0) basAy = i+1;
    if (pozAy===null && cumBudget>=0) pozAy = i+1;

    rows.push({ay:i+1, korse, k, gelirBrut, feeSci, feeEdu, feeLib, baskiTop, royaltyTop, kesimTop, gelirNet, sabitGider, ayStajyer, ayDestek, ayStaj2, reklamS, ymmDon, mutfakV, ayStopaj, kongre, printerEkMaliyet, gider, net, cumBudget});
    cumKorse += korse;
    tGelir += gelirNet; tGider += gider; tNet += net; tKorse += korse;
  }

  return {
    rows, tGelir, tGider, tNet, tKorse, cumKorse, basAy, pozAy, cumBudget,
    kurulumTop, tadilatTop, dekoTopV, printerMaliyet, robotKolMaliyet, printerTetikAylari,
    fStdR, fStdRl, fDelik, fSens, fSD, mStdR, mStdRl, mDelik, mSens, mSD,
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
  const bazResult = calcMetric({});
  const results = SEN_ITEMS.map(item => {
    const minResult = calcMetric({ [item.key]: V['_sen_min_'+item.key] || V[item.key] });
    const maxResult = calcMetric({ [item.key]: V['_sen_max_'+item.key] || V[item.key] });
    return { ...item, baz: V[item.key], minV: V['_sen_min_'+item.key]||V[item.key], maxV: V['_sen_max_'+item.key]||V[item.key], minR: minResult, maxR: maxResult, range: Math.abs(maxResult-minResult) };
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

function svAnkaraAcilisAy(val) {
  val = parseInt(val);
  V.ankaraAcilisAy = val;
  const vl = document.getElementById('ankaraAcilisAyVal');
  if (vl) vl.textContent = 'Year 2 Month ' + val;
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
  if (useIst) {
    const oran = V[sehir+'KurulumOran'] || 1.0;
    const _ekipmanOsteoidden = V.ekipmanOsteoidden !== false;
    const _pM = (V.printerAktif !== false && !_ekipmanOsteoidden) ? _autoPrinterAdet()*(V.printerEurFiyat||35000)*(V.eurKur ?? 50) : 0;
    const _rM = (V.robotKolAktif && !_ekipmanOsteoidden) ? (V.robotKolEurFiyat||30000)*(V.eurKur ?? 50) : 0;
    return (gv('kira') + gv('depozito') + gv('emlakci') + m2*gv('tadilatM2') + m2*gv('dekoM2') + gv('mobilya') + gv('ruhsat') + _pM + _rM) * oran;
  } else {
    const kira     = V[sehir+'KurulumKira']     || gv('kira');
    const depozito = V[sehir+'KurulumDepozito'] || gv('depozito');
    const tadilat  = V[sehir+'KurulumTadilat']  || gv('tadilatM2');
    const deko     = V[sehir+'KurulumDeko']     || gv('dekoM2');
    const mobilya  = V[sehir+'KurulumMobilya']  || gv('mobilya');
    return kira + depozito + gv('emlakci') + m2*tadilat + m2*deko + mobilya + gv('ruhsat');
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


function getMerkezGelir(sehir) {
  const rows = window._lastRows || [];
  const eurKur = V.eurKur ?? 50;
  const y1Korse = rows.reduce((s,r)=>s+(r.korse||0),0) || 1;
  const y1KorseNet = rows.reduce((s,r)=>s+(r.gelirNet||0),0);
  // Yıl sonu mix baz al — üst ürün ağırlığını yansıtır
  const sonR = rows.slice(-3);
  const sonK = sonR.reduce((s,r)=>s+(r.korse||0),0) || 1;
  const sonN = sonR.reduce((s,r)=>s+(r.gelirNet||0),0);
  const birimNet = sonN / sonK;  // yıl sonu mix birim net geliri
  const rampa    = V[sehir+'Rampa'];
  const topKorse = rampa.reduce((s,v)=>s+v, 0);

  const useIstGider = V[sehir+'UseIstGider'] !== false;  // varsayılan true

  // Ay-ay gider hesapla (recalc ile tutarlı eşik mantığı)
  let isletmeYil = 0;
  const _aylikKira   = useIstGider ? gv('kira')           : (V[sehir+'Kira']      || gv('kira') * 0.8);
  const _elektrik    = gv('elektrik');
  const _internet    = gv('internet');
  const _sarf        = useIstGider ? gv('sarf')          : (V[sehir+'Sarf']      || gv('sarf'));
  const _ortoBrut    = (useIstGider ? gv('ortotistM') : (V[sehir+'OrtotistM'] || gv('ortotistM'))) * gv('sgkCarpan');
  const _stajyerBrut = (useIstGider ? gv('stajyerM')  : (V[sehir+'StajyerM'] || gv('stajyerM')))  * gv('sgkCarpan');
  const _mutfakV     = useIstGider ? gv('mutfak')        : (V[sehir+'Mutfak']    || gv('mutfak'));
  const _stopajV     = gv('stopaj');
  const _esik1 = V.esikStajyer1 ?? 15;
  const _esikD = V.esikDestek   ?? 30;
  const _esik2 = V.esikStajyer2 ?? 76;
  const _destekBrut  = gv('destekM')   * gv('sgkCarpan');
  const _staj2Brut   = gv('stajyer2M') * gv('sgkCarpan');

  for (let mi = 0; mi < 12; mi++) {
    const ayKorse = rampa[mi] || 0;
    const ayStopaj = (mi===2||mi===5||mi===8||mi===11) ? _stopajV : 0;
    const personelAy = _ortoBrut
      + (ayKorse >= _esik1 ? _stajyerBrut : 0)
      + (ayKorse >= _esikD ? _destekBrut  : 0)
      + (ayKorse >= _esik2 ? _staj2Brut   : 0);
    isletmeYil += _aylikKira + _elektrik + _internet + _sarf + personelAy + _mutfakV + gv('genelGider') + ayStopaj;
  }

  const brutGelir = topKorse * birimNet;
  const netGelir  = brutGelir - isletmeYil;
  return Math.round(netGelir / eurKur / 1000);
}


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
  // Year 5 EBITDA — direct from 5-year projection (totals[4])
  const t3 = window._lastTotals || [];
  const y5Favok = t3[4] || t3[2] || 0; // €K

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

  // Aktif merkez sayısına göre çarpan ayarla
  const aktifMerkez = 1 + (V.izmirAktif?1:0) + (V.ankaraAktif?1:0);
  const multAdj = aktifMerkez === 1 ? 0 : aktifMerkez === 2 ? 1 : 2;

  // Y5 Ciro = (Y5 FAVÖK + Y5 tahmini opex) / ürün brüt marjı
  // Mantık: FAVÖK = Ciro × ürün_marjı − opex  →  Ciro = (FAVÖK + opex) / ürün_marjı
  // Y5 opex tahmini: olgunluk opex × merkez sayısı (sabit maliyet ağırlıklı yapı)
  const y5OpexEstEurK = q4OpexYilEurK * aktifMerkez;
  const y5Ciro = productMargin > 0 ? Math.round((y5Favok + y5OpexEstEurK) / productMargin) : 0;

  // FAVÖK marjı tüm senaryolar için aynı (Ciro ve FAVÖK senaryo bağımsız)
  const favokMarj = y5Ciro > 0 ? Math.round(y5Favok / y5Ciro * 100) : 0;

  const scenarios = [
    { id:'c', mult: 4 + multAdj },
    { id:'b', mult: 6 + multAdj },
    { id:'o', mult: 9 + multAdj },
  ];
  scenarios.forEach(s => {
    const evEur = y5Favok * s.mult;  // €K
    const evM   = (evEur / 1000).toFixed(2);  // €M
    const set = (id, val) => { const e = document.getElementById(id); if(e) e.textContent = val; };
    const vergiOrani = 0.25;
    const vergiEur   = Math.round(y5Favok * vergiOrani);  // €K
    const netKarEur  = y5Favok - vergiEur;
    set('vt_ciro_'  + s.id, y5Ciro  > 0 ? '~€' + (y5Ciro/1000).toFixed(2)   + 'M' : '—');
    set('vt_favok_' + s.id, y5Favok > 0 ? '~€' + (y5Favok/1000).toFixed(2)  + 'M' : '—');
    set('vt_marj_'  + s.id, favokMarj > 0 ? '%' + favokMarj                          : '—');
    set('vt_vergi_' + s.id, vergiEur  > 0 ? '-€' + (vergiEur/1000).toFixed(2)  + 'M' : '—');
    set('vt_netkâr_'+ s.id, netKarEur > 0 ? '~€' + (netKarEur/1000).toFixed(2) + 'M' : '—');
    set('vt_ev_'    + s.id, evEur   > 0 ? '~€' + evM + 'M' : '—');
    const notEl = document.getElementById('vt_not_' + s.id);
    if (notEl) {
      const merkezNot = aktifMerkez > 1 ? ' · ' + aktifMerkez + ' merkez (+'+multAdj+'x)' : ' · Tek klinik';
      notEl.textContent = notEl.dataset.base + merkezNot;
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
  const _esik1 = V.esikStajyer1 ?? 15, _esikD = V.esikDestek ?? 30, _esik2 = V.esikStajyer2 ?? 76;
  const stajyerBrut = _refRow.ayStajyer;
  const destekBrutBar = _refRow.ayDestek;
  const staj2Brut = _refRow.ayStaj2;
  const sabitBase = aylikKira+elektrik+internet+sarf+ortoBrut+operatorBrut+mutfakV+genelGiderV+ymmM+stajyerBrut+destekBrutBar+staj2Brut; // Month 12 reference
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
    ['brutDestek',    gv('destekM'),   _refKorse >= _esikD, _esikD],
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
  // Threshold badges next to each role's title — same active/inactive signal at a glance
  [['esikLabel1', _refKorse >= _esik1], ['esikLabel2', _refKorse >= _esikD], ['esikLabel3', _refKorse >= _esik2]].forEach(([id, aktif]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.background = aktif ? '#e8f8f0' : '#f5e0d8';
    el.style.color = aktif ? '#1D9E75' : '#c94f2a';
  });

  // Hekim payı ₺ gösterimi
  const _danisPairs = [
    ['stdR',      gv('korseF_stdR')],
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
          fStdR, fStdRl, fDelik, fSens, fSD, mStdR, mStdRl, mDelik, mSens, mSD } = Y1;

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
  svRobotKol();
  _refreshEkipmanOsteoidden();
  document.getElementById('kurulumTop').textContent=ff(kurulumTop);
  renderKurulumDonut(gv('kira'),gv('depozito'),gv('emlakci'),tadilatTop,dekoTopV,gv('mobilya')+printerMaliyet+robotKolMaliyet,gv('ruhsat'));
  window._lastInvestBreakdown = renderInvestBreakdown(kurulumTop, rows);
  window._lastRegister = buildRegister(V);
  refreshAgreementTerms();

  // ── B2B Gelir ──────────────────────────────────────────────────────────────
  const fB2R = gv('korseFB2B_stdR'), fB2Rl = gv('korseFB2B_stdRl');
  const fB2D = gv('korseFB2B_delik'), fB2S = gv('korseFB2B_sens'), fB2SD = gv('korseFB2B_sensDelik');
  const kesimTRYb2 = gv('kesimEurPer') * (V.eurKur ?? 50);
  let tGelirB2B = 0;
  const rowsB2B = [];
  if (!V.korseB2B) V.korseB2B = [0,0,0,0,0,0,0,0,0,0,0,0];
  if (!V.mixB2B) V.mixB2B = Array.from({length:12}, () => [50,50,0,0,0]);
  for (let i2 = 0; i2 < 12; i2++) {
    const kB2 = V.korseB2B[i2] || 0;
    const rawB2 = V.mixB2B[i2].map((v,pi) => i2 < (V.aktifAy[pi]||0) ? 0 : v);
    const totB2 = rawB2.reduce((s,v)=>s+v,0) || 100;
    const kB2u = rawB2.map(v => Math.round(kB2 * v / totB2));
    // Same largest-remainder fix as the clinic loop — never dump rounding
    // residue onto a product whose aktifAy hasn't started yet.
    let biggestIdxB2 = 0;
    for (let pi = 1; pi < rawB2.length; pi++) { if (rawB2[pi] > rawB2[biggestIdxB2]) biggestIdxB2 = pi; }
    kB2u[biggestIdxB2] = Math.max(0, kB2u[biggestIdxB2] + (kB2 - kB2u.reduce((s,v)=>s+v,0)));
    const brutB2 = kB2u[0]*fB2R + kB2u[1]*fB2Rl + kB2u[2]*fB2D + kB2u[3]*fB2S + kB2u[4]*fB2SD;
    const feeSciB2 = kB2u[0]*fB2R*(gv('feeSci_stdR')/100) + kB2u[1]*fB2Rl*(gv('feeSci_stdRl')/100) + kB2u[2]*fB2D*(gv('feeSci_delik')/100) + kB2u[3]*fB2S*(gv('feeSci_sens')/100) + kB2u[4]*fB2SD*(gv('feeSci_sensDelik')/100);
    const feeEduB2 = kB2u[0]*fB2R*(gv('feeEdu_stdR')/100) + kB2u[1]*fB2Rl*(gv('feeEdu_stdRl')/100) + kB2u[2]*fB2D*(gv('feeEdu_delik')/100) + kB2u[3]*fB2S*(gv('feeEdu_sens')/100) + kB2u[4]*fB2SD*(gv('feeEdu_sensDelik')/100);
    const feeLibB2 = kB2u[0]*fB2R*(gv('feeLib_stdR')/100) + kB2u[1]*fB2Rl*(gv('feeLib_stdRl')/100) + kB2u[2]*fB2D*(gv('feeLib_delik')/100) + kB2u[3]*fB2S*(gv('feeLib_sens')/100) + kB2u[4]*fB2SD*(gv('feeLib_sensDelik')/100);
    const baskiB2 = kB2u[0]*mStdR + kB2u[1]*mStdRl + kB2u[2]*(mDelik+kesimTRYb2) + kB2u[3]*mSens + kB2u[4]*(mSD+kesimTRYb2);
    const royB2 = kB2 * royaltyTRY;
    const netB2 = brutB2 - feeSciB2 - feeEduB2 - feeLibB2 - baskiB2 - royB2;
    tGelirB2B += netB2;
    rowsB2B.push({ ay: i2+1, korse: kB2, k: kB2u, gelirBrut: brutB2, feeSciB2B: feeSciB2, feeEduB2B: feeEduB2, feeLibB2B: feeLibB2, baskiTop: baskiB2, royaltyTop: royB2, gelirNet: netB2 });
  }

  // Net marj: gerçek yıllık brüt gelir vs net gelir oranı (ağırlıklı)
  const tBrut = rows.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const brütMarj = tBrut > 0 ? Math.round(tGelir / tBrut * 100) : 0;
  // Kümülatif pozitif tahmini (12 ayda ulaşılamazsa)
  let pozAyLabel, pozAyClass;
  if (pozAy) {
    pozAyLabel = 'Month ' + pozAy; pozAyClass = 'pos';
  } else {
    const tahmin = _tahminPozAy(rows);
    if (tahmin) {
      pozAyLabel = '~Month ' + tahmin + ' (estimated)'; pozAyClass = 'neg';
    } else {
      pozAyLabel = 'Not reached'; pozAyClass = 'neg';
    }
  }
  const _royTL = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const _ksmTL = rows.reduce((s,r)=>s+(r.kesimTop||0),0);
  const _sciTL = rows.reduce((s,r)=>s+(r.feeSci||0),0);
  const _eduTL = rows.reduce((s,r)=>s+(r.feeEdu||0),0);
  const _libTL = rows.reduce((s,r)=>s+(r.feeLib||0),0);
  document.getElementById('kpiGrid').innerHTML=[
    {label:'Total braces',              val:tKorse+' units',                            sub:'',                 c:'neu'},
    {label:'Clinic net revenue (year)', val:feEur(tGelir),                              sub:ffTRY(tGelir),         c:tGelir>=0?'pos':'neg'},
    {label:'B2B net revenue (year)',    val:feEur(tGelirB2B),                           sub:ffTRY(tGelirB2B),      c:tGelirB2B>0?'pos':'neu'},
    {label:'Cumulative year-end',       val:feEur(rows[11].cumBudget),                  sub:ffTRY(rows[11].cumBudget), c:rows[11].cumBudget>=0?'pos':'neg'},
    {label:'Monthly break-even',        val:basAy?'Month '+basAy:'Not reached',         sub:'',                 c:basAy?'pos':'neg'},
    {label:'Cumulative positive',       val:pozAyLabel,                                 sub:'',                 c:pozAyClass},
    {label:'Total investment',           val:'€'+(V.dcfInvest||150000).toLocaleString('en-US'), sub:'',           c:'neg'},
    {label:'Setup cost',                val:feEur(kurulumTop),                          sub:ffTRY(kurulumTop),     c:'neg'},
    {label:'Scientific study fee',      val:feEur(-_sciTL),                             sub:ffTRY(-_sciTL),        c:'neg'},
    {label:'Education fee',             val:feEur(-_eduTL),                             sub:ffTRY(-_eduTL),        c:'neg'},
    {label:'Library fee',               val:feEur(-_libTL),                             sub:ffTRY(-_libTL),        c:'neg'},
    {label:'Royalty / year',            val: gv('royaltyEur')===0 ? '— (not applied)' : '-€'+Math.round(_royTL/(V.eurKur ?? 50)).toLocaleString('en-US'), sub: gv('royaltyEur')===0 ? '' : ffTRY(-_royTL), c: gv('royaltyEur')===0 ? 'neu' : 'neg'},
    {label:'Osteoid Inc. royalty',      val:'€'+Math.round(_royTL/(V.eurKur ?? 50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Cutting / Osteoid Inc.',    val:'€'+Math.round(_ksmTL/(V.eurKur ?? 50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Net margin / brace',        val:brütMarj+'%',                               sub:'',                 c:'neu'},
  ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div>${k.sub?`<div style="font-size:10px;color:#aaa;margin-top:2px;line-height:1.2;">${k.sub}</div>`:''}</div>`).join('');

  const th=`<thead><tr>
    <th>Month</th>
    <th style="color:#888780;">Std-NR</th><th style="color:#D85A30;">Std-Rep.</th>
    <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
    <th>Gross Rev.</th><th>Sci. Study Fee</th><th>Education Fee</th><th>Library Fee</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    <th>Fixed</th><th>Intern</th><th>Advertising</th><th>Kitchen</th><th>Withholding</th><th>Periodic/YMM</th><th>Printer</th>
    <th>Tot.Cost</th><th>Monthly Net</th><th>Cumulative</th>
  </tr></thead>`;
  const tb_rows=rows.map(r=>{
    const isBas=r.ay===basAy, isPoz=r.ay===pozAy, rc=isPoz?'r-cum':isBas?'r-bas':'';
    const kk=r.k||[r.korse,0,0,0,0];
    const donYmm = (r.kongre||0)+(r.ymmDon||0);
    return `<tr class="${rc}">
      <td>Month ${r.ay}${isBas?' ✓':''}${isPoz?' ★':''}</td>
      <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
      <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
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
  const tpKk = rows.reduce((s,r)=>{const k=r.k||[0,0,0,0,0]; return s.map((v,j)=>v+k[j]);}, [0,0,0,0,0]);
  const topRow = `<tr style="background:#f0efe9;font-weight:700;">
    <td>Total</td>
    <td style="color:#888780;">${tpKk[0]}</td><td style="color:#D85A30;">${tpKk[1]}</td>
    <td style="color:#1D9E75;">${tpKk[2]}</td><td style="color:#534AB7;">${tpKk[3]}</td><td style="color:#D4537E;">${tpKk[4]}</td>
    <td>${ff(tBrut)}</td><td class="nc">${ff(-tSci)}</td>
    <td class="nc">${ff(-tEdu)}</td>
    <td class="nc">${ff(-tLib)}</td>
    <td class="nc">${ff(-tBaski)}</td><td class="nc">${ff(-tRoyalty)}</td>
    <td class="${cls(tGelir)}">${ff(tGelir)}</td>
    <td class="nc">${ff(-tSabit)}</td><td class="nc">${ff(-tStajyer)}</td><td class="nc">${ff(-tReklam)}</td>
    <td class="nc">${ff(-tMutfak)}</td><td class="nc">${ff(-tStopaj)}</td><td class="nc">${ff(-tKongre)}</td><td class="${tPrinter?'nc':'zc'}">${tPrinter?ff(-tPrinter):'—'}</td>
    <td class="${cls(tGider)}">${ff(tGider)}</td>
    <td class="${cls(tNet)}">${ff(tNet)}</td>
    <td class="${cls(rows[11].cumBudget)}">${ff(rows[11].cumBudget)}</td>
  </tr>`;
  // B2B bölümü
  const b2bSep = `<tr style="background:#1a1a1a;color:#fff;font-size:10px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">
    <td colspan="23" style="padding:5px 8px;">B2B Channel</td></tr>`;
  const b2b_rows = rowsB2B.map(r => {
    const kk = r.k || [r.korse,0,0,0,0];
    return `<tr style="background:#f7f6ff;">
      <td>Month ${r.ay}</td>
      <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
      <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
      <td>${ff(r.gelirBrut)}</td>
      <td class="nc">${ff(-r.feeSciB2B)}</td>
      <td class="nc">${ff(-r.feeEduB2B)}</td>
      <td class="nc">${ff(-r.feeLibB2B)}</td>
      <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
      <td class="nc">${ff(-r.royaltyTop)}</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc" colspan="8">—</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc">—</td>
    </tr>`;
  }).join('');
  const b2bKk = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0,0]);
  const b2bBrut  = rowsB2B.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const b2bSci = rowsB2B.reduce((s,r)=>s+(r.feeSciB2B||0),0);
  const b2bEdu = rowsB2B.reduce((s,r)=>s+(r.feeEduB2B||0),0);
  const b2bLib = rowsB2B.reduce((s,r)=>s+(r.feeLibB2B||0),0);
  const b2bBaski = rowsB2B.reduce((s,r)=>s+(r.baskiTop||0),0);
  const b2bRoy   = rowsB2B.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const b2bTopRow = `<tr style="background:#e8e6ff;font-weight:700;">
    <td>Total</td>
    <td style="color:#888780;">${b2bKk[0]}</td><td style="color:#D85A30;">${b2bKk[1]}</td>
    <td style="color:#1D9E75;">${b2bKk[2]}</td><td style="color:#534AB7;">${b2bKk[3]}</td><td style="color:#D4537E;">${b2bKk[4]}</td>
    <td>${ff(b2bBrut)}</td>
    <td class="nc">${ff(-b2bSci)}</td>
    <td class="nc">${ff(-b2bEdu)}</td>
    <td class="nc">${ff(-b2bLib)}</td>
    <td class="nc">${ff(-b2bBaski)}</td>
    <td class="nc">${ff(-b2bRoy)}</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc" colspan="8">—</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc">—</td>
  </tr>`;
  const tb = '<tbody>' + tb_rows + topRow + (rowsB2B.length ? b2bSep + b2b_rows + b2bTopRow : '') + '</tbody>';
  const _mt = document.getElementById('mainTable'); if (_mt) _mt.innerHTML=th+tb;

  renderRamp();
  if(window._redrawDonem) window._redrawDonem();
  window._lastRows = rows;
  window._lastGelirB2B = tGelirB2B;
  updatePinnedKpi(rows, tGelir, basAy, pozAy, tKorse);
  updateValuationTable(rows, tNet);
  buildProjection();
  runSensitivity();
  renderTblChart(rows);
  renderPazarChart(rows);
  renderPazarChartB2B(rowsB2B);
  renderTrigger(rows);
  updateKapasiteUyari(rows);
  renderGiderDagilim(rows);
  renderMain(rows);
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

function renderSummary3yr(totals, izmirRow, ankaraRow, b2bRow, y1KorseNet, izmirY5Gelir, ankaraY5Gelir, izmirY5Adet, ankaraY5Adet) {
  const el = document.getElementById('summaryOutcomes3yr');
  if (!el) return;
  const eurKur = V.eurKur ?? 50;

  // Market size per city (from V) — for display only
  const pazarTR     = V.pazarTR || 30000;
  const istAdet     = Math.round(pazarTR * (V.pazarIstPct   || 18.3) / 100 * (V.hedefOsteoidPay || 20) / 100);

  // Revenue at full market penetration — per center (all in €K), net after own operating costs
  const _n = totals.length - 1; // last year index (4 for 5-year model)
  const istNet     = Math.max(0, (totals[_n] || 0) - (izmirRow[_n]||0) - (ankaraRow[_n]||0)); // includes b2b, net
  const izmirNet   = izmirRow[_n]  || 0;  // net after center-specific opex (= izmirFullNet)
  const ankaraNet  = ankaraRow[_n] || 0;  // net after center-specific opex (= ankaraFullNet)
  // Combined total = net consolidated (matches Multi-Year Plan page)
  const totalNet  = totals[_n] || 0;

  // Year 1 Istanbul (model-driven, shown as-is)
  const y1Eur    = y1KorseNet > 0 ? Math.round(y1KorseNet / eurKur) : 0;
  const y1Braces = (V.korse || []).reduce((s, v) => s + v, 0);
  const y1PctOfTarget = istAdet > 0 ? Math.round(y1Braces / istAdet * 100) : 0;

  const fmtEur  = v => v > 0 ? '€' + v.toLocaleString('en-US') : '—';
  const fmtKEur = v => v > 0 ? '~€' + (v * 1000).toLocaleString('en-US') : '—';
  const fmtN    = v => v > 0 ? v.toLocaleString('en-US') + ' units/yr' : '—';

  const clinicCard = (name, badge, color, adet, payPct, net, note, revLabel) => `
    <div style="border:1px solid ${color}44;border-left:3px solid ${color};border-radius:6px;padding:12px 16px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#ddd;">${name}</div>
        <div style="font-size:10px;font-weight:700;color:${color};background:${color}22;padding:2px 8px;border-radius:10px;">${badge}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">${revLabel || 'Annual net revenue'}</div>
          <div style="font-size:18px;font-weight:700;color:${color};">${fmtKEur(net)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Target volume</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${fmtN(adet)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Market share target</div>
          <div style="font-size:14px;font-weight:600;color:#bbb;">${payPct}%</div>
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
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Net revenue (year)</div>
          <div style="font-size:22px;font-weight:700;color:#534AB7;">${fmtEur(y1Eur)}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">Braces Year 1</div>
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
    'IST · ' + (V.hedefOsteoidPay || 20).toFixed(0) + '% market share',
    '#534AB7', istAdet,
    (V.hedefOsteoidPay || 20).toFixed(1),
    istNet,
    'Includes B2B channel · Net after operating costs'
  );

  if (V.izmirAktif) {
    html += clinicCard(
      'Izmir Center',
      'IZM · ' + (V.izmirHedefPay || 21).toFixed(0) + '% market share',
      '#1D9E75', izmirY5Adet || 0,
      (V.izmirHedefPay || 21).toFixed(1),
      izmirNet,
      'Net after center-specific opex (own rent, orthotist, staff + shared overhead). Gross: ~€' + Math.round((izmirY5Gelir||0)) + 'K',
      'Annual net revenue'
    );
  }

  if (V.ankaraAktif) {
    html += clinicCard(
      'Ankara Center',
      'ANK · ' + (V.ankaraHedefPay || 20.5).toFixed(0) + '% market share',
      '#E8963C', ankaraY5Adet || 0,
      (V.ankaraHedefPay || 20.5).toFixed(1),
      ankaraNet,
      'Net after center-specific opex (own rent, orthotist, staff + shared overhead). Gross: ~€' + Math.round((ankaraY5Gelir||0)) + 'K',
      'Annual net revenue'
    );
  }

  // ── Total ──
  html += `
    <div style="border:2px solid #534AB7;border-radius:6px;padding:14px 16px;margin-top:4px;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <div style="font-size:11px;font-weight:700;color:#aaa;">Combined — net consolidated (all active centers)</div>
        <div style="font-size:10px;color:#555;margin-top:3px;">After operating costs for all centers · <a href="growth.html" style="color:#534AB7;text-decoration:none;font-weight:700;">Full Growth Model →</a></div>
      </div>
      <div style="font-size:26px;font-weight:700;color:#534AB7;">${fmtKEur(totalNet)}</div>
    </div>
    <div style="font-size:10px;color:#555;margin-top:10px;">⚠ These are Year-5 capacity targets — not year-bound projections. All centers show net after their own operating costs. Each center uses its own rent/staff params; combined total matches the Multi-Year Plan page.</div>`;

  el.innerHTML = html;
}

function renderInvestorRoadmap(el, totals, korseM1, feeIncomeRow, equityIncomeRow, minorityRow, b2bRow, fcfData, izmirRow, ankaraRow, istFinancingGapRow) {
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
  const cCount = 1 + (V.izmirAktif ? 1 : 0) + (V.ankaraAktif ? 1 : 0);

  const years = [
    { label:'Year 1', badge:'✓ Monthly model', color:'#534AB7',
      body:'Istanbul Flagship · Break-even ~Month 4 · Cumulative positive ~Month 11' },
    { label:'Year 2', badge:'Expansion', color:'#1D9E75',
      body:'Istanbul 40% capacity · ' + c2text },
    { label:'Year 3', badge:'65% capacity', color:'#BA7517',
      body: cCount + ' active center' + (cCount>1?'s':'') + ' · 65% of market target' },
    { label:'Year 4', badge:'85% capacity', color:'#c94f2a',
      body: cCount + ' active center' + (cCount>1?'s':'') + ' · 85% of market target' },
    { label:'Year 5', badge:'Full penetration', color:'#2c4a2e',
      body:'Market penetration target reached · ' + cCount + ' center' + (cCount>1?'s':'') + ' at capacity' },
  ];

  let html = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:20px;">`;
  years.forEach((y, i) => {
    const v = totals[i];
    html += `
      <div style="border:${i===4?'2px':'1px'} solid ${y.color}${i===4?'':'55'};border-radius:6px;padding:12px 10px;background:${i===4?y.color+'0a':'#fff'};">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${y.color};margin-bottom:3px;">${y.label}</div>
        <div style="font-size:9px;font-weight:700;background:${y.color}20;color:${y.color};padding:1px 6px;border-radius:8px;display:inline-block;margin-bottom:7px;">${y.badge}</div>
        <div style="font-size:20px;font-weight:700;color:${y.color};margin-bottom:5px;">${fmtK(v)}</div>
        <div style="font-size:10px;color:#666;line-height:1.4;">${y.body}</div>
      </div>`;
  });
  html += `</div>`;

  html += `<div class="tbl-wrap" style="margin-bottom:8px;"><table>
    <thead><tr>
      <th style="text-align:left;">Revenue stream</th>
      <th>Y1</th><th>Y2</th><th>Y3</th><th>Y4</th><th>Y5</th><th>Y1→Y5</th>
    </tr></thead>
    <tbody>
      <tr><td>Istanbul C1 (private)</td>${fmtCell(korseM1[0])}${fmtCell(korseM1[1])}${fmtCell(korseM1[2])}${fmtCell(korseM1[3])}${fmtCell(korseM1[4])}${growCell(korseM1[0],korseM1[4])}</tr>
      ${istFinancingGapRow.some(v=>v>0) ? `<tr><td style="color:#8a6d1a;font-size:11px;">↳ Opex gap financed by raised capital</td>${istFinancingGapRow.map(v=>`<td style="text-align:right;font-size:11px;color:#8a6d1a;">${v>0?'€'+v+'K':'—'}</td>`).join('')}<td></td></tr>` : ''}
      ${b2bRow[0]>0||b2bRow[1]>0 ? `<tr><td style="color:#378ADD;">B2B — Istanbul</td>${fmtCell(b2bRow[0])}${fmtCell(b2bRow[1])}${fmtCell(b2bRow[2])}${fmtCell(b2bRow[3])}${fmtCell(b2bRow[4])}${growCell(b2bRow[0],b2bRow[4])}</tr>` : ''}
      ${V.izmirAktif ? `<tr><td style="color:#1D9E75;">Izmir Center <span style="font-weight:400;font-size:10px;opacity:0.7;">— satellite's own net, memo only</span></td>${fmtCell(izmirRow[0])}${fmtCell(izmirRow[1])}${fmtCell(izmirRow[2])}${fmtCell(izmirRow[3])}${fmtCell(izmirRow[4])}${growCell(izmirRow[1],izmirRow[4])}</tr>` : ''}
      ${V.ankaraAktif ? `<tr><td style="color:#534AB7;">Ankara Center <span style="font-weight:400;font-size:10px;opacity:0.7;">— satellite's own net, memo only</span></td>${fmtCell(ankaraRow[0])}${fmtCell(ankaraRow[1])}${fmtCell(ankaraRow[2])}${fmtCell(ankaraRow[3])}${fmtCell(ankaraRow[4])}${growCell(ankaraRow[1],ankaraRow[4])}</tr>` : ''}
      ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="color:#BA7517;">↳ Management fee income to flagship</td>${fmtCell(feeIncomeRow[0])}${fmtCell(feeIncomeRow[1])}${fmtCell(feeIncomeRow[2])}${fmtCell(feeIncomeRow[3])}${fmtCell(feeIncomeRow[4])}${growCell(feeIncomeRow[1],feeIncomeRow[4])}</tr>` : ''}
      ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="color:#1D9E75;">↳ Equity income to flagship</td>${fmtCell(equityIncomeRow[0])}${fmtCell(equityIncomeRow[1])}${fmtCell(equityIncomeRow[2])}${fmtCell(equityIncomeRow[3])}${fmtCell(equityIncomeRow[4])}${growCell(equityIncomeRow[1],equityIncomeRow[4])}</tr>` : ''}
      <tr style="font-weight:700;border-top:2px solid #e0e0dc;"><td>Consolidated Total (Flagship)</td>${fmtCell(totals[0])}${fmtCell(totals[1])}${fmtCell(totals[2])}${fmtCell(totals[3])}${fmtCell(totals[4])}${growCell(totals[0],totals[4])}</tr>
      ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="font-size:10px;color:#999;">Memo: Minority interest (local investors — not in total above)</td>${minorityRow.map(v=>`<td style="text-align:right;font-size:10px;color:#999;">${v>0?'€'+v+'K':'—'}</td>`).join('')}<td></td></tr>` : ''}
      ${fcfData ? `<tr style="border-top:1px solid #e0e0dc;"><td>${fcfData.vergiDahil?'Free cash flow (after tax)':'Free cash flow (pre-tax)'}</td>${fcfData.taxedFcf.map(fmtSignedCell).join('')}${growCell(fcfData.taxedFcf[0], fcfData.taxedFcf[4])}</tr>` : ''}
      ${fcfData && fcfData.vergiDahil ? `<tr><td style="font-size:10px;color:#999;">↳ Loss carryforward balance (year-end)</td>${fcfData.carryEnd.map(c=>`<td style="text-align:right;font-size:10px;color:#999;">${c>0?'€'+c+'K':'—'}</td>`).join('')}<td></td></tr>` : ''}
    </tbody>
  </table></div>
  <div style="font-size:10px;color:#888;">⚠ Istanbul C1 Y1–Y5 = net after fixed operating costs, one consistent basis every year (Y1's opex briefly exceeds gross revenue in this ramp year — that gap is the "Opex gap financed by raised capital" row above, not a basis switch). Izmir/Ankara rows show each satellite's own full net revenue for visibility once activated, but satellites are separate, majority-owned companies — they are memo lines, NOT summed into the flagship total. The flagship's actual take (in the total) is its management fee (100% of satellite gross revenue × the fee rate, indented below each satellite) plus its equity share of that satellite's profit after the fee. See <a href="captable.html" style="color:#534AB7;font-weight:700;">Cap Table</a> for the Network Structure explainer.${fcfData ? ' Free cash flow = the consolidated post-opex total above (every year, same basis)'+(fcfData.vergiDahil?', taxed at '+fcfData.kvOraniPct+'% corporate tax (KV) with 5-year loss carryforward. Orthosis sales are VAT-exempt (KDV Kanunu 17/4-s) — no VAT is modeled.':' — corporate tax is currently switched off.') : ''} &nbsp;<a href="growth.html" style="color:#534AB7;font-weight:700;">Full Multi-Year Model →</a></div>`;

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
function computeNakdiSermayeDeduction() {
  const active = V.nakdiSermayeAktif !== false;
  const deduction = [0,0,0,0,0];
  const reg = window._lastRegister;
  const fundedCashEur = reg ? reg.byKey.investor.valueEur : 0;
  const fundAy = V.fundAy ?? 0;
  const fundingYear = Math.floor(fundAy / 12) + 1; // 1-indexed accounting period
  const perYearEur = fundedCashEur * ((V.tcmbFaiz ?? 45) / 2) / 100;
  const perYearK = Math.round(perYearEur / 1000);
  if (active) {
    for (let y = 1; y <= 5; y++) {
      if (y >= fundingYear && y <= fundingYear + 4) deduction[y-1] = perYearK;
    }
  }
  return { active, deduction, fundedCashEur, fundingYear, perYearK };
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
  const taxableBase = pretaxFcf.map((v,i) => v - nakdi.deduction[i]);

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

  const cum = [];
  let running = 0;
  for (let i = 0; i < 5; i++) { running += taxedFcf[i]; cum.push(running); }

  return { pretaxFcf, taxedFcf, taxPaid, carryEnd, vergiDahil, kvOraniPct, cum, nakdi };
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
  const y5KorseAdet = Math.round(pazarIst * hedefOsteoidPay);
  const y5PayPct    = (hedefOsteoidPay * 100).toFixed(1);

  // Yıl sonu (Ay 10-12) mix'inden birim net gelir — mix olgunlaştığında üst ürün ağırlığı artar
  const lastRows = rows.slice(-3);  // son 3 ay
  const sonKorse = lastRows.reduce((s,r) => s + (r.korse||0), 0) || 1;
  const sonGelirNet = lastRows.reduce((s,r) => s + (r.gelirNet||0), 0);
  const y1KorseAdeti = y1Korse || 1;
  const sonBirimNet  = toEur(sonGelirNet) / sonKorse * 1000;  // €/adet — yıl sonu mix baz
  const y5KorseToplam = Math.round(y5KorseAdet * sonBirimNet / 1000); // €K

  // ── Yıl 1 gider tabanı ──
  const lerp = (a, b, t) => Math.round(a + (b-a)*t);
  const y1Gider    = Math.abs(rows.reduce((s,r) => s+(r.gider||0), 0)); // ₺
  const y1GiderEur = toEur(y1Gider); // €K

  // ── Yıl 3 hedef brüt gelir = pazar payı hedefi × yıl sonu birim net gelir ──
  const y3BrutGelir = y5KorseToplam; // €K (gider henüz düşülmedi)

  // ── Gider projeksiyonu: Yıl 1 bazından ölçek ekonomisiyle ──
  // Yıl 2: +%15, Yıl 3: +%18, Yıl 4: +%22, Yıl 5: +%25 (personel, kira artışı)
  const y2GiderEur = Math.round(y1GiderEur * 1.15);
  const y3GiderEur = Math.round(y1GiderEur * 1.18);
  const y4GiderEur = Math.round(y1GiderEur * 1.22);
  const y5GiderEur = Math.round(y1GiderEur * 1.25); // Istanbul Y5 opex (Istanbul only; new centers use own params)

  // ── Istanbul private-clinic channel — one consistent basis every year:
  // gross revenue, opex, and net (gross − opex, floored at 0). Y1 used to
  // show gross instead of net here (the opex gap was "hidden" by switching
  // basis for one year only), which made Year 1 a different metric than
  // Years 2-5 and silently broke anything that summed this row across years
  // (computeFcfStream, in particular — see there). Y1's real shortfall — the
  // startup-year opex gap covered by raised capital — is now its own
  // explicit row (istFinancingGapRow) instead of a basis switch.
  const y1BrutM1 = toEur(y1KorseNet);
  const istGrossRow = [y1BrutM1, lerp(y1BrutM1, y3BrutGelir, 0.40), lerp(y1BrutM1, y3BrutGelir, 0.65), lerp(y1BrutM1, y3BrutGelir, 0.85), y3BrutGelir];
  const istOpexRow  = [y1GiderEur, y2GiderEur, y3GiderEur, y4GiderEur, y5GiderEur];
  const istNetRow   = istGrossRow.map((g,i) => Math.max(0, g - istOpexRow[i]));
  // Amount by which opex exceeds gross, before flooring — the gap raised
  // capital covers in a ramp year (0 once gross overtakes opex).
  const istFinancingGapRow = istGrossRow.map((g,i) => Math.max(0, istOpexRow[i] - g));

  const korseM1    = istNetRow; // Istanbul private-clinic net, post-opex, every year
  const korseM2    = [0, 0, 0, 0, 0];


  // Tetik ayına göre 2. merkez açılış zamanlaması
  // Tetikten 3 ay sonra açılış — en erken Yıl 2 başı (ay 13), en geç ay 24
  const {triggerAy: _trigAy} = calc4AyOrtalama(rows);
  const _acilisAy = _trigAy ? Math.max(13, _trigAy + 3) : 13; // İzmir için otomatik tetik
  const _aktifAyYil2 = Math.max(0, Math.min(12, 25 - _acilisAy));
  // Ankara bağımsız açılış ayı (slider) — global ay numarasına çevir (13-24)
  const _ankaraAcilisAyYil2 = V.ankaraAcilisAy || 3;
  const _ankaraAcilisAy = 12 + _ankaraAcilisAyYil2;
  const _ankaraAktifAyYil2 = Math.max(0, Math.min(12, 25 - _ankaraAcilisAy));

  updateMerkezGiderNotu('izmir');
  updateMerkezGiderNotu('ankara');

  // İzmir / Ankara açılış tarihi — Nisan 2026 başlangıç + acilisAy - 1 ay
  const _aylar = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function _acilisLabel(ay) {
    const d = new Date(2026, 3, 1); // April 2026
    d.setMonth(d.getMonth() + ay - 1);
    return 'Year 2 Month ' + (ay - 12) + ' · ' + _aylar[d.getMonth()] + ' ' + d.getFullYear();
  }
  const _izmirAcilisKpi = document.getElementById('izmirAcilisKpi');
  const _ankaraAcilisKpi = document.getElementById('ankaraAcilisKpi');
  if (_izmirAcilisKpi) _izmirAcilisKpi.style.display = V.izmirAktif ? '' : 'none';
  if (_ankaraAcilisKpi) _ankaraAcilisKpi.style.display = V.ankaraAktif ? '' : 'none';
  const _izmirAcilisEl = document.getElementById('izmirAcilisTarihi');
  const _ankaraAcilisEl = document.getElementById('ankaraAcilisTarihi');
  if (_izmirAcilisEl && V.izmirAktif) _izmirAcilisEl.textContent = _acilisLabel(_acilisAy);
  if (_ankaraAcilisEl && V.ankaraAktif) _ankaraAcilisEl.textContent = _acilisLabel(_ankaraAcilisAy);

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
  const pazarIzmir  = Math.round(gv('pazarTR') * V.izmirNufusPay / 100);
  const pazarAnkara = Math.round(gv('pazarTR') * V.ankaraNufusPay / 100);
  const y1BirimNetEur = toEur(y1KorseNet) / (y1Korse||1) * 1000; // €/adet

  const izmirY5Adet  = V.izmirAktif  ? Math.round(pazarIzmir  * gv('izmirHedefPay')  / 100) : 0;
  const ankaraY5Adet = V.ankaraAktif ? Math.round(pazarAnkara * gv('ankaraHedefPay') / 100) : 0;
  const izmirY5Gelir  = Math.round(izmirY5Adet  * y1BirimNetEur / 1000);
  const ankaraY5Gelir = Math.round(ankaraY5Adet * y1BirimNetEur / 1000);

  // Center-specific Y5 opex — clinic-direct costs only (no HQ overhead)
  // ymmM, donemsel.reklam advertising, genelGider are Istanbul/HQ costs; Izmir/Ankara don't carry them
  const izmirMonthlyTRY  = (V.izmirKira||80000)  + (V.izmirOrtotistM||55000)  + (V.izmirStajyerM||25000)
    + (V.izmirMutfak||18000)  + (V.izmirSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.izmirOrtotistM||55000)  + (V.izmirStajyerM||25000))  * 0.23);
  const ankaraMonthlyTRY = (V.ankaraKira||85000) + (V.ankaraOrtotistM||55000) + (V.ankaraStajyerM||25000)
    + (V.ankaraMutfak||18000) + (V.ankaraSarf||3000)
    + (V.elektrik||16500) + (V.internet||1500)
    + Math.round(((V.ankaraOrtotistM||55000) + (V.ankaraStajyerM||25000)) * 0.23);
  const izmirY5GiderEur  = Math.round(toEur(izmirMonthlyTRY  * 12) * 1.25);
  const ankaraY5GiderEur = Math.round(toEur(ankaraMonthlyTRY * 12) * 1.25);

  // Full-capacity net at Y5 (gross minus center-specific operating cost base).
  // Not floored at 0 — a satellite's own inputs (target market share vs. its
  // fixed opex) can genuinely imply a loss at any scale, and hiding that
  // behind a floor would silently mask exactly the Branch-vs-Subsidiary tax
  // difference this model exists to show. At realistic/default inputs this
  // stays comfortably positive, so removing the floor doesn't move any
  // existing default-scenario number.
  const izmirFullNet  = V.izmirAktif  ? (izmirY5Gelir  - izmirY5GiderEur) : 0;
  const ankaraFullNet = V.ankaraAktif ? (ankaraY5Gelir - ankaraY5GiderEur) : 0;
  // New centers: 5-year ramp — interpolate from full-capacity net to avoid cost-base distortion
  const izmirGelirY2  = V.izmirAktif  ? Math.round(izmirFullNet  * 0.25 * _aktifAyYil2  / 12) : 0;
  const ankaraGelirY2 = V.ankaraAktif ? Math.round(ankaraFullNet * 0.25 * _ankaraAktifAyYil2 / 12) : 0;
  const izmirY3Net  = Math.round(izmirFullNet  * 0.50);
  const izmirY4Net  = Math.round(izmirFullNet  * 0.80);
  const ankaraY3Net = Math.round(ankaraFullNet * 0.50);
  const ankaraY4Net = Math.round(ankaraFullNet * 0.80);
  const izmirRow  = [0, izmirGelirY2,  izmirY3Net,  izmirY4Net,  izmirFullNet];
  const ankaraRow = [0, ankaraGelirY2, ankaraY3Net, ankaraY4Net, ankaraFullNet];

  // ── Hub-and-spoke: satellite management fee + ownership split ────────────
  // Each satellite (Izmir/Ankara) defaults to a separate Ltd. şirket,
  // majority-owned by the flagship, with its own local investors. The
  // flagship charges a management fee on the satellite's GROSS revenue
  // (before any profit split) — so the flagship earns the fee on 100% of
  // satellite revenue but bears it only pro-rata to its own stake in the
  // remaining profit. That asymmetry is the engine of the model, not an
  // incidental detail. This is Subsidiary mode (izmirSubeMi/ankaraSubeMi
  // false, the default).
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
  const izmirGrossRow  = V.izmirAktif
    ? [0, Math.round(izmirY5Gelir  * 0.25 * _aktifAyYil2        / 12), Math.round(izmirY5Gelir  * 0.50), Math.round(izmirY5Gelir  * 0.80), izmirY5Gelir]
    : [0,0,0,0,0];
  const ankaraGrossRow = V.ankaraAktif
    ? [0, Math.round(ankaraY5Gelir * 0.25 * _ankaraAktifAyYil2  / 12), Math.round(ankaraY5Gelir * 0.50), Math.round(ankaraY5Gelir * 0.80), ankaraY5Gelir]
    : [0,0,0,0,0];
  const yonetimUcretiOran = (V.yonetimUcretiPct ?? 5) / 100;
  const izmirIsSube  = !!V.izmirSubeMi;
  const ankaraIsSube = !!V.ankaraSubeMi;
  const izmirFlagshipPayOran  = (V.izmirFlagshipPay  ?? 65) / 100;
  const ankaraFlagshipPayOran = (V.ankaraFlagshipPay ?? 65) / 100;

  const izmirFeeRow  = izmirIsSube  ? izmirGrossRow.map(()=>0)  : izmirGrossRow.map(g  => Math.round(g * yonetimUcretiOran));
  const ankaraFeeRow = ankaraIsSube ? ankaraGrossRow.map(()=>0) : ankaraGrossRow.map(g => Math.round(g * yonetimUcretiOran));
  // Subsidiary: satellite's own net additionally bears the management fee
  // before it's split, floored at 0 — a Ltd.'s loss stays trapped inside it,
  // never reducing the flagship's equity-income line. Branch: no fee, full
  // net (can be negative) passes straight through.
  const izmirNetAfterFeeRow  = izmirIsSube  ? izmirRow.slice()  : izmirRow.map((n,i)  => Math.max(0, n  - izmirFeeRow[i]));
  const ankaraNetAfterFeeRow = ankaraIsSube ? ankaraRow.slice() : ankaraRow.map((n,i) => Math.max(0, n  - ankaraFeeRow[i]));
  const izmirEquityRow  = izmirIsSube  ? izmirNetAfterFeeRow.slice()  : izmirNetAfterFeeRow.map(n  => Math.round(n * izmirFlagshipPayOran));
  const ankaraEquityRow = ankaraIsSube ? ankaraNetAfterFeeRow.slice() : ankaraNetAfterFeeRow.map(n => Math.round(n * ankaraFlagshipPayOran));
  // Branch: no minority interest — a branch cannot take local investors.
  const izmirMinorityRow  = izmirIsSube  ? izmirRow.map(()=>0)  : izmirNetAfterFeeRow.map((n,i)  => n  - izmirEquityRow[i]);
  const ankaraMinorityRow = ankaraIsSube ? ankaraRow.map(()=>0) : ankaraNetAfterFeeRow.map((n,i) => n  - ankaraEquityRow[i]);
  // Flagship-side aggregates — these, not the satellites' own 100% net, are
  // what flows into the flagship's consolidated view, valuation, AND taxable
  // profit (via computeFcfStream(), which taxes `totals` below with the
  // standard 5-yr loss carryforward) — so a Branch's loss reduces flagship
  // KV exactly like a bad month at the Istanbul clinic would, while a
  // Subsidiary's loss (floored above) never does.
  const feeIncomeRow    = [0,1,2,3,4].map(i => izmirFeeRow[i]    + ankaraFeeRow[i]);
  const equityIncomeRow = [0,1,2,3,4].map(i => izmirEquityRow[i] + ankaraEquityRow[i]);
  const minorityRow     = [0,1,2,3,4].map(i => izmirMinorityRow[i] + ankaraMinorityRow[i]);

  // B2B: yalnızca İstanbul Merkez 1
  const b2bY1 = toEur(window._lastGelirB2B || 0);
  const b2bRow = [b2bY1, Math.round(b2bY1*1.5), Math.round(b2bY1*1.8), Math.round(b2bY1*2.0), Math.round(b2bY1*2.2)];

  // Consolidated FLAGSHIP view = own clinic (Istanbul + B2B) + management fee
  // income (100% of all active satellites' fees) + equity income from
  // satellites (flagshipPay% of each satellite's net-after-fee). Minority
  // interest (minorityRow) is deliberately excluded — it belongs to local
  // investors, not the flagship.
  const totals = [0,1,2,3,4].map(i => korseM1[i]+korseM2[i]+feeIncomeRow[i]+equityIncomeRow[i]+b2bRow[i]);

  // ── Brace counts per year — clinic channel only (Istanbul + Izmir + Ankara);
  // B2B is tracked separately (see korse.html / kpiGridB2B) and not folded in
  // here so this stays consistent with Year 1's and Year 5's existing brace
  // KPIs, which have always excluded B2B. Uses the SAME interpolation weights
  // (0.40/0.65/0.85) and center ramp fractions (0.25×months/12, 0.50, 0.80)
  // as the revenue projection above, so brace counts and revenue tell the
  // same growth story instead of two independently-guessed curves.
  const korseCountIst    = [y1Korse, lerp(y1Korse, y5KorseAdet, 0.40), lerp(y1Korse, y5KorseAdet, 0.65), lerp(y1Korse, y5KorseAdet, 0.85), y5KorseAdet];
  const korseCountIzmir  = [0, Math.round(izmirY5Adet  * 0.25 * _aktifAyYil2 / 12),       Math.round(izmirY5Adet  * 0.50), Math.round(izmirY5Adet  * 0.80), izmirY5Adet];
  const korseCountAnkara = [0, Math.round(ankaraY5Adet * 0.25 * _ankaraAktifAyYil2 / 12), Math.round(ankaraY5Adet * 0.50), Math.round(ankaraY5Adet * 0.80), ankaraY5Adet];
  const korseCountTotal  = [0,1,2,3,4].map(i => korseCountIst[i] + korseCountIzmir[i] + korseCountAnkara[i]);
  // For the Tax Optimization panel's Lever 2 (teknokent royalty pipe) — total
  // royalty paid to Osteoid A.Ş. across all active centers, €K/yr.
  window._lastRoyaltyRow = korseCountTotal.map(k => Math.round(k * gv('royaltyEur') / 1000));

  // Yıl 2 KPI güncelle
  window._lastTotals = totals;
  window._lastFeeIncomeRow = feeIncomeRow; // €K, Y1-Y5, pretax — for the DCF sum-of-parts toggle
  // For the Tax Optimization panel's Lever 4 (Branch-loss consolidation) —
  // surfaces which satellite (if any) is in Branch mode and loss-making;
  // the actual tax effect already flows through equityIncomeRow -> totals ->
  // computeFcfStream() above, this is display-only.
  window._lastBranchLoss = {
    izmir:  { isSube: izmirIsSube,  row: izmirEquityRow.slice() },
    ankara: { isSube: ankaraIsSube, row: ankaraEquityRow.slice() },
  };
  window._lastFcf = computeFcfStream();
  renderSummary3yr(totals, izmirRow, ankaraRow, b2bRow, y1KorseNet, izmirY5Gelir, ankaraY5Gelir, izmirY5Adet, ankaraY5Adet);
  const _roadmapEl = document.getElementById('investorRoadmap');
  if (_roadmapEl) renderInvestorRoadmap(_roadmapEl, totals, korseM1, feeIncomeRow, equityIncomeRow, minorityRow, b2bRow, window._lastFcf, izmirRow, ankaraRow, istFinancingGapRow);
  if (typeof renderDcf === 'function') { renderDcf(); renderGetiriTable(); }
  renderDeRiskedNarrative();
  renderTaxOptPanel();
  const _aktifCenterLabel = ['Istanbul'].concat(V.izmirAktif?['Izmir']:[]).concat(V.ankaraAktif?['Ankara']:[]).join(' + ');
  ['y2','y3','y4'].forEach((yid, idx) => {
    const i = idx + 1; // totals/korseCountTotal index: Year 2=1, Year 3=2, Year 4=3
    const gEl = document.getElementById(yid+'GelirKpi');
    if (gEl) gEl.textContent = '~€' + totals[i] + 'K';
    const kEl = document.getElementById(yid+'KorseKpi');
    if (kEl) kEl.textContent = korseCountTotal[i].toLocaleString('tr-TR') + ' units';
    const mEl = document.getElementById(yid+'MerkezKpi');
    if (mEl) mEl.textContent = _aktifCenterLabel;
  });
  // Kurulum özet güncelle — full label+value rebuild for consistency
  ['izmir','ankara'].forEach(_updateKurulumOzet);

  // Bilimsel çalışma / eğitim / kütüphane bedeli tahmini: Y1 oranı sabit varsayım
  const y1SciEurK   = toEur(y1Sci);
  const y1EduEurK   = toEur(y1Edu);
  const y1LibEurK   = toEur(y1Lib);
  const y1SciOran   = y1KorseNet > 0 ? y1Sci / y1KorseNet : 0.10;
  const y1EduOran   = y1KorseNet > 0 ? y1Edu / y1KorseNet : 0.10;
  const y1LibOran   = y1KorseNet > 0 ? y1Lib / y1KorseNet : 0.10;
  const y2TotalPreOpexNet = istGrossRow[1] + (izmirRow[1]||0) + (ankaraRow[1]||0) + (b2bRow[1]||0);
  const y3TotalPreOpexNet = istGrossRow[2] + (izmirRow[2]||0) + (ankaraRow[2]||0) + (b2bRow[2]||0);
  const y4TotalPreOpexNet = istGrossRow[3] + (izmirRow[3]||0) + (ankaraRow[3]||0) + (b2bRow[3]||0);
  const y5TotalPreOpexNet = istGrossRow[4] + (izmirRow[4]||0) + (ankaraRow[4]||0) + (b2bRow[4]||0);
  const y2SciEurK = Math.round(y2TotalPreOpexNet * y1SciOran);
  const y3SciEurK = Math.round(y3TotalPreOpexNet * y1SciOran);
  const y4SciEurK = Math.round(y4TotalPreOpexNet * y1SciOran);
  const y5SciEurK = Math.round(y5TotalPreOpexNet * y1SciOran);
  const y2EduEurK = Math.round(y2TotalPreOpexNet * y1EduOran);
  const y3EduEurK = Math.round(y3TotalPreOpexNet * y1EduOran);
  const y4EduEurK = Math.round(y4TotalPreOpexNet * y1EduOran);
  const y5EduEurK = Math.round(y5TotalPreOpexNet * y1EduOran);
  const y2LibEurK = Math.round(y2TotalPreOpexNet * y1LibOran);
  const y3LibEurK = Math.round(y3TotalPreOpexNet * y1LibOran);
  const y4LibEurK = Math.round(y4TotalPreOpexNet * y1LibOran);
  const y5LibEurK = Math.round(y5TotalPreOpexNet * y1LibOran);

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
  const istSciY = istGrossY.map(g => Math.round(g * y1SciOran));
  const istEduY = istGrossY.map(g => Math.round(g * y1EduOran));
  const istLibY = istGrossY.map(g => Math.round(g * y1LibOran));
  const istRoyaltyY   = korseCountIst.map(k => Math.round(k * gv('royaltyEur') * (V.eurKur??50) / 1000));

  // Cutting fee (Perf/S+P braces only) — Year 1's actual last-3-month product mix held
  // constant; this projection has no per-product mix at all beyond Year 1.
  const _sonK = lastRows.reduce((s,r) => { const k=r.k||[0,0,0,0,0]; return s.map((v,j)=>v+k[j]); }, [0,0,0,0,0]);
  const _sonKesimPct = sonKorse > 0 ? (_sonK[2]+_sonK[4]) / sonKorse : 0;
  const istCuttingY = korseCountIst.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') * (V.eurKur??50) / 1000));

  // Margin: Year 1 = brace-level margin (net ÷ list price, matches 12-Month Summary exactly);
  // Years 2-5 = operating margin (post-opex net ÷ pre-opex gross) — a different basis, since
  // list-price data doesn't exist beyond Year 1 here. The two are not directly comparable.
  const _y1TBrut = rows.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const _y1BraceMarj = _y1TBrut > 0 ? Math.round(y1KorseNet/_y1TBrut*100) : 0;
  const istMarginY = [_y1BraceMarj].concat(istNetY.slice(1).map((n,idx) => istGrossY[idx+1] > 0 ? Math.round(n/istGrossY[idx+1]*100) : null));

  renderAnnualDetailTable('istAnnualDetailWrap', 'Istanbul', {
    braces: korseCountIst, netRevenue: istNetY, cumEnd: istCumY,
    basAyLabels: istBasAyLabels, pozAyLabels: istPozAyLabels,
    invest: istInvestY, setup: istSetupY,
    sciFee: istSciY, eduFee: istEduY, libFee: istLibY,
    royalty: istRoyaltyY, cuttingFee: istCuttingY, margin: istMarginY,
  });

  // ── Same Annual Financial Detail metrics for Izmir / Ankara. These centers have
  // no monthly model at all (they're ramped from a single full-capacity target),
  // so "Monthly break-even" never applies, and doctor fee/channel/cutting-fee %
  // borrow Istanbul's Year-1 ratios — a second layer of approximation on top of
  // the one Istanbul's own Y2-5 columns already carry. Setup cost lands entirely
  // in the opening year (Year 2 in this model), not spread out.
  function _centerAnnualCfg(sehir, korseCountArr, netRevArr, y5GrossGelir, aktifAyYil2, feeRow, netAfterFeeRow, equityRow, minorityRowLocal, flagshipPayPct) {
    const aktif = !!V[sehir+'Aktif'];
    const isSube = !!V[sehir+'SubeMi'];
    const grossY = aktif
      ? [0, Math.round(y5GrossGelir * 0.25 * aktifAyYil2 / 12), Math.round(y5GrossGelir*0.50), Math.round(y5GrossGelir*0.80), y5GrossGelir]
      : [0,0,0,0,0];
    const setupEurK = aktif ? toEur(getMerkezKurulum(sehir)) : 0;
    const setupY = [0, setupEurK, 0, 0, 0];
    // Cumulative uses the satellite's own bottom line AFTER the management
    // fee — that's the real cash position from a local investor's view.
    const cumY = [0];
    for (let i=1;i<5;i++) cumY.push(cumY[i-1] + netAfterFeeRow[i] - (i===1 ? setupEurK : 0));
    const pozAyLabels = ['—'];
    for (let i=1;i<5;i++) {
      if (!aktif) { pozAyLabels.push('Not opened'); continue; }
      pozAyLabels.push(cumY[i] >= 0 ? (i===1 || cumY[i-1] < 0 ? 'Reached this year' : 'Already positive') : 'Not yet');
    }
    const sciY = grossY.map(g => Math.round(g * y1SciOran));
    const eduY = grossY.map(g => Math.round(g * y1EduOran));
    const libY = grossY.map(g => Math.round(g * y1LibOran));
    const royaltyY   = korseCountArr.map(k => Math.round(k * gv('royaltyEur') * (V.eurKur??50) / 1000));
    const cuttingY   = korseCountArr.map(k => Math.round(k * _sonKesimPct * gv('kesimEurPer') * (V.eurKur??50) / 1000));
    const marginY    = netRevArr.map((n,i) => grossY[i] > 0 ? Math.round(n/grossY[i]*100) : null);
    return {
      braces: korseCountArr, netRevenue: netRevArr, cumEnd: cumY,
      basAyLabels: ['—','—','—','—','—'], pozAyLabels,
      invest: [null,null,null,null,null], setup: setupY,
      sciFee: sciY, eduFee: eduY, libFee: libY,
      royalty: royaltyY, cuttingFee: cuttingY, margin: marginY,
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
    renderAnnualDetailTable('izmirAnnualDetailWrap', 'Izmir', _centerAnnualCfg('izmir', korseCountIzmir, izmirRow, izmirY5Gelir, _aktifAyYil2, izmirFeeRow, izmirNetAfterFeeRow, izmirEquityRow, izmirMinorityRow, Math.round(izmirFlagshipPayOran*100)));
  }
  const ankaraDetailEl = document.getElementById('ankaraAnnualDetailSection');
  if (ankaraDetailEl) ankaraDetailEl.style.display = V.ankaraAktif ? '' : 'none';
  if (V.ankaraAktif) {
    renderAnnualDetailTable('ankaraAnnualDetailWrap', 'Ankara', _centerAnnualCfg('ankara', korseCountAnkara, ankaraRow, ankaraY5Gelir, _ankaraAktifAyYil2, ankaraFeeRow, ankaraNetAfterFeeRow, ankaraEquityRow, ankaraMinorityRow, Math.round(ankaraFlagshipPayOran*100)));
  }

  // Tablo güncelle
  const wrap = document.getElementById('projTableWrap');
  if (wrap) {
    const fmt = v => v > 0 ? `<td class="val-pos">~€${v}K</td>` : v < 0 ? `<td style="color:#c94f2a;">-€${Math.abs(v)}K</td>` : '<td style="color:#aaa;">—</td>';
    const grow = (v1, vN) => v1 > 0 ? `<td class="val-grow">+${Math.round((vN/v1-1)*100)}%</td>` : '<td style="color:#aaa;">—</td>';
    wrap.innerHTML = `
    <table class="rev-table">
      <thead><tr>
        <th>Revenue Item</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th><th>Y1→Y5</th>
      </tr></thead>
      <tbody>
        <tr><td>Brace — Center 1 (private channel)</td>${fmt(korseM1[0])}${fmt(korseM1[1])}${fmt(korseM1[2])}${fmt(korseM1[3])}${fmt(korseM1[4])}${grow(korseM1[0],korseM1[4])}</tr>
        ${istFinancingGapRow.some(v=>v>0) ? `<tr><td style="color:#8a6d1a;font-size:11px;">↳ Opex gap financed by raised capital</td>${istFinancingGapRow.map(v=>v>0?`<td style="color:#8a6d1a;font-size:11px;">€${v}K</td>`:`<td style="color:#aaa;font-size:11px;">—</td>`).join('')}<td style="color:#aaa;font-size:11px;">—</td></tr>` : ''}
        <tr><td>Brace — Center 2 (Year 2+)</td>${fmt(0)}${fmt(korseM2[1])}${fmt(korseM2[2])}${fmt(korseM2[3])}${fmt(korseM2[4])}${grow(korseM2[1],korseM2[4])}</tr>
        ${b2bRow[0] > 0 || b2bRow[1] > 0 ? `<tr><td style="color:#378ADD;">B2B — Center 1 (Istanbul)</td>${fmt(b2bRow[0])}${fmt(b2bRow[1])}${fmt(b2bRow[2])}${fmt(b2bRow[3])}${fmt(b2bRow[4])}${grow(b2bRow[0],b2bRow[4])}</tr>` : ''}
        ${V.izmirAktif  ? `<tr><td style="color:#1D9E75;">Izmir Center <span style="font-weight:400;font-size:10px;opacity:0.7;">— satellite's own net, memo only</span></td>${fmt(izmirRow[0])}${fmt(izmirRow[1])}${fmt(izmirRow[2])}${fmt(izmirRow[3])}${fmt(izmirRow[4])}${grow(izmirRow[1],izmirRow[4])}</tr>` : ''}
        ${V.ankaraAktif ? `<tr><td style="color:#534AB7;">Ankara Center <span style="font-weight:400;font-size:10px;opacity:0.7;">— satellite's own net, memo only</span></td>${fmt(ankaraRow[0])}${fmt(ankaraRow[1])}${fmt(ankaraRow[2])}${fmt(ankaraRow[3])}${fmt(ankaraRow[4])}${grow(ankaraRow[1],ankaraRow[4])}</tr>` : ''}
        ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="color:#BA7517;">↳ Management fee income to flagship</td>${fmt(feeIncomeRow[0])}${fmt(feeIncomeRow[1])}${fmt(feeIncomeRow[2])}${fmt(feeIncomeRow[3])}${fmt(feeIncomeRow[4])}${grow(feeIncomeRow[1],feeIncomeRow[4])}</tr>` : ''}
        ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="color:#1D9E75;">↳ Equity income to flagship</td>${fmt(equityIncomeRow[0])}${fmt(equityIncomeRow[1])}${fmt(equityIncomeRow[2])}${fmt(equityIncomeRow[3])}${fmt(equityIncomeRow[4])}${grow(equityIncomeRow[1],equityIncomeRow[4])}</tr>` : ''}

        <tr class="total"><td>Consolidated Total — Flagship (Clinic + B2B + Satellite Fee/Equity)</td>${fmt(totals[0])}${fmt(totals[1])}${fmt(totals[2])}${fmt(totals[3])}${fmt(totals[4])}${grow(totals[0],totals[4])}</tr>
        ${(V.izmirAktif||V.ankaraAktif) ? `<tr><td style="font-size:11px;color:#999;">Memo: Minority interest — local investors (not in total above)</td>${minorityRow.map(v=>`<td style="font-size:11px;color:#999;">${v>0?'€'+v+'K':'—'}</td>`).join('')}<td style="color:#aaa;font-size:11px;">—</td></tr>` : ''}
        <tr style="background:#fff7f5;"><td style="color:#c94f2a;font-size:11px;">↳ Scientific Study Fee <span style="font-weight:400;opacity:0.65;">(Y1 ratio fixed · projection)</span></td><td style="color:#c94f2a;font-size:11px;">~€${y1SciEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y2SciEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y3SciEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y4SciEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y5SciEurK}K</td><td style="color:#aaa;font-size:11px;">—</td></tr>
        <tr style="background:#fff7f5;"><td style="color:#c94f2a;font-size:11px;">↳ Education Fee <span style="font-weight:400;opacity:0.65;">(Y1 ratio fixed · projection)</span></td><td style="color:#c94f2a;font-size:11px;">~€${y1EduEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y2EduEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y3EduEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y4EduEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y5EduEurK}K</td><td style="color:#aaa;font-size:11px;">—</td></tr>
        <tr style="background:#fff7f5;"><td style="color:#c94f2a;font-size:11px;">↳ Library Fee <span style="font-weight:400;opacity:0.65;">(Y1 ratio fixed · projection)</span></td><td style="color:#c94f2a;font-size:11px;">~€${y1LibEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y2LibEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y3LibEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y4LibEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y5LibEurK}K</td><td style="color:#aaa;font-size:11px;">—</td></tr>
        <tr style="background:#f0efe9;"><td style="font-size:11px;color:#888;">Year 5 target brace count (IST share: %${y5PayPct})</td><td colspan="5" style="text-align:center;color:#888;font-size:11px;">${y5KorseAdet.toLocaleString('tr-TR')} units/year</td></tr>
      </tbody>
    </table>`;
  }

  const noteEl = document.getElementById('projTableNote');
  if (noteEl) noteEl.textContent = 'Istanbul Y1–Y5 = net after fixed operating costs, one consistent basis every year (see the Brace — Center 1 row above; its opex briefly exceeds gross revenue in Year 1, the ramp year — that gap is the "Opex gap financed by raised capital" row, not a basis switch). Istanbul Y2–Y5 opex is Y1\'s total cost (incl. periodic costs — advertising, conferences, workshops, CPA fee) scaled flat by +15%/+18%/+22%/+25%, not modeled fresh per year. Izmir/Ankara default to separate satellite Ltd. companies (see Network Structure on the Cap Table page) — their own opex excludes HQ-shared costs entirely (see note above), and their revenue reaches the flagship only as management fee income (on 100% of satellite gross revenue) plus equity income (the flagship\'s ownership % of satellite net profit after that fee); the rest is minority interest belonging to local investors. Switching a satellite to Branch (şube) mode above instead consolidates 100% of its P&L (including any loss) directly into these figures, with no fee and no minority interest. New centers interpolated from full-market net. Figures in €K. Not final.';

  // Yıl 5 kartı KPI'ları güncelle
  const y5g = document.getElementById('y5GelirKpi');
  const y5p = document.getElementById('y5PayKpi');
  const y5k = document.getElementById('y5KorseKpi');
  if (y5g) y5g.textContent = '~€' + totals[4] + 'K';
  const y5PayLabel = '%' + y5PayPct + ' IST'
    + (V.izmirAktif  ? ' · %' + gv('izmirHedefPay').toFixed(1)  + ' IZM' : '')
    + (V.ankaraAktif ? ' · %' + gv('ankaraHedefPay').toFixed(1) + ' ANK' : '');
  if (y5p) y5p.textContent = y5PayLabel;
  const y5AdetLabel = y5KorseAdet.toLocaleString('tr-TR')
    + (V.izmirAktif  ? ' + ' + izmirY5Adet.toLocaleString('tr-TR')  : '')
    + (V.ankaraAktif ? ' + ' + ankaraY5Adet.toLocaleString('tr-TR') : '')
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
        { label:'Brace C1 (private)', data:korseM1, backgroundColor:'rgba(44,74,46,0.85)', borderColor:'#2c4a2e', borderWidth:1, borderRadius:3 },
        ...(b2bRow[0] > 0 || b2bRow[1] > 0 ? [{ label:'B2B C1', data:b2bRow, backgroundColor:'rgba(55,138,221,0.7)', borderColor:'#378ADD', borderWidth:1, borderRadius:3 }] : []),
        ...((V.izmirAktif||V.ankaraAktif) ? [{ label:'Satellite fee income', data:feeIncomeRow, backgroundColor:'rgba(186,117,23,0.7)', borderColor:'#BA7517', borderWidth:1, borderRadius:3 }] : []),
        ...((V.izmirAktif||V.ankaraAktif) ? [{ label:'Satellite equity income', data:equityIncomeRow, backgroundColor:'rgba(29,158,117,0.7)', borderColor:'#1D9E75', borderWidth:1, borderRadius:3 }] : []),
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
      ${row('Clinic net revenue (year)', cfg.netRevenue.map(fmtEurK))}
      ${cfg.mgmtFee ? (cfg.isSube
        ? row('Management fee to flagship', cfg.mgmtFee.map(()=>'<td style="color:#aaa;">n/a — internal</td>'), '(branch/şube — a company cannot invoice itself)')
        : row('Management fee to flagship', cfg.mgmtFee.map(fmtCostOrZero), '(% of gross revenue — see growth.html slider)')
      ) : ''}
      ${cfg.netAfterFee ? row(cfg.isSube ? 'Net (fully consolidated, branch)' : 'Net after management fee', cfg.netAfterFee.map(fmtEurK), null, 'total') : ''}
      ${row('Cumulative year-end', cfg.cumEnd.map(fmtEurK), null, 'total')}
      ${row('Monthly break-even', cfg.basAyLabels.map(fmtText))}
      ${row('Cumulative positive', cfg.pozAyLabels.map(fmtText))}
      ${row('Total investment', cfg.invest.map(fmtEurK))}
      ${row('Setup cost', cfg.setup.map(fmtCost))}
      ${row('Scientific study fee', cfg.sciFee.map(fmtCostOrZero), '(Y1 ratio fixed · projection)')}
      ${row('Education fee', cfg.eduFee.map(fmtCostOrZero), '(Y1 ratio fixed · projection)')}
      ${row('Library fee', cfg.libFee.map(fmtCostOrZero), '(Y1 ratio fixed · projection)')}
      ${row('Royalty / year', cfg.royalty.map(fmtRoyalty))}
      ${row('Osteoid A.Ş. royalty', cfg.royalty.map(fmtRoyaltyPos))}
      ${row('Cutting / Osteoid A.Ş.', cfg.cuttingFee.map(fmtRoyaltyPos), '(Y1 product mix % fixed · projection)')}
      ${row('Net margin', cfg.margin.map(fmtPct), '(Y1: brace-level · Y2-5: operating margin — not directly comparable)')}
      ${cfg.flagshipEquity ? row('↳ Flagship equity income', cfg.flagshipEquity.map(fmtEurK), cfg.isSube ? '(100% — branch, fully consolidated, incl. any loss)' : '('+cfg.flagshipPayPct+'% ownership — see growth.html slider)') : ''}
      ${cfg.minorityLocal ? (cfg.isSube
        ? row('↳ Local investor share (minority)', cfg.minorityLocal.map(()=>'<td style="color:#aaa;">n/a — branch</td>'), '(a branch cannot take local investors)')
        : row('↳ Local investor share (minority)', cfg.minorityLocal.map(fmtRoyaltyPos), '('+(100-cfg.flagshipPayPct)+'% ownership — not flagship income)')
      ) : ''}
    </tbody>
  </table>`;
}
// ── PRINTER & ROBOT KOL ───────────────────────────────────────────────────────
function _autoPrinterAdet() {
  const korse = (V.korse || []).map(Number);
  const maxK = korse.length ? Math.max.apply(null, korse) : 0;
  return Math.max(2, Math.ceil(maxK / 66));
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
  const kapMin = adet * 44, kapMax = adet * 66;
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
  const delikAy = (V.aktifAy||[])[2]; const sdAy = (V.aktifAy||[])[4];
  const autoAktif = (delikAy !== undefined && delikAy < 12) || (sdAy !== undefined && sdAy < 12);
  if (V.robotKolAktif === undefined) V.robotKolAktif = autoAktif; // ilk yüklemede otomatik varsayılan
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
// Scenario switch: who owns the printers/robot arm — Osteoid A.Ş. (intercompany,
// no clinic capex) or the clinic itself (full purchase, counted in setup cost).
function _refreshEkipmanOsteoidden() {
  if (V.ekipmanOsteoidden === undefined) V.ekipmanOsteoidden = true;
  const aktif = V.ekipmanOsteoidden;
  const cb = document.getElementById('ekipmanOsteoiddenToggle');
  if (cb) cb.checked = aktif;
  const tag = document.getElementById('ekipmanOsteoiddenTag');
  if (tag) { tag.textContent = aktif ? 'Osteoid A.Ş. owns it' : 'Clinic buys it'; tag.style.color = aktif ? '#534AB7' : '#c94f2a'; }
}
function svEkipmanOsteoidden(checked) {
  V.ekipmanOsteoidden = checked;
  _refreshEkipmanOsteoidden();
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

  if (tetikAylari.length > 0) {
    el.style.display = 'block';
    const ayListesi = tetikAylari.map(r => {
      const adet = Math.round(r.printerEkMaliyet / ((V.printerEurFiyat||35000) * (V.eurKur ?? 50)));
      return 'Month ' + r.ay + ': +' + adet + ' printer (€' + Math.round(r.printerEkMaliyet/(V.eurKur ?? 50)).toLocaleString('en-US') + ')';
    }).join(' · ');
    txt.textContent = 'Automatic printer purchase triggered — ' + ayListesi;
    el.style.background = '#e8f5ee';
    el.style.borderColor = '#68c48a';
    el.querySelector('span[style]').style.color = '#1a7a45';
    const span = el.querySelector('.kapasiteUyariBaslik');
    if (span) { span.textContent = '✓ Printer Triggered'; span.style.color = '#1a7a45'; }
  } else {
    el.style.display = 'none';
  }
}


// ── YATIRIM DÖKÜMÜ (Investor Ticket + Clinic cash + Osteoid parent in-kind) ──
// V.dcfInvest is fully derived here — never typed directly.
//  (1) Investor Ticket = the cash this bridge round actually asks for: IP
//      license + city exclusivity, bought outright from Osteoid A.Ş. (a cash
//      sale to the clinic company, NOT an in-kind contribution for equity —
//      Osteoid is paid, not issued shares, for these two items) + the
//      working capital buffer + Istanbul setup capex. Satellite funding
//      (Izmir/Ankara) is a separate future ask, not part of this ticket.
//  (2) Clinic cash = setup capex + working capital (the deepest Year-1 cash
//      trough beyond setup, i.e. operating burn before break-even). Both are
//      read straight off computeYear1()'s own monthly cumBudget line, so this
//      never drifts from the real P&L. Kept as its own figure only because
//      the Nakdi Sermaye tax deduction and Cash-on-Cash Return table still
//      key off it — not part of the Investor Ticket above.
//  (3) Osteoid parent in-kind = machinery only (when ekipmanOsteoidden=true —
//      when false, its cost already lives inside clinic setup above, so it's
//      never counted twice). IP/exclusivity moved out of this bucket — see (1).
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
  const ipLisansEur = gv('ipLisansEur');
  const sehirEksklusifEur = gv('sehirEksklusifEur');
  // Osteoid parent in-kind is machinery only now — IP/exclusivity are a cash
  // sale to the clinic (Investor Ticket below), not an in-kind equity item.
  const parentInKindEur = machineryParentEur;

  const totalInvestEur = clinicCashEur + parentInKindEur;
  V.dcfInvest = Math.round(totalInvestEur); // derived — kept only for snapshot/backward-compat reads

  const setupCostsEur = setupCashTRY / eurK;
  const investorTicketEur = ipLisansEur + sehirEksklusifEur + workingCapBufferEur + setupCostsEur;

  const tbody = document.getElementById('investBreakdownBody');
  if (tbody) {
    const line = (label, eur, cls) =>
      '<tr class="' + (cls||'') + '"><td style="text-align:left;">' + label + '</td>'
      + '<td>₺' + Math.round(eur*eurK).toLocaleString('tr-TR') + '</td>'
      + '<td>€' + Math.round(eur).toLocaleString('en-US') + '</td></tr>';
    tbody.innerHTML =
      '<tr><td colspan="3" style="text-align:left;font-weight:700;color:#534AB7;font-size:10px;text-transform:uppercase;">Investor Ticket — buys IP &amp; exclusivity from Osteoid A.Ş., funds clinic setup</td></tr>'
      + line('IP / design-library license (purchased from Osteoid A.Ş.)', ipLisansEur)
      + line('City exclusivity (purchased from Osteoid A.Ş.)', sehirEksklusifEur)
      + line('Working capital buffer (additional reserve)', workingCapBufferEur)
      + line('Setup cost (capex, Istanbul only)', setupCostsEur)
      + line('Investor Ticket — subtotal', investorTicketEur, 'r-bas')
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
  const dcfDisp = document.getElementById('dcfInvestDisp');
  if (dcfDisp) dcfDisp.textContent = '€' + Math.round(totalInvestEur).toLocaleString('tr-TR');
  const setupDisp = document.getElementById('setupCostsEurDisp');
  if (setupDisp) setupDisp.textContent = '€' + Math.round(setupCashTRY/eurK).toLocaleString('tr-TR');

  return { clinicCashEur, parentInKindEur, totalInvestEur, investorTicketEur };
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

  const cumFcfK = fcfData.cum[4];
  const cum = fcfData.cum;
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
      ? 'Deduction = ' + fmtEurK(Math.round(nakdi.fundedCashEur/1000)) + ' funded cash × ('+(V.tcmbFaiz??45)+'/2)% = ' + fmtEurK(nakdi.perYearK) + '/yr, claimable Years ' + nakdi.fundingYear + '–' + Math.min(5, nakdi.fundingYear+4) + ' (5-period window from funding month ' + (V.fundAy??0) + ')'
      : 'Deduction rate = half the TCMB commercial loan rate, per KVK 10/1-ı, applied to the funded cash amount above for 5 accounting periods from the funding month';
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
    const pretax = fcfData.pretaxFcf;
    const dedRow = nakdi.active ? nakdi.deduction : [0,0,0,0,0];
    const taxableProfit = pretax.map((v,i) => v - dedRow[i]);
    const kvPaid = fcfData.taxPaid;
    const effRate = pretax.map((v,i) => v > 0 ? (kvPaid[i]/v*100) : 0);
    const fmtSigned = v => (v>=0?'€':'-€') + Math.abs(Math.round(v)).toLocaleString('en-US') + 'K';
    wfBody.innerHTML =
      '<tr><td style="text-align:left;"><b>Pre-tax profit</b></td>' + pretax.map(v=>`<td>${fmtSigned(v)}</td>`).join('') + '</tr>' +
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
    const _komProds = ['stdR','stdRl','delik','sens','sensDelik'];
    const _komAvg = _komProds.reduce((s,p) => s + (V['feeSci_'+p]??10) + (V['feeEdu_'+p]??10) + (V['feeLib_'+p]??10), 0) / _komProds.length;
    komisyonEl.textContent = '%' + Math.round(_komAvg * 10) / 10 + ' (avg. across products)';
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
  // IP license and city exclusivity are no longer an in-kind equity
  // contribution — the clinic buys them from Osteoid A.Ş. for cash (the
  // Investor Ticket, renderInvestBreakdown) — so Osteoid's in-kind bucket
  // here is machinery only.
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
function computeDcfPremoney(fcf, r, exitMult) {
  const tv = fcf[4] > 0 ? Math.round(fcf[4] * exitMult) : 0;
  const pv = fcf.map((cf, i) => cf / Math.pow(1 + r, i + 1));
  const pvTv = tv / Math.pow(1 + r, 5);
  const npv = pv.reduce((s, v) => s + v, 0) + pvTv; // €K
  return { tv, pv, pvTv, npv, premoney_eur: Math.round(npv) * 1000 };
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
  set('deRisked_ip', '€' + Math.round(gv('ipLisansEur')).toLocaleString('en-US'));
  set('deRisked_excl', '€' + Math.round(gv('sehirEksklusifEur')).toLocaleString('en-US'));
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
  if (key === 'dcfGrowth')   { const e = document.getElementById('dcfGrowth');   if(e) e.textContent = val; }
  if (key === 'dcfGrowth45') { const e = document.getElementById('dcfGrowth45'); if(e) e.textContent = val; }
  if (key === 'dcfExitMult') { const e = document.getElementById('dcfExitMult'); if(e) e.textContent = val + '×'; }
  renderDcf();
  renderGetiriTable();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderDcf() {
  const fcfData = window._lastFcf;
  if (!fcfData) return;

  const r          = (V.dcfRate ?? 28) / 100;
  const exitMult   = V.dcfExitMult ?? 10;
  const reg        = window._lastRegister;
  const inv        = window._lastInvestBreakdown;

  // Same taxed FCF stream shown in the investor projection table (buildProjection
  // → computeFcfStream) — DCF and the displayed FCF row can never diverge.
  const fcf = fcfData.taxedFcf;

  const { tv, pv, pvTv, npv, premoney_eur: blendedPremoney_eur } = computeDcfPremoney(fcf, r, exitMult);

  // TV is computed on after-tax FCF (fcf[4] is already taxed per the toggle
  // above) — it's a proxy for an earnings multiple, so terminal value should
  // reflect the same after-tax basis as the interim cash flows, not a
  // pre-tax number the exit buyer would never actually receive.

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
    const mainCalc = computeDcfPremoney(mainFcf, r, exitMult);
    const feeCalc = computeDcfPremoney(feeAfterTax, r, feeExitMult);
    feeSplit = { corePremoney: mainCalc.premoney_eur, feePremoney: feeCalc.premoney_eur };
  }
  const dcfValue_eur = feeSplit ? (feeSplit.corePremoney + feeSplit.feePremoney) : blendedPremoney_eur;

  // Deal Pre-Money = the modeled DCF value discounted for negotiation — the
  // model is the anchor, the discount is the concession an investor extracts
  // for single-site execution risk (unproven at this specific venue, however
  // de-risked the underlying technology). No asset floor: IP license and
  // city exclusivity are now a cash sale to the clinic (Investor Ticket,
  // renderInvestBreakdown), not an in-kind equity contribution, so there is
  // no contributed-asset value left to floor pre-money against — Osteoid's
  // remaining in-kind (machinery only) was never what the floor protected.
  const negDiscount = (V.dcfNegotiationDiscount ?? 70) / 100;
  const premoney_eur = dcfValue_eur * (1 - negDiscount);

  // Post-Money = deal pre-money + actual NEW CASH raised (Investor Ticket +
  // any Doctor-Investor cash). Investor Ticket already includes the cash
  // paid to Osteoid for IP/exclusivity (see renderInvestBreakdown) — that
  // cash leaves the round's coffers as a purchase price, but it still came
  // in as new money raised, so it belongs in Post-Money like any other cash.
  const investorTicketEur = inv ? inv.investorTicketEur : 0;
  const doktorYatirimEur = V.doktorYatirim ?? 0;
  const postmoney_eur = premoney_eur + investorTicketEur + doktorYatirimEur;

  // Priced-round stake: cash parties get cash ÷ post-money; the team keeps
  // its existing vested sweat % (capped at sweatMaxPct, same vesting clock
  // as the Contribution Register); Osteoid takes the remainder. The
  // Contribution Register's weighted-carpan split no longer drives stake
  // here — it still feeds the Ownership Register table below and captable.html.
  const yatirimci_pct = postmoney_eur > 0 ? (investorTicketEur / postmoney_eur) * 100 : 0;
  const doktor_pct    = postmoney_eur > 0 ? (doktorYatirimEur / postmoney_eur) * 100 : 0;
  const sweatMaxPct    = V.sweatMaxPct ?? 5;
  const sweatVestAy    = V.sweatVestAy ?? 48;
  const sweatCliffAy   = V.sweatCliffAy ?? 12;
  const sweatElapsedAy = V.sweatElapsedAy ?? 0;
  const sweatVestedFrac = sweatElapsedAy < sweatCliffAy ? 0 : Math.min(1, sweatElapsedAy / sweatVestAy);
  const sweatFracUsed  = (V.sweatVestedToday !== false) ? sweatVestedFrac : 1;
  const sweat_pct = sweatMaxPct * sweatFracUsed;
  const osteoid_pct = 100 - yatirimci_pct - doktor_pct - sweat_pct;

  // Single source of truth for the priced-round deal — every other stake
  // consumer (renderGetiriTable/moicSensTable, the Control Risk warning,
  // captable.html reconciliation) reads this instead of the Contribution
  // Register, so the whole app can never show two different splits again.
  window._lastDeal = {
    premoney: premoney_eur,
    postmoney: postmoney_eur,
    stakes: { investor: yatirimci_pct, doctor: doktor_pct, sweat: sweat_pct, osteoid: osteoid_pct },
    ticket: investorTicketEur,
  };

  const set = (id, v) => { const e = document.getElementById(id); if(e) e.textContent = v; };
  const fmtEur = v => '€' + (Math.abs(v)/1000000).toFixed(2) + 'M';
  const fmtPct = v => '%' + v.toFixed(2);

  const exitValue_eur = fcf[4] > 0 ? fcf[4] * exitMult * 1000 : 0;
  const investorMoicExit = investorTicketEur > 0 ? (exitValue_eur * (yatirimci_pct/100)) / investorTicketEur : 0;
  set('dcf_exitValue',       exitValue_eur > 0 ? fmtEur(exitValue_eur) : '—');
  set('dcf_premoney',        dcfValue_eur > 0 ? fmtEur(dcfValue_eur) : '—');
  set('dcf_premoney_final',  premoney_eur > 0 ? fmtEur(premoney_eur) : '—');
  set('dcf_postmoney',       fmtEur(postmoney_eur));
  set('dcf_investor_ticket', investorTicketEur > 0 ? fmtEur(investorTicketEur) : '—');
  set('dcf_yatirimci_hisse', fmtPct(yatirimci_pct));
  set('dcf_osteoid_hisse',   fmtPct(osteoid_pct));
  set('dcf_investor_moic_exit', investorMoicExit > 0 ? investorMoicExit.toFixed(2)+'×' : '—');
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
    return '<td class="'+cls+'">€'+(Math.abs(v)/1000).toFixed(2)+'M</td>';
  };
  tbody.innerHTML =
    '<tr><td>Free Cash Flow'+(fcfData.vergiDahil?' (after tax, €M)':' (pre-tax, €M)')+'</td>'
    + fcf.map(v => fmtE(v)).join('')
    + '<td style="color:#888;font-size:11px;">TV '+exitMult+'× EBITDA: €'+(tv/1000).toFixed(2)+'M</td></tr>'
    + '<tr><td style="color:#888;font-size:11px;">Discount factor (1/(1+r)ⁿ)</td>'
    + fcf.map((_,i)=>'<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,i+1)).toFixed(3)+'</td>').join('')
    + '<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,5)).toFixed(3)+'</td></tr>'
    + '<tr><td>PV (Discounted, €M)</td>'
    + disc.map(v=>'<td class="'+(v>=0?'pc':'nc')+'">€'+(Math.abs(v)/1000).toFixed(2)+'M</td>').join('')
    + '<td class="neu">€'+(Math.round(pvTv)/1000).toFixed(2)+'M</td></tr>'
    + '<tr class="r-cum"><td><b>DCF Value (NPV)</b></td>'
    + '<td colspan="5" style="text-align:center;font-weight:700;">'
    + 'Σ PV = €'+(Math.round(npv)/1000).toFixed(2)+'M &nbsp;≈&nbsp; <b>'+fmtEur(dcfValue_eur)+'</b>'
    + '</td><td class="neu" style="font-size:11px;">TV: €'+(Math.round(pvTv)/1000).toFixed(2)+'M incl.</td></tr>';
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

  const exitMult = V.dcfExitMult ?? 10;

  // Year 5 EBITDA (€) — pre-tax, since EV/EBITDA multiples are conventionally
  // applied to EBITDA, not after-tax cash flow (kept separate from the taxed
  // FCF stream renderDcf's own NPV uses).
  const y5ebitda_eur = (t[4] ?? 0) * 1000;

  // Scenarios offset from the same exitMult used for the DCF terminal value
  // so DCF pre-money and Base exit EV share one consistent Year-5 multiple
  const senaryolar = [
    { id:'c', label:'Conservative', mult: Math.max(2, exitMult - 2), rowClass:'' },
    { id:'b', label:'Base',         mult: exitMult,                  rowClass:'' },
    { id:'o', label:'Optimistic',   mult: exitMult + 3,              rowClass:'r-bas' },
  ];

  const lbl = document.getElementById('gtr_invest_lbl');
  if (lbl) lbl.textContent = Math.round(invest).toLocaleString('tr-TR');

  const tbody = document.getElementById('getiriTableBody');
  if (!tbody) return;

  const fmtEur  = v => { if (v <= 0) return '—'; return '€'+(v/1000000).toFixed(2)+'M'; };
  const fmtPct  = v => (v * 100).toFixed(1) + '%';
  const fmtMoic = v => v > 0 ? v.toFixed(2)+'×' : '—';
  const moicCls = v => v >= 3 ? 'pc' : v >= 2 ? 'neu' : 'nc';
  const irr5    = v => v > 0 ? (Math.pow(v, 0.2) - 1) * 100 : null;
  const fmtIrr  = v => { const i = irr5(v); return i !== null ? i.toFixed(1)+'%' : '—'; };
  const irrCls  = v => { const i = irr5(v); if (i === null) return 'nc'; return i >= 25 ? 'pc' : i >= 15 ? 'neu' : 'nc'; };

  const scenRows = senaryolar.map(s => {
    const ev_eur = y5ebitda_eur * s.mult;
    const payout = Math.round(ev_eur * hisse_pct);
    const moic   = invest > 0 ? payout / invest : 0;
    return `<tr class="${s.rowClass}">
      <td><b>${s.label}</b> <span style="color:#999;font-size:10px;">${s.mult}× EBITDA</span></td>
      <td class="neu">${fmtEur(ev_eur)}</td>
      <td class="neu">${fmtPct(hisse_pct)}</td>
      <td class="${moicCls(moic)}">${fmtEur(payout)}</td>
      <td class="${moicCls(moic)}">${fmtMoic(moic)}</td>
      <td class="${irrCls(moic)}">${fmtIrr(moic)}</td>
    </tr>`;
  }).join('');

  // "For 3× MOIC" target row — shows what EV / exit multiple is required
  // (general form: payout = EV × hisse_pct = 3×invest  =>  EV = 3×invest/hisse_pct)
  const target3x_ev   = hisse_pct > 0 ? 3 * invest / hisse_pct : 0;
  const target3x_mult = y5ebitda_eur > 0 ? (target3x_ev / y5ebitda_eur).toFixed(1) : '—';
  const target3x_pout = Math.round(target3x_ev * hisse_pct);
  const targetRow = `<tr style="border-top:2px dashed #a89ff7;background:#f4f3ff;">
    <td style="color:#534AB7;"><b>For 3× MOIC</b> <span style="font-size:10px;">${target3x_mult}× EBITDA needed</span></td>
    <td style="color:#534AB7;">${fmtEur(target3x_ev)}</td>
    <td class="neu">${fmtPct(hisse_pct)}</td>
    <td class="pc">${fmtEur(target3x_pout)}</td>
    <td class="pc">3.00×</td>
    <td class="pc">24.6%</td>
  </tr>`;

  tbody.innerHTML = scenRows + targetRow;

  // MOIC sensitivity mini-table across exit multiples
  const sensEl = document.getElementById('moicSensBody');
  if (sensEl) {
    const mults = [4, 6, 8, 10, 12, 15, 18];
    sensEl.innerHTML = mults.map(m => {
      const ev   = y5ebitda_eur * m;
      const pout = Math.round(ev * hisse_pct);
      const moic = invest > 0 ? pout / invest : 0;
      return `<tr>
        <td>${m}×</td>
        <td class="neu">${fmtEur(ev)}</td>
        <td class="${moicCls(moic)}">${fmtMoic(moic)}</td>
        <td class="${irrCls(moic)}">${fmtIrr(moic)}</td>
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
    ['investor.html','yatirimci','Investor &amp; Agreement'],
    ['captable.html','captable','Cap Table'],
    ['methodology.html','metodoloji','Methodology &amp; Validation']
  ];
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
    <span style="font-size:10px;color:#b0b0c0;margin-top:4px;display:inline-block;">All financial figures shown in <strong style="color:#a89ff7;">EUR (€)</strong> · TRY amounts shown below in grey · Rate updates live</span></div>
  </div>
  <div class="inv-header-right">
    <div class="inv-badge">Confidential — Investor Only</div>
    <div id="eurRateWidget" style="margin-top:10px;padding:10px 14px;background:#1a1a2e;border:1px solid #3a3a5c;border-radius:6px;">
      <div style="font-size:9px;color:#8888aa;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">EUR / TRY Rate</div>
      <div style="display:flex;align-items:center;justify-content:flex-end;gap:6px;margin-bottom:4px;">
        <span style="font-size:12px;color:#a89ff7;white-space:nowrap;">1 EUR = ₺</span>
        <input id="eurRateInput" type="number" step="0.5" min="1" value="${(V.eurKur ?? 50).toFixed(2)}"
          style="width:68px;font-size:15px;font-weight:700;color:#a89ff7;background:#0d0d1a;border:1px solid #4a4a6c;border-radius:4px;padding:3px 6px;text-align:right;">
      </div>
      <div id="eurRateTime" style="font-size:10px;color:#666;margin-bottom:8px;text-align:right;">Model rate · ₺${(V.eurKur ?? 50).toFixed(2)}</div>
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
      <span>Date</span> April 2026<br>
      <span>Status</span> Pre-revenue<br>
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

// ── Live EUR/TRY Rate ─────────────────────────────────────────────────────────
function _updateRateWidget(rate, date, fromCache) {
  const inputEl = document.getElementById('eurRateInput');
  const timeEl  = document.getElementById('eurRateTime');
  if (inputEl) inputEl.value = rate.toFixed(2);
  if (timeEl) {
    if (date) {
      const t = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      const d = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      timeEl.textContent = (fromCache ? '⏱ ' : '● ') + d + ' ' + t + (fromCache ? ' (cached)' : ' · live');
      timeEl.style.color = fromCache ? '#666' : '#4CAF50';
    } else {
      timeEl.textContent = 'Model rate · ₺' + rate.toFixed(2);
      timeEl.style.color = '#666';
    }
  }
}

function _applyEurRate(rate, date, fromCache) {
  V.eurKur = Math.round(rate * 100) / 100;
  try { localStorage.setItem('osteoid_V', JSON.stringify(V)); } catch(e) {}
  _updateRateWidget(V.eurKur, date, fromCache);
  if (typeof recalc === 'function') recalc();
  if (typeof buildProjection === 'function') buildProjection();
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
  // Use cache if fresh (< 1 hour)
  try {
    var cached = localStorage.getItem('eur_try_cache');
    if (cached) {
      var _c = JSON.parse(cached);
      if (Date.now() - _c.ts < 3600000) { _applyEurRate(_c.rate, new Date(_c.ts), true); return; }
    }
  } catch(e) {}
  _fetchEurTryLive(function(rate) {
    try { localStorage.setItem('eur_try_cache', JSON.stringify({ rate: rate, ts: Date.now() })); } catch(e) {}
    _applyEurRate(rate, new Date(), false);
  }, function() {
    _updateRateWidget(V.eurKur ?? 50, null, false);
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
  _applyEurRate(rate, null, false);
  const timeEl = document.getElementById('eurRateTime');
  if (timeEl) {
    timeEl.textContent = '✓ Applied ₺' + rate.toFixed(2) + ' — all figures updated';
    timeEl.style.color = '#4CAF50';
    setTimeout(function() {
      if (timeEl) { timeEl.textContent = 'Model rate · ₺' + rate.toFixed(2); timeEl.style.color = '#666'; }
    }, 3000);
  }
}

initLayout();
fetchEurRate();
setInterval(fetchEurRate, 30 * 60 * 1000); // refresh every 30 min
