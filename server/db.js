const mongoose=require("mongoose")
require("dotenv").config()
try {
    mongoose.connect(process.env.ConnectionUrl)
    console.log("connected")
    
} catch (error) {
    console.log(error)
}