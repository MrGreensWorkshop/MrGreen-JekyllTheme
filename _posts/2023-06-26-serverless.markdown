---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Serverless_Function
title: About serverless function

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Serverless function
# multiple tag entries are possible
tags: [serverless function]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-26 09:00:00 +0900
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

### 서버리스 함수에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

#### 서버리스 함수(Serverless Functions)함수란?

클라우드 컴퓨팅 환경에서 실행되는 독립적인 함수입니다. 서버리스 아키텍처는 개발자가 서버 인프라를 관리하지 않고도 애플리케이션 코드를 실행할 수 있도록 하는 방식입니다. 서버리스 함수는 필요할 때만 호출되며, 인프라 리소스에 대한 자동 확장과 관리를 클라우드 제공업체가 처리합니다.

또한, 이벤트 기반(event-driven)으로 동작하며, 특정 이벤트가 발생하면 실행됩니다. 예를 들어, HTTP 요청, 메시지 큐, 타이머 등의 이벤트가 서버리스 함수를 트리거할 수 있습니다. 함수는 단일 기능을 수행하며, 일반적으로 몇 초에서 몇 분까지 짧은 실행 시간을 갖습니다.

##### 서버리스 함수의 주요 특징

- **관리의 간소화**: 서버 인프라를 관리할 필요 없이 개발자는 함수의 코드에 집중할 수 있습니다. 인프라 자동화, 확장, 모니터링 등은 클라우드 제공업체가 처리합니다.

- **이벤트 트리거**: 함수는 이벤트에 의해 트리거되며, 필요한 경우 자동으로 확장됩니다. 이벤트는 다양한 소스에서 발생할 수 있으며, 서버리스 함수를 트리거하여 실행합니다.

- **과금 방식**: 대부분의 서버리스 플랫폼은 함수의 실행 시간과 리소스 소비량에 따라 과금합니다. 함수가 비활성 상태인 경우에도 인프라 리소스가 할당되지 않으므로 효율적인 비용 관리가 가능합니다.

- **확장성**: 함수는 필요에 따라 자동으로 확장되므로, 트래픽이 증가하거나 부하가 발생할 때도 안정적으로 처리할 수 있습니다.

##### 서버리스 함수 예시(Vercel)

```javascript
const sharp = require("sharp");

module.exports = async (req, res) => {
  try {
    const { image } = req.body; // 이미지 데이터는 요청의 바디로부터 받아옵니다.

    // 이미지 압축을 위해 sharp 라이브러리를 사용합니다.
    const compressedImageBuffer = await sharp(image)
      .resize(800) // 이미지 리사이징
      .toBuffer(); // 압축된 이미지 버퍼 반환

    // 압축된 이미지를 저장하거나 클라이언트에게 반환합니다.
    // 이 예시에서는 압축된 이미지를 바로 클라이언트에게 반환합니다.
    res.setHeader("Content-Type", "image/jpeg");
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error("Image compression error:", error);
    res.status(500).send("Image compression failed.");
  }
};
```

###### 예시 설명

sharp 라이브러리를 사용하여 이미지 압축을 처리합니다. 애즈펑션의 요청 바디로부터 이미지 데이터를 받아온 후, sharp를 사용하여 이미지를 리사이징하고 압축된 이미지 버퍼를 생성합니다. 마지막으로, 압축된 이미지를 클라이언트에게 반환합니다.
