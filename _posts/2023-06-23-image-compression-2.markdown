---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Image_Compression_2
title: About image compression(2)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Image Compression
# multiple tag entries are possible
tags: [image compression]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-23 09:00:00 +0900
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

#### 이미지 압축은 어디서 진행되는게 좋을까?

실제로 적용해보기 전에 일반적으로 이미지 압축을 어느 파트(클라이언트 혹은 서버)에서 수행하는게 좋을지 고민되어 알아보았습니다.

##### 클라이언트 측 이미지 압축

###### 장점

1. 대역폭 절약: 이미지 압축은 파일 크기를 줄여 네트워크 대역폭을 절약하는 데 도움을 줄 수 있습니다. 작은 파일 크기는 이미지를 빠르게 다운로드하고 렌더링하는 데 도움이 됩니다.

• 네트워크 대역폭 절약이란?
이미지 압축을 통해 전송되는 데이터 양을 줄여서 네트워크에서 전송되는 데이터 양을 감소시키는 것을 의미합니다. 이미지 파일의 크기를 줄이면 전송해야 할 데이터 양도 줄어들어 네트워크 트래픽을 감소시킬 수 있습니다.

###### 단점

1. 클라이언트 자원 사용: 클라이언트에서 이미지 압축을 수행하면 해당 장치의 자원을 사용해야 합니다. 특히 큰 이미지나 여러 이미지를 동시에 압축하는 경우 클라이언트의 성능에 영향을 줄 수 있습니다.
2. 호환성 문제: 모든 클라이언트가 이미지 압축을 지원하는 것은 아닙니다. 일부 브라우저 또는 디바이스에서는 클라이언트 측 압축을 처리할 수 없을 수 있습니다.
3. 보안 문제: 이미지 압축은 이미지 파일을 변환하므로 악의적인 사용자가 이미지를 변조하거나 해독하는 데 활용될 수 있습니다.

##### 서버 측 이미지 압축

###### 장점

1. 성능 최적화: 이미지 압축은 대개 CPU 집약적인 작업이므로 서버에서 이를 처리하면 클라이언트의 성능에 영향을 미치지 않고 서버 리소스를 사용할 수 있습니다. 클라이언트는 이미지를 압축해야 할 필요가 없으므로 성능 향상을 기대할 수 있습니다.

2. 다양한 변환 옵션: 서버 측 이미지 압축은 다양한 변환 옵션을 적용할 수 있는 유연성을 제공합니다. 예를 들어, 이미지 크기 조정, 포맷 변경, 품질 조정 등을 서버에서 제어할 수 있습니다. 이는 이미지 표시의 최적화와 관련하여 웹 성능을 향상시키는 데 도움을 줍니다.

3. 보안 및 데이터 일관성: 서버 측 이미지 압축은 이미지 처리 로직을 서버에 중앙 집중화하여 이미지 데이터의 보안과 일관성을 유지할 수 있습니다. 클라이언트가 압축 작업을 수행하는 경우에는 클라이언트 자체에서 데이터의 일관성을 보장하기 어려울 수 있습니다.

4. 압축 최적화: 서버 측에서는 클라이언트의 요청에 따라 동적으로 압축 옵션을 조정할 수 있습니다. 예를 들어, 클라이언트의 네트워크 속도, 장치 능력 등을 고려하여 압축 수준을 동적으로 조정하여 최적의 사용자 경험을 제공할 수 있습니다.

5. 대용량 이미지 처리: 클라이언트에서 대용량 이미지를 압축하려면 클라이언트 자원에 부담이 될 수 있습니다. 서버 측 이미지 압축은 클라이언트로 전송되기 전에 대용량 이미지를 처리하고 최적화할 수 있으므로, 클라이언트 측에서의 성능 문제나 리소스 제한을 피할 수 있습니다.

###### 단점

1. 추가적인 서버 리소스: 이미지 압축은 CPU와 메모리 리소스를 요구하므로 서버에 부담이 될 수 있습니다. 따라서, 적절한 서버 스케일링과 리소스 관리가 필요합니다.

2. 중앙 집중화된 처리: 서버 측 이미지 압축은 이미지 처리 작업을 중앙 집중화하여 서버에서 처리합니다. 이로 인해 서버에 장애가 발생하거나 서버가 부하를 겪는 경우, 이미지 압축 작업이 지연될 수 있습니다. 이는 클라이언트의 응답 시간에 영향을 줄 수 있습니다. 또한, 서버의 가용성과 확장성에 따라 이미지 압축 작업의 처리량이 제한될 수 있습니다.

3. 처리 시간 및 대기 시간: 이미지 압축은 추가적인 처리 시간이 필요합니다. 따라서, 이미지 압축 작업이 서버에서 이루어지는 경우, 클라이언트는 이미지를 요청하고 압축이 완료될 때까지 대기해야 할 수 있습니다. 이로 인해 클라이언트의 응답 속도가 느려질 수 있습니다.

4. 확장성 제약: 이미지 압축 작업은 서버에서 처리되므로, 많은 수의 동시 요청이 있을 경우 서버 부하가 증가할 수 있습니다. 이로 인해 확장성 제약이 발생할 수 있으며, 추가 서버 리소스가 필요할 수 있습니다.

5. 유연성 제한: 서버 측 이미지 압축은 클라이언트가 이미지를 요청할 때마다 동일한 압축 옵션이 적용될 수 있습니다. 클라이언트별로 다른 압축 수준이나 옵션이 필요한 경우, 서버에서는 이를 동적으로 제어하기 어려울 수 있습니다.

6. 네트워크 트래픽: 서버 측 이미지 압축은 클라이언트로부터 이미지 요청을 받아서 압축한 후 전송해야 합니다. 이로 인해 서버와 클라이언트 간의 네트워크 트래픽이 증가할 수 있습니다.

7. 캐싱 어려움: 클라이언트 측에서 이미지 압축을 처리하는 경우 클라이언트는 압축된 이미지를 캐싱하여 재사용할 수 있습니다. 그러나 서버 측에서 이미지 압축을 처리하는 경우, 서버에서는 이미지 압축된 버전을 캐싱하기 어려울 수 있습니다.

###### 결론

실제로는 상황과 요구 사항에 따라 클라이언트 측 이미지 압축이 더 적절한 경우도 있을 수 있습니다.
따라서, 압축 방식을 결정할 때는 해당 프로젝트의 목표, 사용자 환경, 리소스 제약 등을 종합적으로 고려해야 합니다.
