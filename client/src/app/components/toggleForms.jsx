import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const ToggleForms = () => {
  const[login,setlogin]=useState(true)
  const handleSignUp = () => {
    console.log('Show Sign Up form');
  };

  const handleSignIn = () => {
    console.log('Show Sign In form');
  };

  return (
    <div>
    {login?<SignInForm/>:<SignUpForm/>}
 <div className="toggle-container">
 <div className="toggle">
   <div className="toggle-panel toggle-left">
   <h1>Welcome Back !</h1>
   <p>Enter your personal details to use all of site features</p>
   <button onClick={()=>setlogin(!login)}>Sign In</button>
   </div>
   <div className="toggle-panel toggle-right">
     <h1>Welcome, Friend!</h1>
     <p>Enter your personal details to use all of site features</p>
     <button onClick={()=>setlogin(!login)}>{login?<h2>sign up</h2>:<h2>sign in</h2>}</button>
   </div>
 </div>
</div>
 </div>
  );
};

export default ToggleForms;
