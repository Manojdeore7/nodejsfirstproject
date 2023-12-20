const path = require("path");
const { getData } = require("../models/AllData");

const homeController = (req, res) => {
  let products = getData();
  res.render("index", { products: products });
};
module.exports = homeController;
