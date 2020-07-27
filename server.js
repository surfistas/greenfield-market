var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;
const path = require("path");
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("client/build"));
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected");
});
//users
var Users = require("./routes/Users.js");
app.use("/users", Users);
//products
var Product = require("./routes/products.js");
app.use("/", Product);
//categories
var Category = require("./routes/categories.js");
app.use("/", Category);
//cart
var Cart = require("./routes/carts.js");
app.use("/", Cart);

//listen
app.get("*", (req, res) => {
  let pathToJoin = path.join(__dirname, "client/build/index.html");
  res.sendFile(pathToJoin);
});
app.listen(port, () => {
  console.log("Server is runing on port: http://localhost:" + port);
});
