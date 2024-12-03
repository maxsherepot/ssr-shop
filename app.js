const express = require("express");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes)


app.listen(8000)