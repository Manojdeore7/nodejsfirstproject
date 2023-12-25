let db = require("../util/database");
exports.getData = () => {
  let products = db
    .execute("SELECT * FROM products")
    .then((result) => {
      return result[0];
    })
    .catch((err) => console.log(err));
  return products;
};

exports.addData = (p) => {
  let { title, id } = p;
  db.execute(
    `INSERT INTO products (title,descriptio,id,img) VALUES ('${title}',"fourth product",'${id}','#');`
  )
    .then((e) => {
      console.log("product is added");
    })
    .catch((err) => console.log(err));
  return true;
};
