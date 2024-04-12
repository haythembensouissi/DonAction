import React, { useState, useEffect } from 'react';
import Navbar from '../src/app/components/Navbar';
import Cookies from 'universal-cookie';
import './Profile.css'; 
const Profile = () => {
  const cookies = new Cookies();

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    image: '',
  });

  useEffect(() => {
   
    const savedUserData = cookies.get('userData');
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to cookies
    cookies.set('userData', userData, { path: '/' });
    // You can also send the data to a backend for further processing
    console.log('User data saved:', userData);
  };

  return (
    <div>
      <Navbar />
      <section className='profile-section'>
        <h1 className='profile-heading'>Profile</h1>
        {userData.image && <img src={userData.image} alt="User" className="profile-image" />}
        <form className='profile-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type="text"
              placeholder='First and Last Name'
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type="email"
              placeholder='Email'
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type="tel"
              placeholder='Phone Number'
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit'>Save</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
