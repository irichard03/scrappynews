const express = require("express");
const app = express();
require("dotenv").config();

const Port = process.env.PORT || 3000;

//Get DOM with axios, store DOM with cheerio 
const axios = require("axios");
const cheerio = require("cheerio");
//const db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
//mongoose.connect("mongodb://localhost:27017/scrappynews", { useNewUrlParser: true});

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Default routeControl is controller.
const routeControl = require("./controllers/scrappycontroller.js");
app.use(routeControl);

//start server.
app.listen(Port, ()=> {
    console.log("Listening on " + Port);
});