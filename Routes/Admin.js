const express = require("express");
const routes = express.Router();

const {
  loginController,
  addProductController,
  productController,
} = require("../controllers/adminController");

routes.get("/add-product", addProductController);
routes.get("/login", loginController);
routes.post("/product", productController);

module.exports = routes;
