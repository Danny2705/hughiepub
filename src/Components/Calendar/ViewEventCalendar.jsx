import React from "react";
import Modal from "react-modal";
import moment from "moment";
import "./ViewEventCalendar.css";

const ViewEventModal = ({ isOpen, onClose, events }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Event Modal'
      className='viewModal w-[40rem] bg-yellow left-[8%] py-6 absolute flex justify-start items-center rounded-xl flex-col gap-[0.8rem] h-full'
    >
      <h2 className='w-full, flex items-center justify-center text-xl text-blue font-bold'>
        Event Details
      </h2>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='font-bold flex items-center justify-center'>
              Title
            </th>
            <th className='font-bold items-center justify-center'>Start</th>
            <th className='font-bold items-center justify-center'>End</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {events.map((event) => (
            <tr key={event.id} className='border-b border-gray-400 text-center'>
              <td className='text-left pl-[1rem]'>{event.title}</td>
              <td className='text-center'>
                {moment(event.start).format("DD-MM-YYYY, HH:mm")}
              </td>
              <td className='text-center'>
                {moment(event.end).format("DD-MM-YYYY, HH:mm")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={onClose}
        className='bg-red border-2 border-white px-3 py-1 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-105 flex mx-auto mt-2'
      >
        Close
      </button>
    </Modal>
  );
};

export default ViewEventModal;
