const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    products : {
        imageUrl : String,
        name : String,
        price : Number,
        amount : Number,
    },
  });

  const Cart = mongoose.model('Cart', CartSchema);

Cart.createCollection()

module.exports = Cart;