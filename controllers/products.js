// const Product = require("../models/product.js")

// exports.getList = (req, res) => {
//     Product
//         .find()
//         .then((err, products) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: "product not found"
//                 });
//             }
//             res.json(products);
//         });
// };