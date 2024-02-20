const express = require("express");
const router = express.Router();

const BranchController = require("../controller/BranchController");
//branch

router.post("/create", BranchController.createBranch);
router.put("/update/:id", BranchController.updateBranch);
router.put("/softdelete/:id", BranchController.softDelBranch);

router.delete("/delete/:id", BranchController.deleteBranch);

router.get("/paginate", BranchController.getPaginateBranch);
router.get("/getmaxid", BranchController.getMaxIdBranch);
router.get("/", BranchController.getAllBranch);

module.exports = router;
