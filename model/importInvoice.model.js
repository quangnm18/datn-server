const db = require("../common/connect");

const ImportIv = (item) => {
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

//import invoice details

ImportIv.createInvoice = function (
  { dataDetails, total, tong_ck, newId },
  callback
) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    `INSERT INTO ipt_cp (user_id, createdDate, giatri_nhap, tong_ck, thanh_tien, supplier, status, isDeleted, invoice_code) VALUES (1, "${datetime}", ${
      total - tong_ck
    }, ${tong_ck}, ${total}, ${
      dataDetails[0].ma_ncc ? dataDetails[0].ma_ncc : "''"
    }, 2, 0, 'IV${newId}')`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback({ id: response.insertId, ...dataDetails });
    }
  );
};

ImportIv.createInvoiceDetail = function (
  { dataDetails, invoice_code },
  callback
) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "INSERT INTO ipt_detail (med_id, med, soluong_lon, soluong_tb, soluong_nho, sl_tong, dvt, dong_goi, gianhap_chuaqd, gianhap_daqd, giaban_daqd, thanh_tien, ck, vat, han_dung, so_lo, ma_hoa_don, createdDt_at) VALUES ?",
    [
      dataDetails.map((item) => [
        item.med_id,
        item.ten,
        item.soluong_lon,
        item.soluong_tb ? item.soluong_tb : 0,
        item.soluong_nho,
        item.sl_tong,
        item.dvt,
        item.dong_goi,
        item.gianhap_chuaqd,
        item.gianhap_daqd,
        item.giaban_daqd ? item.giaban_daqd : 0,
        item.thanh_tien,
        item.ck ? item.ck : 0,
        item.vat ? item.vat : 0,
        item.han_dung,
        item.so_lo,
        "IV" + invoice_code,
        datetime,
      ]),
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

ImportIv.getListInvoice = function (callback) {
  db.query(
    "SELECT ipt_cp.id, ipt_cp.createdDate, ipt_cp.giatri_nhap, ipt_cp.tong_ck, ipt_cp.thanh_tien, ipt_cp.status, ipt_cp.updatedStatusDate, ipt_cp.isDeleted, ipt_cp.deletedAt, ipt_cp.invoice_code, users.Name, supplier.ten_ncc FROM ipt_cp LEFT JOIN users ON ipt_cp.user_id = users.ID LEFT JOIN supplier ON ipt_cp.supplier = supplier.ID ORDER BY id DESC",
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

ImportIv.getListInvoiceCurrent = function (callback) {
  db.query(
    "SELECT ipt_cp.id, ipt_cp.createdDate, ipt_cp.giatri_nhap, ipt_cp.tong_ck, ipt_cp.thanh_tien, ipt_cp.status, ipt_cp.updatedStatusDate, ipt_cp.isDeleted, ipt_cp.deletedAt, ipt_cp.invoice_code, users.Name, supplier.ten_ncc FROM ipt_cp LEFT JOIN users ON ipt_cp.user_id = users.ID LEFT JOIN supplier ON ipt_cp.supplier = supplier.ID WHERE ipt_cp.isDeleted=0 ORDER BY id DESC",
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

ImportIv.getAllDetail = function (callback) {
  db.query("SELECT * FROM ipt_detail ORDER BY id DESC", (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

ImportIv.getDetailsByCode = function (data, callback) {
  db.query(
    "SELECT * FROM ipt_detail WHERE ma_hoa_don = ? ",
    data.q,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

ImportIv.getAllDetailsImported = function (callback) {
  db.query(
    "SELECT * FROM ipt_detail WHERE isImported = 1 AND isDeletedDt = 0 ",
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

ImportIv.softDeleteInvoice = function (id, callback) {
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
        callback(response);
      }
    }
  );
};

ImportIv.softDeleteIvDetail = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  db.query(
    "UPDATE ipt_detail SET isDeletedDt=1, deletedAt=? WHERE ID=?",
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

//chap thuan phieu nhap hang
ImportIv.acceptInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  db.query(
    "UPDATE ipt_cp SET status=1, updatedStatusDate=? WHERE invoice_code=?",
    [datetime, data.ma_hoa_don],
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

ImportIv.importedIvDetail = function (data, callback) {
  db.query(
    "UPDATE ipt_detail SET isImported=1 WHERE ma_hoa_don=?",
    data.ma_hoa_don,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

////////////

ImportIv.restoreImportCp = function (id, callback) {
  db.query("UPDATE ipt_cp SET isDeleted=0 WHERE ID=?", id, (err, response) => {
    if (err) {
      callback(err);
    } else callback("Success");
  });
};

module.exports = ImportIv;
