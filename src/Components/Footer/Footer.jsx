import React from "react";
import Logo2 from "../../Assets/Images/logo2.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container innerWidth flex flex-col justify-cnenter items-center'>
        <Link to='/'>
          <img src={Logo2} alt='logo' width={200} className='mt-[2.5rem]' />
        </Link>

        <span className='tracking-widest text-center innerWidth'>
          Creating memorable moments, one sip at a time.
        </span>

        <div className='list mt-10 mb-7 flex justify-between items-center w-[26rem] font-bold'>
          <Link
            to='/events'
            className='transition-all duration-300 ease-in hover:text-orange'
          >
            Events
          </Link>
          <Link
            to='/menu'
            className='transition-all duration-300 ease-in hover:text-orange'
          >
            Menu
          </Link>
          <Link
            to='/contact'
            className='transition-all duration-300 ease-in hover:text-orange'
          >
            Contact
          </Link>
        </div>

        <div className='address flex justify-between items-center text-sm mb-2 text-grey font-semibold flex-wrap w-[34rem]'>
          <span className="text-center">118 Stephen St., Lemont, IL, United States, Illinois</span>
          <span>+1 630-312-8152</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
