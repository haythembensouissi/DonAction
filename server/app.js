require("dotenv").config()
<<<<<<< HEAD
const express = require("express")
const app = express()
const db = require("./db")
const cors = require("cors")
const userRouter = require("./routers/User")

=======
const express=require("express")
const app=express()
const db=require("./db")
const cors=require("cors")
const userRouter=require("./routers/User")
const Donationrouter=require("./routers/Donation")
const Blogrouter = require("./routers/Blog")
>>>>>>> upstream/main
app.use(cors())
app.use(express.json())

const port = process.env.Port; // Corrected to use "PORT" instead of "port"

app.use(userRouter)
<<<<<<< HEAD

app.get("/", () => {
=======
app.use(Donationrouter)
app.use(Blogrouter)
app.get("/",()=>{
>>>>>>> upstream/main
    console.log("hello world")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
