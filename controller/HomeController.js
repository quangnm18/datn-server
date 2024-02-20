var Home = require("../model/home.model");

class HomeController {
  //[GET] /Home
  getAllCountRp(req, res) {
    try {
      Home.getAllCountRp((data) => {
        res.json(data);
      });
    } catch (error) {}
  }

  getMedDue(req, res) {
    try {
      Home.getMedDue(req.query, (data) => {
        res.json(data);
      });
    } catch (error) {}
  }
}
module.exports = new HomeController();
