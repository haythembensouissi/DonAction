
"use client";
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ToggleForms from './components/toggleForms';
import  './components/styles.css';

const Page = () => {
  const handleSignUp = () => {
    console.log('Handling sign up...');
  };
 
  const handleSignIn = () => {
    console.log('Handling sign in...');
  };

  return (
    <div className="container">
      
      <ToggleForms handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
    </div>
  );
};

export default Page;
