var express = require("express");

var router = express.Router();

var database = require("../models/database.js");

router.post("/api/create", function(req, res) {
  database.create("furrimal_user",
    [
    "email"
  ], [
    req.body.email
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.post("/api/caught", function(req, res) {
  database.create("furrimal_caught",
    [
    "userId",
    "animalId"
  ], [
    req.body.userId,
    req.body.animalId
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.post("/api/addfriend", function(req, res) {
  database.create("furrimal_friends",
    [
    "firstFriend",
    "secondFriend"
  ], [
    req.body.firstFriend,
    req.body.secondFriend
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.get("/collection/api", function(req, res) {
  let condition = req.query.email;
  console.log("reached router back!")
  database.all(condition, function(result) {
    res.json(result);
  });
});

router.get("/api/code", function(req, res) {
  let condition = req.query.code;
  console.log("reached router back!")
  database.shopCode(condition, function(result) {
    res.json(result);
  });
});

 router.get("/api/seconduser", function(req, res) {
   let condition = req.query.seconduser;
   console.log("reached router back!")
   database.findFriend(condition, function(result) {
     res.json(result);
   });
 });

router.get("/api/email", function(req, res) {
  let condition = req.query.email;
  console.log("reached router back!")
  database.userFinder(condition, function(result) {
    res.json(result);
  });
});

module.exports = router;
