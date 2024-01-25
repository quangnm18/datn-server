const express = require("express");
const router = express.Router();
const { authPage } = require("../middleWare/basicAuth");

const homeController = require("../controller/HomeController");

router.get("/getallcountrp", homeController.getAllCountRp);
router.get("/getcountsup", homeController.getCountSup);
router.get("/getmeddue", homeController.getMedDue);

module.exports = router;
