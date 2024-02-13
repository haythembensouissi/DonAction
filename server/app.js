require("dotenv").config()
const express=require("express")
const app=express()
const db=require("./db")
const cors=require("cors")
const userRouter=require("./routers/User")
app.use(express.json())
const port=process.env.port;
app.use(userRouter)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})
