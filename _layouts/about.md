---
# Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# About page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div class="multipurpose-container about-container">
  <div class="row about-main">
    <div class="col-md-3 about-img">
      <img src="{{ page.img }}" alt="">
    </div>
    <div class="col-md-9 about-header">
      <h1 translate="no">{{ site.data.owner[lng].brand }}</h1>
      <div class="meta-container">
        {%- assign about_title = site.data.owner[lng].about.sub_title | replace: site.data.conf.main.sample_replace, site.data.lang[lng].constants.sample -%}
        {%- if site.data.owner[lng].about.sub_title %}
          <p class="sub-title">
            {%- if site.data.conf.others.about.sub_title_icon %}<i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.sub_title_icon }}" aria-hidden="true"></i>{% endif -%}
            &nbsp;{{ about_title }}
          </p>
        {% endif -%}
        {%- assign tmp_obj =  site.data.owner[lng].contacts | where_exp: "item", "item.email != nil" | first -%}
        {%- assign email = tmp_obj['email'] -%}
        {%- if site.data.conf.others.about.show_email and email %}
          {%- assign _email = email | split: '@' %}
          <p class="email">
            <a href="javascript:void(0);" onclick="setAddress('{{ _email[0] }}', '{{ _email[1] }}');">
              {%- if site.data.conf.others.about.email_icon %}<i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.email_icon }}"></i>{% endif -%}
              &nbsp;{{ site.data.lang[lng].about.email_title }}
            </a>
          </p>
        {% endif -%}
        {%- if site.data.conf.others.about.show_contacts and site.data.owner[lng].contacts.size > 0 %}
          {% include default/nav/contact-links.html -%}
        {% endif -%}
      </div>
    </div>
  </div>
  <div class="row about-divider">
    <hr>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="about-msg markdown-style">
        {{ content }}
      </div>
    </div>
  </div>
</div>
