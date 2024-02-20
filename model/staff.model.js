const db = require("../common/connect");

const Staffs = (staff) => {
  this.id = staff.id;
  this.name = staff.name;
  this.address = staff.address;
  this.phoneNum = staff.phoneNum;
  this.email = staff.email;
};

Staffs.getAllUser = function (data, callback) {
  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }

  db.query(
    `CALL pagination_user(${Number.parseInt(data.sort_col)}, '${
      data.sort_type
    }', ${branch_id}, ${data.isDeleted}, ${
      data.search_value ? "'" + data.search_value + "'" : null
    }, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

Staffs.addUser = function (data, callback) {
  db.query(
    `INSERT INTO users (Name, DateOfBirth, Address, PhoneNumber, Email, role_id, user_name, password, branch_id) VALUES ('${data.Name}', '${data.DateOfBirth}', '${data.Address}', ${data.PhoneNumber}, '${data.Email}', ${data.Role}, '${data.user_name}', '${data.password}', ${data.branch_id})`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

// Staffs.deleteUser = function (id, callback) {
//   db.query("DELETE FROM users WHERE ID = ?", id, (err, response) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(response);
//     }
//   });
// };

Staffs.softDeleteUser = function (id, callback) {
  db.query("UPDATE users SET isDeleted=1 WHERE ID = ?", id, (err, response) => {
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
  db.query(
    "SELECT * FROM role_user WHERE ma_vai_tro != 'ADMA'",
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

module.exports = Staffs;
