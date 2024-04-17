"use client"
import React, { useState } from 'react'
import {useCookies} from "react-cookie"
import '../src/app/components/Blog.css'
import Navbar from '../src/app/components/Navbar'
function Blogging() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
const useremail=cookies.email
const [submitted, setSubmitted] = useState(false);
const [title,settitle]=useState("")
const [content,setcontent]=useState("")
const handleSubmit = async(e) => {
  e.preventDefault();
 const response=await fetch("http://localhost:5000/api/blog/add",{
  method:"POST",
  body:JSON.stringify({title,content,useremail}),
  headers:{"Content-Type":"application/json"}
 })
 const data=await response.json()
 if(response.ok){
  setcontent("")
  settitle("")
 }
  setSubmitted(true);
};
  return (
    <div>
    <Navbar />

    <div id="form-main">
    <div id="form-div">
      <form className="form" id="form1">
        
       
        
        <p className="email">
          <input value={title} onChange={e=>settitle(e.target.value)} name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Title" />
        </p>
        
        <p className="text">
          <textarea onChange={(e=>setcontent(e.target.value))} value={content} name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Content"></textarea>
        </p>
        
        
        <div className="submit">
          <input type="submit" value="SEND" onClick={(e)=>handleSubmit(e)} id="button-blue"/>
          <div className="ease"></div>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Blogging