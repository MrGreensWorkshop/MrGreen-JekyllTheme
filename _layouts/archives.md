---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# The Archives of posts.
---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}
{%- assign postsByYear = lng_pages | sort: 'date' | reverse | group_by_exp:"post", "post.date | date: site.data.lang[lng].date.year" -%}
<div class="multipurpose-container">
  <h1>{{ site.data.lang[lng].archives.page_header }}</h1>
  <div class="archives">
    {%- for year in postsByYear %}
    <div class="year">
      <h6>{{ year.name }}</h6>
      {%- comment %}we can directly filter days. But I wanted to leave in case list by month needs{% endcomment -%}
      {%- assign postsByMonth = year.items | sort: 'date' | reverse | group_by_exp:"post", "post.date | date: '%m'" -%}
      {%- for month in postsByMonth -%}
      <div class="month">
        {%- comment %}convert string to integer{% endcomment -%}
        {%- assign monthInt = month.name | plus: 0 -%}
        {%- comment %}-1, since array starts from zero index{% endcomment -%}
        {%- assign monthInt = monthInt | minus: 1 %}
        <h6>{{ site.data.lang[lng].date.months[monthInt] }}</h6>
        <ul>
        {%- for post in month.items %}
          <li>
            <span>{{ post.date | date: site.data.lang[lng].date.day }}</span>
            {%- assign page_title = post.title -%}
            {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
            <a href="{{ post.url | relative_url }}">{{ page_title }}</a>
          </li>
        {%- endfor %}
        </ul>
      </div>
      {% endfor -%}
    </div>
    {%- endfor %}
  </div>
</div>
