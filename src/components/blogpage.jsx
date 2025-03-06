import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/blog.css"; // Import CSS for styling

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Existing Blog Image Section */}
      <div className="blog-container">
        <img src="/blogimage.png" alt="Blog Section" className="blog-image" />
      </div>

      {/* New Section - Blog Subscription */}
      <div className="blog-subscription-container">
        <h1 className="blog-title">INSIDE CAREER - STORIES AND BLOGS</h1>
        <p className="blog-subtext">
          Subscribe to learn about new career options, pathways, and updates.
        </p>

        {/* Subscription Box */}
        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      {/* Blog Section Container */}
      <div className="blog-section">
        
        {/* Left Side - Large Blog Post */}
        <div className="blog-left">
          <img src="/blog1.png" alt="Main Blog Post" className="blog-main-image" />
          <div className="blog-main-content">
            <p className="blog-author">Olivia Rhyne • 26 Jan 2025</p>
            <h2 className="blog-title">Choosing the Right Career Path After an Entrance Exam</h2>
            <p className="blog-description">
              Not getting into your dream college doesn’t mean the end of your career aspirations.
              Explore alternative options, career pathways, and success strategies to keep moving forward!
            </p>
            <div className="blog-tags">
              <span className="blog-tag">Career</span>
              <span className="blog-tag">Research</span>
              <span className="blog-tag">Interviews</span>
            </div>
          </div>
        </div>

        {/* Right Side - Three Smaller Blog Posts */}
        <div className="blog-right">
          <div className="blog-row">
            <img src="/blog2.png" alt="Blog 1" className="blog-thumb" />
            <div className="blog-text">
              <p className="blog-author">Sam Nealson • 18 Feb 2025</p>
              <h3 className="blog-heading">Science, Commerce, or Arts?</h3>
              <p className="blog-snippet">
                Confused about which stream to choose after 9th grade? We break down career 
                opportunities in Science, Commerce, and Arts, helping you make an informed decision...
              </p>
              <div className="blog-tags">
                <span className="blog-tag">Stream</span>
                <span className="blog-tag">After 9th</span>
              </div>
            </div>
          </div>

          <div className="blog-row">
            <img src="/blog3.png" alt="Blog 2" className="blog-thumb" />
            <div className="blog-text">
              <p className="blog-author">Rachael Krit • 12 Feb 2025</p>
              <h3 className="blog-heading">Cracked JEE/NEET. Confused about College?</h3>
              <p className="blog-snippet">
                Getting a good rank is just the beginning—choosing the right college and specialization matters just as much! 
                Learn how to evaluate your options for a successful future...
              </p>
              <div className="blog-tags">
                <span className="blog-tag">Entrance</span>
                <span className="blog-tag">College</span>
                <span className="blog-tag">Career</span>
              </div>
            </div>
          </div>

          <div className="blog-row">
            <img src="/blog4.png" alt="Blog 3" className="blog-thumb" />
            <div className="blog-text">
              <p className="blog-author">Jenna Samson • 30 Jan 2025</p>
              <h3 className="blog-heading">Top Careers in Science That You must Know</h3>
              <p className="blog-snippet">
                Love Science but don’t want to become a doctor or engineer? 
                Explore career paths in Biotechnology, Data Science, Astrophysics & more...
              </p>
              <div className="blog-tags">
                <span className="blog-tag">Science</span>
                <span className="blog-tag">Career</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* ======================== New Section - Three Tiles Side by Side ======================== */}
      <div className="blog-card-section">
        <div className="blog-card">
          <img src="/blog5.png" alt="Software Engineer" className="blog-card-img" />
          <p className="blog-author">Sarah August • 11 Feb 2025</p>
          <h3 className="blog-heading">Becoming a Software Engineer</h3>
          <p className="blog-snippet">
            Want to build the next big tech product? Learn how to become a software engineer, 
            the best programming languages to learn, and career opportunities in software development.
          </p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>

        <div className="blog-card">
          <img src="/blog6.png" alt="AI Expert" className="blog-card-img" />
          <p className="blog-author">Amanda Jo • 03 Feb 2025</p>
          <h3 className="blog-heading">How to Become an AI Expert</h3>
          <p className="blog-snippet">
            Artificial Intelligence is shaping the future, and AI experts are in high demand. 
            Learn the essential skills, top courses, and career opportunities in AI!
          </p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>

        <div className="blog-card">
          <img src="/blog7.png" alt="Data Scientist" className="blog-card-img" />
          <p className="blog-author">Richard Kins • 28 Jan 2025</p>
          <h3 className="blog-heading">Guide to become a Data Scientist</h3>
          <p className="blog-snippet">
            Data Science is one of the most in-demand careers today. Discover the key skills, 
            programming languages, and industry certifications you need to become a successful Data Scientist!
          </p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>
      </div>
      {/* ==================================================================================== */}
      <div className="wide-blog-container">
        <img src="/careercoun.png" alt="Career Counseling" className="wide-blog-image" />
        <div className="wide-blog-content">
          <p className="blog-author">Jenna Samson • 09 Feb 2025</p>
          <h2 className="wide-blog-title">Career Exploration for 10th/12th Graders: What Are Your Options?</h2>
          <p className="wide-blog-description">
            It’s never too early to start thinking about your career! Explore different career paths and industries 
            based on your interests. Not sure which stream to choose? We break down the career opportunities and future trends.
          </p>
          <div className="blog-tags">
            <span className="blog-tag">Career</span>
            <span className="blog-tag">Research</span>
            <span className="blog-tag">Interviews</span>
            <span className="blog-tag">Options</span>
            <span className="blog-tag">10th/12th</span>
          </div>
          <a href="#" className="wide-blog-link">↗</a>
        </div>
      </div>
      {/* ==================================================================================== */}
        {/* ======================== New Section - Another Three Tiles Side by Side ======================== */}
