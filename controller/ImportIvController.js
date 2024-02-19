var ImportIv = require("../model/importInvoice.model");
const { authPage } = require("../middleWare/basicAuth");

class ImportIvController {
  // /importlist/create
  getMaxIdIv(req, res) {
    try {
      ImportIv.getMaxIdIv((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW") {
        ImportIv.createInvoice(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  createInvoiceDetail(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW") {
        ImportIv.createInvoiceDetail(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  // getListInvoice(req, res) {
  //   try {
  //     ImportIv.getListInvoice((data) => {
  //       res.json(data);
  //     });
  //   } catch (error) {}
  // }

  getPaginateListIv(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW" || req.role === "ADMA") {
        ImportIv.getPaginateListIv(req.query, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  //get detail

  getAllDetail(req, res) {
    try {
      ImportIv.getAllDetail((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getPaginateDetail(req, res) {
    try {
      ImportIv.getPaginateDetail(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getDetailsByCode(req, res) {
    try {
      ImportIv.getDetailsByCode(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getDetailsByMedId(req, res) {
    try {
      ImportIv.getDetailsByMedId(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getAllDetailsImported(req, res) {
    try {
      ImportIv.getAllDetailsImported((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDeleteInvoice(req, res) {
    try {
      ImportIv.softDeleteInvoice(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDeleteIvDetail(req, res) {
    try {
      ImportIv.softDeleteIvDetail(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  acceptInvoice(req, res) {
    try {
      ImportIv.acceptInvoice(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  rejectInvoice(req, res) {
    try {
      ImportIv.rejectInvoice(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  importedIvDetail(req, res) {
    try {
      ImportIv.importedIvDetail(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  restoreImportCp(req, res) {
    try {
      ImportIv.restoreImportCp(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  hardDeleteImportCp(req, res) {
    try {
      ImportIv.hardDeleteImportCp(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  restoreIvDetail(req, res) {
    try {
      ImportIv.restoreIvDetail(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  hardDelIvDetail(req, res) {
    try {
      ImportIv.hardDelIvDetail(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  updateIvDetail(req, res) {
    try {
      ImportIv.updateIvDetail(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new ImportIvController();
