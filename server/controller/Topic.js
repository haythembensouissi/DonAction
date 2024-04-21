const mongoose=require("mongoose")
const TopicModel=require("../models/Topic")
const UpdateTotal=(req,res)=>{

}
const SendTopic=(req,res)=>{
    const {title,content,useremail}=req.body;
    try {
        const Topic=new TopicModel({
            _id:new mongoose.Types.ObjectId(),
            title:title,
            content:content,
            useremail:useremail,
            
        })
        Topic.save().then(results=>{
            return res.status(201).json({results})
        })
    } catch (error) {
        
    }

}
const AllTopics= async (req,res)=>{
    try {
        TopicModel.find({}).then(Topics=>res.status(200).json(Topics))
      
    } catch (error) {
        
    }
}
module.exports={SendTopic,AllTopics}