---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Image_Compression_2
title: About image compression(2)

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
date: 2023-06-23 09:00:00 +0900
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

### This is an article about Image Compression.

{:data-align="center"}

<!-- outline-end -->

#### Where should image compression take place?

Before we get into the actual application, I was wondering where image compression should be done in general (client or server).

##### Client-side image compression

###### Advantages

1. Save bandwidth: Image compression can help save network bandwidth by reducing file size. Smaller file sizes help images download and render faster.

- What is network bandwidth savings?
  Image compression means reducing the amount of data that is transmitted over the network by reducing the amount of data that is transferred. Reducing the size of an image file reduces the amount of data that needs to be transferred, which can reduce network traffic.

###### Disadvantages

1. client resource usage: Performing image compression on a client requires the use of that device's resources, which can affect the client's performance, especially when compressing large images or multiple images at the same time.
2. Compatibility issues: Not all clients support image compression. Some browsers or devices may not be able to handle client-side compression.
3. Security issues: Because image compression transforms image files, it can be utilized by malicious users to tamper with or decrypt images.

##### Server-side image compression

###### Advantages

1. Performance optimization: Image compression is often a CPU-intensive task, so handling it on the server can free up server resources without impacting client performance. Clients don't need to compress images, so they can expect a performance boost.

2. More conversion options: Server-side image compression gives you the flexibility to apply different conversion options. For example, you can control image resizing, formatting, quality adjustments, and more on the server. This helps to improve web performance when it comes to optimizing the display of images.

3. Security and data consistency: Server-side image compression can maintain the security and consistency of image data by centralizing the image processing logic on the server. When compression is performed by the client, it can be difficult to ensure data consistency on the client itself.

4. Compression optimization: On the server side, you can dynamically adjust compression options based on client requests. For example, compression levels can be dynamically adjusted to take into account the client's network speed, device capabilities, etc. to provide an optimal user experience.

5. Handling large images: Compressing large images on the client can be taxing on client resources. Server-side image compression can process and optimize large images before they are sent to the client, avoiding performance issues or resource limitations on the client side.

###### Cons

1. Additional server resources: Image compression can be a burden on the server as it requires CPU and memory resources. Therefore, it requires proper server scaling and resource management.

2. Centralized processing: Server-side image compression centralizes image processing tasks and handles them on the server. This can result in delays in image compression operations if the server fails or if the server is under load. This can affect client response times. Also, the availability and scalability of the server can limit the throughput of image compression tasks.

3. Processing time and latency: Image compression requires additional processing time. Therefore, if the image compression operation takes place on the server, the client may need to request the image and wait for the compression to complete. This can result in slower client responses.

4. Scalability constraints: Because image compression operations are handled on the server, the server load can increase if there are a large number of concurrent requests. This can cause scalability constraints and may require additional server resources.

5. Limited flexibility: Server-side image compression can result in the same compression options being applied each time a client requests an image. If different clients require different compression levels or options, it can be difficult to dynamically control this on the server.

6. Network traffic: Server-side image compression requires receiving image requests from clients, compressing them, and then sending them. This can increase network traffic between the server and clients.

7. Caching difficulties: If image compression is handled on the client side, the client can cache and reuse the compressed image. However, if image compression is handled on the server side, the server may find it difficult to cache the compressed version of the image.

###### Conclusion

In practice, there may be times when client-side image compression is more appropriate, depending on the situation and requirements.
Therefore, when deciding on a compression method, you should consider your project's goals, user experience, and resource constraints.
Translated with www.DeepL.com/Translator (free version)
