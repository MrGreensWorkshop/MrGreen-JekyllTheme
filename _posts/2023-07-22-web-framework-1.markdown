---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_1
title: About web framework(1)
# title: About web framework(1)

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
date: 2023-07-22 09:00:00 +0900
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

### About Web Frameworks (1)

{:data-align="center"}

<!-- outline-end -->

When we need to implement a project quickly, such as for a hackathon, we usually use express to implement interactions in the browser.
However, this time, while studying design patterns and creating toy projects, I suddenly wondered if there is a way to implement a web server without express, so I wrote this post based on my experience after learning.

#### what is express

Simply put, Express.js is a web framework based on Node.js.
Its general purpose is to simplify the development of Node.js-based web servers.

#### So what is a web framework?

A web framework is a collection of tools or libraries used to simplify and streamline web application development.
Web frameworks help developers focus on the business logic of an application by providing the basic structure, functionality, patterns, etc. needed for web development.

#### What does a web framework provide?

1. Routing: Provides the ability to associate URLs with request handlers. When a request comes in, it executes the corresponding handler and returns the appropriate response. This allows you to manage the various endpoints of your web application.
2. Template Engine: It provides a template engine for dynamic web page generation. The template engine provides the ability to combine data and templates to generate dynamic HTML pages.
3. Database Integration: Helps facilitate interaction with databases in web applications. It abstracts the interaction with database queries and allows developers to work with databases in an object-oriented way through object-relational mapping (ORM).
4. Session and Authentication Management: Provides the ability to handle session management and authentication of users. It helps you easily implement login, logout, session persistence, etc.
5. Security features: The web framework provides security features to protect your application from web security threats such as Cross-Site Request Forgery (CSRF) attacks, Cross-Site Scripting (XSS) attacks, etc.
6. Error handling: It helps in exception handling and error page management. It ensures that errors encountered during development are handled appropriately and error messages are provided to users.

##### What are the types of web frameworks?

There are Express.js (based on Node.js), Django (based on Python), Ruby on Rails (based on Ruby), Laravel (based on PHP), etc. By using these web frameworks, developers can save time and effort in implementing the underlying parts of a web application and increase their productivity.

Now you know what web frameworks are, what they do, and what kinds there are.
But how tired would you be if you came back and implemented a webserver without using these useful features? Let's try implementing one.

##### Implementing a webserver with nodejs without Express

Let's create a simple webserver.

```javascript
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To explain the code in simple terms, it creates an HTTP server and returns Hello, World! as a response when a request comes in. After writing this code, and running the file using the nodejs runtime commands, you should see the message Server running at http://127.0.0.1:3000/ in the console.

With our simple webserver, we can now access the server in our web browser with http://127.0.0.1:3000/ in the address bar.

In the next post, we'll cover how to implement routing without express.
Translated with www.DeepL.com/Translator (free version)
