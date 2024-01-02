var ImportWh = require("../model/ImportWh.model");

class WarehouseController {
  //[GET] /warehouse/import
  getAllListImport(req, res) {
    ImportWh.getAllListImport(function (data) {
      res.json(data);
    });
  }

  createImportCp(req, res) {
    ImportWh.createImportCp(req.body, (data) => res.send(data));
  }

  updateImportCp(req, res) {
    ImportWh.updateImportCp(req.params.id, req.body, (data) => {
      res.send(data);
    });
  }

  softDeleteImportCp(req, res) {
    ImportWh.softDeleteImportCp(req.params.id, (data) => {
      res.json(data);
    });
  }

  restoreImportCp(req, res) {
    ImportWh.restoreImportCp(req.params.id, (data) => {
      res.json(data);
    });
  }

  deleteImportWh(req, res) {
    ImportWh.delete(req.params.id, (response) => {
      res.send(response);
    });
  }

  softDeleteImportWh(req, res) {
    ImportWh.softDelete(req.body, (data) => {
      res.json(data);
    });
  }

  restoreMed(req, res) {
    ImportWh.restoreMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  //import-details
  getAllImportDetail(req, res) {
    ImportWh.getAllImportDetail((data) => {
      res.json(data);
    });
  }

  getImportDetailByIptId(req, res) {
    ImportWh.getImportDetailByIptId(req.params.id, (data) => {
      res.json(data);
    });
  }

  createImportDetails(req, res) {
    ImportWh.createImportDetails(req.body, (data) => {
      res.json(data);
    });
  }
}

module.exports = new WarehouseController();
