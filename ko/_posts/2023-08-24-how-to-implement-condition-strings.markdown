---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_How_To_Implement_Condition_Strings
title: 조건 문자열을 구현하는 방법에 대하여(with.Java)

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

### 조건 문자열을 구현하는 방법에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

##### 입출력 예시

ineq: "<"
eq: "="
n: 20
m: 50
result: 1

즉, 20 <= 50은 참이기 때문에 1을 return합니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        if(ineq == "<"){
            if(eq == "="){
                answer = n <= m ? 1 : 0;
            }else{
                answer = n < m ? 1 : 0;
            }
        } else{
            if(eq == "="){
                answer = n >= m ? 1 : 0;
            }else{
                answer = n > m ? 1 : 0;
            }
        }
        return answer;
    }
}
```

##### 풀이 설명

ineq 문자열이 <와 일치하는지 판별하고, 맞다면 eq 문자여리 =과 일치하는지의 여부에 따라 값을 리턴하는 로직을 구성하여 발생할 수 있는 4가지의 경우를 처리하였습니다.

하지만 일부 케이스에 대해서 적용이 안되는 문제를 확인하였습니다.
이후 공부를 거듭한 결과 이유에 대해서 알게되었습니다.

일부 케이스에 '==' 연산자가 적용되지 않는 이
JavaScript에선 비교할 때 비교 연산자를 통해 주로 처리를 했는데 **Java에선 문자열 비교 시, '==' 연산자보다는 '.equals()' 메서드 사용이 권장**된다고 합니다. 이유는 문자열을 비교할 때 문자열의 실제 내용을 비교하기 위해서입니다.

== 연산자는 참조(메모리 주소)를 비교하므로, 두 문자열이 내용은 같지만 다른 메모리에 저장된 경우에는 같다고 판단하지 않을 수 있습니다. 반면에 .equals() 메서드는 실제 문자열 내용을 비교하기 때문에 내용이 같으면 같다고 판단합니다.

따라서 ineq == "<"와 같은 비교는 문자열 내용이 같더라도 제대로 작동하지 않을 수 있습니다. 이런 경우에는 .equals() 메서드를 사용하여 문자열 내용을 비교하는 것이 올바른 방법입니다.

##### 다시 풀어서 통과한 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        if(ineq.equals("<")){
            if(eq.equals("=")){
                answer = n <= m ? 1 : 0;
            }else{
                answer = n < m ? 1 : 0;
            }
        } else{
            if(eq.equals("=")){
                answer = n >= m ? 1 : 0;
            }else{
                answer = n > m ? 1 : 0;
            }
        }
        return answer;
    }
}
```
