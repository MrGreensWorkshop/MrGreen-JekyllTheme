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
    header: "リンク"
    info: "リンクページの説明はこちら。"

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "JekyII / Liquid"
      type: id_jekyiiliquid
      color: "gray"
    - title: "Webデザイン"
      type: id_webdesign
      color: "#F4A273"
    - title: "プログラミング"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflowは、プロや熱狂的なプログラマー向けの質疑応答Webサイトです。"

    # jekyiiliquid
    - type: id_jekyiiliquid
      title: "Jekyll"
      url: "https://jekyllrb.com/"
      info: "プレーンテキストを静的なWebサイトやブログに変換します。"
    - type: id_jekyiiliquid
      title: "Jekyllチートシート"
      url: "https://cloudcannon.com/community/jekyll-cheat-sheet/"
      info: "覚えておくべきJekyll変数とフィルターは非常に多く、すべてを頭の中に入れておくのは難しい場合があります。 このチートシートは、Jekyllが実行できるすべてのことのクイックリファレンスとして使えます。"
    - type: id_jekyiiliquid
      title: "デザイナー向けLiquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"
      info: "デザイナー向けLiquid用GitHub wiki"
    - type: id_jekyiiliquid
      title: "プログラマー向けLiquid"
      url: "https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers"
      info: "プログラマー向けLiquid用GitHub wiki"
    - type: id_jekyiiliquid
      title: "Liquidリファレンス"
      url: "https://shopify.dev/api/liquid/"
      info: "Liquidは、Shopifyによって作成され、Rubyで記述されたテンプレート言語です。 GitHubでオープンソースプロジェクトとして利用できるようになりました。"

    # webdesign
    - type: id_webdesign
      title: "W3Schools"
      url: "https://www.w3schools.com/"
      info: "W3Schoolsは、Webのすべての主要言語で、無料のオンラインチュートリアル、リファレンス、および演習を提供しています。 HTML、CSS、JavaScript、Python、SQL、Javaなどの人気のあるテーマをカバーしています。"
---
