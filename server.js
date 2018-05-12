// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;


app.use(express.static(path.join(__dirname, "./public")));


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + '/app/data/Images'));

//Routes
require(path.join(__dirname, "./app/routing/apiRoutes")) (app);
require(path.join(__dirname, "./app/routing/htmlRoutes")) (app);


// LISTENER; "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
