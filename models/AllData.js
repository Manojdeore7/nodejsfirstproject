const fs = require("fs");
const path = require("path");
exports.getData = () => {
  let path1 = path.join(__dirname, "data.json");
  let data = fs.readFileSync(path1) || [];
  let products = JSON.parse(data);

  return products;
};

exports.addData = (p) => {
  let path1 = path.join(__dirname, "data.json");
  let data = fs.readFileSync(path1) || [];
  let products = JSON.parse(data);
  products.push(p);
  data = JSON.stringify(products);

  fs.writeFileSync(path1, data);
};
