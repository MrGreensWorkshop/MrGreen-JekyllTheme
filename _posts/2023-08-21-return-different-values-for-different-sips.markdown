---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_return_different_values_for_different_sips
title: How to return different values for different sips (with.Java)

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
date: 2023-08-21 09:00:00 +0900
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

### How to return different values based on sips (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn as we go along by solving coding test problems, reflecting on the problems we solved, and exploring other ways to solve them.
Let's start with the problem.

#### Problem

Given a positive integer n as a parameter, write a solution function that returns the sum of all positive integers less than or equal to n if n is odd, or the sum of the squares of all positive integers less than or equal to n if n is even.

##### Example input and output

n: 7
result: 16

This means that n is odd by 7. All positive odd numbers below 7 are 1, 3, 5, and 7, and their sum, 1 + 3 + 5 + 7 = 16, should be returned.

#### My solution to the problem

```java
import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        int[] newArray = new int[n/2];
        if(n % 2 == 0){
            Arrays.setAll(newArray, even -> (int)Math.pow((even+1)*2,2));
            answer = Arrays.stream(newArray).sum();
        } else {
            Arrays.setAll(newArray, odd -> (odd+2)*2-1);
            answer = Arrays.stream(newArray).sum()+1;
        }
        } return answer;
    }
}
```

##### Solution

Specify the size of the array by dividing newArray in half. To determine even and odd numbers, we utilize the Arrays.setAll function to reset the values of the elements in newArray. For even numbers, we need to square the values, so we do that with the Math.pow() function. We also cast Math.pow() to int since its default type is double. We then reassign the sum of the elements to the answer variable with Arrays.stream(arr).sum().
For odd numbers, I implemented similar logic as for even numbers, and for sum()+1, I added it because I didn't want the array to contain any 1s.

I solved the problem with an array as shown above, but there's actually a simpler way.
That's right, you can do the math through a loop instead of controlling it with an array!

#### How to do math through a loop

```java
class Solution {
    public long solution(int n) {
        long answer = 0;

        if (n % 2 == 1) {
            for (int i = 1; i <= n; i += 2) {
                answer += i;
            }
        } else {
            for (int i = 2; i <= n; i += 2) {
                answer += (long) i * i;
            }
        }
        } return answer;
    }
}
```
