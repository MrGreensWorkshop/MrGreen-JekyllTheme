---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Context_Provider
title: About Context Provider

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: React
# multiple tag entries are possible
tags: [Js, React]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-11 09:00:00 +0900
# seo
# if not specified, date will be used.
#meta_modify_date: 2021-08-10 11:32:53 +0900
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

<!-- outline-start -->

### Context Provider에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

**Provider**는 정의한 context를 하위 컴포넌트에게 전달하는 역할을 합니다.
중첩하여 사용할 수 있고, 중첩할 경우 하위 provider 값이 우선시 됩니다.
provider의 value state가 변화할 때마다 components는 전부 rerender가 됩니다.

- Context란 무엇인가
  - 어떤 객체를 핸들링하기 위한 접근 수단
