const db = require("../common/connect");

const Medicine = (medicine) => {
  this.sdk = medicine.skd;
  this.han_sdk = medicine.han_sdk;
  this.ten = medicine.ten;
  this.hoat_chat = medicine.hoat_chat;
  this.ham_luong = medicine.ham_luong;
  this.sqd = medicine.sqd;
  this.nam_cap = medicine.nam_cap;
  this.dot_cap = medicine.dot_cap;
  this.dang_bao_che = medicine.dang_bao_che;
  this.dong_goi = medicine.dong_goi;
  this.tieu_chuan = medicine.tieu_chuan;
  this.han_dung = medicine.han_dung;
  this.cty_dk = medicine.cty_dk;
  this.dchi_ctydk = medicine.dchi_ctydk;
  this.cty_sx = medicine.cty_sx;
  this.dchi_ctysx = medicine.dchi_ctysx;
  this.nhom_thuoc = medicine.nhom_thuoc;
  this.don_vi_duoc = medicine.don_vi_duoc;
};

Medicine.get_all = function (result) {
  db.query(
    "SELECT medicine.id, medicine.sdk, medicine.han_sdk, medicine.ten, medicine.hoat_chat, medicine.ham_luong, medicine.sqd, medicine.nam_cap, medicine.dot_cap, medicine.dang_bao_che, medicine.dong_goi, medicine.tieu_chuan, medicine.han_dung, medicine.cty_dk, medicine.dchi_ctydk, medicine.cty_sx, medicine.dchi_ctysx, medicine.nhom_thuoc, medicine.don_vi_duoc, medicine.isDeleted, medicine.deletedAt, group_medicine.group_code, group_medicine.ten_nhom_thuoc, unit_med.description_unit, unit_med.unit_code FROM medicine LEFT JOIN group_medicine ON medicine.nhom_thuoc = group_medicine.id LEFT JOIN unit_med ON medicine.don_vi_duoc = unit_med.id ORDER BY id DESC",
    (err, data) => {
      if (err) {
        result(err);
      } else result(data);
    }
  );
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

Medicine.getByName = function (data, callback) {
  db.query(
    "SELECT medicine.id, medicine.ten, medicine.sdk, medicine.nhom_thuoc, unit_med.donvi_lon, unit_med.description_unit, unit_med.donvi_nho FROM medicine LEFT JOIN unit_med ON medicine.don_vi_duoc = unit_med.id ",
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
      callback(err);
    } else {
      callback(response);
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

Medicine.getUnitMed = function (callback) {
  db.query("SELECT * FROM unit_med ORDER BY id DESC", (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

Medicine.addUnitMed = function (data, callback) {
  db.query("INSERT INTO unit_med SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ id: response.insertId, ...data });
  });
};

Medicine.updateUnitMed = function (id, data, callback) {
  db.query(
    "UPDATE unit_med SET donvi_lon=?, donvi_tb=?, donvi_nho=?, unit_code=?, description_unit=? WHERE id=?",
    [
      data.donvi_lon,
      data.donvi_tb,
      data.donvi_nho,
      data.unit_code,
      data.description_unit,
      id,
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.softDeleteUnitMed = function (id, callback) {
  db.query(
    "UPDATE unit_med SET isDeleted=1 WHERE id=?",
    id,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.resUnitMed = function (id, callback) {
  db.query(
    "UPDATE unit_med SET isDeleted=0 WHERE id=?",
    id,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.hardDelUnit = function (id, callback) {
  db.query("DELETE FROM unit_med WHERE id = ?", id, (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

//group Medicine
Medicine.getGroupMed = function (callback) {
  db.query("SELECT * FROM group_medicine ORDER BY id DESC", (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

Medicine.hardDeleteGr = function (id, callback) {
  db.query("DELETE FROM group_medicine WHERE id = ?", id, (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

Medicine.addGroupMed = function (data, callback) {
  db.query("INSERT INTO group_medicine SET ?", data, (err, response) => {
    if (err) {
      callback(err);
    } else callback({ id: response.insertId, ...data });
  });
};

Medicine.updateGroupMed = function (id, data, callback) {
  db.query(
    "UPDATE group_medicine SET ten_nhom_thuoc=?, description=? WHERE id=?",
    [data.ten_nhom_thuoc, data.description, id],
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.softDeleteGrMed = function (id, callback) {
  db.query(
    "UPDATE group_medicine SET isDeleted=1 WHERE id=?",
    id,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Medicine.resGroupMed = function (id, callback) {
  db.query(
    "UPDATE group_medicine SET isDeleted=0 WHERE id=?",
    id,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

module.exports = Medicine;
