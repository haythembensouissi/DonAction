const mongoose=require("mongoose")
const BlogSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    title:{type:String},
    content:{type:String},
    useremail:{type:String}
    
    
})
const BlogModel=mongoose.model("Blogs",BlogSchema)
 module.exports=BlogModel