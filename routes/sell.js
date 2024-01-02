const express = require("express");
const router = express.Router();

const sellController = require("../controller/SellController");

// /sell/list
router.get("/list", sellController.getAllInvoiceSale);
router.delete("/list/delete/:id", sellController.deleteInvoice);

// /sell/createinvoice
router.get("/create/medicineunit/:id", sellController.getListUnitByID);

module.exports = router;
