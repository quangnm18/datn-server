class HomeController {
  //[GET] /sell
  home(req, res) {
    res.send("Home page");
  }
}

module.exports = new HomeController();
