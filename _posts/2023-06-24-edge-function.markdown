---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Edge-Function
title: About edge function

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Module
# multiple tag entries are possible
tags: [module]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-24 09:00:00 +0900
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

### This is a post about the Edge function.

{:data-align="center"}

<!-- outline-end -->

#### What is an edge function?

An edge function is a serverless computing function that runs in a cloud environment. They are typically used as part of a cloud service, such as a web application or API.

I'll focus on Vercel and NextJS, which I use at my company.

##### Vercel

###### What is Vercel?

Vercel is a serverless platform for static websites and single-page applications (SPAs). Vercel's AS Function is a form of Serverless Functions provided by this platform.

###### Vercel Edge function

A small piece of code that runs in a cloud environment and is used to generate and process responses to specific HTTP requests. It is an implementation of Function-as-a-Service (FaaS), one of the core concepts of serverless architecture.

It can be used in conjunction with other features of Vercel, and can be used to develop and deploy the full functionality of applications hosted alongside static websites.

##### NextJS

###### What is NextJS?

It is a React-based framework that supports server-side rendering (SSR), static site generation, client-side routing, and more. In Next.js, AdsFunction is a feature that allows you to implement and execute backend logic using serverless functions.

###### NextJS Edge function

is implemented by creating an API route. You create a file with a .js or .ts extension, and within that file you write the logic for the API endpoint. This file is built with your Next.js application, and the generated API endpoints can be called by clients or other parts of your application.
In addition, you can implement backend logic within your Next.js application, interact with databases, call external APIs, authenticate and authorize, upload files, and more. This gives your Next.js application full integration between client and server, and it can handle many different kinds of data requests.
