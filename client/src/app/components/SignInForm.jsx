"use client"
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import {motion} from "framer-motion"
const SignInForm = () => {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[error,seterror]=useState(null)
  const [cookies,setCookie,removeCookie]=useCookies(null)
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnimating(true); // Start animation
    try {
      console.log("Sending sign-in request...");
      const response = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      console.log("Received response:", response.status, data);
      if (response.ok) {
        console.log("Sign-in successful");
        setCookie("token", data.token);
        setCookie("email", data.email);
      } else {
        console.log("Sign-in failed:", data.message);
        seterror(data.message || "Failed to sign in");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      seterror("An unexpected error occurred");
    } finally {
      setIsAnimating(false); // Stop animation
    }
  };
  
  
  return (
    <motion.div 
    initial={{ x: 0 }}
    animate={{ x: isAnimating ? 100 : 0 }} 
    transition={{ duration: 0.5 }}
    className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          {/* Social icons can be placed here */}
        </div>
        <span>or use your email and password</span>
        <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Email" />
        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button onClick={(e)=>handleSubmit(e)}>Sign In</button>
        {error&&<p>{error}</p>}
      </form>
    </motion.div>
  );
};

export default SignInForm;
