const express = require("express")
const router = express.Router()
const adminController = require("../controller/admin.controller")
const usermiddle = require("../middleware/auth.middleware");



router.post("/registeradmin", adminController.registeradmin);
router.post("/loginadmin", adminController.loginAdmin );
router.get("/get-admin-data", usermiddle.adminAuth,adminController.getadminProfile );


module.exports = router