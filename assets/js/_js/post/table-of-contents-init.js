/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let tocContainer = $("#toc-container");

    if (tocContainer.length > 0) {
      function InitToc() {
        /* if not in post page, exit. */
        if (typeof Toc === "undefined") return false;

        const tocNavSelector = '#table-of-contents';
        const tocOutputTarget = $(tocNavSelector);
        const tocInputSource = $(".main-container");

        /* if it's nothing to show, exit. */
        if (Toc.helpers.getTopLevel(tocInputSource) <= 1) return false;
        Toc.init({
          $nav: tocOutputTarget
          , $scope: tocInputSource
        });
        $('body').scrollspy({
          target: tocNavSelector
        });

        /* set toc box top position below the toc-view-top */
        let tocViewId = $("#toc-view-top");
        if (tocViewId.length > 0) {
          /* get tocViewId bottom position */
          let tocViewIdBottom = (tocViewId.offset().top - $(window).scrollTop()) + tocViewId.outerHeight();
          /* set toc top */
          tocContainer.css({ top: tocViewIdBottom + 'px' });
        }
        return true;
      }

      let ret = InitToc();
      /* if it's nothing to show, hide the toc box */
      if (ret == false) tocContainer.hide();
    }
  });

})();
