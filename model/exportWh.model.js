const db = require("../common/connect");

const ExportWh = (exp) => {
  this.id = exp.ID;
  this.staffId = exp.StaffID;
  this.CreateDate = exp.CreateDate;
  this.TotalPrice = exp.TotalPrice;
};

ExportWh.getMaxIdIv = function (callback) {
  db.query("SELECT MAX(id) as max_id FROM export_cp", (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

ExportWh.createInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  db.query(
    `INSERT INTO export_cp (id, creatorId, createdDate, totalPrice, sendTo, invoice_code) VALUES (${data.newId}, ${data.userId}, "${datetime}", ${data.total}, ${data.chooseSup}, 'EX${data.newId}')`,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback({ id: response.insertId, ...data });
    }
  );
};

ExportWh.createExportDetail = function (
  { dataDetails, invoice_code, branch_id },
  callback
) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  db.query(
    "INSERT INTO export_detail (invoice_code, importDetail_id, createdDate, ten, count, convertCount, totalCount, importPrice, totalImportPrice, dueDate, lotNumber, branch_id) VALUES ?",
    [
      dataDetails.map((item) => [
        "EX" + invoice_code,
        item.importDetailId,
        datetime,
        item.ten,
        item.sl_dvl,
        item.quydoi_dvn,
        item.sl_tongxuat,
        item.don_gia_nhap,
        item.tong_gia_tri,
        item.han_dung,
        item.so_lo,
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

ExportWh.getListIv = function (data, callback) {
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

  db.query(
    `CALL pagination_exportcp(${Number.parseInt(data.sort_col)}, '${
      data.sort_type
    }', ${branch_id}, '${date_start}', '${date_to}', ${
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

ExportWh.getExDetailsByCode = function (data, callback) {
  db.query(
    "SELECT i.dvt, i.dong_goi, i.so_lo, e.* FROM export_detail e LEFT JOIN ipt_detail i on e.importDetail_id = i.id WHERE e.invoice_code = ?",
    data.q,
    (err, response) => {
      if (err) {
        callback(err);
      } else callback(response);
    }
  );
};

//phe duyet
ExportWh.acceptInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  db.query(
    `UPDATE export_cp SET status=1, updateStatusDate='${datetime}' WHERE invoice_code='${data.ma_hoa_don}'; UPDATE export_detail SET isExported=1 WHERE invoice_code='${data.ma_hoa_don}';`,

    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

ExportWh.rejectInvoice = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  db.query(
    `UPDATE export_cp SET status=0, updateStatusDate='${datetime}' WHERE invoice_code='${data.ma_hoa_don}'`,
    (err, res) => {
      if (err) {
        callback(err);
      } else callback(res);
    }
  );
};

ExportWh.softDelExportIv = function (data, callback) {
  var currentDate = new Date();
  var datetime =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  let dbq = `UPDATE export_cp SET isDeleted=1, deletedAt='${datetime}', deleted_by=${data.deleted_by} WHERE invoice_code='${data.ma_hoa_don}'; UPDATE export_detail SET isDeleted=1 WHERE invoice_code='${data.ma_hoa_don}';`;

  db.query(dbq, (err, response) => {
    if (err) {
      callback(err);
    } else callback(response);
  });
};

ExportWh.restoreExportIv = function (data, callback) {
  let dbq = `UPDATE export_cp SET isDeleted=0 WHERE invoice_code='${data.ma_hoa_don}'; UPDATE export_detail SET isDeleted=0 WHERE invoice_code='${data.ma_hoa_don}';`;
  db.query(dbq, (err, res) => {
    if (err) {
      callback(err);
    } else callback(res);
  });
};

module.exports = ExportWh;
