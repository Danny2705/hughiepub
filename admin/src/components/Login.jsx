import React from "react";
import { useState } from "react";
import { login } from "../api/api.service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/authSlice";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await login({ email, password });
      if (response.data) {
        toast.success("Login successfully");
        dispatch(logIn({ user: response.data, token: response.token }));

        navigate("/");
      } else {
        toast.error(response.response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='login flex h-[100vh] w-full'>
      <form
        onSubmit={loginUser}
        className='flex flex-col justify-center mx-auto w-[500px] border-[1px] rounded-lg shadow-lg bg-white my-auto h-[400px] px-6 gap-4'
      >
        <h1 className='text-2xl font-semibold self-center'>Sign In</h1>
        <div className='flex flex-col gap-2'>
          <label className='text-[1rem] text-blue font-medium'>Email</label>
          <input
            type='text'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className='outline-none border-[1px] border-gray-400 rounded-md pl-3 py-1'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[1rem] text-blue font-medium'>Password</label>
          <input
            type='password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='outline-none border-[1px] border-gray-400 rounded-md pl-3 py-1'
          />
        </div>

        <Link to='/register' className='w-fit flex gap-1'>
          <span className='text-[0.8rem] underline w-fit'>
            Don't' have an account?
          </span>
          <span className='text-[0.8rem]'>Sign Up</span>
        </Link>

        <button
          type='submit'
          className='bg-red px-3 py-2 rounded-lg ease-inflex justify-center items-center outline-none text-white font-semibold mt-3'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
