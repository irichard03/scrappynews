const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const articleArray = [];

const db = require("../models");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/scrappynews";
mongoose.connect(MONGODB_URI);

router.get("/scraper", function (req,res) {
   
    axios.get("https://www.chron.com/news/houston-texas/").then(function(response) {
    //get news
    const $ = cheerio.load(response.data);
        $("a").each(function(i, element){
            let result = {};                                    //object to store what I want
            let trash = {};                                     //object to store what I don't
            trash.schrodingerHeadline = $(this).text();         //some headlines are note for articles
            trash.chronURL = "https://www.chron.com";           //links are routes, not full urls
            trash.schrodingerLink = $(this).attr("href");       //some links are not articles

            if(trash.schrodingerHeadline && trash.schrodingerLink) {        //eliminate blank lines
                let subString = "/article/";                                
                if(trash.schrodingerLink.includes(subString)){              //filter only articles
                    result.headline = trash.schrodingerHeadline.trim();     //trim new lines and spaces
                    result.link = trash.chronURL + trash.schrodingerLink;   //build valid url using chron.com's root and route.
                    if(articleArray.length <= 20) {                         
                        articleArray.push(result);                          //only load first 20 articles
                    }
                }
            }
        }); 
    }); //end axios.get

    //write to the database.
    for(let i = 0; i < articleArray.length; i++){
        db.article.create(articleArray[i]).then(function(data){
        }).catch(function(error) {
            console.log(error);
        });
    }

}); //end router.get

router.post("/api/addnote/:id", function(req,res) {
    db.note.create(req.body).then(function(data) {
       console.log(req.params.id);
        return db.article.findOneAndUpdate({ _id: req.params.id }, { note: data._id }, {new: true});
    }).then(function(data){
        res.json(data);
    }).catch(function(err) {
        res.json(err);
    });
});


router.get("/", function(req,res) {
    db.article.find({}).then(function(data) {
        res.render("index", {article: data});
    }).catch(function(error){
        res.json(error);
    }); 
});

module.exports = router;