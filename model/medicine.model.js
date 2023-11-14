const db = require("../common/connect");

const Medicine = (medicine) => {
  this.id = medicine.id;
  this.name = medicine.name;
  this.supID = medicine.supID;
  this.ingre = medicine.ingre;
  this.duedate = medicine.duedate;
  this.origin = medicine.origin;
  this.resNum = medicine.resNum;
  this.contraindicate = medicine.contraindicate;
  this.price = medicine.price;
};

Medicine.get_all = function (result) {
  db.query("SELECT * FROM medicine", (err, data) => {
    if (err) {
      result("ERROR");
    } else result(data);
  });
};

Medicine.getById = function (id, callback) {
  db.query("SELECT * FROM medicine WHERE ID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

Medicine.create = function (data, callback) {
  db.query("INSERT INTO medicine SET ?", data, (err, response) => {
    if (err) {
      callback("ERROR");
    } else callback({ ID: response.insertId, ...data });
  });
};

Medicine.delete = function (id, callback) {
  db.query("DELETE FROM medicine WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(`Deleted book id ${id}`);
    }
  });
};

Medicine.update = function (id, data, callback) {
  db.query(
    "UPDATE medicine SET Name=?, Ingredients=?, DueDate=?, Origin=?, ResNumber=?, Contraindicate=? WHERE ID=?",
    [
      data.Name,
      data.Ingredients,
      data.DueDate,
      data.Origin,
      data.ResNumber,
      data.Contraindicate,
      id,
    ],
    (err, response) => {
      if (err) {
        callback(null);
      } else callback(data);
    }
  );
};

module.exports = Medicine;
