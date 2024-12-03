const express = require("express");
const shopControllers = require("../controllers/shop");

const router = express.Router();

router.post("/add-product", shopControllers.postAddProduct)

router.get("/add-product", shopControllers.getAddProduct)

router.get("/", shopControllers.getProducts)

module.exports = router