import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import "./styles.css"
import {motion} from "framer-motion"
import { useSession, SessionProvider, signIn } from 'next-auth/react';

const ToggleForms = () => {
  const [login, setLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const viewLogin = (status) => {
    setLogin(status);
    setIsAnimating(prev => !prev);
  }

  const handleGoogleSignIn = () => {
    signIn('google'); // Sign in with Google
  }

  return (
    <div>
      {login ? (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isAnimating ? -400 : 0}}
          transition={{ duration: 0.5 }}
        >
          <SignInForm/>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isAnimating ? 400 : 0}}
          transition={{ duration: 0.5 }}
        >
          <SignUpForm/>
        </motion.div>
      )}
      
      <motion.div
        className="toggle-container"
        initial={{ x: 0, background: "linear-gradient(to right, #C33764, #1D2671)"}}
        animate={{ x: isAnimating ? -380 : 0, background: isAnimating ? "linear-gradient(to right, #C33764, #1D2671)" : "linear-gradient(to left, #00a1ff, #00ff8f)"}}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="toggle">
          <motion.div className="toggle-panel toggle-right">
            {!login ? (
              <div>
                <h1>Welcome, Friend!</h1>
                <p>Enter your personal details to use all of site features</p>
              </div>
            ) : (
              <div>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
              </div>
            )}
            <button onClick={() => viewLogin(!login)}>{login ? <h2>Sign up</h2> : <h2>Sign in</h2>}</button>
            <button onClick={async()=>await signIn("google")}>Sign in with Google</button> {/* Add Google sign-in button */}
          </motion.div>
          <div className="toggle-panel toggle-left">
            <button onClick={() => viewLogin(!login)}>Sign In</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToggleForms
