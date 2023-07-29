---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Local_Session_Storage
title: About local & session storage

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Browser
# multiple tag entries are possible
tags: [browser]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-29 09:00:00 +0900
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

### About Local Storage and Session Storage

{:data-align="center"}

<!-- outline-end -->

I've been assigned to develop a logic system for non-members, which has given me some time to learn about storage concepts.
I thought the concepts I learned were very useful, so I'd like to summarize them in a post.

#### Local Storage Concept

First, the concept of Local Storage.
Local Storage is a web storage mechanism that persistently stores data on the client side of a web browser. With local storage, stored data is retained even when the web page is closed or restarted.

Local storage is provided as part of the Web Storage API introduced in HTML5. You can use this API to store and retrieve data in local storage. Local storage is domain- and browser-dependent and can be accessed from any page in the same domain.

Local storage stores data as key-value pairs. Data is stored as strings, and you can add, modify, delete, and retrieve data in local storage using JavaScript. Local storage is primarily used by web applications to persistently store and utilize user settings, user preferences, custom data, and more.

The capacity limit for local storage can vary from browser to browser, and is typically around 5 MB. Browsers allow you to view and manage data in local storage through developer tools.

#### Session Storage concepts

The following are the concepts of Session Storage

It is one of the web storage mechanisms for storing data on the client side of a web browser.
Session storage is used by web applications to temporarily store and maintain data for the duration of a user's session.

Session storage is maintained only on the client side, and the stored data is deleted when you close the web browser or end the session. This means that session storage is not intended for permanent data storage, but rather for maintaining temporary data or session-related information.

Session storage allows you to read and write data from a web page using JavaScript. You can access session storage through the sessionStorage object, and data is stored as key-value pairs. The stored data is specific to your domain and session and cannot be accessed by other domains or sessions.

Session storage can be utilized for a variety of purposes in web applications, including keeping users logged in, storing temporary data, and setting user preferences. However, you need to be careful from a security perspective. Storing critical information or sensitive data in Session Storage can introduce vulnerabilities and should be used with security in mind.

#### Differences between Local Storage and Session Storage

The following are the differences

1. Data lifetime: Session storage stores data for as long as the web browser session lasts, and the data is deleted when you close the web browser or end the session. Local storage, on the other hand, keeps data until it is explicitly removed.
2. Data sharing: Session storage can only access data within the same session (the same web browser session). You can access the same session storage from different browser tabs or windows, but not from different sessions. Local storage, on the other hand, allows you to access data from all tabs and windows in the same domain.
3. Data persistence: Session storage persists only for the duration of the web browser session, so the data is fresh when the user revisits the web page. Local storage, on the other hand, keeps data persistent. Even if a user revisits a web page, the previously stored data remains intact.
4. Capacity limit: Generally, the capacity limit of local storage is higher than that of session storage. Session storage typically has a capacity of around 5 MB, while local storage can have a larger capacity. However, different browsers may have different capacity limits, so the actual capacity may vary depending on the browser.
   Translated with www.DeepL.com/Translator (free version)
