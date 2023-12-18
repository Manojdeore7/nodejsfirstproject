const express = require("express");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input  name='title'/><button type='submit'>click</button></form>"
  );
});

routes.post("/product", (req, res) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = routes;
