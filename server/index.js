const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const crypto = require("crypto");

var connection = require("../database-mysql/index.js");
const { adminLogIn } = require("../database-mysql/index.js");

const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deliceproject6@gmail.com",
    pass: "qifnirqlwejafkwz",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/admin/login", (request, response) => {
  adminLogIn().then((result) => {
    let res = Object.values(JSON.parse(JSON.stringify(result)));

    response.send(res[0]);
  });
});

app.get("/user/login", (req, res) => {
  // let recieved = req.query;
  connection.userLogIn(req, res).then((result) => {
    let data = Object.values(JSON.parse(JSON.stringify(result)));
    res.send(data[0]);
    console.log(data[0], "something");
  });

  // connection
  //   .userLogIn(req, res)
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error));
});

app.post("/new/user", (req, res) => {
  let password = crypto.randomBytes(20).toString("hex");
  let details = {
    from: "'delice' deliceproject6@gmail.com",
    to: req.body.email,
    subject: "account created",
    text: `welcome to our app
    your default password is ${password}`,
  };

  console.log(req.body);
  connection
    .createUser(req, password)
    .then((result) => {
      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success);
        }
      });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      } else {
      }
    });
});

app.post("/add/admin", (req, res) => {
  connection
    .addAdmin()
    .then((res) => console.log(res))
    .catch((err) => console.log("el fail"));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
