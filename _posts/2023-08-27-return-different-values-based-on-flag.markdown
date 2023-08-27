---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Return_Different_Values_Based_On_Flags
title: How to return different values based on flags (with.Java)

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

### How to return different values based on flags (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, doing a retrospective on the problem we solved, and looking at other ways to solve it.
Let's start with the problem.

#### Problem

Given two integers a, b and a boolean variable flag as parameters, write a solution function that returns a + b if flag is true or a - b if flag is false.

##### Example input and output

a: -4
b: 7
flag: true
result: 3

In other words, since flag is true, it returns a + b = (-4) + 7 = 3.

#### My solution to the problem

```java
class Solution {
    public int solution(int a, int b, boolean flag) {
        int answer = (flag) ? a+b : a-b;
        return answer;
    }
}
```

##### Solution

Utilize the ternary operator to perform the a+b, a-b operations based on the boolean value of flag.
