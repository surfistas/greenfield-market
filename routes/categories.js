const express    = require("express");
const categories = express.Router();
const Category = require("../models/category.js");
const cors = require("cors");
categories.use(cors());

categories.post("/categories", (req,res)=> {
    Category.create(req.body).then((category) => {
        res.json(category.name + ' created category')
    }).catch((err)=>{
        res.send("error: " + err)
    })
})

module.exports = categories;