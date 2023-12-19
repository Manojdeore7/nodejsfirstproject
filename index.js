let express = require("express");
let adminPage = require("./Routes/Admin");
let path = require("path");
let HomePage = require("./Routes/Home");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "HtmlFiles"))); //for make working of css
app.use(adminPage);
app.use(HomePage);
app.use("/", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./HtmlFiles/404.html"));
});
app.listen(7000);
