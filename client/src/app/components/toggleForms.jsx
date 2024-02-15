import React from 'react';

const ToggleForms = () => {
  const handleSignUp = () => {
    console.log('Show Sign Up form');
  };

  const handleSignIn = () => {
    console.log('Show Sign In form');
  };

  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back !</h1>
          <p>Enter your personal details to use all of site features</p>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome, Friend!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default ToggleForms;
