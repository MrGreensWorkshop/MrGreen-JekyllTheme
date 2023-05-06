[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-jp.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [한국어]

## Mr. Green Jekyll 테마

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ko.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ko.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="GitHub 스폰서에서 저를 지원하세요" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "GitHub 스폰서로 저를 후원해 주세요")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Patreon에서 저를 지원해주세요" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "Patreon에서 저를 후원해 주세요")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Ko-fi를 통해 팁을 주세요" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "Ko-fi를 통해 팁을 주세요")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/ko" style="font-weight: bold;" >라이브 데모를 보려면 여기를 클릭하십시오.</a>
</div>


### 소개

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) 은 [Jekyll](https://jekyllrb-ko.github.io) 로 생성된 다국어 테마로 [GitHub Pages](https://pages.github.com/) 와 완벽하게 호환됩니다.

<!-- outline-end -->

저는 개인 웹사이트를 만들던 중, 오픈소스 커뮤니티와 공유하고자 이를 기반으로 테마로 만들기로 했습니다. 이 프로젝트가 마음에 든다면 여기에 들인 시간과 노력을 후원 해 주세요. [제 작업을 후원해](#저의 작업을 후원할 수 있습니다.) 주시면 감사하겠습니다.

### 특징

- 다국어 웹사이트
  - 영어(기본값), 일본어, 브라질 포르투갈어, 한국어
- 추천 언어 제공 기능
- 아이콘 활성화 비활성화 옵션이 있는 자동 탐색 버튼 추가기
- `Home`, `About`, `Archives`, `Post-list`, `Links`, `Projects` 등에 대한 레이아웃
- 색 구성표 전환 옵션(어두운 조명)
- 자동 연락처 옵션 추가기
- 자동 이미지 참조 (이미지의 전체 경로를 추가할 필요가 없습니다. 앞에 `:`를 추가하기만 하면 됩니다.)
- 이미지 레이지 로더, 이미지 뷰어
- 크리에이티브 커먼즈 라이센스가 포함된 멋진 바닥글
- 게시물용 이동식 목차 모달 상자
- 게시물 공유 옵션
- 카테고리 또는 태그별 게시 목록
- 게시물에 대한 댓글
  - [Giscus](https://giscus.app)
  - [Disqus](https://disqus.com)
- 번호 형식의 페이지 또는 스크롤 형식의 페이지 탐색
- 사이트맵 기능
- 검색 엔진 최적화(SEO)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me/)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- 애널리틱스(Google Analytics)
- 쿠키 동의 기능
- 문의 양식 기능(Google 양식)
- 사이트 검색 기능
- 작은 저장 공간을 위한 코드 압축(`HTML` `JS` `SCSS`)
- 모바일 앱 지원
- 모바일 장치 친화적(Android 및 IOS에서 테스트)
- 개발자를 위한 잘 정리된 폴더 구조(Chrome, Safari, FireFox에서 테스트됨)

### 설치

#### Github 페이지

1. [리포지토리를 포크합니다](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork).
1. \_config.yml을 편집하고 `url` 아래와 같이 변경하고 변경 사항을 push합니다.

   ```yaml
   url: "https://your_github_user_name.github.io"
   ```

1. 리포지토리 이름을 다음으로 바꿉니다`your_github_user_name.github.io`
1. 리포지토리의 `Actions` 탭에서 배포 상태를 확인합니다.
1. 녹색으로 바뀌면 사이트가 활성화 됩니다`https://your_github_user_name.github.io`

#### 로컬 빌드

1. OS에 [Jekyll 설치](https://jekyllrb-ko.github.io/docs/installation/)
1. 리포지토리를 복제하거나 [다운로드하고](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest) 명령 프롬프트에서 폴더로 이동 후 `bundle install`명령을 실행합니다.
1. `bundle exec jekyll serve --watch --host 0.0.0.0 --safe` 명령을 사용하여 빌드
    - 매개변수를 사용하면 `--host 0.0.0.0` 동일한 LAN에서 웹 서버에 액세스할 수 있습니다.
    - 매개변수를 사용하면 `--safe` 외부 플러그인이 추가되지 않았는지 확인할 수 있습니다. (Github 페이지 개발용)
1. `0.0.0.0:4000/`의 주소로 사이트를 시험 해 볼수 있습니다.

### 선적 서류 비치

YouTube에서 [Mr. Green 테마 튜토리얼 재생 목록을](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD) 확인하십시오.

### 학점

제 웹 사이트를 구축할 수 있는 기회를 준 이 프로젝트들에 감사드립니다.

- [Jekyll](https://jekyllrb-ko.github.io) 은 정적 사이트 생성기입니다. 즐겨 사용하는 마크업 언어로 작성된 텍스트를 사용하고 레이아웃을 사용하여 정적 웹 사이트를 만듭니다. 사이트의 모양과 느낌, URL, 페이지에 표시되는 데이터 등을 조정할 수 있습니다. 자원 봉사자들에 의해 유지되는 멋진 프로젝트입니다.

- [GitHub Pages](https://pages.github.com/) 는 GitHub 리포지토리에서 직접 호스팅됩니다. 변경 사항을 push하면 사이트가 자동으로 생성됩니다.

이 프로젝트에서 작업하는 동안 유용하다고 생각되는 사이트 중 일부입니다. [링크 페이지](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/ko/tabs/links.html)

### 저의 작업을 후원해 주세요.

아무 것도 없는 상태에서 시작한 프로젝트는 만드는 데는 많은 시간이 걸립니다. 이 프로젝트를 지속하고 모두를 위한 새콘텐츠를 만들 수 있도록 저를 지원해 주시면 감사하겠습니다.

- 내 [GitHub 후원자](https://github.com/sponsors/MrGreensWorkshop "GitHub 스폰서에서 저를 지원하세요") 가 될 수 있습니다 (매월 또는 일회성).
- 내 [Patreons](https://patreon.com/MrGreensWorkshop "Patreon에서 저를 지원해주세요") 중 하나가 될 수 있습니다 (매월).
- [Ko-fi](https://ko-fi.com/MrGreensWorkshop "Ko-fi를 통해 팁을 주세요") 를 통해 나에게 팁을 줄 수 있습니다 (1회).

### 기여 방법

풀 리퀘스트를 환영합니다. Issues 및 Pull Request 템플릿의 지침을 확인하십시오.

### 기여자

당신의 기여에 감사드립니다!

- [Vitor DallAcqua](https://github.com/fandangos)의 브라질 포르투갈어 번역.

### 라이센스

[MIT 라이센스](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt) 에 명시된 바와 같이 라이센스 및 저작권 표시를 포함하는 한 이 테마를 어디에서나 사용할 수 있습니다.

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

내 페이지에 대한 링크를 추가하거나 내 작업에 대한 후원을 받을 수 있도록 바닥글에 "Pwrd by Mr. Green" 링크를 남겨주세요.

감사합니다!

### 기타 라이선스

Mr. Green Jekyll 테마는 아래의 라이브러리를 이용해서 작성되었습니다. 이 라이브러리들이 없었다면 이 테마를 완성할 수 없었을 것입니다.

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

[Mr. Green Jekyll 테마](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
