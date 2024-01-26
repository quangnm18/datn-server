const express = require("express");
const router = express.Router();

const authenController = require("../controller/authenController");

//authen
router.post("/login", authenController.loginAccount);

router.get("/logout", authenController.logOutAccount);

module.exports = router;
