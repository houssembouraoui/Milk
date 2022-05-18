const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
var connection = require("../database-mysql/index.js");
const { adminLogIn } = require("../database-mysql/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/admin/login", (request, response) => {
  adminLogIn().then((result) => {
    let res = Object.values(JSON.parse(JSON.stringify(result)));

    response.send(res[0]);
  });
});

app.post("/new/user", (req, res) => {
  connection
    .createUser(req, res)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
