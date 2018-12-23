const express = require("express");
const app = express();
const path = require('path');
require("dotenv").config();

const PORT = process.env.PORT || 8080;

//const db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//mongoose.connect("mongodb://localhost:27017/scrappynews", { useNewUrlParser: true});

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Default routeControl is controller.
const routeControl = require("./controllers/scrappycontroller.js");
app.use(routeControl);

//public folder
app.use(express.static(path.join(__dirname,"./public")));

//start server.
app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});