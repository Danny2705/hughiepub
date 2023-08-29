import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../redux/authSlice";
import Logo from "../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "./Home.css";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header-wrapper padding innerWidth bg-[#000000] overflow-hidden'>
      <div className='message text-[#8c8c8c] flex justify-between items-center text-sm mb-2 font-bold flex-wrap'>
        <span>118 Stephen St, Lemont, IL, United States, Illinois</span>
        <span>+1 630-312-8152</span>
      </div>

      <div className='header-container text-xl flex justify-between items-center gap-[2rem]'>
        <Link to='/' className='flex items-center justify-center w-56 gap-2'>
          <img src={Logo} alt='logo' width={110} className='logo' />
          <div className='font-irish-grover text-[#ffffff] items-center text-2xl'>
            Hughie's Irish Pub
          </div>
        </Link>

        <div className='nav flex items-center justify-between'>
          <div className='nav-menu text-[#ffffff] flex items-center gap-5 text-[1rem] font-[600] tracking-wider'>
            <Link
              to='/create-event'
              className='transition-all duration-300 ease-in hover:text-orange'
            >
              Add Event
            </Link>
            <Link
              to='/create-menu'
              className='transition-all duration-300 ease-in hover:text-orange'
            >
              Add Menu
            </Link>

            <span className='text-yellow'> {user.name}</span>

            <button
              onClick={handleLogout}
              className='bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
            >
              Log Out
            </button>
          </div>
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
              to='/create-event'
              className='transition-all duration-300 ease-in hover:text-orange'
            >
              Add Event
            </Link>
            <Link
              to='/create-menu'
              className='transition-all duration-300 ease-in hover:text-orange'
            >
              Add Menu
            </Link>
            <span className='text-yellow'> {user.name}</span>
            <button
              onClick={handleLogout}
              className='bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
