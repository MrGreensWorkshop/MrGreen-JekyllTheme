---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_useInfiniteQuery
title: About useInfiniteQuery

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Module
# multiple tag entries are possible
tags: [module, react query, hooks]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-15 09:00:00 +0900
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

### This is a post about useInfiniteQuery (infinite scrolling).

{:data-align="center"}

<!-- outline-end -->

#### What is infinite scroll?

A user experience approach where content continues to load when the user reaches the bottom of the page.

##### Uses

It is primarily used in pagination. You use it when you want to show a large amount of data at once while minimizing the user's clicks.

- It's easy to think of it as a way of describing an action: you bring up a certain number of items and press a button to load a set of data. The infinite scrolling should stop when the data has been loaded. This way, the infinite scrolling allows for the personalization that users want for their options.

##### How to use

1. insert queryFunction and queryParams into the properties of useInfiniteQuery.
2. in queryFunction, enter the infinite scroll target API, i.e. the dataset you want to fetch.
3. for queryParams, enter the variables you want to store for a fixed number of rows of data.
