const mongoose=require("mongoose")
const UserSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:{type:String,required:true}
    
})
const UserModel=mongoose.model("users",UserSchema)
 module.exports=UserModel