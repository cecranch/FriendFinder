// Dependencies
// =============================================================
var express = require("express");
var path = require("path");



// You should save your application's data inside of app/data/friends.js as an array of objects. 


var friends = [
{
    name:"Jen",
    photo:"/public/assets/images/jen.jpg",
    scores:[
        4,
        1,
        3,
        2,
        1,
        4,
        3,
        5,
        2,
        3
      ]
  },
  {
    name:"George",
    photo:"/public/assets/images/george.jpg",
    scores:[
        3,
        1,
        5,
        4,
        2,
        1,
        3,
        2,
        4,
        5
      ]
  },
  {
    name:"Rebel",
    photo:"/public/assets/images/rebel.jpg",
    scores:[
        1,
        1,
        2,
        4,
        3,
        5,
        5,
        5,
        2,
        1
      ]
  },
  {
    name:"Bruce",
    photo:"/public/assets/images/bruce.jpg",
    scores:[
        5,
        5,
        3,
        1,
        2,
        1,
        1,
        5,
        4,
        1
      ]
  },
  {
    name:"Chris",
    photo:"/public/assets/images/chris.jpg",
    scores:[
        5,
        1,
        2,
        4,
        4,
        4,
        2,
        5,
        3,
        1
      ]
  }
];
  // Export to API Route
module.exports = friends;