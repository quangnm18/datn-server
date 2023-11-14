class SellController {
  //[GET] /sell
  sell(req, res) {
    res.send("sell page");
  }

  create(req, res) {
    res.send("sell create");
  }

  list(req, res) {
    res.send("sell list");
  }
}

module.exports = new SellController();
