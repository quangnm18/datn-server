var ImportIv = require("../model/importInvoice.model");

class ImportIvController {
  // /importlist/create
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

  getListInvoiceCurrent(req, res) {
    ImportIv.getListInvoiceCurrent((data) => {
      res.json(data);
    });
  }

  getAllDetail(req, res) {
    ImportIv.getAllDetail((data) => {
      res.json(data);
    });
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
}

module.exports = new ImportIvController();
