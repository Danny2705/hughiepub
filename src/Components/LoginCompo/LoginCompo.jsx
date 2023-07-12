import React from "react";
import { Link } from "react-router-dom";

const LoginCompo = () => {
  return (
    <div>
      <div className='login-title text-3xl font-bold'>Login To Your Account</div>

      <form>
        <div>
          <label htmlFor='text'>Email: </label>
          <input type='text' placeholder='abc@gmail.com' />
        </div>

        <div>
          <label htmlFor='password'>Password: </label>
          <input type='password' />
        </div>
      </form>

      <Link
        to='/'
        className='bg-red px-4 py-1 rounded-md items-center uppercase text-[1rem] font-[600] transition-all duration-300 ease-in hover:scale-110'
      >
        Log In
      </Link>
    </div>
  );
};

export default LoginCompo;
