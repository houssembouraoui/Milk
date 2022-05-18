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

let addAdmin = () => {
  return db
    .queryAsync(
      `INSERT INTO admin (firstname, lastname, email, password) VALUES ('noura', 'noura', 'noura@gmail.com', 'azerty')`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

let createUser = (req, res) => {
  console.log(req.body);
  return db
    .queryAsync(
      `INSERT INTO ${req.body.role} (firstname, lastname, email, image, phonenumber, adress) VALUES ('${req.body.name}', '${req.body.last}', '${req.body.email}', '${req.body.photo}', ${req.body.phone}, '${req.body.adress}')`
    )
    .then((res) => console.log(res, "user created"))
    .catch((err) => console.log(err));
};

module.exports = { connection, adminLogIn, createUser, addAdmin };
