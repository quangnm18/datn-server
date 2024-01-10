const db = require("../common/connect");

const Until = (until) => {
  this.id = until.id;
  this.name = until.name;
  this.des = until.des;
};

Until.getMaxId = function (data, callback) {
  db.query(`CALL get_maxid(${data.db_name})`, (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

module.exports = Until;
