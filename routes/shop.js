const express = require("express");
const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/add-product", shopControllers.getAddProduct)

router.get("/", shopControllers.getProducts)

module.exports = router