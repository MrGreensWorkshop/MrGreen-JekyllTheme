---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Dice_Games
title: About Dice Games (with.Java)

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
date: 2023-08-25 09:00:00 +0900
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

### About dice games (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, doing a retrospective on the problem we solved, and looking at other ways to solve it.
Let's start with the problem.

#### Problem

You have three dice with the numbers 1 through 6 written on them. Let's call the numbers that come up when you roll the three dice A, B, and C respectively.

If all three numbers are different, you get a score of A + B + C.
If any two of the three numbers are the same and the other two are different, you get (a + b + c) × (a2 + b2 + c2 ).
If all three numbers are equal, score (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 ).
Write a solution function that returns the number of points you get when given three integers a, b, and c as parameters.

##### Example input and output

a: 2
b: 6
c: 1
result: 9

In other words, in example 1, all three dice numbers are different, so we get 2 + 6 + 1 = 9. Therefore, we return 9.

#### My solution to the problem

```java
class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        if(a != b && a != c && b != c){
            answer = a + b + c;
        } else if(a == b && a != c || a == c && b != c || b == c && a != b ){
            answer = (a + b + c) * ((int)Math.pow(a,2) + (int)Math.pow(b,2) + (int)Math.pow(c,2));
        } else {
            answer = (a + b + c) * ((int)Math.pow(a,2) + (int)Math.pow(b,2) + (int)Math.pow(c,2)) * ((int)Math.pow(a,3) + (int)Math.pow(b,3) + (int)Math.pow(c,3));
        }
        return answer;
    }
}
```

##### Solution Explanation

In the code I wrote, there are 3 main cases that I wrote to allow me to perform an operation based on a condition.
In the first case, I made it possible to perform the operation A+B+C if A and B are not equal, A and C are not equal, and B and C are not equal.
For the 2nd condition, we used the Math.pow function for powers so that we could perform the operation (a + b + c) × (a2 + b2 + c2 ) if a and b are equal and a and c are not equal, or if a and c are equal but b and c are not equal, or if b and c are equal but a and b are not equal.
The function returned as a double, so we prefixed it with an int. The last condition is that a == b == c, which would otherwise be the case, so in this case,
(a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 ) to perform the corresponding operation.
