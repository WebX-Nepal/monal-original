import React from "react";
import "./carousel.css";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  // color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
};

import eventContent from "./index";

const Carousels = () => (
  <>
    <div className="section-first">
      <h1>Our Events</h1>
      <p>Celebrate Every Event with us here.</p>
    </div>
    <div className="event-section">
      <div className="event-cards">
        {eventContent.map((card) => (
          <>
            <div className="card">
              <img src={card.image} alt="event" className="event-card-image" />
              <div className="event-card-conetnt">
                <h2 className="card-heading">{card.title}</h2>
                <p className="card-para">
                  {card.desc}
                </p>
                <button type="submit" className="bookNowButton">
                  Book Now
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
    {/* <Carousel>
      <div className="carousel-container">
        <div className="carousel">
          <div className="image-container">
            <img src="anni.jpg" />
          </div>
          <div className="text-container">
            <h2>Anniversary Celebration</h2>
            <p>
              "Get ready to party because [Name] is turning [Age]! We're hosting
              a birthday bash you won't want to miss. Join us for a memorable
              celebration as we mark a beautiful milestone in our journey
              together. Join us for an evening of fun, laughter, and delicious
              treats. Your presence would make this celebration extra special.
              Mark the date on your calendar and let's celebrate together!",and
              celebrate with us!and celebrate with us!
            </p>
            <button className="booking-button1">Book Now</button>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="image-container">
            <img src="baday.jpg" />
          </div>
          <div className="text-container">
            <h2>Birthday Celebration</h2>
            <p>
              {" "}
              Join us for a memorable celebration as we mark a beautiful
              milestone in our journey together. You're cordially invited to our
              anniversary celebration filled with love, laughter, and cherished
              memories. Let's come together to rejoice in the love that has
              grown stronger over the years. Your presence would make our
              special day complete. Please save the date and celebrate with us!
              and celebrate with us!and celebrate with us!
            </p>
            <button className="booking-button1">Book Now</button>
          </div>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          <div className="image-container">
            <img src="dinner.jpg" />
          </div>
          <div className="text-container">
            <h2>Dinner</h2>
            <p>
              {" "}
              "Please join us for an evening of delectable cuisine, great
              company, and lively conversation. great company, and lively
              conversation. We're hosting a dinner gathering and would be
              delighted to have you as our guest. Join us for a memorable
              celebration as we mark a beautiful milestone in our journey
              together. Your presence will add to the warmth of the evening.
              Save the date and let's savor the moments together!",
            </p>
            <button className="booking-button1">Book Now</button>
          </div>
        </div>
      </div>
    </Carousel> */}
  </>
);
export default Carousels;
