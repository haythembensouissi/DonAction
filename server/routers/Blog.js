const {Sendblog,Allblogs, DeleteBlog}=require("../controller/Blog")
const express=require("express")
const Blogrouter=express.Router()
Blogrouter.post("/api/blog/add",Sendblog)
Blogrouter.get("/api/blog/get",Allblogs)
Blogrouter.delete("/api/blog/delete/:id",DeleteBlog)
module.exports=Blogrouter
