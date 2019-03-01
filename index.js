const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(`mongodb://${process.env.DB_URL}/nodemongo`, {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  return res.send("hello world 3");
});

app.listen(3000);
