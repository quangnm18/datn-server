var Branch = require("../model/branch.model");
const { authPage } = require("../middleWare/basicAuth");

class BranchController {
  // /importlist/create
  getMaxIdBranch(req, res) {
    try {
      Branch.getMaxIdBranch((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getAllBranch(req, res) {
    try {
      Branch.getAllBranch((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getPaginateBranch(req, res) {
    try {
      Branch.getPaginateBranchs(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createBranch(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Branch.createBranch(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDelBranch(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Branch.softDelBranch(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  updateBranch(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Branch.updateBranch(req.body, req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  deleteBranch(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Branch.deleteBranch(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }
}

module.exports = new BranchController();
