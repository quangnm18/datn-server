const express = require("express");
const router = express.Router();

const sellController = require("../controller/SellController");

// /sell/
router.post("/ivdetail/create", sellController.createSaleDetail);
router.post("/ivcreate", sellController.createInvoice);
router.get("/ivlist", sellController.getListIv);
router.get("/ivdetailcurr/*", sellController.getSaleDetailByIvCode);
router.get("/ivdetailcurr", sellController.getAllSaleDetailCurr);

router.get("/ivdetail/synthetic", sellController.getSyntheticSaleDetail);

router.put("/ivlist/softdelete/:id", sellController.softDelSaleIv);

// /sell/createinvoice

module.exports = router;
