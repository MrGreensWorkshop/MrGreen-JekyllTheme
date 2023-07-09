---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-2
title: About Design Pattern Creational(2)

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

### 디자인 패턴, 생성 패턴(2)

{:data-align="center"}

<!-- outline-end -->

지난 글에선 싱글톤 패턴에 대해서 알아보았습니다.
싱글톤 패턴을 한 줄로 설명하자면 하나의 인스턴스만을 생성하고 이를 전역적으로 접근할 수 있게 하는 기법이였습니다.

이번 글에선 생성 패턴 중 팩토리(Factory) 패턴에 대해 학습하도록 하겠습니다.

#### 팩토리(Factory) 패턴이란?

객체 생성을 담당하는 별도의 팩토리 클래스를 도입하여 객체 생성 과정을 캡슐화하고 유연성을 제공하는 기법입니다.

#### 캡슐화란?

객체 내부 구현을 외부로부터 숨겨 오로지 외부에서 제공되는 인터페이스를 통해 객체와 상호작용할 수 있도록 합니다. 이를 통해 객체의 상태와 동작을 보호하고, 외부에서의 잘못된 접근에 대해 객체를 보호할 수 있습니다. 객체는 오직 메서드를 통해 데이터를 조작하고 상태를 변경할 수 있습니다.

TS(Type Script)로 팩토리 패턴을 적용하는 예시를 보여드릴까합니다.

#### 예시

```javascript
// 인터페이스: 생성될 객체들이 구현해야 하는 메서드를 정의합니다.
interface Product {
  operation(): void;
}

// 구체적인 객체 클래스: 인터페이스를 구현한 구체적인 객체들입니다.
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

// 팩토리 클래스: 객체를 생성하고 반환하는 역할을 합니다.
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

// 클라이언트 코드
const factory = new Factory();

const productA = factory.createProduct("A");
productA.operation(); // Output: ConcreteProductA operation

const productB = factory.createProduct("B");
productB.operation(); // Output: ConcreteProductB operation
```
