import { React, useState, useEffect } from "react";
import Header from "./Header";
import moment from "moment";
import { BsFillPlusCircleFill } from "react-icons/bs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getEvent, addEvent, getEventById } from "../api/api.service";
import { Link } from "react-router-dom";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEventForView, setSelectedEventForView] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const onViewEventClick = (event) => {
    setSelectedEventForView(event);
    setViewModalOpen(true);
  };

  const onDateClick = (info) => {
    const clickedDate = info.date;

    setSelectedEvent({ start: clickedDate, end: clickedDate, title: "" });
    setModalOpen(true);
  };

  const onEventClick = async (info) => {
    const clickedEvent = await getEventById(info.event.extendedProps._id);
    setSelectedEvent({
      id: clickedEvent._id,
      start: clickedEvent.start,
      end: clickedEvent.end,
      title: clickedEvent.title,
    });
    setUpdateModalOpen(true);
  };

  useEffect(() => {
    async function handleDatesSet() {
      const res = await getEvent();
      setEvents(res.data);
      setLoading(false);
    }
    if (loading) {
      handleDatesSet();
    }
  }, [loading]);

  return (
    <div className='flex flex-col calendar-container'>
      <Header />
      <div className='bg-yellow'>
        <div className='flex innerWidth justify-end gap-[1rem] padding mt-2'>
          <button
            className='add-event bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
            onClick={() => setAddModalOpen(true)}
          >
            <Link
              to='/add-event'
              className='text-white flex items-center justify-center gap-2 font-semibold add-evt'
            >
              <BsFillPlusCircleFill />
              Add Event
            </Link>
          </button>
          {/* <button
            className='add-event bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
            onClick={() => onViewEventClick(events)}
          >
            <p className='text-white flex items-center justify-center gap-2 font-semibold view-evt'>
              <BsFillPlusCircleFill />
              View Event
            </p>
          </button> */}
        </div>
        <div className='relative z-0 bg-yellow text-black py-4 padding'>
          <div className='bg-white rounded-xl py-4'>
            <FullCalendar
              plugins={[dayGridPlugin]}
              events={events}
              initialView='dayGridMonth'
              eventAdd={(event) => addEvent(event)}
              eventClick={onEventClick}
              dateClick={onDateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
