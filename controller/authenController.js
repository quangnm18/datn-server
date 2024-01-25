var Authen = require("../model/authen.model");

class AuthenController {
  loginAccount(req, res) {
    try {
      Authen.loginAccount(req.body, (data) => {
        if (data.status === "loginSuccess") {
          res.cookie("token", data.token);
        }
        return res.json({ status: data.status });
      });
    } catch (error) {}
  }
}

module.exports = new AuthenController();
