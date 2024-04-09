"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Donation.module.css';
import { useCookies } from "react-cookie";

const DonationForm = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const name = cookies.username;
  const [submitted, setSubmitted] = useState(false);
  const [holdername, setholdername] = useState(name);
  const [cardnumber, setcardnumber] = useState("");
  const [amount, setamount] = useState("");
  const [expirydate, setexpirydate] = useState("");
  const [Cvv, setCvv] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/donate", {
      method: "POST",
      body: JSON.stringify({ holdername, cardnumber, amount, expirydate, Cvv }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    setholdername("");
    setcardnumber("");
    setamount("");
    setexpirydate("");
    setCvv("");
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.modal}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['payment--options']}>
          <button name="paypal" type="button" className={styles.paypalButton}>
            {/* SVG code for PayPal */}
          </button>
          <button name="apple-pay" type="button" className={styles.applePayButton}>
            {/* SVG code for Apple Pay */}
          </button>
          <button name="google-pay" type="button" className={styles.googlePayButton}>
            {/* SVG code for Google Pay */}
          </button>
        </div>
        <div className={styles.separator}>
          <hr className={styles.line} />
          <p>or pay using credit card</p>
          <hr className={styles.line} />
        </div>
        <div className={styles['credit-card-info--form']}>
          <div className={styles.input_container}>
            <label htmlFor="name_field" className={styles.input_label}>Card holder full name</label>
            <input onChange={(e) => setholdername(e.target.value)} value={holdername} id="name_field" className={styles.input_field} type="text" name="input-name" title="Input title" placeholder="Enter your full name" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="card_number_field" className={styles.input_label}>Card Number</label>
            <input value={cardnumber} onChange={(e) => setcardnumber(e.target.value)} id="card_number_field" className={styles.input_field} type="number" name="input-name" title="Input title" placeholder="0000 0000 0000 0000" />
            <label htmlFor="card_number_field" className={styles.input_label}>Amount</label>
            <input value={amount} onChange={(e) => setamount(e.target.value)} id="card_number_field" className={styles.input_field} type="number" name="input-name" title="Input title" placeholder="feel free !" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="expiry_cvv_field" className={styles.input_label}>Expiry Date / CVV</label>
            <div className={styles.split}>
              <input value={expirydate} onChange={(e) => setexpirydate(e.target.value)} id="expiry_field" className={styles.input_field} type="text" name="expiry-date" title="Expiry Date" placeholder="01/23" />
              <input id="cvv_field" value={Cvv} onChange={e => setCvv(e.target.value)} className={styles.input_field} type="number" name="cvv" title="CVV" placeholder="CVV" />
            </div>
          </div>
        </div>
        <button className={styles['purchase--btn']}>Donate Now</button>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.successMessage}
          >
            Donation submitted successfully!
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default DonationForm;
