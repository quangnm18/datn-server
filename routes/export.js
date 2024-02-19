const express = require("express");
const router = express.Router();

const ExportWhController = require("../controller/ExportWhController");
// /exportwh

router.get("/getmaxid", ExportWhController.getMaxIdIv);

router.get("/detailcode", ExportWhController.getExDetailsByCode);
router.get("/listexport", ExportWhController.getListIv);

router.post("/createcp", ExportWhController.createInvoice);
router.post("/createdetail", ExportWhController.createExportDetail);

router.put("/acceptcp", ExportWhController.acceptInvoice);
router.put("/rejectcp", ExportWhController.rejectInvoice);

router.put("/softdeleteiv", ExportWhController.softDelInvoice);
router.put("/restoreiv", ExportWhController.resInvoice);

module.exports = router;
