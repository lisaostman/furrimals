var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var database = require("../models/database.js");

// Create all our routes and set up logic within those routes where required.
router.post("/api/create", function(req, res) {
  database.create(furrimal_user,
    [
    "email"
  ], [
    req.body.email
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.get("/collection/api/:email", function(req, res) {
  var condition = req.params.email;

  database.all(condition, function(result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
