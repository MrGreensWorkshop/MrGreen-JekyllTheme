/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  var globals = {
    slidingBoxId: "contact-form-id"
    , slideType: ""
    , formURL: ""
    , formLoadingText: ""
    , show: show
    , hide: hide
    , formLoaded: formLoaded
  };

  /* default properties */
  const properties = {};
  properties.matchPattern = /\{(.*?)\}/g;
  properties.formEmbedHTMLformat = '<div class="contact-form-wrapper"><h5>{formloadingtext}</h5><iframe src="{formurl}" onload="ContactForm.formLoaded();"></iframe></div>';

  var initialized = false;
  var contactFormHtml = '';

  function hide() {
    SlidingMsgBox.hide(globals.slidingBoxId);
  }

  function show() {
    /* initialize once */
    if (initialized == false) {
      let property_obj = {
        'formurl': globals.formURL
        , 'formloadingtext': globals.formLoadingText
      };
      contactFormHtml = htmlFormatter(property_obj, properties.formEmbedHTMLformat);
      SlidingMsgBox.init(globals.slidingBoxId, contactFormHtml, hide, globals.slideType);
      initialized = true;
    }
    SlidingMsgBox.show(globals.slidingBoxId);
  }

  function htmlFormatter(property_obj, layout) {
    return layout.replace(properties.matchPattern, function (matchStr, property) {
      /* if no property to match, to prevent adding {text} etc. */
      if (isEmpty(property_obj[property])) return "";
      return property_obj[property] || matchStr;
    });
  }

  function formLoaded() {
    /* fade out the loading message */
    $('#' + globals.slidingBoxId + ' h5').fadeTo("slow", 0, function() {
      /* slide up */
      $(this).slideUp("slow", function() {
          /* remove the loading message */
          $(this).remove();
      });
    });
  }

  (function (window) {
    window.ContactForm = globals;
  })(window);

})();
