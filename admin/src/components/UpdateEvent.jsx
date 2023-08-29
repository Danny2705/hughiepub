import React, { useEffect } from "react";
import Datetime from "react-datetime";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateEvent, getEventById } from "../api/api.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./AddEvent.css";

export default function UpdateEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(id);
        if (response) {
          setTitle(response.title);
          setStart(new Date(response.start));
          setEnd(new Date(response.end));
        } else {
          console.log("Response does not contain data:", response);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const onSubmit = async () => {
    const updatedEvent = {
      title,
      start,
      end,
    };

    try {
      await updateEvent(id, updatedEvent);
      toast.success("Updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen mx-auto'>
      <Link
        to='/create-event'
        className='text text-blue underline w-[900px] pl-2 mb-4'
      >
        <span className='text-xl'>Turn Back</span>
      </Link>
      <div className='flex items-center justify-center'>
        <table className='bg-yellow rounded-xl  w-[900px]'>
          <thead>
            <tr>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>Title</th>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>Start Date</th>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4'>
                <textarea
                  placeholder='Type the title of the event'
                  value={title}
                  style={{ height: "236px" }}
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
                  Update Event
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
