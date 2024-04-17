const mongoose=require("mongoose")
const DonationSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    holdername:{type:String},
    cardnumber:{type:String},
    amount:{type:Number},
    expirydate:{type:Date},
    Cvv:{type:String},
    
    
})
const DonationModel=mongoose.model("Donations",DonationSchema)
 module.exports=DonationModel