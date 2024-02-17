import React from 'react';

const SignUpForm = () => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          {/* Social icons can be placed here */}
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="F-Name" />
        <input type="text" placeholder="L-Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Number" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
