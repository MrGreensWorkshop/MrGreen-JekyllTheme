---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Array_List_Difference
title: Array(배열)과 List(리스트)의 차이에 대하여(with.Java)
# title: About browser

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Java
# multiple tag entries are possible
tags: [java, coding test, join]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-08-14 09:00:00 +0900
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

### 문자열 배열을 문자열로 변환하는 방법에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩테스트를 준비하며 직무와 맞게 시험을 보기 위해 객체지향적 코딩을 위한 언어인 Java로 다시 진행하고 있습니다.
이번 글에선 문자열 배열을 문자열로 변환하는 방법에 대해 다루겠습니다.

바로 join() 입니다.

#### join() 이란?

String 클래스의 join()을 사용하면 문자열 배열을 문자열로 변환할 수 있습니다.
join()은 2개의 인수를 가집니다. 첫 번째 인수는 배열을 문자열로 변환할 때 각각의 element의 구분자 역할을 합니다. 두 번째 인수는 변환할 문자열 배열을 삽입합니다.
이 때 리턴 값은 String입니다.

##### join() 사용법 예시

```java
String[] strArr = {"a","b"};
String str = String.join("",strArr);
System.out.println(str);
// result: ab
```
