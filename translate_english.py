from pathlib import Path
import re
root = Path(r'c:\Users\deniz\Desktop\merkez\SpineClinic-English')
replacements = [
    ('lang="tr"', 'lang="en"'),
    ('<title>Osteoid — 12 Aylık Özet</title>', '<title>Osteoid — 12-Month Summary</title>'),
    ('12 Aylık Özet', '12-Month Summary'),
    ('Pazar & Ürün Mix', 'Market & Product Mix'),
    ('Pazar & Rekabet', 'Market & Competition'),
    ('3 Yıllık Plan', '3-Year Plan'),
    ('3 Yıllık Büyüme Planı', '3-Year Growth Plan'),
    ('Aylık Sabit Giderler', 'Monthly Fixed Costs'),
    ('Dönemsel Giderler', 'Periodic Costs'),
    ('Kurulum Giderleri', 'Setup Costs'),
    ('Metodoloji', 'Methodology'),
    ('Yatırımcı', 'Investor'),
    ('Klinik pazar', 'Clinic market'),
    ('Yıllık net gelir', 'Annual net revenue'),
    ('Kümülatif yıl sonu', 'Year-end cumulative'),
    ('Aylık başabaş', 'Monthly break-even'),
    ('Kümülatif pozitif', 'Cumulative positive'),
    ('Kurulum gideri', 'Setup cost'),
    ('Baskı maliyeti/adet', 'Printing cost per unit'),
    ('Royalty / yıl', 'Royalty / year'),
    ('Net marj / korse', 'Net margin / brace'),
    ('Toplam korse', 'Total braces'),
    ('Gelir & Gider', 'Revenue & Costs'),
    ('Gider Dağılımı', 'Cost Distribution'),
    ('Kümülatif', 'Cumulative'),
    ('Giderler', 'Costs'),
    ('Gider', 'Cost'),
    ('Pazar', 'Market'),
    ('Ürün', 'Product'),
    ('Rekabet', 'Competition'),
    ('Klinik', 'Clinic'),
    ('Hekim', 'Doctor'),
    ('Merkez', 'Center'),
    ('Korse', 'Brace'),
    ('Sabit', 'Fixed'),
    ('Dönemsel', 'Periodic'),
    ('Kurulum', 'Setup'),
    ('Yatırımcı', 'Investor'),
    ('Metodoloji', 'Methodology'),
    ('Kapsam', 'Scope'),
    ('Durum', 'Status'),
    ('Gizli', 'Confidential'),
    ('Yatırımcıya Özel', 'Investor-only'),
    ('İstanbul', 'Istanbul'),
    ('İzmir', 'Izmir'),
    ('Ankara', 'Ankara'),
    ('Ay 1', 'Month 1'),
    ('Ay 2', 'Month 2'),
    ('Ay 3', 'Month 3'),
    ('Ay 4', 'Month 4'),
    ('Ay 5', 'Month 5'),
    ('Ay 6', 'Month 6'),
    ('Ay 7', 'Month 7'),
    ('Ay 8', 'Month 8'),
    ('Ay 9', 'Month 9'),
    ('Ay 10', 'Month 10'),
    ('Ay 11', 'Month 11'),
    ('Ay 12', 'Month 12'),
]
for path in sorted(root.glob('*.html')):
    text = path.read_text(encoding='utf-8')
    original = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
        print(f'Updated {path.name}')
js_path = root / 'shared.js'
if js_path.exists():
    text = js_path.read_text(encoding='utf-8')
    if "toLocaleString('tr-TR')" in text:
        text = text.replace("toLocaleString('tr-TR')", "toLocaleString('en-US')")
        js_path.write_text(text, encoding='utf-8')
        print('Updated shared.js')
