import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact-us">
      <div className="contact-container">
        <div className="top-container">
          <h1>Book Now</h1>
          <p>We are always at your service</p>
        </div>
        <div className="bottom-container">
          <div className="topic">
            <h2>Reserve Now</h2>
            <p>Every Guest is Special here</p>
            <hr className="line" />
          </div>

          <div className="input-section">
            <div className="single-input">
              <p>Name</p>
              <input type="text" required placeholder="Name" />
            </div>
            <div className="single-input">
              <p>Email</p>
              <input type="text" required placeholder="Email" />
            </div>
            <div className="single-input">
              <p>Date</p>
              <input type="date" required />
            </div>
            <div className="single-input">
              <p>Time</p>
              <input type="time" required />
            </div>
            <div className="single-input">
              <p>Persons</p>
              <input type="number" required placeholder="Number of People" />
            </div>
          </div>
          <button className="reservation-button"> Make a Reservation </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
