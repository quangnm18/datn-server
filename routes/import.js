const express = require("express");
const router = express.Router();

const ImportIvController = require("../controller/ImportIvController");

//import
// /importlist/
router.get("/getmaxid", ImportIvController.getMaxIdIv);

router.post("/create", ImportIvController.createInvoice);
router.post("/createdetail", ImportIvController.createInvoiceDetail);

router.get("/alllistpaginate/*", ImportIvController.getPaginateListIv);
// router.get("/alllist", ImportIvController.getListInvoice);

router.get("/alldetail/imported", ImportIvController.getAllDetailsImported);
router.get("/alldetail/*", ImportIvController.getDetailsByCode);
router.get("/alldetailid/:id", ImportIvController.getDetailsByMedId);
router.get("/alldetail", ImportIvController.getAllDetail);

router.put("/softdelete", ImportIvController.softDeleteInvoice);
router.put("/restorecp/:id", ImportIvController.restoreImportCp);
router.delete("/harddelete/:id", ImportIvController.hardDeleteImportCp); //nguy hiem

router.put("/detail/update", ImportIvController.updateIvDetail);

//detail //ca 2 role
router.put("/detail/softdelete", ImportIvController.softDeleteIvDetail);
router.get("/detail*", ImportIvController.getPaginateDetail);
//
//detail //admin
router.put("/detail/restore/:id", ImportIvController.restoreIvDetail);
router.delete("/detail/harddelete/:id", ImportIvController.hardDelIvDetail); //nguy hiem

router.put("/acceptiv", ImportIvController.acceptInvoice);
router.put("/rejectiv", ImportIvController.rejectInvoice);

module.exports = router;
