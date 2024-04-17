const mongoose=require("mongoose")
const TopicSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    title:{type:String},
    description:{type:String},
    totalTopic:{type:Number},
    image:{type:String},
  
    
})
const TopicModel=mongoose.model("Topics",TopicSchema)
 module.exports=TopicModel