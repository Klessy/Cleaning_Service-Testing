import { RiDoubleQuotesR } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import {BsPersonFill} from "react-icons/bs";
import {MdHomeRepairService} from "react-icons/md";
import {AiFillAppstore} from "react-icons/ai";
import {AiFillMessage} from "react-icons/ai";


import Carousel_1 from "./assets/carousel-1.jpg";
import Carousel_2 from "./assets/carousel-2.jpg";
import Carousel_3 from "./assets/carousel-3.jpg";

import Blog_2 from "./assets/blog-2.jpg";
import Window_1 from "./assets/window_cl2.jpg";
import Furnace_1 from "./assets/furnance_cl5.jpg";
import Confirned_1 from "./assets/confined_cl.jpg";

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
        desc: "Our Services: Specialized Cleaning, Chimney Cleaning, Window Cleaning.",
        img: Carousel_1,
        btn: "Get a Quote"
    },
    {
        id: 2,
        title: "Highly Professional Cleaning Services",
        desc: "With our meticulous attention to detail and commitment to customer satisfaction, we guarantee a cleaning experience like no other.",
        img: Carousel_2,
        btn: "Get a Quote"
    },
    {
        id: 3,
        title: "Experienced & Expert Cleaners",
        desc: "We can be your trusted partner in creating spotless environments for homes and businesses",
        img: Carousel_3,
        btn: "Get a Quote"
    }
]

const serviceSlider = [
    {
        id: 1,
        icon: <i className="fa fa-2x fa-spa"></i>,
        title: "Window cleaning",
        img: Window_1
    },
    {
        id: 2,
        icon: <i className="fa fa-2x fa-hotel"></i>,
        title: "Specialize cleaning",
        img: Blog_2
    },
    {
        id: 3,
        icon: <i className="fa fa-2x fa-city"></i>,
        title: "Chimney cleaning",
        img: Furnace_1
    },
    {
        id: 4,
        icon: <i className="fa fa-2x fa-hotel"></i>,
        title: "Confined space cleaning",
        img: Confirned_1
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
       desc: "Sparkle Cleaners did an amazing job cleaning my home! They were thorough, professional, and left everything spotless. Highly recommend!",
        testImg: Testimonial_1,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "Our office has never looked cleaner since hiring Sparkle Cleaners. Their attention to detail is unmatched!",
        testImg: Testimonial_2,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "As a busy professional, I don't have the time or energy to clean my apartment regularly. That's why I'm so grateful for Sparkle Cleaners. They take care of everything, and I always come home to a sparkling clean space. Thank you for making my life easier!",
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
       desc: "I was hesitant to hire a cleaning service at first, but Sparkle Cleaners exceeded all my expectations. They were thorough, efficient, and respectful of my home. I'll definitely be using their services again in the future.",
        testImg: Testimonial_5,
        name: "Parry Hotter",
        location: "Lagos"
    },
    {
       quote: <RiDoubleQuotesR />,
       desc: "I hired Sparkle Cleaners for a deep clean before hosting a party at my house, and I'm so glad I did. They transformed my home into a showroom-worthy space in just a few hours. My guests were impressed, and I couldn't have pulled it off without them. Thank you, Sparkle Cleaners",
        testImg: Testimonial_6,
        name: "Parry Hotter",
        location: "Lagos"
    },
]

const faqs = [
    {
      id: 1,
      question: "How often should I schedule a cleaning service?",
      answer: "It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there."
    },
    {
      id: 2,
      question: "What cleaning products do you use?",
      answer: "This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date."
    },
    {
      id: 5,
      question: "Do I need to provide any cleaning equipment?",
      answer: "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to."
    },
    {
      id: 4,
      question: "How much do you charge for Your service?",
      answer: "Once again, this depends. But my prices are affordable so you're good."
    },
    {
      id: 3,
      question: "What's your payment plan?",
      answer: "Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered."
    },
    {
      id: 6,
      question: "What if I am not satisfied with your service?",
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