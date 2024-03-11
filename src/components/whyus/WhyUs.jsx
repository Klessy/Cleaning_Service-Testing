import React from 'react';

import Feature from "../../assets/feature.jpg";


import "./whyus.css"

const WhyUs = () => {
  return (

    <section className="why__section">
        <div className="why__container container">
            <div className="whyus__text">
                <h5>Why Choose Us</h5>
                <h2>25 Years Experience In Cleaning Industry</h2>
                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore porro saepe ipsa? Beatae enim blanditiis culpa laborum? Quisquam repudiandae perspiciatis molestiae placeat est blanditiis quos repellat porro dicta ex?</p>
                <div className="whyus__items">
                    <div className="whyus__item">
                        <h1 className="text-secondary mb-2" data-toggle="counter-up">225</h1>
                        <h6 className="font-weight-semi-bold mb-sm-4">Our Cleaners</h6>
                    </div>
                    <div className="whyus__item">
                        <h1 data-toggle="counter-up">1050</h1>
                        <h6 className="font-weight-semi-bold mb-sm-4">Happy Clients</h6>
                    </div>
                    <div className="whyus__item">
                        <h1 className="text-secondary mb-2" data-toggle="counter-up">2500</h1>
                        <h6 className="font-weight-semi-bold mb-sm-4">Projects Done</h6>
                    </div>
                    </div>
            </div>
            <div className="whyus__img-con">
                <div className="whyus__img">
                    <img src={Feature} alt="Featured Best Cleaning Service"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs