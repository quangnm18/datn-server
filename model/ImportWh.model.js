const db = require("../common/connect");

const ImportWh = (item) => {
  this.id = item.id;
  this.med_id = item.med_id;
  this.count_max = item.count_max;
  this.count_medium = item.count_medium;
  this.count_min = item.count_min;
  this.gianhap_chuaqd = item.gianhap_chuaqd;
  this.gianhap_daqd = item.gianhap_daqd;
  this.giaban_daqd = item.giaban_daqd;
  this.thanh_tien = item.thanh_tien;
  this.ck = item.ck;
  this.vat = item.vat;
  this.han_dung = item.han_dung;
  this.hanDung = item.hanDung;
  this.so_lo = item.so_lo;
  this.iptCp_id = item.iptCp_id;
};

ImportWh.getAllListImport = function (result) {
  db.query(
    "SELECT ipt_cp.id, users.Name, ipt_cp.createdDate, ipt_cp.thanh_tien FROM ipt_cp ORDER BY id DESC",
    (err, data) => {
      if (err) {
        result(err);
      } else result(data);
    }
  );
};

ImportWh.createImportCp = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  var total = data.reduce((acc, curr) => {
    return acc + curr.thanh_tien;
  }, 0);

  db.query(
    `INSERT INTO ipt_cp (user_id, createdDate, thanh_tien, supplier, status, isDeleted) VALUES (1, "${datetime}", ${total}, 1, 2, 0 )`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback({ id: response.insertId, ...data });
    }
  );
};

ImportWh.updateImportCp = function (id, data, callback) {
  // var currentDate = new Date();
  // var datetime =
  //   currentDate.getFullYear() +
  //   "/" +
  //   (currentDate.getMonth() + 1) +
  //   "/" +
  //   currentDate.getDate();

  db.query(
    "UPDATE ipt_detail SET count_max=?, count_medium=?, count_min=?, gianhap_chuaqd=?, gianhap_daqd=?, giaban_daqd=?, thanh_tien=?, ck=?, vat=?, han_dung=?, so_lo=?, iptCp_id=? WHERE ID=?",
    [
      data.count_max,
      data.count_medium,
      data.count_min,
      data.gianhap_chuaqd,
      data.gianhap_daqd,
      data.giaban_daqd,
      data.thanh_tien,
      data.ck,
      data.vat,
      data.han_dung,
      data.so_lo,
      data.iptCp_id,
      id,
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    }
  );
};

ImportWh.softDeleteImportCp = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "UPDATE ipt_cp SET isDeleted=1, deletedAt=? WHERE ID=?",
    [datetime, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback("OK");
      }
    }
  );
};

ImportWh.restoreImportCp = function (id, callback) {
  db.query("UPDATE ipt_cp SET isDeleted=0 WHERE ID=?", id, (err, response) => {
    if (err) {
      callback(err);
    } else callback("Success");
  });
};

// ImportWh.getByName = function (data, callback) {
//   db.query(
//     "SELECT medicine.id, medicine.ten, medicine.han_dung, medicine.dong_goi, medicine.sdk, unit_med.max_unit, unit_med.medium_unit, unit_med.min_unit FROM medicine LEFT JOIN unit_med ON medicine.unit_id = unit_med.id ",
//     (err, response) => {
//       if (err || response.length === 0) {
//         callback(null);
//       } else {
//         const filltered = response.filter((medicine) => {
//           const name = medicine.ten;
//           if (name.toLowerCase().includes(data.q.toLowerCase())) {
//             return medicine;
//           }
//         });
//         callback(filltered);
//       }
//     }
//   );
// };

//import-details

ImportWh.getAllImportDetail = function (callback) {
  db.query("SELECT * FROM ipt_detail", (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

ImportWh.getImportDetailByIptId = function (id, callback) {
  db.query("SELECT * FROM ipt_detail WHERE id=?", id, (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

ImportWh.createImportDetails = function (data, callback) {
  var sql = "";
  console.log(data);

  data.forEach((detail) => {
    sql += `INSERT INTO ipt_detail (med_id, count_max, count_medium, count_min, sl_tong, gianhap_chuaqd, gianhap_daqd, giaban_daqd, thanh_tien, ck, vat, han_dung, so_lo, iptCp_id) VALUES (${detail.id}, ${detail.count_max}, ${detail.count_medium}, ${detail.count_min}, ${detail.sl_tong}, ${detail.gianhap_chuaqd}, ${detail.gianhap_daqd}, ${detail.giaban_daqd}, ${detail.thanh_tien}, ${detail.ck}, ${detail.vat}, ${detail.han_dung}, ${detail.so_lo}, 2);`;
  });

  db.query(sql, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

ImportWh.update = function (id, data, callback) {
  // var currentDate = new Date();
  // var datetime =
  //   currentDate.getFullYear() +
  //   "/" +
  //   (currentDate.getMonth() + 1) +
  //   "/" +
  //   currentDate.getDate();

  db.query(
    "UPDATE ipt_detail SET count_max=?, count_medium=?, count_min=?, gianhap_chuaqd=?, gianhap_daqd=?, giaban_daqd=?, thanh_tien=?, ck=?, vat=?, han_dung=?, so_lo=?, iptCp_id=? WHERE ID=?",
    [
      data.count_max,
      data.count_medium,
      data.count_min,
      data.gianhap_chuaqd,
      data.gianhap_daqd,
      data.giaban_daqd,
      data.thanh_tien,
      data.ck,
      data.vat,
      data.han_dung,
      data.so_lo,
      data.iptCp_id,
      id,
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    }
  );
};

ImportWh.softDelete = function ({ data }, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  var sql = "";
  console.log(datetime);

  data.forEach((med) => {
    sql += `UPDATE medicine SET isDeleted=1, deletedAt="${datetime}" WHERE ID=${med.id};`;
  });

  db.query(sql, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback("OK");
    }
  });
};

module.exports = ImportWh;
