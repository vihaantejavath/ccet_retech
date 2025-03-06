import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/testimonial.css"; // Import CSS

const testimonials = [
  {
    name: "Ankit Verma",
    role: "NEET Candidate",
    review:
      "The guidance I received from the Counsellors was truly life-changing! It made my career choice much easier.",
    rating: "4.98",
    image: "/review1.png",
  },
  {
    name: "Riya Sharma",
    role: "Student",
    review:
      "After 9th, I was confused about whether to take PCB or PCM. The counseling session helped me understand my future opportunities in both fields, making my decision so much easier!",
    rating: "4.93",
    image: "/review2.png",
  },
  {
    name: "Shalini Jha",
    role: "NEET Aspirant",
    review:
      "I was debating between engineering and management after my entrance exam, and the expert counselors provided clarity based on my skills and interests. I'm so grateful for their guidance!",
    rating: "4.96",
    image: "/review3.png",
  },
  {
    name: "Arjun Malhotra",
    role: "JEE Candidate",
    review:
      "The career guidance helped me choose the right path and pick my dream college. It was the best advice!",
    rating: "4.95",
    image: "/review4.png",
  },
];

const Testimonial = () => {
  return (
    <>
      <Navbar />

      {/* Testimonial Header Section */}
      <div className="testimonial-header">
        <h1 className="testimonial-title">TESTIMONIAL.</h1>
        <div className="underline"></div>
      </div>



      {/* Right-Side Buttons */}
      <div className="testimonial-buttons">
        <button className="testimonial-btn">Reviews</button>
        <button className="testimonial-btn">Success Stories</button>
        <button className="testimonial-btn dark-btn">Book Now</button>
      </div>

      {/* Top Reviews Section */}
      <div className="top-reviews-container">
        <div className="top-reviews">
          <img src="/reviewicon.png" alt="Review Icon Left" className="review-icon left-review-icon" />
          <h2 className="review-heading">TOP REVIEWS</h2>
          <img src="/3circles.png" alt="Review Icon Right" className="review-icon right-review-icon" />
        </div>
        <p className="review-subtext">Take a look at reviews from our users.</p>
        <p className="student-subtext">Hear from the Students who connected with us ...</p>
      </div>

      {/* Scrollable Testimonial Section */}
      <div className="testimonial-scroll-container">
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-review">"{testimonial.review}"</p>
              <p className="testimonial-name">— {testimonial.name},</p>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="rating">
                <img src="/listicon.png" alt="Rating Stars" className="rating-icon" />
                <span className="rating-score">{testimonial.rating}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
{/* First Image Section */}
<div className="testimonial-image-section">
        <img src="/testim.png" alt="Testimonial Section Image 1" className="testimonial-full-image" />
      </div>

      {/* Second Image Section */}
      <div className="testimonial-image-section">
        <img src="/textim2.png" alt="Testimonial Section Image 2" className="testimonial-full-image" />
      </div>
            {/* New Section: Career Journey Message */}
            <div className="career-journey-container">
        <h2 className="career-journey-text">All the best for your Career Journey!</h2>
        <div className="career-journey-underline"></div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonial;