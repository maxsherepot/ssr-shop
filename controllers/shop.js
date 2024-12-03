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