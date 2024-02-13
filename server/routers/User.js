const express=require("express")
const Userrouter=express.Router();
const{register,signin}=require("../controller/User")
Userrouter.post("/api/users/register",register);
Userrouter.post("/api/users/signin",signin)
module.exports=Userrouter