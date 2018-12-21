const express = require("express");
const router = express.Router();

//TODO import model here.

router.get("/", async (req,res) => {
    res.render("index");
});

module.exports = router;