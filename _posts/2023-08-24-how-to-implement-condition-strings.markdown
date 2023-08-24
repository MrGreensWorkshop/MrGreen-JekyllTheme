---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_implement_condition_strings
title: How to implement condition strings (with.Java)

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

### How to implement a condition string (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, reflecting on the problem we solved, and exploring other ways to solve it.
Let's start with the problem.

#### Problem

We want to compare the magnitude of two numbers based on a string, as follows.

If the two numbers are n and m
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
Given two strings, ineq and eq. Complete the solution function so that, given two integers n and m, it returns 1 if n and m satisfy the conditions in ineq and eq, and 0 otherwise.

##### Example input and output

ineq: "<"
eq: "="
n: 20
m: 50
result: 1

In other words, it returns 1 because 20 <= 50 is true.

#### My solution to the problem

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
        } return answer;
    }
}
```

##### Solution Explanation

We've handled four possible cases by constructing logic to determine if the ineq string matches < and, if so, return a value based on whether it matches the eq character string =.

However, I noticed that it didn't work for some cases.
After further study, I realized why.

This '==' operator doesn't work in some cases
In JavaScript, I used to use the comparison operator for comparison, but it is said that **Java recommends using the '.equals()' method rather than the '==' operator when comparing strings**. The reason is to compare the actual contents of the strings when comparing strings.

The == operator compares references (memory addresses), so if two strings have the same content but are stored in different memory, they may not be equal. The .equals() method, on the other hand, compares the actual contents of the strings, so if the contents are the same, they are equal.

Therefore, a comparison like ineq == "<" might not work correctly even if the string contents are the same. In this case, using the .equals() method to compare string contents is the correct way to go.

##### My solution to the problem, which I solved again and passed

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
        } return answer;
    }
}
```
