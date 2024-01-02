const express = require("express");
const router = express.Router();

const categoryController = require("../controller/CategoryController");

// /category/medicine
router.get("/medicine/unit/all", categoryController.getUnitAll);
router.put("/medicine/unit/medcreate", categoryController.createUnitMed);
router.get("/medicine/unit/med/:id", categoryController.getUnitByMedId);
router.get("/medicine/unit/med", categoryController.getUnitMed);

router.get("/medicine/search/*", categoryController.getMedicinesName);
router.get("/medicine", categoryController.getAllMedicine);
router.post("/medicine/add", categoryController.createMedicine);
router.delete("/medicine/delete/:id", categoryController.deleteMedicine);

router.put(
  "/medicine/update/softdelete/",
  categoryController.softDeleteMedicine
);
router.put("/medicine/update/:id", categoryController.updateMedicine);

router.put("/medicine/update/restore/:id", categoryController.restoreMed);

// /category/supplier
router.get("/supplier/current", categoryController.getCurrSup);
router.get("/supplier/deleted", categoryController.getDeletedSup);
router.get("/supplier", categoryController.getAllSupplier);

router.post("/supplier/add", categoryController.createSupplier);

router.put("/supplier/update/:id", categoryController.updateSupplier);
router.put("/supplier/softdelete/:id", categoryController.softDelSupplier);
router.put("/supplier/restore/:id", categoryController.restoreSupplier);

router.delete("/supplier/harddelete/:id", categoryController.hardDelSupplier);

module.exports = router;
