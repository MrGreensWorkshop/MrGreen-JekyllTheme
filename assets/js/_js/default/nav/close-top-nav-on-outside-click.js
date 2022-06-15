/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/* when outside of top nav buttons is clicked, close it. */

(function () {
  'use strict';

  $(function () {
    $(document).click(function (e) {
      var $navbar = $(".top-nav-buttons");
      var _opened = $navbar.hasClass("in");

      if (_opened === true && $(e.target).parents('.top-nav-buttons').length == 0) {
        $navbar.collapse('hide');
      }
    });
  });

})();
