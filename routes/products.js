const express    = require("express");
const products = express.Router();
const Product = require("../models/product.js");
const cors = require("cors");
const {getList} = require('../controllers/products.js')
products.use(cors());

products.post("/products", (req,res)=> {
   
    Product.create(req.body).then((product) => {
        res.json(product + ' created product')
    }).catch((err)=>{
        res.send("error: " + err)
    })
})

products.get("/list/all", (req, res) => {
        Product.find().then((err, products) => {
                if (err) {
                    return res.status(400).json({
                        error: "product not found"
                    });
                }
                res.json(products);
            })
        });
module.exports = products;