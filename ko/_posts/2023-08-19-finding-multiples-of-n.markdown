---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Finding_Multiples_Of_N
title: n의 배수를 구하는 것에 대하여(with. Java)

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
date: 2023-08-19 09:00:00 +0900
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

### 두 수의 연산값 비교에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

##### 입출력 예시

num: 98
n: 2
result: 1

즉, 98은 2의 배수이기 때문에 1이 결과 값이 되어야 합니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(int num, int n) {
        int answer = 0;
        answer = (num % n == 0) ? 1 : 0;
        return answer;
    }
}
```

배수 판별하는 것이 핵심이였기 때문에 % 연산자를 통해 num을 n으로 나누고 나머지 값이 0이면 배수라고 판단하여 answer에 1을 아니라면 0을 넣어서 풀었습니다.
