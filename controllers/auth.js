const Product = require("../models/product")

exports.postLogout = (req, res, next) => {
    // res.render("login", {
    //     pageTitle: "Login",
    //     path: "login"
    // })
}

exports.postSignUp = (req, res, next) => {
    // res.render("login", {
    //     pageTitle: "Login",
    //     path: "login"
    // })
}

exports.getSignUp = (req, res, next) => {
    // res.render("login", {
    //     pageTitle: "Login",
    //     path: "login"
    // })
}

exports.postLogin = (req, res, next) => {
    // res.render("login", {
    //     pageTitle: "Login",
    //     path: "login"
    // })
}

exports.getLogin = (req, res, next) => {
    res.render("login", {
        pageTitle: "Login",
        path: "login"
    })
}

