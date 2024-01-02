const sellRouter = require("./sell");
const homeRouter = require("./home");
const categoryRouter = require("./category");
const warehouseRouter = require("./warehouse");

function route(app) {
  app.use("/warehouse", warehouseRouter);
  app.use("/category", categoryRouter);
  app.use("/sell", sellRouter);
  app.use("/", homeRouter);
}

module.exports = route;
