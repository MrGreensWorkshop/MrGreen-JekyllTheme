---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_handle_operations_under_different_conditions
title: How to handle operations under different conditions (with.Java)

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
date: 2023-08-22 09:00:00 +0900
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

### 홀짝에 따라 다른 값 반환하는 방법에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

##### 입출력 예시

n: 7
result: 16

즉, n은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.

#### 문제에 대한 나의 풀이

```java
import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        int[] newArray = new int[n/2];
        if(n % 2 == 0){
            Arrays.setAll(newArray, even -> (int)Math.pow((even+1)*2,2));
            answer = Arrays.stream(newArray).sum();
        } else {
            Arrays.setAll(newArray, odd -> (odd+2)*2-1);
            answer = Arrays.stream(newArray).sum()+1;
        }
        return answer;
    }
}
```

##### 풀이 설명

newArray를 반으로 나눠 배열의 크기를 지정합니다. 짝수와 홀수를 판단하기 위해 Arrays.setAll 함수를 활용하여 newArray의 요소 값을 재설정합니다. 짝수일 경우 값을 제곱해야 하기에 Math.pow()함수로 제곱을 해줬습니다. 또한 Math.pow()의 경우 기본 타입이 double 이기 때문에 int로 형변환을 해줬습니다. 이후 answer 변수에 Arrays.stream(arr).sum()을 통해 요소들의 합을 재할당하였습니다.
홀수의 경우도 짝수와 비슷한 로직으로 구현했으며, sum()+1의 경우는 배열에 1은 포함하지 않게 계산을 하였기 때문에 추가해줬습니다.

저는 위처럼 배열을 통해 문제를 해결했지만 사실 더 간단한 방법이 있습니다.
바로 배열로 제어하는 것이 아닌 반복문을 통해 산술을 계산하면 됩니다!

#### 반복문을 통해 산술 계산하는 방법

```java
class Solution {
    public long solution(int n) {
        long answer = 0;

        if (n % 2 == 1) {
            for (int i = 1; i <= n; i += 2) {
                answer += i;
            }
        } else {
            for (int i = 2; i <= n; i += 2) {
                answer += (long) i * i;
            }
        }
        return answer;
    }
}
```
