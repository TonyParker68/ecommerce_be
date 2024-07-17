"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb://localhost:27017/shop`;

mongoose
  .connect(connectString)
  .then((_) => console.log(`Connect MongoDB success`))
  .catch((err) => console.log(`Error Connect!`));

module.exports = mongoose;
