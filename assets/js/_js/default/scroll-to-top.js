/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/*
 * Scroll back to top button
 * when you scroll down the page, this button allows you to scroll back to top of the page
*/

(function () {
  'use strict';

  /* Extend jQuery easing with easeInOutCubic */
  $.easing.easeInOutCubic = function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };

  $(function () {
    const stat = { on: 1, off: 2 };
    let status = stat.off;
    const button = $("#scroll-to-top");

    button.on("click keypress", function (e) {
      $('html,body').animate(
        { scrollTop: 0 }
        , 600
        , 'easeInOutCubic'
      );
      return false;
    });

    button.hover(function () {
      $(this).animate({ 'opacity': '1' }, 300);
    }, function () {
      $(this).animate({ 'opacity': '0.4' }, 300);
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        if (status == stat.off) {
          status = stat.on;
          button.css({
            'display': 'block'
            , 'opacity': '0.4'
          });
        }
      } else {
        if (status == stat.on) {
          status = stat.off;
          button.fadeOut();
        }
      }
    });
  });

})();
