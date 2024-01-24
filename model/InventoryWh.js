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
  db.query(
    `Call get_test(${
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
        });
        callback(response);
      }
    }
  );
};

module.exports = InventoryWh;
