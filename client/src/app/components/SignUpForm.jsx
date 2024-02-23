"use client"
import axios from 'axios';
import React, { useState } from 'react';
import {useCookies} from 'react-cookie'
import { useRouter } from 'next/router';
import { Image, Transformation } from 'cloudinary-react';

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
  const [image, setImage] = useState(null);
  
  const handlesubmit= async (e)=>{
    e.preventDefault();
    if(password!=confirmpassword){
      setError("make sure that passwords match")
    }
     else{ const response=await fetch("http://localhost:5000/api/users/register",{
        method:"POST",
        body:JSON.stringify({firstname,lastname,email,password,phonenumber}),
        headers:{"Content-Type":"application/json"}
      })
      const data=await response.json()
      console.log(data)
      setCookie("token",data.token)
      setCookie("email",data.results.email)
    }
     
   

    
    
  }
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'irc3renn'); 
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      setImage(data.secure_url);
    } else {
      console.error('Upload failed');
    }
  };
  return (
    <div className="form-container sign-in" style={{marginTop:"25%"}}>
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          {/* Social icons can be placed here */}
        </div>
        <span>or use your email for registration</span>
        <input onChange={(e)=>setfirstname(e.target.value)} value={firstname} type="text" placeholder="F-Name" />
        <input onChange={(e)=>setlastname(e.target.value)} value={lastname} type="text" placeholder="L-Name" />
        <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Email" />
        <input onChange={(e)=>setphonenumber(e.target.value)} value={phonenumber} type="text" placeholder="Number" />
        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <input onChange={(e)=>setconfirmpassword(e.target.value) } value={confirmpassword} type="password" placeholder="Confirm Password" />
      
        <button onClick={(e)=>handlesubmit(e)} >Sign Up</button>
        {error&&<p >{error}</p>}

      </form>
    </div>
  );
};

export default SignUpForm;
