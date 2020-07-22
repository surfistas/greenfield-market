const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = {
    name : {
        type: String,
        trim : true,
        required: true,
        maxlength: 32,
        unique: true
    }
}

const categoriesSchemas = new Schema (data);
module.exports = Category = new mongoose.model("Category",categoriesSchemas);

