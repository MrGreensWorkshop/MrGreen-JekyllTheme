---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_adding_specific_ports_of_an_equality_sequence
title: 등차수열의 특정한 항만 더하기(with.Java)
Adding Specific Ports of an Equality Sequence (with.Java)

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
date: 2023-08-23 09:00:00 +0900
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

### 다양한 조건에서 연산 처리하는 방법에 대하여(with.Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

문자열 code가 주어집니다.
code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

mode가 0일 때
code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
mode가 1일 때
code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

##### 입출력 예시

code: "abc1abc1abc"
result: "acbac"

즉, code의 각 인덱스 i에 따라 다음과 같이 mode와 ret가 변합니다.
따라서 "acbac"를 return 합니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public String solution(String code) {
        String answer = "";
        String[] codeArr = code.split("");
        Integer mode = 0;
        for (Integer i = 0; i < codeArr.length; i++){
            if(codeArr[i].equals("0") || codeArr[i].equals("1")){
                mode = (mode == 0) ? 1 : 0;
                continue;
            }
            if(i % 2 == 0){
                if(mode == 0){
                    answer += codeArr[i];
                }
            } else{
                if(mode == 1){
                    answer += codeArr[i];
                }
            }
        }
        if(answer.equals("")){
            answer += "EMPTY";
        }
        return answer;
    }
}
```

##### 풀이 설명

문자열인 code를 문자열 배열의 형태로 선언된 codeArr로 split()를 활용해 값을 삽입하였습니다.
이후 codeArr의 요소 크기만큼 반복하는 반복문을 선언했습니다.
이 때, 반복문 안에는 총 2개의 조건문이 존재하는데 첫 번째 조건문은 codeArr의 요소 중 0, 1의 값이 포함되었는지 확인합니다. 만약 존재한다면 그 값에 대해서 서로의 값을 가질 수 있도록 재할당해줬습니다. 더하여 문제에 나온대로 숫자는 결과값에 포함되면 안되기 때문에 continue문을 사용하여 해당되는 for문 index에 대하여 넘길 수 있도록 처리를 해줬습니다. 2번 째 조건문은 index의 홀짝을 판별하는 표현식을 사용했습니다. 해당되는 것에 따라 mode의 값을 확인하고 결과 값에 codeArr[index]에 해당하는 String 요소를 추가하고 있습니다.
마지막으로 문제에서 나왔듯 answer의 값이 empty 상태라면 "EMPTY"를 삽입하라는 조건이 있습니다. 그에 따라 equals 문으로 empty값인지 판별 후, 지정된 문자열을 삽입했습니다.
