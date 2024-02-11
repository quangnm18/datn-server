const db = require("../common/connect");

const Branch = (branch) => {
  this.id = branch.id;
  this.name = branch.name;
  this.address = branch.address;
  this.branch_code = branch.branch_code;
};

Branch.getMaxIdBranch = function (callback) {
  db.query("SELECT MAX(id) as max_id FROM branchs", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

Branch.getAllBranch = function (callback) {
  db.query("SELECT * FROM branchs", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

Branch.getPaginateBranchs = function (data, callback) {
  db.query(
    `CALL pagination_branchs(${Number.parseInt(data.sort_col)}, '${
      data.sort_type
    }', ${data.search_value ? "'" + data.search_value + "'" : null}, ${
      data.numRecord
    }, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

Branch.createBranch = function (data, callback) {
  db.query("INSERT INTO branchs SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ id: response.insertId, ...data });
  });
};

Branch.updateBranch = function (data, id, callback) {
  db.query(
    "UPDATE branchs SET name=?, address=? WHERE id=?",
    [data.name, data.address, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

Branch.deleteBranch = function (id, callback) {
  db.query("DELETE FROM branchs WHERE id=?", id, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

module.exports = Branch;
