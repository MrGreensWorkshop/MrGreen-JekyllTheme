---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: util/compress
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
{%- assign default_dark = nil -%}
{% if site.data.conf.main.color_scheme_default_dark
  and site.data.conf.main.color_scheme_switch_side_nav != true
  and site.data.conf.main.color_scheme_switch_top_nav != true -%}
  {%- assign default_dark = 'data-color-scheme="dark"' -%}
{%- endif -%}

{%- assign color_scheme_enabled = nil -%}
{% if site.data.conf.main.color_scheme_dark -%}
  {% if site.data.conf.main.color_scheme_switch_side_nav
    or site.data.conf.main.color_scheme_switch_top_nav
    or site.data.conf.main.color_scheme_browser_color_mode -%}
    {%- assign color_scheme_enabled = true -%}
  {% endif %}
{%- endif %}

{%- include multi_lng/get-lng-code.liquid lng = lng -%}

<!DOCTYPE html>
<html lang="{{ lng_code }}">
  <head>
    {% include default/header/header.html %}
    {% include default/css-include.html %}
  </head>

  <body {{ default_dark }}>
    {% if color_scheme_enabled -%}
      <script src="{{ site.baseurl }}/assets/js/color-scheme-attr-init.js" data-mode="{{ site.data.conf.main.color_scheme_default_dark }}"></script>
    {%- endif %}
    {% include default/nav/navigation-top-nav.html -%}
    {% include default/nav/navigation-side-nav.html -%}
    {% if site.data.conf.posts.post_table_of_contents and page.layout == "post"-%}
      {%- include post/table-of-contents.html -%}
    {%- endif -%}
    <div id="main-wrapper">
      <div class="main-container">
        {%- assign returned_content = content %}
        {%- comment -%} fix for tables. {%- endcomment -%}
        {% if returned_content contains 'class="markdown-style"' -%}
          {%- assign returned_content = returned_content | replace: '<table', '<table class="table table-striped"' -%}
        {%- endif %}
        {%- comment -%} image path converter and lazy loader and viewer options. {%- endcomment -%}
        {% include default/img/img-path-converter.liquid content=returned_content layout=page.layout -%}
        {{ img_path_converter_out }}
        {%-comment-%} don't add anything here. If you want to add, check :last-child css selector for page bottom spacing. {%-endcomment-%}
      </div>
      {%- include default/footer.html -%}
      {% if site.data.conf.main.scroll_back_to_top_button -%}
      <div class="scroll-to-top-container">
        <a id="scroll-to-top" href="#main-wrapper" class="hover-effect"><i class="fa fa-angle-up"></i></a>
      </div>
      {%- endif -%}
    </div>

    {% if site.data.conf.main.search_enable -%}
      {%- include default/search.html -%}
    {%- endif %}

    {% include default/scripts-include.html -%}
  </body>
</html>
