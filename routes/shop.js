const express = require("express");
const shopControllers = require("../controllers/shop");
const isAuth = require("../utils/isAuth");

const router = express.Router();

router.get("/delete-product/:productId", isAuth, shopControllers.deleteProduct)

router.post("/edit-product/:productId", isAuth, shopControllers.postEditProduct)

router.get("/edit-product/:productId", isAuth, shopControllers.getEditProduct)

router.get("/product/:productId", shopControllers.getProduct)

router.post("/add-product", isAuth, shopControllers.postAddProduct)

router.get("/add-product", isAuth, shopControllers.getAddProduct)

router.get("/", shopControllers.getProducts)

module.exports = router