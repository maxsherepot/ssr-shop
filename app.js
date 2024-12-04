const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorsController = require("./controllers/errors");

const MONGODB_URI = "mongodb+srv://dominator5530:dominator5530@node-mongo-cluster.kze0g.mongodb.net/"


const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes)
app.use(authRoutes)
app.use(errorsController.get500)
app.use(errorsController.get404)

app.use((error, req, res, next) => {
    res.redirect('/500');
    // res.status(500).render('500', {
    //     pageTitle: 'Error!',
    //     path: '/500',
    //     isAuthenticated: req.session.isLoggedIn
    // });
});

mongoose.connect(MONGODB_URI)
    .then(() => app.listen(8000))
    .catch(err => console.log(err))
