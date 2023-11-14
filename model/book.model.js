const db = require("../common/connect");

const Books = (book) => {
  this.StaffID = book.StaffID;
  this.name = book.name;
};

Books.get_all = function (result) {
  db.query("SELECT * FROM staff", function (err, data) {
    if (err) throw err;
    result(data);
  });
};

Books.getById = function (id, callback) {
  db.query("SELECT * FROM staff WHERE StaffID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

Books.create = function (data, callback) {
  db.query("INSERT INTO staff SET ?", data, (err, response) => {
    if (err) throw err;
    callback({ StaffID: response.insertId, ...data });
  });
};

Books.delete = function (id, callback) {
  db.query("DELETE FROM staff WHERE StaffID = ?", id, (err, response) => {
    if (err) {
      callback(null);
    } else {
      callback(`Deleted book id ${id}`);
    }
  });
};

Books.update = function (id, data, callback) {
  db.query(
    "UPDATE staff SET Name=?, Address=?, PhoneNumber=?, Email=? WHERE StaffID=?",
    [data.Name, data.Address, data.PhoneNumber, data.Email, id],
    (err, response) => {
      if (err) {
        callback(null);
      } else callback(data);
    }
  );
};

module.exports = Books;
