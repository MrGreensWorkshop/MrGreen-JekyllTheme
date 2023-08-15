---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Comparing_The_Lengths_Of_Arrays
title: About comparing the lengths of arrays (with.Java)
# title: About browser

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Java
# multiple tag entries are possible
tags: [java, coding test]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-08-15 09:00:00 +0900
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

### Array(배열)과 List(리스트)의 차이에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트를 준비하며, 문법과 자료구조에 대한 학습을 병행하고 있습니다. 이번 글에선 배열과 리스트에 대해 알아보겠습니다.

#### Array와 List의 사용 목적

여러 개의 데이터를 하나의 이름으로 묶어 관리하기 위한 자료구조입니다.

##### 사용 목적은 같은데 차이점이 무엇일까요?

Array:

- 정해진 공간과 Index(식별자)가 존재합니다. ex) arr[5]
- 객체 생성시 크기 할당을 필수로 합니다. ex) char[] a = new char[5]
- 속도 측면에서 삽입 및 삭제가 느리고 데이터 조회가 빠릅니다.

List:

- Index(식별자)가 없습니다. 만약 3의 크기를 가진 list에서 0번 째 요소가 빠진다면 새로 추가되는 요소가 0번째에 저장될 수 있습니다.
- 크기 할당의 필요가 없습니다. Java에선 자동으로 1.5배씩 늘어납니다.
- 속도 측면에서 삽입 및 삭제가 빠르고 데이터 조회가 느립니다.

차이점은 알았습니다. 그럼 이제 결론을 낼 수 있습니다.

##### 결론

문제를 직면했을 때 데이터의 크기가 정해져 있다면 Array를 사용하고, 크기에 대한 언급이 없다면 Array를 사용하면 됩니다.

결론을 냈지만 우리는 Java 메소드 중 ArrayList를 자주 씁니다.
이것의 정체는 무엇일까요...?

#### ArrayList란?

Array와 List의 장점을 합친 메소드로 Array 특성인 index로 식별자를 쓰는 것이 가능하고, List 특성대로 크기를 동적으로 할당할 수 있습니다.

즉, Index를 쓸 수 있는 List 입니다!

##### ArrayList 사용법

```java
import java.util.ArrayList

ArrayList<Integer> integers1 = new ArrayList<Integer>(); // Integer 타입 지정
```

##### 다양한 사용처 소개

- add(index, element): ArrayList의 index에 맞춰 element를 추가합니다. index는 생략 가능하나 그럴 경우 ArrayList의 마지막에 값을 추가합니다.
- set(index, element): ArrayList의 index에 맞춰 element를 재설정합니다. 기존 ArrayList에 존재하던 index의 element는 없어집니다.
- remove(index | element): ArrayList의 index의 element를 지우거나 ArrayList의 element를 직접 지울 수 있습니다. remove는 지웠던 element의 값을 변수에 할당해줄 수 있습니다.
- clear(): ArrayList안의 모든 element를 삭제합니다.
- size(): ArrayList의 크기를 int 타입으로 확인할 수 있습니다.
- get(index): ArrayList의 index에 맞는 element 확인이 가능합니다.
- contains(element): ArrayList안에 element가 있는 경우 boolean의 형태로 리턴 합니다.
- indexOf(element): ArrayList안에 element가 존재하는 경우 int 형태의 index를 반환합니다.
