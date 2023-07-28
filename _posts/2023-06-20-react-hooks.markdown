---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_react_hooks
title: About React hooks

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

### This is a post about React-Hooks.

{:data-align="center"}

<!-- outline-end -->

#### This is the first installment of React-Hooks.

There is a hook that we don't use as much as useState() or useEffect(), but it is useful.
It's called useRef(). Today we're going to take a look at this guy.

##### Let's start with the basics of React.

**Basically, every time our internal state changes, we'll re-render**.
Sounds a little creepy, doesn't it? If the screen is updated every time the function is called, the variables inside the function will be initialized with the values they already have...
I wonder if readers would also find this annoying because they might want to preserve the values in the component function they were referring to even if it is re-rendered depending on the usage.

##### What hooks do we use in React to solve this problem?

**We use the useRef hook to solve the problem.**
The useRef function assigns an initial value passed as an argument to a property so that changing the value doesn't cause the component to re-render, meaning that the property doesn't lose its value when the component re-renders.

This can be really handy when dealing with values that shouldn't cause rendering.

##### Example

```javascript
const nameInput = useRef();

const onClick = () => {
    nameInput.current.focus();
}

return(
    <input ref={nameInput} />
    <button onClick={onClick}>Click</button>
)
```

###### Result

After entering a value in the input and then pressing the click button, the input box does not lose focus.

##### Contents and Example Code Key Takeaways

- Serves to select a specific DOM in javascript (getElementById, querySelector, etc.)
- Used to access a specific DOM.
- Useful when using external libraries.
- You can write it in the form of ref={} wherever you want.
- To get the focus, you can write nameInput.current.focus().
