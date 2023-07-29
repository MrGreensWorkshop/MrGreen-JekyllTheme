---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-2
title: About design pattern creational(2)
# title: About Design Pattern Creational(2)

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
date: 2023-07-09 09:00:00 +0900
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

### Design Patterns, Generation Patterns (2)

{:data-align="center"}

<!-- outline-end -->

In the last post, we looked at the Singleton pattern.
In a nutshell, the Singleton pattern is a technique for creating only one instance and making it globally accessible.

In this article, we'll learn about the Factory pattern, which is one of the creation patterns.

#### What is the Factory pattern?

It is a technique that encapsulates the object creation process and provides flexibility by introducing a separate factory class that is responsible for creating objects.

#### What is encapsulation?

Hiding an object's internal implementation from the outside world, allowing you to interact with the object solely through externally provided interfaces. This protects the object's state and behavior, and protects the object against improper access from the outside world. An object can only manipulate data and change its state through methods.

I'd like to show you an example of applying the factory pattern with Type Script (TS).

#### Example

```javascript
// Interface: defines the methods that the objects to be created must implement.
interface Product {
  operation(): void;
}

// Concrete object classes: these are the concrete objects that implement the interface.
class ConcreteProductA implements Product {
  operation(): void {
    console.log("ConcreteProductA operation");
  }
}

class ConcreteProductB implements Product {
  operation(): void {
    console.log("ConcreteProductB operation");
  }
}

// Factory class: responsible for creating and returning objects.
class Factory {
  createProduct(type: string): Product {
    if (type === "A") {
      return new ConcreteProductA();
    } else if (type === "B") {
      return new ConcreteProductB();
    } else {
      throw new Error("Invalid product type");
    }
  }
}

// Client code
const factory = new Factory();

const productA = factory.createProduct("A");
productA.operation(); // Output: ConcreteProductA operation

const productB = factory.createProduct("B");
productB.operation(); // Output: ConcreteProductB operation
```
