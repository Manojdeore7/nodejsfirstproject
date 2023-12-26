const path = require("path");

const Product = require("../models/AllData");

exports.addProductController = (req, res, next) => {
  res.render("add-product");
};
exports.loginController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "View", "login.html"));
};
exports.productController = async (req, res) => {
  Product.create({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    image: req.body.img,
    description: req.body.description,
  })
    .then((result) => {})
    .catch((err) => {});

  setTimeout(() => {
    res.redirect("/");
  }, 2000);
};
exports.getProduct = async (req, res) => {
  id = req.params.productId;
  Product.findByPk(id)
    .then((product) => {
      console.log(product.dataValues);
      res.render("detailPage", product.dataValues);
    })
    .catch((err = {}));
};

// add data==>Product.create

// get whole data==>Product.findAll

// get only one data===>Product.findByPk

// update single data===> Product.save()

// delete single data===> Product.destroy()
