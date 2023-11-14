const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;

const route = require("./routes/index");

var bodyParser = require("body-parser");

app.use(cors());

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
