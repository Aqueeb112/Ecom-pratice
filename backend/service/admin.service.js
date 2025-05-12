
const adminModel = require("../models/admin.model");
let bcrypt = require("bcrypt");

const createUser = async ({ fullname, email, password }) => {
  if (!fullname?.firstname || !address || !password || !email ||!mobnumber  ) {
    throw new Error("All fields are required");
  }

  const user = await adminModel.create({
    fullname,
    email,
    password,
    address,
    mobnumber
  });

  return user;
};

const findAdminByEmail = async (email) => {
  return await adminModel.findOne({ email });
};

const hashpass = async (password)=>{
    return await bcrypt.hash(password, 4)
}

module.exports = {
  createUser,
  findAdminByEmail,
  hashpass
};



