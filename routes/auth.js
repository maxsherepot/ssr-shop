const express = require("express");
const authControllers = require("../controllers/auth");

const router = express.Router();

router.get("/logout", authControllers.postLogout)

router.post("/sign-up", authControllers.postSignUp)

router.get("/sign-up", authControllers.getSignUp)

router.post("/login", authControllers.postLogin)

router.get("/login", authControllers.getLogin)

module.exports = router