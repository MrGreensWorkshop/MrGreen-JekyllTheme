---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern
title: About design pattern
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
date: 2023-07-07 09:00:00 +0900
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

### What is a design pattern?

{:data-align="center"}

<!-- outline-end -->

My company is reorganizing its workflow process and I've been given a one-week learning period.
So, as recommended by my team leader, I'm going to take the initiative to learn about design patterns.

You can read more about them here: #### What are design patterns?

A structured approach to providing solutions to common problems in software design.
In other words, design patterns are used to organize and share empirical software design know-how.

So why should you learn them?

#### Reasons to learn design patterns

They play an important role in making software more flexible, reusable, and extensible.
Patterns act as templates or guides for solving common design problems and help developers solve similar problems.

We know why we're learning them, but what situations do design patterns categorize and what are the different kinds?

#### Classification and types of design patterns

1. Creational patterns: These are patterns related to the creation of objects, and they deal with how to create objects and how to manage dependencies between objects.
   - Typical examples include Singleton, Factory, and Abstract Factory.
2. Structural pattern: Patterns that combine classes or objects to form a larger structure, covering relationships and interactions between classes or objects.
   - Examples include Adapter, Decorator, and Composite.
3. Behavioral patterns: These are patterns that deal with interactions and algorithms between objects or classes, and how to organize and control the behavior of a program.
   - Some examples include Observer, Strategy, and Command.

The word object appears a lot in design patterns, but what exactly is an object?

#### What is an object?

It's an instance of a class.
In other words, it's a bundled representation of data and the behavior of manipulating that data in software.
An object represents properties (data) and methods (behavior) bundled together.

#### What is an instance of a class?

An individual object created based on a class. An individual object is an object that actually has the properties and methods defined in that class.

In other words, the difference between a class and an instance is that a class is an abstract concept that binds things together, while an instance is a materialized object.

#### Relationship between classes and instances

An instance inherits the characteristics of a class and can use the properties and methods defined in that class.
Instances are created by calling the class's constructor, and each instance can have independent state.
This means that different instances can have different values for properties, and different methods can have different behaviors when called.

Next time, we'll take a closer look at the pattern.
