let express = require("express");
let adminPage = require("./Routes/Admin");
let path = require("path");
let HomePage = require("./Routes/Home");
let app = express();
let fs = require("fs");
app.set("view engine", "ejs");
app.set("views", "View");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "View"))); //for make working of css
app.use(adminPage);
app.use(HomePage);
app.use("/", (req, res) => {
  res.status(404).render("404", { title: "page not found" });
});
app.listen(1000);
