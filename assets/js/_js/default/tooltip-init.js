/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    /* Enable bootstrap tooltip */
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover',
      delay: { show: 500, hide: 100 }
    });

    /* hide tooltip after 2 sec */
    var tooltipHideTmr;
    $('[data-toggle="tooltip"]:not([data-tooltip-no-hide])').on('inserted.bs.tooltip', function () {
      clearTimeout(tooltipHideTmr);
      tooltipHideTmr = setTimeout(function () {
        $('[data-toggle="tooltip"]').tooltip('hide');
      }, 2000);
    });
  });

})();
