
import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import "../style/service.css";


const pricingPlans = [
  {
    title: "Basic Plan",
    subtitle: "College Admission Counseling",
    image: "/plan1.png",
    price: "₹999",
    description:
      "Our experts will help you choose the right college and course, based on your interests and strengths. We guide you through the entire application process, including document preparation, entrance exam strategies, and interview preparation.",
  },
  {
    title: "Advanced Plan",
    subtitle: "Career Guidance & Mentorship",
    image: "/plan2.png",
    price: "₹4999",
    description:
      "We provide career counseling to help you make informed decisions about your professional future. Whether you're exploring various career paths or deciding on post-college opportunities, our mentors will provide the support you need.",
  },
  {
    title: "Premium Plan",
    subtitle: "Personalized Comprehensive Plans",
    image: "/plan3.png",
    price: "₹9999",
    description:
      "We provide end-to-end support, guiding you through every stage of the journey. From understanding application requirements and excelling in entrance exams to crafting winning admissions strategies, our expert mentorship ensures you stay on track.",
  },
];
const features = [
  {
    title: "STUDENT MENTORSHIP",
    image: "/service1.png",
    description: "Personalized guidance to help students identify their strengths, choose the right path, and excel in choosing their dream institution.",
  },
  {
    title: "PARENTAL COUNSELING",
    image: "/service2.png",
    description: "Equip parents with the insights and tools needed to support their child’s higher studies and emotional journey.",
  },
  {
    title: "COLLEGE & COURSE SELECTION",
    image: "/service3.png",
    description: "Expert advice to align choices with the student’s interests, skills, and career goals.",
  },
  {
    title: "COMPREHENSIVE PLANNING",
    image: "/service4.png",
    description: "Step-by-step guidance through application processes, presenting choices and admissions strategies.",
  },
  {
    title: "EMOTIONAL SUPPORT",
    image: "/service5.png",
    description: "Address concerns, build confidence, and reduce stress for students and parents alike during this critical time.",
  },
  {
    title: "COLLEGE SHORTLISTING",
    image: "/service6.png",
    description: "Get expert recommendations on institutions based on your preferences, academic performance, and career aspirations.",
  },
];

