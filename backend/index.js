const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const createorder = require("./dbaction");

const port = 3002;
mongoose.connect("mongodb://localhost/order");
mongoose.connection
  .once("open", () => console.log("just connected to DB"))
  .on("error", (e) => console.log(e));

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("App is listening on port :", port);
});

// app.get("/", (req, res) => {
//   console.log("Hello");
//   res.send("HELLO IAM GET");
// });

app.post("/", (req, res) => {
  createorder(req.body);
  console.log(req.body);
  res.sendStatus(200);
});
