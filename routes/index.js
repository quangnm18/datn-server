const sellRouter = require("./sell");
const homeRouter = require("./home");
const categoryRouter = require("./category");
const warehouseRouter = require("./warehouse");
const importListRouter = require("./import");
const untilRouter = require("./until");

function route(app) {
  app.use("/until", untilRouter);
  app.use("/importlist", importListRouter);
  app.use("/warehouse", warehouseRouter);
  app.use("/category", categoryRouter);
  app.use("/sell", sellRouter);
  app.use("/", homeRouter);
}

module.exports = route;
