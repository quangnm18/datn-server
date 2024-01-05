const sellRouter = require("./sell");
const homeRouter = require("./home");
const categoryRouter = require("./category");
const warehouseRouter = require("./warehouse");
const importListRouter = require("./import");

function route(app) {
  app.use("/importlist", importListRouter);
  app.use("/warehouse", warehouseRouter);
  app.use("/category", categoryRouter);
  app.use("/sell", sellRouter);
  app.use("/", homeRouter);
}

module.exports = route;
