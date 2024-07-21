[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ja.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [[français](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-fr.md#readme)] [简体中文] [[한국어](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ko.md#readme)] [[Türkçe](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-tr.md#readme)]

## Mr. Green Jekyll 主题

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="在 GitHub 上支持我" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "在 GitHub 上支持我")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="成为我的赞助人" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "成为我的赞助人")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="通过 Ko-fi 给我提示" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "通过 Ko-fi 给我提示")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/zh" style="font-weight: bold;" >点击这里查看实时演示</a>
</div>


### 介绍

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) 是一个多语言主题，由 [Jekyll](https://jekyllrb.com/) 并完全兼容于 [GitHub Pages](https://pages.github.com/).

<!-- outline-end -->

我打算做我的网站，并认为如果我把它做为一个模板，我可以与开源社区分享它。这就是为什么我决定把它建成一个主题。我很努力地工作，使之成为可能，[请考虑成为一名赞助者](#你可以支持我的工作). 谢谢。

### 特色

- 多语言网站
  - 英语（默认）、日语、巴西葡萄牙语、法语、简体中文、韩语、土耳其语
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

1. [分叉仓库](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork)。
1. 编辑 \_config.yml 并更改 `url`（如下所示）并推送更改。

   ```yaml
   url: "https://your_github_user_name.github.io"
   ```

1. 将 repo 的名称重命名为 `your_github_user_name.github.io`。
1. 在 repo 上的标签检查部署状态 `Actions`。
1. 当它变成绿色时，您的站点就启动并运行了 `https://your_github_user_name.github.io`

#### 本地构建

1. 将 [Jekyll](https://jekyllrb.com/docs/installation/) 安装到您的操作系统。
1. 克隆或 [下载](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest) 存储库，在命令提示符下转到文件夹运行 `bundle install` 命令。
1. 构建使用 `bundle exec jekyll serve --watch --host 0.0.0.0 --safe` 命令。
    - 和 `--host 0.0.0.0` 参数您可以从同一个局域网访问web服务器。
    - 和 `--safe` 参数你可以确保没有第三方插件添加。(用于Github页面开发)
1. 您的页面将在 `0.0.0.0:4000/` 地址。

### 文档

查看详情 [Mr. Green Jekyll 主题教程播放列表](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD) 在 YouTube。

### 功劳

我想感谢这些项目，它们给了我一个建立网站的机会。

- [Jekyll](https://jekyllrb.com/) 是一个静态站点生成器。它采用您最喜欢的标记语言编写的文本并使用布局来创建静态网站。您可以调整网站的外观、URL、页面上显示的数据等等。这是一个由志愿者维护的精彩项目。

- [GitHub Pages](https://pages.github.com/) 直接从您的 GitHub 存储库托管。只需推送更改，网站就会自动生成。

在我从事这个项目时，我发现一些有用的网站。 [链接页面](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/tabs/links.html)

### 你可以支持我的工作

从零开始创建项目需要大量的时间。如果你考虑支持我，使我能够继续这样的项目，为大家创造新的内容，我将非常感激。

- 您可以成为我的 [GitHub 赞助商](https://github.com/sponsors/MrGreensWorkshop "在 GitHub 上支持我") 之一（每月或一次）
- 你可以成为我的 [Patreons](https://patreon.com/MrGreensWorkshop "成为我的赞助人") 之一（每月）
- 您可以通过 [Ko-fi](https://ko-fi.com/MrGreensWorkshop "通过 Ko-fi 给我提示") 给我小费（一次）

### 贡献

欢迎拉取请求。请检查问题和拉取请求模板中的说明。

### 贡献者

感谢你们的贡献!

- [Vitor DallAcqua](https://github.com/fandangos) 的巴西葡萄牙语翻译。
- [Jean-Philippe Morissette](https://github.com/JPMorissette) 的法文翻译更正。
- [fairycn](https://github.com/fairycn) 的简体中文翻译。
- [Onur Ergünay](https://github.com/onurergunay) 的土耳其语翻译。

### 执照

正如它所说，在 [MIT 许可证](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt), 你可以在任何地方使用这个主题，只要你包括许可证和版权声明。

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

请添加链接到我的页面或在页脚留下 "Pwrd by Mr. Green" 这样我的工作就能得到认可。

谢谢你！

### 其他许可证

Mr. Green Jekyll 主题包含了下面写的库。没有这些库，我不可能使这个项目成为可能。

| 程序库                              | 文件 |
| :----------------------------------- | ---- |
| [jQuery v3.6.0](https://github.com/jquery/jquery/tree/3.6.0)，版权所有 [OpenJS Foundation](https://openjsf.org) 和其他贡献者。 jQuery 是根据 MIT 许可证条款分发的。 | [jquery-3.6.0.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery-3.6.0.min.js) |
| [Bootstrap v3.3.7](https://github.com/twbs/bootstrap/tree/v3.3.7), 版权所有 (c) 2011-2016 Twitter, Inc. Bootstrap 根据 MIT 许可证条款分发。 | [bootstrap.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap.min.js), [bootstrap.min.css](assets/css/bootstrap.min.css) |
| [Bootstrap Table of Contents v0.4.1](https://github.com/afeld/bootstrap-toc/tree/v0.4.1), 版权所有 (c) 2015 Aidan Feldman. Bootstrap 目录是根据 MIT 许可证条款分发的。 | [bootstrap-toc.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap-toc.min.js), [bootstrap-toc.min.css](assets/css/bootstrap-toc.min.css) |
| [Font Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/v4.7.0), 版权所有 (c) 2017 Dave Gandy. Font Awesome v4.7.0，版权所有 (c) 2017 Dave Gandy。 Font Awesome 字体根据 [SIL OFL 1.1](http://scripts.sil.org/OFL) 条款进行分发。 Font Awesome CSS、LESS 和 Sass 文件根据 [MIT 许可证](https://opensource.org/licenses/mit-license.html) 条款分发。| [font-awesome.min.css](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/css/font-awesome.min.css), [FontAwesome](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/fonts/) |
| [Lozad.js v1.16.0](https://github.com/ApoorvSaxena/lozad.js/tree/v1.16.0), 版权所有 (c) 2017 Apoorv Saxena. Lozad.js 根据 MIT 许可证条款分发。 | [lozad.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/lozad.min.js) |
| [Magnific Popup v1.1.0](https://github.com/dimsemenov/Magnific-Popup/tree/1.1.0), 版权所有 (c) 2014-2016 Dmitry Semenov, http://dimsemenov.com。 Magnific Popup 是根据 MIT 许可证条款分发的。 | [jquery.magnific-popup.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery.magnific-popup.min.js), [magnific-popup.css](assets/css/magnific-popup.css) |
| [Simple-Jekyll-Search v1.9.2](https://github.com/christian-fei/Simple-Jekyll-Search/tree/v1.9.2), 版权所有 (c) 2015 Christian Fei. Simple-Jekyll-Search 是根据 MIT 许可证条款分发的。 | [simple-jekyll-search-1.9.2.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/simple-jekyll-search-1.9.2.min.js) |
| [Compress HTML in Jekyll v3.1.0](https://github.com/penibelst/jekyll-compress-html/tree/v3.1.0), 版权所有 (c) 2014 Anatol Broder. Compress HTML in Jekyll 是根据 MIT 许可证的条款分发的。 | [compress.liquid](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/_layouts/util/compress.liquid) |

[Mr. Green Jekyll 主题](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
