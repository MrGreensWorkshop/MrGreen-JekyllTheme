---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_the_ide_for_android_apps
title: About the IDE(for Android apps)
# title: About browser

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
date: 2023-08-01 09:00:00 +0900
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

### About the Android Studio and IntelliJ IDEs

{:data-align="center"}

<!-- outline-end -->

As I've been working on AOS, I've been thinking a lot about which IDE (Integrated Development Environment) I should develop in.
Let's take a look at the basic concepts and see which IDE is more beneficial for AOS developers.

### Concepts of Android Studio and IntelliJ IDEs

#### What is Android Studio?

It is the official integrated development environment (IDE) for developing apps for Android.
It is based on the commercial version of the IntelliJ IDE, IntelliJ IDEA, and is developed and maintained by Google.
Android Studio provides features and tools that are specific to the Android platform.

#### What is IntelliJ?

An integrated development environment developed by Jetbrains that supports multiple programming languages.
IntelliJ IDEA is available in a Community (free) version and an Ultimate (paid) version.
The Ultimate version offers additional features such as web development, database support, and more.

Let's take a look at the pros and cons of each development environment.

#### Android Studio

##### Pros

- Specialized for Android development: Android Studio integrates all the tools and features you need to develop Android apps. This includes an emulator, the ability to generate APKs for devices, code analysis with the Lint tool, app signing tools with ProGuard, and more.
- Strong integration with the Android platform: Easy integration with platform services like Google Play Services, Firebase, Google Cloud, and more.
- Constant updates: Google constantly updates Android Studio in parallel with new Android versions.

###### Cons

- Limited to Android-specific features: General Java or Cotlin development outside of Android development may be missing some of the advanced features offered by IntelliJ.
- Relatively heavier system requirements: Android Studio tends to require more system resources compared to IntelliJ.

#### IntelliJ IDE

##### Advantages

- Multiple language support: In addition to Java and Kotlin, IntelliJ supports a wide range of languages (JavaScript, Groovy, Scala, etc.), which is useful for projects that use multiple languages.
- Web development support: The Ultimate Edition provides additional tools for web and enterprise development. These tools include SQL database tools, server integration tools, support for the Spring framework, and more.

##### Cons

- Lack of specialized features for Android development: Compared to Android Studio, IntelliJ has fewer Android-specific features.
- Cost: The Ultimate Edition of IntelliJ is paid.

#### Conclusion

If you are primarily focused on developing Android apps, Android Studio might be a better choice.
However, if you develop different types of projects (such as web and enterprise applications) using multiple programming languages, IntelliJ is worth considering.
Also, while the Community Edition of IntelliJ is free, you'll need to purchase the Ultimate Edition to take advantage of all the features.

**I built my development environment with Android Studio.**
