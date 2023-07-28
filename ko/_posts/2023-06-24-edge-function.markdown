---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Edge-Function
title: Edge function에 대하여

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Module
# multiple tag entries are possible
tags: [module]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-24 09:00:00 +0900
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

### Edge function에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

#### Edge function이란?

Edge function은 클라우드 환경에서 실행되는 서버리스 컴퓨팅 기능입니다. 일반적으로 웹 애플리케이션 또는 API와 같은 클라우드 서비스의 일부로 사용됩니다.

제 회사에서 사용하고 있는 Vercel과 NextJS를 중심으로 설명하겠습니다.

##### Vercel

###### Vercel 이란?

Vercel은 정적 웹사이트 및 싱글 페이지 애플리케이션(SPA)을 위한 서버리스 플랫폼입니다. Vercel의 애즈펑션(AS Function)은 이 플랫폼에서 제공하는 서버리스 함수(Serverless Functions)의 한 형태입니다.

###### Vercel Edge function

클라우드 환경에서 실행되는 작은 코드 조각으로, 특정 HTTP 요청에 대한 응답을 생성하고 처리하는 데 사용됩니다. 이는 서버리스 아키텍처의 핵심 개념 중 하나인 함수 계산(Function-as-a-Service, FaaS)의 구현 방식입니다.

Vercel의 다른 기능과 통합하여 사용할 수 있으며, 정적 웹사이트와 함께 호스팅되는 애플리케이션의 전체 기능을 개발하고 배포하는 데 사용될 수 있습니다.

##### NextJS

###### NextJS 이란?

React 기반의 프레임워크로서, SSR(Server-Side Rendering), 정적 사이트 생성(Static Site Generation), 클라이언트 사이드 라우팅 등을 지원합니다. Next.js에서 애즈펑션은 서버리스 함수를 사용하여 백엔드 로직을 구현하고 실행할 수 있는 기능입니다.

###### NextJS Edge function

API 라우트를 생성하는 방식으로 구현됩니다. .js 또는 .ts 확장자를 가진 파일을 생성하고, 해당 파일 내에서 API 엔드포인트의 로직을 작성합니다. 이 파일은 Next.js 애플리케이션과 함께 빌드되며, 생성된 API 엔드포인트는 클라이언트나 다른 부분에서 호출할 수 있습니다.
더하여 Next.js 애플리케이션 내에서 백엔드 로직을 구현하고, 데이터베이스와의 상호 작용, 외부 API 호출, 인증 및 인가, 파일 업로드 등의 작업을 수행할 수 있습니다. 이를 통해 Next.js 애플리케이션은 클라이언트와 서버 사이의 완전한 통합을 제공하며, 다양한 종류의 데이터 요청을 처리할 수 있습니다.
