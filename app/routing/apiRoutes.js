// Dependencies
// =============================================================
var express = require("express");
var path = require("path");



//  apiRoutes.js file should contain two routes:
module.exports = function (app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {  
    console.log(res);
    return res.json(friends);
  });

  // A POST routes /api/friends. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {  
    console.log(res);
  });