const mongoose=require("mongoose")
const DonationModel=require("../models/Donation")
const Donate=(req,res)=>{
    const {holdername,cardnumber,amount,expirydate,Cvv,useremail}=req.body;
    try {
        const Donation=new DonationModel({
            _id:new mongoose.Types.ObjectId(),
            holdername:holdername,
            cardnumber:cardnumber,
            amount:amount,
            expirydate:expirydate,
            Cvv:Cvv,
            useremail:useremail
        })
        Donation.save().then(results=>{
            return res.status(201).json({results})
        })
    } catch (error) {
        
    }

}
const Alldonations= async (req,res)=>{
    try {
        DonationModel.find({}).then(donations=>res.status(200).json(donations))
      
    } catch (error) {
        
    }
}
const DeleteDonation = async (req, res) => {
    try {
        const result = await DonationModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Donation deleted successfully' });
        } else {
            res.status(404).json({ message: 'Donation not found' });
        }
    } catch (error) {
        console.error('Error deleting donation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports={Donate,Alldonations,DeleteDonation}