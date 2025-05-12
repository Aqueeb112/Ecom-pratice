let bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const adminService = require("../service/admin.service");
const adminModel = require("../models/admin.model");
const jwt = require("jsonwebtoken");

module.exports.registeradmin = async (req, res) => {
  try {
    const { fullname, email, password,address,mobnumber } = req.body;

    if (fullname.firstname?.length < 3) {
      return res
        .status(400)
        .json({ message: "The firstname should be greater than 3" });
    }
    if (fullname.lastname?.length < 3) {
      return res
        .status(400)
        .json({ message: "The lastname should be greater than 3" });
    }
    if (password.length < 3) {
      return res
        .status(400)
        .json({ message: "The password should be greater than 3" });
    }
    if (mobnumber.length < 8) {
      return res
        .status(400)
        .json({ message: "The password should be greater than 3" });
    }
    if (email.length < 3) {
      return res
        .status(400)
        .json({ message: "The email should be greater than 3" });
    }
    if (email.length < 4) {
      return res
        .status(400)
        .json({ message: "The email should be greater than 3" });
    }

    const existingUser = await adminService.findAdminByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email Already exist" });
    }

    const hashpassword = await adminService.hashpass(password);
    const user = await adminService.createUser({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashpassword,
      address,
      mobnumber,
    });
    return res.status(200).json({ message: "Signup Successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await adminModel.findOne({ email }).select("+password");
    if (!existingUser) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      const authClaim = {
        id: existingUser.id,
        email: existingUser.email,
        role: existingUser.role,
      };
      const token = jwt.sign({ authClaim }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      return res.status(200).json({
        id: existingUser._id,
        role: existingUser.role,
        token: token,
        message: "Login Successfully",
      });
    } else {
      return res.status(400).json({ message: "Invalid Username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

module.exports.getadminProfile = async (req, res) => {
  try {adminModel
    let { id } = req.headers;
    let data = await adminModel.findById(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
