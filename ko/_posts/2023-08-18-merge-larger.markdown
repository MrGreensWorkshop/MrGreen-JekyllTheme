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
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

##### 입출력 예시

a: 9
b: 91
result: 991

즉, a ⊕ b = 991 이고, b ⊕ a = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.

#### 문제에 대한 나의 풀이

```java
import java.util.*;

class Solution {
    public int solution(int a, int b) {
        int answer = 0;

        ArrayList<String> arrList = new ArrayList<>();
        arrList.add(Integer.toString(a));
        arrList.add(Integer.toString(b));

        for(int i = 0; i<arrList.size(); i++) {
            String sum = arrList.get(i%2) + arrList.get((i+1)%2);
            if(answer < Integer.parseInt(sum)){
                answer = Integer.parseInt(sum);
            }
        }
        return answer;
    }
}
```

ArrayList 타입의 arrList를 선언하고 그 안에 Integer a와 b를 String 타입으로 변환하여 값을 추가했습니다. 이후 반복문을 통해 String 타입의 sum에 요소에
arrList[0]+arrList[1]을 담고, answer에 담긴 값보다 크면 answer에 sum값으로 재할당합니다. 이후 반복문에 따라 arrList[1]+arrList[0] 형태도 동일하게 수행합니다.

그럼 이제 Math를 통해 문제를 풀어보도록 하겠습니다. 더 간단하게 풀 수 있기 때문입니다.

##### 우선 Java에서 Math란 무엇일까요?

Math 클래스는 Java에서 수학적인 연산을 수행하는데 사용되는 유틸리티 클래스입니다.

Math 클래스를 사용하기 위해 중요한 메서드를 몇 개 알아보겠습니다.

##### Math를 활용한 문제 풀이

```java
class Solution {
    public int solution(int a, int b) {
        String strA = String.valueOf(a);
        String strB = String.valueOf(b);
        String strSum1 = strA + strB;
        String strSum2 = strB + strA;
        return Math.max(Integer.valueOf(strSum1), Integer.valueOf(strSum2));
    }
}
```

String.valueOf로 int형인 a와 b를 삽입합니다. strSum1, 2 에는 String타입의 a와 b를 더하여 저장하고 이를 Math.max()함수를 통해 더 큰 값을 리턴하도록 했습니다. 전체적인 로직은 저의 풀이와 비슷하나, 반복문을 사용하지 않고 내부적인 자바 모듈을 통해 해결할 수 있는 것이 인상적인 풀이였습니다.
