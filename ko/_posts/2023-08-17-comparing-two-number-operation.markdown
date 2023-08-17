---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Comparing_Two_Number_Operation
title: 두 수의 연산값 비교에 대하여(with.Java)

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
date: 2023-08-17 09:00:00 +0900
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

### 문자열 겹쳐쓰는 방법에 대하여(with. Java)

{:data-align="center"}

<!-- outline-end -->

코딩 테스트 문제를 풀며, 풀었던 문제에 대한 회고와 다른 풀이 방법을 알아보며, 알아가고자 합니다.
문제에 대해 먼저 알아보겠습니다.

#### 문제

문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

##### 입출력 예시

my_string: He11oWor1d
overwrite_string: lloWorl
s: 2
result: HelloWorld

즉, my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 해야 하는 문제입니다.

#### 문제에 대한 나의 풀이

```java
class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        char[] a = my_string.toCharArray();
        char[] b = overwrite_string.toCharArray();
        int j = 0;
        int limit = s + b.length;
        for(int i = s; i<limit; i++){
            a[i] = b[j];
            j++;
        }
        answer = new String(a);
        return answer;
    }
}
```

저 같은 경우 toCharArray() 메서드를 활용해 my_string, overwrite_string 총 2개의 string 타입의 변수를 character array타입으로 변경해서 저장합니다. 이럴 경우 문자 하나당 하나의 인덱스로 매핑됩니다. 이후, 각각의 for문으로 각각의 요소에 대해 s번째 요소부터 j를 통해 문자열을 대체하는 방식으로 이 문제를 풀었습니다.
더하여 마지막에 char형 배열을 new String() 함수를 사용하여 합쳐 하나의 String 타입으로 만들어 출력하였습니다.

그럼 이제 java에서 제공하는 함수를 사용하여 더 깔끔하게 푸는 방식을 알아보겠습니다.
바로 substring()입니다. 이 함수는 string 타입에 대해서 원하는 위치에서 자를 수 있습니다.

##### substring() 사용법

substring()은 인자를 총 2개 받을 수 있습니다. substring(int beginIndex, int endIndex) 이렇게 사용할 수 있습니다. 이렇게 2개의 인자를 사용할 경우 beginIndex부터 endIndex까지의 문자열을 반환합니다.

##### substring(int beginIndex, int endIndex) 예시

```java
String str = "012345";

// substring(int beginIndex, int endIndex)
str.substring(1,3)

// result: 123
```

또는 인자를 1개만 사용하는 방법도 있습니다.substring(int previousIndex) 이런식으로 말이죠. 이렇게 사용할 경우 0번 째 index부터 previousIndex에 적힌 int 타입의 숫자 -1번 째까지를 제외한 나머지 문자열을 반환합니다.

##### substring(int previousIndex) 예시

```java
String str = "012345";

// substring(int index)
str.substring(3)

// result: 345
```

그럼 지금까지 배운 substring() 함수를 이용해 제가 짠 코드보다 간결하게 같은 문제를 해결해보도록 하겠습니다.

#### substring()을 활용한 풀이

```java
class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String before = my_string.substring(0, s);
        String after = my_string.substring(s + overwrite_string.length());
        return before + overwrite_string + after;
    }
}
```

정말 짧아졌습니다. 작성된 코드는 문자열을 s의 기준에 맞춰 앞과 뒤로 잘라 변경할 문자열을 붙여넣는 방법을 사용했습니다. 저도 다음 테스트 문제에서 이 함수를 활용 해야겠습니다. 고생하셨습니다.
