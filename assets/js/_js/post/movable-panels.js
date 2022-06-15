/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  let panelSelector = '.movable';
  let panelHeaderSelector = '.panel-heading';

  function mouseEventInit(panel, header) {
    if (panel == null || header == null) return;
    let currentX = 0, currentY = 0;

    function mouseDownEvent(e) {
      e.preventDefault();
      currentX = e.offsetX;
      currentY = e.offsetY;
      document.onmouseup = mouseUpEvent;
      document.onmousemove = mouseMoveEvent;
    }

    function mouseMoveEvent(e) {
      e.preventDefault();
      let limitX = e.clientX - currentX;
      let limitY = e.clientY - currentY;

      if (limitX < 0) limitX = 0;
      if (limitY < 0) limitY = 0;
      if (panel.offsetWidth > window.innerWidth - e.clientX + currentX) {
        limitX = window.innerWidth - panel.offsetWidth;
      }
      let headerOffset = panel.offsetHeight - header.offsetHeight;
      if (panel.offsetHeight > window.innerHeight - e.clientY + currentY + headerOffset) {
        limitY = window.innerHeight - panel.offsetHeight + headerOffset;
      }

      panel.style.left = limitX + "px";
      panel.style.top = limitY + "px";
    }

    function mouseUpEvent(e) {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    header.onmousedown = mouseDownEvent;
  }

  function touchEventToMouseEvent(event) {
    let touch = event.changedTouches[0];
    touch.target.dispatchEvent(
      new MouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
      }[event.type], {
        bubbles: true, cancelable: true, view: window, detail: 1,
        screenX: touch.screenX, screenY: touch.screenY, clientX: touch.clientX, clientY: touch.clientY,
        ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null
      })
    );
  }

  function touchEventToMouseEventInit(panel) {
    if (panel == null) return;
    panel.addEventListener("touchstart", touchEventToMouseEvent);
    panel.addEventListener("touchmove", touchEventToMouseEvent);
    panel.addEventListener("touchend", touchEventToMouseEvent);
    panel.addEventListener("touchcancel", touchEventToMouseEvent);
  }

  function movablePanelsInit() {
    /* select panels */
    let panel_list = document.querySelectorAll(panelSelector);
    if (panel_list == null || panel_list == "undefined") return;

    panel_list.forEach(function (panel) {
      /* disable scroll on panel (for mobile devices.) */
      panel.addEventListener('touchmove', function (e) {
        e.preventDefault();
      });

      /* convert Touch events to Mouse events */
      touchEventToMouseEventInit(panel);

      /* set panel mouse events */
      mouseEventInit(panel, panel.querySelector(panelHeaderSelector));
    });
  }

  document.addEventListener("DOMContentLoaded", movablePanelsInit);

})();
