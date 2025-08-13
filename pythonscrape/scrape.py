import requests
from bs4 import BeautifulSoup
import json
import os
from urllib.parse import urljoin
import time

def create_folders():
    """Gerekli klasörleri oluşturur"""
    if not os.path.exists('fotos'):
        os.makedirs('fotos')
        print("fotos/ klasörü oluşturuldu")

def download_image(img_url, filename):
    """Fotoğrafı indirir ve belirtilen dosya adıyla kaydeder"""
    try:
        # Fotoğraf URL'sini tam hale getir
        if img_url.startswith('/'):
            img_url = 'https://enfadavetiye.com' + img_url
        
        # Fotoğrafı indir
        response = requests.get(img_url, timeout=10)
        response.raise_for_status()
        
        # Dosya uzantısını belirle
        if '.' in img_url.split('/')[-1]:
            ext = '.' + img_url.split('.')[-1]
        else:
            ext = '.jpg'  # Varsayılan uzantı
        
        # Dosyayı kaydet
        filepath = os.path.join('fotos', filename + ext)
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✓ Fotoğraf indirildi: {filename}{ext}")
        return True
        
    except Exception as e:
        print(f"✗ Fotoğraf indirme hatası ({filename}): {e}")
        return False

def scrape_products(url, kategori):
    """Belirtilen URL'den ürün bilgilerini çeker"""
    print(f"\n{kategori} kategorisi için scraping başlıyor: {url}")
    
    try:
        # Sayfayı al
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # HTML'i parse et
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Ürün kapsayıcılarını bul
        product_containers = soup.find_all('div', class_='VDA-32 Vera product')
        print(f"Toplam {len(product_containers)} ürün bulundu")
        
        products = []
        
        for i, container in enumerate(product_containers, 1):
            try:
                print(f"\nÜrün {i}/{len(product_containers)} işleniyor...")
                
                # Ürün kodunu al
                strong_tag = container.find('strong')
                if not strong_tag:
                    print("✗ Ürün kodu bulunamadı, atlanıyor")
                    continue
                urun_kodu = strong_tag.get_text().strip()
                
                # Fiyatı al
                price_p = container.find('p')
                if not price_p:
                    print("✗ Fiyat bulunamadı, atlanıyor")
                    continue
                
                # Fiyat metnini birleştir (p etiketi içindeki metin + span)
                fiyat_parts = []
                for content in price_p.contents:
                    if hasattr(content, 'get_text'):
                        fiyat_parts.append(content.get_text().strip())
                    elif isinstance(content, str):
                        fiyat_parts.append(content.strip())
                
                fiyat = ' '.join(fiyat_parts).strip()
                
                # Fotoğraf URL'sini al
                img_tag = container.find('img')
                if img_tag and img_tag.get('src'):
                    img_url = img_tag.get('src')
                    
                    # Fotoğrafı indir
                    download_image(img_url, urun_kodu)
                else:
                    print(f"✗ Fotoğraf URL'si bulunamadı: {urun_kodu}")
                
                # Ürün bilgilerini listeye ekle
                product_data = {
                    "urun_kodu": urun_kodu,
                    "fiyat": fiyat
                }
                products.append(product_data)
                
                print(f"✓ Ürün işlendi: {urun_kodu} - {fiyat}")
                
                # İstekleri yavaşlat (server'ı yormamak için)
                time.sleep(0.5)
                
            except Exception as e:
                print(f"✗ Ürün işleme hatası: {e}")
                continue
        
        return products
        
    except Exception as e:
        print(f"✗ Sayfa erişim hatası ({url}): {e}")
        return []

def main():
    """Ana fonksiyon - scraping işlemini yönetir"""
    print("Web Scraping işlemi başlıyor...")
    
    # Gerekli klasörleri oluştur
    create_folders()
    
    # Hedef URL'ler ve kategoriler
    urls_and_categories = [
        ("https://enfadavetiye.com/tr/Product/List", "Normal"),
        ("https://enfadavetiye.com/tr/Product/ListSunnet", "Sunnet")
    ]
    
    # Tüm verileri tutacak liste
    all_data = []
    
    # Her URL için scraping yap
    for url, kategori in urls_and_categories:
        products = scrape_products(url, kategori)
        
        if products:
            category_data = {
                "kategori": kategori,
                "urunler": products
            }
            all_data.append(category_data)
            print(f"\n✓ {kategori} kategorisi tamamlandı: {len(products)} ürün")
        else:
            print(f"\n✗ {kategori} kategorisinde ürün bulunamadı")
    
    # JSON dosyasına kaydet
    try:
        with open('urunler.json', 'w', encoding='utf-8') as f:
            json.dump(all_data, f, ensure_ascii=False, indent=2)
        print(f"\n✓ Tüm veriler 'urunler.json' dosyasına kaydedildi")
        
        # Özet bilgileri göster
        total_products = sum(len(cat["urunler"]) for cat in all_data)
        print(f"\n--- ÖZET ---")
        print(f"Toplam kategori sayısı: {len(all_data)}")
        print(f"Toplam ürün sayısı: {total_products}")
        for cat in all_data:
            print(f"  {cat['kategori']}: {len(cat['urunler'])} ürün")
        
    except Exception as e:
        print(f"✗ JSON kaydetme hatası: {e}")

if __name__ == "__main__":
    main()