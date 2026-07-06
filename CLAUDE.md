# CLAUDE.md — Osteoid Yatırımcı Paneli

Bu dosya Claude Code'un bu projeyi anlaması için bağlam sağlar. Her oturumda önce bu dosyayı oku.

---

## Temel İlke (önce bunu oku)

**Bu dashboard bir senaryo aracıdır, bir tahmin değil.** Hiçbir parametre değeri kanonik değildir. Varsayılanlar (defaults) sadece dashboard'un ilk açılışta bir şey göstermesi için seçilmiş başlangıç noktalarıdır — "plan bu" anlamına gelmezler.

Bundan çıkan somut kurallar:

1. **Hiçbir statik HTML veya dokümantasyon sayfası tek bir senaryonun çıktısını "gerçek" gibi sunamaz.** Bir sayfada gösterilen her rakam ya (a) o an canlı `V` state'inden hesaplanmış olmalı, ya da (b) hangi senaryonun ürettiği açıkça etiketlenmiş olmalı ("Lean setup senaryosunda ~€39K" gibi).
2. **Varsayılan ≠ doğru değer.** `V` içindeki her sayı bir başlangıç noktasıdır; yatırımcı/operatör tartışmasıyla değişebilir. Bir sayının "varsayılan" olması onu ayrıcalıklı kılmaz.
3. **Gelecekteki her değişiklik slider/preset eklemeli, sonucu sabitlememeli.** Yeni bir parametre gerekiyorsa: bir slider ekle (veya mevcut bir `SCEN` presetini genişlet) ki canlı ayarlanabilir kalsın. Hesaplanmış bir sonucu asla statik markup'a gömme (`<div>₺X</div>` gibi sabit bir sayı yazıp geçme — `recalc()`'in dolduracağı bir id'ye veya bir formüle bağla).
4. **Yeni bir doc sayfası veya tablo satırı eklerken önce sor:** "Bu senaryoya özel mi, yoksa her senaryoda geçerli mi?" Senaryoya özel olan her şey senaryo adıyla etiketlenmeli.

Bu ilke `metodoloji.html`/`formula-validation.html` gibi "doğrulama katmanı" sayfaları için özellikle bağlayıcıdır: bu sayfalar canlı modelin gerçek formüllerini ve committed default'ları göstermek zorundadır, güncelliğini yitirmiş sabit sayılarla değil.

---

## Proje Kimliği

**Ne yapıyoruz:** Osteoid Merkezleri Ltd. Şti. klinik yatırım projesine yönelik, yatırımcı sunumunda kullanılacak interaktif finansal dashboard.
**Hedef kullanıcı:** Potansiyel yatırımcılar (hekim ortak, angel, sağlık grubu). Teknik değil; net rakamlar, görsel sunum.

---

## Çok Sayfalı Yapı

Proje **tek dosya değil**, birbirine nav-bar ve prev/next linkleriyle bağlı birden fazla HTML sayfasından oluşuyor. Paylaşılan JS mantığı `shared.js` içinde (tüm sayfalar bunu yükler); ayrı bir `style.css` yok, stiller sayfa içi `<style>` bloklarında.

⚠ Dosya adları **İngilizce** — aşağıdaki tablo gerçek dosya adlarını yansıtır, eski Türkçe adlar (`pazar.html`, `kurulum.html` vb.) artık mevcut değil.

