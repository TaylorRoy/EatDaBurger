var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        hots: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"
    });
}

connection.connect(function (error, result) {
    if (error) throw error;
    console.log("connected as ID:" + connection.threadId);
})

module.exports = connection;