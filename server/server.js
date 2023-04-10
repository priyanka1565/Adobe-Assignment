const express = require("express");
const mongoose = require("mongoose");
const connect = require("./connection/db.js");
const app = express();
const UserRouter = require("./routes/userRoute.js")
const UserPost = require("./routes/postRoute.js");
const User = require("./model/userModel.js");


app.use(express.json());
app.use("/userRouter", UserRouter);
app.use("/postRoute",UserPost)

app.listen(8080, async () => {
  try {
    connect.connect();
    console.log("http://localhost:8080");
  } catch (err) {
    console.log("err : ", err);
  }
});
