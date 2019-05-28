var path = require("path");

var otherUsers = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(otherUsers);
  });

  app.post("/api/friends", function(req, res) {
    var currentUser = req.body;
     console.log(currentUser);
    var currentFriend = res;
    var currentDifference = 0;
    var bestMatch = 0;
    var previousDifference = -1000;
    // console.log(otherUsers);
    for (var i = 0; i < otherUsers.length; i++) {
      currentFriend = otherUsers[i];
      //    console.log(match);
      for (var j = 0; j < currentUser.scores.length; j++) {
        currentDifference += currentUser.scores[j] - currentFriend.scores[j]
       
             console.log(currentDifference);
      }
if (currentDifference > previousDifference) {
  bestMatch = currentFriend;
  previousDifference = currentDifference;

} 
    }
otherUsers.push(currentUser);
    res.json(bestMatch);
  });
};
