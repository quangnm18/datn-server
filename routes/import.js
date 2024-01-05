const express = require("express");
const router = express.Router();

const ImportIvController = require("../controller/ImportIvController");

//import
// /importlist/

router.post("/create", ImportIvController.createInvoice);
router.post("/createdetail", ImportIvController.createInvoiceDetail);

router.get("/allcurrent", ImportIvController.getListInvoiceCurrent);
router.get("/all", ImportIvController.getListInvoice);
router.get("/alldetail/*", ImportIvController.getDetailsByCode);
router.get("/alldetail", ImportIvController.getAllDetail);

router.put("/softdelete/:id", ImportIvController.softDeleteInvoice);

module.exports = router;
