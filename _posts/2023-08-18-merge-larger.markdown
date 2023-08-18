---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Merge_Larger
title: 더 크게 합치기에 대하여(with.Java)

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
date: 2023-08-18 09:00:00 +0900
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

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

12 ⊕ 3 = 123
3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 _ a _ b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

단, a ⊕ b와 2 _ a _ b가 같으면 a ⊕ b를 return 합니다.

##### 입출력 예시

a: 2
b: 91
result: 364

즉, a ⊕ b의 값인 291 보다 2 _ a _ b의 값인 364가 더 크기 때문에 2 _ a _ b의 값이 결과값에 저장되어야 하는 것입니다.

#### 문제에 대한 나의 풀이

```java
import java.util.*;

class Solution {
    public int solution(int a, int b) {
        int answer = 0;

        ArrayList<String> arrList = new ArrayList<>();
        arrList.add(String.valueOf(a));
        arrList.add(String.valueOf(b));

        var i = arrList.get(0)+arrList.get(1);
        var j = 2*a*b;


        answer = Integer.parseInt(i) >= j  ? Integer.parseInt(i) : j;

        return answer;
    }
}
```

ArrayList를 만들어 int형인 a와 b를 string으로 변환하여 저장하고
변수 i를 선언해 a ⊕ b 의 값을 담았습니다. 변수 j에는 2 _ a _ b의 값을 저장했습니다. 이후 삼항 연산자를 통해 i를 int형으로 바꾼 값이 j보다 크거나 같을 땐 i를 작을 땐 j를 answer에 담도록 작성하고 이를 반환하였습니다.

그럼 이제 Math를 통해 문제를 풀어보도록 하겠습니다.

##### 우선 Java에서 Math란 무엇일까요?

Math 클래스는 Java에서 수학적인 연산을 수행하는데 사용되는 유틸리티 클래스입니다.

Math 클래스를 사용하기 위해 중요한 메서드를 몇 개 알아보겠습니다.

##### Math 클래스 사용법

Math.max(a, b): 두 개의 인수 중에서 더 큰 값을 반환합니다.

Math.min(a, b): 두 개의 인수 중에서 더 작은 값을 반환합니다.

Math.abs(a): 주어진 숫자의 절대값을 반환합니다.

Math.pow(a, b): a의 b 제곱 값을 반환합니다.

Math.sqrt(a): 주어진 숫자의 제곱근 값을 반환합니다.

Math.round(a): 주어진 숫자를 반올림하여 정수로 반환합니다.

Math.floor(a): 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환합니다.

Math.ceil(a): 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환합니다.

Math.random(): 0 이상 1 미만의 난수를 반환합니다.

Math.sin(a), Math.cos(a), Math.tan(a): 주어진 각도의 사인, 코사인, 탄젠트 값을 반환합니다.

Math.exp(a): e (자연 상수)의 a 제곱 값을 반환합니다.

Math.log(a): 주어진 수의 자연 로그 값을 반환합니다.

Math.log10(a): 주어진 수의 10진 로그 값을 반환합니다.

Math.PI: 원주율(π) 값을 반환합니다.

Math.E: 자연 상수 e의 값을 반환합니다.

###### Math를 활용한 문제 풀이

```java
class Solution {
    public int solution(int a, int b) {
        return Math.max(Integer.parseInt(String.valueOf(a)+String.valueOf(b)),2*a*b);
    }
}
```