<div className="blog-card-section">
    <div className="blog-card">
        <img src="/blog8.png" alt="Pilot" className="blog-card-img" />
        <p className="blog-author">Sarah August • 11 Feb 2025</p>
        <h3 className="blog-heading">How to Become a Pilot</h3>
        <p className="blog-snippet">
            Dreaming of flying high? Here’s a complete guide on how to become a commercial pilot, 
            including eligibility, entrance exams, and training programs.
        </p>
        <a href="#" className="blog-read-more">Read More</a>
    </div>

    <div className="blog-card">
        <img src="/blog9.png" alt="Psychologist" className="blog-card-img" />
        <p className="blog-author">Amanda Jo • 03 Feb 2025</p>
        <h3 className="blog-heading">How to Become a Psychologist</h3>
        <p className="blog-snippet">
            Interested in understanding human behavior? Explore how to become a psychologist, 
            the different branches of psychology, and career opportunities in this field.
        </p>
        <a href="#" className="blog-read-more">Read More</a>
    </div>

    <div className="blog-card">
        <img src="/blog10.png" alt="Space Science" className="blog-card-img" />
        <p className="blog-author">Richard Kins • 28 Jan 2025</p>
        <h3 className="blog-heading">Career in Space Science & Astronomy</h3>
        <p className="blog-snippet">
            Space exploration is not just for astronauts! Learn how to enter the field of space science, 
            from astrophysics to aerospace engineering.
        </p>
        <a href="#" className="blog-read-more">Read More</a>
    </div>
</div>
{/* ==================================================================================== */}
<div className="wide-blog-container">
        <img src="/vfx.png" alt="Career Counseling" className="wide-blog-image" />
        <div className="wide-blog-content">
          <p className="blog-author">Becky Joseph • 20 Jan 2025</p>
          <h2 className="wide-blog-title">Career in Animation & VFX: How to Enter the Creative Industry</h2>
          <p className="wide-blog-description">
          Passionate about animation, gaming, and visual effects? Learn how to 
          start a career in animation and the best courses to pursue.
          </p>
          <div className="blog-tags">
            <span className="blog-tag">Design</span>
            <span className="blog-tag">VFX</span>
            <span className="blog-tag">Animation</span>
            <span className="blog-tag">Video Editing</span>
            <span className="blog-tag">Graphics</span>
            <span className="blog-tag">Career</span>
          </div>
          <a href="#" className="wide-blog-link">↗</a>
        </div>
      </div>
        {/* ======================== New Section - Expert Counseling ======================== */}
<div className="expert-counseling-section">
    {/* Left Content */}
    <div className="expert-counseling-left">
        <img src="/targeticon.png" alt="Target Icon" className="expert-icon" />
        <div className="expert-text">
            <h2>Unlock Your Full Potential with Expert Counseling</h2>
            <p>
                Are you feeling overwhelmed by entrance exams and college admissions? 
                Our expert counseling services are here to guide you every step of the way. 
                Whether you need help choosing the right exam, creating a study plan, 
                or finding the perfect college, we provide personalized support to help you succeed.
            </p>
        </div>
    </div>

    {/* Right Content */}
    <div className="expert-counseling-right">
        <img src="/target2icon.png" alt="Members Icon" className="expert2-icon" />
        <h3>Members & Collaborators</h3>
        <p>A huge network of experts work with us.</p>
        <button className="sign-up-button">Sign up now!</button>
    </div>
</div>
{/* ==================================================================================== */}

      <Footer />
    </>
  );
};

export default Blog;
