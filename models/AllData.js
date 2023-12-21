const product = [
  {
    productname: "product 1",
    id: 1,
  },
];

exports.getData = () => {
  return product;
};

exports.addData = (p) => {
  product.push(p);
};
