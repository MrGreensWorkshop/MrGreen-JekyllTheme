---
layout: about
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_about

# image for page specific usage
img: ":about.jpg"
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
---

<!--
{%- comment -%} Please delete below and place your page content here {%- endcomment -%}

{%- comment -%}
{%- include util/auto-content-generator.liquid -%}
{{ website_info_text_first }}
テスト文章
{{ website_info_text_second }}
{%- endcomment -%}
-->


<!--プロフィールレイアウト-->
<style>
.flex{
    display: flex;
    justify-content: start;
}
.flex>img{
    width: 45%;
}
.profile{
margin: 0 0 0 1em;
}
.profile>h2{
margin: 0 0 0 1em;
}
.profile>h3{
margin: 0 0 0 1.3em;
}

</style>

# Site Owner
  <!-- 自己紹介テンプレート
  ### Name:
  ## ユーザー名
  -->

<div class="flex">
<!--プロフィール写真をUPする　サイズは50x50px-->

<!--![](/assets/img/about/about.jpg)-->
<img src="/assets/img/about/about.jpg" alt="プロフィール">

<div class="profile">
<!-- 自己紹介テンプレート-->

<h4> Nname:</h4>
<h2> TSUBAKI-MORIMOTO</h2>
<h4> birth:</h4>
<h3> 1990-12-07</h3>
<h4> Birthplace:</h4>
<h3> Togane City Chiba Japan</h3>
<h4> title:</h4>
<h3> SES Engineer</h3>

</div>
</div>

<!-- 自己紹介テンプレート Memberが追加されたらコメントアウトの中を追加
# Site Member

  ### Name:
  ## ユーザー名


<div class="flex">
  ![](assets/../../assets/img/about/about.jpg)

  <div margin: 2px 1em 0 auto; class="profile">

  #### Nname:
  ## TSUBAKI-MORIMOTO
  #### birth:
  ### 1990-12-07
  #### Birthplace:
  ### Togane City Chiba Japan
  #### title:
  ### SES Engineer

  </div>
  </div>
  -->
