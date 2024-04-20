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
        console.log(req.body)
    const user=new UserModel({
        _id:new mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:email,  
            password:hashedpwd,
            phonenumber:req.body.phonenumber,
            image:req.body.image
            

    })
    user.save().then((results)=>{
      
      const token=jwt.sign({email},"secret",{expiresIn:"24hr"})
     
        return res.json({results,token})
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
  
    return res.status(404).json({ message: 'User not found' });
  }

  const isPwdValid = await bcrypt.compare(password, user.password);
  
  if (isPwdValid) {
    const token = jwt.sign({ userid: user._id, firstname: user.firstname, email: user.email }, "secret", { expiresIn: "24hr" });

   
     return res.json({ userid: user._id, firstname: user.firstname, email: user.email,image:user.image, token: token });
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