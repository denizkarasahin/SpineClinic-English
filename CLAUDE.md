# CLAUDE.md — Osteoid Yatırımcı Paneli

Bu dosya Claude Code'un bu projeyi anlaması için bağlam sağlar. Her oturumda önce bu dosyayı oku.

---

## Proje Kimliği

**Ne yapıyoruz:** Osteoid Merkezleri Ltd. Şti. klinik yatırım projesine yönelik, yatırımcı sunumunda kullanılacak interaktif finansal dashboard.  
**Hedef kullanıcı:** Potansiyel yatırımcılar (hekim ortak, angel, sağlık grubu). Teknik değil; net rakamlar, görsel sunum.

---

## Çok Sayfalı Yapı

Proje artık **tek dosya değil**, birbirine nav-bar ile bağlı birden fazla HTML sayfasından oluşuyor. Paylaşılan stiller `style.css`, paylaşılan JS mantığı `shared.js` içinde.

| Dosya | Başlık | İçerik |
|---|---|---|
| `index.html` | 12 Aylık Özet | Ana özet tablosu, kümülatif K&Z |
| `pazar.html` | Pazar & Ürün Mix | Ürün segmentleri, fiyatlama, pazar yapısı |
| `korse.html` | Korse Rampası | Aylık korse satış rampası (sürükle-bırak grafik) |
| `kurulum.html` | Kurulum Giderleri | Klinik açılış yatırım kalemleri |
| `sabit.html` | Sabit Giderler | Aylık sabit maliyet tablosu |
| `donemsel.html` | Dönemsel Giderler | Çeyreklik/dönemsel maliyet kalemleri |
| `buyume.html` | 3 Yıllık Plan | Konsolide büyüme senaryosu (1→2 klinik + SGK) |
| `metodoloji.html` | Metodoloji | Varsayımlar, kaynak notlar, açıklamalar |
| `yatirimci.html` | Yatırımcı | Yatırım aracı seçenekleri, yatırımcı profilleri |
| `style.css` | — | Tüm sayfalarda ortak stiller |
| `shared.js` | — | Tüm sayfalarda ortak hesaplama ve render mantığı |

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

## Klinik İş Modeli — Sayılar

### Fiyatlama (öngörü, değişebilir)
| Ürün | Dönem | Fiyat |
|---|---|---|
| Skolyoz korsesi | Ay 1–5 | ₺30.000 |
| Delikli korse | Ay 6+ | ₺38.000–42.000 |
| Sensörlü korse | Ay 6+ | ₺45.000–50.000 |

- Malzeme maliyeti: ₺50/korse  
- Net gelir (özel kanal, %25 hekim komisyonu sonrası): ₺22.450/korse

### Büyüme Motoru
- Temel sürücü: aktif hekim sayısı (korse adedi değil)
- Hekim başına ortalama: 3,5 korse/ay (öngörü, referans veri yok)
- Başabaş: ~Ay 4 (aylık net pozitif)
- Kümülatif pozitif: ~Ay 11

### Finansal Hedefler (3 yıl)
| Metrik | Değer |
|---|---|
| Yıl 1 korse hacmi | 325 adet |
| Yıl 1 net gelir | ~₺7,45M |
| Royalty / Yıl | ~€24.375 |
| Yıl 3 (2 klinik + SGK) | ~€634K |

### Referans Fon İhtiyacı (~€200K, ilk merkez)
| Kalem | Tutar |
|---|---|
| Klinik kurulum | ~€39K |
| Çalışma sermayesi (12 ay) | ~€50K |
| Hekim kazanımı | ~€30K |
| Sensörlü korse Ar-Ge başlangıcı | ~€50K |
| HQ tampon | ~€15K |
| İhtiyat | ~€16K |

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
- Dashboard Türkçe
- Yatırımcı notu tonu: güvenilir, iddiadan kaçınan, "öngörü" ve "değişebilir" notlarını koru
- Rakamlar tablo/grafik öncelikli, düz metin minimum

### Varsayım Şeffaflığı
Her önemli rakamın yanında ⚠️ öngörü ibaresi veya küçük dipnot bulunmalı:
- Hekim başına 3,5 korse/ay → referans veri yok, öngörü
- Ay 4 başabaş → hekim rampasına bağlı
- SGK 60–90 gün tahsilat gecikmesi → operatör deneyimiyle doğrulanmalı

### Kur Dinamikleri
- Gelir EUR, maliyet TRY — dashboard'da bu ayrım korunmalı
- EUR/TRY kuru varsayımı değişebilir, varsa göster

### Vergi
- Klinik Ltd.: %25 KV, KDV muaf (ortez satışı)
- Ana şirket TGB muafiyeti Klinik Ltd.'ye geçmez

---

## Görev Kısalımı

Sana bir görev geldiğinde:

1. Hangi sayfayı/dosyayı etkileyeceğini belirle (`index.html`, `korse.html`, `shared.js` vb.)
2. Değişikliği minimal tut — sadece istenen kısmı değiştir
3. `shared.js` üzerindeki değişiklikler tüm sayfaları etkiler, dikkatli ol
4. Sayısal değişiklik varsa tablolar arası tutarlılığı kontrol et (index ↔ korse ↔ buyume)
5. Kırmızı çizgilerden birini etkileyen bir değişiklik istenirse önce sor

---

Bu dosya Osteoid Claude Code oturumları için bağlam dosyasıdır. Güncellemeler için Deniz Karaşahin'e danış.
