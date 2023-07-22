---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_2
title: About web framework(2)
# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Framework
# multiple tag entries are possible
tags: [framework, server]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-23 09:00:00 +0900
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

### 웹 프레임워크에 대하여(2)

{:data-align="center"}

<!-- outline-end -->

지난 글에서 우리는 간단한 웹서버를 생성하는 방법에 대해 코드를 작성하고 실습을 진행해보았습니다. 하지만 그것만으론 웹 프레임워크를 대체할 수 있다 말하기 힘듭니다.

그래서 이번 글에선 웹 프레임워크의 핵심 기능 중 하나인 라우팅 구현을 expressjs없이 구현해보도록 하겠습니다.

#### 우선 라우팅은 무엇일까요?

간단하게 URL과 요청 핸들러를 연결해주는 기능을 제공합니다.
즉, 웹 애플리케이션의 다양한 엔드포인트를 관리할 수 있습니다.
