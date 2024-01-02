const db = require("../common/connect");

const SaleInvoice = (invoice) => {
  this.ID = invoice.ID;
  this.StaffID = invoice.StaffID;
  this.CreateDate = invoice.CreateDate;
  this.TotalPrice = invoice.TotalPrice;
};

// List Invoice
SaleInvoice.get_all = function (result) {
  db.query(
    "SELECT saleinvoice.ID, saleinvoice.CreateDate, saleinvoice.TotalPrice, users.Name FROM saleinvoice INNER JOIN users ON saleinvoice.StaffID=users.ID",
    (err, data) => {
      if (err) {
        result("ERROR");
      } else result(data);
    }
  );
};

SaleInvoice.getByDate = function (id, callback) {
  db.query("SELECT * FROM SaleInvoice WHERE ID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

SaleInvoice.delete = function (id, callback) {
  db.query("DELETE FROM SaleInvoice WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(response);
    }
  });
};

SaleInvoice.getByName = function (data, callback) {
  db.query("SELECT * FROM SaleInvoice", (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      const filltered = response.filter((SaleInvoice) => {
        const name = SaleInvoice.Name;
        if (name.toLowerCase().includes(data.name)) {
          return SaleInvoice;
        }
      });
      callback(filltered);
    }
  });
};

SaleInvoice.create = function (data, callback) {
  db.query("INSERT INTO SaleInvoice SET ?", data, (err, response) => {
    if (err) {
      callback("ERROR");
    } else callback({ ID: response.insertId, ...data });
  });
};

SaleInvoice.update = function (id, data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();

  db.query(
    "UPDATE SaleInvoice SET Name=?, SupplierID=?, Ingredients=?, DueDate=?, Origin=?, ResNumber=?, Contraindicate=?, Price=? WHERE ID=?",
    [
      data.Name,
      data.SupplierID,
      data.Ingredients,
      datetime,
      data.Origin,
      data.ResNumber,
      data.Contraindicate,
      data.Price,
      id,
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    }
  );
};

module.exports = SaleInvoice;
