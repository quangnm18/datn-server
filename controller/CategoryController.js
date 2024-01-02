var Medicine = require("../model/medicine.model");
var Supplier = require("../model/supplier.model");

class CategoryController {
  //[GET] /category/medicine
  getAllMedicine(req, res) {
    Medicine.get_all(function (data) {
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

  createUnitMed(req, res) {
    Medicine.createUnitMed(req.body, (data) => {
      res.json(data);
    });
  }

  getUnitByMedId(req, res) {
    Medicine.getUnitByMedId(req.params.id, (data) => {
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
