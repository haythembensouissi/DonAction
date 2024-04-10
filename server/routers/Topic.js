const {SendTopic,AllTopics}= require("../controller/Topic")
const express=require("express")
const Topicrouter=express.Router()
Topicrouter.get("/api/topic/get",AllTopics)
Topicrouter.post("api/topic/add",SendTopic)
module.exports=Topicrouter
