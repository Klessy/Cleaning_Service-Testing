import { serviceSlider } from '../../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

import "./services.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from 'swiper/modules';

const Services = () => {
 

  return (
    <section className="service__section" id="services">
      <div className="services__container container">
        <div className="about__our-services">
          <h5>OUR SERVICES</h5>
          <h2>Awesome Cleaning Services For You</h2>
          <ul className="what-we_offer">
            <li className="offers">
              <span className="offer_number">1</span>
              <h4>Home and Office cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">2</span>
              <h4>Hotel and care home cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">3</span>
              <h4>Facility cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">4</span>
              <h4>Tank and confined space cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">5</span>
              <h4>plant, and machinery cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">6</span>
              <h4>Chimney cleaning</h4>
            </li>
            <li className="offers">
              <span className="offer_number">7</span>
              <h4>Window cleaning</h4>
            </li>
          </ul>
          {/* <div className="more_service">
            <a href="#contact"><button className="learn__more">More Services</button></a>
          </div> */}
        </div>
        <Swiper
             slidesPerView={1}
             spaceBetween={10}
             breakpoints={{
               601: {slidesPerView: 1},
               1025: {slidesPerView: 2}       
             }}
             pagination= {{
               clickable: true,
             }}
             modules= {[Pagination, Autoplay]}
             autoplay= {true}
             className= "mySwiper"
            >
        <div className="owl-carousel about-our__services-img">
          {
            serviceSlider.map((service) => {
              const {id, icon, title, img} = service;
              return (
                <SwiperSlide key={img}>
                  <article key={id}>
                      <div className="service-carousel position-relative">
                          <div className="service__items">
                              <div className="icon-box">
                                  <i>{icon}</i>
                              </div>
                              <h5>{title}</h5>
                                <img src={img} alt={title} />
                          </div>
                      </div>
                  </article>
                </SwiperSlide>
              )
            })
          }
              {/* <div className="owl-nav">
                <div className="owl-prev"><i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div className="owl-next"><i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div> */}
        </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Services
