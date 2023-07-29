---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Image_Compression_1
title: About image compression(1)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Development
# multiple tag entries are possible
tags: [development]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-22 09:00:00 +0900
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

### This is an article about Image Compression.

{:data-align="center"}

<!-- outline-end -->

#### Package Manager

For example, let's say we want to apply compression to our service for images used in the service and for images that will be uploaded in the future.

##### What is the ideal design?

To me, an ideal design looks like this

1. understand the project structure I'm using
2. research relevant libraries
3. select the right libraries for my project
4. test the libraries and investigate how many of their maximum size can be reduced to the required {num}MB each
5. check the average size of images rendered on the current service
6. select applicable libraries and test them
7. compress existing uploaded images
8. compress future uploaded images

**Where should image compression be done?**
Before actually applying it, I was wondering where image compression should be performed in general (client or server).
We'll cover that in part 2.
