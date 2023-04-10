const express = require("express");
const mongoose = require("mongoose");
const connect = require("./connection/db.js");
const app = express();

app.listen(8080, async () => {
  try {
    connect.connect();
    console.log("server is running on");
  } catch (err) {
    console.log("err : ", err);
  }
});
