let express = require("express");
let bodyParser = require("body-parser");

let port = 3060;

let app = express();

app.use(express.static(process.cwd() + "./public"));

app.use(bodyParser.urlencoded({ extended: false }));

var expHandlebars = require("express-handlebars");

app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);