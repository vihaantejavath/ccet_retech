import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const menuItems = ["HOME", "SERVICES", "TESTIMONIAL", "BLOGS", "CONTACT US"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <span className="logo-text">Counselling FOR YOU</span>
        </div>

       
        <div className="user-options">
          <span className="user-placeholder">👤</span>
          <button className="auth-button" onClick={() => window.location.href='/signin'}>Sign In</button>
          <button className="auth-button" onClick={() => window.location.href='/signup'}>Sign Up</button>
        </div>
      </div>

     
      <div className="navbar-bottom">
        <div className="menu">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`menu-item ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