const Service = () => {
  return (
    <>
      <Navbar />

      <div className="service-container">
        
        <div className="columns">

          <div className="left-column">
            {/* Button */}
            <button className="plans-button">Go to PLANS</button>

            {/* Video Player */}
            <div className="video-container">
              <iframe
                className="video-player"
                src="https://www.youtube.com/watch?v=zhpcgpqWc1Q" 
                title="Video Player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="video-text">
                Prepare Smarter, Not Harder – Get Expert Guidance for CUET, JEE, NEET and More!
              </p>
            </div>
          </div>


          <div className="right-column">
            <div className="big-tile">

              <img src="/serviceintro.png" alt="Service Introduction" className="big-tile-image" />

              <div className="text-overlay">
                <h2>Guiding You Towards Your Dream College & Career</h2>
                <p>
                  Our counseling and mentorship services are designed to help you navigate the 
                  challenges of college admissions and chart a successful career path. Whether 
                  you’re aiming for top universities or exploring career opportunities, we provide 
                  personalized guidance every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-highlights">
          <div className="highlight-image">
            <img src="/serviceicon.png" alt="Service Highlights" />
          </div>
          <div className="highlight-text">
            <h2>SERVICE HIGHLIGHTS</h2>
            <p>
              We combine expertise, technology, and a student-first approach to ensure success 
              at every step of the journey.
            </p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-list">
            <div className="service-item">
              <img src="/servicetick.png" alt="Check" className="service-icon" />
              <span>Personalized Career Guidance</span>
            </div>
            <div className="service-item">
              <img src="/servicetick.png" alt="Check" className="service-icon" />
              <span>College Info Support</span>
            </div>
            <div className="service-item">
              <img src="/servicetick.png" alt="Check" className="service-icon" />
              <span>Counseling on Career Choices</span>
            </div>
            <div className="service-item">
              <img src="/servicetick.png" alt="Check" className="service-icon" />
              <span>Free Resources</span>
            </div>
            <div className="service-item">
              <img src="/servicetick.png" alt="Check" className="service-icon" />
              <span>Parent Counseling</span>
            </div>
          </div>

          <div className="services-buttons">
            <a href="/services" className="go-to-services">Go to Services →</a>
            <button className="faqs-button">FAQs</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <img src="/bookstack.png" alt="Experts" className="stat-icon" />
            <p>73+ EXPERTS & GUIDES</p>
          </div>
          <div className="stat-item">
            <img src="/degree.png" alt="Mentees" className="stat-icon" />
            <p>26,927+ MENTEES</p>
          </div>
          <div className="stat-item">
            <p>AVAILABLE IN ENGLISH AND HINDI</p>
          </div>
          <div className="stat-item">
            <img src="/refund.png" alt="Refund Policy" className="stat-icon" />
            <p>100% REFUND POLICY</p>
          </div>
        </div>
        <div className="service-highlights">
          <div className="highlight-image">
            <img src="/serviceicon.png" alt="Service Highlights" />
          </div>
          <div className="highlight-text">
            <h2>OUR COMBO PLANS</h2>
            <p>
            Whether you're just starting or looking for expert guidance, we’ve got you covered. Choose the plan 
            that suits your needs and start your journey toward success today!
            </p>
          </div>
        </div>
        <div className="pricing-section">
          {pricingPlans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <div className="price-badge">{plan.price}</div>
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <img src={plan.image} alt={plan.title} className="plan-image" />
              <p className="plan-description">{plan.description}</p>
              <button className="book-now-button">Book Now</button>
            </div>
          ))}
        </div>
        <div className="line-paragraph">
          <p>Here is all you need to know about our Counseling Services
             for all competitive entrance examinations.</p>
        </div>
        <div className="feature-section">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="read-more">READ MORE</a>
              </div>
            </div>
          ))}
        </div>
        <div className="signup-booknow-section">

          <div className="college-signup-card">
            <img src="/collegeimage.png" alt="College Banner" className="college-banner" />
            <div className="college-content">
              <p className="college-text">Dream BIG.<br/> Plan Smart.<br/> Succeed Faster.</p>
              <div className="college-badges">
                <img src="/CNS1.png" alt="NEST Logo" className="badge" />
                <img src="/cns3.png" alt="Approval Logo" className="badge" />
              </div>
              <button className="signup-button">Sign Up!</button>
            </div>
          </div>


          <div className="why-choose-box">
            <h3 className="why-title">Why choose us?</h3>
            <ul className="why-list">
              <li><img src="/servicetick.png" alt="Check" className="check-icon" /> Personalized Guidance</li>
              <li><img src="/servicetick.png" alt="Check" className="check-icon" /> Expert Counselors</li>
              <li><img src="/servicetick.png" alt="Check" className="check-icon" /> Data-Driven Insights</li>
              <li><img src="/servicetick.png" alt="Check" className="check-icon" /> Focus on Your Future</li>
              <li><img src="/servicetick.png" alt="Check" className="check-icon" /> Simplified Process</li>
            </ul>
            <button className="book-now-button">Book Now</button>
          </div>

        </div>
        <div className="about-us-section">

          <div className="about-text">
            <div className="about-header">
              <img src="/aboutus.png" alt="Info Icon" className="about-icon" />
              <h3 className="about-title">ABOUT US</h3>
            </div>
            <p className="about-welcome">Welcome User!</p>
            <p className="about-description">
              This is your trusted partner in navigating the complex world of career choices. 
              Our mission is to empower students to achieve their career-related path and help parents 
              guide their children toward a bright and successful future. <br/><br/>
              We offer personalized counseling, expert resources, and step-by-step guidance 
              to simplify your journey from exploring career options to securing admission in top universities. 
              Together, we aim to transform aspirations into achievements by making informed decisions, 
              one step at a time. <br/><br/>
              Your success is our priority, and we’re here to support you every step of the way!
            </p>
          </div>

          <div className="about-image">
            <img src="/about.png" alt="Counseling Illustration" />
          </div>

        </div>
        <div className="plan-inquiry">
          <p>
            <span className="plan-question">Which Plan is Right for You?</span>
            <span className="plan-text"> Need help deciding? <a href="/contact" className="contact-link">Contact us</a> for a free consultation.</span>
          </p>
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default Service;

