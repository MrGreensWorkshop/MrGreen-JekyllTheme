/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/* Dependencies: color-scheme-attr-init.js */

(function () {
  'use strict';

  /* set colorSetting to checkbox */
  function themeToSwitch(checkBox) {
    if (checkBox == null) return;
    /* get current setting */
    const colorSetting = localStorage.getItem(colorScheme.storageKey) || document.body.getAttribute(colorScheme.modeAttr);
    /* set to check box */
    checkBox.checked = ((colorSetting == null) || (colorSetting == colorScheme.mode.light)) ? false : true;
    /* monitor switch changes */
    checkBox.addEventListener("change", switchToTheme);
  }

  /* checkbox change event */
  function switchToTheme(e) {
    const colorSetting = e.target.checked ? colorScheme.mode.dark : colorScheme.mode.light;
    document.body.setAttribute(colorScheme.modeAttr, colorSetting);
    localStorage.setItem(colorScheme.storageKey, colorSetting);
    synchronizeCheckBoxes(e.target);
  }

  /* synchronize other check boxes when multiple checkbox is used. */
  function synchronizeCheckBoxes(checkBox) {
    if (switches == null) return;
    switches.forEach(function (item) {
      if (item == checkBox) return;
      item.checked = checkBox.checked;
    });
  }

  function initColorSchemeSwitch() {
    switches = document.querySelectorAll('.checkbox_color_switch');
    if (switches == null || switches == "undefined" || switches?.length == 0) return;
    /* set check boxes to current color Setting */
    switches.forEach(themeToSwitch);
  }

  var switches;
  document.addEventListener("DOMContentLoaded", initColorSchemeSwitch);

})();
