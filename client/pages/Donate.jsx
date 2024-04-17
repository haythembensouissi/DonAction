import React, { useState } from 'react';
import DonationTopic from './Donationtopics';
import Navbar from '../src/app/components/Navbar'
import DonationForm from './DonationForm.jsx';
import DonationCard from '../src/app/components/DonationCard.jsx';

const Donate = () => {
  const[page,setPage]=useState("mainpage");
  return (
  <div>
  <Navbar />
<div className="flex flex-col items-center justify-center min-h-screen">
<h1 className=" text-center text-red-700  py-2 px-4">Make a Donation</h1>
<p>The Palestine-Israel conflict is deeply entrenched in historical, territorial, and religious disputes, leading to ongoing humanitarian crises and cycles of violence. Donating to reputable organizations can provide vital aid to alleviate suffering among Palestinians affected by the conflict, support peacebuilding initiatives, address root causes, and advocate for a just resolution. Such contributions play a crucial role in mitigating human suffering and fostering hope for a more peaceful future in the region.</p>
<DonationCard />
</div>
</div>
    );

};

export default Donate;
