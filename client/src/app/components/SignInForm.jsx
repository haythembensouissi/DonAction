import React from 'react';

const SignInForm = () => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          {/* Social icons can be placed here */}
        </div>
        <span>or use your email and password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
