const express = require("express");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input  name='title'/><button type='submit'>click</button></form>"
  );
});
routes.get("/login", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST' ><input  name='username'/><button type='submit'>Login</button></form>"
  );
});

routes.post("/product", (req, res) => {
  res.send(
    `<script>localStorage.setItem("username", "${req.body.username}");</script>`
  );
});

module.exports = routes;
