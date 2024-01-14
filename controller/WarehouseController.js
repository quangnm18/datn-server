var ImportWh = require("../model/ImportWh.model");

class WarehouseController {
  //[GET] /warehouse/import
  getAllListImport(req, res) {
    try {
      ImportWh.getAllListImport(function (data) {
        res.json(data);
      });
    } catch (error) {}
  }

  createImportCp(req, res) {
    try {
      ImportWh.createImportCp(req.body, (data) => res.send(data));
    } catch (error) {}
  }

  updateImportCp(req, res) {
    try {
      ImportWh.updateImportCp(req.params.id, req.body, (data) => {
        res.send(data);
      });
    } catch (error) {}
  }

  softDeleteImportCp(req, res) {
    try {
      ImportWh.softDeleteImportCp(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  restoreImportCp(req, res) {
    try {
      ImportWh.restoreImportCp(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  deleteImportWh(req, res) {
    try {
      ImportWh.delete(req.params.id, (response) => {
        res.send(response);
      });
    } catch (error) {}
  }

  softDeleteImportWh(req, res) {
    try {
      ImportWh.softDelete(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  restoreMed(req, res) {
    try {
      ImportWh.restoreMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //import-details
  getAllImportDetail(req, res) {
    try {
      ImportWh.getAllImportDetail((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getImportDetailByIptId(req, res) {
    try {
      ImportWh.getImportDetailByIptId(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createImportDetails(req, res) {
    try {
      ImportWh.createImportDetails(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new WarehouseController();
