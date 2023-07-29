---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-3
title: About design pattern creational(3)
# title: About Design Pattern Creational(3)

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
date: 2023-07-10 09:00:00 +0900
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

### Design Patterns, Generative Patterns (3)

{:data-align="center"}

<!-- outline-end -->

In the last post, we introduced the Factory pattern.
In a nutshell, it's a technique that encapsulates the object creation process and provides flexibility by introducing a separate factory class responsible for object creation.

In this article, we'll learn about the Abstract Factory pattern, which is one of the creation patterns.

#### What is the Abstract Factory pattern?

Before we get into this, it's important to understand the concept of the factory pattern. In the factory pattern, a single factory class returns a variety of subclasses using conditional statements based on argument values.

The abstract factory pattern excludes conditional statements from generating subclasses from a factory class.

I'd like to show you an example of applying the Factory Pattern with Type Script (TS).

#### Example

```javascript
// Abstract Factory interface
interface AbstractFactory {
  createProduct(): Product;
}

// WindowsFactory class
export class WindowsFactory implements AbstractFactory {
  createProduct(): Product {
    return new WindowsProduct();
  }
}

// MacFactory class
export class MacFactory implements AbstractFactory {
  createProduct(): Product {
    return new MacButton();
  }
}

// abstract product class
abstract class Product {
  abstract operation(): string;
}

// Product class in WindowsFactory
class WindowsProduct extends Product {
  operation(): string {
    return "Rendering a Windows Product";
  }
}

// Product class for MacFactory
class MacButton extends Product {
  operation(): string {
    return "Rendering a Mac Product ";
  }
}

// Client code
function createUI(factory: AbstractFactory) {
  const button = factory.createProduct();

  button.operation();
}

// Example usage
const windowsFactory = new WindowsFactory();
createUI(windowsFactory);

const macFactory = new MacFactory();
createUI(macFactory);
```
