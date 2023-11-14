const express = require("express");
const router = express.Router();

const sellController = require("../controller/SellController");

router.get("/list", sellController.list);
router.get("/create", sellController.create);
router.get("/", sellController.sell);

module.exports = router;
