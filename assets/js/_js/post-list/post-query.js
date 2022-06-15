/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/* comment at top */
(function () {
  'use strict';

  const debug = 0;
  let logger = function () { };
  if (debug == 1) {
    logger = function (str) { console.log(str); };
  }

  const outMode = { paginator: 1, scroll_to_load: 2 };

  var globals = {
    setProperties: setProperties
    , showAll: showAll
    , runQuery: runQuery
    , getPageCount: getPageCount
    , pagerShow: pagerShow
    , outMode: outMode
  };

  /* default properties */
  const properties = {};
  properties.jsonPath = "";
  properties.matchPattern = /\{(.*?)\}/g;
  properties.queryResultFormat = "";
  properties.resultListName = "";
  properties.resultHeaderName = "";
  properties.resultHeaderTagName = "h1";
  properties.resultMsgTagName = "p";
  properties.resultFoundTitleFormat = "";
  properties.resultNotFoundTitleText = "No Results Found.";
  properties.resultNotFoundMsgFormat = "We couldn't find anything associated with '{property}' for '{value}' here.";
  /* optional value */
  properties.showAllFunction = "@@@";
  properties.resultKeyValList = "@@@";
  properties.resultFoundThumbTemplate = "@@@";
  properties.resultFoundThumbIcons = "@@@";
  /* approx. thumb height to calculate how many can be loaded on screen */
  properties.thumb_height = 0;
  properties.paginator_post_per_page = 5;
  properties.hideElementWhenResultShown = "";
  properties.resultStartUpDisplayMode = "";
  properties.resultQueryDisplayMode = "";


  /* globals */
  var jsonData = '';
  /* scroll_to_load opt, post holder */
  var arryList = [];
  /* scroll_to_load opt, calculated height for scroll */
  var tmp_thumb_height = 0;
  /* paginator opt, post holder */
  var postList = [];
  var page_cnt = 0;
  /* holds html initial page */
  var startup_ResultList_html = null;


  function isEmpty(value) {
    if (value === "" || value === null || typeof value === "undefined") return true;
    return false;
  }

  function setProperties(_properties) {
    for (let key in properties) {
      if (_properties.hasOwnProperty(key)) {
        properties[key] = _properties[key] || properties[key];
      } else if (isEmpty(properties[key])) {
        logger("post query, property key " + key + " doesn't have default value and not set in setProperties");
        continue;
      }
      /* check properties and make sure all is filled in. */
      if (isEmpty(properties[key])) {
        logger("post query, property is not set: " + key);
        continue;
      }
      /* for optional values */
      if (properties[key] == "@@@") properties[key] = "";
    }
  }

  function resultFormatter(property_obj, layout) {
    return layout.replace(properties.matchPattern, function (matchStr, property) {
      /* if no json property to match, to prevent adding {property} etc. */
      if (isEmpty(property_obj[property])) return "";
      return property_obj[property] || matchStr;
    });
  }

  function resultMsgFormatter(property, value, layout, firstCharUpperCase = false) {
    let property_obj = {
      'property': property
      , 'value': value
    };

    if (isEmpty(properties.resultKeyValList) == false) {
      const result = properties.resultKeyValList[property];
      if (isEmpty(result) == false) property_obj.property = result;
    } else {
      if (firstCharUpperCase == true) property_obj.property = firstChrUppercase(property);
    }
    if (firstCharUpperCase == true) property_obj.value = firstChrUppercase(value);

    if (isEmpty(properties.resultFoundThumbTemplate) == false) {
      let thumb_template = properties.resultFoundThumbTemplate;
      if (isEmpty(properties.resultFoundThumbIcons) == false) {
        const result = properties.resultFoundThumbIcons[property];
        if (isEmpty(result) == false) {
          property_obj.icon = result;
          thumb_template = resultFormatter(property_obj, thumb_template);
        }
      }
      property_obj.thumb = thumb_template;
    }

    return resultFormatter(property_obj, layout);
  }

  function firstChrUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function machValue(prop, value) {
    if (value == 'all') return true;
    if (prop.toLowerCase() == value.toLowerCase()) return true;
    return false;
  }

  function filterQuery(posts, property, value) {
    let queryResult = [];
    for (let post of posts) {
      /* if it doesn't have any item, pass it */
      if (typeof post[property] === 'undefined') continue;
      let prop = post[property].split(", ");
      /* if it doesn't have any item, pass it */
      if (prop[0] == '') continue;
      for (let item of prop) {
        if (machValue(item, value) == true) {
          queryResult.push(post);
          /* prevent duplicates, add post once */
          break;
        }
      }
    }
    return queryResult;
  }

  function getContainer(className) {
    let container = $(className);
    if (container.length == 1) {
      return container;
    } else {
      logger(className + " > obj not found.");
      return null;
    }
  }

  function cleanContainer(className) {
    let container = getContainer(className);
    if (container == null) return null;
    /* clean list before loading new one */
    container.empty();
    return container;
  }

  function setQueryResult(resultList, posts, page_no) {
    if (page_no == null) {
      /* scroll_to_load */
      let top_margin = resultList.offset().top;
      tmp_thumb_height = properties.thumb_height;

      /* check width (for mobile devices) */
      if ($(document).width() <= 500) {
        tmp_thumb_height = properties.thumb_height * 2;
      }
      /* screen height / thumb height */
      let postCountToShow = ($(document).height() - top_margin) / tmp_thumb_height;
      /* round up */
      postCountToShow = Math.ceil(postCountToShow);

      /* since pop is used, we need to reverse the array */
      posts.reverse();
      while (posts.length > 0 && postCountToShow > 0) {
        let _tmp = resultFormatter(posts.pop(), properties.queryResultFormat);
        resultList.append(_tmp);
        postCountToShow--;
      }
    } else {
      /* paginator */
      if (page_no > 0) {
        let start_no = (page_no - 1) * properties.paginator_post_per_page;
        let end_no = start_no + properties.paginator_post_per_page;
        for (let i = start_no; i < end_no; i++) {
          if (i > posts.length - 1) break;
          let _tmp = resultFormatter(posts[i], properties.queryResultFormat);
          resultList.append(_tmp);
        }
      } else {
        logger("page_no is: " + page_no);
      }
    }
  }

  function setQueryResultNotFoundMsg(resultHeader, property, value) {
    resultHeader.append(`<${properties.resultHeaderTagName}>${properties.resultNotFoundTitleText}</${properties.resultHeaderTagName}>`);
    let txt = resultMsgFormatter(property, value, properties.resultNotFoundMsgFormat);
    resultHeader.append(`<${properties.resultMsgTagName}>${txt}</${properties.resultMsgTagName}>`);
  }

  function setQueryResultFoundMsg(resultHeader, property, value, resultFoundTitleFormat) {
    if (isEmpty(resultFoundTitleFormat) == false) {
      let txt = resultMsgFormatter(property, value, resultFoundTitleFormat, true);
      resultHeader.append(`<${properties.resultHeaderTagName}>${txt}</${properties.resultHeaderTagName}>`);
    }
  }

  function showAll() {
    if (properties.showAllFunction == true) {
      restorePageContent();
    } else {
      runQuery('year', 'all', "", properties.resultStartUpDisplayMode);
    }
  }

  function runQuery(property, value, resultFoundTitleFormat = properties.resultFoundTitleFormat, mode = properties.resultQueryDisplayMode) {
    let resultList = cleanContainer(properties.resultListName);
    if (resultList == null) return;
    let resultHeader = cleanContainer(properties.resultHeaderName);
    let page_no = null;
    let arry;

    arryList.length = 0;
    postList.length = 0;
    page_cnt = 0;

    let posts = filterQuery(jsonData, property, value);

    if (posts.length == 0) {
      setQueryResultNotFoundMsg(resultHeader, property, value);
    } else {
      if (mode == outMode.paginator) {
        postList = posts;
        logger("paginator turn");
        arry = postList;
        page_no = 1;
        page_cnt = Math.ceil(posts.length / properties.paginator_post_per_page);
        if ($(properties.hideElementWhenResultShown).length == 1) $(properties.hideElementWhenResultShown).show();
      } else if (mode == outMode.scroll_to_load) {
        arryList = posts;
        logger("scrollToLoadResults turn");
        arry = arryList;
        if ($(properties.hideElementWhenResultShown).length == 1) $(properties.hideElementWhenResultShown).hide();
      }

      /* add the header */
      setQueryResultFoundMsg(resultHeader, property, value, resultFoundTitleFormat);
      setQueryResult(resultList, arry, page_no);
    }

    $(window).trigger('post-query-done');
  }

  function getPageCount() {
    return page_cnt;
  }

  function pagerShow(page_no) {
    let resultList = cleanContainer(properties.resultListName);
    if (resultList == null) return;
    setQueryResult(resultList, postList, page_no);
  }

  function getPageContent() {
    startup_ResultList_html = "";
    let resultList = getContainer(properties.resultListName);
    if (resultList == null) return;
    startup_ResultList_html = resultList.html();
  }

  function restorePageContent() {
    let resultList = cleanContainer(properties.resultListName);
    if (resultList == null) return;
    let resultHeader = cleanContainer(properties.resultHeaderName);
    if (resultHeader != null) resultHeader.empty();
    arryList.length = 0;
    postList.length = 0;
    page_cnt = -1;
    resultList.html(startup_ResultList_html);
    if ($(properties.hideElementWhenResultShown).length == 1) $(properties.hideElementWhenResultShown).show();
    $(window).trigger('post-query-done');
  }

  $(function () {
    function loadJsonFile() {
      if (isEmpty(properties.jsonPath)) {
        logger("jsonPath is not set");
        return;
      }
      /* load json */
      $.getJSON(properties.jsonPath)
        .done(function (data_arry) {
          jsonData = data_arry;
          $(window).trigger('post-query-ready');
        })
        .fail(function (jqxhr, textStatus, error) {
          var err = textStatus + ", " + error;
          logger("getJSON Failed: " + err);
        });
    }

    function scrollToLoad() {
      if ($(window).scrollTop() >= $(document).height() - $(window).height() - tmp_thumb_height) {
        if (arryList.length > 0) {
          let resultList = getContainer(properties.resultListName);
          if (resultList == null) return;
          resultList.append(resultFormatter(arryList.pop(), properties.queryResultFormat));
          /* logger(arryList.length); */
        }
      }
    }

    $(window).scroll(function () {
      scrollToLoad();
    });

    $(window).resize(function () {
      scrollToLoad();
    });

    getPageContent();
    loadJsonFile();
    logger("PostQuery Debug");
  });

  (function (window) {
    window.PostQuery = globals;
  })(window);

}());
