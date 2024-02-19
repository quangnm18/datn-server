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

Home.getCountSup = function (callback) {
  db.query(
    "SELECT COUNT(ID) as count_sup FROM supplier WHERE isDeleted=0",
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
    `CALL home_page('${date_start}', '${date_to}', ${data.branch_id}, '${datetime}', @${data.count_due}, @${data.count_neardue}, @${data.count_ok}, @${data.tonggt_nhap}, @${data.tong_ban})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

module.exports = Home;
