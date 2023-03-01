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
    header: "链接"
    info: "链接页面描述。"

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "网页设计"
      type: id_webdesign
      color: "#F4A273"
    - title: "编程"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow是一个为专业和热情的程序员提供问答的网站。"

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "将纯文本转换成静态网站和博客。"
    - type: id_jekyiiliquid
      title: "Jekyll小册子"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "要记住的Jekyll变量和过滤器非常多，要把它们全部记在脑子里可能很困难。这张小册子可以作为Jekyll所有功能的快速参考。"
    - type: id_jekyiiliquid
      title: "对于设计师来说的Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "面向设计师的Liquid GitHub wiki"
    - type: id_jekyiiliquid
      title: "面向程序员的Liquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "为程序员提供的Liquid的GitHub wiki"
    - type: id_jekyiiliquid
      title: "Liquid参考资料"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid是Shopify创建的一种模板语言，用Ruby编写。它可以作为一个开源项目在GitHub上使用。"

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools提供所有主要网络语言的免费在线教程、参考和练习。它涵盖了流行的主题，如HTML、CSS、JavaScript、Python、SQL和Java。"
---
