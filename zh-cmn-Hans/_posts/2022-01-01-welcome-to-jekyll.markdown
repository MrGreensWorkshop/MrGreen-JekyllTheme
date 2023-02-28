---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_What_is_this
title: "欢迎来到 Jekyll!"

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Jekyll
# multiple category is not supported
category: jekyll
# multiple tag entries are possible
tags: [jekyll, example post, sample, test]
# thumbnail image for post
img: ":post_pic3.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-01-01 10:04:30 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-01-01 10:04:30 +0900
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

你会在你的`_posts`目录下找到这个帖子。继续编辑它，并重新建立网站，看看你的改动.<!-- outline-end --> 你可以用许多不同的方式重建网站，但最常见的方式是运行 `jekyll serve`, 它启动了一个网络服务器，并在文件更新时自动生成你的网站。

要添加新帖子，只需在`_posts`目录中添加一个文件，该文件遵循`YYYY-MM-DD-name-of-post.ext`的约定，并包括必要的前置事项。看看这篇文章的来源，了解它是如何工作的。

Jekyll还提供了对代码片段的强大支持:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
