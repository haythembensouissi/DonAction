import React, { useEffect, useState } from 'react';
import DonationCard from "../src/app/components/DonationCard";

export default function DonationTopic() {
  const [donationCards, setDonationCards] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/topic/get');
      const data = await res.json();
      setDonationCards(data);
    } catch (error) {
      console.error('Error fetching donation data:', error);
    }
  };
  useEffect(() => {
    

    getData();

   
    return () => {
    
    };
  }, []); 

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {donationCards.map((card, index) => (
        <DonationCard
          key={index} // Add key prop to DonationCard component
          index={card._id}
          title={card.title}
          description={card.description}
          image={card.image}
          totalDonation={card.totalDonation}
        />
      ))}
    </div>
  );
}
