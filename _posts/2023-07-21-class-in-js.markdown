---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Using_Class_in_JS
title: JS에서 class를 사용하는 것에 대하여
# title: About using class in JS

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Javascript
# multiple tag entries are possible
tags: [javascript]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-21 09:00:00 +0900
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

### JS에서 Class 사용에 대하여

{:data-align="center"}

<!-- outline-end -->

저는 때때로 JS를 사용하며 클래스를 사용해야 할 때가 있었습니다.
왜 클래스를 잘 사용하지 않는가에 대한 궁금증을 해결하기 위해 이것저것 알아보게 되었는데요. 이에 대한 글을 작성하고자 합니다.

우선 왜 JavaScript에서 Class를 사용할 수 있음에도 잘 쓰지 않을까요?

#### 왜 JavaScript에서 Class를 잘 쓰지 않을까?

이에 대해선 여러 이유들이 있는데

1. 함수형 프로그래밍: JavaScript는 함수형 프로그래밍 언어로 널리 알려져 있습니다. 함수형 프로그래밍 패러다임은 일급 함수(first-class functions)와 클로저(closures)를 활용하여 상태 변경이나 가변 데이터를 피하는 것을 중점으로 합니다. 일부 개발자들은 이러한 접근 방식이 더 간결하고 예측 가능하다고 느낍니다.
2. 프로토타입 기반 상속: JavaScript의 클래스는 실제로는 "프로토타입 기반 상속"의 문법적인 설탕(syntactic sugar)일 뿐입니다. 즉, 클래스를 사용하지 않고도 프로토타입 체인을 직접 조작하여 비슷한 기능을 구현할 수 있습니다.
3. ES6 이전의 코드 호환성: JavaScript에서 클래스는 ES6(ES2015)에서 도입되었기 때문에, 이전 버전의 JavaScript 코드와의 호환성을 유지하려는 개발자들은 클래스를 사용하지 않을 수 있습니다.
4. 학습 곡선: JavaScript의 클래스는 다른 객체 지향 언어의 클래스와는 약간 다르게 동작합니다. 특히 this 키워드의 동작 방식은 초기 학습자에게 혼란스러울 수 있습니다.

#### 결론

위의 이유들에도 불구하고, 많은 JavaScript 개발자들은 클래스를 활용하여 객체 지향 프로그래밍을 적용하고 있습니다.
특히 TypeScript와 같은 JavaScript의 상위 집합 언어는 클래스와 인터페이스를 활용하여 더 강력한 타입 체킹과 코드 구조화를 가능하게 합니다.

#### 참고

##### 일급 함수란?

프로그래밍 언어가 함수를 '일급 객체'로 다루는 것을 의미합니다. 이는 함수를 언어의 다른 값들과 동일하게 취급한다는 것을 의미합니다.

##### 일급 함수 사용법

- 변수에 할당: 함수를 변수에 할당하고, 이 변수를 통해 함수를 호출할 수 있습니다.
- 함수 인자로 전달: 함수를 다른 함수의 인자로 전달할 수 있습니다. 이를 이용해 고차 함수(higher-order functions)를 만들 수 있습니다.
- 함수 결과로 반환: 함수는 다른 함수를 결과로 반환할 수 있습니다.
- 자료 구조에 저장: 함수를 배열이나 객체 등의 자료 구조에 저장할 수 있습니다.
