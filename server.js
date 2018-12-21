const express = require("express");
const app = express();
const Port = process.env.PORT;

const axios = require("axios");
const cheerio = require("cheerio");
//const db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
//mongoose.connect("mongodb://localhost:27017/scrappynews", { useNewUrlParser: true});

//handlebars
app.engine("handlebars", exhbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Default Route
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(Port, ()=> {
    console.log("Listening...");
});