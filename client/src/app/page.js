"use client";
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ToggleForms from './components/toggleForms';
import styles from './components/styles.css';

const Page = () => {
  const handleSignUp = () => {
    console.log('Handling sign up...');
  };

  const handleSignIn = () => {
    console.log('Handling sign in...');
  };

  return (
    <div className={styles.container}>
      {/* Render the Sign Up form */}
      <SignUpForm />

      {/* Render the Sign In form */}
      <SignInForm />

      {/* Render the ToggleForms component */}
      <ToggleForms handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
    </div>
  );
};

export default Page;
