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

module.exports = router;
