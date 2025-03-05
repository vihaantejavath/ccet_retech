import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />


      <div className="contact-container">

        <div className="contact-left">
          <div className="circle-group">
            <img src="/circle1.png" alt="Circle 1" className="circle" />
            <img src="/circle2.png" alt="Circle 2" className="circle" />
            <img src="/circle3.png" alt="Circle 3" className="circle" />
          </div>
          <p className="contact-text">
            Have questions or need personalized guidance? We’re here to help! Reach out today and let us assist 
            you on your journey to academic success. Whether it’s about our services, counseling sessions, or any 
            inquiries, our team is just a click away. We look forward to connecting with you!
          </p>
        </div> 

        <div className="contact-center">
          <h1 className="contact-heading">CONTACT US</h1>
          <div className="underline"></div>
          <p className="contact-subtext">Get in Touch with Us</p>
        </div>

        <div className="contact-right">
          <img src="/followus.png" alt="Contact Page Image" className="contact-full-image" />
        </div>
      </div>  


      <div className="contact-us-box">
        <img src="/contactimage.png" alt="Contact Icon" className="contact-us-icon" />
        <div className="contact-us-text-box">
          <h1 className="contact-us-title">CONTACT US</h1>
          <p className="contact-us-subtext">We're Here to Help!</p>
        </div>
      </div>

      <div className="contact-info-section">
        <p className="contact-info-text">
          Whether you have questions, need expert advice or want to explore 
          collaboration opportunities, we’d love to hear from you.
        </p>

        <div className="contact-details">
          <h3 className="contact-heading2">General Inquiries</h3>
          
          <p className="contact-detail">
            <img src="/email.png" alt="Email" className="contact-icon-small" />
            Email: support@careercounseling.com
          </p>
          
          <p className="contact-detail">
            <img src="/phone.png" alt="Phone" className="contact-icon-small" />
            Phone: +123-456-7890
          </p>
          
          <p className="contact-detail">
            <img src="/location.png" alt="Address" className="contact-icon-small" />
            Address: Sunrise Colony, West District, New Delhi, India
          </p>
        </div>
        <div className="contact-team-section">
        <h3 className="contact-heading">Connect with Our Team</h3>

        <p className="contact-team-text">
          Customer Support: customersupport@careercounseling.com
        </p>
        <p className="contact-team-text">
          Business Inquiries: business@careercounseling.com
        </p>
        <p className="contact-team-text">
          Media Relations: media@careercounseling.com
        </p>

        <p className="contact-response-time">
          We aim to respond within <strong>24-48 hours.</strong>
        </p>
      </div>

            <div className="contact-follow-box">
        <h3 className="contact-follow-heading">Follow Us</h3>

        {/* Social Media Icons */}
        <div className="social-icons">
          <img src="/instaicon.png" alt="Instagram" className="social-icon" />
          <img src="/facebookicon.png" alt="Facebook" className="social-icon" />
          <img src="/linkedinicon.png" alt="LinkedIn" className="social-icon" />
          <img src="/xicon.png" alt="Twitter/X" className="social-icon" />
        </div>


        <h3 className="contact-follow-heading">Office Hours</h3>
        <p className="contact-office-hours">
          Monday to Friday: 9:00 AM – 6:00 PM (Local Time)
        </p>

        <p className="contact-assist-text">
          Looking forward to assisting you!
        </p>
      </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;

