const db = require("../common/connect");

const InventoryWh = (item) => {
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

InventoryWh.getInventoryWh = function (data, callback) {
  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }

  let group_id = data.group_id;
  if (group_id === null || group_id === undefined || group_id === "0") {
    group_id = null;
  }

  db.query(
    `Call get_inventory(${Number.parseInt(data.sort_col)}, '${
      data.sort_type
    }', ${group_id}, ${branch_id}, ${
      data.search_value ? "'" + data.search_value + "'" : null
    }, ${data.numRecord}, ${data.startRecord}, @${data.totalRecord})`,
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        response[0].forEach((element) => {
          element["sl_tong"] = Number.parseInt(element["sl_tong"]);
          element["soluong_lon"] = Number.parseInt(element["soluong_lon"]);
          element["so_luong_ban"] = Number.parseInt(element["so_luong_ban"]);
          element["so_luong_xuat"] = Number.parseInt(element["so_luong_xuat"]);
        });
        callback(response);
      }
    }
  );
};

InventoryWh.getAllInventoryWh = function (data, callback) {
  let branch_id = data.branch_id;
  if (branch_id === null || branch_id === undefined || branch_id === "0") {
    branch_id = null;
  }

  let group_id = data.group_id;
  if (group_id === null || group_id === undefined || group_id === "0") {
    group_id = null;
  }

  db.query(
    `Call checkall_wh(${group_id}, ${branch_id}, ${
      data.search_value ? "'" + data.search_value + "'" : null
    })`,
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        response[0].forEach((element) => {
          element["sl_tong"] = Number.parseInt(element["sl_tong"]);
          element["soluong_lon"] = Number.parseInt(element["soluong_lon"]);
          element["so_luong_ban"] = Number.parseInt(element["so_luong_ban"]);
          element["so_luong_xuat"] = Number.parseInt(element["so_luong_xuat"]);
        });
        callback(response);
      }
    }
  );
};

module.exports = InventoryWh;
