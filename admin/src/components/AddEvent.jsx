import React from "react";
import Datetime from "react-datetime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addEvent } from "../api/api.service";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = async () => {
    await addEvent({
      start: moment(start).toDate(),
      end: moment(end).toDate(),
      title: title,
    });
    navigate("/");
  };

  return (
    <div className='flex flex-col justify-center items-start w-full h-screen'>
      <Link to='/create-event' className='text text-blue underline'>
        <span className='text-left'>Turn Back</span>
      </Link>
      <div className='w-[70%] mx-auto flex items-center justify-center'>
        <table className='bg-yellow rounded-xl'>
          <thead>
            <tr>
              <th className='p-4 font-bold text-blue'>Title</th>
              <th className='p-4 font-bold text-blue'>Start Date</th>
              <th className='p-4 font-bold text-blue'>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4'>
                <textarea
                  placeholder='Type the title of the event'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='w-full p-2 outline-none rounded-lg'
                  required
                />
              </td>
              <td className='p-4'>
                <Datetime
                  value={start}
                  required
                  onChange={(date) => setStart(date)}
                />
              </td>
              <td className='p-4'>
                <Datetime
                  value={end}
                  required
                  onChange={(date) => setEnd(date)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='3' className='p-4'>
                <button
                  onClick={onSubmit}
                  className='w-full bg-red border-2 border-white px-3 py-1 rounded-md text-white font-semibold transition-all duration-300 ease-in hover:scale-105'
                >
                  Add Event
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
