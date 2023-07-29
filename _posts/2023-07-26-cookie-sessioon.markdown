---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Cookie_Session
title: About cookies and sessions
# title: About cookie and session

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Network
# multiple tag entries are possible
tags: [network]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-26 09:00:00 +0900
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

### About cookies and sessions

{:data-align="center"}

<!-- outline-end -->

While learning about web frameworks this time around, I heard about the ease of state management.
So, when I was researching what state management involves, I came across cookies and sessions.

I had been thinking about cookies and sessions as similar concepts, but I realized that they are only the same in a larger context, and that they are different concepts that need to be understood separately. So I'm writing to share what I've learned.

What are we talking about when we talk about state management in web frameworks?

#### What is state management?

It is a state management mechanism used in web development. Cookies and sessions are used to maintain state information and pass data between the client and server.

So what's the difference between cookies and sessions?
Let's start with cookies.

#### What is a cookie?

- A cookie is a small piece of data stored on the client side.
- When the client sends a request to the server, a cookie is included in the HTTP header and sent.
- They are stored locally on the client and managed on the client side.
- They are primarily used to store information such as user identification, preferences, and shopping carts.
- An expiration period can be set, and they are retained by the client for the specified period.
- They can be limited in terms of security and may contain user's personal information, so you need to take appropriate security measures.

Next, let's take a look at Sessions.

#### What is a Session?

- A session stores and manages state information on the server side.
- When a client connects to the server, the server generates a unique session ID and provides it to the client.
- The client stores the session ID in a cookie or passes it to the server by including it in the URL parameters.
- The server uses the session ID to manage session data and maintain state with the client.
- Sessions are commonly used to store information such as login status, user profiles, and shopping cart history.
- Sessions last as long as the client is connected to the web application and are deleted when the client is terminated or the session expiration time elapses.
- Unlike cookies, sessions are stored on the server side and are therefore more secure.

#### Conclusion

Yes, that's right. The big difference between cookies and sessions is in their **purpose and behavior**.

Both cookies and sessions are used in web development to maintain and identify user state information, and each should be chosen and utilized according to its own characteristics and purpose.
