require("dotenv").config()
const express=require("express")
const app=express()
app.use(express.json())
const port=process.env.port;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
