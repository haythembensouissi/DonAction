// DonationForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Donation.module.css';

const DonationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    // For demo purposes, I'm just setting the submitted state to true
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
            <input id="name_field" className={styles.input_field} type="text" name="input-name" title="Input title" placeholder="Enter your full name" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="card_number_field" className={styles.input_label}>Card Number</label>
            <input id="card_number_field" className={styles.input_field} type="number" name="input-name" title="Input title" placeholder="0000 0000 0000 0000" />
            <label htmlFor="card_number_field" className={styles.input_label}>Amount</label>
            <input id="card_number_field" className={styles.input_field} type="number" name="input-name" title="Input title" placeholder="feel free !" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="expiry_cvv_field" className={styles.input_label}>Expiry Date / CVV</label>
            <div className={styles.split}>
              <input id="expiry_field" className={styles.input_field} type="text" name="expiry-date" title="Expiry Date" placeholder="01/23" />
              <input id="cvv_field" className={styles.input_field} type="number" name="cvv" title="CVV" placeholder="CVV" />
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
