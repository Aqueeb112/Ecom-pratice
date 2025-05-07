const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "The firstname should be greater than 3 characters"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "The lastname should be greater than 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [6, "The email should be greater than 6 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  favourite: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
  cart: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
  orders: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
