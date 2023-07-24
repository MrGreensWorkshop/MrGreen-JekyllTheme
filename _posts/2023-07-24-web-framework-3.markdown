---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Web_Framework_2
title: About web framework(2)
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
date: 2023-07-23 09:00:00 +0900
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

### 웹 프레임워크에 대하여(2)

{:data-align="center"}

<!-- outline-end -->

지난 글에서 우리는 간단한 웹서버를 생성하는 방법에 대해 코드를 작성하고 실습을 진행해보았습니다. 하지만 그것만으론 웹 프레임워크를 대체할 수 있다 말하기 힘듭니다.

그래서 이번 글에선 웹 프레임워크의 핵심 기능 중 하나인 라우팅 구현을 expressjs없이 구현해보도록 하겠습니다.

#### 우선 라우팅은 무엇일까요?

간단하게 URL과 요청 핸들러를 연결해주는 기능을 제공합니다.
즉, 웹 애플리케이션의 다양한 엔드포인트를 관리할 수 있습니다.

#### 엔드포인트(Endpoint)란 무엇일까요?

엔드포인트란 웹 API에서 클라이언트가 특정한 요청을 수행하기 위해 접근하는 URL 경로를 나타냅니다.

#### 엔드포인트 예시

GET /posts: 모든 게시물을 가져오는 엔드포인트
GET /posts/{id}: 특정 게시물을 가져오는 엔드포인트
POST /posts: 새로운 게시물을 생성하는 엔드포인트
PUT /posts/{id}: 특정 게시물을 수정하는 엔드포인트
DELETE /posts/{id}: 특정 게시물을 삭제하는 엔드포인트

그럼 다시 돌아와서 Express 없이 Node.js만을 사용하여 라우팅을 구현해보겠습니다.
저흰 HTTP 모듈을 사용할 예정입니다. Node.js에는 기본적으로 내장된 HTTP 모듈이 있습니다. 이를 사용하여 웹 서버를 만들고 라우팅을 구현해보겠습니다.

##### 예시

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

위의 코드를 간단하게 설명하자면 단순한 HTTP 서버를 생성하고, 요청에 따라 라우팅을 구현합니다. 경로에 따른 응답을 받습니다. 지정한 경로 외의 요청은 404 Not Found 응답을 보냅니다.

##### 추가

요청에 HTTP 응답 헤더에 Content-Type과 같은 필드를 설정하지 않으면 어떻게 되는지 궁금하여 알아보았습니다.

###### 응답 헤더에 필드를 설정하지 않을 시 발생할 수 있는 문제

클라이언트는 서버로부터 받은 응답의 내용에 대한 정보를 알 수 없게 됩니다.
정보를 알 수 없다는 것은 클라이언트가 받은 데이터를 올바르게 해석하고 처리하는 데에 영향을 줄 수 있습니다.

###### 예시

서버가 Content-Type을 헤더에 설정하지 않을 시, 웹 브라우저는 해당 응답을 일반 텍스트로 간주할 수 있습니다. 결과적으로 HTML 태그나 구조를 올바르게 해석 하지 못하고 일반 텍스트로 표시하게 될 수 있습니다.

다음 글에선 위의 코드를 웹 프레임워크인 Express를 통해 사용한 예시와 웹 프레임워크 사용의 장단점에 대해 다루도록 하겠습니다.

참고한 링크

- [nodejs 공식문서](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction)
