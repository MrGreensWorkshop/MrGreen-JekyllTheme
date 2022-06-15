---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div class="multipurpose-container" id="notfound">
  <h1>{{ site.data.lang[lng].not_found.header }}</h1>
  <br>
  <p class="line1">{{ site.data.lang[lng].not_found.line1 }}</p>
  <p class="line2">{{ site.data.lang[lng].not_found.line2 }}</p>
</div>

{%- if lng == site.data.conf.main.default_lng %}
  {%- comment -%} create an empty array {%- endcomment -%}
  {%- assign lng_notfound = '' | split: '' -%}

  {%- for tmp_lng in site.data.conf.main.language_switch_lang_list %}
    {%- assign match = nil -%}
    {%- comment -%} make sure language translation and language folder exist {%- endcomment -%}
    {%- for _lng in site.data.lang %}
      {%-capture file_dir -%} /{{ _lng[0]}}/ {%-endcapture-%}
      {%- assign file_exist = site.html_pages | where_exp: "item", "item.dir == file_dir" -%}
      {%- if _lng[0] == tmp_lng -%}
        {%- if _lng[0] == site.data.conf.main.default_lng or file_exist.size > 0 -%}
          {%- assign match = true -%}
        {% endif -%}
      {% endif -%}
    {% endfor -%}
    {%- if match == nil -%}{%- continue -%}{% endif -%}
    {%- assign tmp_arry = '' | split: '' -%}
    {%- assign tmp_arry = tmp_arry | push: tmp_lng | push: site.data.lang[tmp_lng].not_found -%}
    {%- assign lng_notfound = lng_notfound | push: tmp_arry -%}
  {% endfor -%}

  {%- if lng_notfound.size > 1 -%}
    <script>
    let notfound_lng = {{ lng_notfound | jsonify }};
    if (window.location.pathname !== "/404.html") {
      function getlang () {
        let lang = window.location.pathname.replace("{{ site.baseurl }}", "").split('/');
        /* Removes first element from array. */
        lang.shift();
        /* get current language */
        return lang[0];
      }
      let lang = notfound_lng.filter(res=>res[0] == getlang())[0];
      if (typeof lang !== "undefined") {
        /* load 404 texts, then redirect that language. This makes transaction smoother. */
        if (lang != "{{site.data.conf.main.default_lng}}") {
          document.querySelector('#notfound>h1').textContent = lang[1].header;
          document.querySelector('#notfound>p.line1').textContent= lang[1].line1;
          document.querySelector('#notfound>p.line2').textContent = lang[1].line2;
          window.location.href = '{{ site.baseurl }}/' + lang[0] + "/404.html";
        }
      }
    }
    </script>
  {% endif -%}
{% endif -%}
