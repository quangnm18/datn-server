var Branch = require("../model/branch.model");
const { authPage } = require("../middleWare/basicAuth");

class BranchController {
  // /importlist/create
  getAllBranch(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Branch.getAllBranch((data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }
}

module.exports = new BranchController();
