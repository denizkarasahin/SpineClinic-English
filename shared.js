// Null-safe getElementById — recalc() calls this across all pages; missing elements are silently ignored
const _origGetById = document.getElementById.bind(document);
document.getElementById = function(id) {
  const el = _origGetById(id);
  if (el) return el;
  return {
    textContent: '', value: '', innerHTML: '', checked: false,
    style: new Proxy({}, { get: () => '', set: () => true }),
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    appendChild: () => {}, setAttribute: () => {}, removeAttribute: () => {},
    querySelectorAll: () => [], querySelector: () => null,
    dataset: {}
  };
};

const V = {"korseF":37800,"danisPct":25,"malzeme":50,"reklamSabit":20000,"mutfak":30000,"genelGider":10000,"ymmM":23000,"stopaj":60000,"royaltyEur":0,"eurKur":50,"kira":250000,"depozito":250000,"emlakci":500000,"m2":360,"tadilatM2":7000,"dekoM2":6750,"mobilya":300000,"ruhsat":100000,"aylikKira":100000,"elektrik":16500,"internet":1500,"sarf":3000,"ortotistM":120000,"sgkCarpan":1.6,"stajyerM":30000,"stajyerAy":2,"destekM":30000,"stajyer2M":30000,"destekAy":3,"stajyer2Ay":4,"korse":[10,10,15,20,25,25,30,35,35,45,45,50],"aktifAy":[0,0,9,2,9],"mix":[[50,50,0,0,0],[50,50,0,0,0],[45,36,0,19,0],[53,35,0,12,0],[53,36,0,11,0],[52,37,0,11,0],[75,10,0,15,0],[75,10,0,15,0],[74,10,0,16,0],[43,10,19,17,11],[40,12,20,17,11],[38,12,20,18,12]],"korseF_stdR":27000,"korseF_stdRl":35000,"korseF_delik":55000,"korseF_sens":50000,"korseF_sensDelik":65000,"mal_stdR":500,"mal_stdRl":600,"mal_delik":1600,"mal_sens":2075,"mal_sensDelik":1250,"danis_stdR":10,"danis_stdRl":20,"danis_delik":30,"danis_sens":30,"danis_sensDelik":30,"kanalBakim":5,"pazarTR":30000,"pazarIstPct":18.3,"hedefOsteoidPay":20,"esikStajyer1":15,"esikDestek":30,"esikStajyer2":76,"izmirAktif":true,"izmirHedefPay":21,"izmirUseIst":true,"izmirUseIstGider":true,"izmirKira":80000,"izmirOrtotistM":55000,"izmirStajyerM":25000,"izmirMutfak":18000,"izmirSarf":3000,"izmirUseIstKurulum":true,"izmirKurulumKira":120000,"izmirKurulumDepozito":200000,"izmirKurulumTadilat":4750,"izmirKurulumDeko":2000,"izmirKurulumMobilya":600000,"izmirRampa":[8,8,11,15,19,19,23,26,26,34,34,38],"ankaraAktif":true,"ankaraHedefPay":20.5,"ankaraUseIst":true,"ankaraUseIstGider":true,"ankaraKira":85000,"ankaraOrtotistM":55000,"ankaraStajyerM":25000,"ankaraMutfak":18000,"ankaraSarf":3000,"ankaraUseIstKurulum":true,"ankaraKurulumKira":120000,"ankaraKurulumDepozito":200000,"ankaraKurulumTadilat":4750,"ankaraKurulumDeko":2000,"ankaraKurulumMobilya":600000,"ankaraRampa":[8,8,12,16,20,20,24,28,28,36,36,40],"izmirNufusPay":7.1,"ankaraNufusPay":8.2,"printerAdet":2,"printerEurFiyat":35000,"robotKolAktif":true,"robotKolEurFiyat":30000,"kesimEurPer":0,"dcfRate":26,"dcfGrowth":17,"dcfGrowth45":45,"dcfInvest":2045000,"kongre":[190000,270000,75000,265000,40000,150000,80000,255000,80000,30000,80000,265000],"donemsel":{"reklam":[30000,35000,35000,30000,30000,20000,30000,20000,30000,20000,30000,30000],"kongre":[0,225000,0,225000,0,0,0,225000,0,0,0,225000],"atolye":[120000,0,0,0,0,120000,0,0,0,0,0,0],"ymm":[10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],"diger":[30000,0,30000,0,0,0,40000,0,40000,0,40000,0]},"korseFB2B_stdR":10000,"korseFB2B_stdRl":12000,"korseFB2B_delik":22000,"korseFB2B_sens":25000,"korseFB2B_sensDelik":35000,"korseB2B":[0,0,0,0,0,0,0,0,0,0,0,0],"mixB2B":[[64,36,0,0,0],[66,34,0,0,0],[66,22,12,0,0],[62,25,13,0,0],[58,27,15,0,0],[52,33,15,0,0],[56,10,14,14,6],[56,10,16,14,4],[54,9,16,15,6],[52,10,18,16,4],[50,12,16,13,9],[50,11,18,16,5]],"_sen_min_kira":130000,"_sen_max_kira":500000,"_sen_min_tadilatM2":3500,"_sen_max_tadilatM2":17500,"_sen_min_dekoM2":3500,"_sen_max_dekoM2":17000,"_sen_min_ortotistM":70000,"_sen_max_ortotistM":215000,"_sen_min_stajyerM":16000,"_sen_max_stajyerM":60000,"_sen_min_reklamSabit":5000,"_sen_max_reklamSabit":60000,"_sen_min_eurKur":30,"_sen_max_eurKur":90,"printerAktif":true,"hedefSpine_KorseK":900,"hedefSpine_KorseB":1200,"hedefSpine_FiyatK":40000,"bilimOrtopedi_KorseK":720,"bilimOrtopedi_FiyatK":35000,"bilimOrtopedi_KorseB":780,"canErdem_KorseK":600,"canErdem_KorseB":840,"canErdem_FiyatK":35000,"canErdem_FiyatB":20000,"nesaOrtopedi_KorseB":780,"nesaOrtopedi_FiyatK":33000,"proklinik_KorseK":480,"proklinik_KorseB":660,"proklinik_FiyatK":40000,"proklinik_FiyatB":20000,"aktifOrtez_KorseK":600,"aktifOrtez_KorseB":420,"aktifOrtez_FiyatK":40000,"aktifOrtez_FiyatB":22000,"izmirRampaOran":0.75,"izmirKurulumOran":0.85,"ankaraRampaOran":0.8,"ankaraKurulumOran":0.85,"operatorM":175000,"_version":6};
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
  if (key==='danisPct'||key==='daDanisPct'||key==='kkDanisPct') return String(val);
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

function svKanalBakim(val) {
  val = parseFloat(val);
  if (isNaN(val)) return;
  V.kanalBakim = val;
  ['stdR','stdRl','sens','delik','sensDelik'].forEach(function(k) {
    var sl = document.getElementById('s_bakim_'+k); if (sl) sl.value = val;
    var dp = document.getElementById('bakim_'+k); if (dp) dp.textContent = val;
  });
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

function gv(k) { return V[k] || 0; }
function ffTRY(n) { if(n===0) return '—'; return (n<0?'-₺':'₺')+Math.abs(n).toLocaleString('tr-TR'); }
function ff(n) {
  if(n===0) return '—';
  const eur = Math.round(Math.abs(n) / (V.eurKur || 50));
  return (n<0?'-€':'€') + eur.toLocaleString('en-US');
}
function feEur(tryVal) { return ff(tryVal); }
function cls(n) { return n>0?'pc':n<0?'nc':'zc'; }

const SCEN = {
  baz:     { korseF:37800, danisPct:25, malzeme:50, reklamSabit:20000, mutfak:20000, stopaj:60000, korse:[5,10,15,20,25,25,30,30,35,35,40,45], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] },
  iyimser: { korseF:37800, danisPct:25, malzeme:50, reklamSabit:15000, mutfak:18000, stopaj:60000, korse:[8,14,20,26,30,32,36,38,42,44,48,55], kongre:[0,50000,0,100000,0,300000,100000,0,0,200000,0,200000] },
  kotu:    { korseF:30000, danisPct:25, malzeme:50, reklamSabit:25000, mutfak:22000, stopaj:60000, korse:[3,7,10,14,18,20,22,25,28,28,33,38], kongre:[0,100000,0,200000,0,500000,100000,0,0,350000,0,350000] }
};

