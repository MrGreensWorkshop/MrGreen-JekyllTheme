---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Image_Compression_1
title: 이미지 압축에 대하여(1)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Development
# multiple tag entries are possible
tags: [development]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-22 09:00:00 +0900
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

### Image Compression에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

#### Package Manager

예를들어 서비스에 사용된 이미지와 앞으로 업로드될 이미지에 대해 압축을 본 서비스에 적용한다고 가정해보겠습니다.

##### 이상적인 설계란?

제가 생각하는 이상적인 설계란 다음과 같습니다.

1. 내가 사용하는 프로젝트 구조 파악
2. 관련 라이브러리 선행 조사
3. 프로젝트에 맞는 라이브러리 선별
4. 라이브러리 테스트 후, 각각 최대 용량 몇까지 요구 사항인 {num}MB로 줄일 수 있는지 조사
5. 현재 서비스에 렌더링된 이미지의 평균 용량 체크
6. 적용 가능한 라이브러리 선별 후, 테스트
7. 기존 업로드된 이미지 압축
8. 앞으로 업로드될 이미지에 대해 압축

**이미지 압축은 어디서 진행되는게 좋은가?**
실제로 적용해보기 전에 일반적으로 이미지 압축을 어느 파트(클라이언트 혹은 서버)에서 수행하는게 좋을지 고민되어 알아보았습니다.
자세한 사항은 2편에서 다루도록 하겠습니다.
