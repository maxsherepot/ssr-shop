const Product = require("../models/product")

exports.postLogout = (req, res, next) => {

}

exports.postSignUp = (req, res, next) => {
    const { email, password, confirmation } = req.body;

    console.log(email, password, confirmation)
    // res.render("login", {
    //     pageTitle: "Login",
    //     path: "login"
    // })
}

exports.getSignUp = (req, res, next) => {
    res.render("auth/signUp", {
        pageTitle: "Sign Up",
        path: "sign-up"
    })
}

exports.postLogin = (req, res, next) => {

}

exports.getLogin = (req, res, next) => {
    res.render("auth/login", {
        pageTitle: "Login",
        path: "login"
    })
}

