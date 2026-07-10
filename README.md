# Kütüphane Projesi

Bu proje, The Odin Project müfredatı kapsamında HTML, CSS ve JavaScript kullanılarak geliştirilmiş basit bir kütüphane uygulamasıdır.

## Proje Hakkında

Bu uygulama sayesinde kullanıcılar kendi kitap listelerini oluşturabilir, yeni kitap ekleyebilir, kitapları silebilir ve kitapların okunma durumlarını değiştirebilir.

Bu projede JavaScript ile nesne oluşturma, constructor fonksiyonları, diziler, DOM manipülasyonu ve kullanıcı etkileşimleri üzerine pratik yapılmıştır.

## Özellikler

- Yeni kitap ekleme
- Kitapları sayfada dinamik olarak gösterme
- Kitap bilgilerini nesne olarak saklama
- Kitapları bir dizi içerisinde yönetme
- Her kitap için benzersiz ID oluşturma (`crypto.randomUUID()`)
- HTML `<dialog>` elementi ile form penceresi oluşturma
- Kitap silme (Remove)
- Kitapların okunma durumunu değiştirme (Toggle Read)
- Yapılan değişikliklerden sonra ekranı otomatik güncelleme

## Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (ES6)

## Öğrenilen JavaScript Konuları

Bu projede aşağıdaki konular üzerinde çalışılmıştır:

- Constructor fonksiyonları
- Nesneler (Objects)
- Prototype kullanımı
- Diziler (Arrays)
- `forEach()`, `findIndex()`, `splice()` gibi dizi metotları
- DOM elementleri oluşturma ve değiştirme
- Event listener kullanımı
- Form işlemleri
- `event.preventDefault()` kullanımı
- Data attribute kullanımı
- Dinamik HTML oluşturma

## Nasıl Çalışır?

Her kitap, `Book` isimli constructor fonksiyonu kullanılarak bir nesne olarak oluşturulur.

Oluşturulan kitaplar `myLibrary` isimli dizi içerisinde saklanır.

`displayBooks()` fonksiyonu, dizide bulunan kitapları alarak sayfa üzerinde kartlar halinde gösterir.

Kullanıcı bir kitap eklediğinde, sildiğinde veya okuma durumunu değiştirdiğinde veri güncellenir ve ekran tekrar oluşturularak güncel bilgiler gösterilir.

## Gelecekte Yapılabilecek Geliştirmeler

- Local Storage kullanarak kitapları sayfa yenilense bile saklamak
- Kitap arama özelliği eklemek
- Kitap kategorileri eklemek
- Tasarımı geliştirmek
- Daha fazla kullanıcı özelliği eklemek

## Proje Durumu

Tamamlandı ✅
