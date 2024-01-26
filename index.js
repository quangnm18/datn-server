const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const axios = require("axios");
const http = require("http");

const app = express();
const port = 8081;
var bodyParser = require("body-parser");

const route = require("./routes/index");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(cors());

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
        req.ten_role = decoded.ten_role;
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
    ten_role: req.ten_role,
  });
});

// var options = {
//   host: "",
//   port: 80,
//   path: "/resource?id=foo&bar=baz",
//   method: "POST",
// };

app.get("/loadtemp", () => {});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
