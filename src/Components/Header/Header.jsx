import React from "react";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { createItem, getAllItems } from "../../services/api.service";

const Header = () => {
  return (
    <div className='header-wrapper padding innerWidth bg-[#000000]'>
      <div className='text-[#8c8c8c] flex justify-between items-center text-sm my-3'>
        <span>118 Stephen St., Lemont, IL, United States, Illinois</span>
        <span>+1 630-312-8152</span>
      </div>

      <div className='header-container text-xl flex justify-between items-center row-gap-2rem py-1 px-0'>
        <Link to='/' className='flex items-center'>
          <img src={Logo} alt='logo' width={110} />
          <span className='font-irish-grover text-[#ffffff] w-[135] text-30'>
            Hughie's Irish Pub
          </span>
        </Link>

        <div className='nav-menu text-[#ffffff]'>
          <Link to='/events'>Events</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='nav-right text-[#ffffff]'>
          <Link to='/cart'>
            <BsCart />
          </Link>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
          <button
            onClick={() => {
              createItem({
                name: "Dan",
                image: "no no",
                description: "lalalalalaal",
                price: 0,
              });
              getAllItems();
            }}
          >
            click me here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
