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
    header: "Enlaces"
    info: "Su descripción de la página de enlaces."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Diseño web"
      type: id_webdesign
      color: "#F4A273"
    - title: "Programación"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow es un sitio web de preguntas y respuestas para programadores profesionales y entusiastas.."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "Transforme su texto plano en sitios web y blogs estáticos."
    - type: id_jekyiiliquid
      title: "Hoja de trucos de Jekyll"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "Hay tantas variables y filtros de Jekyll para recordar y puede ser difícil mantenerlo todo en tu cabeza.Esta hoja de trucos sirve como una referencia rápida de todo lo que Jekyll puede hacer."
    - type: id_jekyiiliquid
      title: "Liquid para diseñadores"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "Liquid para diseñadores wiki en GitHub."
    - type: id_jekyiiliquid
      title: "Liquid Para programadoras"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "Liquid Para programadoras wiki en GitHub."
    - type: id_jekyiiliquid
      title: "Referencia Liquid"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid es un lenguaje de plantilla creado por Shopify y escrito en Ruby. Ahora está disponible como un proyecto de código abierto en GitHub."

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools ofrece tutoriales, referencias y ejercicios en línea gratuitos en todos los idiomas principales de la web. Cubriendo temas populares como HTML, CSS, JavaScript, Python, SQL, Java y muchos más."
---
