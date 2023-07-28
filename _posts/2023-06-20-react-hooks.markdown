---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_react_hooks
title: React hooks에 대하여

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: React
# multiple tag entries are possible
tags: [react, react query, hooks]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-06-20 09:00:00 +0900
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

### React-Hooks에 대한 글입니다.

{:data-align="center"}

<!-- outline-end -->

#### React-Hooks에 대하여 1편입니다.

useState()나 useEffect()처럼 많이 쓰지 않지만 유용한 hooks가 있습니다.
바로 useRef()입니다. 오늘은 이 녀석을 알아보겠습니다.

##### React 기본 원리부터 알아보겠습니다.

**기본적으로 내부 상태(state)가 변할 때 마다 다시 렌더링이 됩니다.**
조금 찝찝하지 않나요? 함수가 호출될 때마다 화면이 갱신된다면 함수 내부의 변수들이 기존에 저장하는 값도 같이 초기화되는 점이...
독자님들도 쓰임에 따라 다시 렌더링되더라도 기존에 참고하고 있던 컴포넌트 함수 내의 값이 그대로 보존되는 것을 의도하고 싶을 때도 있기 때문에 찝찝하지 않았을까 싶습니다.

##### React에서는 어떤 Hook으로 문제를 해결할까요?

**useRef 훅을 사용해 문제를 해결합니다.**
useRef 함수는 인자로 넘어온 초기값을 속성에 할당하여 값을 변경해도 컴포넌트가 다시 렌더링되지 않게 합니다. 즉, 컴포넌트가 다시 렌더링될 때도 속성값을 잃지 않습니다.

렌더링을 발생시키지 말아야 하는 값을 다룰 때 정말 편리하게 사용할 수 있습니다.

##### 예제

```javascript
const nameInput = useRef();

const onClick = () => {
    nameInput.current.focus();
}

return(
    <input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)
```

###### 결과

인풋에 값을 입력한 다음 클릭 버튼을 눌러도 포커스를 잃지 않고, 인풋박스에 포커스가 잡힙니다.

##### 내용 및 예제 코드 핵심 요약

- javascript에서 특정 Dom을 선택하는 역할을 한다. (getElementById, querySelector 등)
- 특정 DOM에 접근할 때 사용한다.
- 외부 라이브러리 사용할때 유용하다.
- 원하는 위치에 ref={} 의 형태로 작성하면 된다.
- 포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.
