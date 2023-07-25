import { React, useState } from "react";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
//import { createItem, getAllItems } from "../../services/api.service";

const Header = ({ count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header-wrapper padding innerWidth bg-[#000000] overflow-hidden'>
      <div className='message text-[#8c8c8c] flex justify-between items-center text-sm mb-2 font-bold flex-wrap'>
        <span>118 Stephen St., Lemont, IL, United States, Illinois</span>
        <span>+1 630-312-8152</span>
      </div>

      <div className='header-container text-xl flex justify-between items-center gap-[2rem]'>
        <Link to='/' className='flex items-center justify-center w-56 gap-2'>
          <img src={Logo} alt='logo' width={110} className='logo' />
          <div className='font-irish-grover text-[#ffffff] items-center text-2xl'>
            Hughie's Irish Pub
          </div>
        </Link>

        <div className='nav flex items-center justify-between w-[600px]'>
          <div className='nav-menu text-[#ffffff] flex items-center gap-5 text-[1rem] uppercase font-[600] tracking-wider'>
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

          <div className='nav-right text-[#ffffff] flex items-center gap-5'>
            <Link to='/cart' className='relative'>
              <BsCart />
              <span className='absolute top-[-22px] right-0 text-[#ffae62] text-[0.9rem]'>
                {count}
              </span>
            </Link>
            <Link
              to='/reserve'
              className='bg-red px-4 py-1 rounded-md items-center uppercase text-[1rem] font-[600] transition-all duration-300 ease-in hover:scale-110'
            >
              Make a reservation
            </Link>
          </div>

          {/* <button
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
          </button> */}
        </div>

        <div
          className='menu-icon cursor-pointer text-white'
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {menuOpen && (
        <div className='nav-burger flex flex-col items-center justify-start absolute right-9 top-50 w-[12rem] bg-black h-[fit-content] py-5 rounded-xl border border-white z-50'>
          <div className='nav-menu text-[#ffffff] flex flex-col items-center gap-5 text-[1rem] uppercase font-[600] tracking-wider'>
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

          <div className='nav-right text-[#ffffff] flex flex-col items-center gap-4 justify-start mt-7'>
            <Link to='/cart' className='relative'>
              <BsCart />
              <span className='absolute bottom-2.5 right-0 text-[#ffae62] text-[0.9rem]'>
                {count}
              </span>
            </Link>
            <Link
              to='/reserve'
              className='bg-red px-1 py-1 rounded-md items-center uppercase text-[1rem] font-[600] transition-all duration-300 ease-in hover:scale-110 flex text-center'
            >
              Make a reservation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
