---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-1
title: About design pattern creational(1)
# title: About Design Pattern Creational(1)

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Architecture
# multiple tag entries are possible
tags: [architecture, software]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-08 09:00:00 +0900
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

### Design Patterns, Generative Patterns (1)

{:data-align="center"}

<!-- outline-end -->

In my last post, I shared that there are three main categories of design patterns: generative, structural, and behavioral. In this article, we'll look at generative patterns.

Let's start with a brief explanation of the types of generative patterns and then go through them one by one.

#### Types of Generation Patterns and their brief descriptions

1. Singleton pattern: Creates only one instance and makes it globally accessible.
2. Factory pattern: Encapsulates the object creation process and provides flexibility by introducing a separate factory class responsible for object creation.
3. Abstract Factory pattern: Provides an interface for creating a set of related objects, with a concrete factory class responsible for creating those objects.
4. Builder pattern: Breaks down the creation process of complex objects so that they can be assembled step by step. This gives you the flexibility to create objects with different properties and options.
5. Prototype pattern: Creates new objects by cloning existing objects. This saves the cost and time required to create an object.

#### Singleton Pattern

Let's start with the famous Singleton pattern, which is usually one of the most talked about patterns when you ask about design patterns.

I'll show you an example of applying the Singleton pattern in JS.

#### Example

```javascript
export const Singleton = (function () {
  let instance; // Singleton instance variable

  function createInstance() {
    // Instance creation logic function
    const object = new Object("I am the instance");
    return object;
  }

  return {
    // Instance access method getInstance
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Access the singleton instance
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// true (same instance), returns the same instance even if called multiple times
console.log(instance1 === instance2);
```

#### Implementing a singleton in JS seems a bit strange, don't you think?

The JS language itself is a dynamically typed language, which means it has flexibility when it comes to object creation.
In other words, a singleton is a design pattern that ensures that only one instance of a class is created, and that it is globally accessible, but JS is a dynamic language, which means that objects are created and destroyed freely.\*\*
Therefore, it is difficult to implement singletons explicitly in JS, and it is more appropriate to utilize other design patterns or the module system than to use singletons, which is why it was thought to be strange.

#### Is it hard to implement generative patterns in JS?

JS doesn't limit or enforce the number of instances of a class, but it can be implemented with the singleton pattern, as I showed in my example.
This is by utilizing closures and variable scopes.

#### What are closures and variable scopes?

In our example, a closure is a combination of a function defined inside the method getInstance and the variable instance outside the scope in which it is declared.
The variable scope is, of course, instance.

This begs the question. Should we also utilize JS when applying generative patterns, and are there any good techniques? We'll cover that in the next installment.
Translated with www.DeepL.com/Translator (free version)
