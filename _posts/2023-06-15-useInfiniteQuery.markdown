---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_useInfiniteQuery
title: About useInfiniteQuery

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: React
# multiple tag entries are possible
tags: [React Query, Hook]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-15 09:30:00 +0900
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

### useInfiniteQuery(무한 스크롤)에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

#### 무한 스크롤이란 무엇인가

사용자가 페이지 하단에 도달했을 때, 콘텐츠가 계속 로드되는 사용자 경험 방식입니다.

##### 사용처

주로 pagination에서 사용됩니다. 사용자의 클릭을 최소화하면서 한 번에 많은 양의 데이터를 보여주고 싶을 때, 사용하기 때문입니다.

- 행위에 대해 표현하는 방식이라 생각하면 쉽습니다. 일정 수의 아이템을 불러오고 버튼을 누르면 데이터 세트을 불러옵니다. 이때, 데이터가 다 불러와지면 무한 스크롤은 멈춰야 합니다. 이처럼 무한 스크롤은 옵션에 대해 사용자가 바라는 개인화가 가능합니다.

##### 사용법

1. useInfiniteQuery의 속성에 queryFunction과 queryParams를 삽입합니다.
2. queryFunction에는 무한스크롤 대상 API. 즉, 불러오고자 하는 데이터 세트를 입력합니다.
3. queryParams에는 정해진 데이터 row 수만큼 저장시킬 변수를 입력합니다.
