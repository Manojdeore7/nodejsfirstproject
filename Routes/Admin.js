const express = require("express");
const routes = express.Router();
const path = require("path");
routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "HtmlFiles", "add-product.html"));
});
routes.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "HtmlFiles", "login.html"));
});

routes.post("/product", (req, res) => {
  console.log(`${req.body.username} is login!!!`);
  res.redirect("/");
});

module.exports = routes;
