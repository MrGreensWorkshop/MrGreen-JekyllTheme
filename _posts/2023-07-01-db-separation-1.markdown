---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_db_separation_1
title: About db separation(1)

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
date: 2023-07-01 09:00:00 +0900
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

### About db separation(1)

{:data-align="center"}

<!-- outline-end -->

In my company, we use two DBs, one for log records and one for services.
During development, I became curious about why we separate the DBs.

#### Benefits of separating DBs by purpose

1. Performance and scalability: The DB for service should be focused on storing and processing key business data. The DB for log recording often consists of a large amount of small-sized data, and if logs are stored in the DB for service, performance may be affected. Separating the DB for log recording allows you to apply specialized settings and structures to the loading and processing of log data, improving performance and scalability.
2. Data security: Logs can be used primarily for debugging, auditing, and analyzing purposes, so storing logs with sensitive business data on the same division can be a security issue. Separating DBs for log recording allows you to independently configure access control and security settings for log data.
3. operation and maintenance: The DB for service handles the main business logic, so you need to perform tasks such as maintenance, performance optimization, and backup. By separating the DB for log recording, you can perform log management tasks without affecting the work of the main service division. In addition, by managing log data separately, you can focus more on log management tasks.
4. Analysis and monitoring: Log data provides important information about system behavior and troubleshooting. By keeping log divisions separate, you can easily analyze and monitor log data. You can use log analysis tools and visualization tools to gain useful insights from log data, which can help you monitor and improve system performance, user behavior, errors, and more.

#### Conclusion

By separating the DB for recording logs from the mainstream division, you can gain benefits in terms of performance, security, operations and maintenance, and analytics and monitoring.

Now you know the benefits of separating DBs.
Now, in our case, we are using different services for our two DBs (AWS S3, MongoDB), and I will explain why we are using different services in part 2.
