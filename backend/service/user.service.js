
const UserModel = require("../models/user.model");
let bcrypt = require("bcrypt");

const createUser = async ({ fullname, email, password, address }) => {
  if (!fullname?.firstname || !fullname?.lastname || !password || !email || !address || !mobnumber) {
    throw new Error("All fields are required");
  }

  const user = await UserModel.create({
    fullname,
    email,
    password,
    mobnumber
  });

  return user;
};

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const hashpass = async (password)=>{
    return await bcrypt.hash(password, 4)
}

module.exports = {
  createUser,
  findUserByEmail,
  hashpass
};



