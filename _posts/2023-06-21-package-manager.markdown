---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Package Manager
title: About Package manager

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: NPM
# multiple tag entries are possible
tags: [npm, yarn]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-21 09:00:00 +0900
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

### This is a post about the Package Manager.(w. npm & yarn)

{:data-align="center"}

<!-- outline-end -->

#### Package Manager

We work on projects and use package managers to develop and deploy applications.
However, depending on the project, we adopt npm or yarn, and I wondered what the clear differences are.

##### What is Node Package Manager (NPM)?

**npm is the official package manager for the Node.js ecosystem.**

- It is primarily used to develop and deploy Node.js applications.
- It can handle a variety of tasks in your JavaScript project, including managing dependencies, installing packages, and running scripts.
- It is the default package manager that comes with Node.js when you install it.

For more information, see: ##### What is Yarn?

**Yarn is a package manager developed by Facebook.**

- It provides faster package installation and dependency resolution compared to npm.
- It uses caching during the package installation process to minimize redundant downloads and uses a more consistent dependency resolution approach.
- It provides the ability to efficiently manage dependencies in multi-project repositories.

##### Result

While npm is used for basic package management in JavaScript projects, yarn may be preferred by developers who want faster dependency management and package installation than npm.
It's up to you to decide whether you want to use the default or approach it from a functional perspective, and then apply it to your project.
