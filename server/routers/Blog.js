const {Sendblog,Allblogs}=require("../controller/Blog")
const express=require("express")
const Blogrouter=express.Router()
Blogrouter.post("/api/blog/add",Sendblog)
Blogrouter.get("/api/blog/get",Allblogs)
module.exports=Blogrouter
