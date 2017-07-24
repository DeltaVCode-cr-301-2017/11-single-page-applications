'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showAbout = () => {
    $('.tab-content').hide();
    $('#about').fadeIn();
  }
  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(app);
