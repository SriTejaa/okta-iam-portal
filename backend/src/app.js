const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/", routes);

app.use(notFound);

app.use(errorHandler);

app.use(requestLogger);

module.exports = app;