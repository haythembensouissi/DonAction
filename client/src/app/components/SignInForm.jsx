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

const handlesubmit=async (e)=>{
  e.preventDefault();
  const response=await fetch("http://localhost:5000/api/users/signin",{
    method:"POST",
    body:JSON.stringify({email,password}),
    headers:{"Content-Type":"application/json"}
  })
  const data=await response.json()
  console.log(data)
  if(data.message){
    seterror(data.message)
  }
  else{
    setCookie("token",data.token)
    setCookie("email",data.email)
  }
}
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
        <button onClick={(e)=>handlesubmit(e)}>Sign In</button>
        {error&&<p>{error}</p>}
      </form>
    </motion.div>
  );
};

export default SignInForm;
