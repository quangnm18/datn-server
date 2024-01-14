var Medicine = require("../model/medicine.model");
var Supplier = require("../model/supplier.model");
var Staff = require("../model/staff.model");

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
    try {
      Medicine.get_all(function (data) {
        res.json(data);
      });
    } catch (error) {}
  }

  getAllMedCurrent(req, res) {
    try {
      Medicine.get_allCurrent((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getCheckWh(req, res) {
    try {
      Medicine.getCheckWh(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getCheckWhByName(req, res) {
    try {
      Medicine.getCheckWhByName(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createMedicine(req, res) {
    try {
      Medicine.create(req.body, (data) => res.send(data));
    } catch (error) {}
  }

  deleteMedicine(req, res) {
    try {
      Medicine.delete(req.params.id, (response) => {
        res.send(response);
      });
    } catch (error) {}
  }

  updateMedicine(req, res) {
    try {
      Medicine.update(req.params.id, req.body, (data) => {
        res.send(data);
      });
    } catch (error) {}
  }

  softDeleteMedicine(req, res) {
    try {
      Medicine.softDelete(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  restoreMed(req, res) {
    try {
      Medicine.restoreMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getMedicinesName(req, res) {
    try {
      Medicine.getByName(req.query, (data) => {
        res.send(data);
      });
    } catch (error) {}
  }

  getMedicineById(req, res) {
    try {
      Medicine.getById(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //unit medicine

  getUnitMed(req, res) {
    try {
      Medicine.getUnitMed(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getUnitAll(req, res) {
    try {
      Medicine.getUnitAll((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  addUnitMed(req, res) {
    try {
      Medicine.addUnitMed(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  updateUnitMed(req, res) {
    try {
      Medicine.updateUnitMed(req.params.id, req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDeleteUnitMed(req, res) {
    try {
      Medicine.softDeleteUnitMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  resUnitMed(req, res) {
    try {
      Medicine.resUnitMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  hardDelUnitMed(req, res) {
    try {
      Medicine.hardDelUnit(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  //group medicine
  getGroupMed(req, res) {
    try {
      Medicine.getGroupMed((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  hardDeleteGr(req, res) {
    try {
      Medicine.hardDeleteGr(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  addGroupMed(req, res) {
    try {
      Medicine.addGroupMed(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  updateGroupMed(req, res) {
    try {
      Medicine.updateGroupMed(req.params.id, req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDeleteGrMed(req, res) {
    try {
      Medicine.softDeleteGrMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  resGroupMed(req, res) {
    try {
      Medicine.resGroupMed(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
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
    try {
      Supplier.create(req.body, (data) => res.json(data));
    } catch (error) {}
  }

  updateSupplier(req, res) {
    try {
      Supplier.update(req.params.id, req.body, (data) => {
        res.send(data);
      });
    } catch (error) {}
  }

  softDelSupplier(req, res) {
    try {
      Supplier.softDeleteSingle(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  hardDelSupplier(req, res) {
    try {
      Supplier.hardDelete(req.params.id, (response) => {
        res.json(response);
      });
    } catch (error) {}
  }

  restoreSupplier(req, res) {
    try {
      Supplier.restore(req.params.id, (response) => {
        res.json(response);
      });
    } catch (error) {}
  }

  //staff
  getAllStaff(req, res) {
    try {
      Staff.get_all((data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new CategoryController();
