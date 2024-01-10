var Until = require("../model/until.model");

class UntilController {
  // /Until/
  getMaxId(req, res) {
    try {
      Until.getMaxId(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}

module.exports = new UntilController();
