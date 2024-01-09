const db = require("../common/connect");

const Sell = (sell) => {
  this.id = sell.ID;
  this.staffId = sell.StaffID;
  this.CreateDate = sell.CreateDate;
  this.TotalPrice = sell.TotalPrice;
};

// List Invoice

Sell.createInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    `INSERT INTO sale_cp (ma_nhan_vien, createdDate, tong_tien_hang, tong_ck, tong_phai_tra, khach_tra, tien_du, ma_hoa_don) VALUES (${
      data.user_id
    }, "${datetime}", ${data.tong_tien_hang}, ${data.ck}, ${
      data.tong_phai_tra ? data.tong_phai_tra : data.tong_tien_hang
    }, ${data.khach_tra}, ${data.tien_du}, 'IB${data.newId}')`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback({ id: response.insertId, ...data });
    }
  );
};

Sell.createSaleDetail = function ({ dataInvoice, ma_hoa_don }, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "INSERT INTO sale_detail (med_id, ten_duoc, so_luong_ban, don_vi_ban, don_gia_ban, thanh_tien, ma_hoa_don, createdAt, isDeleted) VALUES ?",
    [
      dataInvoice.map((item) => [
        item.med_id,
        item.ten_duoc,
        item.sl_tong,
        item.donvinho,
        item.gia_ban,
        item.thanh_tien,
        "IB" + ma_hoa_don,
        datetime,
        0,
      ]),
    ],
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

Sell.getListIv = function (callback) {
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

Sell.softDelSaleIv = function (id, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  db.query(
    "UPDATE sale_cp SET isDeleted=1, deletedAt=? WHERE ID=?",
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

Sell.getSyntheticSaleDetail = function (callback) {
  db.query("CALL get_synthetic_saledetail()", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

///////////
Sell.get_all = function (result) {
  db.query(
    "SELECT Sell.ID, Sell.CreateDate, Sell.TotalPrice, users.Name FROM Sell INNER JOIN users ON Sell.StaffID=users.ID",
    (err, data) => {
      if (err) {
        result(err);
      } else result(data);
    }
  );
};

Sell.getByDate = function (id, callback) {
  db.query("SELECT * FROM Sell WHERE ID = ?", id, (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      callback(response);
    }
  });
};

Sell.delete = function (id, callback) {
  db.query("DELETE FROM Sell WHERE ID = ?", id, (err, response) => {
    if (err) {
      callback("ERROR");
    } else {
      callback(response);
    }
  });
};

Sell.getByName = function (data, callback) {
  db.query("SELECT * FROM Sell", (err, response) => {
    if (err || response.length === 0) {
      callback(null);
    } else {
      const filltered = response.filter((Sell) => {
        const name = Sell.Name;
        if (name.toLowerCase().includes(data.name)) {
          return Sell;
        }
      });
      callback(filltered);
    }
  });
};

Sell.create = function (data, callback) {
  db.query("INSERT INTO Sell SET ?", data, (err, response) => {
    if (err) {
      callback("ERROR");
    } else callback({ ID: response.insertId, ...data });
  });
};

Sell.update = function (id, data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();

  db.query(
    "UPDATE Sell SET Name=?, SupplierID=?, Ingredients=?, DueDate=?, Origin=?, ResNumber=?, Contraindicate=?, Price=? WHERE ID=?",
    [
      data.Name,
      data.SupplierID,
      data.Ingredients,
      datetime,
      data.Origin,
      data.ResNumber,
      data.Contraindicate,
      data.Price,
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

module.exports = Sell;
