const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

// init routes

// handle errors

app.get("/", (req, res, next) => {
  const helloStr = "Hello World";
  return res
    .status(200)
    .json({ message: "Hello World", metadata: helloStr.repeat(1000) });
});

module.exports = app;
