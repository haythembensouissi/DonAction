import React, { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const notify = (e) => {
    e.preventDefault();
    toast.success("thanks for your feedback", {
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
      setcontent("")
      setname("")
      setemail("")
  };
  
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [content,setcontent]=useState("")
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="name" className={styles.input} />
          <input onChange={(e)=>setemail(e.target.value)} value={email} type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            onChange={(e)=>setcontent(e.target.value)}
            placeholder="message"
            value={content}
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button className={styles.button} onClick={
              notify
            }>Notify!</button>
            <ToastContainer
          
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
