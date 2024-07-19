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
    header: "Liens"
    info: "La description de votre page de liens."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Création de sites web"
      type: id_webdesign
      color: "#F4A273"
    - title: "La programmation"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow est un site Web de questions et réponses pour les programmeurs professionnels et enthousiastes."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "Transformez votre texte brut en sites Web et blogs statiques."
    - type: id_jekyiiliquid
      title: "Aide-mémoire Jekyll"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "Il y a tellement de variables et de filtres Jekyll à retenir qu'il peut être difficile de tout garder en tête. Cette feuille aide-mémoire sert de référence rapide de tout ce que Jekyll peut faire."
    - type: id_jekyiiliquid
      title: "Liquid pour les designers"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "Wiki Liquid pour les Designers sur GitHub."
    - type: id_jekyiiliquid
      title: "Liquid pour programmeurs"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "Wiki Liquid pour les programmeurs sur GitHub."
    - type: id_jekyiiliquid
      title: "Référence liquid"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid est un langage de gabarit créé par Shopify et écrit en Ruby. Il est maintenant disponible en tant que projet open source sur GitHub."

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools propose des didacticiels, des références et des exercices en ligne gratuits dans toutes les principales langues du Web. Couvrant des sujets populaires comme HTML, CSS, JavaScript, Python, SQL, Java et bien d'autres."
---
