const { Promise } = require("bluebird");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "milk",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Conectado a MySQL server.");
});

let adminLogIn = () => {
  return db
    .queryAsync(`SELECT * FROM admin`)
    .then((response) => {
      return response[0];
    })
    .catch((error) => console.log(error));
};

module.exports = { connection, adminLogIn };
