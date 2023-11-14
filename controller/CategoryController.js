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

  //[GET] /category/supplier
  getAllSupplier(req, res) {
    Supplier.get_all(function (data) {
      res.send(data);
    });
  }
}

module.exports = new CategoryController();
