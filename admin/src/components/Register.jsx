import React, { useState } from "react";
import { signUp } from "../api/api.service";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await signUp({
        name,
        email,
        password,
      });
      if (response.data) {
        toast.success("Register successfully");
        dispatch(register(response));
        navigate("/login");
      } else {
        toast.error(response.response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='register flex h-[100vh] w-full'>
      <form
        onSubmit={registerUser}
        className='flex flex-col justify-center mx-auto w-[500px] border-[1px] rounded-lg shadow-lg bg-white my-auto h-[400px] px-6 gap-4'
      >
        <h1 className='text-2xl font-semibold self-center'>Sign Up</h1>
        <div className='flex flex-col gap-2'>
          <label className='text-[1rem] text-blue font-medium'>Name</label>
          <input
            type='text'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className='outline-none border-[1px] border-gray-400 rounded-md pl-3 py-1'
          />
        </div>
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
            autoComplete='current-password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='outline-none border-[1px] border-gray-400 rounded-md pl-3 py-1'
          />
        </div>

        <Link to='/login' className='w-fit flex gap-1'>
          <span className='text-[0.8rem] underline w-fit'>
            Already have an account?
          </span>
          <span className='text-[0.8rem]'>Sign In</span>
        </Link>

        <button
          type='submit'
          className='bg-red px-3 py-2 rounded-lg flex justify-center items-center outline-none text-white font-semibold'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
