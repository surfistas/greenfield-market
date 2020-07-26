const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productName : String,
    productPrice : Number, 
    quantity : Number,
    total : Number
  });

  const Cart = mongoose.model('Cart', CartSchema);

Cart.createCollection()

module.exports = Cart;