/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  (function (window) {
    window.openURL = openURL;

    function openURL(url) {
      let link = document.createElement('a');
      link.target = "_blank";
      link.href = url;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    };
  })(window);

})();
