import React from "react";
import LoginCompo from "../../Components/LoginCompo/LoginCompo";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import Pic from '../../Assets/Images/loginpic.png'

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container innerWidth flex h-[100vh]">
        <div className="px-5 flex flex-1 flex-col items-start gap-[15rem]">
          <Link to='/' className='flex items-center justify-center w-56 gap-2'>
              <img src={Logo} alt='logo' width={120} className="logo"/>
              <div className='font-irish-grover text-[#ffffff] items-center text-2xl'>
                Hughie's Irish Pub
              </div>
            </Link>

            <div className="">
              <LoginCompo />
            </div>
        </div>

        <div className="right-pic flex-1">
          <img src={Pic} alt="store image" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Login;
