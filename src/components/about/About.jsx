import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="main_about_container">
        <div className="section-about-us" id="about-us">
          <h1>About Us</h1>
          <p>Listen to our story with US.</p>
        </div>
        <div className="about_content_area">
          <div className="about_left">
            <img src="chef3.jpg" alt="chef" className="about_image"/>
          </div>
          <div className="right">
            <h2>Best Food</h2>
            <p>From our chief</p>
            <span>
              The work is always in a full swing in our kitchen! Everyone here
              is on fire when it comes to cooking. The best cooks all over the
              world are gathered here together to create something really
              special to impress you deeply. The latest in cooking fashion, best
              recipes and fresh goods, this is the formula of our success.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
