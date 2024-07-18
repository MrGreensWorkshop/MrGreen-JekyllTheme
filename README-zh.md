[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ja.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [[français](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-fr.md#readme)] [简体中文]

## Mr. Green Jekyll 主题

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="Support me on GitHub Sponsors" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "Support me on GitHub Sponsors")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Support me on Patreon" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "Support me on Patreon")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Tip me via Ko-fi" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "Tip me via Ko-fi")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com" style="font-weight: bold;" >点击这里查看实时演示</a>
</div>


### 介绍

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) 是一个多语言主题，由 [Jekyll](https://jekyllrb.com/) 并完全兼容于 [GitHub Pages](https://pages.github.com/).

<!-- outline-end -->

我打算做我的网站，并认为如果我把它做为一个模板，我可以与开源社区分享它。这就是为什么我决定把它建成一个主题。我很努力地工作，使之成为可能，所以请考虑 [supporting my work](#you-can-support-my-work). 谢谢。

### 特色

- 多语言网站
  - English (default), Japanese, Brazilian Portuguese
- 推荐的语言建议功能
- 带图标的自动导航按钮添加器 启用禁用选项
- “首页”、“关于”、“归档”、“文章列表”、“链接”、“项目”等的布局
- 颜色方案的切换选项（深色）
- 自动联系选项添加器
- 自动引用图片（不需要为图片添加完整的路径，只需在前面添加`:`即可）。
- 图像 lazy 加载器, 图像浏览器
- 具有创意共享许可的酷炫页脚
- 帖子的可移动目录模式框
- 文章共享选项
- 按类别或标签列出的帖子
- 帖子的评论
  - [Giscus](https://giscus.app)
  - [Disqus](https://disqus.com)
- 可选择编号分页或滚动加载类型
- 网站导航功能
- 搜索引擎优化(SEO)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me/)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- 分析（Google Analytics）
- Cookie许可功能
- 联系表格功能（谷歌表格）。
- 网站搜索功能
- 代码压缩，占用空间小 (`HTML` `JS` `SCSS`)
- 移动应用程序支持
- 对移动设备友好（在安卓和IOS系统上测试）
- 为开发者提供了良好的文件夹结构（在Chrome、Safari、FireFox上测试）。

### 安装

#### Github页面

1. [Fork the repo](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork).
1. Edit \_config.yml and change `url` like below and push changes.

   ```yaml
   url: "https://your_github_user_name.github.io"
   ```

1. 将 repo 的名称重命名为 `your_github_user_name.github.io`
1. 在 repo 上的标签检查部署状态 `Actions` .
1. 当它变成绿色时，您的站点就启动并运行了 `https://your_github_user_name.github.io`

#### Local build

1. [Install Jekyll](https://jekyllrb.com/docs/installation/) to your OS
1. Clone or [download](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest) the repo, in command prompt go to the folder run `bundle install` command
1. 构建使用 `bundle exec jekyll serve --watch --host 0.0.0.0 --safe` command
    - with `--host 0.0.0.0` 参数您可以从同一个局域网访问web服务器.
    - with `--safe` 参数你可以确保没有第三方插件添加。(用于Github页面开发)
1. 您的页面将在 `0.0.0.0:4000/` 地址.

### Documentation

查看详情 [Mr. Green theme tutorials playlist](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD) 在 YouTube

### 功劳

我想感谢这些项目，它们给了我一个建立网站的机会。

- [Jekyll](https://jekyllrb.com/) is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. It is a wonderful project which is maintained by volunteers.

- [GitHub Pages](https://pages.github.com/) Hosted directly from your GitHub repository. Just push the changes and the site will be automatically generated.

在我从事这个项目时，我发现一些有用的网站。 [links page](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/tabs/links.html)

### 你可以支持我的工作

从零开始创建项目需要大量的时间。如果你考虑支持我，使我能够继续这样的项目，为大家创造新的内容，我将非常感激。

- You can be one of my [GitHub Sponsors](https://github.com/sponsors/MrGreensWorkshop "Support me on GitHub Sponsors") (monthly or one time)
- You can be one of my [Patreons](https://patreon.com/MrGreensWorkshop "Be my Patron") (monthly)
- You can tip me via [Ko-fi](https://ko-fi.com/MrGreensWorkshop "Tip Me via Ko-fi") (one time)

### 贡献

欢迎拉取Requests。请检查Issues和Request模板中的说明。

### 贡献者

感谢你们的贡献!

- Brazilian Portuguese translation by [Vitor DallAcqua](https://github.com/fandangos).

### License

正如它所说，在 [MIT license](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt), 你可以在任何地方使用这个主题，只要你包括许可证和版权声明。

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

请添加链接到我的页面或在页脚留下 "Pwrd by Mr. Green"

谢谢你！

### Other Licenses

Mr. Green Jekyll 主题包含了下面写的库。没有这些库，我不可能使这个项目成为可能。

| Library                              | file |
| :----------------------------------- | ---- |
| [jQuery v3.6.0](https://github.com/jquery/jquery/tree/3.6.0), Copyright [OpenJS Foundation](https://openjsf.org) and other contributors. jQuery is distributed under the terms of the MIT License. | [jquery-3.6.0.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery-3.6.0.min.js) |
| [Bootstrap v3.3.7](https://github.com/twbs/bootstrap/tree/v3.3.7), Copyright (c) 2011-2016 Twitter, Inc. Bootstrap is distributed under the terms of the MIT License. | [bootstrap.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap.min.js), [bootstrap.min.css](assets/css/bootstrap.min.css) |
| [Bootstrap Table of Contents v0.4.1](https://github.com/afeld/bootstrap-toc/tree/v0.4.1), Copyright (c) 2015 Aidan Feldman Aidan Feldman. Bootstrap Table of Contents is distributed under the terms of the MIT License. | [bootstrap-toc.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap-toc.min.js), [bootstrap-toc.min.css](assets/css/bootstrap-toc.min.css) |
| [Font Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/v4.7.0), Copyright (c) 2017 Dave Gandy. The Font Awesome font is distributed under the terms of the [SIL OFL 1.1](http://scripts.sil.org/OFL). Font Awesome CSS, LESS, and Sass files are distributed under the terms of the [MIT License](https://opensource.org/licenses/mit-license.html). | [font-awesome.min.css](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/css/font-awesome.min.css), [FontAwesome](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/fonts/) |
| [Lozad.js v1.16.0](https://github.com/ApoorvSaxena/lozad.js/tree/v1.16.0), Copyright (c) 2017 Apoorv Saxena. Lozad.js is distributed under the terms of the MIT License. | [lozad.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/lozad.min.js) |
| [Magnific Popup v1.1.0](https://github.com/dimsemenov/Magnific-Popup/tree/1.1.0), Copyright (c) 2014-2016 Dmitry Semenov, http://dimsemenov.com. Magnific Popup is distributed under the terms of the MIT License. | [jquery.magnific-popup.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery.magnific-popup.min.js), [magnific-popup.css](assets/css/magnific-popup.css) |
| [Simple-Jekyll-Search v1.9.2](https://github.com/christian-fei/Simple-Jekyll-Search/tree/v1.9.2), Copyright (c) 2015 Christian Fei. Simple-Jekyll-Search is distributed under the terms of the MIT License. | [simple-jekyll-search-1.9.2.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/simple-jekyll-search-1.9.2.min.js) |
| [Compress HTML in Jekyll v3.1.0](https://github.com/penibelst/jekyll-compress-html/tree/v3.1.0), Copyright (c) 2014 Anatol Broder. Compress HTML in Jekyll is distributed under the terms of the MIT License. | [compress.liquid](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/_layouts/util/compress.liquid) |

[Mr. Green Jekyll Theme](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
