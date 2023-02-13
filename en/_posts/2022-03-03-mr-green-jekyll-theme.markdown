---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Mr_Green_Jekyll_Theme
title: "Mr. Green Jekyll テーマ"

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Mr. Green's Workshop
# multiple category is not supported
category: jekyll
# multiple tag entries are possible
tags: [jekyll, new feature]
# thumbnail image for post
img: ":mock1.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-03-03 10:04:19 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 10:04:19 +0900
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

{%- capture readme_file -%}{%- include_relative _README-jp.md -%}{%- endcapture -%}
{%- assign tmp_content = readme_file | split: "<!-- readme -->" -%}
{{tmp_content[1]}}
