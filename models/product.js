const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const data = {
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type:String
    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number,
        default: 1
    },
    photoUrl: {
        type: String,
    }
}
const productSchemas = new Schema(data);
module.exports = Product = new mongoose.model("Product",productSchemas);

