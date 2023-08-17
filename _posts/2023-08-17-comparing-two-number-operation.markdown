---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Comparing_Two_Number_Operation
title: Comparing Two Number Operations (with.Java)

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

### For comparing two numbers (with.Java)

{:data-align="center"}

<!-- outline-end -->

As we go through the Coding Test questions, we'll look back on the problems we solved and learn about other ways to solve them.
Let's start with the problem.

#### Problem

The operation ⊕ is an operation on two integers that returns the value written by concatenating the two integers. For example

12 ⊕ 3 = 123
3 ⊕ 12 = 312
Given positive integers a and b, complete a solution function that returns the greater of a ⊕ b and 2 _ a _ b.

However, if a ⊕ b and 2 _ a _ b are equal, return a ⊕ b.

##### Example input and output

a: 2
b: 91
result: 364

This means that the value of 2 _ a _ b, 364, is greater than the value of a ⊕ b, 291, so the value of 2 _ a _ b should be stored in the result.

#### My solution to the problem

```java
import java.util.*;

class Solution {
    public int solution(int a, int b) {
        int answer = 0;

        ArrayList<String> arrList = new ArrayList<>();
        arrList.add(String.valueOf(a));
        arrList.add(String.valueOf(b));

        var i = arrList.get(0)+arrList.get(1);
        var j = 2*a*b;


        answer = Integer.parseInt(i) >= j ? Integer.parseInt(i) : j;

        return answer;
    }
}
```

Create an ArrayList to store the int types a and b by converting them to strings.
We declare a variable i to hold the value of a ⊕ b. We store the value of 2 _ a _ b in variable j. Then, we use a ternary operator to convert i to int and return answer if the value is greater than or equal to j, and j if it is less.

Now, let's solve the problem using Math.

##### First of all, what is Math in Java?

The Math class is a utility class used to perform mathematical operations in Java.

Let's see some of the important methods to use the Math class.

##### Using the Math class

Math.max(a, b): Returns the greater of the two arguments.

Math.min(a, b): Returns the smaller of two arguments.

Math.abs(a): Returns the absolute value of the given number.

Math.pow(a, b): Returns the value of a to the power of b.

Math.sqrt(a): Returns the square root of a given number.

Math.round(a): Rounds the given number and returns it as an integer.

Math.floor(a): Returns the largest integer that is less than or equal to the given number.

Math.ceil(a): Returns the smallest integer that is greater than or equal to the given number.

Math.random(): Returns a random number greater than 0 and less than 1.

Math.sin(a), Math.cos(a), Math.tan(a): Returns the sine, cosine, and tangent values of a given angle.

Math.exp(a): Returns the value of a squared of e (the natural constant).

Math.log(a): Returns the value of the natural logarithm of a given number.

Math.log10(a): Returns the decimal logarithm of a given number.

Math.PI: Returns the value of the circumference ratio (π).

Math.E: Returns the value of the natural constant e.

###### Solve problems with Math

````java
class Solution {
    public int solution(int a, int b) {
        return Math.max(Integer.parseInt(String.valueOf(a)+String.valueOf(b)),2*a*b);
    }
}
``` Translated with www.DeepL.com/Translator (free version)
````
