const mongoose=require("mongoose")
const BlogModel=require("../models/Blog")
const Sendblog=(req,res)=>{
    const {title,content,useremail}=req.body;
    try {
        const Blog=new BlogModel({
            _id:new mongoose.Types.ObjectId(),
            title:title,
            content:content,
            useremail:useremail,
            
        })
        Blog.save().then(results=>{
            return res.status(201).json({results})
        })
    } catch (error) {
        
    }

}
const Allblogs= async (req,res)=>{
    try {
        BlogModel.find({}).then(blogs=>res.status(200).json(blogs))
      
    } catch (error) {
        
    }
}
module.exports={Sendblog,Allblogs}