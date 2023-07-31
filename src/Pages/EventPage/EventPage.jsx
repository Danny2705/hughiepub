import React from "react";
import Footer from "../../Components/Footer/Footer";
import Events from "../../Assets/Images/events.png";
import "./EventPage.css";
import events from "../../Data/Event";
import Calendar from "../../Components/Calendar/Calendar";
import Modal from "react-modal";
import Header from "../../Components/Header/Header";

Modal.setAppElement("#root");

const EventPage = () => {
  return (
    <div className='eventPage-wrapper'>
      <div className='eventPage-container'>
        <Header />
        <div className='image-container innerWidth h-[75vh]'>
          <img
            src={Events}
            alt='event'
            className='w-full h-full object-cover relative'
          />
          <span className='flex text-white text-[6rem] text-center absolute'>
            Upcoming Events
          </span>
        </div>
        <div className='eventList-container px-[9rem] py-[3rem] bg-yellow innerWidth flex flex-col justify-center'>
          <div className='w-full flex flex-col gap-[2rem] justify-between items-center'>
            {events.info.map((prop, i) => {
              return (
                <div
                  className='event-rows flex justify-between items-start mx-auto w-full gap-5'
                  key={i}
                >
                  <img
                    src={prop.image}
                    alt={prop.name}
                    width={350}
                    className='flex-1'
                  />
                  <div className='event-desc flex-1 flex flex-col  gap-[2rem]'>
                    <h2 className='text-right flex font-bold text-red items-center justify-end tracking-wider'>
                      <div className='w-[11rem] text-xl'>{prop.name}</div>
                    </h2>
                    <p className='flex items-center justify-end'>
                      <div className='text-lg'>{prop.desc}</div>
                    </p>
                    <button className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto'>
                      View Calendar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Calendar />
        </div>
        <Footer color='bg-black' textColor='text-white' />
      </div>
    </div>
  );
};

export default EventPage;
