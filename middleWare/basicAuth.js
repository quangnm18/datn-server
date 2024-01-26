const jwt = require("jsonwebtoken");

const authPage = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: "We need token please provide it." });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ status: "Authen Error" });
      } else {
        req.id = decoded.id;
        req.name = decoded.name;
        req.role = decoded.role;
        req.ten_role = decoded.ten_role;
      }
    });
  }
};

module.exports = { authPage };
