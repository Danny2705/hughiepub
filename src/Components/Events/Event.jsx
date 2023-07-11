import React from "react";
import Tournament from "../../Assets/Images/tournament.png";
import Live from "../../Assets/Images/live.png";
import { Link } from "react-router-dom";
import "./Event.css";

const Event = () => {
  return (
    <div className='event-wrapper bg-yellow'>
      <div className='event-container padding innerWidth'>
        <div className='event-title text-2xl font-bold text-red my-10'>
          Events
        </div>
        <div className='event-row flex items-start justify-center gap-10 flex-wrap  my-0 mx-auto'>
          <div>
            <img src={Tournament} alt='tournament' width={400} />
          </div>

          <div className='flex justify-center items-center'>
            <div className='flex items-start justify-center flex-col border-l-4 border-red gap-5 px-5 h-fit'>
              <div className='font-bold text-xl'>Cornhole Tournament</div>
              <div className='space-y-4 w-[17rem]'>
                <p>
                  Get ready for an exhilarating evening of friendly competition
                  and thrilling tosses at our Cornhole Tournament!
                </p>
                <p>
                  Mark your calendars for the exciting series of events starting
                  from October 27th and continuing every Thursday at 7pm.
                </p>
              </div>
              <Link
                to='/events'
                className='bg-red px-3 py-1.5 rounded-md justify-center my-0 mx-auto items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110'
              >
                View Event
              </Link>
            </div>
          </div>
        </div>

        <div className='event-row flex items-start justify-center gap-10 flex-wrap my-10'>
          <div>
            <img src={Live} alt='tournament' width={400} />
          </div>

          <div className='content flex justify-center items-center'>
            <div className='flex items-start justify-center  flex-col border-l-4 border-red gap-5 px-5 h-fit'>
              <div className='font-bold text-xl'>Live Acoustic Rock</div>
              <div className='space-y-4 w-[17rem]'>
                <p>
                  Prepare to be blown away by an electrifying night of live rock
                  music that will shake you to your core! Our venue is set to
                  host a mind-blowing spectacle that will leave you begging for
                  an encore.
                </p>
                <p>
                  Join us on Friday June 24th at 9:00 PM for an unforgettable
                  experience as we bring together the most explosive rock bands
                  in the industry.
                </p>
              </div>
              <Link
                to='/events'
                className='bg-red px-3 py-1.5 rounded-md justify-center my-0 mx-auto items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110'
              >
                View Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
