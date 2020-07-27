const express = require("express");
const mongoose = require("mongoose");
const products = express.Router();
const Product = require("../models/product.js");
const Cart = require("../models/cart.js");
const cors = require("cors");
const { getList } = require("../controllers/products.js");
products.use(cors());

products.post("/products", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product + " created product");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
products.get("/getProduct", (req, res) => {
  Product.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
products.post("/getProductsWithCategory", (req, res) => {
  Product.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
products.post("/cart", (req, res) => {
  console.log("product", req.body);
  Cart.create({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    quantity: req.body.quantity,
  })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = products;
