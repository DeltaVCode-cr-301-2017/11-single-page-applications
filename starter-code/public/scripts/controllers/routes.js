'use strict';
var app = app || {};

page('/', app.articleController.showArticle);
page('/about', app.aboutController.showAbout);

page();
// DONE: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.

// DONE: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
