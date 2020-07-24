const express = require ('express');
const carts = express.Router();
const Cart = require('../models/cart.js')
const cors = require("cors");
carts.use(cors())



app.get('/cart', function(req, res) {
    Cart.find((err, post) => {
        if(err) {console.error(err)}
        res.json(post)
    })
})

app.delete('/cart', function(req, res) {
    Cart.findOneAndRemove({}, function(err, quote) {
        if(err) {cconsole.error(err)}
        res.end()
    })
})

module.exports = carts