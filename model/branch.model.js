const db = require("../common/connect");

const Branch = (branch) => {
  this.id = branch.id;
  this.name = branch.name;
  this.address = branch.address;
  this.branch_code = branch.branch_code;
};

Branch.getAllBranch = function (callback) {
  db.query("SELECT * FROM branchs", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

module.exports = Branch;
