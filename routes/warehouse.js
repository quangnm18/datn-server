const express = require("express");
const router = express.Router();

const whController = require("../controller/WarehouseController");

// /warehouse/import

router.get("/", whController.getInventoryWh);

module.exports = router;
