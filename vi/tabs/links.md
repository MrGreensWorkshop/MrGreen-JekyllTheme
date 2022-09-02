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
    info: "Your Links page description."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Web Design"
      type: id_webdesign
      color: "#F4A273"
    - title: "Programming"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow is a question and answer website for professional and enthusiastic programmers."

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "Transform your plain text into static websites and blogs."
    - type: id_jekyiiliquid
      title: "Jekyll Cheat Sheet"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "There are so many Jekyll variables and filters to remember and it can be tricky to keep it all in your head. This cheat sheet serves as a quick reference of everything Jekyll can do."
    - type: id_jekyiiliquid
      title: "Liquid for Designers"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "Liquid for Designers wiki on GitHub"
    - type: id_jekyiiliquid
      title: "Liquid for Programmers"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "Liquid for Programmers wiki on GitHub"
    - type: id_jekyiiliquid
      title: "Liquid Reference"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquid is a template language created by Shopify and written in Ruby. It is now available as an open source project on GitHub"

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many more."
---
