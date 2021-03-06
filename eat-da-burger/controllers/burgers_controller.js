var express = require("express");

var burger = require("../models/burgers.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function(result) {
      res.redirect("/");
    }
  );
});
router.put("/api/burgers/:id", function(req, res) {
  //console.log(req);
  var condition = "id = " + req.params.id;
 // console.log("condition", condition);

  burger.updateOne({ devoured: true }, condition, function(result) {
 
 
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
console.log(condition)
  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use
module.exports = router;
