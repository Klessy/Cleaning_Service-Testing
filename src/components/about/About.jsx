import React from 'react';
import AboutImg from "../../assets/about.jpg";


import "./about.css";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="about__container container">
        <div className="about__img">
          <img src={AboutImg} alt="What you need to know about our cleaning services" />
        </div>
        <div className="about__us">
          <h5>LEARN ABOUT US</h5>
          <h2>We Provide The Best Cleaning Services</h2>
          <p>
            Asset support service limited is a company incorporated under the companies act 2006 of England and Wales to carry out support services to assets and facilities.
            Our cleaning services range from specialized cleaning, chimney cleaning, surface, and underground tank cleaning (confined space cleaning), window cleaning, plant, and machinery cleaning.
          </p>
          <p>
            We offer a pocket friendly quote to maximize the productivity and profitability of your assets and facilities.
            We proud ourselves with enthusiastic, dedicated, agile and professional work force  with years of industry experience with clean disclosure and barring certificate.
          </p>
          <a href="#contact"><button className="learn__more">Contact us now to get a quote.</button></a>
        </div>
      </div>
    </section>
  )
}

export default About
