let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input  name='title'/><button type='submit'>click</button></form>"
  );
});

app.use("/product", (req, res) => {
  console.log(req.body.title);
  res.redirect("/");
});
app.use("/", (req, res) => {
  res.send("nothing");
});
app.listen(7000);
