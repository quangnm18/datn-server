const express = require("express");
const router = express.Router();

const categoryController = require("../controller/CategoryController");

router.post("/medicine/add", categoryController.createMedicine);

router.get("/medicine", categoryController.getAllMedicine);

router.get("/supplier", categoryController.getAllSupplier);

module.exports = router;
