---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_2
title: About web framework(2)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Framework
# multiple tag entries are possible
tags: [framework, server]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-23 09:00:00 +0900
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

### About Web Frameworks (2)

{:data-align="center"}

<!-- outline-end -->

In the last post, we wrote code and went through a hands-on exercise on how to create a simple web server, but that's not a substitute for a web framework.

So in this post, we'll try to implement one of the core features of a web framework - routing - without expressjs.

#### First of all, what is routing?

Simply put, it provides the ability to connect URLs and request handlers.
In other words, it allows you to manage the various endpoints of your web application.

Here's an example: #### What is an endpoint?

An endpoint is a URL path in a web API that a client accesses to perform a specific request.

#### endpoints example

GET /posts: Endpoint to get all posts
GET /posts/{id}: Endpoint to get a specific post
POST /posts: Endpoint to create a new post
PUT /posts/{id}: Endpoint to edit a specific post
DELETE /posts/{id}: endpoint to delete a specific post

So let's come back and implement the routing using just Node.js without Express.
We'll be using the HTTP module. Node.js has a built-in HTTP module by default. Let's use it to create a web server and implement routing.

##### Example

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.statusCode = 200;
    // HTTP response headers are metadata sent by the web server to the client, containing information about the properties and content of the response.
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

To simplify the above code, it creates a simple HTTP server, and implements routing based on requests. It receives responses based on the route, and sends a 404 Not Found response for requests outside the specified route.

##### Add information

We were curious to see what would happen if we didn't set a field like Content-Type in the HTTP response header for our request.

###### Possible problems with not setting fields in the response header

The client will be uninformed about the content of the response it receives from the server.
This lack of information can affect the client's ability to correctly interpret and process the data it receives.

###### Example

If the server does not set the Content-Type in the header, the web browser may assume that the response is plain text. As a result, it may not be able to interpret the HTML tags or structures correctly and display them as plain text.

In the next post, I'll cover an example of using the above code with the web framework Express and the pros and cons of using a web framework.

References.

- [nodejs official documentation](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction)
  Translated with www.DeepL.com/Translator (free version)