function loadScen(key, btn) {
  document.querySelectorAll('.sb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const s = SCEN[key];
  ['korseF','danisPct','malzeme','reklamSabit','mutfak','stopaj'].forEach(k => {
    V[k]=s[k];
    document.getElementById(k).textContent=numFmt(k,s[k]);
    const sl=document.getElementById('s_'+k); if(sl) sl.value=s[k];
  });
  s.korse.forEach((v,i)=>{ V.korse[i]=v; });
  if (window._redrawRamp) window._redrawRamp();
  // sync donemsel from kongre shorthand
  if(s.kongre) s.kongre.forEach((v,i)=>{ V.kongre[i]=v; });
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
    const tDanisB2B = rowsB2B.reduce((s,r)=>s+(r.danisB2B||0),0);
    const tBakimB2B = rowsB2B.reduce((s,r)=>s+(r.bakimB2B||0),0);
    const tBaskiB2B = rowsB2B.reduce((s,r)=>s+(r.baskiTop||0),0);
    const tRoyB2B   = rowsB2B.reduce((s,r)=>s+(r.royaltyTop||0),0);
    const tpK2 = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0,0]);
    const th2 = `<thead><tr>
      <th>Month</th>
      <th style="color:#888780;">Std-NR</th><th style="color:#D85A30;">Std-Rep.</th>
      <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
      <th>Total</th><th>Gross Revenue</th><th>Doctor Fee</th><th>Channel Share</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    </tr></thead>`;
    const tb2_rows = rowsB2B.map(r => {
      const kk = r.k || [0,0,0,0,0];
      return `<tr>
        <td>Month ${r.ay}</td>
        <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
        <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
        <td><b>${r.korse||'—'}</b></td>
        <td>${r.korse?ff(r.gelirBrut):'—'}</td>
        <td class="${r.danisB2B?'nc':'zc'}">${r.danisB2B?ff(-r.danisB2B):'—'}</td>
        <td class="${r.bakimB2B?'nc':'zc'}">${r.bakimB2B?ff(-r.bakimB2B):'—'}</td>
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
      <td class="${tDanisB2B?'nc':'zc'}">${tDanisB2B?ff(-tDanisB2B):'—'}</td>
      <td class="${tBakimB2B?'nc':'zc'}">${tBakimB2B?ff(-tBakimB2B):'—'}</td>
      <td class="nc">${ff(-tBaskiB2B)}</td><td class="nc">${ff(-tRoyB2B)}</td>
      <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    </tr>`;
    b2bTbl.innerHTML = '<div class="tbl-wrap"><table id="b2bTable">' + th2 + '<tbody>' + tb2_rows + topRow2 + '</tbody></table></div>';
  }
}


function initDynamic() {
  _refreshPrinterDisplay();
  svRobotKol();
  // Init DCF sliders
  ['dcfRate','dcfGrowth','dcfGrowth45'].forEach(function(k) {
    const sl = document.getElementById('s_'+k);
    const sp = document.getElementById(k);
    if (sl) sl.value = V[k];
    if (sp) sp.textContent = V[k];
  });
  const inv = document.getElementById('dcfInvestDisp');
  if (inv) inv.textContent = '€' + (V.dcfInvest||150000).toLocaleString('tr-TR');
  const invSl = document.getElementById('s_dcfInvest');
  if (invSl) invSl.value = V.dcfInvest||150000;
  const kDisp = document.getElementById('kesimEurPerDisp');
  if (kDisp) kDisp.textContent = V.kesimEurPer||50;
  const rSlider = document.getElementById('s_royaltyEur');
  if (rSlider) rSlider.value = V.royaltyEur||75;
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
      const label = f===0?'0': f===1 ? Math.round(maxVal/(V.eurKur||50)/1000)+'K' : Math.round((maxVal*f)/(V.eurKur||50)/1000)+'K';
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
          ${c.label} <b style="color:#222">€${Math.round(total/(V.eurKur||50)).toLocaleString('en-US')}</b>
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
            text: l+' — €'+Math.round(chart.data.datasets[0].data[i]/(V.eurKur||50)/1000)+'K',
            fillStyle: chart.data.datasets[0].backgroundColor[i],
            strokeStyle:'#fff', lineWidth:1, index:i
          }))
        }},
        tooltip:{ callbacks:{ label: c=>' €'+Math.round(c.raw/(V.eurKur||50)).toLocaleString('en-US') } }
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
  const totalDanis   = rows.reduce((s,r)=>s+r.danis,0);

  const oData = [
    { label:'Rent',                val: totalKira,      color:'#534AB7' },
    { label:'Personnel (gross)',   val: totalPersonel,  color:'#D85A30' },
    { label:'Electricity/Int./Supplies', val: totalElektrik, color:'#1D9E75' },
    { label:'Advertising',         val: totalReklam,    color:'#378ADD' },
    { label:'Kitchen/Cleaning',    val: totalMutfak,    color:'#EF9F27' },
    { label:'Withholding Tax',     val: totalStopaj,    color:'#9FE1CB' },
    { label:'Periodic Costs',      val: totalKongre,    color:'#F0997B' },
    { label:'Brace Print',         val: totalBaski,     color:'#AFA9EC' },
    { label:'Doctor Commission',   val: totalDanis,     color:'#D4537E' },
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
            text: l+' — €'+Math.round(chart.data.datasets[0].data[i]/(V.eurKur||50)/1000)+'K',
            fillStyle: chart.data.datasets[0].backgroundColor[i],
            strokeStyle:'#fff', lineWidth:1, index:i
          }))
        }},
        tooltip:{ callbacks:{ label: c=>' €'+Math.round(c.raw/(V.eurKur||50)).toLocaleString('en-US') } }
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
    { label:'Doctor Fee',       data: rows.map(r=>Math.round(r.danis)),                                 bg:'#D4537E' },
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
        tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(c.raw/(V.eurKur||50)).toLocaleString('en-US') } }
      },
      scales:{
        x:{ stacked:true, grid:{display:false} },
        y:{ stacked:true, ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur||50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
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
  ctx.fillText('€'+Math.round(total/(V.eurKur||50)/1000)+'K', cx, cy+10);

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
function renderSabitBar(aylikKira, elektrik, internet, sarf, ortoBrut, operatorBrut, stajyerBrut, destekBrutBar, mutfak, genelGider, ymmM) {
  stajyerBrut = stajyerBrut || 0;
  const canvas = _origGetById('sabitBar');
  if (!canvas) return;

  const items = [
    { label:'Rent',                val:aylikKira,          color:'#534AB7' },
    { label:'Operator (gross)',    val:(operatorBrut||0),  color:'#2980B9' },
    { label:'Orthotist (gross)',   val:ortoBrut,           color:'#D85A30' },
    { label:'Intern (gross)',      val:stajyerBrut,        color:'#EF9F27' },
    { label:'Support Staff (gross)', val:(destekBrutBar||0), color:'#F0A070' },
    { label:'2nd Intern (gross)',  val:gv('stajyer2M')*gv('sgkCarpan'), color:'#FFBE7A' },
    { label:'Electricity/Water',   val:elektrik,           color:'#1D9E75' },
    { label:'Internet/Phone',      val:internet,           color:'#888780' },
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
                text: lbl + '  €' + Math.round(items[i].val/(V.eurKur||50)/1000) + 'K  (' + Math.round(items[i].val/total*100) + '%)',
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
              return ' €' + Math.round(v/(V.eurKur||50)).toLocaleString('en-US') + '  (' + Math.round(v/total*100) + '%)';
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
          { type:'bar', label:'Doctor Commission', data: rows.map(r=>Math.round(r.danis)), backgroundColor:'rgba(212,83,126,0.6)', borderColor:'#D4537E', borderWidth:1, order:2, yAxisID:'y' },
          { type:'line', label:'Monthly Net', data: rows.map(r=>r.net), borderColor:'#534AB7', backgroundColor:'rgba(83,74,183,0.07)', borderWidth:2.5, pointRadius:4, pointBackgroundColor: rows.map(r=>r.net>=0?'#1a7a45':'#c0392b'), tension:0.3, fill:false, order:1, yAxisID:'y' },
        ]
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        plugins: {
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:10 } },
          tooltip:{ mode:'index', callbacks:{ label: c => c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur||50)).toLocaleString('en-US') } }
        },
        scales: {
          x:{ grid:{display:false} },
          y:{ ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur||50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
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
      { label:'Periodic',       data: rows.map(r=>r.kongre),                                          color:'#F0997B' },
      { label:'Print Cost',     data: rows.map(r=>r.baskiTop),                                        color:'#AFA9EC' },
      { label:'Doctor Fee',     data: rows.map(r=>Math.round(r.danis)),                               color:'#D4537E' },
    ];
    tblChartInst = new Chart(ctx, {
      type:'bar',
      data:{ labels, datasets: sets.map(s=>({ label:s.label, data:s.data, backgroundColor:s.color, borderWidth:0, stack:'g' })) },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ font:{size:11}, boxWidth:10, padding:8 } },
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(c.raw/(V.eurKur||50)).toLocaleString('en-US') } }
        },
        scales:{
          x:{ stacked:true, grid:{display:false} },
          y:{ stacked:true, ticks:{ callback: v=>'€'+(Math.round(v/(V.eurKur||50)/1000))+'K' }, grid:{color:'rgba(0,0,0,0.05)'} }
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
          tooltip:{ mode:'index', callbacks:{ label: c=>c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur||50)).toLocaleString('en-US')+'K' } },
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
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>c.dataset.label+': €'+Math.round(Math.abs(c.raw)/(V.eurKur||50)).toLocaleString('en-US')+'K'}} },
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



