---
# Mr. Green Jekyll Theme - v1.0.1 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# main page (index.html)
---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}

<div class="multipurpose-container home-heading-container">
  <div class="home-heading" style="background-image:url('{{ page.img }}');">
    <div class="home-heading-message">
      {{ site.data.lang[lng].home.top_header_line1 | replace: site.data.conf.main.brand_replace, site.data.owner.brand }}
      {%- if site.data.lang[lng].home.top_header_line2 %}
        <br>
        {{ site.data.lang[lng].home.top_header_line2 | replace: site.data.conf.main.brand_replace, site.data.owner.brand }}
      {% endif -%}
    </div>
  </div>
  <div class="home-intro-text">
    {{ content }}
  </div>
</div>

{%- if lng_pages.size > 0 and site.data.conf.others.home.new_posts %}
<div class="multipurpose-container new-posts-container">
  <h1>{{ site.data.lang[lng].home.new_posts_title }}</h1>
  <ul class="new-posts">
  {%- for _post in lng_pages limit: site.data.conf.others.home.new_posts_count_limit -%}
    <li>
      {%- assign page_title = _post.title -%}
      {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
      <a href="{{ site.baseurl }}{{ _post.url }}">{{ page_title }}
        <span>{{ _post.date | date_to_string | date: site.data.lang[lng].date.long }}</span>
      </a>
    </li>
  {% endfor -%}
    <li>
      {%- include multi_lng/get-page-by-layout.liquid layout = 'archives' -%}
      <a href="{{ site.baseurl }}{{ layout_page_obj.url }}">{{ site.data.lang[lng].home.new_posts_show_more_button }}</a>
    </li>
  </ul>
</div>
{% endif -%}
