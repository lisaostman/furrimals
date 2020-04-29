// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var database = {
  all: function(userEmail, cb) {
    orm.caughtCreatures(userEmail, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  shopCode: function(code, cb) {
    orm.shopCode(code, function(res) {
      cb(res);
    });
  },
  findFriend: function(id, cb) {
    orm.findFriend(id, function(res) {
      cb(res);
    });
  },
  userFinder: function(user, cb) {
    orm.userFinder(user, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete(table, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = database;
