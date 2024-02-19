"use client";
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ToggleForms from './components/toggleForms';
import './components/styles.css';
import { useCookies } from 'react-cookie';
import { useSession, SessionProvider } from 'next-auth/react'; // Import useSession and SessionProvider
import {Auth} from "./components/toggleForms"
import Home from './Home';
const Page = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };

  const token = cookies.token;
  const email = cookies.email;

  return (
    
    <div>
    
      {token ? (
       
        <div>
          Welcome {email}
          <button onClick={() => signout()}>Sign out</button>
        </div>
      ) : (
       <Home/>
      )}
    </div>
  );
};

export default Page
