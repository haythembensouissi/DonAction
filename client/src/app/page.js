
"use client";
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ToggleForms from './components/toggleForms';
import  './components/styles.css';
import Navbar from './components/Navbar';
import News from './news';
import newsitems from './components/newsitems';
const Page = () => {
  /**const handleSignUp = () => {
    console.log('Handling sign up...');
  };
 
  const handleSignIn = () => {
    console.log('Handling sign in...');
  };

  **/return (
    /**<div className="container">
      
      <ToggleForms handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
    </div>**/
    <div>
    <Navbar />
    <News/>
    </div>
  );
};

export default Page;
