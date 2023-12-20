const express = require("express");
const path = require("path");
const routes = express.Router();
const homeController = require("../controllers/homeController");
routes.get("/", homeController);

module.exports = routes;
