
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from 'swiper/modules';


import "./testimonial.css";
import { Testimonials } from "../../data"

const Testimonial = () => {

  return (
    <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h5 className="font__header">Reviewed by People</h5>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <Swiper
             slidesPerView={1}
             spaceBetween={30}
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
            <div className="all-testimonials">
              {
                Testimonials.map((testimonials) => {
                  const {quote, desc, testImg, location, name} = testimonials;
                  return(
                    <SwiperSlide key = {testImg}>
                    <div className="all-testimonials__box" data-aos = "fade-in">
                      <span className="quotes-icon">
                        {quote}
                      </span>
                      <p>{desc}</p>
                      <div className="all-testimonials__box__name">
                        <div className="all-testimonials__box__name__profile">
                          <img src={testImg} alt={desc} />
                          <span>
                            <h4>{name}</h4>
                            <p>{location}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                  )
                })
              }
                
            </div>
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
