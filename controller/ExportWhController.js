var ExportWh = require("../model/exportWh.model");
const { authPage } = require("../middleWare/basicAuth");

class ExportWhController {
  getMaxIdIv(req, res) {
    try {
      ExportWh.getMaxIdIv((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW") {
        ExportWh.createInvoice(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  createExportDetail(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW") {
        ExportWh.createExportDetail(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  getListIv(req, res) {
    try {
      ExportWh.getListIv(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getExDetailsByCode(req, res) {
    try {
      ExportWh.getExDetailsByCode(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  acceptInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM") {
        ExportWh.acceptInvoice(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  rejectInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM") {
        ExportWh.rejectInvoice(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDelInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFW") {
        ExportWh.softDelExportIv(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  resInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        ExportWh.restoreExportIv(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }
}

module.exports = new ExportWhController();
