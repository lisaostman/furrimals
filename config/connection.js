// Set up MySQL connection.
var mysql = require("mysql");

var db_config = {
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "bb8a32c1a2206b",
  password: "0cf25a00",
  database: "heroku_0230244429e8955"
}

var connection = mysql.createPool(db_config);

connection.getConnection(function(err){
    if(err) {
        console.log("\n\t *** Cannot establish a connection with the database. ***");

        connection = reconnect(connection);
    }else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});

function reconnect(connection){
    console.log("\n New connection tentative...");

    connection = mysql.createPool(db_config);

    connection.getConnection(function(err){
        if(err) {

            setTimeout(reconnect(connection), 2000);
        }else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}

connection.on('error', function(err) {

    if(err.code === "PROTOCOL_CONNECTION_LOST"){    
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
    }

    else{
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

});
// Export connection for our ORM to use.
module.exports = connection;
