const express = require("express");
const router = express.Router();

const reportController = require("../controller/reportController");

router.put("/softdel/:id", reportController.softDelRp);
router.put("/approve", reportController.approveRp);

router.post("/create", reportController.createRp);

router.get("/", reportController.getListReport);

module.exports = router;
