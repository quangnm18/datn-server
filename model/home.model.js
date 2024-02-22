const db = require("../common/connect");

const Home = (home) => {
  this.id = home.id;
  this.process = home.process;
  this.result = home.result;
};

// Get count Report
Home.getAllCountRp = function (callback) {
  db.query(
    "SELECT COUNT(id) as count_rp FROM report WHERE isDeleted=0",
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Home.getMedDue = function (data, callback) {
  var currentDate = new Date();
  var date_start = `${data.curr_year}-01-01`;
  var date_to = `${data.curr_year}-12-31`;

  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }

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
    `CALL home_page('${date_start}', '${date_to}', ${branch_id}, '${datetime}', @${data.count_due}, @${data.count_neardue}, @${data.count_ok}, @${data.tonggt_nhap}, @${data.tong_ban}, @${data.count_rp})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

module.exports = Home;
