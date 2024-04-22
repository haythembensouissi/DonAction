"use client"
import styles from "./Settings.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
export default function Settings({image}) {
  const[file,setfile]=useState(null)
  const [email,setemail]=useState("")
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [password,setpassword]=useState("")
  const [cookies,setCookie,removeCookie] = useCookies(null);
  const [img,setimage]=useState(image)
  const oldemail=cookies.email
  
const notify = () => {
  setemail("")
  setfirstname("")
  setlastname("")
  setfile(null)
  setpassword("")
  toast.success('success', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    //transition: Bounce,
    });
};
const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'donaction');

    // Upload image to Cloudinary
    const response1 = await fetch(
      `https://api.cloudinary.com/v1_1/de4q2fmk3/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response1.ok) {
      const data = await response1.json();
      console.log(data);
      setCookie('image', data.url);

      // Once image is uploaded, update user profile
      const response = await fetch(
        `http://localhost:5000/api/users/updateprofile/${oldemail}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
            image: data.url, // Use the uploaded image URL
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setCookie('email', responseData.email);
        setCookie('username', responseData.firstname);
        setCookie("image",responseData.image)
        notify();
        
      } else {
        console.error('Failed to update user profile');
      }
    } else {
      console.error('Image upload failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
useEffect(()=>{
  setimage(cookies.image)
},[image])

  return (
    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsTitleUpdate}>Update Your Account</span>
          <span className={styles.settingsTitleDelete}>Delete Account</span>
        </div>
        <form className={styles.settingsForm}>
          <label>Profile Picture</label>
          <div className={styles.settingsPP}>
            <img
              src={img}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className={styles.settingsPPIcon}></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className={styles.settingsPPInput}
              onChange={(e)=>setfile(e.target.files[0])}
            />
          </div>
          <label>firstname</label>
          <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} placeholder="name" name="name" />
          <label>lastname</label>
          <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="name" name="name" />
          <label>Email</label>
          <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Password" name="password" />
            <button className={styles.settingsSubmitButton} onClick={(e)=>handlesubmit(e)}>Update!</button>
            <ToastContainer
             
            />
        </form>
      </div>
    </div>
  );
}