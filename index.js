let express = require("express");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res, next) => {
  res.send(
    "<form action='/login' method='POST' ><input  name='username'/><button type='submit'>Login</button></form>"
  );
});

app.post("/login", (req, res, next) => {
  res.send(
    `<script>localStorage.setItem("username", "${req.body.username}");</script>`
  );
});
app.get("/", (req, res) => {
  let data = fs.readFileSync("data.txt").toString();

  res.write(
    `<body><script>let user=localStorage.getItem("username");document.write(user);
    </script>
    <h1>Welcome to Chat Boat!!!</h1>
    <h1>${data}</h1>
    <form action='/' method='POST' ><input  name='message'/>
    <button type='submit'>Send Message</button></form>
    </body>`
  );
  res.send();
});
app.post("/", (req, res) => {
  fs.appendFileSync("data.txt", `${req.body.message}`);
  res.redirect("/");
});

app.listen(7000);
