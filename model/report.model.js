const db = require("../common/connect");

const Report = (rp) => {
  this.id = rp.id;
  this.content = rp.content;
  this.title = rp.title;
  this.updateNote = rp.updateNote;
};

Report.getListReport = function (data, callback) {
  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }
  db.query(
    `CALL pagination_report(${data.sort_col}, '${data.sort_type}', '${data.search_value}', ${data.user_id}, ${branch_id}, ${data.myself}, ${data.isDeleted}, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Report.createRp = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  db.query(
    `INSERT INTO report (creator_id, createdAt, title, content) VALUES (${data.creator_id}, '${datetime}', '${data.title}', '${data.content}')`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Report.softDelRp = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  db.query(
    "UPDATE report SET isDeleted=1, deletedAt=? WHERE id=?",
    [datetime, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

Report.approveRp = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  db.query(
    `UPDATE report SET status=1, updateNote='${data.updateNote}', updateStatusAt='${datetime}' WHERE id=${data.id}`,
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

// Branch.updateBranch = function (data, id, callback) {
//   db.query(
//     "UPDATE branchs SET name=?, address=? WHERE id=?",
//     [data.name, data.address, id],
//     (err, response) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(response);
//       }
//     }
//   );
// };

// Branch.softDelBranch = function (id, callback) {
//   db.query("UPDATE branchs SET isDeleted=1 WHERE id=?", id, (err, response) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(response);
//     }
//   });
// };

// Branch.deleteBranch = function (id, callback) {
//   db.query("DELETE FROM branchs WHERE id=?", id, (err, response) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(response);
//     }
//   });
// };

module.exports = Report;
