const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const articleArray = [];

//TODO import model here.

router.get("/scraper", function (req,res) {
   
    axios.get("https://www.chron.com/news/houston-texas/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    const $ = cheerio.load(response.data);
    $("a").each(function(i, element){
       let result = $(this).children().text();
       if(result){
        console.log(result);
       }
    });
});
   


});

router.get("/", async (req,res) => {
    await res.render("index");
});



module.exports = router;