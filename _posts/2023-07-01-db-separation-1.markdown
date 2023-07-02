---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_db_separation_1
title: About db separation(2)

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
date: 2023-07-01 09:00:00 +0900
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

### db separation에 대해서(1)

{:data-align="center"}

<!-- outline-end -->

저희 회사에서는 log 기록을 남기는 DB와 서비스를 위한 DB 총 2개를 사용하고 있습니다.
개발을 하던 중 DB의 분리는 왜 하는지 궁금해져 알아보게 되었습니다.

#### DB를 목적에 따라 분리하였을 때 얻는 이점

1. 성능 및 확장성: 서비스용 DB는 주요 비즈니스 데이터를 저장하고 처리하는 데 집중되어야 합니다. log 기록용 DB는 대량의 작은 크기의 데이터로 구성되는 경우가 많으며, 로그가 서비스용 DB에 저장되는 경우 성능에 영향을 줄 수 있습니다. log 기록용 DB를 별도로 분리하면 로그 데이터의 적재와 처리에 특화된 설정 및 구조를 적용하여 성능과 확장성을 개선할 수 있습니다.
2. 데이터 보안: 로그는 주로 디버깅, 감사 및 분석 목적으로 사용될 수 있으므로 중요한 비즈니스 데이터와 로그를 동일한 디비에 저장하는 것은 보안 문제가 될 수 있습니다. log 기록용 DB를 별도로 분리하면 로그 데이터의 접근 제어와 보안 설정을 독립적으로 구성할 수 있습니다.
3. 운영 및 유지 보수: 서비스용 DB는 주요 비즈니스 로직을 처리하므로 유지 보수, 성능 최적화, 백업 등의 작업을 수행해야 합니다. log 기록용 DB를 분리하면 본섭 디비의 작업에 영향을 주지 않으면서 로그 관리 작업을 수행할 수 있습니다. 또한 로그 데이터를 분리하여 관리하면 로그 관리 작업에 더욱 집중할 수 있습니다.
4. 분석 및 모니터링: 로그 데이터는 시스템 동작 및 문제 해결에 중요한 정보를 제공합니다. 로그 디비를 별도로 분리하면 로그 데이터를 쉽게 분석하고 모니터링할 수 있습니다. 로그 분석 도구 및 시각화 도구를 사용하여 로그 데이터에서 유용한 통찰력을 얻을 수 있으며, 이를 통해 시스템 성능, 사용자 행동, 오류 등을 모니터링하고 개선할 수 있습니다.

#### 결론

log 기록용 DB와 본섭 디비를 분리함으로써 성능, 보안, 운영 및 유지 보수, 분석 및 모니터링 측면에서 이점을 얻을 수 있습니다.

이제 DB를 분리함으로 얻는 이점은 확실히 알게 되었습니다.
그럼 이제 저희 회사의 경우 2개의 DB에 대해 서로 다른 서비스를 이용하고 있는데요.(AWS S3, MongoDB) 왜 다른 서비스의 DB를 사용하고 있는지 2편에서 알아보도록 하겠습니다.
