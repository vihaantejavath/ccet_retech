import React from "react";
import "../style/signup.css";

const SignupPage = () => {
  return (
    <div className="signup-container">

      <div className="left-section">
        <img src="/signup.png" alt="Signup Illustration" className="background-image" />
        <img src="/appicon.png" alt="Icon" className="floating-icon" />
      </div>


      <div className="right-section">

        <div className="signin-text">
          <p>Have an account? <a href="/">Sign in!</a></p>
        </div>

        <div className="signup-title">
          <h2>Get Started With MAKER</h2>
          <p>Getting started is easy</p>
        </div>

        <div className="social-login">
          <button className="social-btn google-btn">
            <img src="/google.png" alt="Google" /> Google
          </button>
          <button className="social-btn facebook-btn">
            <img src="/facebookicon.png" alt="Facebook" /> Facebook
          </button>
        </div>

        <div className="divider">
          <hr className="line" />
          <span>Or continue with</span>
          <hr className="line" />
        </div>

        <div className="input-fields">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <button className="signup-btn">Create Account</button>

        <p className="terms-text">
          By continuing you indicate that you read and agreed to the <a href="/">Terms of Use</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
