const express = require ('express');
const carts = express.Router();
const Cart = require('../models/cart.js')
const Product = require('../models/product')
const cors = require("cors");
carts.use(cors())

carts.get('/addTocart', function(req,res) {
    Cart.find({}, function(err, product) {
        if(err) {cconsole.error(err)}
        console.log(product)
        res.send(product)
    })
})


carts.delete('/cart', function(req, res) {
    Cart.findOneAndDelete({}, function(err, product) {
        if(err) {cconsole.error(err)}
        res.end()
    })
})

module.exports = carts