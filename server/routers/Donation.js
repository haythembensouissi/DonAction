const {Donate,Alldonations, DeleteDonation}=require("../controller/Donation")
const express=require("express")
const Donationrouter=express.Router()
Donationrouter.post("/api/donate",Donate)
Donationrouter.get("/api/getdonations",Alldonations)
Donationrouter.delete("/api/deletedonation/:id",DeleteDonation)
module.exports=Donationrouter
