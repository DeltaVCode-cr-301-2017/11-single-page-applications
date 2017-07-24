'use strict';
var app = app || {};

(function(module) {
  const adminController = {};

  adminController.showAdmin = () => {
    $('.tab-content').hide();
    $('#admin').fadeIn();
    app.articleView.initAdminPage();
  }
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:


  module.adminController = adminController;
})(app);
