var ImportIv = require("../model/importInvoice.model");

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
    ImportIv.createInvoice(req.body, (data) => {
      res.json(data);
    });
  }

  createInvoiceDetail(req, res) {
    ImportIv.createInvoiceDetail(req.body, (data) => {
      res.json(data);
    });
  }

  getListInvoice(req, res) {
    ImportIv.getListInvoice((data) => {
      res.json(data);
    });
  }

  getPaginateListIv(req, res) {
    try {
      ImportIv.getPaginateListIv(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //get detail

  getAllDetail(req, res) {
    ImportIv.getAllDetail((data) => {
      res.json(data);
    });
  }

  getPaginateDetail(req, res) {
    try {
      ImportIv.getPaginateDetail(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getDetailsByCode(req, res) {
    ImportIv.getDetailsByCode(req.query, (data) => {
      res.json(data);
    });
  }

  getAllDetailsImported(req, res) {
    ImportIv.getAllDetailsImported((data) => {
      res.json(data);
    });
  }

  softDeleteInvoice(req, res) {
    ImportIv.softDeleteInvoice(req.params.id, (data) => {
      res.json(data);
    });
  }

  softDeleteIvDetail(req, res) {
    try {
      ImportIv.softDeleteIvDetail(req.params.id, (data) => {
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
}

module.exports = new ImportIvController();
