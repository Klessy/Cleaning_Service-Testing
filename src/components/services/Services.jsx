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
          <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
          <a href="https://github.com/klessy"><button className="learn__more">More Services</button></a>
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
