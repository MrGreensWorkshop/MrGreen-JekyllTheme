---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_adding_specific_ports_of_an_equality_sequence
title: Adding Specific Ports of an Equality Sequence (with.Java)


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

### Adding specific ports of an equality sequence (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to go through the Coding Test problem, providing a retrospective on the problem we solved, and learning about other ways to solve it.
Let's start with the problem.

#### Problem

You are given two integers a, d and a boolean array included of length n. Write a solution function that returns the sum of only those terms in the included sequence whose first term is a and whose tolerance is d such that included[i] means term i + 1, where included is true for terms 1 through n in this included sequence.

What is an identity sequence in this problem?
It is a list of numbers where the difference between neighboring numbers is the same.

##### Example input and output

a: 3
b: 4
included: [true, false, false, true, true]
result: 37

This means that a and d are 3 and 4, respectively, and the length of included is 5. A tabular representation of this would look like this

Term 1 Term 2 Term 3 Term 4 Term 5 Term
equality: 3, 7, 11, 15, 19
included: true, false, false, true, true
So, we can add the terms 1, 4, and 5 that correspond to true and return 3 + 15 + 19 = 37.

#### My solution to the problem

```java
class Solution {
    public int solution(int a, int d, boolean[] included) {
        int answer = 0;
        for(int i = 0; i<included.length; i++){
            if(included[i]){
                answer += a;
            }
            a += d;
        }
        return answer;
    }
}
```

##### Solution Explained

Since we need to iterate over the size of included, we use a loop and store the value of a in answer if any of the elements of included in the subsequent boolean array are true. Given that it is an equality sequence, we implemented the logic by continuing to add as many values of d to a in the loop.
