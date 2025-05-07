const express = require("express");
const app = express();
const ConntectToDb = require("./config/db")
const cors = require('cors');
const cookieParser = require("cookie-parser")
const user = require("./router/user.router")
const admin = require("./router/admin.router")
ConntectToDb()

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello world");
});



app.use("/user",user)
app.use("/admin",admin)

app.listen(3000, () => {
  console.log("server connected on port 3000");
});
