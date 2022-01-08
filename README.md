# Programming Homies! 👨🏻‍💻👩🏽‍💻

## Kullanılan Temel Bağımlılıklar
- React: UI kütüphanesi.
- Typescript: JS'in typed hali.
- React Router: Routing işlemlerini kolaylıştıran bağımlılık.
- Axios: HTTP Client'ımız.
- Framer Motion: Animasyon framework'ümüz.
- React Query: Sunucu ile sync olması gereken verileri yöneten bağımlılık.
- Zustand: Uygulama genelindeki state'leri yönetmeye yardımcı olan bağımlılık.

## Projenin Frontend Kurulumu
```bash
git clone git@github.com:ProgrammingHomies/Frontend.git
cd ./Frontend
cp .env.example .env
nano .env (Gerekli backend url'i girilir.)
npm install
npm start
```
## Proje Notları
- On the fly code highlighting için PrismJS kullanıyoruz ve kendi yazdığım bir hook(usePrism) ile temalar arasında geçebiliyoruz.
- Projemiz tamamen responsive ve karanlık - aydınlık tema destekliyor.
- Kullanıcıyı etkileyecek eye candy diyebileceğimiz animasyonlarımız var bazı component'ler üzerinde.
- Bir backend ile konuşuyor gibi yazıldı Frontend'in veri alışverişi yapan kısımları ancak mock data kullanıyoruz. `services/api` altındaki hook'lar incelenirse yorum satırlarını kaldırıp backend'e istek atılabileceği görülebilir.
- Auth servisinin data store'u ve ui'ı implemente edildi ancak backend'de bir karşılığı olmadığı için mock bir yapı var.
- Routing yapısı var ve düzgün çalışıyor. Kullanıcı login olmadıysa protected route'ları göremiyor.

## Proje Mimarisi

```
src
├── assets // Görsellerden font'lara statik dosyaların bulunduğu dizin.
├── components // Component'lerin bulunduğu dizin.
├── etc // i18n, constants, axios - firebase config'leri gibi şeyleri bulundurduğumuz dizin.
├── hooks // Hook'ların bulunduğu dizin.
├── pages // Uygulamadaki ekranların bulunduğu dizin.
├── providers // Uygulamanın her tarafına gitmesi gereken (genellikle 3rd party kütüphanelerin sağladığı) veri sağlayıcı yapıları koyduğumuz dizin.
├── services // API çağrısı yaptığımız fonksiyonların bulunduğu dizin.
├── stores // Zustand ile uygulama genelinde kullanacağımız verileri tuttuğumuz depoların bulunduğu dizin.
├── tests // Test'lerin bulunduğu dizin.
└── utils // Veri yapılarını eğip bükmek için yazdığımız utility fonksiyonlarının bulunduğu dizin.
```
