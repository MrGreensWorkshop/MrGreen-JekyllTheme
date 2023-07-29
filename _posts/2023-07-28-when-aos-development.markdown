---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_When_AOS_Development
title: About choosing a language for AOS development
# title: About browser

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Application
# multiple tag entries are possible
tags: [application, kotlin, java]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-28 09:00:00 +0900
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

### About choosing a language for AOS development

{:data-align="center"}

<!-- outline-end -->

Now that I'm in charge of developing the app, I'm prioritizing learning AOS.
In AOS, development can be done in one of two languages. Java and Kotlin.
Our existing app is composed of webview through Java, but I'm learning Kotlin.
I thought I'd write a little retrospective on why I made this decision, because I'm thinking about refactoring to Kotlin code.

I analyzed the pros and cons of each language when creating an Android app.

First, let's talk about Java.

#### Advantages of Java

- Preferred language of the Android ecosystem: it has been the main language for Android app development for a long time.
- Plenty of resources: Many development tools, libraries, frameworks, documentation, etc. are built on top of Java.
- Community support: There is a lot of troubleshooting and support for Android apps developed in Java.
- Cross-platform development: Java is a language used not only on Android but also on other platforms, making it useful for cross-platform development.

#### Disadvantages of Java

- Higher code volume: Java has a more complex syntax than Kotlin and can be a higher code volume.
- Lack of null stability: Java lacks support for null handling and can be prone to NullPointerException.

The following is about Kotlin

#### Advantages of Kotlin

- Concise and efficient syntax: Kotlin has a more concise and efficient syntax, which improves development productivity.
- Null reliability: Kotlin has unambiguous support for nullable and non-nullable types, which increases stability.
- Interoperability with Java: Kotlin is highly compatible with existing Java code and makes it easy to use Java libraries.
- Official Android support: Kotlin has been designated by Google as an official language for Android, which means it is getting better support and optimization.

#### Cons of Kotlin

- Relatively new language: Compared to Java, Kotlin is a relatively new language, so developers may need time to get used to it.
- Build times: Kotlin can have long build times, which can slow down builds on larger projects.

#### Conclusion

Ultimately, the choice of language depends on developer preference and project requirements.
Kotlin is recognized as a superior language to Java in most respects and is often used as the first choice for Android development.
However, when you need to maintain a project that was previously developed in Java, it can also make sense to choose Java.

In our project, we have Android development in Java, but it's only implemented as a webview, and we don't have any app developers, so we're learning from scratch.
This, combined with the fact that the amount of code to be maintained is relatively small, led to the decision to refactor the code with little risk.
