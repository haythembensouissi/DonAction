const {Donate}=require("../controller/Donation")
const express=require("express")
const Donationrouter=express.Router()
Donationrouter.post("/api/donate",Donate)
module.exports=Donationrouter
