---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_db_separation_2
title: About db separation(2)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: DB
# multiple tag entries are possible
tags: [db, architecture]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-02 09:00:00 +0900
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

### About db separation(2)

{:data-align="center"}

<!-- outline-end -->

In this post, I'll explain why companies use two different DB services (AWS S3, MongoDB, etc.) and why they use DB from different services.

#### Is it common to use different services when splitting a DB into two?

In fact, many companies and services use this combination. This choice can be appropriate because each database has different purposes and requirements.

#### So how do you separate the purposes and requirements?

Let's look at AWS S3 and MongoDB to see.

- AWS S3 is a large file store and is mainly used to store static files (images, videos, etc.) or unstructured data like log files. S3 is highly scalable and durable, and you can have as much storage space as you want. Because of these benefits, log data can be stored in S3 and read when needed.
- MongoDB is a document-oriented NoSQL database, which is perfect for storing unstructured data like logs. MongoDB specializes in storing and retrieving documents in JSON format and can efficiently handle large amounts of log data.

#### Conclusion

Using AWS S3 to store log data and MongoDB to store unstructured log data is generally a good approach. It allows you to choose the appropriate storage and manage your data based on the purpose and nature of the data.
