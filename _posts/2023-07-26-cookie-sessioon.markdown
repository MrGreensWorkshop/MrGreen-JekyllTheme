---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Cookie_Session
title: About cookie and session
# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Network
# multiple tag entries are possible
tags: [network]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-26 09:00:00 +0900
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

### 쿠키와 세션에 대하여

{:data-align="center"}

<!-- outline-end -->

이번에 웹 프레임워크에 대해 학습하던 중, 상태 관리의 용이함에 대해 들었습니다.
그래서 상태 관리엔 무엇이 포함되는지 알아보던 중 쿠키와 세션에 대해 알 수 있었습니다.

저는 그 동안 쿠키와 세션에 대해 비슷한 개념이라고만 생각했었는데 큰 맥락에서만 같고, 다른 개념으로 분리하여 알아둬야 한다는 것을 깨달았습니다. 이에 제가 학습한 것을 공유하고자 글을 작성합니다.

웹 프레임워크에서 수행하는 상태 관리란 무엇을 말하는 걸까요?

#### 상태 관리란?

웹 개발에서 사용되는 상태 관리 메커니즘입니다. 쿠키와 세션은 클라이언트와 서버 간에 상태 정보를 유지하고 데이터를 전달하는 데 사용됩니다.

그렇다면 쿠키와 세션의 차이는 무엇일까요?
쿠키부터 알아보겠습니다.

#### 쿠키 (Cookie)란?

- 쿠키는 클라이언트 측에 작은 데이터 조각으로 저장됩니다.
- 클라이언트가 서버에 요청을 보낼 때 HTTP 헤더에 쿠키가 포함되어 전송됩니다.
- 클라이언트의 로컬에 저장되어 클라이언트 측에서 관리됩니다.
- 주로 사용자 식별, 선호 설정, 장바구니 등의 정보를 저장하는 데 사용됩니다.
- 만료 기간을 설정할 수 있으며, 지정된 기간 동안 클라이언트에 의해 보존됩니다.
- 보안 측면에서 제약이 있을 수 있고, 사용자의 개인정보가 포함될 수 있으므로 적절한 보안 대책을 강구해야 합니다.

다음은 세션에 대해 알아보겠습니다.

#### 세션 (Session)이란?

- 세션은 서버 측에 상태 정보를 저장하고 관리합니다.
- 클라이언트가 서버에 접속하면 서버는 고유한 세션 ID를 생성하고 클라이언트에게 제공합니다.
- 클라이언트는 세션 ID를 쿠키를 통해 저장하거나 URL 매개변수에 포함하여 서버에 전달합니다.
- 서버는 세션 ID를 사용하여 세션 데이터를 관리하고 클라이언트와의 상태를 유지합니다.
- 세션은 보통 로그인 상태, 사용자 프로필, 장바구니 내역과 같은 정보를 저장하는 데 사용됩니다.
- 세션은 클라이언트가 웹 애플리케이션에 접속한 동안 유지되며, 클라이언트가 종료되거나 세션 만료 시간이 경과하면 삭제됩니다.
- 세션은 쿠키와 달리 서버 측에서 저장되므로 보안적인 측면에서 더 안전합니다.

#### 결론

네, 그렇습니다. 쿠키와 세션의 큰 차이점은 **목적과 동작 방식**에 있었습니다.

쿠키와 세션은 웹 개발에서 사용자 상태 정보를 유지하고 식별하는 데 사용되며, 각각의 특성과 용도에 맞게 선택해 활용해야 합니다.
