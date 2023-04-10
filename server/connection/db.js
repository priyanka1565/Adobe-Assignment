MONGO_URL =
  "mongodb+srv://priya1565:<priya1565>@cluster0.a8zeihg.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
async function connect() {
  return mongoose
    .connect(
      "mongodb+srv://priya1565:priya1565@cluster0.a8zeihg.mongodb.net/user"
    )
}

module.exports = { connect };
