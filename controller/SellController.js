var Sell = require("../model/sell.model");

class SellController {
  // /sell/ivcreate
  createInvoice(req, res) {
    try {
      Sell.createInvoice(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createSaleDetail(req, res) {
    try {
      Sell.createSaleDetail(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getListIv(req, res) {
    try {
      Sell.getListIv((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getAllSaleDetailCurr(req, res) {
    try {
      Sell.getAllSaleDetailCurr((data) => {
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
    try {
      Sell.softDelSaleIv(req.params.id, (data) => {
        res.json(data);
      });
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

  getAllInvoiceSale(req, res) {
    Sell.get_all((data) => {
      res.json(data);
    });
  }

  getByDate(req, res) {
    Sell.getByDate(dataReq, (response) => {
      res.json(response);
    });
  }

  deleteInvoice(req, res) {
    Sell.delete(req.params.id, (response) => {
      res.json(response);
    });
  }
}

module.exports = new SellController();
