const db = require("../common/connect");

const Sell = (sell) => {
  this.id = sell.ID;
  this.staffId = sell.StaffID;
  this.CreateDate = sell.CreateDate;
  this.TotalPrice = sell.TotalPrice;
};

// List Invoice

Sell.createInvoice = function (data, callback) {};

///////////
Sell.get_all = function (result) {
  db.query(
    "SELECT Sell.ID, Sell.CreateDate, Sell.TotalPrice, users.Name FROM Sell INNER JOIN users ON Sell.StaffID=users.ID",
    (err, data) => {
      if (err) {
        result("ERROR");
      } else result(data);
    }
  );
};

Sell.getByDate = function (id, callback) {
  db.query("SELECT * FROM Sell WHERE ID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

Sell.delete = function (id, callback) {
  db.query("DELETE FROM Sell WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(response);
    }
  });
};

Sell.getByName = function (data, callback) {
  db.query("SELECT * FROM Sell", (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      const filltered = response.filter((Sell) => {
        const name = Sell.Name;
        if (name.toLowerCase().includes(data.name)) {
          return Sell;
        }
      });
      callback(filltered);
    }
  });
};

Sell.create = function (data, callback) {
  db.query("INSERT INTO Sell SET ?", data, (err, response) => {
    if (err) {
      callback("ERROR");
    } else callback({ ID: response.insertId, ...data });
  });
};

Sell.update = function (id, data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();

  db.query(
    "UPDATE Sell SET Name=?, SupplierID=?, Ingredients=?, DueDate=?, Origin=?, ResNumber=?, Contraindicate=?, Price=? WHERE ID=?",
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

module.exports = Sell;
