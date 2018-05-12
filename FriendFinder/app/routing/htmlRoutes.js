var path = require("path");

// Routing

module.exports = function(app) {
    // HTML pages GET Requests
   
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // default to home if there is no match
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};