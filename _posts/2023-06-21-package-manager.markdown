---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Package Manager
title: About package manager

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Package Manager
# multiple tag entries are possible
tags: [yarn, npm]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-21 09:00:00 +0900
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

### Package Manager에 대한 글입니다.(w. npm & yarn)

{:data-align="center"}

<!-- outline-end -->

#### Package Manager

우리는 프로젝트를 진행하며 패키지 관리자를 통해 애플리케이션을 개발하고 배포합니다.
그러나 프로젝트에 따라 npm 혹은 yarn을 채택하는데 문득 명확한 차이점이 뭘까 궁금해져 알아보았습니다.

##### NPM(Node Package Manager) 이란?

**npm은 Node.js 생태계의 공식 패키지 관리자입니다.**

- Node.js 애플리케이션을 개발하고 배포하는 데 주로 사용됩니다.
- JavaScript 프로젝트에서 의존성 관리, 패키지 설치, 스크립트 실행 등 다양한 작업을 처리할 수 있습니다.
- Node.js를 설치할 때 함께 제공되는 기본 패키지 관리자입니다.

##### Yarn 이란?

**yarn은 Facebook에서 개발한 패키지 관리자입니다.**

- npm에 비해 빠른 패키지 설치 및 의존성 해결 속도를 제공합니다.
- 패키지 설치 과정에서 캐싱 기능을 사용하여 중복 다운로드를 최소화하고, 보다 일관된 의존성 해결 방식을 사용합니다.
- 멀티 프로젝트 레포지토리에서 의존성을 효율적으로 관리할 수 있는 기능을 제공합니다.

##### 나의 결론

npm은 JavaScript 프로젝트의 기본적인 패키지 관리를 위해 사용되며, yarn은 npm보다 더 빠른 의존성 관리와 패키지 설치를 원하는 개발자들에게 선호될 수 있습니다.
기본이 되는 것을 사용할지, 기능적인 측면에서 접근할지 결정 후, 프로젝트 도입에 적용하면 좋을 것으로 생각됩니다.
