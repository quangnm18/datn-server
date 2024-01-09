const express = require("express");
const router = express.Router();

const ImportIvController = require("../controller/ImportIvController");

//import
// /importlist/

router.post("/create", ImportIvController.createInvoice);
router.post("/createdetail", ImportIvController.createInvoiceDetail);

router.get("/alldetail/imported", ImportIvController.getAllDetailsImported);
router.get("/allcurrent", ImportIvController.getListInvoiceCurrent);
router.get("/all", ImportIvController.getListInvoice);
router.get("/alldetail/*", ImportIvController.getDetailsByCode);
router.get("/alldetail", ImportIvController.getAllDetail);

router.put("/softdelete/:id", ImportIvController.softDeleteInvoice);
router.put(
  "/alldetail/imported/softdelete/:id",
  ImportIvController.softDeleteIvDetail
);

router.put("/acceptiv", ImportIvController.acceptInvoice);
router.put("/importdetail", ImportIvController.importedIvDetail); // chap thuan nhap chi tiet don nhap vao kho

module.exports = router;
