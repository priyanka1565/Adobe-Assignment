const express = require("express");
const mongoose = require("mongoose");
const connect = require("./connection/db.js");
const app = express();

const PORT = 8080
app.listen(PORT, async () => {
  try {
    connect.connect();
    console.log(`http://localhost:${PORT}`);
  } catch (err) {
    console.log("err : ", err);
  }
});
