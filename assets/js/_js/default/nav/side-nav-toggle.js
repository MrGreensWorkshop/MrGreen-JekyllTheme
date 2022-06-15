/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  let rootElement = document.querySelector(':root');
  let sideNavElement = document.getElementById('side-nav-container');
  let closeButton =  document.querySelector('.side-nav-close');
  let sideNavHr = document.querySelector('.side-nav > hr:first-of-type');
  let topNavToggleElement = document.querySelector('.top-nav-menu-toggle');
  let sideNav = document.querySelector('.side-nav');
  let sideNavWidthVar = '--side-nav-width';
  let sideNavWidthDefVar = '--side-nav-width-def';
  let sideNavHeightVar = '--side-nav-bottom-buttons-container-height';

  function ToggleShowHide() {
    let topNavOn = parseInt(window.getComputedStyle(rootElement).getPropertyValue(sideNavWidthVar)) == 0 ? true : false;
    if (topNavOn == true) {
      let sideNavOn = parseInt(window.getComputedStyle(sideNavElement).getPropertyValue('left')) == 0 ? true : false;
      let sideNavWidth = parseInt(window.getComputedStyle(rootElement).getPropertyValue(sideNavWidthDefVar));
      let sideNavHeight = parseInt(window.getComputedStyle(rootElement).getPropertyValue(sideNavHeightVar));
      /* open */
      if ( sideNavOn == false ) {
        sideNavElement.style.left = '0px';
        if (closeButton) {
          /* first, set the display property, then we can set other properties */
          closeButton.style.display = 'inherit';
          let middleOfButton = parseInt(window.getComputedStyle(closeButton).getPropertyValue('height')) / 2;
          closeButton.style.top = (sideNavHr.getBoundingClientRect().y - middleOfButton)  + 'px';
          /*closeButton.style.left = (sideNavWidth - 17) + 'px';*/
        }
        /* isMobile */
        if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
          sideNav.style.minHeight = (window.innerHeight - sideNavHeight) + 'px';
        }
      /* close */
      } else {
        sideNavElement.style.left = (sideNavWidth * -1) + 'px';
        if (closeButton) {
          closeButton.style.display = 'none';
        }
      }
    }
  }

  /* toggle menu using top nav button */
  topNavToggleElement.addEventListener('click', ToggleShowHide);

  /* if outside of side nav is clicked, close it */
  window.addEventListener('click', function(e) {
    let outsideClicked = (sideNavElement.contains(e.target) == false);
    let sideNavOn = parseInt(window.getComputedStyle(sideNavElement).getPropertyValue('left')) == 0 ? true : false;
    let topNavOn = parseInt(window.getComputedStyle(rootElement).getPropertyValue(sideNavWidthVar)) == 0 ? true : false;
    if (outsideClicked && sideNavOn && topNavOn) {
      ToggleShowHide();
    }
  });

  /* close button event */
  if (closeButton) {
    closeButton.addEventListener('click', ToggleShowHide);
  }

  /* if window is resized, close side nav */
  window.addEventListener('resize', function(e) {
    sideNavElement.style.removeProperty('left');
    if (closeButton) {
      let topNavOn = parseInt(window.getComputedStyle(rootElement).getPropertyValue(sideNavWidthVar)) == 0 ? true : false;
      if ( topNavOn == false ) {
        closeButton.style.removeProperty('display');
        closeButton.style.removeProperty('left');
      }
    }
  });

})();
