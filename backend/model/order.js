const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderschema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderItems: {
    type: Array,
  },
});

const Order = mongoose.model("order", orderschema);

module.exports = Order;
