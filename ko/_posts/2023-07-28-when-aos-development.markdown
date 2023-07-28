---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_When_AOS_Development
title: AOS 개발 시, 언어 선택에 대하여
# title: About browser

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Application
# multiple tag entries are possible
tags: [application, kotlin, java]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-28 09:00:00 +0900
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

### AOS 개발 시, 언어 선택에 대하여

{:data-align="center"}

<!-- outline-end -->

이번에 앱 개발을 맡게 되어 우선적으로 AOS를 학습하고 있습니다.
AOS의 경우 크게 2가지 언어 중 하나로 개발이 이뤄집니다. 바로 Java와 Kotlin입니다.
기존의 저희 앱은 Java를 통해 웹뷰로 구성되었는데 저는 Kotlin을 학습하고 있습니다.
왜냐하면 Kotlin 코드로 리팩토링을 생각하고 있기 때문입니다. 이렇게 결정하게 된 이유에 대해 글로 정리하여 회고하고자 합니다.

안드로이드 앱을 만들 시, 각 언어의 장단점을 분석했습니다.

우선 Java에 대해서 입니다.

#### Java의 장점

**바로 '엔진'입니다. **
브라우저는 사실 여러 엔진으로 구성되어 있습니다.
하나의 예시로 Chrome 브라우저를 살펴보면 브라우저 엔진은 Chromium, 렌더링(레이아웃) 엔진은 Blink, JS 런타임(JS엔진)은 V8이라 불립니다.

#### 브라우저 엔진이란?

브라우저 엔진은 사용자가 어떤 액션을 하는 것부터, 화면에 결과물을 그래픽으로 보여주기까지의 과정에 관여합니다.
웹이 점점 발전함에 따라 엔진은 고도화 되었고, 화면에 결과물을 보여주는 렌더링 엔진과 JS 구문을 분석하는 JS 런타임 엔진이 별도로 분리 되었습니다.

#### 렌더링 엔진이란?

렌더링 엔진은 사용자가 요청한 HTML 문서와 CSS를 파싱하여 화면에 그리는 역할을 수행합니다.
브라우저 엔진과 렌더링 엔진의 분류를 명확하게 하지 않는 경우가 많은데 JS 엔진이 브라우저 없이 독립적으로 실행될 수 있는 반면, 렌더링 엔진은 그렇지 않기 때문입니다.

#### 렌더링 엔진 동작 과정

렌더링 엔진은 네트워크 계층으로부터 문서를 전송받습니다.

1. HTML 파싱: 엔진은 이 태그들을 파싱하여 DOM(Document Object Model) node로 변환합니다. node들이 계층 구조로 구성되어 DOM tree로 구축됩니다.
2. CSS 파싱: HTML 파싱이 이루어진 이후, CSS를 파싱하여 CSSOM을 생성합니다.
3. 어테치먼트(렌더트리 생성): 앞서 생성된 DOM tree와 CSSOM을 결합하여, 색상 및 면적 등의 시각적 정보를 담은 Reder tree를 구축할 수 있습니다. 이 과정에서 화면에 표시되지 않는 DOM node는 제외됩니다.
