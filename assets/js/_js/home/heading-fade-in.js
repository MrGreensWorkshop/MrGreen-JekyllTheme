/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let home_heading = $(".home-heading");

    if (home_heading.length > 0) {
      home_heading.hide();
      home_heading.fadeIn("slow");
    }
  });

})();
