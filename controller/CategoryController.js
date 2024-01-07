var Medicine = require("../model/medicine.model");
var Supplier = require("../model/supplier.model");

class CategoryController {
  //[GET] /category/medicine
  getAllMedicine(req, res) {
    Medicine.get_all(function (data) {
      res.json(data);
    });
  }

  getAllMedCurrent(req, res) {
    Medicine.get_allCurrent((data) => {
      res.json(data);
    });
  }

  getCheckWh(req, res) {
    Medicine.getCheckWh((data) => {
      res.json(data);
    });
  }

  getCheckWhByName(req, res) {
    Medicine.getCheckWhByName(req.query, (data) => {
      res.json(data);
    });
  }

  createMedicine(req, res) {
    Medicine.create(req.body, (data) => res.send(data));
  }

  deleteMedicine(req, res) {
    Medicine.delete(req.params.id, (response) => {
      res.send(response);
    });
  }

  updateMedicine(req, res) {
    Medicine.update(req.params.id, req.body, (data) => {
      res.send(data);
    });
  }

  softDeleteMedicine(req, res) {
    Medicine.softDelete(req.body, (data) => {
      res.json(data);
    });
  }

  restoreMed(req, res) {
    Medicine.restoreMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  getMedicinesName(req, res) {
    Medicine.getByName(req.query, (data) => {
      res.send(data);
    });
  }

  getMedicineById(req, res) {
    Medicine.getById(req.params.id, (data) => {
      res.json(data);
    });
  }

  //unit medicine

  getUnitAll(req, res) {
    Medicine.getUnitAll((data) => {
      res.json(data);
    });
  }

  getUnitMed(req, res) {
    Medicine.getUnitMed((data) => {
      res.json(data);
    });
  }

  addUnitMed(req, res) {
    Medicine.addUnitMed(req.body, (data) => {
      res.json(data);
    });
  }

  updateUnitMed(req, res) {
    Medicine.updateUnitMed(req.params.id, req.body, (data) => {
      res.json(data);
    });
  }

  softDeleteUnitMed(req, res) {
    Medicine.softDeleteUnitMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  resUnitMed(req, res) {
    Medicine.resUnitMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  hardDelUnitMed(req, res) {
    Medicine.hardDelUnit(req.params.id, (data) => {
      res.json(data);
    });
  }

  //group medicine
  getGroupMed(req, res) {
    Medicine.getGroupMed((data) => {
      res.json(data);
    });
  }

  hardDeleteGr(req, res) {
    Medicine.hardDeleteGr(req.params.id, (data) => {
      res.json(data);
    });
  }

  addGroupMed(req, res) {
    Medicine.addGroupMed(req.body, (data) => {
      res.json(data);
    });
  }

  updateGroupMed(req, res) {
    Medicine.updateGroupMed(req.params.id, req.body, (data) => {
      res.json(data);
    });
  }

  softDeleteGrMed(req, res) {
    Medicine.softDeleteGrMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  resGroupMed(req, res) {
    Medicine.resGroupMed(req.params.id, (data) => {
      res.json(data);
    });
  }

  //[GET] /category/supplier
  getAllSupplier(req, res) {
    Supplier.get_all(function (data) {
      res.send(data);
    });
  }

  getCurrSup(req, res) {
    Supplier.getCurrent((data) => {
      res.json(data);
    });
  }

  getDeletedSup(req, res) {
    Supplier.getDeleted((data) => {
      res.json(data);
    });
  }

  createSupplier(req, res) {
    Supplier.create(req.body, (data) => res.json(data));
  }

  updateSupplier(req, res) {
    Supplier.update(req.params.id, req.body, (data) => {
      res.send(data);
    });
  }

  softDelSupplier(req, res) {
    Supplier.softDeleteSingle(req.params.id, (data) => {
      res.json(data);
    });
  }

  hardDelSupplier(req, res) {
    Supplier.hardDelete(req.params.id, (response) => {
      res.json(response);
    });
  }

  restoreSupplier(req, res) {
    Supplier.restore(req.params.id, (response) => {
      res.json(response);
    });
  }
}

module.exports = new CategoryController();
