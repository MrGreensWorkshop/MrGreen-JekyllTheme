---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: Examples

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Mr. Green's Workshop
# multiple category is not supported
category: jekyll
# multiple tag entries are possible
tags: [jekyll, sample, example post]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-02-10 08:11:06 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# if you enabled image_viewer_posts you don't need to enable this. This is only if image_viewer_posts = false
#image_viewer_on: true
# if you enabled image_lazy_loader_posts you don't need to enable this. This is only if image_lazy_loader_posts = false
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---

<!-- outline-start -->

This is an example page to display markdown related styles for Mr. Green Jekyll Theme.

<!-- outline-end -->

### Headings (centered)
{:data-align="center"}

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

***

### Paragraphs

#### Paragraph

**William Shakespeare**, Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring barque,
Whose worth's unknown, although his height be taken.
Love's not Time's fool, though rosy lips and cheeks
Within his bending sickle's compass come;
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me proved,
I never writ, nor no man ever loved.

#### Texts

Quoted text `Hello world`

Bold text **Hello world**

Italic text _Hello world_

kbd text <kbd>Hello world</kbd>

#### Blockquote

> **William Shakespeare**, Let me not to the marriage of true minds
> Admit impediments. Love is not love
> Which alters when it alteration finds,
> Or bends with the remover to remove.
> O no, it is an ever-fixed mark
> That looks on tempests and is never shaken;
> It is the star to every wand'ring barque,
> Whose worth's unknown, although his height be taken.
> Love's not Time's fool, though rosy lips and cheeks
> Within his bending sickle's compass come;
> Love alters not with his brief hours and weeks,
> But bears it out even to the edge of doom.
> If this be error and upon me proved,
> I never writ, nor no man ever loved.

### Link

This is [Mr. Green Jekyll Theme](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme), a simple theme built for [Jekyll](https://jekyllrb.com/).

\* Hello world! This is **[{{ site.data.owner[site.data.conf.main.default_lng].brand }}]({{ site.url }})**

### Picture

![such a lovely place](:post_pic1.jpg)

### Picture (centered)

![such a lovely place](:post_pic1.jpg){:data-align="center"}

### Lists

- Apple
- Banana
- Orange

1. Fruits
   1. Apples
      - Granny Smith
      - Mutsu
   1. Bananas
      - Cavendish
      - Red
1. Vegetables

***

### Tables

#### Small Table (centered)

| Fruits(not aligned) | Alignment (centered) | num (right align) |
| ------------------- | :------------------: | ----------------: |
| Apple               |       centered       |              9999 |
| Banana              |  centered long text  |               999 |
| Orange              |       centered       |                99 |
| Lemon               |       centered       |                 9 |
{:data-align="center"}

#### Wide Table (centered)

scroll enabled when page is narrow

| Fruits | num (left align) | num (right align) | num  | num  | num  |
| ------ | :--------------- | ----------------: | ---- | ---- | ---- |
| Apple  | 1111             |              1111 | 2222 | 3333 | 4444 |
| Banana | 111              |               111 | 222  | 333  | 444  |
| Orange | 11               |                11 | 22   | 33   | 44   |
| Lemon  | 1                |                 1 | 2    | 3    | 4    |
{:data-align="center"}

#### Wider Table

scroll enabled when page is narrow

| Fruits | num (left align) | num (right align) | num  | num  | num  | num  | num  | num  |
| ------ | :--------------- | ----------------: | ---- | ---- | ---- | ---- | ---- | ---- |
| Apple  | 1111             |              1111 | 2222 | 3333 | 4444 | 5555 | 6666 | 7777 |
| Banana | 111              |               111 | 222  | 333  | 444  | 555  | 666  | 777  |
| Orange | 11               |                11 | 22   | 33   | 44   | 55   | 66   | 77   |
| Lemon  | 1                |                 1 | 2    | 3    | 4    | 5    | 6    | 7    |

### Code

#### Highlight

{% highlight python %}
for i in range(5, 10):
  print(i)
{% endhighlight %}

#### Quote

```python
for i in range(5, 10):
  print(i)
```
