const mongoose = require("mongoose")
require("dotenv").config()

const ConntectToDb = ()=>{
    mongoose.connect(process.env.MONGODBURL).then(()=>{
        console.log("Connected To Database")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = ConntectToDb