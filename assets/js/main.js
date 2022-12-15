---
layout: util/compress_js
---
/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

{% include_relative _js/default/nav/close-top-nav-on-outside-click.js %}
{% include_relative _js/default/tooltip-init.js %}
{% include_relative _js/default/show-tooltip.js %}

{% if site.data.conf.main.color_scheme_dark -%}
  {% if site.data.conf.main.color_scheme_switch_side_nav or site.data.conf.main.color_scheme_switch_top_nav -%}
    {% include_relative _js/default/nav/color-scheme-switch.js %}
  {%- endif %}
{%- endif %}

{% if site.data.conf.main.side_nav_toggle_button_no_top_nav_buttons -%}
  {% include_relative _js/default/nav/side-nav-toggle.js %}
{%- endif %}

{% if site.data.conf.main.scroll_back_to_top_button -%}
  {% include_relative _js/default/scroll-to-top.js %}
{%- endif %}

{% for owner in site.data.owner -%}
  {% assign email_exist = owner[1].contacts | where_exp: "item", "item.email != nil" | first -%}
  {% if email_exist -%}
    {% include_relative _js/default/set-email.js %}
    {% break %}
  {%- endif %}
{%- endfor %}

{% if site.data.lang.size > 1 and site.data.conf.main.language_switch_lang_list.size > 1 and site.data.conf.main.language_translation_offer_box -%}
  {% include_relative _js/default/check-storage-availability.js %}
  {% include_relative _js/default/sliding-msg-box.js %}
  {% include_relative _js/default/lang-offer-msg-box.js %}
{%- endif %}

{% if site.data.conf.main.cookie_consent.enable == true %}
  {% include_relative _js/default/cookie-consent.js %}
{%- endif %}

/**********************************************************
* for layout specific content
***********************************************************/

{% if site.posts != nil and site.posts != empty %} {% assign post_exist = true %} {% endif %}

{% assign pages = site.html_pages | where_exp: "item", "item.layout == 'post-list'" %}
{% if pages.size > 0 %} {% assign post_list_page_exist = true %} {% endif %}

{% assign pages = site.html_pages | where_exp: "item", "item.layout == 'home'" %}
{% if pages.size > 0 %} {% assign home_page_exist = true %} {% endif %}

{% assign pages = site.html_pages | where_exp: "item", "item.layout == 'links'" %}
{% if pages.size > 0 %} {% assign links_page_exist = true %} {% endif %}

{% assign pages = site.html_pages | where_exp: "item", "item.layout == 'projects'" %}
{% if pages.size > 0 %} {% assign projects_page_exist = true %} {% endif %}


{% if home_page_exist %}
  {% include_relative _js/home/heading-fade-in.js %}
{% endif %}

{%- if links_page_exist and site.data.conf.others.links.use_rows_as_link -%}
  {% include_relative _js/links/open-url-in-new-page.js %}
{%- endif %}

{% if projects_page_exist %}
  {% include_relative _js/projects/read-more-less.js %}
{% endif %}

{%- if post_exist -%}
  {%- if site.data.conf.posts.share_buttons == true -%}
    {% include_relative _js/post/copy-to-clipboard.js %}
  {%- endif %}

  {%- if site.data.conf.posts.post_table_of_contents == true -%}
    {% include_relative _js/post/movable-panels.js %}
  {%- endif %}

  {%- if site.data.conf.posts.post_table_of_contents == true -%}
    {% include_relative _js/post/table-of-contents-init.js %}
  {%- endif %}
{%- endif %}

{%- if post_exist or post_list_page_exist %}
  {% if site.data.conf.posts.pager_page_numbers_auto_generator == true %}
    {% if site.data.conf.posts.pager_navigation_post == 'page_numbers' or site.data.conf.posts.pager_navigation_post_list == 'page_numbers' -%}
      {% include_relative _js/post_common/pager-page-numbers.js %}
    {%- endif %}
  {%- endif %}
{%- endif %}

{%- if post_list_page_exist -%}
  {% if site.data.conf.posts.post_query %}
   {% include_relative _js/post-list/post-query.js %}
    {% if site.data.conf.posts.post_query_tabs %}
      {% include_relative _js/post-list/upside-down-tabs-slide.js %}
    {% endif -%}
  {% endif -%}
{%- endif %}
