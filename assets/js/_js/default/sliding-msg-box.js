/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  var globals = {
    msgBoxSelector: ".slideBox"
    , msgBoxMsgClass: "msg"
    , msgBoxCloseClass: "close-button"
    , slideEndSelector: "slideBoxEnd"
    , html: ""
    , show: show
    , hide: hide
    , init: init
    , setMsgHtml: setMsgHtml
    , setCloseCallBack: setCloseCallBack
  };

  function getMsgBoxSelector(id) {
    return '#' + id + ' > ' + globals.msgBoxSelector;
  }

  function getMsgBoxElement(id) {
    return document.querySelector(getMsgBoxSelector(id));
  }

  function init(id, msgHtml, closeCallBack) {
    /* remove old msg box */
    let holderElement = document.getElementById(id);
    if (holderElement) holderElement.remove();

    setBoxHtml(id);
    setMsgHtml(id, msgHtml);
    setCloseCallBack(id, closeCallBack);
  }

  function setMsgHtml(id, msgHtml) {
    let msgBoxElement = getMsgBoxElement(id);
    /* remove old msg */
    let oldMsgElement = msgBoxElement.getElementsByClassName(globals.msgBoxMsgClass)[0];
    if (oldMsgElement) oldMsgElement.remove();
    /* create new msg */
    let newMsgElement = document.createElement("div");
    newMsgElement.className = globals.msgBoxMsgClass;
    newMsgElement.innerHTML = msgHtml;
    /* add msg */
    msgBoxElement.appendChild(newMsgElement);
  }

  function setCloseCallBack(id, callBack) {
    let msgBoxElement = getMsgBoxElement(id);
    let closeButton = msgBoxElement.getElementsByClassName(globals.msgBoxCloseClass)[0];
    closeButton.addEventListener('click', callBack);
  }

  function show(id) {
    let msgBoxElement = getMsgBoxElement(id);
    msgBoxElement.style.display = 'inherit';
    setTimeout(function () { msgBoxElement.classList.toggle(globals.slideEndSelector); }, 50);
  }

  function hide(id) {
    let msgBoxElement = getMsgBoxElement(id);
    msgBoxElement.classList.toggle(globals.slideEndSelector);
    setTimeout(function () { msgBoxElement.style.display = 'none'; }, 400);
  }

  function setBoxHtml(id) {
    let boxHolderDiv = document.createElement("div");
    boxHolderDiv.id = id;
    boxHolderDiv.innerHTML = globals.html;
    document.body.appendChild(boxHolderDiv);
  }

  (function (window) {
    window.SlidingMsgBox = globals;
  })(window);

})();
