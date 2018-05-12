
// var path = require("path");
var friends = require ("../data/friends.js");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
      

        //Array to hold comparison results
        var smallest = 10000000;
        var bestFriend;

        //For loop 
        for (var i = 0; i < friends.length; i++) {
          
            var compArray = [];

            for (var j = 0; j < friends[i].scores.length; j++) {
                compArray.push(Math.abs(friends[i].scores[j] - req.body.scores[j]));

            }
            var matchScore = compArray.reduce((a, b) => a + b, 0);

            if (matchScore < smallest) {
                smallest = matchScore;
                bestFriend = friends[i];
            }
        }

        //Returns the best match to the user
        res.json(bestFriend);

        // Adds current user to the friendsArray
        friends.push(req.body);
    });

}