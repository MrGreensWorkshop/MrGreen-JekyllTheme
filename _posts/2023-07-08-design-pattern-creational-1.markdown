---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern-Creational-1
title: 디자인 패턴, 생성 패턴에 대하여(1)
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

### 디자인 패턴, 생성 패턴(1)

{:data-align="center"}

<!-- outline-end -->

지난 글에 디자인 패턴의 분류에는 생성, 구조, 행동 크게 3가지로 나뉜다고 공유한바 있습니다. 이번 글에서 생성 패턴에 대해 알아보도록 하겠습니다.

생성패턴의 종류 및 간단 설명을 한 뒤, 하나 씩 자세히 풀어가겠습니다.

#### 생성패턴의 종류 및 간단 설명

1. 싱글톤(Singleton) 패턴: 오직 하나의 인스턴스만을 생성하고 이를 전역적으로 접근할 수 있게 합니다.
2. 팩토리(Factory) 패턴: 객체 생성을 담당하는 별도의 팩토리 클래스를 도입하여 객체 생성 과정을 캡슐화하고 유연성을 제공합니다.
3. 추상 팩토리(Abstract Factory) 패턴: 관련된 객체들의 집합을 생성하기 위한 인터페이스를 제공하며, 구체적인 팩토리 클래스를 통해 해당 객체들을 생성합니다.
4. 빌더(Builder) 패턴: 복잡한 객체의 생성 과정을 단계별로 분리하여 조립할 수 있도록 합니다. 이를 통해 다양한 속성과 옵션을 가진 객체를 유연하게 생성할 수 있습니다.
5. 프로토타입(Prototype) 패턴: 기존 객체를 복제하여 새로운 객체를 생성합니다. 이를 통해 객체 생성에 필요한 비용과 시간을 절약할 수 있습니다.

#### 싱글톤(Singleton) 패턴

보통 디자인 패턴에 대해서 물으면 제일 많이 언급되는 패턴 중 하나로, 유명한 싱글톤 패턴에 대해 먼저 알아보겠습니다.

JS로 싱글톤 패턴을 적용하는 예시를 보여드릴까합니다.

#### 예시

```javascript
export const Singleton = (function () {
  let instance; // 싱글톤 인스턴스 변수

  function createInstance() {
    // 인스턴스 생성 로직 함수
    const object = new Object("I am the instance");
    return object;
  }

  return {
    // 인스턴스 접근 메서드 getInstance
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// 싱글톤 인스턴스에 접근
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// true (동일한 인스턴스), 여러 번 호출해도 동일한 인스턴스를 반환
console.log(instance1 === instance2);
```

#### JS로 싱글톤을 구현하는 것은 조금 이상하다고 생각하지 않나요?

JS 언어 자체적으로 동적 타입의 언어이기에 객체 생성과 관련된 유연성이 있습니다.
즉, 싱글톤은 클래스의 인스턴스가 오직 하나만 생성되고, 이를 전역적으로 접근 가능하게 만드는 디자인 패턴이지만 JS는 동적인 언어이며, 이는 **객체의 생성과 소멸이 자유롭게 이루어진다는 것입니다.**
따라서 JS에서는 명시적으로 싱글톤을 구현하는 것이 어렵고, 싱글톤을 사용하는 것보다 다른 디자인 패턴이나 모듈 시스템을 활용하는 것이 더 적합합니다. 그래서 이상하다고 생각되었던 것이지요.

#### JS로 생성패턴 구현은 힘든가?

JS는 클래스의 인스턴스 개수를 제한하거나 강제하지 않지만 제가 예시로 보여드린 것처럼 싱글톤 패턴으로 구현할 수는 있습니다.
바로 **클로저와 변수 스코프를 활용하는 것입니다.**

#### 클로저와 변수 스코프란?

예시에서 클로저는 getInstance로 메서드 내부에서 정의된 함수와 그 함수가 자신이 선언된 스코프 외부의 instance 변수의 조합을 뜻합니다.
변수 스코프는 당연히 instance를 뜻하겠지요.

그렇다면 궁금해집니다. 생성패턴을 적용할 때 JS도 활용해야 하는데 적합한 기법이 있을까요? 다음 편에서 다뤄보도록 하겠습니다.
