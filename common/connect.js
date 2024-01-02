var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "18082000",
  database: "databasemedicine",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = connection;
