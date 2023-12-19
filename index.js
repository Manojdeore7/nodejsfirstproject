let express = require("express");
let adminPage = require("./Routes/Admin");
let HomePage = require("./Routes/Home");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminPage);
app.use(HomePage);
app.use("/", (req, res) => {
  res.status(404).send("Page is not Found");
});
app.listen(7000);
