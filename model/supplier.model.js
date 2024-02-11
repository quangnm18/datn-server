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

Supplier.getAllSup = function (data, callback) {
  db.query(
    `CALL pagination_supplier(${Number.parseInt(data.sort_col)}, '${
      data.sort_type
    }', ${data.search_value ? "'" + data.search_value + "'" : null}, ${
      data.isDeleted
    }, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Supplier.getAllNameSup = function (callback) {
  db.query("SELECT * FROM supplier", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
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
    "UPDATE supplier SET ten_ncc=?, Address=?, PhoneNumber=?, Email=?, TaxCode=?, personRepresent=? WHERE ID=?",
    [
      data.ten_ncc,
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

module.exports = Supplier;
