const express = require("express");
const router = express.Router();

const sellController = require("../controller/SellController");

// /sell/list
router.get("/sell", sellController.getAllInvoiceSale);
router.delete("/sell/delete/:id", sellController.deleteInvoice);

// /sell/createinvoice

module.exports = router;
