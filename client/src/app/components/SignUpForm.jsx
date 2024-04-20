"use client"
import axios from 'axios';
import React, { useState } from 'react';
import {useCookies} from 'react-cookie'
import { useRouter } from 'next/router';
import { Image, Transformation } from 'cloudinary-react';
import './styles.css'
import PasswordStrengthMeter from './ProgressBar';
import {CldUploadWidget} from "next-cloudinary"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
const SignUpForm = () => {
  const cloudname="dheoor1qw"
  const[error,setError]=useState(null)
  const[firstname,setfirstname]=useState("")
  const[lastname,setlastname]=useState("")
  const[phonenumber,setphonenumber]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[confirmpassword,setconfirmpassword]=useState("")
  const [cookies,setCookie,removeCookie]=useCookies(null)
  const [image, setImage] = useState(cookies.image);
  const [file, setfile] = useState(null);

  const getPasswordStrength = (password) => {
    // Define your password strength criteria
    const strengthCriteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };

    // Count the number of fulfilled criteria
    const fulfilledCriteriaCount = Object.values(strengthCriteria).filter(Boolean).length;

    // Calculate strength based on the number of fulfilled criteria
    if (fulfilledCriteriaCount === 5) {
      return 'Strong';
    } else if (fulfilledCriteriaCount >= 3) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const calculateProgress = (password) => {
    const strengthCriteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };

      const fulfilledCriteriaCount = Object.values(strengthCriteria).filter(Boolean).length;

    const progress = (fulfilledCriteriaCount / 5) * 100;
    console.log("Progress:", progress);
  
    return progress;
  };


  const handlesubmit= async (e)=>{
    e.preventDefault();
    
    if(password!=confirmpassword){
      setError("make sure that passwords match")
    }
     else{
    
      const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'donaction'); 
    const response1 = await fetch(
      `https://api.cloudinary.com/v1_1/de4q2fmk3/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response1.ok) {
      const data = await response1.json();
      console.log(data)
   setCookie("image",data.url)
   
    } else {
      console.error('Upload failed');
    }
     
       const response=await fetch("http://localhost:5000/api/users/register",{
        method:"POST",
        body:JSON.stringify({firstname,lastname,email,password,phonenumber,image}),
        headers:{"Content-Type":"application/json"}
      })
      
      const data=await response.json()
      console.log(data)
      setCookie("token",data.token)
      setCookie("email",data.results.email)
      setCookie("username",data.results.firstname)
    }
     
   

    
    
  }
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'donaction'); 
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/de4q2fmk3/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data)
   setCookie("image",data.url)
    } else {
      console.error('Upload failed');
    }
  };
  return (
    <div className="form-container sign-in" style={{marginTop:"35%"}}>
    
      <form style={{position:"absolute"}}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
     
        <input onChange={(e)=>setfirstname(e.target.value)} value={firstname} type="text" placeholder="F-Name" />
        <input onChange={(e)=>setlastname(e.target.value)} value={lastname} type="text" placeholder="L-Name" />
        <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Email" />
        <input onChange={(e)=>setphonenumber(e.target.value)} value={phonenumber} type="text" placeholder="Number" />
        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <input  onChange={(e)=>setconfirmpassword(e.target.value) } value={confirmpassword} type="password" placeholder="Confirm Password" />
        <input type='file' onChange={(e)=>setfile(e.target.files[0])} placeholder='your file here'/>
        <Box sx={{ width: calculateProgress(password) }}>
  <LinearProgress  color={getPasswordStrength(password)=="Weak"?"error":getPasswordStrength(password)=="Medium"?"secondary":getPasswordStrength(password)=="Strong"?"success":"inherit"}/>
</Box>

      

        <PasswordStrengthMeter password={password}/>
  

        {error&&<p >{error}</p>}

        </form>
        <button style={{marginTop:"290px",marginLeft:"100px"}} id='signupbutton' onClick={(e)=>handlesubmit(e)} >Sign Up</button>
    </div>
  );
};

export default SignUpForm;
