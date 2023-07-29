---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_About_Type_Conversion
title: About type conversion
# title: About Type Conversion

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Yeonuk
# multiple category is not supported
category: Formatting
# multiple tag entries are possible
tags: [formatting]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2023-07-19 09:00:00 +0900
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

### About casts

{:data-align="center"}

<!-- outline-end -->

At my company, we had a situation where we had to format our code because eslint gave us some strong conditions.
Among them, I encountered the sentence "Redundant double negation.eslintno-extra-boolean-cast" the most.

Let's see what that error is, why it pops up, and what the solution is.

#### What is the "Redundant double negation.eslintno-extra-boolean-cast" error?

When using eslint, the "Redundant double negation.eslintno-extra-boolean-cast" error that you may see is often caused by the error
is known as the "no-extra-boolean-cast" rule. This rule detects unnecessary double negation operations and displays a warning.

```javascript
if (!!value) {
  // ...
}
```

This is what you see in code like this.
I knew what it was.

#### Why does it come up?

As you can see in the example above, "!!value" forces a negative operation on the boolean value 'value', then repeats it twice by performing the negative operation again.
While this is used as a form of casts and makes sense to us, it is unnecessary for the formatting recommended by eslint, and we believe it makes the code more complex and less readable.

Now that we know why we're seeing that, let's see how we can fix it.

#### Solution

Since the above phrase is unnecessary as described, ESLINT recommends removing it.
It should look like this

```javascript
if (value) {
  // ...
}
```

The modified code above uses 'value' as it is to evaluate the condition. This eliminates unnecessary negative operations and makes the code more concise.

#### Reference

When using eslint to statically analyze code, the "Redundant double negation" rule is applied to detect similar unnecessary negative operations.
By applying this rule, you can make your code more readable and avoid potential bugs.
