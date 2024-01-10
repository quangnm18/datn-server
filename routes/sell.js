const express = require("express");
const router = express.Router();

const sellController = require("../controller/SellController");

router.get("/getmaxid", sellController.getMaxIdIv);

// /sell/
router.post("/ivdetail/create", sellController.createSaleDetail);
router.post("/ivcreate", sellController.createInvoice);

router.get("/ivlist/*", sellController.getListIv); //co phan trang (ca deleted va khong deleted)
router.get("/allivlist", sellController.getAllListIv); //get tat ca
router.get("/ivdetailcurr/*", sellController.getSaleDetailByIvCode);
router.get("/ivdetailcurr", sellController.getAllSaleDetailCurr);

router.get("/ivdetail/synthetic", sellController.getSyntheticSaleDetail);

router.put("/ivlist/softdelete/:id", sellController.softDelSaleIv);
router.put("/ivlist/restore/:id", sellController.restoreSaleIv);
router.delete("/ivlist/harddelete/:id", sellController.hardDelSaleIv);

// /sell/createinvoice

module.exports = router;
