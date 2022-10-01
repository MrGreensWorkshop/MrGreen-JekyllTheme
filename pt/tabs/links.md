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
# if you enabled image_viewer_posts you don't need to enable this. This is only if image_viewer_posts = false
#image_viewer_on: true
# if you enabled image_lazy_loader_posts you don't need to enable this. This is only if image_lazy_loader_posts = false
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
    header: "Links"
    info: "Uma descrição para sua página de links."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Web Design"
      type: id_webdesign
      color: "#F4A273"
    - title: "Programação"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow é um site voltado para perguntas e respostas para professionais e entusiastas da programação."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "Transforme o seu simples texto em websites estáticos e blogs."
    - type: id_jekyiiliquid
      title: "Tabela rápida para Jekyll"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "Existem tantos filtros e variáveis em Jekyll para se lembrar que pode ser difícil lembrar de todos. Essa tabela serve como uma rápida referência para tudo que Jekyll é capaz de fazer."
    - type: id_jekyiiliquid
      title: "Liquid para Designers"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "Wiki do Liquid para Designers no GitHub"
    - type: id_jekyiiliquid
      title: "Liquid para Programadores"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "Wiki de Liquid para Programadores no GitHub"
    - type: id_jekyiiliquid
      title: "Referências de Liquid"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid é uma linguagem modelo create pelo Shopify e escrita em Ruby. Ela, agora, está disponível em código aberto no GitHub."

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools oferece tutoriais gratuitos, referências e exercícios nas linguagens mais importantes da web, cobrindo a mais populares como HTML, CSS, JavaScript, Python, SQL, Java e mutio mais."
---
