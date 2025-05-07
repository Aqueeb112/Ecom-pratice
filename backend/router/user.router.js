const express = require("express")
const router = express.Router()
const {check} = require("express-validator")
const UserController = require("../controller/user.controller")
const usermiddle = require("../middleware/auth.middleware");



router.post("/register", UserController.registerUser);
router.post("/loginuser", UserController.loginUser );
router.get("/get-user-data", usermiddle.userAuth,UserController.getUserProfile );


module.exports = router