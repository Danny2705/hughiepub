import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { useState } from "react";
import "./AddEventCalendar.css";

export default function EventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onEventAdded({
      title,
      start,
      end,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='addModal w-[20rem] bg-yellow left-[8%] pb-6 absolute flex justify-center items-center rounded-xl'
    >
      <form
        onSubmit={onSubmit}
        className='flex flex-col justify-center items-center w-full form'
      >
        <div>
          <label className='flex items-center justify-center font-bold text-blue my-2'>
            Title
          </label>
          <input
            type='text'
            placeholder='Type the tile of the event'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='outline-none placeholder-black p-[0.25rem] rounded-lg flex mx-auto'
            required
          />
        </div>

        <div>
          <label className='flex items-center justify-center font-bold text-blue my-2'>
            Start Date
          </label>
          <Datetime
            value={start}
            required
            onChange={(date) => setStart(date)}
          />
        </div>

        <div>
          <label className='flex justify-center items-center font-bold text-blue my-2'>
            End Date
          </label>
          <Datetime value={end} required onChange={(date) => setEnd(date)} />
        </div>

        <button className='bg-red border-2 border-white px-3 py-1 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-105 flex mx-auto mt-2'>
          Add Event
        </button>
      </form>
    </Modal>
  );
}
