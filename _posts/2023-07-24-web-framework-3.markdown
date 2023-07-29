---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_3
title: About web framework(3)
# title: About web framework(3)

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
date: 2023-07-24 09:00:00 +0900
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

### About Web Frameworks (3)

{:data-align="center"}

<!-- outline-end -->

In the last article, we covered webservers using the HTTP features provided by Node.JS. This was to give you an idea of how to implement it without a web framework.
This time, I'm going to cover the usefulness of web frameworks and the advantages and disadvantages of using them in your projects with an example implementation in Express that does the same thing as the previous article.

First, let's import the code we wrote earlier.

#### Previously written code

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

In the previous post, we created a webserver and implemented the routing functionality with the HTTP module provided by Node.js by default.

#### Add information

What is a module?
It is a self-contained unit that contains reusable code snippets. Modules can export or import variables, functions, classes, objects, etc. and enable reusability and modularity of code.

Let's come back and write some code utilizing express to accomplish the same thing.

#### Example code utilizing express

```javascript
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

The example code above implements routing in the same way. However, it uses the get() function to process GET requests for routes and return the response. It also uses the use() function to process all routes.
It handles all requests that don't match any of the routes we defined above and returns a response.

As you can see by comparing the code, it's much more readable and customizable with less code and greater versatility.

So now you're wondering. With all the advantages of introducing a web framework into your project, what are the disadvantages?
So we did some research.

##### Things to consider when bringing a web framework into your project

Note: This is from an Express perspective.

###### Pros

- Easy routing: Express provides very convenient features for setting up routing. You can set up and handle routing based on URL paths and HTTP methods, and it offers a wide range of routing features to make managing endpoints simple for developers.
- A wide range of middleware: Express supports a wide range of middleware, making it easy to transform and process requests and responses. You can conveniently handle logging, authentication, session management, error handling, and more.
- Flexible template engine: Express supports a variety of template engines to create dynamic HTML pages. Template engines allow you to combine data and templates to deliver dynamic content to your clients.
- Extensibility: Express has a flexible structure that allows you to add or customize middleware, routers, template engines, and more as needed. This allows developers to extend and customize the functionality for their own projects.

###### Adoption Cons

- Additional learning curve: Express is a relatively small framework that provides some functionality, so it can take some getting used to for first-time developers. Understanding and using the syntax and structure of Express can require additional learning.
- Too much flexibility: Because Express offers a lot of flexibility, developers have a lot of freedom to organize and implement their projects. This can make it difficult to maintain consistency in your code if you don't have a clear structure and guidelines.

In my next post, I'll cover middleware, a key feature of web frameworks.
Translated with www.DeepL.com/Translator (free version)
