const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

//TODO import model here.

router.get("/scraper", async (req,res) => {
    console.log("route hit.");
});


router.get("/", async (req,res) => {
    res.render("index");
});



module.exports = router;