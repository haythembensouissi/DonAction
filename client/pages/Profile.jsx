"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../src/app/components/Navbar';
import { useCookies } from "react-cookie";

const Profile = ({ donations }) => {
  const [cookies] = useCookies(null);
  const [donation,setdonations]=useState([])
  const [blog,setblogs]=useState([])
  const [page,setpage]=useState("profile")
  const username = cookies.username;
  const email=cookies.email
  const getblogs=async ()=>{
    const res=await fetch("http://localhost:5000/api/blog/get")
    const blogs=await res.json()
    setblogs(blogs)
  }
  useEffect(()=>{
    getDonations()
    getblogs()
  }
  
  ,[])
const getDonations=async ()=>{
  const res = await fetch('http://localhost:5000/api/getdonations');
  const donations = await res.json();
  setdonations(donations)
}
  const DeleteDonation = async (id) => {
    try {
      
      const res =  await fetch(`http://localhost:5000/api/deletedonation/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
      getDonations()
      } else {
        console.error('Error deleting donation:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };
  
  const deleteBlog = async (id) => {
    try {
      
      const res =  await fetch(`http://localhost:5000/api/blog/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
      getblogs()
      } else {
        console.error('Error deleting blog', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting blog', error);
    }
  };
const filereddonations=donation.filter(donation=>donation.holdername==username)
const filteredblogs=blog.filter(blog=>blog.useremail==email)
  return (
    <div>
      <Navbar />
     
{page=="profile"?(
  <div>
  <h1 className='text-center'>Profile</h1>
  <button onClick={()=>setpage("blogs")}>view blogs</button>
  <button onClick={()=>setpage("donations")}>view donations</button>
  </div>)
  :page=="donations"?(<div>
    <button onClick={()=>setpage("profile")}>back</button>
    {filereddonations.map((donation, key) => (
      <div key={key}>
        <h2>{donation.amount}</h2>
        <h3>{donation.holdername}</h3>
        <button onClick={() => DeleteDonation(donation._id)}>Cancel Donation</button>
      </div>

    ))}
    </div>
  ):page=="blogs"?(
    <div>
    <button onClick={()=>setpage("profile")}>back</button>

    {filteredblogs.map((blog, key) => (
      <div key={key}>
        <h2>{blog.title}</h2>
        <h3>{blog.content}</h3>
        <button onClick={() => deleteBlog(blog._id)}>delete blog</button>
      </div>

    ))}
    </div>
    
  ):null
}
     
    
    </div>
  );
};
export default Profile;
