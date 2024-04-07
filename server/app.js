require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./db")
const cors = require("cors")
const userRouter = require("./routers/User")

app.use(cors())
app.use(express.json())

const port = process.env.Port; // Corrected to use "PORT" instead of "port"

app.use(userRouter)

app.get("/", () => {
    console.log("hello world")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
