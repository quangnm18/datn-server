const db = require("../common/connect");

const Staffs = (staff) => {
  this.id = staff.id;
  this.name = staff.name;
  this.address = staff.address;
  this.phoneNum = staff.phoneNum;
  this.email = staff.email;
};

Staffs.get_all = function (result) {
  db.query("SELECT * FROM staff", function (err, data) {
    if (err) throw err;
    result(data);
  });
};

module.exports = Staffs;
