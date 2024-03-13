import { useState } from 'react';
import Logo from "../../assets/icons/ASS_cleaning_logo.png";
import MoonIcon  from "../../assets/icons/sunny-filled-loop-to-moon-filled-loop-transition.svg";
import SunIcon from "../../assets/icons/moon-filled-to-sunny-filled-loop-transition.svg";
import { navlinks  } from '../../data';


import './nav.css';



const Nav = ({theme, toggleTheme}) => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("");
 
  // sticky navbar
  const handleScroll = () => {
    if(window.scrollY > 300) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
   <nav>
      {/* Topbar Start */}
      <div className='topbar__container'>
        <div className="flex__container-topbar">
          <div className="item_one">
            <div className="left">
              <a className='text-body' href="tel: +447823461285">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                +447 823 461 285
              </a>
              <a className='text-body' href="mailto:1@assetsupportservices.co.uk">
                <i className="fa fa-envelope-open text-primary me-2"></i>
                1@assetsupportservices.co.uk
              </a>
            </div>
          </div>
          <div className="text-end">
            <div className="terms_con .me-2">
              <a className='text-body' href="/">Terms</a>
              <a  href="/" className='text-body'>Privacy</a>
            </div>
            <div className="social_handles">
              <a className = "btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className = "btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-twitter"></i></a>
                <a className = "btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                <a className = "btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-instagram"></i></a>
                </div>
          </div>
        </div>
      </div>
       {/* Topbar End */}


    <div className={`nav__container ${sticky ? "sticky-top_remove" : ""}`}>
      <div className="navbar__img">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Building_and_planing-logo" className='company_logo'/>
        </a>
      </div>
      <ul className='navbar__links'>
        {
          navlinks.map((links) => {
            const {id, title, Link} = links;
            return(
              <li key={id} 
              className = {`${active === title ? "txt_active-primary" : "txt_active-secondary"}`} 
              onClick = {() => setActive(title)}>
                <a href={Link} className = 'font__main'>
                  {title}
                </a>
              </li>
              
            )
          })
        }
        {/* <button onClick={toggleTheme}>Toggle</button> */}
          
        <button className = "toggle-btn">
          <img src = {theme === "light-theme" ? SunIcon :  MoonIcon} alt = "Toggle theme"
          onClick={toggleTheme}
          />
        </button>
      </ul>
    </div>
   </nav>
  )
}

export default Nav