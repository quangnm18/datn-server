const db = require("../common/connect");

const Staffs = (staff) => {
  this.id = staff.id;
  this.name = staff.name;
  this.address = staff.address;
  this.phoneNum = staff.phoneNum;
  this.email = staff.email;
};

Staffs.get_all = function (result) {
  db.query(
    "SELECT users.ID, users.Name, users.DateOfBirth, users.Address, users.PhoneNumber, users.Email, users.Role, role_user.ten_vai_tro FROM users LEFT JOIN role_user ON users.role_id = role_user.id ",
    function (err, data) {
      if (err) throw err;
      result(data);
    }
  );
};

module.exports = Staffs;
