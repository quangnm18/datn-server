const express = require("express");
const router = express.Router();

const whController = require("../controller/WarehouseController");

// /warehouse/import
router.put("/import/list/restore/:id", whController.restoreImportCp);
router.put("/import/list/softdelete/:id", whController.softDeleteImportCp);
router.post("/import/list/create", whController.createImportCp);
router.get("/import/list", whController.getAllListImport);

// /warehouse/import/details
router.post("/import/details/create", whController.createImportDetails);
router.get("/import/details/:importid", whController.getImportDetailByIptId);
router.get("/import/details", whController.getAllImportDetail);

module.exports = router;
