"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000; //5s

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return `Number of connections::${numConnection}`;
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;
    console.log(`Active connections::${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection >= maxConnections - 10) {
      console.log(`Connection Overload detected!!!`);
    }
  }, _SECOND);
};
module.exports = {
  countConnect,
  checkOverload,
};
