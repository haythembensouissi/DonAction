const express=require("express")
const Userrouter=express.Router();
const{register,signin, updateProfile}=require("../controller/User")
Userrouter.post("/api/users/register",register);
Userrouter.post("/api/users/signin",signin)
Userrouter.put("/api/users/updateprofile/:email",updateProfile)
module.exports=Userrouter