import React from "react";
import "./ContactInfo.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='contactInfo-wrapper'>
      <div className='contactInfo-container padding innerWidth flex flex-col justify-start items-center gap-4'>
        <h2 className='w-[25rem] font-[800] tracking-widest text-center text-xl mt-10'>
          Experience the Perfect Blend of <span className="text-red">Delicious Food</span> and
           Tasty Beer. Contact Us!
        </h2>

        <form className='form flex flex-col gap-5 text-start w-[25rem] my-5'>
          <input type='text' placeholder='Enter your name: ' className="px-3 py-2 border border-black w-full outline-none" />
          <input type='text' placeholder='Enter your email: ' className="px-3 py-2 border border-black outline-none"/>
          <input type='text' placeholder='Leave a message: ' className="px-3 pt-2 pb-[6.5rem] border border-black outline-none"/>
        </form>

        <Link
          to='/contact'
          className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110'
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default Contact;
