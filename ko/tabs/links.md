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
    header: "링크"
    info: "귀하의 링크 페이지 설명."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "웹 디자인"
      type: id_webdesign
      color: "#F4A273"
    - title: "프로그램 작성"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow는 전문적이고 열정적인 프로그래머를 위한 질문 및 답변 웹사이트입니다."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "일반 텍스트를 정적 웹사이트 및 블로그로 변환합니다."
    - type: id_jekyiiliquid
      title: "Jekyll 치트 시트"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "기억해야 할 Jekyll 변수와 필터가 너무 많아서 머릿속에 모두 담아두기가 까다로울 수 있습니다. 이 치트 시트는 Jekyll이 할 수 있는 모든 것에 대한 빠른 참조 역할을 합니다."
    - type: id_jekyiiliquid
      title: "디자이너를 위한 Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "GitHub의 디자이너를 위한 Liquid 위키"
    - type: id_jekyiiliquid
      title: "프로그래머를 위한 Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "GitHub의 프로그래머를 위한 Liquid 위키"
    - type: id_jekyiiliquid
      title: "Liquid 참조"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid는 Shopify에서 생성하고 Ruby로 작성된 템플릿 언어입니다. 이제 GitHub에서 오픈 소스 프로젝트로 사용할 수 있습니다."

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools는 웹의 모든 주요 언어로 된 무료 온라인 자습서, 참조 및 연습을 제공합니다. HTML, CSS, JavaScript, Python, SQL, Java 등과 같은 인기 있는 주제를 다룹니다."
---
