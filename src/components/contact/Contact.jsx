import { useEffect } from 'react';

// import AOS from "aos";
// import "aos/dist/aos.css";

import { useForm } from "react-hook-form";
// import { useRef } from 'react';
 

import './contact.css';

const Contact = () => {
  
  const form = useForm({
    date: new Date(),
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  //Error / Sucess Messages
  
  const submit = (data) => {
   
    
  }

  useEffect(() => {
    if(isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <section className="contact__section" id = "contact"  data-aos = "fade-up">
    <div className="container">
      {/* contact */}
      <div className="contact__container ">
        {/* first col */}
        <div className="first-col">
          <h2 className="">
          Lets help you bring Life to your dream Home
          </h2>
          <p className="font__main contact-desc">
          At Somake Associates Limited , we are dedicated to helping you achieve your dream 
          Architectural building design with its aesthetics that befits your choice. Our experts 
          and well trained engineers will work with you to create a choice building with a 
          durability plan that helps you reach your specific goals.
          </p>
          <div className="contact__items">
            <div className="contact__item">
              <h3>
                Nigeria
              </h3>
              <span className="underline"></span>
              <p className="">
                No 7 ayetoro street  
                <br /> <strong> Akure, Ondo state</strong>
              </p>
              <p className="">
              28/30 Royce road
                <br /> <strong> Owerri, Imo state.</strong>
              </p>
              <p className="">
              No 178 Ikot-Ekpene road
                <br /> <strong>Aba, Abia state.</strong>
              </p>
            </div>
            {/*  */}
            <div className="contact__item">
              <h3>Opening Hours</h3>
              <span className="underline"></span>
              <div className="">
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
              </div>
            </div>
            {/*  */}
            <div className="contact__item">
              <h3>Information</h3>
              <span className="underline"></span>
              <div>
                <p>+447 823 461 285</p>
                <p>&nbsp; gymat@gymail.com</p>
              </div>
            </div>
            {/*  */}
            <div className="contact__item">
              <h3>Follow Us On</h3>
              <span className="underline"></span>
              <div className="social_container-contact">
              <i className="fab fa-facebook-f contact_socials"></i>
              <i className="fab fa-twitter contact_socials"></i>
              <i className="fab fa-linkedin-in contact_socials"></i>
              <i className="fab fa-instagram contact_socials"></i>
              </div>
            </div>
          </div>
        </div>
        {/* second col ---*/}
        <form className="second-col" onSubmit = {handleSubmit(submit)} noValidate>
          <h2>Leave Us Your Info</h2>
          <div className="form-control">
            <input
              className="form-input"
              placeholder="Full Name *"
              id = "name"
              type="text"
              {...register("name",{
              required: {
                value: true,
                message: "Please kindly enter your name"
              },
            })}
            ></input>
           <p className='err-contact'>{errors.name?.message}</p>
          </div>
          <div className="form-control">
            <input
              className="form-input"
              id="email"
              placeholder="Email Address *"
              type="email"
              {...register("email",{
                pattern: {
                  value:
                  /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
                required: {
                  value: true,
                  message: "Enter Email"
                },
              })}
            ></input>
              <p className='err-contact'>{errors.email?.message}</p>
          </div>
            <div className="form-control">
              <input
                className="form-input"
                id="date"
                type="date"
                {...register("date", {
                  valueAsDate: true,
                })}
                />
            </div>
          <div className="form-control">
            <textarea
              placeholder="Comment"
              className="input-message"
              type = "message"
              id="message"
              {...register("message",{
                required: {
                  value: true,
                  message: "Tell us abuot it"
                },
              })}
            ></textarea>
             <p className='err-contact'>{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            className="form-btn"
          >
            submit now
          </button>
        </form>
      </div>
    </div>
      {/* map */}
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxfor28/30 Royce road owerri, imo stated&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen=""
        loading="lazy"
        samesite="Strict"
        title="map"
        style={{ width: "100%", height: "45rem", border: "0px" }}
      ></iframe>
      
  </section>
  )
}

export default Contact