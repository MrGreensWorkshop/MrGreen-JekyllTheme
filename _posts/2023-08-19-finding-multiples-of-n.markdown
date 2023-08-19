---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Finding_Multiples_Of_N
title: About finding multiples of n (with. Java)

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
date: 2023-08-19 09:00:00 +0900
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

### About comparing two numbers (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to go through the Coding Test questions, reflecting on the problems we solved, and learning about other ways to solve them.
Let's start with the problem.

#### Problem

Given an integer num and n as parameters, complete the solution function so that it returns 1 if num is a multiple of n and 0 if it is not a multiple of n.

##### Example input and output

num: 98
n: 2
result: 1

In other words, since 98 is a multiple of 2, 1 should be the result.

#### My solution to the problem

```java
class Solution {
    public int solution(int num, int n) {
        int answer = 0;
        answer = (num % n == 0) ? 1 : 0;
        return answer;
    }
}
```

The key was to determine the multiple, so we divided num by n via the % operator and determined that if the remaining value was 0, it was a multiple, so we put a 0 in answer if it wasn't a 1.
