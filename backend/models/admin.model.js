const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
  role: {
    type: String,
    default: "admin",
    enum: ["user", "admin"],
  },
  orders: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Admin", AdminSchema);
