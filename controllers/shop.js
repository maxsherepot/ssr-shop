const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render("shop", {
                pageTitle: "Main page",
                path: "/",
                products
            })
        })
        .catch(() => {
            throw new Error()
        })
}

exports.getAddProduct = (req, res, next) => {
    res.render("addProduct", {
        pageTitle: "Add product",
        path: "add-product"
    })
}

exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;
    const product = new Product({ title, imageUrl, price, description })

    product.save()
        .then(() => res.redirect("/"))
        .catch(() => {
            throw new Error()
        })
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId

    Product.findById(productId)
        .then(product => {
            if (!product) {
                throw new Error()
            }
            res.render("productDetails", {
                pageTitle: "Details",
                path: "",
                product
            })
        })
        .catch(() => {
            throw new Error()
        })
}