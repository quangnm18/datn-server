const express = require("express");
const router = express.Router();

const categoryController = require("../controller/CategoryController");

// /category/medicine/group
router.get("/medicine/group", categoryController.getGroupMed);
router.post("/medicine/group/add", categoryController.addGroupMed);
router.delete(
  "/medicine/group/harddelete/:id",
  categoryController.hardDeleteGr
);
router.put("/medicine/group/update/:id", categoryController.updateGroupMed);

router.put("/medicine/group/restore/:id", categoryController.resGroupMed);
router.put(
  "/medicine/group/softdelete/:id",
  categoryController.softDeleteGrMed
);

// / category/medicine/unit
// router.get("/medicine/unit/all", categoryController.getUnitAll);
router.post("/medicine/unit/add", categoryController.addUnitMed);
router.put("/medicine/unit/update/:id", categoryController.updateUnitMed);
router.put("/medicine/unit/restore/:id", categoryController.resUnitMed);
router.put(
  "/medicine/unit/softdelete/:id",
  categoryController.softDeleteUnitMed
);
router.delete(
  "/medicine/unit/harddelete/:id",
  categoryController.hardDelUnitMed
);

router.get("/medicine/unit", categoryController.getUnitMed);

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
