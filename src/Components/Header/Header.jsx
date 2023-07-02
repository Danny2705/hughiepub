import React from "react";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-container text-xl flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>

        <div className='nav-menu'>
          <Link to='/events'>Events</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='nav-right'>
          <Link to='/cart'>
            <BsCart />
          </Link>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
