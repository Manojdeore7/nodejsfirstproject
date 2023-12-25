const { getData } = require("../models/AllData");

const homeController = async (req, res) => {
  let products = await getData();

  res.render("index", { products: products });
};
module.exports = homeController;
