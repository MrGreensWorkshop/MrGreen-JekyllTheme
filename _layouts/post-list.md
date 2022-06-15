---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
---
{% if site.data.conf.posts.post_query == true and site.data.conf.posts.post_query_tabs == true -%}
  {% include post-list/upside-down-tabs.html -%}
{% endif -%}

<div class="post-list-header"></div>
<div class="post-list-container">
  {% for post in paginator.posts -%}
    {% include post-list/post-thumbnail-data.liquid post = post -%}
    {% include post-list/post-thumbnail-html.html
      url = post_url
      image = image
      max_width = max_width
      display = display
      title = page_title
      title_sub = title_sub
      date = post_date
      read_time = read_time
      comment_style = comment_style
    %}
  {% endfor -%}
</div>

{%-comment-%} Pagination {%-endcomment-%}
{% if paginator.total_pages > 1 -%}
  {%- assign blogpages = site.html_pages | where_exp: "item", "item.layout == 'post-list'" -%}
  {% include multi_lng/get-pages-by-lng.liquid pages = blogpages -%}
  {% if site.data.conf.posts.pager_navigation_post_list == 'prev_next_buttons' -%}
    {%- include post_common/pager-prev-next-buttons.html pages = lng_pages current_page_url = page.url side_aligned = site.data.conf.posts.pager_prev_next_buttons_side_aligned -%}
  {% elsif site.data.conf.posts.pager_navigation_post_list == 'page_numbers' %}
    {% include post_common/pager-page-numbers.html pages = lng_pages current_page_url = page.url -%}
  {% endif -%}
{% elsif site.data.conf.posts.pager_navigation_post_list == 'page_numbers' and site.data.conf.posts.pager_page_numbers_auto_generator -%}
  {% if site.data.conf.posts.post_query_mode_startup == 'paginator' or site.data.conf.posts.post_query_mode_query == 'paginator' %}
    {% include post_common/pager-page-numbers.html pages = nil current_page_url = page.url -%}
  {% endif -%}
{% endif -%}
