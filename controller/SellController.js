var Sell = require("../model/sell.model");
const { authPage } = require("../middleWare/basicAuth");

class SellController {
  getMaxIdIv(req, res) {
    try {
      Sell.getMaxIdIv((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  // /sell/ivcreate
  createInvoice(req, res) {
    authPage(req, res);
    try {
      if (req.role === "STFS") {
        Sell.createInvoice(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  createSaleDetail(req, res) {
    authPage(req, res);
    try {
      if (req.role === "STFS") {
        Sell.createSaleDetail(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  getAllListIv(req, res) {
    try {
      Sell.getAllListIv((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getListIv(req, res) {
    try {
      Sell.getListIv(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  // getAllSaleDetailCurr(req, res) {
  //   try {
  //     Sell.getAllSaleDetailCurr((data) => {
  //       res.json(data);
  //     });
  //   } catch (error) {}
  // }

  getSaleDetail(req, res) {
    try {
      Sell.getSaleDetail(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getSaleDetailByIvCode(req, res) {
    try {
      Sell.getSaleDetailByIvCode(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDelSaleIv(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADM" || req.role === "STFS") {
        Sell.softDelSaleIv(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  restoreSaleIv(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA" || req.role === "ADM") {
        Sell.restoreSaleIv(req.body, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  hardDelSaleIv(req, res) {
    authPage(req, res);
    try {
      if (req.role === "ADMA") {
        Sell.hardDelSaleIv(req.params.id, (data) => {
          res.json(data);
        });
      } else res.json("fail");
    } catch (error) {}
  }

  getSyntheticSaleDetail(req, res) {
    try {
      Sell.getSyntheticSaleDetail((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  // /sell/listall

  // getAllInvoiceSale(req, res) {
  //   try {
  //     Sell.get_all((data) => {
  //       res.json(data);
  //     });
  //   } catch (error) {}
  // }

  // getByDate(req, res) {
  //   try {
  //     Sell.getByDate(dataReq, (response) => {
  //       res.json(response);
  //     });
  //   } catch (error) {}
  // }

  // deleteInvoice(req, res) {
  //   try {
  //     Sell.delete(req.params.id, (response) => {
  //       res.json(response);
  //     });
  //   } catch (error) {}
  // }
}

module.exports = new SellController();
