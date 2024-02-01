const express = require("express");
const router = express.Router();

const BranchController = require("../controller/BranchController");

router.get("/", BranchController.getAllBranch);

module.exports = router;
