---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Serverless_Function
title: About serverless function

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
date: 2023-06-26 09:00:00 +0900
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

### This is a post about serverless functions.

{:data-align="center"}

<!-- outline-end -->

#### Serverless FunctionsWhat is a function?

It is an independent function that runs in a cloud computing environment. Serverless architecture is a way for developers to run application code without having to manage server infrastructure. Serverless functions are called only when needed, and the cloud provider handles the automatic scaling and management of infrastructure resources.

They are also event-driven, meaning they are executed when certain events occur. For example, events such as HTTP requests, message queues, and timers can trigger serverless functions. Functions perform a single function and typically have a short execution time, ranging from a few seconds to a few minutes.

##### Key Features of Serverless Functions

- Simplified management: Without the need to manage server infrastructure, developers can focus on the code of the function. Infrastructure automation, scaling, monitoring, etc. are handled by the cloud provider.

- Event-triggered: Functions are triggered by events and automatically scale if necessary. Events can come from a variety of sources and trigger serverless functions to execute.

- Billing: Most serverless platforms charge based on the execution time and resource consumption of the function. Even when a function is inactive, no infrastructure resources are allocated, allowing for efficient cost management.

- Scalable: Functions automatically scale as needed, so they can reliably handle increased traffic or load.

##### Example of a serverless function (Vercel)

```javascript
const sharp = require("sharp");

module.exports = async (req, res) => {
  try {
    const { image } = req.body; // Get the image data from the body of the request.

    // We use the sharp library for image compression.
    const compressedImageBuffer = await sharp(image)
      .resize(800) // resize the image
      .toBuffer(); // return the compressed image buffer

    // Save the compressed image or return it to the client.
    // In this example, we return the compressed image directly to the client.
    res.setHeader("Content-Type", "image/jpeg");
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error("Image compression error:", error);
    res.status(500).send("Image compression failed.");
  }
};
```

###### Example Description

Use the sharp library to handle image compression. After receiving the image data from the request body of the ad function, it uses sharp to resize the image and create a compressed image buffer. Finally, it returns the compressed image to the client.
