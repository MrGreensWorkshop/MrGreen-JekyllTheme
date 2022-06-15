/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/* upside-down-tabs */
(function () {
  'use strict';

  const debug = 0;
  let logger = function () { };
  if (debug == 1) {
    logger = function (str) { console.log(str); };
  }

  $(function () {
    const upsideDownMain = '.upside-down-tabs';

    if ($(upsideDownMain).length > 0) {
      /* set all to max height of element */
      const setToMax = false;
      /* click item to close */
      const clicktabItemsToClose = true;
      const tabItemMain = '.nav-tabs';
      const tabItem = $(upsideDownMain + '>' + tabItemMain + " [data-toggle='tab']");
      const closeButton = $(upsideDownMain + '>' + tabItemMain + ' #close_tabs');
      const tabContentMain = '.tab-content';
      const tabContent = $(upsideDownMain + '>' + tabContentMain);
      /* when element hides, we can't get height attr so let's get at the beginning. */
      const heights = $(upsideDownMain + '>' + tabContentMain + '>.tab-pane').map(function () {
        return $(this).outerHeight();
      }).get();
      const elementMaxHeight = Math.max.apply(null, heights);
      const CssMaxHeight = parseInt(tabContent.css('max-height'));
      const CssBorderSize = parseInt(tabContent.css('border-top-width')) + parseInt(tabContent.css('border-bottom-width'));
      /* prevent running animation concurrent */
      var inProgress = false;

      $(document).click(function (e) {
        if (tabContent.height() == 0) return;
        /* close if outside of menu is clicked */
        if (($(e.target).parents(upsideDownMain).length == 0)
          /* close if right side of close button (outside of menu) is clicked */
          || ($(e.target).hasClass(tabItemMain.slice(1)))
          /* close if link or icon is clicked */
          || (clicktabItemsToClose && ($(e.target).parents('li').find('a').attr('data-query-link') !== undefined))
        ) {
          /* hide */
          setTabContentHeight(0);
        }
      });

      /* _height :0 hide :>0 show */
      var setTabContentHeight = function (_height) {
        if (inProgress) return;
        inProgress = true;
        if (_height > 0) tabContent.show();
        tabContent.animate({
          height: _height,
        }, 500, function () {
          if (_height == 0) tabContent.hide();
          inProgress = false;
        });
      };

      /* tab items event */
      tabItem.click(function () {
        let address = $(this).attr("href");
        /* get last char and use as index */
        let elementHeight = heights[parseInt(address.slice(-1)) - 1];
        if (setToMax && (elementHeight < elementMaxHeight)) elementHeight = elementMaxHeight;
        /* check max height */
        if (elementHeight > CssMaxHeight) elementHeight = CssMaxHeight;
        elementHeight = elementHeight + CssBorderSize;
        /* show */
        setTabContentHeight(elementHeight);
      });

      /* close button event */
      closeButton.click(function () {
        /* hide */
        setTabContentHeight(0);
      });

      /* after getting height prop, hide it. */
      tabContent.hide();
      logger("upside-down-tabs-slide Debug");
    } else {
      logger(upsideDownMain + " not found.");
    }
  });

})();