function updStajyerAy(val) {
  V.stajyerAy = parseInt(val);
  const lbl = document.getElementById('stajyerAktifLabel');
  if (lbl) lbl.textContent = 'From Month ' + (V.stajyerAy+1);
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
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
  const royEur= Math.round(royTL/(V.eurKur||50));
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
  { key:'stajyerM',   label:'Intern Salary (net)',     unit:'₺',  step:2000,  minR:0.5, maxR:2.0  },
  { key:'reklamSabit',label:'Advertising / Marketing', unit:'₺',  step:5000,  minR:0.3, maxR:3.0  },
  { key:'eurKur',     label:'EUR/TRY Rate',            unit:'',   step:5,     minR:0.6, maxR:1.8  },
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
    const baz   = V[item.key] || 0;
    const minV  = Math.round(baz * item.minR / item.step) * item.step;
    const maxV  = Math.round(baz * item.maxR / item.step) * item.step;
    V['_sen_min_'+item.key] = minV;
    V['_sen_max_'+item.key] = maxV;
    const fmtV  = v => item.unit === '₺' ? '€'+Math.round(v/(V.eurKur||50)).toLocaleString('en-US') : v.toLocaleString('tr-TR');
    return `
    <div style="background:#fafaf8;border:1px solid #e0e0dc;border-radius:6px;padding:12px 14px;">
      <div style="font-size:11px;font-weight:700;color:#333;margin-bottom:8px;">${item.label}</div>
      <div style="font-size:10px;color:#888;margin-bottom:4px;">Base: <b style="color:#534AB7;">${fmtV(baz)}</b></div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
        <span style="font-size:10px;color:#888;min-width:26px;">Min</span>
        <input type="range" min="${Math.round(baz*0.2/item.step)*item.step}" max="${baz}" step="${item.step}" value="${minV}"
          style="flex:1;accent-color:#c0392b;"
          oninput="V['_sen_min_${item.key}']=parseInt(this.value);document.getElementById('smn_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseInt(this.value)/(V.eurKur||50)).toLocaleString(\'en-US\')' : 'parseInt(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
        <span id="smn_${item.key}" style="min-width:64px;font-size:11px;font-weight:700;color:#c0392b;text-align:right;">${fmtV(minV)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:10px;color:#888;min-width:26px;">Max</span>
        <input type="range" min="${baz}" max="${Math.round(baz*3.5/item.step)*item.step}" step="${item.step}" value="${maxV}"
          style="flex:1;accent-color:#1a7a45;"
          oninput="V['_sen_max_${item.key}']=parseInt(this.value);document.getElementById('smx_${item.key}').textContent='${item.unit === '₺' ? '€' : ''}'+${item.unit === '₺' ? 'Math.round(parseInt(this.value)/(V.eurKur||50)).toLocaleString(\'en-US\')' : 'parseInt(this.value).toLocaleString(\'tr-TR\')'};runSensitivity();">
        <span id="smx_${item.key}" style="min-width:64px;font-size:11px;font-weight:700;color:#1a7a45;text-align:right;">${fmtV(maxV)}</span>
      </div>
    </div>`;
  }).join('');
}

