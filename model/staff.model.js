const db = require("../common/connect");

const Staffs = (staff) => {
  this.id = staff.id;
  this.name = staff.name;
  this.address = staff.address;
  this.phoneNum = staff.phoneNum;
  this.email = staff.email;
};

Staffs.getAllUser = function (data, callback) {
  db.query(
    `CALL pagination_user(${
      data.search_value ? "'" + data.search_value + "'" : null
    }, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Staffs.deleteUser = function (id, callback) {
  db.query("DELETE FROM users WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

Staffs.updateUser = function (data, callback) {
  const sql =
    "UPDATE users SET Name=?, DateOfBirth=?, Address=?, PhoneNumber=?, Email=?, role_id=? WHERE ID=?";
  db.query(
    sql,
    [
      data.Name,
      data.DateOfBirth,
      data.Address,
      data.PhoneNumber,
      data.Email,
      data.Role,
      data.UserID,
    ],
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Staffs.getAllRole = function (callback) {
  db.query("SELECT * FROM role_user", (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

module.exports = Staffs;
