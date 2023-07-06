---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Jekyll
title: About jekyll

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Tools
# multiple tag entries are possible
tags: [tool, jekyll, react]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-05 09:00:00 +0900
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

### Jekyll 프로젝트 React처럼 만들어보기

{:data-align="center"}

<!-- outline-end -->

Jekyll로 블로그를 제작하던 중, 기존 React의 개발환경에 익숙하던 저는 답답함을 느꼈습니다. 그래서 더 자세히 알아보았습니다.

#### Jekyll은 무엇인가?

Jekyll은 정적 사이트 생성기입니다. 정적 사이트 생성기는 사전에 컴파일된 정적 파일을 생성하여 웹 서버에 배포합니다. 동적 컨텐츠를 생성하는 서버 측 스크립트나 데이터베이스와 같은 동적 요소를 사용하지 않습니다. 따라서 웹 사이트를 구축하고 호스팅하기에 매우 유용한 도구라고 할 수 있습니다.

#### 정적(static)으로 만들면 어떤 이점이 있을까?

바로 빠른 로딩 속도, 보안성, 호스팅 및 배포의 용이성입니다.
정적 파일은 캐싱되므로 서버에 많은 부하를 주지 않으며, 보안 위험이 적습니다. 또한 정적 사이트를 호스팅하기 위해 단순하게 웹 서버만 필요하기에 특별히 서버 설정이나 데이터베이스 연결이 필요하지 않습니다. (굳)

#### 왜 React 개발자가 답답함을 느꼈을까?

Jekyll을 알아보며 깨달았습니다. React는 가상 DOM을 사용하여 효율적인 UI 업데이트를 제공해줍니다.
이는 사용자와의 상호작용에 따라 동적으로 UI가 보인다는 것이고, 제가 Jekyll을 사용하며 답답함을 느꼈던 부분이였습니다.

#### 그렇다면 최대한 React처럼 쓸 수 있는 방법이 없을까요?

**바로 Guard를 사용하는 것입니다!**
Guard는 Jekyll(즉 Ruby기반 프로젝트)에서 파일 시스템 이벤트를 모니터링하고 특정 작업을 실행하는 도구입니다.
이는 소스 코드 변경, 파일 생성과 삭제 같은 파일 시스템 이벤트를 감지하고 이에 대응하여 사용자가 지정한 작업을 실행해줍니다.
주로 개발 작업의 자동화를 위해 사용되는 편입니다!

#### Guard가 뭐하는지는 알겠습니다, 근데 Jekyll 프로젝트에 어떻게 적용할까요?

**적용 예시**
터미널 또는 명령 프롬프트에서 bundle install 명령어를 실행하여 의존성을 설치합니다.

```javascript
gem 'jekyll'
gem 'guard-jekyll-plus'
```

프로젝트 디렉토리에서 Guardfile을 생성하기 위해 다음 명령어를 실행합니다:

```javascript
bundle exec guard init jekyll_plus
```

Guardfile을 생성하고 Guard Jekyll Plus와 관련된 설정을 추가합니다.

```javascript
guard :jekyll_plus, command: 'bundle exec jekyll serve' do
  watch %r{^.*\.(md|markdown|html)$}
  watch %r{^_config\.yml$}
  # 다른 파일 감시 규칙 추가 가능
end
```

Guard를 실행하고 Jekyll을 시작합니다. Jekyll은 변경 사항을 실시간으로 감지하고 사이트를 동적으로 업데이트를 할 수 있게 되었습니다.
