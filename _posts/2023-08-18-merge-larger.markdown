---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Merge_Larger
title: About Merge Larger(with.Java)

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

### About comparing two numbers (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to go through the Coding Test questions, reflecting on the problems we solved, and learning about other ways to solve them.
Let's start with the problem.

#### Problem

The operation ⊕ is an operation on two integers that returns the value written by concatenating the two integers. For example

12 ⊕ 3 = 123
3 ⊕ 12 = 312
Given two positive integers a and b, complete the solution function that returns the greater of a ⊕ b and b ⊕ a.

However, if a ⊕ b and b ⊕ a are equal, return a ⊕ b.

##### Example input and output

a: 9
b: 91
result: 991

That is, a ⊕ b = 991, and b ⊕ a = 919. The larger of the two is 991, so we return 991.

#### My solution to the problem

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
        } return answer;
    }
}
```

We've declared an ArrayList of type ArrayList and added values to it by converting Integer a and b to String. Then we've used a loop to assign sum of type String to the element
arrList[0]+arrList[1] and reassigns the sum value to answer if it is greater than the value in answer. The same is done for subsequent iterations of the form arrList[1]+arrList[0].

Now let's solve the problem using Math, because it's simpler.

##### First of all, what is Math in Java?

The Math class is a utility class used to perform mathematical operations in Java.

Let's see some of the important methods to use the Math class.

##### Solving problems with Math

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

I've inserted a and b, which are int types, into String.valueOf. In strSum1, 2, I've added a and b, which are String types, and stored them, and used the Math.max() function to return the larger value. The overall logic is similar to my solution, but I'm impressed that it can be solved with an internal Java module without using a loop.
