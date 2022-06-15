/*! Mr. Green Jekyll Theme - v1.1.0 (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  const debug = 0;
  let logger = function () { };
  if (debug == 1) {
    logger = function (str) { console.log(str); };
  }

  var globals = {
    consent_items: {}
    , consentBarHtml: ""
    , consentSettingHtml: ""
    , hideConsentBarWithSaveButton: false
    , gtag: function () { }
    , getConsentSettings: getConsentSettings
    , hideConsentBar: hideConsentBar
    , consentSettingDone: consentSettingDone
    , consentBarDone: consentBarDone
    , showSettings: showSettings
  };

  const consentBarSelector = '.consent-bar';
  const footerHeight = '--footer-height';
  const footerSelector = '.footer-container';
  const storageKey = "cookieConsentDone";
  const slidingBoxId = "consent-settings";
  const cookieNamePrefix = "cookieConsent";
  let settingsVisible = false;

  function getConsentSettings() {
    let consent_settings = {};
    for (const key of Object.keys(globals.consent_items)) {
      let items = globals.consent_items[key];
      let local_val = localStorage.getItem(cookieNamePrefix + key);
      if (local_val) items.value = local_val;
      for (const sub_key of Object.keys(items)) {
        if (sub_key == "value" || sub_key == "no_check_box" ) continue;
        let sub_items = items[sub_key];
        if (sub_key == "group") {
          for (const lst of sub_items) {
            Object.assign(consent_settings, { [lst]: items.value });
          }
        } else {
          Object.assign(consent_settings, { [sub_key]: sub_items });
        }
      }
    }
    return consent_settings;
  }

  function showConsentBar() {
    if (localStorage.getItem(storageKey)) return;
    let box = document.querySelector(consentBarSelector);
    let footerElement = document.querySelector(footerSelector);
    let rootElement = document.querySelector(':root');
    let position = window.getComputedStyle(footerElement).getPropertyValue('position');
    let offset = parseInt(window.getComputedStyle(rootElement).getPropertyValue(footerHeight));

    if (position == "fixed" || position == "sticky") {
      box.style.bottom = offset + 'px';
    }
    box.style.display = 'inherit';
  }

  function hideConsentBar() {
    let box = document.querySelector(consentBarSelector);
    box.style.bottom = (-1 * box.offsetHeight) + 'px';
    setTimeout(function () { box.style.display = 'none'; }, 400);
  }

  function consentSettingDone(button) {
    switch (button) {
      case "accept":
        acceptDenyAll(true);
        break;
      case "save":
        setConsents();
        break;
      case "deny":
        acceptDenyAll(false);
        break;
      default: logger("consentSettingDone undefined parameter");
    }
    hideSettings();
  }

  function consentBarDone(button) {
    switch (button) {
      case "accept":
        acceptDenyAll(true);
        break;
      case "settings":
        showSettings();
        break;
      case "deny":
        acceptDenyAll(false);
        break;
      default: logger("consentBarDone undefined parameter");
    }
    hideConsentBar();
  }

  function showSettings() {
    if (settingsVisible) return;
    initSwitches();
    SlidingMsgBox.show(slidingBoxId);
    settingsVisible = true;
  }

  function hideSettings() {
    SlidingMsgBox.hide(slidingBoxId);
    showConsentBar();
    settingsVisible = false;
  }

  function acceptDenyAll(value) {
    let consent_diff = {};
    const set_value = (value == true) ? "granted" : "denied";
    for (const key of Object.keys(globals.consent_items)) {
      let items = globals.consent_items[key];
      if (items.no_check_box == true) continue;
      for (const lst of items.group) {
        Object.assign(consent_diff, { [lst]: set_value });
      }
      localStorage.setItem(cookieNamePrefix + key, set_value);
      items.value = set_value;
    }
    logger(consent_diff);
    globals.gtag('consent', 'update', consent_diff);
    localStorage.setItem(storageKey, true);
  }

  function setConsents() {
    let consent_diff = {};
    let switches = document.querySelectorAll('.checkbox_switch[data-consent]');
    if (switches?.length == 0) return;
    for (const checkBox of switches) {
      const chk_key = checkBox.getAttribute('data-consent');
      const chk_val = (checkBox.checked == true) ? "granted" : "denied";
      let items = globals.consent_items[chk_key];
      if (chk_val != items.value) {
        for (const key of items.group) {
          Object.assign(consent_diff, { [key]: chk_val });
        }
        localStorage.setItem(cookieNamePrefix + chk_key, chk_val);
        items.value = chk_val;
      }
    }
    if (Object.keys(consent_diff).length > 0) {
      logger(consent_diff);
      globals.gtag('consent', 'update', consent_diff);
      localStorage.setItem(storageKey, true);
    }
    if (globals.hideConsentBarWithSaveButton) localStorage.setItem(storageKey, true);
  }

  function initSwitches() {
    let switches = document.querySelectorAll('.checkbox_switch[data-consent]');
    if (switches?.length > 0) {
      for (const checkBox of switches) {
        const chk_key = checkBox.getAttribute('data-consent');
        let local_val = localStorage.getItem(cookieNamePrefix + chk_key);
        if (local_val) checkBox.checked = (local_val == "granted") ? true : false;
      }
    }
  }

  function initConsent() {
    /* init consent bar */
    let barHolderDiv = document.createElement("div");
    /*boxHolderDiv.id = id;*/
    barHolderDiv.innerHTML = globals.consentBarHtml;
    document.body.appendChild(barHolderDiv);

    /* init consent settings */
    SlidingMsgBox.init(slidingBoxId, globals.consentSettingHtml, hideSettings);

    showConsentBar();
  }

  document.addEventListener("DOMContentLoaded", initConsent);

  (function (window) {
    window.CookieConsent = globals;
  })(window);

})();
