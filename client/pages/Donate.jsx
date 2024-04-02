import React from 'react';
import DonationForm from '../src/app/components/DonationForm';;
import Navbar from '../src/app/components/Navbar'
const Donate = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <h1 className="text-3xl text-center text-red-600  py-2 px-4">Make a Donation</h1>
        <DonationForm />
      </div>
    );
};

export default Donate;