function calcMetric(overrides) {
  // Temporarily override V values, run mini-recalc, restore
  const saved = {};
  Object.entries(overrides).forEach(([k,v]) => { saved[k]=V[k]; V[k]=v; });

  const danisPct   = gv('danisPct')/100;
  const reklamS    = gv('reklamSabit');
  const mutfakV    = gv('mutfak');
  const genelGiderV= gv('genelGider');
  const stopajV    = gv('stopaj');
  const aylikKira  = gv('kira');
  const elektrik   = gv('elektrik');
  const internet   = gv('internet');
  const sarf       = gv('sarf');
  const ortoBrut   = gv('ortotistM') * gv('sgkCarpan');
  const operatorBrut = gv('operatorM') * gv('sgkCarpan');
  const stajyerBrut= gv('stajyerM')  * gv('sgkCarpan');
  const royaltyTRY = gv('royaltyEur') * (V.eurKur||50);
  const fStdR=gv('korseF_stdR'), mStdR=gv('mal_stdR');
  const fStdRl=gv('korseF_stdRl'), mStdRl=gv('mal_stdRl');
  const fDelik=gv('korseF_delik'), mDelik=gv('mal_delik');
  const fSens=gv('korseF_sens'), mSens=gv('mal_sens');
  const fSD=gv('korseF_sensDelik'), mSD=gv('mal_sensDelik');
  const m2=gv('m2'), tm2=gv('tadilatM2'), dm2=gv('dekoM2');
  const tadilatTop=m2*tm2, dekoTopV=m2*dm2;
  V.printerAdet = _autoPrinterAdet();
  const printerMaliyet = (V.printerAktif !== false) ? V.printerAdet * (V.printerEurFiyat||35000) * (V.eurKur||50) : 0;
  const robotKolMaliyet = V.robotKolAktif ? (V.robotKolEurFiyat||30000) * (V.eurKur||50) : 0;
  const kurulumTop = -(gv('kira')+gv('depozito')+gv('emlakci')+tadilatTop+dekoTopV+gv('mobilya')+gv('ruhsat')+printerMaliyet+robotKolMaliyet);

  let cumBudget=kurulumTop, tGelir=0, basAy=null, pozAy=null, cumKorse=0;

  for(let i=0;i<12;i++){
    const korse=V.korse[i]||0, kongre=V.kongre[i]||0, isAy1=i===0;
    const rawMx=(V.mix[i]||[100,0,0,0,0]).map((v,pi)=>i<(V.aktifAy[pi]||0)?0:v);
    const tot=rawMx.reduce((s,v)=>s+v,0)||100;
    const k=rawMx.map(v=>Math.round(korse*v/tot));
    k[4]=Math.max(0,korse-k[0]-k[1]-k[2]-k[3]);
    const gelirBrut=k[0]*fStdR+k[1]*fStdRl+k[2]*fDelik+k[3]*fSens+k[4]*fSD;
    const dP2={stdR:gv('danis_stdR')/100,stdRl:gv('danis_stdRl')/100,delik:gv('danis_delik')/100,sens:gv('danis_sens')/100,sensDelik:gv('danis_sensDelik')/100};
    const danis=k[0]*fStdR*dP2.stdR+k[1]*fStdRl*dP2.stdRl+k[2]*fDelik*dP2.delik+k[3]*fSens*dP2.sens+k[4]*fSD*dP2.sensDelik;
    const kanalBakimR2=gv('kanalBakim')/100;
    const bakim=gelirBrut*kanalBakimR2;
    const kesimTRY = gv('kesimEurPer') * (V.eurKur||50);
    const baskiTop=k[0]*mStdR+k[1]*mStdRl+k[2]*(mDelik+kesimTRY)+k[3]*mSens+k[4]*(mSD+kesimTRY);
    const royaltyTop=korse*royaltyTRY;
    const gelirNet=gelirBrut-danis-bakim-baskiTop-royaltyTop;
    const ayKira=aylikKira;
    const ayStopaj=(i===2||i===5||i===8||i===11)?stopajV:0;
    // Eşik bazlı personel — o ayın korse adediyle karşılaştır (recalc ile tutarlı)
    const _es1=V.esikStajyer1||16, _es2=V.esikDestek||31, _es3=V.esikStajyer2||46;
    const stajBrut   = gv('stajyerM')  * gv('sgkCarpan');
    const destekBrut2= gv('destekM')   * gv('sgkCarpan');
    const staj2Brut  = gv('stajyer2M') * gv('sgkCarpan');
    const ayStajyer  = korse >= _es1 ? stajBrut    : 0;
    const ayDestek   = korse >= _es2 ? destekBrut2 : 0;
    const ayStaj2    = korse >= _es3 ? staj2Brut   : 0;
    const sabitGider=ayKira+(elektrik+internet+sarf)+ortoBrut+operatorBrut+ayStajyer+ayDestek+ayStaj2+genelGiderV;
    const gider=-(sabitGider+reklamS+mutfakV+ayStopaj+kongre);
    const net=gelirNet+gider;
    cumBudget+=net;
    tGelir+=gelirNet;
    if(basAy===null&&net>=0) basAy=i+1;
    if(pozAy===null&&cumBudget>=0) pozAy=i+1;
  }

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
  const fmtV = (item,v) => item.unit==='₺' ? '€'+Math.round(v/(V.eurKur||50)).toLocaleString('en-US') : Math.round(v).toLocaleString('tr-TR');
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
  const eurKur = V.eurKur || 50;
  const useIst = V[sehir+'UseIstKurulum'] !== false;
  ozet.innerHTML = (useIst ? 'IST setup base: ' : 'Custom setup: ')
    + '<span id="'+sehir+'KurulumTop">~€' + Math.round(top/eurKur/1000) + 'K</span>';
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
    const _pM = (V.printerAktif !== false) ? _autoPrinterAdet()*(V.printerEurFiyat||35000)*(V.eurKur||50) : 0;
    const _rM = V.robotKolAktif ? (V.robotKolEurFiyat||30000)*(V.eurKur||50) : 0;
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
    notu.textContent = 'IST base — €' + Math.round(parseInt(ay.replace(/\./g,''))/(V.eurKur||50)) + '/month';
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
  const eurKur = V.eurKur || 50;
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
  const _esik1 = V.esikStajyer1 || 16;
  const _esikD = V.esikDestek   || 31;
  const _esik2 = V.esikStajyer2 || 46;
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
  const eurKur = V.eurKur || 50;
  const g45 = (V.dcfGrowth45 || 25) / 100;

  // Yıl 3 bazından Yıl 5'e DCF büyüme oranıyla projeksiyon
  const t3 = window._lastTotals || [];
  const y3Favok = t3[2] || 0; // €K
  const y5Favok = Math.round(y3Favok * Math.pow(1 + g45, 2)); // €K

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


function updDestekAy(val) {
  V.destekAy = parseInt(val);
  const lbl = document.getElementById('destekAktifLabel');
  if (lbl) lbl.textContent = 'From Month '+(parseInt(val)+1);
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function updStajyer2Ay(val) {
  V.stajyer2Ay = parseInt(val);
  const lbl = document.getElementById('stajyer2AktifLabel');
  if (lbl) lbl.textContent = 'From Month '+(parseInt(val)+1);
  recalc();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}


function recalc() {
  const korseF=gv('korseF'), danisPct=gv('danisPct')/100, malzeme=gv('malzeme');
  const royaltyTRY = gv('royaltyEur') * (V.eurKur||50);  // €royalty → ₺
  const reklamS=gv('reklamSabit'), mutfakV=gv('mutfak'), stopajV=gv('stopaj');
  const genelGiderV=gv('genelGider');
  const aylikKira=gv('kira'), elektrik=gv('elektrik'), internet=gv('internet');
  const sarf=gv('sarf'), ortotistM=gv('ortotistM'), sgkC=gv('sgkCarpan');
  const ortoBrut=ortotistM*sgkC;
  const operatorBrut = gv('operatorM') * sgkC;
  const stajyerBrut = gv('stajyerM') * sgkC;
  const ymmM = gv('ymmM');
  const sabitBase=aylikKira+elektrik+internet+sarf+ortoBrut+operatorBrut+mutfakV+genelGiderV+ymmM;  // ilk ay baz
  document.getElementById('sabitAylik').textContent=ff(-sabitBase);
  document.getElementById('sabitYillik').textContent=ff(-(sabitBase*gv('stajyerAy') + (sabitBase+stajyerBrut)*(12-gv('stajyerAy'))));
  const destekBrutBar = gv('destekM') * gv('sgkCarpan');
  renderSabitBar(aylikKira, elektrik+internet, internet, sarf, ortoBrut, operatorBrut, stajyerBrut, destekBrutBar, mutfakV, genelGiderV, ymmM);

  // Brüt maliyet göstergeleri
  const _sgkC = gv('sgkCarpan');
  const brutPairs = [
    ['brutOperator',  gv('operatorM')],
    ['brutOrtotist',  gv('ortotistM')],
    ['brutYeniMezun', gv('stajyer2M')],
    ['brutStajyer',   gv('stajyerM')],
    ['brutDestek',    gv('destekM')],

  ];
  brutPairs.forEach(([id, net]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = Math.round(net * _sgkC).toLocaleString('tr-TR');
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
    const hekimTL = Math.round(fiyat * gv('danis_' + k) / 100);
    const kanalTL = Math.round(fiyat * gv('kanalBakim') / 100);
    const el = document.getElementById('danisТL_' + k);
    if (el) el.textContent = hekimTL.toLocaleString('tr-TR');
    const el2 = document.getElementById('bakimТL_' + k);
    if (el2) el2.textContent = kanalTL.toLocaleString('tr-TR');
    const elCiro = document.getElementById('ciroTL_' + k);
    const elCiroB2B = document.getElementById('ciroB2BTL_' + k);
    if (elCiro || elCiroB2B) {
      const royaltyTRY = gv('royaltyEur') * (V.eurKur || 50);
      const mal = gv('mal_' + k);
      if (elCiro) {
        const ciro = fiyat - hekimTL - kanalTL - mal - royaltyTRY;
        elCiro.textContent = ciro.toLocaleString('tr-TR');
        const elEur = document.getElementById('ciroEur_' + k);
        if (elEur) elEur.textContent = Math.round(ciro / (V.eurKur || 50)).toLocaleString('en-US');
      }
      if (elCiroB2B) {
        const fB2B = gv('korseFB2B_' + k);
        const hekimB2B = Math.round(fB2B * gv('danis_' + k) / 100);
        const kanalB2B = Math.round(fB2B * gv('kanalBakim') / 100);
        const kesimTRY = (k === 'delik' || k === 'sensDelik') ? gv('kesimEurPer') * (V.eurKur || 50) : 0;
        const ciroB2B = fB2B - hekimB2B - kanalB2B - mal - kesimTRY - royaltyTRY;
        elCiroB2B.textContent = ciroB2B.toLocaleString('tr-TR');
        const elB2BEur = document.getElementById('ciroB2BEur_' + k);
        if (elB2BEur) elB2BEur.textContent = Math.round(ciroB2B / (V.eurKur || 50)).toLocaleString('en-US');
      }
    }
    const elFiyatEur = document.getElementById('eurFiyat_' + k);
    if (elFiyatEur) elFiyatEur.textContent = Math.round(fiyat / (V.eurKur || 50)).toLocaleString('en-US');
  });



  const m2=gv('m2'), tm2=gv('tadilatM2'), dm2=gv('dekoM2');
  const tadilatTop=m2*tm2, dekoTopV=m2*dm2;
  document.getElementById('tadilatTop').textContent='€'+Math.round(tadilatTop/(V.eurKur||50)).toLocaleString('en-US');
  document.getElementById('dekoTop').textContent='€'+Math.round(dekoTopV/(V.eurKur||50)).toLocaleString('en-US');
  document.getElementById('tadilatDekoTop').textContent=ff(-(tadilatTop+dekoTopV));
  document.getElementById('m2d').textContent=m2;
  document.getElementById('tm2d').textContent=tm2.toLocaleString('tr-TR');
  document.getElementById('dm2d').textContent=dm2.toLocaleString('tr-TR');

  _refreshPrinterDisplay();
  svRobotKol();
  const printerMaliyetK = (V.printerAktif !== false) ? V.printerAdet * (V.printerEurFiyat||35000) * (V.eurKur||50) : 0;
  const robotKolMaliyetK = V.robotKolAktif ? (V.robotKolEurFiyat||30000) * (V.eurKur||50) : 0;
  const kurulumTop=-(gv('kira')+gv('depozito')+gv('emlakci')+tadilatTop+dekoTopV+gv('mobilya')+gv('ruhsat')+printerMaliyetK+robotKolMaliyetK);
  document.getElementById('kurulumTop').textContent=ff(kurulumTop);
  renderKurulumDonut(gv('kira'),gv('depozito'),gv('emlakci'),tadilatTop,dekoTopV,gv('mobilya')+printerMaliyetK+robotKolMaliyetK,gv('ruhsat'));

  let cumBudget=kurulumTop, rows=[], tGelir=0, tGider=0, tNet=0, tKorse=0, cumKorse=0;
  let basAy=null, pozAy=null;

  // Printer kapasite takibi
  const printerKapAyMax = 66;  // günde 3 korse × 22 iş günü
  const printerBirimMaliyet = (V.printerEurFiyat||35000) * (V.eurKur||50);
  let aktifPrinterSayisi = V.printerAdet || 2;  // başlangıç printer sayısı (min 2)
  const printerTetikAylari = [];  // hangi aylarda printer alındı

  // ürün fiyatları
  const fStdR  = gv('korseF_stdR'),  mStdR  = gv('mal_stdR');
  const fStdRl = gv('korseF_stdRl'), mStdRl = gv('mal_stdRl');
  const fDelik = gv('korseF_delik'), mDelik = gv('mal_delik');
  const fSens  = gv('korseF_sens'),  mSens  = gv('mal_sens');
  const fSD    = gv('korseF_sensDelik'), mSD = gv('mal_sensDelik');
  // hekim payı — ürün başına
  const dP = {
    stdR:      gv('danis_stdR')     / 100,
    stdRl:     gv('danis_stdRl')    / 100,
    delik:     gv('danis_delik')    / 100,
    sens:      gv('danis_sens')     / 100,
    sensDelik: gv('danis_sensDelik')/ 100,
  };
  const kanalBakimR = gv('kanalBakim') / 100;

  for(let i=0;i<12;i++){
    const korse=V.korse[i]||0, korseB2B=V.korseB2B[i]||0, kongre=V.kongre[i]||0, isAy1=i===0;
    const korseToplam = korse; // printer kapasitesi ve personel eşiği klinik korse ile belirlenir; B2B mevcut kapasitede üretilir
    const rawMx = (V.mix[i] || [100,0,0,0,0]).map((v,pi) => i < (V.aktifAy[pi]||0) ? 0 : v);
    const tot = rawMx.reduce((s,v)=>s+v,0) || 100;
    const k = rawMx.map(v => Math.round(korse * v / tot));
    k[4] = Math.max(0, korse - k[0] - k[1] - k[2] - k[3]);
    if(k.reduce((s,v)=>s+v,0) > korse) { k[0] = Math.max(0, korse - k[1]-k[2]-k[3]-k[4]); }
    // gelir
    const gelirBrut = k[0]*fStdR + k[1]*fStdRl + k[2]*fDelik + k[3]*fSens + k[4]*fSD;
    const danis     = k[0]*fStdR*dP.stdR + k[1]*fStdRl*dP.stdRl + k[2]*fDelik*dP.delik + k[3]*fSens*dP.sens + k[4]*fSD*dP.sensDelik;
    const bakim     = gelirBrut * kanalBakimR;
    const baskiTop  = k[0]*mStdR + k[1]*mStdRl + k[2]*mDelik + k[3]*mSens + k[4]*mSD;
    const royaltyTop = korse * royaltyTRY;
    const gelirNet  = gelirBrut - danis - bakim - baskiTop - royaltyTop;
    // gider
    // Printer tetikleyici — bu ayın korsesi mevcut kapasite aşıyorsa ek printer al
    const gerekliPrinter = Math.ceil(korseToplam / printerKapAyMax);
    let printerEkMaliyet = 0;
    if (gerekliPrinter > aktifPrinterSayisi) {
      const yeniPrinter = gerekliPrinter - aktifPrinterSayisi;
      printerEkMaliyet = yeniPrinter * printerBirimMaliyet;
      aktifPrinterSayisi = gerekliPrinter;
      printerTetikAylari.push({ ay: i+1, adet: yeniPrinter, maliyet: printerEkMaliyet });
    }
    const ayKira      = aylikKira;
    const ayStopaj    = (i===2||i===5||i===8||i===11) ? stopajV : 0;
    // Eşik bazlı personel — o aya kadarki aylık ortalama korse
    const _e1 = V.esikStajyer1||16, _e2 = V.esikDestek||31, _e3 = V.esikStajyer2||46;
    const stajyerBrut2 = gv('stajyerM')  * gv('sgkCarpan');
    const destekBrut3  = gv('destekM')   * gv('sgkCarpan');
    const staj2Brut2   = gv('stajyer2M') * gv('sgkCarpan');
    const ayStajyer    = korse >= _e1 ? stajyerBrut2 : 0;
    const ayDestek2    = korse >= _e2 ? destekBrut3  : 0;
    const ayStaj22     = korse >= _e3 ? staj2Brut2   : 0;
    const sabitGider  = ayKira + (elektrik+internet+sarf) + ortoBrut + ayStajyer + ayDestek2 + ayStaj22 + genelGiderV;
    const gider       = -(sabitGider + reklamS + mutfakV + ayStopaj + kongre + printerEkMaliyet);
    const net = gelirNet + gider;
    cumBudget += net;
    if(basAy===null&&net>=0) basAy=i+1;
    if(pozAy===null&&cumBudget>=0) pozAy=i+1;
    const kesimTop = (k[2]+k[4]) * gv('kesimEurPer') * (V.eurKur||50);
    rows.push({ay:i+1, korse, k, gelirBrut, danis, bakim, baskiTop, royaltyTop, kesimTop, gelirNet, sabitGider, ayStajyer, reklamS, mutfakV, ayStopaj, kongre, printerEkMaliyet, gider, net, cumBudget});
    cumKorse+=korse;
    tGelir+=gelirNet; tGider+=gider; tNet+=net; tKorse+=korse;
  }

  // ── B2B Gelir ──────────────────────────────────────────────────────────────
  const fB2R = gv('korseFB2B_stdR'), fB2Rl = gv('korseFB2B_stdRl');
  const fB2D = gv('korseFB2B_delik'), fB2S = gv('korseFB2B_sens'), fB2SD = gv('korseFB2B_sensDelik');
  const kesimTRYb2 = gv('kesimEurPer') * (V.eurKur||50);
  let tGelirB2B = 0;
  const rowsB2B = [];
  if (!V.korseB2B) V.korseB2B = [0,0,0,0,0,0,0,0,0,0,0,0];
  if (!V.mixB2B) V.mixB2B = Array.from({length:12}, () => [50,50,0,0,0]);
  for (let i2 = 0; i2 < 12; i2++) {
    const kB2 = V.korseB2B[i2] || 0;
    const rawB2 = V.mixB2B[i2].map((v,pi) => i2 < (V.aktifAy[pi]||0) ? 0 : v);
    const totB2 = rawB2.reduce((s,v)=>s+v,0) || 100;
    const kB2u = rawB2.map(v => Math.round(kB2 * v / totB2));
    kB2u[4] = Math.max(0, kB2 - kB2u[0] - kB2u[1] - kB2u[2] - kB2u[3]);
    const brutB2 = kB2u[0]*fB2R + kB2u[1]*fB2Rl + kB2u[2]*fB2D + kB2u[3]*fB2S + kB2u[4]*fB2SD;
    const dPB2 = {stdR:gv('danis_stdR')/100, stdRl:gv('danis_stdRl')/100, delik:gv('danis_delik')/100, sens:gv('danis_sens')/100, sensDelik:gv('danis_sensDelik')/100};
    const danisB2 = kB2u[0]*fB2R*dPB2.stdR + kB2u[1]*fB2Rl*dPB2.stdRl + kB2u[2]*fB2D*dPB2.delik + kB2u[3]*fB2S*dPB2.sens + kB2u[4]*fB2SD*dPB2.sensDelik;
    const bakimB2 = brutB2 * (gv('kanalBakim')/100);
    const baskiB2 = kB2u[0]*mStdR + kB2u[1]*mStdRl + kB2u[2]*(mDelik+kesimTRYb2) + kB2u[3]*mSens + kB2u[4]*(mSD+kesimTRYb2);
    const royB2 = kB2 * royaltyTRY;
    const netB2 = brutB2 - danisB2 - bakimB2 - baskiB2 - royB2;
    tGelirB2B += netB2;
    rowsB2B.push({ ay: i2+1, korse: kB2, k: kB2u, gelirBrut: brutB2, danisB2B: danisB2, bakimB2B: bakimB2, baskiTop: baskiB2, royaltyTop: royB2, gelirNet: netB2 });
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
  const _danisTL = rows.reduce((s,r)=>s+(r.danis||0),0);
  const _bakimTL = rows.reduce((s,r)=>s+(r.bakim||0),0);
  document.getElementById('kpiGrid').innerHTML=[
    {label:'Total braces',              val:tKorse+' units',                            sub:'',                 c:'neu'},
    {label:'Clinic net revenue (year)', val:feEur(tGelir),                              sub:ffTRY(tGelir),         c:tGelir>=0?'pos':'neg'},
    {label:'B2B net revenue (year)',    val:feEur(tGelirB2B),                           sub:ffTRY(tGelirB2B),      c:tGelirB2B>0?'pos':'neu'},
    {label:'Cumulative year-end',       val:feEur(rows[11].cumBudget),                  sub:ffTRY(rows[11].cumBudget), c:rows[11].cumBudget>=0?'pos':'neg'},
    {label:'Monthly break-even',        val:basAy?'Month '+basAy:'Not reached',         sub:'',                 c:basAy?'pos':'neg'},
    {label:'Cumulative positive',       val:pozAyLabel,                                 sub:'',                 c:pozAyClass},
    {label:'Setup cost',                val:feEur(kurulumTop),                          sub:ffTRY(kurulumTop),     c:'neg'},
    {label:'Total doctor fee',          val:feEur(-_danisTL),                           sub:ffTRY(-_danisTL),      c:'neg'},
    {label:'Total channel share',       val:feEur(-_bakimTL),                           sub:ffTRY(-_bakimTL),      c:'neg'},
    {label:'Royalty / year',            val:'-€'+Math.round(_royTL/(V.eurKur||50)).toLocaleString('en-US'), sub:ffTRY(-_royTL), c:'neg'},
    {label:'Osteoid Inc. royalty',      val:'€'+Math.round(_royTL/(V.eurKur||50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Cutting / Osteoid Inc.',    val:'€'+Math.round(_ksmTL/(V.eurKur||50)).toLocaleString('en-US'),  sub:'',          c:'neu'},
    {label:'Net margin / brace',        val:brütMarj+'%',                               sub:'',                 c:'neu'},
  ].map(k=>`<div class="kpi"><div class="kpi-label">${k.label}</div><div class="kpi-val ${k.c}">${k.val}</div>${k.sub?`<div style="font-size:10px;color:#aaa;margin-top:2px;line-height:1.2;">${k.sub}</div>`:''}</div>`).join('');

  const th=`<thead><tr>
    <th>Month</th>
    <th style="color:#888780;">Std-NR</th><th style="color:#D85A30;">Std-Rep.</th>
    <th style="color:#1D9E75;">Perf.</th><th style="color:#534AB7;">Sens</th><th style="color:#D4537E;">Sns+Prf</th>
    <th>Gross Rev.</th><th>Doctor Fee</th><th>Channel Share</th><th>Cost</th><th>Royalty</th><th>Net Revenue</th>
    <th>Fixed</th><th>Intern</th><th>Advertising</th><th>Kitchen</th><th>Withholding</th><th>Periodic</th><th>Printer</th>
    <th>Tot.Cost</th><th>Monthly Net</th><th>Cumulative</th>
  </tr></thead>`;
  const tb_rows=rows.map(r=>{
    const isBas=r.ay===basAy, isPoz=r.ay===pozAy, rc=isPoz?'r-cum':isBas?'r-bas':'';
    const kk=r.k||[r.korse,0,0,0,0];
    return `<tr class="${rc}">
      <td>Month ${r.ay}${isBas?' ✓':''}${isPoz?' ★':''}</td>
      <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
      <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
      <td>${ff(r.gelirBrut)}</td><td class="nc">${ff(-r.danis)}</td>
      <td class="${r.bakim?'nc':'zc'}">${r.bakim?ff(-r.bakim):'—'}</td>
      <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
      <td class="nc">${ff(-r.royaltyTop)}</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="nc">${ff(-r.sabitGider)}</td><td class="${r.ayStajyer?'nc':'zc'}">${r.ayStajyer?ff(-r.ayStajyer):'—'}</td><td class="nc">${ff(-r.reklamS)}</td>
      <td class="nc">${ff(-r.mutfakV)}</td>
      <td class="${r.ayStopaj?'nc':'zc'}">${r.ayStopaj?ff(-r.ayStopaj):'—'}</td>
      <td class="${r.kongre?'nc':'zc'}">${r.kongre?ff(-r.kongre):'—'}</td><td class="${r.printerEkMaliyet?'nc':'zc'}">${r.printerEkMaliyet?ff(-r.printerEkMaliyet):'—'}</td>
      <td class="nc">${ff(r.gider)}</td>
      <td class="${cls(r.net)}">${ff(r.net)}</td>
      <td class="${cls(r.cumBudget)}">${ff(r.cumBudget)}</td>
    </tr>`;
  }).join('');
  // Toplam satırı — tüm sütunlar
  const tDanis     = rows.reduce((s,r)=>s+(r.danis||0),0);
  const tBakim     = rows.reduce((s,r)=>s+(r.bakim||0),0);
  const tBaski     = rows.reduce((s,r)=>s+(r.baskiTop||0),0);
  const tRoyalty   = rows.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const tSabit     = rows.reduce((s,r)=>s+(r.sabitGider||0),0);
  const tStajyer   = rows.reduce((s,r)=>s+(r.ayStajyer||0),0);
  const tReklam    = rows.reduce((s,r)=>s+(r.reklamS||0),0);
  const tMutfak    = rows.reduce((s,r)=>s+(r.mutfakV||0),0);
  const tStopaj    = rows.reduce((s,r)=>s+(r.ayStopaj||0),0);
  const tKongre    = rows.reduce((s,r)=>s+(r.kongre||0),0);
  const tPrinter   = rows.reduce((s,r)=>s+(r.printerEkMaliyet||0),0);
  const tpKk = rows.reduce((s,r)=>{const k=r.k||[0,0,0,0,0]; return s.map((v,j)=>v+k[j]);}, [0,0,0,0,0]);
  const topRow = `<tr style="background:#f0efe9;font-weight:700;">
    <td>Total</td>
    <td style="color:#888780;">${tpKk[0]}</td><td style="color:#D85A30;">${tpKk[1]}</td>
    <td style="color:#1D9E75;">${tpKk[2]}</td><td style="color:#534AB7;">${tpKk[3]}</td><td style="color:#D4537E;">${tpKk[4]}</td>
    <td>${ff(tBrut)}</td><td class="nc">${ff(-tDanis)}</td>
    <td class="${tBakim?'nc':'zc'}">${tBakim?ff(-tBakim):'—'}</td>
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
    <td colspan="22" style="padding:5px 8px;">B2B Channel</td></tr>`;
  const b2b_rows = rowsB2B.map(r => {
    const kk = r.k || [r.korse,0,0,0,0];
    return `<tr style="background:#f7f6ff;">
      <td>Month ${r.ay}</td>
      <td style="color:#888780;">${kk[0]||'—'}</td><td style="color:#D85A30;">${kk[1]||'—'}</td>
      <td style="color:#1D9E75;">${kk[2]||'—'}</td><td style="color:#534AB7;">${kk[3]||'—'}</td><td style="color:#D4537E;">${kk[4]||'—'}</td>
      <td>${ff(r.gelirBrut)}</td>
      <td class="nc">${ff(-r.danisB2B)}</td>
      <td class="${r.bakimB2B?'nc':'zc'}">${r.bakimB2B?ff(-r.bakimB2B):'—'}</td>
      <td class="${r.baskiTop?'nc':'zc'}">${r.baskiTop?ff(-r.baskiTop):'—'}</td>
      <td class="nc">${ff(-r.royaltyTop)}</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc" colspan="9">—</td>
      <td class="${cls(r.gelirNet)}">${ff(r.gelirNet)}</td>
      <td class="zc">—</td>
    </tr>`;
  }).join('');
  const b2bKk = rowsB2B.reduce((s,r)=>{const k=r.k||[0,0,0,0,0];return s.map((v,j)=>v+k[j]);},[0,0,0,0,0]);
  const b2bBrut  = rowsB2B.reduce((s,r)=>s+(r.gelirBrut||0),0);
  const b2bDanis = rowsB2B.reduce((s,r)=>s+(r.danisB2B||0),0);
  const b2bBakim = rowsB2B.reduce((s,r)=>s+(r.bakimB2B||0),0);
  const b2bBaski = rowsB2B.reduce((s,r)=>s+(r.baskiTop||0),0);
  const b2bRoy   = rowsB2B.reduce((s,r)=>s+(r.royaltyTop||0),0);
  const b2bTopRow = `<tr style="background:#e8e6ff;font-weight:700;">
    <td>Total</td>
    <td style="color:#888780;">${b2bKk[0]}</td><td style="color:#D85A30;">${b2bKk[1]}</td>
    <td style="color:#1D9E75;">${b2bKk[2]}</td><td style="color:#534AB7;">${b2bKk[3]}</td><td style="color:#D4537E;">${b2bKk[4]}</td>
    <td>${ff(b2bBrut)}</td>
    <td class="nc">${ff(-b2bDanis)}</td>
    <td class="${b2bBakim?'nc':'zc'}">${b2bBakim?ff(-b2bBakim):'—'}</td>
    <td class="nc">${ff(-b2bBaski)}</td>
    <td class="nc">${ff(-b2bRoy)}</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc" colspan="9">—</td>
    <td class="${cls(tGelirB2B)}">${ff(tGelirB2B)}</td>
    <td class="zc">—</td>
  </tr>`;
  const tb = '<tbody>' + tb_rows + topRow + (rowsB2B.length ? b2bSep + b2b_rows + b2bTopRow : '') + '</tbody>';
  document.getElementById('mainTable').innerHTML=th+tb;

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

// 5 Yıllık Projeksiyon — dinamik
function buildProjection() {
  // Yıl 1 verileri recalc rows'tan
  const rows = window._lastRows || [];
  const eurKur = V.eurKur || 50;
  const toEur  = v => Math.round(v / eurKur / 1000); // ₺ → €K

  // Yıl 1: model verisi
  const y1KorseNet = rows.reduce((s,r) => s + (r.gelirNet||0), 0);
  const y1Korse    = rows.reduce((s,r) => s + (r.korse||0), 0);
  const y1Danis    = rows.reduce((s,r) => s + (r.danis||0), 0); // hekim komisyonu ₺
  const y1Bakim    = rows.reduce((s,r) => s + (r.bakim||0), 0); // kanal bakım payı ₺

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
  // Yıl 2: +%15, Yıl 3: +%25 (personel, kira artışı)
  const y2GiderEur = Math.round(y1GiderEur * 1.15);
  const y3GiderEur = Math.round(y1GiderEur * 1.25);

  // ── Net korse geliri = Brüt − İşletme gideri (tutarlı her yıl) ──
  const y1BrutM1 = toEur(y1KorseNet);
  const y1NetM1  = Math.max(0, y1BrutM1 - y1GiderEur);    // Yıl 1: recalc ile tutarlı
  const y2NetM1  = Math.max(0, lerp(y1BrutM1, y3BrutGelir, 0.4) - y2GiderEur);
  const y3NetM1  = Math.max(0, y3BrutGelir - y3GiderEur);

  // ── Kanal dağılımı: SGK Yıl 2 ortasından başlar, Yıl 3 olgunlaşır ──
  const y3SgkNet = Math.round(y3BrutGelir * 0.35 * 0.85); // %35 SGK kanal payı × %85 tahsilat
  const y2SgkNet = Math.round(y3SgkNet * 0.25); // Yıl 2: SGK onay + yarıyıl rampa → %25
  const korseM1    = [y1NetM1, y2NetM1, y3NetM1];
  // SGK: Yıl 2 ortasından itibaren gelir, Yıl 3 tam kapasite
  const korseM1SGK = [0, y2SgkNet, y3SgkNet];
  // korseM2: 2. merkez İzmir/Ankara satırlarında ayrıca gösterilir
  const korseM2    = [0, 0, 0];


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

  // İzmir ve Ankara gelir satırları — tetik gecikmesi oranında ölçeklenir
  const izmirGelirY2  = V.izmirAktif  ? Math.round(getMerkezGelir('izmir')  * _aktifAyYil2 / 12) : 0;
  const ankaraGelirY2 = V.ankaraAktif ? Math.round(getMerkezGelir('ankara') * _ankaraAktifAyYil2 / 12) : 0;

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

  // Yıl 5 hedef gelirleri
  const pazarIzmir  = Math.round(gv('pazarTR') * V.izmirNufusPay / 100);
  const pazarAnkara = Math.round(gv('pazarTR') * V.ankaraNufusPay / 100);
  const y1BirimNetEur = toEur(y1KorseNet) / (y1Korse||1) * 1000; // €/adet

  const izmirY5Adet  = V.izmirAktif  ? Math.round(pazarIzmir  * gv('izmirHedefPay')  / 100) : 0;
  const ankaraY5Adet = V.ankaraAktif ? Math.round(pazarAnkara * gv('ankaraHedefPay') / 100) : 0;
  const izmirY5Gelir  = Math.round(izmirY5Adet  * y1BirimNetEur / 1000);
  const ankaraY5Gelir = Math.round(ankaraY5Adet * y1BirimNetEur / 1000);

  // Yıl 2-4 interpolasyon
  const izmirRow  = [0, izmirGelirY2,  izmirY5Gelir];
  const ankaraRow = [0, ankaraGelirY2, ankaraY5Gelir];

  // B2B: yalnızca İstanbul Merkez 1 — İzmir ve Ankara'da B2B yok
  const b2bY1 = toEur(window._lastGelirB2B || 0);
  const b2bRow = [b2bY1, Math.round(b2bY1 * 1.5), Math.round(b2bY1 * 2.2)];

  const totals = [0,1,2].map(i => korseM1[i]+korseM1SGK[i]+korseM2[i]+izmirRow[i]+ankaraRow[i]+b2bRow[i]);

  // Yıl 2 KPI güncelle
  window._lastTotals = totals;
  if (typeof renderDcf === 'function') { renderDcf(); renderGetiriTable(); }
  const y2k = document.getElementById('y2GelirKpi');
  if (y2k) y2k.textContent = '~€' + totals[1] + 'K';
  // Kurulum özet güncelle
  ['izmir','ankara'].forEach(function(s) {
    const el = document.getElementById(s+'KurulumTop');
    if (el) {
      const top = getMerkezKurulum(s);
      el.textContent = '~€' + Math.round(top/(V.eurKur||50)/1000) + 'K';
    }
  });

  // Hekim ve kanal payı tahmini: Y1 oranı sabit varsayım
  const y1DanisEurK   = toEur(y1Danis);
  const y1BakimEurK   = toEur(y1Bakim);
  const y1DanisOran   = y1KorseNet > 0 ? y1Danis / y1KorseNet : 0.25;
  const y1BakimOran   = y1KorseNet > 0 ? y1Bakim / y1KorseNet : 0.05;
  const y2M1PreOpex   = lerp(y1BrutM1, y3BrutGelir, 0.4);
  const y2TotalPreOpexNet = y2M1PreOpex + (korseM1SGK[1]||0) + (izmirRow[1]||0) + (ankaraRow[1]||0) + (b2bRow[1]||0);
  const y3TotalPreOpexNet = y3BrutGelir + (korseM1SGK[2]||0) + (izmirRow[2]||0) + (ankaraRow[2]||0) + (b2bRow[2]||0);
  const y2HekimPayiEurK = Math.round(y2TotalPreOpexNet * y1DanisOran);
  const y3HekimPayiEurK = Math.round(y3TotalPreOpexNet * y1DanisOran);
  const y2KanalPayiEurK = Math.round(y2TotalPreOpexNet * y1BakimOran);
  const y3KanalPayiEurK = Math.round(y3TotalPreOpexNet * y1BakimOran);

  // Tablo güncelle
  const wrap = document.getElementById('projTableWrap');
  if (wrap) {
    const fmt = v => v > 0 ? `<td class="val-pos">~€${v}K</td>` : '<td style="color:#aaa;">—</td>';
    const grow = (v1, v5) => v1 > 0 ? `<td class="val-grow">+${Math.round((v5/v1-1)*100)}%</td>` : '<td style="color:#aaa;">—</td>';
    wrap.innerHTML = `
    <table class="rev-table">
      <thead><tr>
        <th>Revenue Item</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Y1→Y3</th>
      </tr></thead>
      <tbody>
        <tr><td>Brace — Center 1 (private channel)</td>${fmt(korseM1[0])}${fmt(korseM1[1])}${fmt(korseM1[2])}${grow(korseM1[0],korseM1[2])}</tr>
        <tr><td>Brace — Center 1 (SSI, Year 2+)</td>${fmt(0)}${fmt(korseM1SGK[1])}${fmt(korseM1SGK[2])}${grow(korseM1SGK[1],korseM1SGK[2])}</tr>
        <tr><td>Brace — Center 2 (Year 2+)</td>${fmt(0)}${fmt(korseM2[1])}${fmt(korseM2[2])}${grow(korseM2[1],korseM2[2])}</tr>
        ${b2bRow[0] > 0 || b2bRow[1] > 0 ? `<tr><td style="color:#378ADD;">B2B — Center 1 (Istanbul)</td>${fmt(b2bRow[0])}${fmt(b2bRow[1])}${fmt(b2bRow[2])}${grow(b2bRow[0],b2bRow[2])}</tr>` : ''}
        ${V.izmirAktif  ? `<tr><td style="color:#1D9E75;">Brace — Izmir Center</td>${fmt(izmirRow[0])}${fmt(izmirRow[1])}${fmt(izmirRow[2])}${grow(izmirRow[1],izmirRow[2])}</tr>` : ''}
        ${V.ankaraAktif ? `<tr><td style="color:#534AB7;">Brace — Ankara Center</td>${fmt(ankaraRow[0])}${fmt(ankaraRow[1])}${fmt(ankaraRow[2])}${grow(ankaraRow[1],ankaraRow[2])}</tr>` : ''}

        <tr class="total"><td>Consolidated Total (Clinic + B2B)</td>${fmt(totals[0])}${fmt(totals[1])}${fmt(totals[2])}${grow(totals[0],totals[2])}</tr>
        <tr style="background:#fff7f5;"><td style="color:#c94f2a;font-size:11px;">↳ Doctor Commission <span style="font-weight:400;opacity:0.65;">(Y1 ratio fixed · projection)</span></td><td style="color:#c94f2a;font-size:11px;">~€${y1DanisEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y2HekimPayiEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y3HekimPayiEurK}K</td><td style="color:#aaa;font-size:11px;">—</td></tr>
        <tr style="background:#fff7f5;"><td style="color:#c94f2a;font-size:11px;">↳ Channel Maintenance Share <span style="font-weight:400;opacity:0.65;">(Y1 ratio fixed · projection)</span></td><td style="color:#c94f2a;font-size:11px;">~€${y1BakimEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y2KanalPayiEurK}K</td><td style="color:#c94f2a;font-size:11px;">~€${y3KanalPayiEurK}K</td><td style="color:#aaa;font-size:11px;">—</td></tr>
        <tr style="background:#f0efe9;"><td style="font-size:11px;color:#888;">Year 5 target brace count (IST share: %${y5PayPct})</td><td colspan="3" style="text-align:center;color:#888;font-size:11px;">${y5KorseAdet.toLocaleString('tr-TR')} units/year</td></tr>
      </tbody>
    </table>`;
  }

  const noteEl = document.getElementById('projTableNote');
  if (noteEl) noteEl.textContent = 'All figures are net revenue projections (€K). Year 1 data from model; Year 2-3 growth-factor projections. Not final figures.';

  // Yıl 5 kartı KPI'ları güncelle
  const y5g = document.getElementById('y5GelirKpi');
  const y5p = document.getElementById('y5PayKpi');
  const y5k = document.getElementById('y5KorseKpi');
  if (y5g) y5g.textContent = '~€' + totals[2] + 'K';
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
      labels: ['Year 1','Year 2','Year 3'],
      datasets: [
        { label:'Brace C1 (private)', data:korseM1, backgroundColor:'rgba(44,74,46,0.85)', borderColor:'#2c4a2e', borderWidth:1, borderRadius:3 },
        { label:'Brace C1 (SSI)',  data:korseM1SGK, backgroundColor:'rgba(44,74,46,0.4)', borderColor:'#2c4a2e', borderWidth:1, borderRadius:3 },
        ...(V.izmirAktif  ? [{ label:'Izmir',  data:izmirRow,  backgroundColor:'rgba(29,158,117,0.7)', borderColor:'#1D9E75', borderWidth:1, borderRadius:3 }] : []),
        ...(V.ankaraAktif ? [{ label:'Ankara', data:ankaraRow, backgroundColor:'rgba(83,74,183,0.7)',  borderColor:'#534AB7', borderWidth:1, borderRadius:3 }] : []),
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
  if (printerTag) { printerTag.textContent = printerAktif ? 'Included' : 'Excluded'; printerTag.style.color = printerAktif ? '#534AB7' : '#888'; }
  document.getElementById('printerAdet').textContent = adet;
  document.getElementById('printerTRY').textContent = printerAktif ? '€'+Math.round(eur).toLocaleString('en-US') : '—';
  document.getElementById('printerKapasite').textContent = '~'+kapMin+'–'+kapMax+' braces/month';
  document.getElementById('printerEurDisp').textContent = (V.printerEurFiyat||35000).toLocaleString('tr-TR');
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
  if (tag) { tag.textContent = aktif ? 'Included' : 'Excluded'; tag.style.color = aktif ? '#1a7a45' : '#888'; }
  const tryEl = document.getElementById('robotKolTRY');
  if (tryEl) tryEl.textContent = aktif ? '€'+(V.robotKolEurFiyat||30000).toLocaleString('en-US') : '—';
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
function svPrinterToggle(checked) {
  V.printerAktif = checked;
  const tag = document.getElementById('printerAktifTag');
  if (tag) { tag.textContent = checked ? 'Included' : 'Excluded'; tag.style.color = checked ? '#534AB7' : '#888'; }
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
      const adet = Math.round(r.printerEkMaliyet / ((V.printerEurFiyat||35000) * (V.eurKur||50)));
      return 'Month ' + r.ay + ': +' + adet + ' printer (€' + Math.round(r.printerEkMaliyet/(V.eurKur||50)).toLocaleString('en-US') + ')';
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


// ── DCF DEĞERLEMESİ ──────────────────────────────────────────────────────────
function svDcf(key, val) {
  val = parseFloat(val);
  V[key] = val;
  if (key === 'dcfRate')    { const e = document.getElementById('dcfRate');    if(e) e.textContent = val; }
  if (key === 'dcfGrowth')  { const e = document.getElementById('dcfGrowth');  if(e) e.textContent = val; }
  if (key === 'dcfGrowth45'){ const e = document.getElementById('dcfGrowth45');if(e) e.textContent = val; }
  if (key === 'dcfInvest')  {
    const e = document.getElementById('dcfInvestDisp');
    if(e) e.textContent = '€' + Math.round(val).toLocaleString('tr-TR');
  }
  renderDcf();
  renderGetiriTable();
  localStorage.setItem('osteoid_V', JSON.stringify(V));
}

function renderDcf() {
  const t = window._lastTotals || [];
  if (!t || t.length < 3) return;

  const r      = (V.dcfRate     || 28) / 100;
  const g      = (V.dcfGrowth   || 8)  / 100;
  const g45    = (V.dcfGrowth45 || 25) / 100;
  const invest = V.dcfInvest || 150000;
  const eurKur = V.eurKur || 50;

  // FCF: Yıl 1 gerçek model (aylık net toplamı), Yıl 2-3 buildProjection'dan, Yıl 4-5 büyüme
  const rows = window._lastRows || [];
  const y1fcf = rows.length > 0
    ? Math.round(rows.reduce((s,r)=>s+(r.net||0),0) / eurKur / 1000)
    : (t[0] || 0);

  const fcf = [
    y1fcf,
    t[1] || 0,
    t[2] || 0,
    Math.round((t[2]||0) * (1 + g45)),
    Math.round((t[2]||0) * Math.pow(1 + g45, 2)),
  ];

  // Terminal değer — Gordon büyüme modeli: TV = FCF5 × (1+g) / (r−g)
  const tv = (r > g && fcf[4] > 0) ? Math.round(fcf[4] * (1 + g) / (r - g)) : 0;

  // PV hesabı
  const pv  = fcf.map((cf, i) => cf / Math.pow(1 + r, i + 1));
  const pvTv = tv  / Math.pow(1 + r, 5);
  const npv  = pv.reduce((s, v) => s + v, 0) + pvTv;

  // Pre-money €K → €
  const premoney_eur_k = Math.round(npv);  // €K
  const premoney_eur = premoney_eur_k * 1000;
  const postmoney_eur = premoney_eur + invest;
  const yatirimci_pct = postmoney_eur > 0 ? (invest / postmoney_eur * 100) : 0;
  const osteoid_pct   = 100 - yatirimci_pct;

  const set = (id, v) => { const e = document.getElementById(id); if(e) e.textContent = v; };
  const fmtEur = v => '€' + (Math.abs(v)/1000000).toFixed(2) + 'M';
  const fmtPct = v => '%' + v.toFixed(2);

  set('dcf_premoney',        premoney_eur > 0 ? fmtEur(premoney_eur) : '—');
  set('dcf_postmoney',       fmtEur(postmoney_eur));
  set('dcf_yatirimci_hisse', fmtPct(yatirimci_pct));
  set('dcf_osteoid_hisse',   fmtPct(osteoid_pct));

  // Tablo
  const tbody = document.getElementById('dcfTableBody');
  if (!tbody) return;
  const disc = pv.map(v => Math.round(v));
  const fmtE = v => {
    const cls = v >= 0 ? 'pc' : 'nc';
    return '<td class="'+cls+'">€'+(Math.abs(v)/1000).toFixed(2)+'M</td>';
  };
  tbody.innerHTML =
    '<tr><td>Free Cash Flow (€M)</td>'
    + fcf.map(v => fmtE(v)).join('')
    + '<td style="color:#888;font-size:11px;">TV: €'+(tv/1000).toFixed(2)+'M</td></tr>'
    + '<tr><td style="color:#888;font-size:11px;">Discount factor (1/(1+r)ⁿ)</td>'
    + fcf.map((_,i)=>'<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,i+1)).toFixed(3)+'</td>').join('')
    + '<td style="color:#888;font-size:11px;">'+(1/Math.pow(1+r,5)).toFixed(3)+'</td></tr>'
    + '<tr><td>PV (Discounted, €M)</td>'
    + disc.map(v=>'<td class="'+(v>=0?'pc':'nc')+'">€'+(Math.abs(v)/1000).toFixed(2)+'M</td>').join('')
    + '<td class="neu">€'+(Math.round(pvTv)/1000).toFixed(2)+'M</td></tr>'
    + '<tr class="r-cum"><td><b>Pre-Money (NPV)</b></td>'
    + '<td colspan="5" style="text-align:center;font-weight:700;">'
    + 'Σ PV = €'+(Math.round(npv)/1000).toFixed(2)+'M &nbsp;≈&nbsp; <b>'+fmtEur(premoney_eur)+'</b>'
    + '</td><td class="neu" style="font-size:11px;">TV: €'+(Math.round(pvTv)/1000).toFixed(2)+'M incl.</td></tr>';
}


// ── YATIRIMCI GETİRİ ANALİZİ ─────────────────────────────────────────────────
function renderGetiriTable() {
  const t = window._lastTotals || [];
  if (!t || t.length < 3) return;

  const invest    = V.dcfInvest || 150000;
  const eurKur    = V.eurKur || 50;

  // Pre-money (DCF) — aynı renderDcf mantığı
  const r    = (V.dcfRate     || 28) / 100;
  const g    = (V.dcfGrowth   || 8)  / 100;
  const g45  = (V.dcfGrowth45 || 25) / 100;
  const rows = window._lastRows || [];
  const y1fcf = rows.length > 0
    ? Math.round(rows.reduce((s,r)=>s+(r.net||0),0) / eurKur / 1000)
    : (t[0] || 0);
  const fcf = [
    y1fcf, t[1]||0, t[2]||0,
    Math.round((t[2]||0)*(1+g45)),
    Math.round((t[2]||0)*Math.pow(1+g45,2)),
  ];
  const tv   = (r>g && fcf[4]>0) ? Math.round(fcf[4]*(1+g)/(r-g)) : 0;
  const pv   = fcf.map((cf,i)=>cf/Math.pow(1+r,i+1));
  const pvTv = tv/Math.pow(1+r,5);
  const npv  = pv.reduce((s,v)=>s+v,0)+pvTv;  // €K
  const premoney_eur = Math.round(npv * 1000);
  const postmoney_eur = premoney_eur + invest;
  const hisse_pct = postmoney_eur > 0 ? invest / postmoney_eur : 0;

  // DCF bazlı EV (€) — yıl 5 nakit akışı çarpan ile terminal
  const dcf_ev_eur = Math.round(npv * 1000);  // pre-money = DCF EV

  // Çarpan bazlı EV: Yıl 3 FAVÖK × çarpan (€K → €)
  const y3favok_eur = (t[2] || 0) * 1000;  // €

  // updateValuationTable'daki çarpanlar (aktif merkez sayısına göre)
  const aktifMerkez = 1 + (V.izmirAktif?1:0) + (V.ankaraAktif?1:0);
  const multAdj = aktifMerkez === 1 ? 0 : aktifMerkez === 2 ? 1 : 2;
  const senaryolar = [
    { id:'c', label:'Conservative', mult: 4 + multAdj, rowClass:'' },
    { id:'b', label:'Base',         mult: 6 + multAdj, rowClass:'' },
    { id:'o', label:'Optimistic',   mult: 9 + multAdj, rowClass:'r-bas' },
  ];

  // Yatırımcı etiketi güncelle
  const lbl = document.getElementById('gtr_invest_lbl');
  if (lbl) lbl.textContent = Math.round(invest).toLocaleString('tr-TR');

  const tbody = document.getElementById('getiriTableBody');
  if (!tbody) return;

  const fmtEur = v => { if (v <= 0) return '—'; return '€'+(v/1000000).toFixed(2)+'M'; };
  const fmtPct = v => '%'+v.toFixed(2);
  const fmtMoic = v => v > 0 ? v.toFixed(2)+'x' : '—';
  const moicCls = v => v >= 5 ? 'pc' : v >= 2 ? 'neu' : 'nc';

  tbody.innerHTML = senaryolar.map(s => {
    // Çarpan bazlı
    const ev_carpan_eur  = y3favok_eur * s.mult;
    const cikis_carpan   = Math.round(ev_carpan_eur * hisse_pct);
    const moic_carpan    = invest > 0 ? cikis_carpan / invest : 0;

    // DCF bazlı — DCF EV sabit, hisse payı aynı
    const cikis_dcf      = Math.round(dcf_ev_eur * hisse_pct);
    const moic_dcf       = invest > 0 ? cikis_dcf / invest : 0;

    return `<tr class="${s.rowClass}">
      <td><b>${s.label}</b></td>
      <td class="neu">${fmtEur(premoney_eur)}</td>
      <td class="neu">${fmtPct(hisse_pct*100)}</td>
      <td class="neu">${fmtEur(ev_carpan_eur)}</td>
      <td class="${moicCls(moic_carpan)}">${fmtEur(cikis_carpan)}</td>
      <td class="${moicCls(moic_carpan)}">${fmtMoic(moic_carpan)}</td>
      <td class="neu">${fmtEur(dcf_ev_eur)}</td>
      <td class="${moicCls(moic_dcf)}">${fmtEur(cikis_dcf)}</td>
      <td class="${moicCls(moic_dcf)}">${fmtMoic(moic_dcf)}</td>
    </tr>`;
  }).join('');
}

function initLayout() {
  const pid = window.PAGE_ID || '';
  const pages = [
    ['index.html','index','12-Month Summary'],
    ['market.html','pazar','Market &amp; Competition'],
    ['korse.html','korse','Brace Ramp'],
    ['expenses.html','giderler','Expenses'],
    ['growth.html','buyume','3-Year Plan'],
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
        <input id="eurRateInput" type="number" step="0.5" min="1" value="${(V.eurKur||50).toFixed(2)}"
          style="width:68px;font-size:15px;font-weight:700;color:#a89ff7;background:#0d0d1a;border:1px solid #4a4a6c;border-radius:4px;padding:3px 6px;text-align:right;">
      </div>
      <div id="eurRateTime" style="font-size:10px;color:#666;margin-bottom:8px;text-align:right;">Model rate · ₺${(V.eurKur||50).toFixed(2)}</div>
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
    _updateRateWidget(V.eurKur || 50, null, false);
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
