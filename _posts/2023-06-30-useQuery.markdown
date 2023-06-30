---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Local_Session_Storage
title: About Local, Session storage

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Browser
# multiple tag entries are possible
tags: [browser]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-29 09:00:00 +0900
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

### Local Storage와 Session Storage에 대하여

{:data-align="center"}

<!-- outline-end -->

이번에 비회원에 대한 로직 시스템 개발을 맡게되어 Storage에 대한 개념을 알아볼 수 있는 시간이 있었습니다.
알게된 개념이 매우 유용하다고 생각되어 글로 정리하고자 합니다.

#### Local Storage 개념

먼저 Local Storage의 개념입니다.
Local Storage는 웹 브라우저의 클라이언트 측에 데이터를 영구적으로 저장하는 웹 스토리지 메커니즘입니다. 로컬 스토리지를 사용하면 웹 페이지가 닫히거나 재시작해도 저장된 데이터가 유지됩니다.

로컬 스토리지는 HTML5에서 도입된 Web Storage API의 일부로 제공됩니다. 이 API를 사용하여 데이터를 로컬 스토리지에 저장하고 검색할 수 있습니다. 로컬 스토리지는 도메인과 브라우저에 종속되며, 같은 도메인의 모든 페이지에서 접근할 수 있습니다.

로컬 스토리지는 키-값 쌍으로 데이터를 저장합니다. 데이터는 문자열 형태로 저장되며, JavaScript를 사용하여 로컬 스토리지에 데이터를 추가, 수정, 삭제 및 조회할 수 있습니다. 로컬 스토리지는 주로 웹 애플리케이션에서 사용자의 설정, 사용자 환경, 사용자 지정 데이터 등을 영구적으로 저장하고 활용하는 데 사용됩니다.

로컬 스토리지의 용량 제한은 브라우저마다 다를 수 있으며, 일반적으로 5MB 정도의 용량을 가지고 있습니다. 브라우저에서는 개발자 도구를 통해 로컬 스토리지의 데이터를 확인하고 관리할 수 있습니다.

#### Session Storage 개념

다음은 Session Storage의 개념입니다.

웹 브라우저의 클라이언트 측에 데이터를 저장하는 웹 스토리지 메커니즘 중 하나입니다.
세션 스토리지는 웹 애플리케이션에서 사용자의 세션 기간 동안 데이터를 임시로 저장하고 유지하는 데 사용됩니다.

세션 스토리지는 클라이언트 측에서만 유지되며, 웹 브라우저를 닫거나 세션을 종료하면 저장된 데이터가 삭제됩니다. 이는 세션 스토리지가 영구적인 데이터 저장을 위한 용도가 아니라, 임시 데이터나 세션 관련 정보를 유지하기 위한 용도로 사용된다는 것을 의미합니다.

세션 스토리지는 JavaScript를 사용하여 웹 페이지에서 데이터를 읽고 쓸 수 있습니다. sessionStorage 객체를 통해 세션 스토리지에 접근할 수 있으며, 데이터는 키-값 쌍으로 저장됩니다. 저장된 데이터는 도메인과 세션에 한정되며, 다른 도메인이나 세션에서는 접근할 수 없습니다.

세션 스토리지는 웹 애플리케이션에서 로그인 상태 유지, 임시 데이터 저장, 사용자 환경 설정 등 다양한 용도로 활용될 수 있습니다. 하지만 보안적인 측면에서는 주의해야 합니다. 세션 스토리지에 중요한 정보를 저장하거나 민감한 데이터를 보관하는 것은 취약점을 유발할 수 있으므로, 보안을 고려하여 사용해야 합니다.

#### Local Storage와 Session Storage의 차이점

다음은 차이점에 대해서 알아보겠습니다.

1. 데이터 수명: 세션 스토리지는 웹 브라우저 세션이 유지되는 동안 데이터를 저장하며, 웹 브라우저를 닫거나 세션을 종료하면 데이터가 삭제됩니다. 반면에 로컬 스토리지는 데이터가 명시적으로 제거되기 전까지 계속 유지됩니다.
2. 데이터 공유: 세션 스토리지는 같은 세션(동일한 웹 브라우저 세션) 내에서만 데이터에 접근할 수 있습니다. 다른 브라우저 탭이나 창에서는 동일한 세션 스토리지에 접근할 수 있지만, 다른 세션에서는 접근할 수 없습니다. 반면에 로컬 스토리지는 동일한 도메인의 모든 탭과 창에서 데이터에 접근할 수 있습니다.
3. 데이터 지속성: 세션 스토리지는 웹 브라우저 세션 동안에만 유지되므로, 사용자가 웹 페이지를 다시 방문할 때 데이터는 새로 생성됩니다. 반면에 로컬 스토리지는 데이터가 영구적으로 유지됩니다. 사용자가 웹 페이지를 다시 방문하더라도 이전에 저장된 데이터는 그대로 유지됩니다.
4. 용량 제한: 일반적으로 로컬 스토리지의 용량 제한은 세션 스토리지보다 큽니다. 세션 스토리지의 경우 일반적으로 5MB 정도의 용량을 가지고 있으며, 로컬 스토리지는 더 큰 용량을 가질 수 있습니다. 그러나 브라우저마다 용량 제한이 다를 수 있으므로 실제 용량은 브라우저에 따라 다를 수 있습니다.
