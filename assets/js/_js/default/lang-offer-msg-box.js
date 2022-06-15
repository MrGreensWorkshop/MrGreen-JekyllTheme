/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  var globals = {
    currentPageLng: ""
    , supportedLngList: []
    , existLng: []
    , disableExtTranslationOffer: false
    , saveAndClose: saveAndClose
    , storageKey: "doNotOfferLanguages"
    , slidingBoxId: "lang-offer"
  };

  function saveAndClose() {
    localStorage.setItem(globals.storageKey, true);
    if (globals.disableExtTranslationOffer) toggleExtTranslationOffer(false);
    SlidingMsgBox.hide(globals.slidingBoxId);
  }

  /* Enable / Disable 3rd party translation suggestion for pages with translation. */
  function toggleExtTranslationOffer(toggle) {
    if (toggle) {
      $('html').attr('translate', 'no');
      $('html').attr('class', 'notranslate');
      $('head').append('<meta name="google" content="notranslate" />');
    } else {
      $('html').removeAttr('translate');
      $('html').removeAttr('class');
      $('head > meta[name="google"][content="notranslate"]').remove();
    }
  }

  $(function () {
    let msgHtml = null;
    /* We can use localStorage and */
    /* no setting were found on local storage */
    if (storageChk.isLocalStorageAvailable() && !localStorage.getItem(globals.storageKey)) {
      let userLangMatch = null;

      for (let browserLng of navigator.languages) {
        if (browserLng.startsWith(globals.currentPageLng)) {
          userLangMatch = true;
          break;
        }
      }

      var exists = function (arr, search) {
        return arr.some(row => row.includes(search));
      };

      let userLngMatchList = [];
      for (let browserLng of navigator.languages) {
        for (let supportedLng of globals.supportedLngList) {
          if (browserLng.startsWith(supportedLng[0])) {
            if (!exists(userLngMatchList, supportedLng[0])) userLngMatchList.push(supportedLng);
          }
        }
      }

      if (userLangMatch == null && userLngMatchList.length > 0) {
        if (globals.disableExtTranslationOffer) toggleExtTranslationOffer(true);

        /* Add title */
        let title = '<h5>';
        for (let i = 0; i < userLngMatchList.length; i++) {
          title += userLngMatchList[i][5];
          if (i != userLngMatchList.length - 1) title += ', ';
        }
        title += '</h5><br>';
        msgHtml = title;

        for (let i = 0; i < userLngMatchList.length; i++) {
          let matchLng = userLngMatchList[i];
          let foundMatch = null;
          for (let item of globals.existLng) {
            if (matchLng[0] == item[0]) {
              msgHtml += '&nbsp;<a href="' + item[2] + '" onclick="LangOfferMsgBox.saveAndClose();">' + matchLng[3] + '</a>';
              foundMatch = true;
            }
          }
          if (foundMatch == null) {
            msgHtml += '&nbsp;<a href="' + matchLng[2] + '" onclick="LangOfferMsgBox.saveAndClose();">' + matchLng[4] + '</a>';
          }

          if (i != userLngMatchList.length - 1) msgHtml += '<br><br>';
        };

        SlidingMsgBox.init(globals.slidingBoxId, msgHtml, saveAndClose);
        SlidingMsgBox.show(globals.slidingBoxId);
      }
    }
  });

  (function (window) {
    window.LangOfferMsgBox = globals;
  })(window);

})();
