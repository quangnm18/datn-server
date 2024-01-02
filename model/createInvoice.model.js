const db = require("../common/connect");

const SaleDetail = (saleDetail) => {
  this.ID = saleDetail.ID;
  this.SaleInvoiceID = saleDetail.SaleInvoiceID;
  this.MedicineID = saleDetail.MedicineID;
  this.UnitID = saleDetail.UnitID;
  this.Count = saleDetail.Count;
  this.Price = saleDetail.Price;
};

// Create Invoice
SaleDetail.create = function (data, callback) {
  db.query("INSERT INTO SaleInvoice SET ?", data, (err, response) => {
    if (err) {
      callback("ERROR");
    } else callback({ ID: response.insertId, ...data });
  });
};

SaleDetail.get_all = function (result) {
  db.query(
    "SELECT saledetail.ID, saleinvoice.CreateDate, saleinvoice.TotalPrice, users.Name FROM saleinvoice INNER JOIN users ON saleinvoice.StaffID=users.ID",
    (err, data) => {
      if (err) {
        result("ERROR");
      } else result(data);
    }
  );
};

// Get List Unit
SaleDetail.getListUnitByID = function (id, callback) {
  db.query(
    "SELECT * FROM unit_medicine WHERE MedicineID = ?",
    id,
    (err, response) => {
      if (err) {
        callback("ERROR");
      } else callback(response);
    }
  );
};

module.exports = SaleDetail;
