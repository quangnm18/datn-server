const db = require("../common/connect");

const Supplier = (supplier) => {
  this.id = supplier.id;
  this.name = supplier.name;
  this.supID = supplier.supID;
  this.ingre = supplier.ingre;
  this.duedate = supplier.duedate;
  this.origin = supplier.origin;
  this.resNum = supplier.resNum;
  this.contraindicate = supplier.contraindicate;
  this.price = supplier.price;
};

Supplier.get_all = function (result) {
  db.query("SELECT * FROM supplier", (err, data) => {
    if (err) {
      result("ERROR");
    } else result(data);
  });
};

module.exports = Supplier;
