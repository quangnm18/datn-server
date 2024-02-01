const db = require("../common/connect");

const Sell = (sell) => {
  this.id = sell.ID;
  this.staffId = sell.StaffID;
  this.CreateDate = sell.CreateDate;
  this.TotalPrice = sell.TotalPrice;
};

// List Invoice
Sell.getMaxIdIv = function (callback) {
  db.query("SELECT MAX(id) as max_id FROM sale_cp", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

Sell.createInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    `INSERT INTO sale_cp (ma_nhan_vien, createdDate, tong_tien_hang, ck, tong_ck, tong_phai_tra, khach_tra, tien_du, ma_hoa_don) VALUES (${
      data.user_id
    }, "${datetime}", ${data.tong_tien_hang}, ${data.ck}, ${data.tong_ck}, ${
      data.tong_phai_tra ? data.tong_phai_tra : data.tong_tien_hang
    }, ${data.khach_tra}, ${data.tien_du}, 'IB${data.newId}')`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback({ id: response.insertId, ...data });
    }
  );
};

Sell.createSaleDetail = function (
  { dataInvoice, ma_hoa_don, branch_id },
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
    "INSERT INTO sale_detail (med_id, ten_duoc, loai_dong_goi, so_luong_ban, don_vi_ban, don_gia_ban, thanh_tien, ma_hoa_don, createdAt, isDeleted, so_lo_hang, branch_id) VALUES ?",
    [
      dataInvoice.map((item) => [
        item.med_id,
        item.ten_duoc,
        item.dvl,
        item.sl_tong,
        item.donvinho,
        item.gia_ban,
        item.thanh_tien,
        "IB" + ma_hoa_don,
        datetime,
        0,
        item.so_lo_hang,
        branch_id,
      ]),
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Sell.getAllListIv = function (callback) {
  db.query(
    "SELECT a.id, a.ma_nhan_vien, a.createdDate, a.tong_tien_hang, a.tong_ck, a.tong_phai_tra, a.khach_tra, a.tien_du, a.ma_hoa_don, b.Name FROM sale_cp a LEFT JOIN users b ON a.ma_nhan_vien = b.ID WHERE a.isDeleted=0 ORDER BY a.id DESC",
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

Sell.getListIv = function (data, callback) {
  db.query(
    `CALL pagination_salecp(${data.isDeleted}, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Sell.getSaleDetailByIvCode = function (data, callback) {
  db.query(
    "SELECT * FROM sale_detail WHERE ma_hoa_don=? ",
    data.q,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Sell.getAllSaleDetailCurr = function (callback) {
  db.query(
    "SELECT sale_detail.id, sale_detail.med_id, sale_detail.ten_duoc, sale_detail.so_luong_ban, sale_detail.don_vi_ban, sale_detail.don_gia_ban, sale_detail.thanh_tien, sale_detail.ma_hoa_don, sale_detail.createdAt, sale_detail.isDeleted, medicine.hoat_chat, medicine.ham_luong, medicine.dang_bao_che, medicine.dong_goi FROM sale_detail LEFT JOIN medicine ON sale_detail.med_id = medicine.id WHERE sale_detail.isDeleted=0",
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(response);
      }
    }
  );
};

Sell.getSaleDetail = function (data, callback) {
  let date_start = data.date_start;
  let date_to = data.date_to;
  if (date_start === null || date_start === "" || date_start === undefined) {
    date_start = "1800-01-01";
  }
  if (date_to === null || date_to === "" || date_to === undefined) {
    date_to = "3000-01-01";
  }

  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }

  let group_id = data.group_id;
  if (group_id === null || group_id === undefined || group_id === "0") {
    group_id = null;
  }

  db.query(
    `CALL pagination_saledetail(${group_id}, ${branch_id}, '${date_start}', '${date_to}', ${
      data.search_value ? "'" + data.search_value + "'" : null
    }, ${data.isDeleted}, ${data.numRecord}, ${data.startRecord}, @${
      data.totalRecord
    })`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

Sell.softDelSaleIv = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "UPDATE sale_cp SET isDeleted=1, deletedAt=? WHERE id=?",
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

Sell.restoreSaleIv = function (id, callback) {
  db.query("UPDATE sale_cp SET isDeleted=0 WHERE id=?", id, (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

Sell.hardDelSaleIv = function (id, callback) {
  db.query("DELETE FROM sale_cp WHERE id=?", id, (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

Sell.getSyntheticSaleDetail = function (callback) {
  db.query("CALL get_synthetic_saledetail()", (err, res) => {
    if (err) {
      callback(err);
    } else {
      res[0].forEach((element) => {
        element["so_luong_ban"] = Number.parseInt(element["so_luong_ban"]);
      });
      callback(res);
    }
  });
};

module.exports = Sell;
