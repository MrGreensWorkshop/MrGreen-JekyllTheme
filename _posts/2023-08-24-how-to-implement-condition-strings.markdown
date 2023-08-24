---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_implement_condition_strings
title: How to implement condition strings (with.Java)

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
date: 2023-08-24 09:00:00 +0900
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

### 등차수열의 특정한 항만 더하기(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

문제에서 말하는 등차수열이란?
인접한 수의 차이가 같은 수의 나열입니다.

##### 입출력 예시

a: 3
b: 4
included: [true, false, false, true, true]
result: 37

즉, a와 d가 각각 3, 4이고 included의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

1항 2항 3항 4항 5항
등차수열: 3, 7, 11, 15, 19
included: true, false, false, true, true
따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(int a, int d, boolean[] included) {
        int answer = 0;
        for(int i = 0; i<included.length; i++){
            if(included[i]){
                answer += a;
            }
            a += d;
        }
        return answer;
    }
}
```

##### 풀이 설명

included의 크기만큼 반복해야 하기 때문에 반복문을 사용하고 이후 boolean 배열의 included의 요소 중 true가 있다면 answer에 a의 값을 저장합니다. 등차수열인 점을 감안하여 반복문에서 a에 d의 값만큼을 계속 더하는 것으로 로직을 구현했습니다.
