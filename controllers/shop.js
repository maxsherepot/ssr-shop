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

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId

    Product.findByIdAndDelete(productId)
        .then(() => res.redirect("/"))
        .catch(() => {
            throw new Error()
        })
}

exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId

    Product.findById(productId)
        .then(product => {
            if (!product) {
                throw new Error()
            }
            res.render("editProduct", {
                pageTitle: "Edit Product",
                path: "",
                product
            })
        })
        .catch(() => {
            throw new Error()
        })
}

exports.postEditProduct = (req, res, next) => {
    const productId = req.params.productId
    const { title, imageUrl, price, description } = req.body;

    Product.findById(productId)
        .then(product => {
            if (!product) {
                throw new Error()
            }
            product.title = title;
            product.imageUrl = imageUrl;
            product.price = price;
            product.description = description;

            product.save()
                .then(() => res.redirect("/"))
                .catch(() => {
                    throw new Error()
                })
        })
        .catch(() => {
            throw new Error()
        })
}