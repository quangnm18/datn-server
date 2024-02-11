var Medicine = require("../model/medicine.model");
var Supplier = require("../model/supplier.model");
var Staff = require("../model/staff.model");
const { authPage } = require("../middleWare/basicAuth");
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

  // getCheckWh(req, res) {
  //   try {
  //     Medicine.getCheckWh(req.query, (data) => {
  //       res.json(data);
  //     });
  //   } catch (error) {}
  // }

  getSearchSell(req, res) {
    try {
      Medicine.getSearchSell(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getSearchImport(req, res) {
    try {
      Medicine.getSearchImport(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createMedicine(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.create(req.body, (data) => res.json(data));
      } else res.json("fail");
    } catch (error) {}
  }

  deleteMedicine(req, res) {
    //xoa cung
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.delete(req.params.id, (response) => {
          res.json(response);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  updateMedicine(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.update(req.params.id, req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDeleteMedicine(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.softDelete(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  restoreMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.restoreMed(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
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
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.addUnitMed(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  updateUnitMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.updateUnitMed(req.params.id, req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDeleteUnitMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.softDeleteUnitMed(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  resUnitMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.resUnitMed(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  hardDelUnitMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.hardDelUnit(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
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
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.hardDeleteGr(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  addGroupMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.addGroupMed(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  updateGroupMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.updateGroupMed(req.params.id, req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDeleteGrMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Medicine.softDeleteGrMed(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  resGroupMed(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Medicine.resGroupMed(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
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
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Supplier.create(req.body, (data) => res.json(data));
      } else res.json("fail");
    } catch (error) {}
  }

  updateSupplier(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Supplier.update(req.params.id, req.body, (data) => {
          res.send(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDelSupplier(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM" || req.role === "STFW") {
        Supplier.softDeleteSingle(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  hardDelSupplier(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Supplier.hardDelete(req.params.id, (response) => {
          res.json(response);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  restoreSupplier(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Supplier.restore(req.params.id, (response) => {
          res.json(response);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  //staff
  addUser(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "ADMA") {
        Staff.addUser(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  getAllUser(req, res) {
    try {
      Staff.getAllUser(req.query, (response) => {
        res.json(response);
      });
    } catch (error) {}
  }

  updateUser(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM") {
        Staff.updateUser(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  deleteUserById(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Staff.deleteUser(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  softDeleteUserById(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "ADMA") {
        Staff.softDeleteUser(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  getAllRole(req, res) {
    try {
      Staff.getAllRole((data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new CategoryController();
