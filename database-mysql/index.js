const { Promise } = require("bluebird");
const { append } = require("express/lib/response");
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

let createUser = (req, pass) => {
  // console.log(req.body);
  return db
    .queryAsync(
      `INSERT INTO ${req.body.role} (firstname, lastname, email, image, phonenumber, adress, password) VALUES ('${req.body.name}', '${req.body.last}', '${req.body.email}', '${req.body.photo}', ${req.body.phone}, '${req.body.adress}', '${pass}')`
    )
    .then((res) => console.log(res, "user created"))
    .catch((err) => console.log(err));
};

let userLogIn = (req, res) => {
  console.log(req.query, "request here");
  return db
    .queryAsync(
      `SELECT * FROM ${req.query.role} WHERE email = '${req.query.email}'`
    )
    .then((response) => {
      console.log(response[0], "response from the database");
      return response[0];
    });
};

module.exports = { connection, adminLogIn, createUser, addAdmin, userLogIn };
