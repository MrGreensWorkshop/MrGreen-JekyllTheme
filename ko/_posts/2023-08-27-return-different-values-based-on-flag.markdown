---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Return_Different_Values_Based_On_Flags
title: Flag에 따라 다른 값 반환하는 방법에 대하여(with.Java)

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
date: 2023-08-27 09:00:00 +0900
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

### Flag에 따라 다른 값 반환하는 방법에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

##### 입출력 예시

num_list : [3, 4, 5, 2, 1]
result: 393

홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        String[] strArray = new String[num_list.length];
        String even = "";
        String odd = "";

        for(int i = 0; i < num_list.length; i++){
            strArray[i] = String.valueOf(num_list[i]);
            if(num_list[i] % 2 == 0){
                even += strArray[i];
            } else{
                odd += strArray[i];
            }
        }
        answer = Integer.parseInt(even) +  Integer.parseInt(odd);
        return answer;
    }
}
```

##### 풀이 설명

해당 코드는 주어진 정수 배열 num_list를 처리하여 짝수와 홀수를 따로 분리한 후, 분리된 짝수와 홀수를 각각 하나의 문자열로 결합하고, 최종적으로 이 두 문자열을 정수로 변환하여 합산한 값을 반환하는 함수를 구현한 것입니다.

여기서 주요한 부분을 하나씩 살펴보겠습니다:

int solution(int[] num_list): 이 함수는 정수 배열을 입력으로 받아서 정수 합계를 반환하는 메소드입니다.

String[] strArray = new String[num_list.length];: 입력된 num_list의 길이와 같은 길이를 가진 strArray라는 문자열 배열을 생성합니다. 이 배열은 각 정수 요소를 문자열로 변환해서 저장할 용도로 사용됩니다.

for(int i = 0; i < num_list.length; i++) { ... }: 주어진 배열 num_list의 각 요소에 대해서 반복문을 실행합니다.

strArray[i] = String.valueOf(num_list[i]);: 현재 요소인 정수를 문자열로 변환하여 strArray의 해당 인덱스에 저장합니다.

if(num_list[i] % 2 == 0) { ... } else { ... }: 현재 요소가 짝수인지 홀수인지를 판별합니다.

even += strArray[i];와 odd += strArray[i];: 현재 요소를 문자열로 변환한 값을 각각 even과 odd 문자열에 더해줍니다. 따라서 짝수를 나타내는 문자열 even에는 짝수들이, 홀수를 나타내는 문자열 odd에는 홀수들이 순서대로 이어져서 저장됩니다.

answer = Integer.parseInt(even) + Integer.parseInt(odd);: 문자열 형태로 저장된 짝수와 홀수를 정수로 변환한 후, 이들을 더한 값을 answer에 저장합니다.

return answer;: 최종적으로 계산된 합계인 answer를 반환합니다.

이 코드의 목적은 주어진 정수 배열의 짝수와 홀수를 따로 분리하여 그 합계를 계산하는 것입니다.
