---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Array_List_Difference
title: The difference between an Array and a List (with.Java)
# title: About browser

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Java
# multiple tag entries are possible
tags: [java, coding test, join]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-08-14 09:00:00 +0900
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

### The difference between an Array and a List (with.Java)

{:data-align="center"}

<!-- outline-end -->

I'm preparing for a coding test and learning about grammar and organization. In this article, we'll learn about arrays and lists.

#### The purpose of Arrays and Lists

Array and List are data structures for managing multiple pieces of data under one name.

##### They serve the same purpose, but what's the difference?

Array:

- It has a fixed space and an index (identifier). ex) arr[5]
- Size allocation is mandatory when creating the object. ex) char[] a = new char[5]
- In terms of speed, inserts and deletes are slow and data lookups are fast.

List:

- No Index (identifier), if the 0th element is missing from a list with a size of 3, the newly added element can be stored at 0th.
- No need for size allocation - in Java, it's automatically increased by a factor of 1.5.
- In terms of speed, inserts and deletes are fast and data lookups are slow.

Now that we know the differences, we can conclude.

##### Conclusion

When faced with a problem, if the data has a fixed size, use an Array; if there is no mention of size, use an Array.

Having concluded, we often write ArrayList among Java methods.
What is it all about...?

#### What is an ArrayList?

It's a method that combines the best of Array and List, allowing you to write identifiers with index, an Array attribute, and dynamically allocate the size with a List attribute.

In other words, it is a List that can write index!

##### How to use ArrayList

```java
import java.util.ArrayList

ArrayList<Integer> integers1 = new ArrayList<Integer>(); // Specify the Integer type
```

##### introduces various uses

- add(index, element): Adds element to the ArrayList at index. Index can be omitted, but if so, the value is added to the end of the ArrayList.
- set(index, element): Resets element to match index in the ArrayList. Any element at index that exists in the existing ArrayList will be lost.
- remove(index | element): Clears the element at index in the ArrayList or directly clears an element in the ArrayList. remove can assign the value of the cleared element to a variable.
- clear(): Deletes all elements in an ArrayList.
- size(): Get the size of an ArrayList as an int type.
- get(index): Get the element that matches the index of the ArrayList.
- contains(element): Returns in the form of a boolean if the element exists in the ArrayList.
- indexOf(element): Returns the index in the form of an int if the element exists in the ArrayList.
