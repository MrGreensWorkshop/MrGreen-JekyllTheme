---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Mr_Green_Jekyll_Theme
title: Mr. Green Jekyll Theme

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
date: 2022-03-03 12:32:10 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:10 +0900
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
---

{%- capture readme_file -%}{%- include_relative _README.md -%}{%- endcapture -%}
{%- assign tmp_content = readme_file | split: "<!-- readme -->" -%}
{{tmp_content[1]}}
