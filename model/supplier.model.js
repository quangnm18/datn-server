const db = require("../common/connect");

const Supplier = (supplier) => {
  this.ID = supplier.ID;
  this.Name = supplier.Name;
  this.Address = supplier.Address;
  this.PhoneNumber = supplier.PhoneNumber;
  this.Email = supplier.Email;
  this.TaxCode = supplier.TaxCode;
  this.personRepresent = supplier.personRepresent;
};

Supplier.get_all = function (result) {
  db.query("SELECT * FROM supplier ORDER BY ID DESC", (err, data) => {
    if (err) {
      result("ERROR");
    } else result(data);
  });
};

Supplier.getCurrent = function (result) {
  db.query("SELECT * FROM supplier WHERE isDeleted=?", 0, (err, data) => {
    if (err) {
      result("ERROR");
    } else result(data);
  });
};

Supplier.getDeleted = function (result) {
  db.query("SELECT * FROM supplier WHERE isDeleted=?", 1, (err, data) => {
    if (err) {
      result("ERROR");
    } else result(data);
  });
};

Supplier.create = function (data, callback) {
  db.query("INSERT INTO supplier SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ ID: response.insertId, ...data });
  });
};

Supplier.update = function (id, data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();

  db.query(
    "UPDATE supplier SET Name=?, Address=?, PhoneNumber=?, Email=?, TaxCode=?, personRepresent=? WHERE ID=?",
    [
      data.Name,
      data.Address,
      data.PhoneNumber,
      data.Email,
      data.TaxCode,
      data.personRepresent,
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

Supplier.softDeleteSingle = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "UPDATE supplier SET isDeleted=?, deletedAt=? WHERE ID=?",
    [1, datetime, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback("OK");
      }
    }
  );
};

Supplier.hardDelete = function (id, callback) {
  db.query("DELETE FROM supplier WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(`Deleted supplier id ${id}`);
    }
  });
};

Supplier.restore = function (id, callback) {
  db.query(
    "UPDATE supplier SET isDeleted=? WHERE ID=?",
    [0, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback("OK");
      }
    }
  );
};

// Supplier.getByInfo = function (data, callback) {
//   db.query("SELECT * FROM supplier", (err, response) => {
//     if (err || response.length === 0) {
//       callback(null);
//     } else {
//       const filltered = response.filter((sup) => {
//         const name = medicine.ten;
//         if (name.toLowerCase().includes(data.q.toLowerCase())) {
//           return medicine;
//         }
//       });
//       callback(filltered);
//     }
//   });
// }

module.exports = Supplier;
