const sellRouter = require("./sell");
const homeRouter = require("./home");
const categoryRouter = require("./category");
const warehouseRouter = require("./warehouse");
const importListRouter = require("./import");
const exportWhRouter = require("./export");
const authenRouter = require("./authen");
const branchRouter = require("./branch");
const reportRouter = require("./report");

function route(app) {
  app.use("/report", reportRouter);
  app.use("/branch", branchRouter);
  app.use("/exportwh", exportWhRouter);
  app.use("/importlist", importListRouter);
  app.use("/warehouse", warehouseRouter);
  app.use("/category", categoryRouter);
  app.use("/sell", sellRouter);
  app.use("/authen", authenRouter);
  app.use("/", homeRouter);
}

module.exports = route;
