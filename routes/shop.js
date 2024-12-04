const express = require("express");
const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/delete-product/:productId", shopControllers.deleteProduct)

router.get("/edit-product/:productId", shopControllers.editProduct)

router.get("/product/:productId", shopControllers.getProduct)

router.post("/add-product", shopControllers.postAddProduct)

router.get("/add-product", shopControllers.getAddProduct)

router.get("/", shopControllers.getProducts)

module.exports = router