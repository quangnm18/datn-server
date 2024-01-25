const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8081;
var bodyParser = require("body-parser");

const route = require("./routes/index");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const verifyUser = (req, res, next) => {
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
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({
    status: "Success",
    userId: req.id,
    name: req.name,
    role: req.role,
  });
});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
