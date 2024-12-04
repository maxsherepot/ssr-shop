const User = require("../models/user")
const bcryptjs = require("bcryptjs")

exports.postLogout = (req, res, next) => {

}

exports.postSignUp = (req, res, next) => {
    const { email, password } = req.body;
    // TODO check if user exists

    bcryptjs
        .hash(password, 12)
        .then(hashedPassword => {
            const newUser = new User({ email, password: hashedPassword })

            newUser.save()
                .then(() => res.redirect("/login"))
                .catch(() => {
                    throw new Error()
                })
        })
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
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            bcryptjs.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        return res.redirect("/")
                    }
                    return res.redirect("/login")
                })
        })
        .catch(() => {
            throw new Error()
        })
}

exports.getLogin = (req, res, next) => {
    res.render("auth/login", {
        pageTitle: "Login",
        path: "login"
    })
}

