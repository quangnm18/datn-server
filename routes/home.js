const express = require("express");
const router = express.Router();

const homeController = require("../controller/HomeController");

router.get("/getallcountrp", homeController.getAllCountRp);
router.get("/getmeddue", homeController.getMedDue);

module.exports = router;
