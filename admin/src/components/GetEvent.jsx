import moment from "moment";
import React, { useEffect, useState } from "react";
import { getEvent, deleteEvent } from "../api/api.service";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const GetEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const showEvent = async () => {
      const res = await getEvent();
      setEvents(res.data.reverse());
    };
    showEvent();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      toast.success("Delete successfully");
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  return (
    <div className='w-full'>
      <table className='min-w-full bg-yellow border divide-y divide-gray-200'>
        <thead className='bg-gr bg-light-blue-hover'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black w-[282px]'
            >
              Title
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Start
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              End
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {events.length > 0 ? (
            events.map((event, index) => (
              <tr
                key={event._id}
                className={`border-b border-gray-400 text-center ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-pink-100"
                }`}
              >
                <td className='text-left pl-[1rem] py-2 max-w-[282px] overflow-hidden'>
                  {event.title}
                </td>
                <td className='text-center py-2'>
                  {moment(event.start).format("DD / MM / YYYY, HH:mm")}
                </td>
                <td className='text-center py-2'>
                  {moment(event.end).format("DD / MM / YYYY, HH:mm")}
                </td>
                <td className='text-center flex items-center justify-center py-2 h-full'>
                  <Link to={`/update-event/${event._id}`}>
                    <button className='mr-2 bg-green-400 py-1 px-2 rounded-lg my-auto'>
                      Update
                    </button>
                  </Link>
                  <button
                    className='text-white bg-red py-1 px-2 rounded-lg my-auto'
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4' className='text-center p-4'>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetEvent;
