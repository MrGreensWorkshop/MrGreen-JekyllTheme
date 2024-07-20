---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false


# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Bağlantılar"
    info: "Bağlantılar sayfanızın açıklaması."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Web Tasarımı"
      type: id_webdesign
      color: "#F4A273"
    - title: "Programlama"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow, profesyonel ve hevesli programcılar için bir soru-cevap sitesidir."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "Düz metninizi statik web sitelerine ve bloglara dönüştürün."
    - type: id_jekyiiliquid
      title: "Jekyll Komutları"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "Hatırlanması gereken çok fazla Jekyll değişkeni ve filtresi olduğu için hepsini kafanızda tutmak zor olabilir. Bu sayfa, Jekyll ile yapabileceğiniz her şeye hızlı bir referans olabilir."
    - type: id_jekyiiliquid
      title: "Tasarımcılar için Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "Tasarımcılar için Liquid GitHub wiki'si"
    - type: id_jekyiiliquid
      title: "Programcılar için Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "Programcılar için Liquid GitHub wiki'si"
    - type: id_jekyiiliquid
      title: "Liquid Referans"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid, Shopify tarafından oluşturulan ve Ruby'de yazılan bir şablon dilidir. Artık GitHub'da açık kaynaklı bir proje olarak mevcuttur."

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools, web'in tüm ana dillerinde ücretsiz çevrimiçi eğitimler, referanslar ve alıştırmalar sunar. HTML, CSS, JavaScript, Python, SQL, Java ve çok daha fazlası gibi popüler konuları kapsar."
---