### Ana nav bar (8 sayfa — `initLayout()` / `shared.js`)
| Dosya | Nav etiketi | PAGE_ID | İçerik |
|---|---|---|---|
| `index.html` | Summary | `index` | Ana özet tablosu, kümülatif K&Z |
| `market.html` | Market & Competition | `pazar` | Ürün segmentleri, fiyatlama, pazar yapısı |
| `korse.html` | Brace Ramp | `korse` | Aylık korse satış rampası (sürükle-bırak grafik) |
| `expenses.html` | Expenses | `giderler` | Setup/Fixed/Periodic sekmeleri — gider girişlerinin ana sayfası |
| `growth.html` | Multi-Year Plan | `buyume` | Konsolide büyüme senaryosu (1→2 klinik + SGK) |
| `investor.html` | Investor & Agreement | `yatirimci` | Yatırım aracı seçenekleri, DCF, getiri tablosu |
| `captable.html` | Cap Table | `captable` | Ortaklık yapısı, dilution |
| `methodology.html` | Methodology & Validation | `metodoloji` | Varsayımlar, formül doğrulama (tab'lı) |

### Detaylı model / yardımcı sayfalar (nav bar'da değil, prev/next zinciriyle veya alt sayfa olarak bağlı)
| Dosya | PAGE_ID | İçerik | Nasıl ulaşılır |
|---|---|---|---|
| `setup.html` | `kurulum` | Kurulum gider kalemleri (expenses.html'in Setup sekmesiyle aynı state'i paylaşır) | korse.html → setup.html → fixed.html zinciri |
| `fixed.html` | `sabit` | Aylık sabit maliyet tablosu | setup.html → fixed.html → periodic.html |
| `periodic.html` | `donemsel` | Çeyreklik/dönemsel maliyet kalemleri (sürükle-bırak grafik) | fixed.html → periodic.html → index.html |
| `competition.html` | `rekabet` | Rakip analizi | market.html/growth.html → competition.html |
| `formula-validation.html` | `saglamasayfasi` | methodology.html'in tab'lı içeriğinin standalone/tek-sayfa hali | growth.html/competition.html → formula-validation.html |
| `agreement.html` | `sozlesme` | Yatırım sözleşmesi şartları | investor.html/competition.html → agreement.html |

**Not:** `setup.html`/`fixed.html`/`periodic.html` ile `expenses.html` aynı `V` alanlarını okur/yazar (örn. ikisi de `kira`, `operatorM` slider'larına sahip, aynı id'ler farklı sayfalarda tekrar eder) — biri değişirse diğeri de kontrol edilmeli.

**Snapshot:** `saveSnapshot()` ile alınan snapshot'lar tek dosyaya export edilir (bağımsız HTML).

---

## Şirket Yapısı — Bağlam

### Osteoid A.Ş. (Ana Şirket)
- Medtech; İTÜ Arı Teknokent TGB kiracısı
- 2025 finansalları: Brüt satış ₺10M, net kâr ₺5,07M, öz kaynak ₺22,15M
- Gelirin %92,5'i yurtdışı (KiMedix GmbH üzerinden EUR)
- Kurumlar vergisi: ₺0 (TGB istisnası, proje no 92160, 31.12.2025'te sona erdi)
- Ortaklık: Deniz Karaşahin %89, Vestel Ventures %10,42 (çıkış müzakeresi sürüyor)

### Osteoid Merkezleri Ltd. Şti. (Klinik İştiraki — yeni kurulacak)
- Osteoid A.Ş. iştirak olarak kuracak
- Bu dashboard bu şirketin yatırım sürecine hizmet ediyor
- TGB muafiyeti bu şirket için geçerli **değil**
- KDV muafiyeti var: Ortez satışlarında %0 (KDV Kanunu 17/4-s)
- Kurumlar vergisi: %25

### Ürün Altyapısı
- **Turnkey:** AI destekli ortez CAD/CAM + 3D baskı platformu
- **Bracesys:** Modüler, yeniden yapılandırılabilir ortez platformu (aktif patent portföyü)
- **KiMedix GmbH:** 16 ülke dağıtım ortağı (Stripe üzerinden EUR gelir)

---

## Klinik İş Modeli — Parametreler (defaults + slider aralıkları)

Aşağıdaki her değer bir **default**'tur, "doğru fiyat" değildir. Slider aralığı, o parametrenin dashboard'da hangi bantta canlı ayarlanabildiğini gösterir.

### Ürün fiyatları (`V.korseF_*`, `market.html`)
| Ürün kodu | Default (₺) | Slider aralığı | Adım |
|---|---|---|---|
| `korseF_stdR` (Std-No Rep.) | 27.000 | 20.000–60.000 | 500 |
| `korseF_stdRl` (Std-Reported) | 35.000 | 20.000–60.000 | 500 |
| `korseF_delik` (Perf+Rep.) | 55.000 | 20.000–60.000 | 500 |
| `korseF_sens` (Sensor+Rep.) | 50.000 | 20.000–80.000 | 500 |
| `korseF_sensDelik` (Sns+Rep+Perf) | 65.000 | 20.000–80.000 | 500 |

### Royalty (`V.royaltyEur`, `methodology.html`)
- Slider: **0–150 (€/korse)**, default **€75**, adım 5.
- ⚠ **Royalty yapısı henüz kesinleşmedi.** `royaltyEur=0` geçerli bir senaryo durumudur, eksik veri değildir. Sensitivity panelinde ratio-tabanlı değil, mutlak (absolute) min/max kullanır — çünkü 0 baz alınırsa oran-tabanlı ölçekleme min/max'ı tek noktaya çökertir.

### Operatör maaşı (`V.operatorM`, `fixed.html` + `expenses.html`)
- **Ay 1'den itibaren her zaman aktif** — eşiğe/başlangıç ayına bağlı değil.
- Slider: **100.000–350.000 (₺, net)**, default **200.000**, adım 5.000. SGK çarpanı (`sgkCarpan`, default 1,6) ile brütleşir.

### Reklam / Pazarlama
- **Tek reklam girdisi `donemsel.reklam`'dır** (Periodic Costs sayfasındaki sürükle-bırak grafik). Ayrı, sabit bir reklam bütçesi kalemi **yoktur** (eski `reklamSabit` kaldırıldı).
- `V.reklamCarpan` (default **1.0**) bu değeri çarpan bir duyarlılık (sensitivity) parametresidir — Sensitivity panelinden **0,25–3,0** aralığında ayarlanır. 1,00 = ölçekleme yok, ikinci bir bütçe değil.
- P&L'deki `Advertising` terimi = `donemsel.reklam[ay] × reklamCarpan`. `V.kongre` şeridi (drag-chart senkronu) bu terimle çakışmasın diye ham `donemsel.reklam` değeri ayrıca netlenir.

### Ekipman sahipliği (`V.ekipmanOsteoidden`, `setup.html` + `expenses.html`)
- Boolean toggle, default **true**.
- `true`: 3D yazıcı ve robot kol Osteoid A.Ş. tarafından intercompany transfer olarak sağlanır — klinik kurulum maliyetine hiç girmez (ana yatırım geri döndükten sonra ekipman piyasa fiyatının %50'sinden kliniğe devredilir).
- `false`: Klinik ekipmanı kendisi satın alır — capex kurulum maliyetine dahil olur.

### İsimlendirilmiş senaryo presetleri (`SCEN`, `shared.js`)
`loadScen(key, btn)` fonksiyonu `SCEN_SLIDER_KEYS` listesindeki alanları günceller — bir preset sadece kendi ilgili olduğu slider'lara dokunur (setup preseti gelir varsayımlarını etkilemez, tersi de geçerli).

| Preset key | Buton | Kurulum maliyeti | Parametre seti |
|---|---|---|---|
| `leanSetup` | "Lean setup (~€39K)" | **~€39K** | `kira:150000, depozito:150000, emlakci:80000, m2:200, tadilatM2:4000, dekoM2:2000, mobilya:400000, ruhsat:90000, ekipmanOsteoidden:true` |
| `fullSelfOwned` | "Full self-owned (~€219K)" | **~€219.653** | `kira:250000, depozito:250000, emlakci:500000, m2:360, tadilatM2:7000, dekoM2:6750, mobilya:300000, ruhsat:100000, ekipmanOsteoidden:false` |

İki buton da `setup.html` ve `expenses.html`'de bulunur. Hiçbiri "doğru" değildir — biri başlangıç noktası olarak seçilip slider'larla devam edilir.

⚠ `shared.js`'de ayrıca `baz`/`iyimser`/`kotu` adında üç gelir-senaryosu presetı da tanımlı (`korseF`, `korse` rampası, `royaltyEur` farklarıyla) ama şu an hiçbir sayfada buton olarak bağlı değil — sadece kod seviyesinde erişilebilir. Bir UI eklenmeden "aktif" sayılmamalı.

### EUR/TRY kuru (`V.eurKur`)
- Default **53,07**, canlı ayarlanabilir (header'daki `eurRateInput` widget'ı, `investor.html` katman header'ı).
- `checkLiveEurRate()` / `fetchEurRate()` ile canlı kur çekilebilir (30 dakikada bir otomatik yenilenir), ama kullanıcı manuel override edebilir.
- Gelir EUR, maliyet TRY — bu ayrım dashboard'da korunmalı; `eurKur` değiştiğinde her iki taraf da tutarlı güncellenmeli.

### Büyüme Motoru
- Temel sürücü: aktif hekim sayısı (korse adedi değil)
- Hekim başına ortalama: 3,5 korse/ay (öngörü, referans veri yok)

### SGK Kanalı (Yıl 2+)
- SGK bedeli: ₺17.500/korse, tahsilat 60–90 gün gecikme
- Yıl 1'de kasıtlı olarak dışarıda — önce özel kanalda model doğrulanır

---

## Kritik Kırmızı Çizgiler (değiştirme)

Bu projenin hiçbir senaryosunda aşağıdakiler değişmez:

1. TGB statüsü Osteoid A.Ş.'de her koşulda korunur
2. KiMedix sözleşmesi etkilenmez
3. Bracesys ayrı sermaye olayı olarak saklanır — bu yatırımla karıştırılmaz
4. Deniz çoğunluk kontrolünü kaybetmez

---

## Dikkat Edilecek Konular

### Dil ve Ton
- Dashboard sayfaları İngilizce (bkz. dosya adları/title'lar); bu context dosyası (CLAUDE.md) Türkçe.
- Yatırımcı notu tonu: güvenilir, iddiadan kaçınan, "öngörü"/"senaryo"/"değişebilir" notlarını koru.
- Rakamlar tablo/grafik öncelikli, düz metin minimum.

### Varsayım Şeffaflığı
Her önemli rakamın yanında ⚠ öngörü ibaresi veya senaryo etiketi bulunmalı:
- Hekim başına 3,5 korse/ay → referans veri yok, öngörü
- Royalty €75/korse → yapı henüz kesinleşmedi, €0 dahil her değer geçerli senaryo
- SGK 60–90 gün tahsilat gecikmesi → operatör deneyimiyle doğrulanmalı
- Kurulum maliyeti (~€39K veya ~€219K) → hangi preset seçilirse o, ikisi de "doğru" değil

### Vergi
- Klinik Ltd.: %25 KV, KDV muaf (ortez satışı)
- Ana şirket TGB muafiyeti Klinik Ltd.'ye geçmez

### `localStorage` cache ve `V._version`
- `V` state'i `localStorage['osteoid_V']`'ye persist edilir. `V._version` alanı değiştiğinde eski cache otomatik invalidate olur (bkz. `shared.js` başındaki restore bloğu).
- **Kural:** `V`'nin committed default'larına dokunan her değişiklikte (yeni alan, silinen alan, değer değişikliği) `_version`'ı bir artır — aksi halde kullanıcıların tarayıcısındaki eski `localStorage` yeni default'ları maskeler.

---

## Görev Kısalımı

Sana bir görev geldiğinde:

1. Hangi sayfayı/dosyayı etkileyeceğini belirle (`index.html`, `korse.html`, `shared.js` vb. — yukarıdaki gerçek dosya adları tablosuna bak).
2. Değişikliği minimal tut — sadece istenen kısmı değiştir.
3. `shared.js` üzerindeki değişiklikler tüm sayfaları etkiler, dikkatli ol.
4. Sayısal değişiklik varsa tablolar arası tutarlılığı kontrol et (index ↔ korse ↔ growth ↔ methodology/formula-validation).
5. **Yeni bir sayı/varsayım eklerken statik olarak yazma — slider veya `SCEN` preset alanı ekle**, `recalc()`/`computeYear1()` üzerinden hesaplat. Bir sayfa bir sonucu göstermek zorundaysa ya canlı id'ye bağla ya da hangi senaryoya ait olduğunu açıkça etiketle.
6. `V`'nin committed default'ları değiştiyse `_version`'ı artırmayı unutma.
7. Kırmızı çizgilerden birini etkileyen bir değişiklik istenirse önce sor.

---

Bu dosya Osteoid Claude Code oturumları için bağlam dosyasıdır. Güncellemeler için Deniz Karaşahin'e danış.
