// @ts-nocheck

const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Hyun:yhkwon0820%23@boilerplate.kw5ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
