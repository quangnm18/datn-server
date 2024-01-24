var InventoryWh = require("../model/InventoryWh");

class WarehouseController {
  //[GET] /warehouse/import
  getInventoryWh(req, res) {
    try {
      InventoryWh.getInventoryWh(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new WarehouseController();
