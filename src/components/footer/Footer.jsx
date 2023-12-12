import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./footer.css";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const halfScreen = window.innerHeight;
      const isScrolled = window.scrollY > halfScreen;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrolled);
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="quick-access">
          <img src="white-logo.png" alt="logo" />
          <div className="pages-section">
            <a className="footer_nav_item" href="#">
              Home
            </a>
            <a className="footer_nav_item" href="#menu">
              Menu
            </a>
            <a className="footer_nav_item" href="#events">
              Events
            </a>
            <a className="footer_nav_item" href="#about-us">
              About Us
            </a>
            <a className="footer_nav_item" href="#contact-us">
              Contact Us
            </a>
          </div>
          <div className="copyright">
            <p>
              &copy; Copyright 2023 Monal Dining |{" "}
              <span>
                <a href="http://webxnep.com">By WebX</a>
              </span>
            </p>
          </div>
        </div>
        <div className="location-container">
          <h2>Contact Details</h2>
          <div className="single-location">
            <div className="icon">
              <Icon icon="mdi:location" className="custm-icon" />
            </div>
            <p>Samakhusi Chwok,Kathmandu</p>
          </div>

          <div className="single-location">
            <div className="icon">
              <Icon icon="mingcute:phone-fill" className="custm-icon" />
            </div>
            <p>01-46545442</p>
          </div>
          <div className="single-location">
            <div className="icon">
              <Icon icon="ion:mail" className="custm-icon" />
            </div>
            <p>support@webxnepal.com</p>
          </div>
        </div>
        <div className="footer-about-us">
          <div className="footer-about-us-head">
            <h2>About Us</h2>
            <p>
              We are Australian based restaurant mainly focusing on providing
              best foods with a good hospitality.
            </p>
          </div>
          <div className="footer-links">
            <div className="icon social_media_icon">
              <a href="http://facebook.com">
                <Icon icon="jam:facebook" className="custm-icon" />
              </a>
            </div>
            <div className="icon social_media_icon">
              <a href="http://instagram.com">
                <Icon icon="ri:instagram-fill" className="custm-icon" />
              </a>
            </div>
            <div className="icon social_media_icon">
              <a href="http://twitter.com">
                <Icon icon="simple-icons:x" className="custm-icon" />
              </a>
            </div>
          </div>
        </div>

        {scrolled && (
          <div className="go_up_to_home">
            <a href="#menu">
              <Icon icon="mingcute:up-fill" fontSize={30} />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
