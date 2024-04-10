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
const DeleteBlog = async (req, res) => {
    try {
        const result = await BlogModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Blog deleted successfully' });
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error deleting Blog:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports={Sendblog,Allblogs,DeleteBlog}