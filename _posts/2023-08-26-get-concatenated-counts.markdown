---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Get_Concatenated_Counts
title: How to get concatenated counts, sort by conditions, and get concatenated counts (with.Java)

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
date: 2023-08-26 09:00:00 +0900
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

### How to get the number of concatenations, categorize by conditions, and get the number of concatenations (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, reflecting on the problem we solved, and exploring other ways to solve it.
Let's start with the problem.

#### Problem

You are given a list num_list containing integers. Complete the solution function so that it returns the sum of the only odd numbers in num_list in order and the only even numbers in order.

##### Example input and output

num_list : [3, 4, 5, 2, 1]
result: 393

The number of odd numbers concatenated is 351, and the number of even numbers concatenated is 42. The sum of the two numbers is 393.

#### My solution to the problem

```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        String[] strArray = new String[num_list.length];
        String even = "";
        String odd = "";

        for(int i = 0; i < num_list.length; i++){
            strArray[i] = String.valueOf(num_list[i]);
            if(num_list[i] % 2 == 0){
                even += strArray[i];
            } else{
                odd += strArray[i];
            }
        }
        answer = Integer.parseInt(even) + Integer.parseInt(odd);
        return answer;
    }
}
```

##### Explanation of the solution

This code implements a function that processes a given array of integers, num_list, to isolate the even and odd numbers separately, then combines the isolated even and odd numbers into a single string each, and finally converts these two strings to integers and returns the summed value.

Let's take a look at the key parts one by one

int solution(int[] num_list): this is a method that takes an array of integers as input and returns an integer sum.

String[] strArray = new String[num_list.length];: Creates an array of strings called strArray with a length equal to the length of the input num_list. This array will be used to convert each integer element to a string and store it.

for(int i = 0; i < num_list.length; i++) { ... }: Executes a loop for each element of the given array num_list.

strArray[i] = String.valueOf(num_list[i]);: Convert the integer that is the current element to a string and store it at the corresponding index in strArray.

if(num_list[i] % 2 == 0) { ... } else { ... }: Determine whether the current element is an even or odd number.

even += strArray[i]; and odd += strArray[i];: Add the value of the current element converted to a string to the strings even and odd, respectively. Thus, the string even, representing even numbers, will contain even numbers, and the string odd, representing odd numbers, will contain odd numbers, in that order.

answer = Integer.parseInt(even) + Integer.parseInt(odd);: Convert the even and odd numbers stored as strings to integers and store their added values in answer.

return answer;: Returns answer, which is the final calculated sum.

The purpose of this code is to separate the even and odd numbers of a given array of integers and calculate their sum.
