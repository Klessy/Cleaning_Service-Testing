import React from 'react';
import { FcAbout } from "react-icons/fc";

import AboutImg from "../../assets/about.jpg";


import "./about.css";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="about__container container">
        <div className="about__img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="about__us">
          <h5>LEARN ABOUT US</h5>
          <FcAbout />
          <h2>We Provide The Best Cleaning Services</h2>
          <p>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea lorem justo est dolor eos Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus labore minus error consectetur vel .</p>
          <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur asperiores rerum explicabo eligendi reprehenderit dicta corporis, animi omnis inventore quis officia quas fuga doloribus, officiis debitis nisi id molestiae vel?</p>
          <a href="#contact"><button className="learn__more">Learn More</button></a>
        </div>
      </div>
    </section>
  )
}

export default About
