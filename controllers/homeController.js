const { getData } = require("../models/AllData");
const Product = require("../models/AllData");
const homeController = async (req, res) => {
  Product.findAll().then((products) => {
    res.render("index", { products: products });
  });
};
module.exports = homeController;
