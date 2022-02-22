require("dotenv/config");
require("./db");
const express = require("express");

const app = express();
require("./config")(app);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const phonesRouter = require("./routes/phone.routes");
app.use("/api", phonesRouter);

require("./error-handling")(app);

module.exports = app;
