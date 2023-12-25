const path = require("path");
const { addData } = require("../models/AllData");
const { getData } = require("../models/AllData");
exports.addProductController = (req, res, next) => {
  res.render("add-product");
};
exports.loginController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "View", "login.html"));
};
exports.productController = async (req, res) => {
  // let value=
  let va = addData({
    title: req.body.product,
    id: Math.random() * 100,
  });

  setTimeout(() => {
    res.redirect("/");
  }, 2000);
};
exports.getProduct = async (req, res) => {
  id = req.params.productId;
  let data = await getData();

  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      var obj = data[i];
    }
  }

  res.render("detailPage", obj);
};
