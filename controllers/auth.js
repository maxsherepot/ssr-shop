const User = require("../models/user")

exports.postLogout = (req, res, next) => {

}

exports.postSignUp = (req, res, next) => {
    const { email, password } = req.body;
    // TODO hash user's password
    const newUser = new User({ email, password })

    // TODO check if user exists
    newUser.save()
        .then(() => res.redirect("/"))
        .catch(() => {
            throw new Error()
        })
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

