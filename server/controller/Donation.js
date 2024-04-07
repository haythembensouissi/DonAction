const mongoose=require("mongoose")
const DonationModel=require("../models/Donation")
const Donate=(req,res)=>{
    const {holdername,cardnumber,amount,expirydate,Cvv}=req.body;
    try {
        const Donation=new DonationModel({
            _id:new mongoose.Types.ObjectId(),
            holdername:holdername,
            cardnumber:cardnumber,
            amount:amount,
            expirydate:expirydate,
            Cvv:Cvv
        })
        Donation.save().then(results=>{
            return res.status(201).json({results})
        })
    } catch (error) {
        
    }

}
module.exports={Donate}