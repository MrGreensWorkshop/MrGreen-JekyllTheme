---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_3
title: About web framework(3)
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
date: 2023-07-24 09:00:00 +0900
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

### 웹 프레임워크에 대하여(3)

{:data-align="center"}

<!-- outline-end -->

지난 글에서는 코드를 Node.JS에서 제공하는 HTTP기능을 통해 웹서버를 다뤘습니다. 웹 프레임워크가 없이 구현한다면 어떻게 구현할지 알기 위해서 입니다.
이번엔 이전 글과 동일한 기능을 하도록 Express로 구현한 예시로 웹 프레임워크의 유용함과 프로젝트에 웹 프레임워크 사용의 장단점에 대해 다루도록 하겠습니다.

먼저 이전에 작성한 코드를 가져오겠습니다.

#### 이전에 작성한 코드

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.statusCode = 200;
    // HTTP 응답 헤더는 웹 서버가 클라이언트에게 보내는 메타데이터로, 응답의 속성과 내용에 대한 정보를 담고 있습니다.
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

우리는 이전 글에서 웹서버를 생성하고, Node.js에서 기본적으로 제공하는 HTTP 모듈로 라우팅 기능을 구현했습니다.

#### 참고

모듈이란?
재사용 가능한 코드 조각을 담고 있는 독립적인 단위입니다. 모듈은 변수, 함수, 클래스, 객체 등을 내보내거나 가져올 수 있으며, 코드의 재사용성과 모듈화를 가능하게 합니다.

다시 돌아와 이제 동일한 기능을 수행하는 express를 활용하여 코드를 작성해보겠습니다.

#### express를 활용하여 코드 예시

```javascript
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

위의 예제 코드도 동일하게 라우팅을 구현합니다. 다만 get()함수를 사용하여 경로에 대한 GET 요청을 처리하고, 응답을 반환합니다. 또한 use()함수를 사용해 모든 경로에 대한 처리를 합니다.
위에서 정의한 경로들과 일치하지 않는 모든 요청을 처리하며 응답을 반환합니다.

코드를 비교해보면 알겠지만 훨씬 가독성이 좋으며, 적은 코드로 넓은 범용성으로 커스텀이 가능합니다.

그럼 이제 궁금합니다. 웹 프레임워크를 프로젝트에 도입하면 장점만 있을 것 같은데 단점은 뭐가 있을지 말입니다.
그래서 알아보았습니다.

##### 웹 프레임워크를 프로젝트에 도입할 시 고려할 점

주의: Express의 관점에서 알아보았습니다.

###### 도입 장점

- 간편한 라우팅: Express는 라우팅을 설정하는 데 매우 편리한 기능을 제공합니다. URL 경로와 HTTP 메서드를 기반으로 라우팅을 설정하고 처리할 수 있으며, 다양한 라우팅 기능을 제공하여 개발자가 간단하게 엔드포인트를 관리할 수 있습니다.
- 다양한 미들웨어: Express는 다양한 미들웨어를 지원하여 요청과 응답을 변형하고 처리하는 작업을 쉽게 수행할 수 있습니다. 로깅, 인증, 세션 관리, 에러 처리 등의 작업을 편리하게 처리할 수 있습니다.
- 유연한 템플릿 엔진: Express는 다양한 템플릿 엔진을 지원하여 동적인 HTML 페이지를 생성할 수 있습니다. 템플릿 엔진을 사용하면 데이터와 템플릿을 결합하여 클라이언트에게 동적인 컨텐츠를 제공할 수 있습니다.
- 확장성: Express는 유연한 구조를 가지고 있어 필요한 경우 미들웨어, 라우터, 템플릿 엔진 등을 추가하거나 사용자 정의할 수 있습니다. 이를 통해 개발자는 자신의 프로젝트에 맞게 기능을 확장하고 커스터마이징할 수 있습니다.

###### 도입 단점

- 추가적인 학습 곡선: Express는 일부 기능을 제공하는 상대적으로 작은 프레임워크입니다. 따라서 처음 사용하는 개발자들에게는 적응이 필요할 수 있습니다. Express의 문법과 구조를 이해하고 사용하는 데에는 추가적인 학습이 필요할 수 있습니다.
- 너무 많은 유연성: Express는 많은 유연성을 제공하기 때문에 개발자가 프로젝트를 구성하고 구현하는 데 자유도가 큽니다. 이는 명확한 구조 및 가이드라인이 없을 경우 코드의 일관성을 유지하기 어렵게 만들 수 있습니다.

다음 글에선 웹 프레임워크의 핵심 기능 중 미들웨어에 대하여 다루도록 하겠습니다.
