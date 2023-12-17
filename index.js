let express = require("express");
let app = express();

app.use((req, res, next) => {
  console.log("I am in first middle ware");
  next();
});

app.use((req, res) => {
  console.log("I am in second middle ware");
  res.set("Content-Type", "text/html");
  res.send("<h1>ji</h1>");
});
app.listen(3000);
