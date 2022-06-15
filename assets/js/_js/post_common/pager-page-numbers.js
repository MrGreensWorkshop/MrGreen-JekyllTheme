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

  var globals = {
    setProperties: setProperties
    , buttonClick: buttonClick
  };

  /* default properties */
  const properties = {};
  properties.paginatorListContainerName = "";
  /* if auto is set, auto will take over. */
  properties.pageCountLimit = 5;
  /* this will calculate max button count, which will be shown depending on page width */
  properties.autoLimit = true;
  properties.refreshDelay = 300;
  properties.pageList = [];
  properties.pageLinkHtml = '<li><a href=""></a></li>';
  /* if not specified in properties, buttons will be disabled */
  properties.firstButtonName = " ";
  properties.lastButtonName = " ";
  properties.prevButtonName = " ";
  properties.nextButtonName = " ";
  properties.approxButtonWidth = 90;

  var activeNo = 0;
  var pageList = [];

  function isEmpty(value) {
    if (value === "" || value === null || typeof value === "undefined") return true;
    return false;
  }

  function setProperties(_properties) {
    for (var key in properties) {
      if (_properties.hasOwnProperty(key)) {
        properties[key] = _properties[key] || properties[key];
      } else if (isEmpty(properties[key])) {
        logger("Paginator Page Numbers, property key " + key + " doesn't have default value and not set in setProperties");
        continue;
      }
      /* check properties and make sure all is filled in. */
      if (isEmpty(properties[key])) {
        logger("Paginator Page Numbers, property is not set: " + key);
        continue;
      }
    }
    /* copy array */
    pageList = properties.pageList.slice();
  }

  function getPaginatorContainer(clean = false) {
    let resultList = $(properties.paginatorListContainerName);
    /* logger(resultList); */
    if (resultList.length == 1) {
      /* clean list before loading new one */
      if (clean == true) resultList.empty();
      return resultList;
    } else {
      logger(properties.paginatorListContainerName + " > resultList obj not found.");
      return null;
    }
  }

  function addButton(text, url, addDisable, addActive = false) {
    if (text == " ") return "";
    let linkObj = $($.parseHTML(properties.pageLinkHtml)[0]);
    if (addDisable == true) linkObj.addClass("disabled");
    if (addActive == true) {
      linkObj.addClass("active");
      /* remove link */
      url = "javascript:void(0);";
    }
    /* add text and url */
    linkObj.find("a").text(text).attr("href", url);
    if (addActive == false && addDisable == false) {
      linkObj.find("a").attr("onclick", 'PagerPageNumbers.buttonClick(this);');
    }
    return linkObj;
  }

  function doAdjust() {
    let resultList = getPaginatorContainer(true);
    if (resultList == null) return;
    if (pageList.length <= 1) { logger("pageList.length <= 1"); return; }
    setPage(resultList);
    if (resultList.css('opacity') == 0) {
      resultList.animate({ opacity: '1' }, 100);
    }
  }

  function setPage(resultList) {
    if (activeNo <= 0) { activeNo = pageList.indexOf(window.location.pathname) + 1; logger("activeNo1 <= 0"); }
    if (activeNo <= 0) { logger("activeNo2 <= 0"); return; }

    /* adding first button */
    resultList.append(addButton(properties.firstButtonName, pageList[0], (activeNo == 1)));

    /* add prev button */
    let pageNo = activeNo - 1;
    pageNo = (pageNo <= 1) ? 1 : pageNo;
    resultList.append(addButton(properties.prevButtonName, pageList[pageNo - 1], (activeNo == 1)));

    let pageCountLimit = properties.pageCountLimit;

    if (properties.autoLimit === true) {
      pageCountLimit = ($(document).width() / properties.approxButtonWidth);
      pageCountLimit = Math.ceil(pageCountLimit);
    }

    if (pageCountLimit > pageList.length) pageCountLimit = pageList.length;
    let startIndex = activeNo;
    let endIndex = startIndex + pageCountLimit - 1;
    if (endIndex > pageList.length) {
      /* logger(endIndex + " > " + " properties.listItemCnt: " + properties.listItemCnt); */
      startIndex = startIndex - (endIndex - pageList.length);
      endIndex = startIndex + pageCountLimit - 1;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      resultList.append(addButton(i, pageList[i - 1], false, (activeNo == i)));
    }

    /* add next button */
    pageNo = activeNo + 1;
    pageNo = (pageNo >= pageList.length) ? pageList.length : pageNo;
    resultList.append(addButton(properties.nextButtonName, pageList[pageNo - 1], (activeNo == pageList.length)));

    /* adding last button */
    resultList.append(addButton(properties.lastButtonName, pageList[pageList.length - 1], (activeNo == pageList.length)));

    /* logger(resultList.html());*/
  }

  $(function () {
    var resizeTmrId;
    var pageWidth = $(window).width();
    var pContainer = getPaginatorContainer();

    if (pContainer != null) {
      var objHeight = pContainer.height();

      $(window).resize(function () {
        if ($(this).width() !== pageWidth) {
          /* if paginator numbers does not fit to page width, hide it at first */
          if (getPaginatorContainer().height() > objHeight) {
            getPaginatorContainer().css('opacity', '0');
          }
          clearTimeout(resizeTmrId);
          pageWidth = $(this).width();
          resizeTmrId = setTimeout(doAdjust, properties.refreshDelay);
        }
      });

      doAdjust();
      logger("PagerPageNumbers Debug");
    }
  });

  $(window).bind('post-query-done', function () {
    let page_cnt = PostQuery.getPageCount();
    pageList.length = 0;
    if (page_cnt > 0) {
      for (let i = 1; i < page_cnt + 1; i++) {
        pageList.push("javascript:PostQuery.pagerShow(" + i + ");");
      }
      activeNo = 1;
      doAdjust();
    } else if (page_cnt == -1) {
      /* if restorePageContent is triggered */
      /* copy array */
      pageList = properties.pageList.slice();
      activeNo = 0;
      doAdjust();
    } else {
      logger("page_cnt: " + page_cnt);
    }
  });

  function buttonClick(e) {
    activeNo = pageList.indexOf(e.href) + 1;
    if (activeNo > 0) doAdjust();
  }

  (function (window) {
    window.PagerPageNumbers = globals;
  })(window);

}());
