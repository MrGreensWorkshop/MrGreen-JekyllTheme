---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Using_Class_in_JS
title: About using classes in JS
# title: About using class in JS

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Javascript
# multiple tag entries are possible
tags: [javascript]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-21 09:00:00 +0900
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

### About using classes in JS

{:data-align="center"}

<!-- outline-end -->

I work with JS and sometimes need to use classes.
I've found myself wondering why I don't use classes more often, so I thought I'd write a post about it.

First of all, why do we not use classes in JavaScript if we can use them?

#### Why don't we use Classes in JavaScript?

There are several reasons for this

1. Functional programming: JavaScript is widely known as a functional programming language. The functional programming paradigm emphasizes the use of first-class functions and closures to avoid state changes and mutable data. Some developers find this approach to be more concise and predictable.
2. Prototype-based inheritance: Classes in JavaScript are really just syntactic sugar for "prototype-based inheritance," which means you can directly manipulate a chain of prototypes to implement similar functionality without using classes.
3. Pre-ES6 code compatibility: In JavaScript, classes were introduced in ES6 (ES2015), so developers who want to maintain compatibility with older versions of JavaScript code may not want to use classes.
4. Learning curve: Classes in JavaScript work a little differently than classes in other object-oriented languages. In particular, the way this keyword works can be confusing for early learners.

#### Conclusion

Despite the above reasons, many JavaScript developers are leveraging classes to apply object-oriented programming.
In particular, JavaScript's superset languages, such as TypeScript, utilize classes and interfaces to enable stronger type checking and code structuring.

#### Reference

##### What is a first-class function?

A programming language treats functions as "first-class objects". This means that functions are treated the same as any other value in the language.

##### How to use first-class functions

- Assign to a variable: You can assign a function to a variable and call the function through that variable.
- Pass as a function argument: You can pass a function as an argument to another function. You can use this to create higher-order functions.
- Return as function result: Functions can return another function as a result.
- Store in a data structure: Functions can be stored in a data structure, such as an array or object.
