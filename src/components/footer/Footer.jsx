import React from 'react';
import FooterLogo from "../../assets/icons/ASS_cleaning_logo2.png";

import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer__section">
    <div className="container footer__container">
      {/* footer div all */}
      <div className="footer__items">
        {/* logo side */}
        <div className="footer__item-1">
          <img src={FooterLogo} alt="footer_logo" className="footer_logo" />
          <p className="footer__p-item-1 font__main">
          Our experts and well trained engineers will work with you to create a choice building 
          with a durability plan that helps you reach your specific goals.
          </p>
          {/* socials */}
          <div className="footer__socials">
            <i
              style={{ transition: "all 0.3s" }}
              className="fab fa-facebook-f footer__socials-icon"
            ></i>
            <i
              style={{ transition: "all 0.3s" }}
              className="fab fa-twitter"
            ></i>
            <i
              style={{ transition: "all 0.3s" }}
              className="fab fa-linkedin-in footer__socials-icon"
            ></i>
            <i
              style={{ transition: "all 0.3s" }}
              className="fab fa-instagram"
            ></i>
          </div>
          <p className="policy">
            Privacy Policy | © {new Date().getFullYear()} Somake Associates LTD <br />{" "}
            Design by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://eruteyapresh.netlify.app"
            >
             Presh
            </a>
          </p>
        </div>

        {/* middle div */}
        <div className="footer__item-2">
          <p className="footer__header-item-2 font__main">Quick Links</p>

          <span className="footer__underline"></span>

          {/* eslint-disable-next-line */}
          <a href='#' className="footer__links font__main">
           Home
          </a>
          <a href='#about' className="footer__links font__main">
            About
          </a>
          <a href='#gallery' className="footer__links font__main">
           Gallery
          </a>
          <a href='#works' className="footer__links font__main">
            Projects
          </a>
          <a href='#contact' className="footer__links font__main">
            Contact
          </a>
        </div>

        {/* right div */}
        <div className="footer__item-3">
          <p className="footer__header-item-3 font__main">Working Hours</p>

          <span className="footer__underline"></span>

          <p className="work-day font__main">
            Monday - Friday:
          </p>
          <p className="work-time font__main">
            7:00am - 21:00pm
          </p>
          <p className="work-day font__main">Saturday:</p>
          <p className="work-time font__main">
            7:00am - 19:00pm
          </p>
          <p className="work-day font__main ">
            Sunday - Closed
          </p>
        </div>

        {/* middle div */}
        <span></span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
