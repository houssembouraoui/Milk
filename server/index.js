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

app.get("/admin", (req, res) => {
  res.send({
    username: "noura",
    password: "f3e5fg84w3b21wh543g5n13f3h7j3gdcwxf3h57f",
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

exports.logIn = (req, res) => {
  let result;
  //that's the username and password the the user typed
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  students
    .findUnique({
      where: { email: req.body.email },
    })
    .then(async (data) => {
      console.log("yooo", data);

      if (!data) {
        return res.sendStatus(404);
      }

      //here we will compare the typed password against the one saved in the DATABASe
      const validPassword = await bcrypt.compare(user.password, data.password);

      if (validPassword) {
        const accessToken = generateAccessToken(user);
        //this is how we get our accessToken when we log in
        // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        //each time we get a token we need to set a refresh token too
        // refreshTokens.push(refreshToken);
        // console.log(refreshTokens);

        console.log("heres the token", accessToken);
        console.log("heres the email", data.email);
        students
          .update({
            where: { email: data.email },
            data: { token: accessToken },
          })
          .then((response) => {
            result = response;
            console.log(result, "ressssssss");
            res.json({
              // accessToken: accessToken,
              result: result,

              // refreshToken: refreshToken
            });
          })
          .catch((error) => {
            console.log(error);
          });

        console.log("the password matches");
      } else if (!validPassword) {
        console.log("the password does not match");
        res.status(201).send({
          message: "the password is incorrect",
        });
      }
    })
    .catch(async (err) => {
      console.log(err);
      await res.status(500).send({
        message: "Error finding the sudents",
      });
    });
};
