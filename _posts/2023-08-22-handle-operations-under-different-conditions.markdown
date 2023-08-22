---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_handle_operations_under_different_conditions
title: How to handle operations under different conditions (with.Java)

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
date: 2023-08-22 09:00:00 +0900
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

### How to handle operations under different conditions (with.Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, reflecting on the problem we solved, and exploring other ways to solve it.
Let's start with the problem.

#### Problem

You are given the string code.
Read code from front to back and if the character is "1", change mode. Read code according to mode and produce the string ret.

There are 0s and 1s for mode, and we increment idx by 1 from 0 to the length of code - 1, behaving as follows depending on the value of code[idx].

When mode is 0
If code[idx] is not "1", append code[idx] to the end of ret only if idx is an even number.
If code[idx] is "1", change mode from 0 to 1.
When mode is 1
If code[idx] is not "1", append code[idx] to the end of ret only if idx is odd.
If code[idx] is "1", change mode from 1 to 0.
Complete the solution function to return the string ret created by the string code.

Note that mode is 0 to start, and if the ret you want to return is an empty string, return "EMPTY" instead.

##### Example input and output

code: "abc1abc1abc"
result: "acbac"

This means that for each index i in code, mode and ret change as follows.
Therefore, it returns "acbac".

#### My solution to the problem

```java
class Solution {
    public String solution(String code) {
        String answer = "";
        String[] codeArr = code.split("");
        Integer mode = 0;
        for (Integer i = 0; i < codeArr.length; i++){
            if(codeArr[i].equals("0") || codeArr[i].equals("1")){
                mode = (mode == 0) ? 1 : 0;
                continue;
            }
            if(i % 2 == 0){
                if(mode == 0){
                    answer += codeArr[i];
                }
            } else{
                if(mode == 1){
                    answer += codeArr[i];
                }
            }
        }
        if(answer.equals("")){
            answer += "EMPTY";
        }
        } return answer;
    }
}
```

##### Solution

The string code was inserted using split() into codeArr, which is declared as an array of strings.
We then declared a loop that iterates over the elements in codeArr.
There are a total of two conditional statements in the loop, the first of which checks to see if any of the elements in codeArr contain values of 0 or 1. If they do, we reassign them so that they can have each other's values. In addition, since the problem states that numbers should not be included in the result, we use a continue statement to allow them to be passed to the corresponding for statement index. The second conditional statement used an expression to determine the sip for index. We're checking the value of mode based on which one applies and adding a String element to the result value corresponding to codeArr[index].
Finally, there is a condition that says to insert "EMPTY" if the value of answer is empty, as shown in the question. We checked if it is empty with the equals statement and inserted the specified string.
Translated with www.DeepL.com/Translator (free version)
