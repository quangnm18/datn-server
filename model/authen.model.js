const db = require("../common/connect");
const jwt = require("jsonwebtoken");

const Authen = (auth) => {
  this.id = auth.id;
  this.process = auth.process;
  this.result = auth.result;
};

Authen.loginAccount = function (data, callback) {
  const sql =
    "SELECT r.ten_vai_tro, u.* FROM users u LEFT JOIN role_user r ON u.role_id = r.id WHERE u.user_name = ? AND u.password = ?";

  db.query(sql, [data.username, data.password], (err, response) => {
    if (err) {
      callback(err);
    }

    if (response.length > 0) {
      console.log(response);
      const id = response[0].ID;
      const name = response[0].Name;
      const role = response[0].Role;
      const ten_role = response[0].ten_vai_tro;
      const token = jwt.sign(
        { id, name, role, ten_role },
        "our-jsonwebtoken-secret-key",
        {
          expiresIn: "1d",
        }
      );
      callback({ token: token, status: "loginSuccess" });
    } else {
      callback({ status: "Tài khoản hoặc mật khẩu không hợp lệ!" });
    }
  });
};

// };

// Authen.getMedDue = function (callback) {
//   var currentDate = new Date();
//   var curr_day =
//     currentDate.getFullYear() * 12 * 30 +
//     (currentDate.getMonth() + 1) * 30 +
//     currentDate.getDate();

//   db.query(
//     "SELECT ipt_detail.han_dung FROM ipt_detail WHERE ipt_detail.isImported=1 AND ipt_detail.isDeletedDt=0",
//     (err, res) => {
//       if (err) {
//         callback(err);
//       } else callback(res);
//     }
//   );
// };

module.exports = Authen;
