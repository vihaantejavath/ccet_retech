import "../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
 
      <div className="footer-links">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Testimonials</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="footer-contact">
        <div className="footer-nav">
          <span>Home</span> | <span>Blogs</span> | <span>Sign Up</span>
        </div>
        <div className="social-icons">
          <img src="../twitter.png" className="icon1"/>
          <img src="../instagram.png" className="icon1"/>
          <img src="../social-media.png" className="icon"/>
          <img src="../linkedin.png" className="icon"/>
          <img src="../email.png" className="icon"/>
        </div>
        <p className="footer-text">Feel free to reach out to us.</p>
      </div>
    </footer>
  );
}
