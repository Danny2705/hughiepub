import React, { useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Assets/Images/contact.png";
import "./ContactPage.css";
import Eating from "../../Assets/Images/eating.png";
import Header from "../../Components/Header/Header";
import emailjs from "emailjs-com"; // Import emailjs-com instead of emailjs/browser
import Resume from "../../Components/Resume/Resume";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const form = useRef();
  const form2 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Use the sendForm function from emailjs-com
    emailjs
      .sendForm(
        "service_a9vdkmn",
        "template_ievxc3p",
        form.current,
        "deE0O9l3s7UyYCN63"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendContact = (e) => {
    e.preventDefault();

    // Use the sendForm function from emailjs-com
    emailjs
      .sendForm(
        "service_fbpmzob",
        "template_4v3mefu",
        form2.current,
        "deE0O9l3s7UyYCN63"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          <form
            ref={form}
            onSubmit={sendEmail}
            className='bg-yellow flex flex-col justify-start items-center w-[31.25rem] mx-auto py-[4rem] border border-black'
          >
            <h2 className='text-blue font-bold text-center'>
              Event Scheduling
            </h2>
            <div className='flex flex-col gap-[1rem] mr-[4rem]items-center mt-[2rem] mb-[3rem]'>
              <input
                type='text'
                name='name'
                placeholder='Enter your name:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
                requied
              />
              <input
                type='text'
                name='email'
                placeholder='Enter your email:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
                required
              />
              <input
                type='text'
                name='user_event_date'
                placeholder='Proposed event date:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
                required
              />
              <input
                type='text'
                name='messages'
                placeholder='Event details:'
                className='detail placeholder-black pb-[10rem]  outline-none pl-3 w-[20rem] pt-3'
                required
              />
              <input
                type='submit'
                value='Reserve'
                className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto cursor-pointer mt-[1rem]'
              />
            </div>
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
          <form
            ref={form2}
            onSubmit={sendContact}
            className='bg-yellow flex flex-col justify-start items-center w-[31.25rem] mx-auto py-[4rem] border border-black'
          >
            <h2 className='text-blue font-bold text-center px-[3rem]'>
              Experience the Perfect Blend of Delicious Food and Tasty Beer.
              Contact Us!
            </h2>
            <div className='flex flex-col gap-[1rem] mr-[4rem]items-center mt-[2rem] mb-[3rem]'>
              <input
                type='text'
                name='user_name'
                placeholder='Enter your name:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
                required
              />
              <input
                type='text'
                name='user_email'
                placeholder='Enter your email:'
                className='pl-3 placeholder-black outline-none w-[20rem]'
                required
              />
              <input
                type='text'
                name='message'
                placeholder='Leave a message:'
                className='detail placeholder-black pb-[10rem]  outline-none pl-3 w-[20rem] pt-3'
                required
              />
              <input
                type='submit'
                value='Subscribe'
                className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto cursor-pointer'
              />
            </div>
          </form>
        </div>
        <div className='evt-form job-apply bg-white py-[2rem] px-[9rem] innerWidth'>
          <Resume />
        </div>
        <Footer color='bg-black' textColor='text-white' />
      </div>
    </div>
  );
};

export default ContactPage;
