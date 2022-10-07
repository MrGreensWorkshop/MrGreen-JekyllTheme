[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [日本語] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)]

## Mr. Green Jekyll テーマ

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-jp.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-jp.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="GitHubでスポンサーになる" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "GitHubでスポンサーになる")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Patreonで支援" data-no-image-viewer>](https://patreon.com/MrGreenWorkshop "Patreonで支援")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Ko-fiで支援" data-no-image-viewer>](https://ko-fi.com/MrGreenWorkshop "Ko-fiで支援")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/ja" style="font-weight: bold;" >ライブデモはこちら</a>
</div>


### Introduction

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) は、[Jekyll](https://jekyllrb-ja.github.io) で生成された、[GitHub Pages](https://pages.github.com/) と完全に互換性のある多言語テーマです。

<!-- outline-end -->

私は自分のWebサイトを作るつもりでしたが、それをテンプレートとして作成すれば、オープンソースコミュニティと共有できると思い、テーマとして作ることにしました。 このプロジェクトの作成に多くの時間と労力を費やしました。そのため、[サポートする](#you-can-support-my-work)ことを考えて頂けたら嬉しいです。

### Features

- 多言語Webサイト
  - 英語 (デフォルト)、日本語、ブラジルポルトガル語
- おすすめの言語提供機能
- アイコン有効無効オプション付き自動ナビゲーションボタン追加機能
- `Home`, `About`, `Archives`, `Post-list`, `Links`, `Projects` 等々のレイアウト
- カラースキーム切替オプション (ダーク・ライト)
- 自動コンタクトオプション追加機能
- 自動画像参照(画像のフルパスを入れる必要なく、先頭に`:`を入れるだけで良い)
- 画像遅延読み込み、画像ビューア
- クリエイティブ・コモンズ 表示 4.0 国際 ライセンス付きイケてるフッター
- 投稿用可動式目次モーダルボックス
- 投稿共有オプション
- カテゴリー別、タグ別投稿一覧
- コメント投稿機能
  - [Disqus](https://disqus.com)
- 番号付ページネーションまたはスクロールして読み込むタイプかを選択可能
- サイトマップ機能
- SEO(検索エンジン最適化)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- アナリティクス (Google アナリティクス)
- クッキー使用同意機能
- サイト内検索機能
- コード圧縮によるフットプリントの縮小 (`HTML` `JS` `SCSS`)
- モバイルアプリサポート
- モバイル端末対応 (Android と IOS でテスト済み)
- 開発者向けに整理されたフォルダ構造 (Chrome, Safari, FireFox でテスト済み)

### Installation

#### Github pages

1. [リポをフォークする](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork)。
1. \_config.yml を編集し、`url` を以下のように変え、変更をプッシュする。

   ```yaml
   url: "https://GitHubユーザー名.github.io"
   ```

1. リポ名を `GitHubユーザー名.github.io` に変える。
1. デプロイのステイタスは、リポ上の `Actions` タブで確認する。
1. 緑色に変わると、サイトは `https://GitHubユーザー名.github.io` で利用可能になる。

#### Local build

1. [Jekyll をインストール](https://jekyllrb-ja.github.io/docs/installation/)する。
1. リポをクローン、または [ダウンロード](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest)し、コマンドプロンプトでフォルダに移動し、`bundle install` コマンドを実行する。
1. `bundle exec jekyll serve --watch --host 0.0.0.0 --safe`コマンドでビルドする。
    - `--host 0.0.0.0` を指定すると、同じ LAN から Web サーバーにアクセスすることができる。
    - `--safe`を指定すると、第三者のプラグインが追加されていないことが確認できる。(Github ページ開発用)
1. ページは `0.0.0.0:4000/` アドレスで稼働する。

### Documentation

YouTubeの[Mr. Green テーマチュートリアルのプレイリスト](https://www.youtube.com/playlist?list=PL8XOPe9jXvWOrg6XAulRzy9MQl_-A7Yns)を確認してみてください。

### Credits

自分のWebサイトを構築する機会を与えてくれたこれらのプロジェクトに感謝します。

- [Jekyll](https://jekyllrb-ja.github.io) は、静的サイトジェネレータ。好きなマークアップ言語で書かれたテキストを取り、静的なWebサイトを作成するためのレイアウトを使用している。自身でサイトのルック＆フィール、URL、ページに表示されるデータなどを微調整することができる。ボランティアによって維持されている素晴らしいプロジェクト。

- [GitHub Pages](https://pages.github.com/) は、GitHub のリポジトリから直接ホスティングされる。変更をプッシュするだけで、サイトが自動生成。

このプロジェクト作成中に見つけた役立つサイトを紹介します。[リンクページへ](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/ja/tabs/links.html)

### You Can Support My Work

何もないところからプロジェクトを立ち上げるのは、とても時間がかかるものです。私がこの様なプロジェクトに取り組み続け、皆さんに新しいコンテンツを提供できるよう、支援をご検討いただければ幸いです。

- [Patreon](https://patreon.com/MrGreenWorkshop "Patreonで支援")で支援する（月々）
- [Ko-fi](https://ko-fi.com/MrGreenWorkshop "Ko-fiで支援")で支援する (一回)
- [GitHubでスポンサー](https://github.com/sponsors/MrGreensWorkshop "GitHubでスポンサーになる")になる (一回／月々)

### Contribute

プルリクは大歓迎です。イシューとプルリクのテンプレートの手順を確認してください。

### Contributors

貢献していただきありがとうございます！

- ブラジルポルトガル語の翻訳 [Vitor DallAcqua](https://github.com/fandangos)。

### License

[MIT license](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)でも示されている通り、ライセンス及び著作権表示をした上で、このテーマをどこでも使用することができます。

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

ご利用の際に私のページへのリンクを貼ったり、フッターの "Pwrd by Mr. Green "のリンクを残したりして頂くと、私の作品に対してクレジットが得られます。

ありがとうございます。

### Other Licenses

Mr. Green Jekyll テーマには、以下のライブラリが組み込まれています。これらのライブラリがなければ、このテーマを完成させることができませんでした。

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

[Mr. Green Jekyll テーマ](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
