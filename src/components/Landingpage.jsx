import React from "react";
import "../style/landingpage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <img className="side-img" src="./books.png" alt="books" />

      <div className="sub-container">
        <h2 className="header-content kdam-thmor-pro-regular">FREE RESOURCES</h2>
        <div className="underline"></div>
        <p className="content">Downloadable Content for Free!</p>
        <button className="get-started">GET STARTED</button>
      </div>

     
      <div className="buttons">
        <button className="btn">PDF Guides</button>
        <button className="btn">Checklists</button>
        <button className="btn">E-Books</button>
      </div>
    </div>
  );
};

export default LandingPage;
