---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_1
title: About web framework(1)
# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Framework
# multiple tag entries are possible
tags: [framework, server]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-22 09:00:00 +0900
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

### 웹 프레임워크에 대하여(1)

{:data-align="center"}

<!-- outline-end -->

우리는 해커톤 등 빠르게 프로젝트를 구현해야할 때, 주로 express를 사용해 브라우저에 상호작용을 구현하곤 했습니다.
그런데 이번에 디자인 패턴을 공부하며, 토이 프로젝트를 생성해 작업하는데 문득 express 없이 웹 서버를 구현할 수 있는 방법이 있을까라는 고민에서 출발하여 학습한 뒤, 저의 경험을 바탕으로 글을 남겨봅니다.

#### express란 무엇인가

간단하게 Express.js는 Node.js를 기반으로 한 웹 프레임워크입니다.
일반적인 목적으로는 Node.js 기반 웹 서버 개발을 단순화하기 위해 사용됩니다.

#### 그럼 웹 프레임워크란 무엇일까요?

웹 프레임워크(Web framework)는 웹 애플리케이션 개발을 단순화하고 효율화하기 위해 사용되는 도구나 라이브러리의 모음입니다.
웹 프레임워크는 웹 개발에 필요한 기본 구조, 기능, 패턴 등을 제공하여 개발자가 애플리케이션의 비즈니스 로직에 집중할 수 있도록 도와줍니다.

#### 웹 프레임워크의 제공 기능은?

1. 라우팅(Routing): URL과 요청 핸들러를 연결해주는 기능을 제공합니다. 요청이 들어오면 해당하는 핸들러를 실행하여 적절한 응답을 반환합니다. 이를 통해 웹 애플리케이션의 다양한 엔드포인트를 관리할 수 있습니다.
2. 템플릿 엔진(Template Engine): 동적인 웹 페이지 생성을 위해 템플릿 엔진을 제공합니다. 템플릿 엔진은 데이터와 템플릿을 결합하여 동적인 HTML 페이지를 생성하는 기능을 제공합니다.
3. 데이터베이스 연동: 웹 애플리케이션에서 데이터베이스와의 상호작용을 쉽게 할 수 있도록 도와줍니다. 데이터베이스 쿼리와의 상호작용을 추상화하고, ORM(Object-Relational Mapping)을 통해 개발자가 객체 지향적인 방식으로 데이터베이스를 다룰 수 있도록 합니다.
4. 세션 및 인증 관리: 사용자의 세션 관리와 인증을 처리하는 기능을 제공합니다. 로그인, 로그아웃, 세션 유지 등을 쉽게 구현할 수 있도록 도와줍니다.
5. 보안 기능: 웹 프레임워크는 CSRF(Cross-Site Request Forgery) 공격, XSS(Cross-Site Scripting) 공격 등과 같은 웹 보안 위협으로부터 애플리케이션을 보호하기 위한 보안 기능을 제공합니다.
6. 에러 핸들링: 예외 처리 및 오류 페이지 관리를 도와줍니다. 개발 중 발생하는 오류를 적절하게 처리하고, 사용자에게 오류 메시지를 제공할 수 있도록 합니다.

##### 웹 프레임워크의 종류는?

Express.js(Node.js 기반), Django(Python 기반), Ruby on Rails(Ruby 기반), Laravel(PHP 기반) 등이 있습니다. 이러한 웹 프레임워크를 사용하면 개발자는 웹 애플리케이션의 기반이 되는 부분을 구현하는 데 드는 시간과 노력을 절약하고, 생산성을 향상시킬 수 있습니다.

이제 웹 프레임워크가 무엇이고, 기능은 어떤지, 어떤 종류가 있는지 알았습니다.
그럼 이제 다시 돌아와 이러한 유용한 기능을 사용하지 않고 웹서버를 구현한다면 얼만큼 피곤해질까요? 한 번 구현해보았습니다.

##### Express없이 nodejs로 웹서버 구현하기

간단한 웹서버를 만들어보겠습니다.

```javascript
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

간단한 코드 설명을 하자면 http 서버를 생성하고, 요청이 들어오면 Hello, World!를 응답으로 반환합니다. 이렇게 코드를 작성하고, nodejs 런타임 명령어를 사용하여 파일을 실행시키면 콘솔에 Server running at http://127.0.0.1:3000/ 메세지가 표시됩니다.

간단한 웹서버로 웹 브라우저에 주소 창에 http://127.0.0.1:3000/ 로 서버에 접근이 가능해졌습니다.

다음 포스팅에서 express없이 라우팅을 구현하는 법에 대해 다루도록 하겠습니다.
