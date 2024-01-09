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

Home.getMedDue = function (callback) {
  var currentDate = new Date();
  var curr_day =
    currentDate.getFullYear() * 12 * 30 +
    (currentDate.getMonth() + 1) * 30 +
    currentDate.getDate();

  db.query(
    "SELECT ipt_detail.han_dung FROM ipt_detail WHERE ipt_detail.isImported=1 AND ipt_detail.isDeletedDt=0",
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

module.exports = Home;
