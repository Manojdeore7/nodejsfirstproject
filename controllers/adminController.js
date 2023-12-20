const path = require("path");
const { addData } = require("../models/AllData");
exports.addProductController = (req, res, next) => {
  res.render("add-product");
};
exports.loginController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "View", "login.html"));
};
exports.productController = (req, res) => {
  addData({ productname: req.body.product });

  res.redirect("/");
};
