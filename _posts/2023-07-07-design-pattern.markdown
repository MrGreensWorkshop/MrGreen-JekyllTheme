---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Design-Pattern
title: 디자인 패턴에 대하여
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

### 디자인 패턴이란

{:data-align="center"}

<!-- outline-end -->

이번에 회사에서 업무 처리 방침 과정을 개편하며 1주일간 학습 기간을 받게 되었습니다.
이에 따라 팀장님의 추천대로 디자인 패턴에 대한 학습을 선행적으로 수행할 예정입니다.

#### 디자인 패턴이란 무엇일까요?

소프트웨어 설계에서 발생하는 공통적인 문제들에 대한 해결책을 제시하는 구조화된 접근 방법입니다.
즉, 디자인 패턴은 경험적으로 쌓인 소프트웨어 설계의 노하우를 체계화하고 공유하기 위해 사용됩니다.

그렇다면 이를 따로 학습해야 하는 이유는 무엇일까요?

#### 디자인 패턴 학습 이유

소프트웨어의 유연성, 재사용성, 확장성을 향상시키는 데 중요한 역할을 합니다.
패턴은 일반적인 설계 문제를 해결하기 위한 템플릿이나 가이드로 작용하며, 개발자들이 비슷한 문제를 해결하는 데 도움을 줍니다.

학습하는 이유는 알았습니다. 그렇다면 디자인 패턴은 어떤 상황을 분류하고 분류된 종류가 무엇일까요?

#### 디자인 패턴의 분류와 종류

1. 생성(Creational) 패턴: 객체의 생성과 관련된 패턴으로, 객체를 생성하는 방법과 객체 간의 의존성을 관리하는 방법에 대해 다룹니다.
   - 대표적인 예로는 싱글톤(Singleton), 팩토리(Factory), 추상 팩토리(Abstract Factory) 등이 있습니다.
2. 구조(Structural) 패턴: 클래스나 객체를 조합하여 더 큰 구조를 형성하는 패턴으로, 클래스나 객체 간의 관계와 상호작용을 다룹니다.
   - 대표적인 예로는 어댑터(Adapter), 데코레이터(Decorator), 컴포지트(Composite) 등이 있습니다.
3. 행위(Behavioral) 패턴: 객체나 클래스 간의 상호작용과 알고리즘을 다루는 패턴으로, 프로그램의 동작을 조직화하고 제어하는 방법에 대해 다룹니다.
   - 대표적인 예로는 옵저버(Observer), 스트래티지(Strategy), 커맨드(Command) 등이 있습니다.

디자인 패턴에는 객체라는 단어가 많이 나오는데, 객체가 정확히 무엇일까요?

#### 객체란?

클래스의 인스턴스를 의미합니다.
즉, 소프트웨어에서 데이터와 해당 데이터를 조작하는 동작을 함께 묶어 표현합니다.
객체는 속성(데이터)와 메서드(동작)을 함께 묶어 표현합니다.

#### 클래스의 인스턴스란?

클래스를 기반으로 생성된 개별 객체를 의미합니다. 개별 객체는 해당 클래스에 정의된 속성과 메서드를 실제로 가지고 있는 객체입니다.

즉, 클래스와 인스턴스의 차이에 대해서 논하자면 클래스는 추상적인 개념에서 묶는 점이고, 인스턴스는 실체화된 객체입니다.

#### 클래스와 인스턴스의 관계

인스턴스는 클래스의 특성을 상속받으며, 해당 클래스에서 정의된 속성과 메서드를 사용할 수 있습니다.
인스턴스는 클래스의 생성자를 호출하여 생성되며, 각각의 인스턴스는 독립적인 상태를 가질 수 있습니다.
이는 인스턴스마다 속성의 값이 다를 수 있고, 메서드 호출에 따라 동작이 다를 수도 있습니다.

다음 시간엔 패턴에 대해 자세히 알아보겠습니다.
