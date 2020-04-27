// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  caughtCreatures: function(userEmail, cb) {
    var queryString = "SELECT * FROM furrimal_caught";
    queryString += " INNER JOIN furrimal_animal ON furrimal_animal.animalId=furrimal_caught.animalId";
    queryString += " INNER JOIN furrimal_user ON furrimal_caught.userId = furrimal_user.userId";
    queryString += " WHERE furrimal_user.email = ";
    queryString += "'";
    queryString += userEmail.toString();
    queryString += "'";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  findFriend: function(user1, user2, cb) {
    var queryString = "SELECT * FROM furrimal_friends";
    queryString += "INNER JOIN furrimal_user ON furrimal_friends.secondFriend = furrimal_user.userId";
    queryString += "WHERE furrimal_friends.firstUser = ";
    queryString += user1;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getShopInfo: function(user1, user2, cb) {
    var queryString = "SELECT * FROM furrimal_friends";
    queryString += "INNER JOIN furrimal_user ON furrimal_friends.secondFriend = furrimal_user.userId";
    queryString += "WHERE furrimal_friends.firstUser = ";
    queryString += user1;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  shopCode: function (code, cb) {
    var queryString = "SELECT * FROM furrimal_db.furrimal_shops"
    queryString += " WHERE code = "
    queryString += "'"
    queryString += code
    queryString += "'"
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  userFinder: function (user, cb) {
    var queryString = "SELECT * FROM furrimal_db.furrimal_user"
    queryString += " WHERE email = "
    queryString += "'"
    queryString += user
    queryString += "'"
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // for posting the user when they are first created, creating new friends, creating new caught creature
   create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
