import React from "react";
import "./third.css";

const Third = () => {
  return (
    <div id="events">
      <div className="third-container">
        <div className="lefts-container">
          <h1>Gallery</h1>
          <p>Capturing a moment of your life.</p>
        </div>
        <div className="rights-container">
          <div className="container">
            <div class="image-gallery">
              <div class="column">
                <div class="image-item">
                  <img src="anni.jpg" alt="" />
                  <div class="overlay">
                    <span>Anniversary Surprise</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="image4.jpg" alt="" />
                  <div class="overlay">
                    <span>Foods</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="image2.jpg" alt="" />
                  <div class="overlay">
                    <span>Friends Gathering</span>
                  </div>
                </div>
              </div>
              <div class="column" id="first">
                <div class="image-item">
                  <img src="image1.jpg" alt="" />
                  <div class="overlay">
                    <span>Food is preparing</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="image5.jpg" alt="" />
                  <div class="overlay">
                    <span>Eating with Friends</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="image9.jpeg" alt="" />
                  <div class="overlay">
                    <span>Foods</span>
                  </div>
                </div>
              </div>
              <div class="column" id="second">
                <div class="image-item">
                  <img src="image7.jpg" alt="" />
                  <div class="overlay">
                    <span>Friends</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="dinner.jpg" alt="" />
                  <div class="overlay">
                    <span>Dinner</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="bd.jpg" alt="" />
                  <div class="overlay">
                    <span>Birthday Celebration</span>
                  </div>
                </div>
                <div class="image-item">
                  <img src="anni.jpg" alt="" />
                  <div class="overlay">
                    <span>Aniversary Celebration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
