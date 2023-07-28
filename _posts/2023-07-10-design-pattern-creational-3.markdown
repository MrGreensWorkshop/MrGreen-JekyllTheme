---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-3
title: 디자인 패턴, 생성 패턴에 대하여(3)
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

### 디자인 패턴, 생성 패턴(3)

{:data-align="center"}

<!-- outline-end -->

지난 글에선 팩토리 패턴에 대해서 알아보았습니다.
이번에도 한 줄로 설명하자면 객체 생성을 담당하는 별도의 팩토리 클래스를 도입해, 객체 생성 과정을 캡슐화하고 유연성을 제공하는 기법이였습니다.

이번 글에선 생성 패턴 중 추상 팩토리(Abstract Factory) 패턴에 대해 학습하도록 하겠습니다.

#### 추상 팩토리(Abstract Factory) 패턴이란?

이를 설명하기에 앞서 팩토리 패턴의 개념을 알고 넘어가야 하는데요. 팩토리 패턴에서는 하나의 하나의 팩토리 클래스가 인자 값에 따라 조건문을 사용해 다양한 서브 클래스를 리턴하는 형식이였습니다.

추상 팩토리 패턴에서는 팩토리 클래스에서 서브 클래스를 생성하는 데에 있어 조건문을 제외합니다.

TS(Type Script)로 팩토리 패턴을 적용하는 예시를 보여드릴까합니다.

#### 예시

```javascript
// 추상 팩토리 인터페이스
interface AbstractFactory {
  createProduct(): Product;
}

// WindowsFactory 클래스
export class WindowsFactory implements AbstractFactory {
  createProduct(): Product {
    return new WindowsProduct();
  }
}

// MacFactory 클래스
export class MacFactory implements AbstractFactory {
  createProduct(): Product {
    return new MacButton();
  }
}

// 추상 제품 클래스
abstract class Product {
  abstract operation(): string;
}

// WindowsFactory의 제품 클래스
class WindowsProduct extends Product {
  operation(): string {
    return "Rendering a Windows Product";
  }
}

// MacFactory의 제품 클래스
class MacButton extends Product {
  operation(): string {
    return "Rendering a Mac Product ";
  }
}

// 클라이언트 코드
function createUI(factory: AbstractFactory) {
  const button = factory.createProduct();

  button.operation();
}

// 사용 예시
const windowsFactory = new WindowsFactory();
createUI(windowsFactory);

const macFactory = new MacFactory();
createUI(macFactory);
```
