const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productController");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//@desc   GET all products from db
//@route  GET api/products
//@access Public
router.get("/", getProducts);

//@desc   GET a product by id from db
//@route  GET api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;