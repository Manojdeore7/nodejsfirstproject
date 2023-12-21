const path = require("path");
const { addData } = require("../models/AllData");
const { getData } = require("../models/AllData");
exports.addProductController = (req, res, next) => {
  res.render("add-product");
};
exports.loginController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "View", "login.html"));
};
exports.productController = (req, res) => {
  addData({
    productname: req.body.product,
    id: Math.random() * 100,
  });

  res.redirect("/");
};
exports.getProduct = (req, res) => {
  id = req.params.productId;
  let data = getData();

  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      var obj = data[i];
    }
  }

  res.render("detailPage", obj);
};
