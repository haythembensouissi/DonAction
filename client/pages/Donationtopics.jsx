
import React, { useEffect, useState } from 'react';
import DonationCard from "../src/app/components/DonationCard";


 export default function DonationTopic() {
  const [donationCards,SetDonationCards]=useState([])
  const getData=async()=>{
    const res=await fetch('http://localhost:5000/api/topic/get')
    const data=await res.json()
    SetDonationCards(data)
  }
useEffect(()=>getData(),[])
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {donationCards.map((card, index) => (
        <DonationCard  index={card._id}  title={card.title} description={card.description} image={card.image} totalDonation={card.totalDonation} />
      ))}
    </div>
  );
}

