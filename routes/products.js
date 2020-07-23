const express    = require("express");
const mongoose = require("mongoose")
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


products.get("/getProduct",(req,res) => {
    Product.find({},(err,result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

products.post('/getProductsWithCategory', (req, res) => {
    Product.find(req.body,(err,result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

// products.get("/products", function(req, res) {
//     console.log("hello")
//         Product.find({}, function(err, products){
//                 if (err) {
//                     return res.status(400).json({
//                         error: "product not found"
//                     });
//                 }
//                 res.json(products);
//             })
//         });
module.exports = products;
