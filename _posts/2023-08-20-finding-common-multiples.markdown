---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Finding_Common_Multiples
title: About Finding Common Multiples (with.Java)

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
date: 2023-08-20 09:00:00 +0900
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

### About finding a common multiple (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn as we go by solving the Coding Test problem, reflecting on the problem we solved, and exploring other ways to solve it.
Let's start with the problem.

#### Problem

Given an integer number and n, m. Complete the solution function so that it returns 1 if number is a multiple of n and a multiple of m, or 0 otherwise.

##### Example input and output

num: 60
n: 2
m: 3
result: 1

In other words, 60 is a multiple of 2, which is also a multiple of 3, so 1 should be the result.

#### My solution to the problem

```java
class Solution {
    public int solution(int number, int n, int m) {
        int answer = (number % n == 0) && (number % m == 0) ? 1 : 0;
        return answer;
    }
}
```

To determine the conjugate multiple, we divided num by n via the % operator and determined that if the remainder was zero, it was a multiple, so we solved by putting a 0 in answer if it wasn't a 1. At the same time, it must also be a multiple of m, so we added a condition using the && AND logical operators.
