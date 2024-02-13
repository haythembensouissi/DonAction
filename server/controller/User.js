const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const UserModel = require("../models/User");
const  register=async (req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        const salt=bcrypt.genSaltSync(10)
        const hashedpwd=bcrypt.hashSync(password,salt)
    const user=new UserModel({
        _id:new mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:email,  
            password:hashedpwd,
            phonenumber:req.body.phonenumber
    })
    user.save().then((results)=>{
        return res.json(results)
        jwt.sign({email},"secret",{expiresIn:"24hr"})
    }).catch(e=>console.log(e))
    }
catch(e){
    console.log(e)
}
}
const signin= async (req,res)=>{
const {email,password}=req.body

UserModel.findOne({ email: email })
.then(async (user) => {
  if (!user) {
    // Handle case when user is not found
    return res.status(404).json({ message: 'User not found' });
  }

  const isPwdValid = await bcrypt.compare(password, user.password);
  if (isPwdValid) {
    const token = jwt.sign({ userid: user._id, firstname: user.firstname, email: user.email }, "secret", { expiresIn: "24hr" });
    return res.json({ userid: user._id, firstname: user.firstname, email: user.email, token: token });
  } else {
    return res.status(401).json({ message: 'Invalid password' });
  }
})
.catch(err => {
  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
});
  


}
module.exports={register,signin}