const express = require("express");
const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/delete-product/:productId", shopControllers.deleteProduct)

router.post("/edit-product/:productId", shopControllers.postEditProduct)

router.get("/edit-product/:productId", shopControllers.getEditProduct)

router.get("/product/:productId", shopControllers.getProduct)

router.post("/add-product", shopControllers.postAddProduct)

router.get("/add-product", shopControllers.getAddProduct)

router.get("/", shopControllers.getProducts)

module.exports = router