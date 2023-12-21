const express = require("express");
const routes = express.Router();

const {
  loginController,
  addProductController,
  productController,
  getProduct,
} = require("../controllers/adminController");

routes.get("/add-product", addProductController);
routes.get("/login", loginController);
routes.post("/product", productController);
routes.get("/Details/:productId", getProduct);
module.exports = routes;
