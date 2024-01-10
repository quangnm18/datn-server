const express = require("express");
const router = express.Router();

const untilController = require("../controller/UntilController");

router.get("/getmaxid/*", untilController.getMaxId);

module.exports = router;
