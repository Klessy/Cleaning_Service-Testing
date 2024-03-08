import { RiDoubleQuotesR } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import {BsPersonFill} from "react-icons/bs";
import {MdHomeRepairService} from "react-icons/md";
import {AiFillAppstore} from "react-icons/ai";
import {AiFillMessage} from "react-icons/ai";


import Carousel_1 from "./assets/carousel-1.jpg";
import Carousel_2 from "./assets/carousel-2.jpg";
import Carousel_3 from "./assets/carousel-3.jpg";

import Blog_1 from "./assets/blog-1.jpg";
import Blog_2 from "./assets/blog-2.jpg";
import Blog_3 from "./assets/blog-3.jpg";

//Gallery Images
import Gallery_1 from "./assets/portfolio-1.jpg";
import Gallery_2 from "./assets/portfolio-2.jpg";
import Gallery_3 from "./assets/portfolio-3.jpg";
import Gallery_4 from "./assets/portfolio-4.jpg";
import Gallery_5 from "./assets/portfolio-5.jpg";
import Gallery_6 from "./assets/portfolio-6.jpg";

//Testinonial images
import Testimonial_1 from "./assets/testimonial-1.jpg";
import Testimonial_2 from "./assets/testimonial-2.jpg";
import Testimonial_3 from "./assets/testimonial-3.jpg";
import Testimonial_4 from "./assets/team-1.jpg";
import Testimonial_5 from "./assets/team-2.jpg";
import Testimonial_6 from "./assets/team-3.jpg";




export const navlinks = [
    {
        id: 1,
        title: 'Home',
        Link: '#'
    },
    {
        id: 2,
        title: 'About',
        Link: '#about',
    },
    {
        id: 3,
        title: 'Services',
        Link: '#services',
        // path: '/about',
    },
    {
        id: 4,
        title: 'Gallery',
        Link: '#gallery',
    },
    {
        id: 5,
        title: 'Contact',
        Link: '#contact',
    },
]

const dataSlider = [
    {
        id: 1,
        title: "Best Quality Solution In Cleaning",
        desc: "At Somakes Association LTD, we believe that architecture is more than just buildings.",
        img: Carousel_1,
        btn: "Get a Quote"
    },
    {
        id: 2,
        title: "Highly Professional Cleaning Services",
        desc: "We do Electrical / Mechanical drawings, LandScaping Building Project In all ramification",
        img: Carousel_2,
        btn: "Get a Quote"
    },
    {
        id: 3,
        title: "Experienced & Expert Cleaners",
        desc: "Land Acquisition, Properties managers. Learn More About Our Services",
        img: Carousel_3,
        btn: "Get a Quote"
    }
]

const serviceSlider = [
    {
        id: 1,
        icon: <i className="fa fa-2x fa-spa"></i>,
        title: "Home cleaning",
        img: Blog_1
    },
    {
        id: 2,
        icon: <i className="fa fa-2x fa-hotel"></i>,
        title: "Home cleaning",
        img: Blog_2
    },
    {
        id: 3,
        icon: <i className="fa fa-2x fa-city"></i>,
        title: "Home cleaning",
        img: Blog_3
    },
    {
        id: 4,
        icon: <i className="fa fa-2x fa-hotel"></i>,
        title: "Home cleaning",
        img: Blog_1
    },
]

const gallery = [
    {
        id: 1,
        img: Gallery_1
    },
    {
        id: 2,
        img: Gallery_2
    },
    {
        id: 3,
        img: Gallery_3
    },
    {
        id: 4,
        img: Gallery_4
    },
    {
        id: 5,
        img: Gallery_5
    },
    {
        id: 6,
        img: Gallery_6
    },
]

const Testimonials = [
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_1,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_2,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_3,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_4,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_5,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
        testImg: Testimonial_6,
        name: "Parry Hotter",
        location: "Lagos"
    },
]

const faqs = [
    {
      id: 1,
      question: "What do you need to start working on my project?",
      answer: "It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there."
    },
    {
      id: 2,
      question: "How long will my project take to complete?",
      answer: "This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date."
    },
    {
      id: 5,
      question: "Is hosting and domain registration inclusive in your pricing?",
      answer: "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to."
    },
    {
      id: 4,
      question: "How much do you charge for an average website or app?",
      answer: "Once again, this depends. But my prices are affordable so you're good."
    },
    {
      id: 3,
      question: "What's your payment plan?",
      answer: "Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered."
    },
    {
      id: 6,
      question: "What if the project doesn't turn out good?",
      answer: "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best."
    }
  ]

  const mobileNav = [
    {id: 1, link: '#', icon: <AiFillHome />},
    {id: 2, link: '#about', icon: <BsPersonFill />},
    {id: 3, link: '#services', icon: <MdHomeRepairService />},
    {id: 4, link: '#gallery', icon: <AiFillAppstore />},
    {id: 5, link: '#contact', icon: <AiFillMessage />}
]



export {
    dataSlider,
    serviceSlider,
    gallery,
    Testimonials,
    faqs,
    mobileNav
}