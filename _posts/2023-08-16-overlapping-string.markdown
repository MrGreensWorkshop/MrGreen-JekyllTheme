---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_overlapping_strings
title: About overlapping strings(with. Java)
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
date: 2023-08-16 09:00:00 +0900
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

### How to overlap strings (with. Java)

{:data-align="center"}

<!-- outline-end -->

We're going to learn by solving a coding test problem, reflecting on the problem we solved, and exploring other ways to solve it.
Let's start with the problem.

#### Problem

You are given the strings my_string, overwrite_string, and an integer s. Write a solution function that returns a string that replaces the string my_string with the string overwrite_string from index s in the string my_string to the length of overwrite_string.

##### Example input and output

my_string: He11oWor1d
overwrite_string: lloWorl
s: 2
result: HelloWorld

The problem is that the part of my_string from index 2 up to the length of overwrite_string is "11oWor1" and we need to return "HelloWorld" with this replaced by "lloWorl".

#### My solution to the problem

```java
class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        char[] a = my_string.toCharArray();
        char[] b = overwrite_string.toCharArray();
        int j = 0;
        int limit = s + b.length;
        for(int i = s; i<limit; i++){
            a[i] = b[j];
            j++;
        }
        answer = new String(a);
        return answer;
    }
}
```

In my case, I use the toCharArray() method to change two variables of string type, my_string and overwrite_string, to character array type. In this case, each character is mapped to one index. We then solved this problem by replacing the string from the sth element through j for each for statement.
Finally, we combined the char array into a single String type using the new String() function and printed it out.

Now let's look at a cleaner way of solving this problem using a function provided by java.
This is substring(), which allows you to truncate a string type at any position.

##### How to use substring()

substring() takes two arguments: substring(int beginIndex, int endIndex) You can use it like this. With two arguments, this returns a string from beginIndex to endIndex.

##### substring(int beginIndex, int endIndex) Example

```java
String str = "012345";

// substring(int beginIndex, int endIndex)
str.substring(1,3)

// result: 123
```

Alternatively, you can use only one argument, like this: substring(int previousIndex), which will return the rest of the string, starting from index 0 and ending with the number -1 of the int type written in previousIndex.

##### substring(int previousIndex) Example

```java
String str = "012345";

// substring(int index)
str.substring(3)

// result: 345
```

Let's try to solve the same problem using the substring() function we've learned so far, but more concisely than the code I wrote.

#### solved using substring()

```java
class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String before = my_string.substring(0, s);
        String after = my_string.substring(s + overwrite_string.length());
        return before + overwrite_string + after;
    }
}
```

That's really short, and the code I wrote just truncated the string before and after to match the criteria in s and pasted the string to be changed. I'll have to utilize this function in my next test problem, thanks for the work. Translated with www.DeepL.com/Translator (free version)
