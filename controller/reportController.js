var Report = require("../model/report.model");

class ReportController {
  //[GET] /Home
  getListReport(req, res) {
    try {
      Report.getListReport(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  createRp(req, res) {
    try {
      Report.createRp(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  softDelRp(req, res) {
    try {
      Report.softDelRp(req.params.id, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  approveRp(req, res) {
    try {
      Report.approveRp(req.body, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}
module.exports = new ReportController();
