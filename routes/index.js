const sellRouter = require("./sell");
const homeRouter = require("./home");
const categoryRouter = require("./category");
const bookRouter = require("./book");

function route(app) {
  app.use("/book", bookRouter);

  app.use("/category", categoryRouter);
  app.use("/sell", sellRouter);
  app.use("/", homeRouter);
}

module.exports = route;
