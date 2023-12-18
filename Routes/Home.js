const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Youur are at Home Page");
});

module.exports = routes;
