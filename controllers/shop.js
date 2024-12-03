const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    res.render("shop", {
        pageTitle: "Main page",
        path: "/"
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
        .catch(err => {
            console.log(err)
        })
}