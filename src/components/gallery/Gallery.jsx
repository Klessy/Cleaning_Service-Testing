import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { gallery } from '../../data';


import "./gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery__section">
      <div className="gallery__container container">
        {
          gallery.map(({id, img}) => (
            <div className="gallery__img" key={id}>
              <img src={img} alt="Welcome to our Gallery" />
              {/* <p className = "gallery__image-icon">My name</p> */}
              <div className="">
                <a href="https://github.com/klessy"><BsInstagram className = "gallery__image-icon" /></a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Gallery
