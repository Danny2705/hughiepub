import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Assets/Images/contact.png";
import "./ContactPage.css";
import Eating from "../../Assets/Images/eating.png";
import { BiUpload } from "react-icons/bi";

const ContactPage = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <Header />

        <div className='image-container innerWidth h-[75vh]'>
          <img
            src={Contact}
            alt='event'
            className='w-full h-full object-cover relative'
          />
          <span className='flex text-white text-[6rem] text-center absolute'>
            Contact Us
          </span>
        </div>

        <div className='evt-form bg-[#D9D9D9] padding innerWidth'>
          <form className='bg-yellow flex flex-col justify-start items-center w-[31.25rem] mx-auto py-[4rem] border border-black'>
            <h2 className='text-blue font-bold text-center'>
              Event Scheduling
            </h2>

            <div className='flex flex-col gap-[1rem] mr-[4rem]items-center mt-[2rem] mb-[3rem]'>
              <input
                type='text'
                placeholder='Enter your name:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
              />
              <input
                type='text'
                placeholder='Enter your email:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
              />
              <input
                type='text'
                placeholder='Proposed event date:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
              />
              <input
                type='text'
                placeholder='Event details:'
                className='detail placeholder-black pb-[10rem]  outline-none pl-3 w-[20rem] pt-3'
              />
            </div>

            <button className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto'>
              Reserve
            </button>
          </form>
        </div>

        <div className='image-container innerWidth h-[80vh]'>
          <img
            src={Eating}
            alt='eating'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='evt-form bg-[#D9D9D9] padding innerWidth'>
          <form className='bg-yellow flex flex-col justify-start items-center w-[31.25rem] mx-auto py-[4rem] border border-black'>
            <h2 className='text-blue font-bold text-center px-[3rem]'>
              Experience the Perfect Blend of Delicious Food and Tasty Beer.
              Contact Us!
            </h2>

            <div className='flex flex-col gap-[1rem] mr-[4rem]items-center mt-[2rem] mb-[3rem]'>
              <input
                type='text'
                placeholder='Enter your name:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
              />
              <input
                type='text'
                placeholder='Enter your email:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
              />
              <input
                type='text'
                placeholder='Leave a message:'
                className='detail placeholder-black pb-[10rem]  outline-none pl-3 w-[20rem] pt-3'
              />
            </div>

            <button className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto'>
              Subscribe
            </button>
          </form>
        </div>

        <div className='evt-form job-apply bg-white py-[2rem] px-[9rem] innerWidth'>
          <form className='flex flex-col justify-start w-[31.25rem] mx-auto py-[4rem]'>
            <h2 className='text-blue font-bold text-left'>
              Job Application Form
            </h2>

            <div className='flex flex-col gap-[1rem] mr-[4rem]items-center mt-[2rem] mb-[3rem]'>
              <input
                type='text'
                placeholder='Enter your name:'
                className='placeholder-black bg-yellow outline-none w-full pl-3'
              />
              <input
                type='text'
                placeholder='Enter your email:'
                className='placeholder-black bg-yellow outline-none w-full pl-3'
              />
              <div className='flex gap-3 btn-upload relative cursor-pointer'>
                <span class=' py-4 px-4 bg-blue-500 text-black cursor-pointer outline-none bg-yellow placeholder-black w-full flex items-center gap-3'>
                  <BiUpload className="text-lg"/> Resume Upload
                </span>
                <input
                  type='file'
                  class='py-2 px-4 focus:outline-none focus:border-blue-500 bg-yellow flex justify-end file-upload cursor-pointer'
                />
              </div>
              <input
                type='text'
                placeholder='Leave a message:'
                className='detail placeholder-black bg-yellow pb-[10rem]  outline-none w-full pt-3 pl-3'
              />
            </div>

            <button className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto'>
              Subscribe
            </button>
          </form>
        </div>

        <Footer color='bg-black' textColor='text-white'/>
      </div>
    </div>
  );
};

export default ContactPage;
