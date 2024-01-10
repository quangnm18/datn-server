var Medicine = require("../model/medicine.model");
var Supplier = require("../model/supplier.model");

class CategoryController {
  getMaxIdMed(req, res) {
    try {
      Medicine.getMaxIdMed((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getMaxIdGr(req, res) {
    try {
      Medicine.getMaxIdGr((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getMaxIdUnit(req, res) {
    try {
      Medicine.getMaxIdUnit((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //[GET] /category/medicine
  getAllMedCurr(req, res) {
    try {
      Medicine.getAllMedCurr(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

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

  getUnitMed(req, res) {
    try {
      Medicine.getUnitMed(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
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

  getGrMedCurr(req, res) {
    try {
      Medicine.getGrMedCurr(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //[GET] /category/supplier
  getAllSup(req, res) {
    try {
      Supplier.getAllSup(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getAllNameSup(req, res) {
    try {
      Supplier.getAllNameSup((data) => {
        res.json(data);
      });
    } catch (error) {}
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
