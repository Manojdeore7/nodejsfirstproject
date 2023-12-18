let express = require("express");
let app = express();
let routesHome = require("./Routes/Home");
let routesAdmin = require("./Routes/Admin");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routesHome);
app.use(routesAdmin);
app.listen(7000);
