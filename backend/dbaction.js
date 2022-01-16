const mongoose = require("mongoose");
const order = require("./model/order");

const createorder = (orderDetails) => {
  console.log("connected to DB");
  console.log(orderDetails);
  neworder = new order(orderDetails);
  neworder.save();
};

module.exports = createorder;
