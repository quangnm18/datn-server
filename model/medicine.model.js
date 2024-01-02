const db = require("../common/connect");

const Medicine = (medicine) => {
  this.id = medicine.id;
  this.sdk = medicine.skd;
  this.hanSdk = medicine.hanSdk;
  this.name = medicine.name;
  this.hoatChat = medicine.hoatChat;
  this.hamLuong = medicine.hamLuong;
  this.sqd = medicine.sqd;
  this.namCap = medicine.namCap;
  this.dotCap = medicine.dotCap;
  this.dangBaoChe = medicine.dangBaoChe;
  this.dongGoi = medicine.dongGoi;
  this.tieuChuan = medicine.tieuChuan;
  this.hanDung = medicine.hanDung;
  this.ctydk = medicine.ctydk;
  this.dchiCtydk = medicine.dchiCtydk;
  this.ctysx = medicine.ctysx;
  this.dchiCtysx = medicine.dchiCtysx;
  this.nhom_thuoc = medicine.nhom_thuoc;
  this.don_vi_duoc = medicine.don_vi_duoc;
};

Medicine.get_all = function (result) {
  db.query("SELECT * FROM medicine ORDER BY id DESC", (err, data) => {
    if (err) {
      result(err);
    } else result(data);
  });
};

Medicine.getById = function (id, callback) {
  db.query("SELECT * FROM medicine WHERE ID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

// Medicine.getByName = function (data, callback) {
//   db.query("SELECT * FROM medicine", (err, response) => {
//     if (err || response.length === 0) {
//       callback(null);
//     } else {
//       const filltered = response.filter((medicine) => {
//         const name = medicine.ten;
//         if (name.toLowerCase().includes(data.q.toLowerCase())) {
//           return medicine;
//         }
//       });
//       callback(filltered);
//     }
//   });
// };

Medicine.getByName = function (data, callback) {
  db.query(
    "SELECT medicine.id, medicine.ten, medicine.han_dung, medicine.dong_goi, medicine.sdk, medicine.nhom_thuoc, unit_med.donvi_lon, unit_med.donvi_tb, unit_med.donvi_nho FROM medicine LEFT JOIN unit_med ON medicine.don_vi_duoc = unit_med.mo_ta ",
    (err, response) => {
      if (err || response.length === 0) {
        callback(null);
      } else {
        const filltered = response.filter((medicine) => {
          const name = medicine.ten;
          if (name.toLowerCase().includes(data.q.toLowerCase())) {
            return medicine;
          }
        });
        callback(filltered);
      }
    }
  );
};

Medicine.create = function (data, callback) {
  db.query("INSERT INTO medicine SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ id: response.insertId, ...data });
  });
};

Medicine.delete = function (id, callback) {
  db.query("DELETE FROM medicine WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(`Deleted medicine id ${id}`);
    }
  });
};

Medicine.update = function (id, data, callback) {
  // var currentDate = new Date();
  // var datetime =
  //   currentDate.getFullYear() +
  //   "/" +
  //   (currentDate.getMonth() + 1) +
  //   "/" +
  //   currentDate.getDate();

  db.query(
    "UPDATE medicine SET sdk=?, han_sdk=?, ten=?, hoat_chat=?, ham_luong=?, sqd=?, nam_cap=?, dot_cap=?, dang_bao_che=?, dong_goi=?, han_dung=?, cty_dk=?, dchi_ctydk=?, cty_sx=?, dchi_ctysx=? WHERE ID=?",
    [
      data.sdk,
      data.han_sdk,
      data.ten,
      data.hoat_chat,
      data.ham_luong,
      data.sqd,
      data.nam_cap,
      data.dot_cap,
      data.dang_bao_che,
      data.dong_goi,
      data.han_dung,
      data.cty_dk,
      data.dchi_ctydk,
      data.cty_sx,
      data.dchi_ctysx,
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

Medicine.softDelete = function ({ data }, callback) {
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

Medicine.sofDeleteMulti = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  data.forEach((id) => {
    db.query(
      "UPDATE medicine SET isDeleted=?, deletedAt=? WHERE ID=?",
      [1, datetime, id],
      (err, response) => {
        if (err) {
          callback(err);
        } else {
          callback("OK");
        }
      }
    );
  });
};

Medicine.restoreMed = function (id, callback) {
  db.query(
    "UPDATE medicine SET isDeleted=? WHERE ID=?",
    [0, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback("OK");
      }
    }
  );
};

//unit

Medicine.getUnitAll = function (callback) {
  db.query("SELECT * FROM unit_all", (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

Medicine.createUnitMed = function (data, callback) {
  db.query("INSERT INTO unit_med SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ id: response.insertId, ...data });
  });
};

Medicine.getUnitMed = function (callback) {
  db.query(
    "SELECT * FROM unit_med ORDER BY donvi_lon, donvi_tb, donvi_nho",
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.getUnitByMedId = function (data, callback) {
  db.query("SELECT * FROM unit_med WHERE id=?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

module.exports = Medicine;
