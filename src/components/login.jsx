import React, { useState } from "react";
import "../style/login.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="header">
          <img src="/appicon.png" alt="Logo" className="logo" />
          <p className="signup-text">
            Don’t have an account? <a href="/">Sign up!</a>
          </p>
        </div>

        <div className="welcome-section">
          <h2>Welcome Back</h2>
          <p>Login into your account</p>
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
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-box password-box">
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            <img
              src={showPassword ? "/eye.png" : "/eye.png"}
              alt="Toggle Password"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="remember-recover">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/" className="recover-password">Recover Password</a>
        </div>

        <button className="login-btn">Log In</button>
      </div>

      <div className="right-section">
        <img src="/login.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default LoginPage;
