---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Dice_Games
title: 주사위 게임에 대하여(with.Java)

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
date: 2023-08-25 09:00:00 +0900
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

### 주사위 게임에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

##### 입출력 예시

a: 2
b: 6
c: 1
result: 9

즉, 예제 1번에서 세 주사위 숫자가 모두 다르므로 2 + 6 + 1 = 9점을 얻습니다. 따라서 9를 return 합니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        if(a != b && a != c && b != c){
            answer = a + b + c;
        } else if(a == b && a != c || a == c && b != c || b == c && a != b ){
            answer = (a + b + c) * ((int)Math.pow(a,2) + (int)Math.pow(b,2) + (int)Math.pow(c,2));
        } else {
            answer = (a + b + c) * ((int)Math.pow(a,2) + (int)Math.pow(b,2) + (int)Math.pow(c,2)) * ((int)Math.pow(a,3) + (int)Math.pow(b,3) + (int)Math.pow(c,3));
        }
        return answer;
    }
}
```

##### 풀이 설명

제가 작성한 코드의 경우 크게 3가지의 경우의 수를 두어 조건에 따라 연산을 할 수 있도록 작성했습니다.
1번 째는 a와 b가 동일하지 않으면서 a와 c가 동일하지 않고, b와 c가 동일하지 않는 경우 a+b+c 연산을 수행할 수 있도록 하였습니다.
2번 째 조건은 a와 b가 동일하고 a와 c가 동일하지 않거나 a와 c가 동일하나 b와 c가 동일하지 않거나 b와 c가 동일하나 a와 b가 동일하지 않는 경우 (a + b + c) × (a2 + b2 + c2 ) 연산을 수행할 수 있도록 거듭 제곱의 경우 Math.pow함수를 사용했습니다.
해당 함수는 double타입으로 반환되어 앞단에 int를 붙였습니다. 마지막 조건은 그 외의 상황은 a == b == c일 것임으로 이 경우,
(a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 ) 해당 연산을 수행하게 하였습니다.
