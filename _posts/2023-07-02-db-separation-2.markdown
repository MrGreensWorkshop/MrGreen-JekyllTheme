---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_db_separation_2
title: DB 분리에 대하여(2)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: DB
# multiple tag entries are possible
tags: [db, architecture]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-02 09:00:00 +0900
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

### db separation에 대해서(2)

{:data-align="center"}

<!-- outline-end -->

이번 포스팅에선 서로 다른 2개의 DB 서비스를 왜 회사에서 사용하는가(AWS S3, MongoDB 등), 왜 다른 서비스의 DB를 사용하고 있는지 알아보도록 하겠습니다.

#### DB를 2개로 분리할 때, 서로 다른 서비스를 쓰는 것이 일반적인가?

실제로 많은 기업과 서비스에서 이러한 조합을 사용하고 있습니다. 각 데이터베이스가 다른 목적과 요구 사항을 가지고 있기 때문에 이러한 선택은 적절할 수 있습니다.

#### 그렇다면 목적과 요구 사항이 어떻게 분리해서 사용하는가?

AWS S3 와 MongoDB로 알아보았습니다.

- AWS S3는 대용량 파일 저장소로 주로 정적 파일 (이미지, 동영상 등)이나 로그 파일과 같은 비구조화된 데이터를 저장하는 데 사용됩니다. S3는 확장성과 내구성이 뛰어나며, 원하는 만큼의 스토리지 공간을 확보할 수 있습니다. 이러한 이점들로 인해 로그 데이터를 S3에 저장하고 필요할 때 읽어올 수 있습니다.
- MongoDB는 문서 지향적 NoSQL 데이터베이스로, 로그와 같은 구조화되지 않은 데이터를 저장하기에 적합합니다. MongoDB는 JSON 형식의 도큐먼트를 저장하고 조회하는 데 특화되어 있으며, 대용량의 로그 데이터를 효율적으로 처리할 수 있습니다.

#### 결론

AWS S3를 사용하여 로그 데이터를 저장하고 MongoDB를 사용하여 구조화되지 않은 로그 데이터를 저장하는 것은 일반적으로 유용한 접근 방식입니다. 이를 통해 데이터의 용도와 특성에 따라 적절한 저장소를 선택하고 데이터를 관리할 수 있습니다.
