[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ja.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [[français](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-fr.md#readme)] [[简体中文](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-zh.md#readme)] [[한국어](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ko.md#readme)] [Türkçe]

## Mr. Green Jekyll Teması

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="Beni GitHub Sponsor'da destekleyin" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "Beni GitHub Sponsor'da destekleyin")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Beni Patreon'da destekleyin" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "Beni Patreon'da destekleyin")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Ko-fi'den bahşiş ver" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "Ko-fi'den bahşiş ver")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/tr" style="font-weight: bold;" >Canlı demo için buraya tıklayın</a>
</div>


### Giriş

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme), [Jekyll](https://jekyllrb.com/) ile oluşturulmuş ve [GitHub Pages](https://pages.github.com/) ile tamamen uyumlu çok dilli bir temadır.

<!-- outline-end -->

Web sitemi yapacaktım ve bunu şablon olarak yaparsam açık kaynak topluluğuyla paylaşabileceğimi düşündüm. Bu yüzden bu temayı oluşturmaya karar verdim ve bir araya getirmek için çok uğraştım. Eğer isterseniz [çalışmalarıma destek olabilirsiniz](#çalışmalarıma-destek-olabilirsiniz). Teşekkürler.

### Özellikler

- Çok dilli web sitesi
  - İngilizce (varsayılan), Japonca, Brezilya Portekizcesi, Fransızca, Çince, Korece, Türkçe
- Önerilen dil teklifi özelliği
- Otomatik gezinme düğmesi ekleyicisi (Açma/kapama özelliği ile)
- `Home`, `About`, `Archives`, `Post-list`, `Links`, `Projects` ve daha fazlası için hazır şablonlar
- Renk şeması değiştirme seçenekleri (Koyu ve Açık renk)
- Otomatik İletişim seçeneği ekleyicisi
- Otomatik resim yönlendiricisi (resimler için tam yol eklemenize gerek yoktur. Önüne `:` eklemeniz yeterlidir.)
- Yavaş resim yükleyici, resim görüntüleyici
- Creative Commons lisanslamasına sahip altbilgi özelliği
- İçindekiler tablosu icin taşınabilir kutu
- Makale Paylaşımı Seçenekleri
- Makaleleleri Kategori veya Etiketlere göre listeleme
- Makale için yorum özelliği
  - [Giscus](https://giscus.app)
  - [Disqus](https://disqus.com)
- Seçilebilir sayfalandırma veya kaydırma ile yükleme
- Site haritası özelliği
- Arama Motoru Optimizasyonu (SEO)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me/)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- Analitik (Google Analytics)
- Çerez izni özelliği
- İletişim formu özelliği (Google Forms)
- Site Arama özelliği
- Dosya boyutunu küçük tutmak için kod sıkıştırma (`HTML` `JS` `SCSS`)
- Mobil Uygulama desteği
- Mobil cihaz dostu (Android ve IOS'ta test edilmiştir)
- Geliştiriciler için iyi organize edilmiş klasör yapısı (Chrome, Safari, FireFox'ta test edilmiştir)

### Kurulum

#### GitHub Pages

1. [Bu repo'yu forklayın](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork).
1. \_config.yml dosyasını açın ve `url`'yi aşağıdaki gibi değiştirin ve değişiklikleri pushlayın.

   ```yaml
   url: "https://your_github_user_name.github.io"
   ```

1. Repo adını `your_github_user_name.github.io` olarak yeniden adlandırın.
1. Reponun deploy durumunu `Actions` sekmesininde kontrol edin.
1. Gösterge yeşile döndüğünde siteniz `https://github_user_name.github.io` adresinde çalışır hale gelecektir.

#### Yerel Derleme

1. [Jekyll]((https://jekyllrb.com/docs/installation/))'ı işletim sisteminize yükleyin.
1. Repoyu kopyalayın veya [indirin](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest), komut isteminde klasöre gidip `bundle install` komutunu çalıştırın.
1. `bundle exec jekyll serve --watch --host 0.0.0.0 --safe` komutunu kullanarak derleyin,
    - `--host 0.0.0.0` parametresi ile aynı lan üzerinden web sunucusuna erişebilirsiniz.
    - `--safe` parametresi ile hiçbir 3. parti eklentinin eklenmediğinden emin olabilirsiniz. (GitHub sayfalarının geliştirilmesi için)
1. Sayfanız `0.0.0.0:4000/` adresinde çalışır olacaktır.

### Dokümantasyon

YouTube'da [Mr. Green Teması çalma listesi](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD)'ne göz atın.

### Teşekkür

Bana web sitemi kurma fırsatı veren bu projelere teşekkür etmek istiyorum.

- [Jekyll](https://jekyllrb.com/) statik bir site oluşturucudur. Favori işaretleme dilinizde yazılmış metni alır ve statik bir web sitesi oluşturmak için düzenleri kullanır. Sitenin görünümünü ve tarzını, URL'leri, sayfada görüntülenen verileri ve daha fazlasını değiştirebilirsiniz. Gönüllüler tarafından sürdürülen harika bir proje.

- [GitHub Pages](https://pages.github.com/) Doğrudan GitHub reponuzdan barındırılır. Sadece değişiklikleri pushlayın ve site otomatik olarak oluşturulacaktır.

Bu proje üzerinde çalışırken faydalı bulduğum sitelerden bazıları. [Bağlantılar sayfası](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/tabs/links.html).

### Çalışmalarıma Destek Olabilirsiniz

Sıfırdan proje oluşturmak çok zaman alır. Bu tür projelere devam edebilmem ve herkes için yeni içerikler üretebilmem için bana destek olmayı düşünürseniz çok sevinirim.

- [GitHub Sponsors](https://github.com/sponsors/MrGreensWorkshop "Beni GitHub Sponsor'da destekleyin") larimdan biri olabilirsiniz. (aylik yada bir kez)
- [Patreons](https://patreon.com/MrGreensWorkshop "Be my Patron") larımdan biri olabilirsiniz. (aylik)
- [Ko-fi](https://ko-fi.com/MrGreensWorkshop "Ko-fi'den bahşiş ver")'den bahşiş verebilirsiniz. (bir kez)

### Katkıda Bulunmak

Çekme İstekleri mutlulukla kabul edilir. Lütfen sorun ve Çekme İsteği şablonlarındaki talimatları kontrol ediniz.

### Katkıda Bulunanlar

Katkılarınız için teşekkür ederiz!

- Brezilya Portekizcesi çevirisi [Vitor DallAcqua](https://github.com/fandangos) tarafından yapılmıştır.
- Fransızca çeviri düzeltmeleri [Jean-Philippe Morissette](https://github.com/JPMorissette) tarafından yapılmıştır.
- Çince çevirisi [fairycn](https://github.com/fairycn) tarafından yapılmıştır.
- Türkçe çevirisi [Onur Ergünay](https://github.com/onurergunay) tarafından yapılmıştır.

### Lisans

[MIT lisansında](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt) belirtildiği gibi, lisansı ve telif hakkı bildirimini eklediğiniz sürece bu temayı her yerde kullanabilirsiniz.

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

Lütfen sayfama bağlantı ekleyin veya altbilgiye "Pwrd by Mr. Green" bağlantısını bırakın, böylece çalışmalarımdan dolayı destek alabileyim.

Teşekkür ederim!

### Diğer Lisanslar

Mr. Green Jekyll Teması, aşağıda yazılı kütüphaneleri içerir. Bu kütüphaneler olmasaydı bu projeyi mümkün kılamazdım.

| Kütüphane                             | dosya |
| :----------------------------------- | ---- |
| [jQuery v3.6.0](https://github.com/jquery/jquery/tree/3.6.0), Telif Hakkı [OpenJS Foundation](https://openjsf.org) ve diğer katkıda bulunanlara aittir. jQuery, MIT Lisansı şartları altında dağıtılmaktadır. | [jquery-3.6.0.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery-3.6.0.min.js) |
| [Bootstrap v3.3.7](https://github.com/twbs/bootstrap/tree/v3.3.7), Telif Hakkı (c) 2011-2016 Twitter, Inc. Bootstrap, MIT Lisansı şartları altında dağıtılmaktadır. | [bootstrap.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap.min.js), [bootstrap.min.css](assets/css/bootstrap.min.css) |
| [Bootstrap Table of Contents v0.4.1](https://github.com/afeld/bootstrap-toc/tree/v0.4.1), Telif Hakkı (c) 2015 Aidan Feldman. Bootstrap Table of Contents, MIT Lisansı şartları altında dağıtılmaktadır. | [bootstrap-toc.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap-toc.min.js), [bootstrap-toc.min.css](assets/css/bootstrap-toc.min.css) |
| [Font Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/v4.7.0), Telif Hakkı (c) 2017 Dave Gandy. Font Awesome yazı tipi [SIL OFL 1.1](http://scripts.sil.org/OFL) şartları altında dağıtılır. Font Awesome CSS, LESS ve Sass dosyaları [MIT Lisansı](https://opensource.org/licenses/mit-license.html) şartları altında dağıtılır. | [font-awesome.min.css](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/css/font-awesome.min.css), [FontAwesome](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/fonts/) |
| [Lozad.js v1.16.0](https://github.com/ApoorvSaxena/lozad.js/tree/v1.16.0), Telif Hakkı (c) 2017 Apoorv Saxena. Lozad.js, MIT Lisansı şartları altında dağıtılmaktadır. | [lozad.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/lozad.min.js) |
| [Magnific Popup v1.1.0](https://github.com/dimsemenov/Magnific-Popup/tree/1.1.0), Telif Hakkı (c) 2014-2016 Dmitry Semenov, http://dimsemenov.com. Magnific Popup, MIT Lisansı şartları altında dağıtılmaktadır. | [jquery.magnific-popup.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery.magnific-popup.min.js), [magnific-popup.css](assets/css/magnific-popup.css) |
| [Simple-Jekyll-Search v1.9.2](https://github.com/christian-fei/Simple-Jekyll-Search/tree/v1.9.2), Telif Hakkı (c) 2015 Christian Fei. Simple-Jekyll-Search, MIT Lisansı şartları altında dağıtılmaktadır. | [simple-jekyll-search-1.9.2.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/simple-jekyll-search-1.9.2.min.js) |
| [Compress HTML in Jekyll v3.1.0](https://github.com/penibelst/jekyll-compress-html/tree/v3.1.0), Telif Hakkı (c) 2014 Anatol Broder. Compress HTML in Jekyll, MIT Lisansı şartları altında dağıtılmaktadır. | [compress.liquid](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/_layouts/util/compress.liquid) |

[Mr. Green Jekyll Teması](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
