---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
{%- include post_common/post-main.html post = page -%}

{%-comment-%} Pagination {%-endcomment-%}
{% if site.posts.size > 1 -%}
  {% include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}
  {% if site.data.conf.posts.pager_navigation_post == 'prev_next_buttons' -%}
    {%- include post_common/pager-prev-next-buttons.html pages = lng_pages current_page_url = page.url side_aligned = site.data.conf.posts.pager_prev_next_buttons_side_aligned -%}
  {% elsif site.data.conf.posts.pager_navigation_post == 'page_numbers' %}
    {% include post_common/pager-page-numbers.html pages = lng_pages current_page_url = page.url -%}
  {% endif -%}
{% endif -%}

{% if site.data.conf.posts.comments.enable and site.data.conf.posts.comments.disqus.enable and page.comments_disable != true %}
  {% include post/disqus.html %}
{% endif %}
