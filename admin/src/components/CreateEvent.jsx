import { React, useState, useEffect } from "react";
import Header from "./Header";
import moment from "moment";
import { BsFillPlusCircleFill } from "react-icons/bs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../api/api.service";
import { Link } from "react-router-dom";

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

  const onEventAdded = async (event) => {
    await addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
    setLoading(true);
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

  const handleUpdateEvent = async (updatedEvent) => {
    try {
      await updateEvent(updatedEvent.id, {
        title: updatedEvent.title,
        start: updatedEvent.start.toISOString(),
        end: updatedEvent.end.toISOString(),
      });

      const updatedEvents = events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      setEvents(updatedEvents);

      setUpdateModalOpen(false);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(selectedEvent.id);

      setUpdateModalOpen(false);
      setLoading(true);
    } catch (error) {
      console.error("Error deleting event:", error);
    }
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
    <div className='flex flex-col gap-[2rem] calendar-container'>
      <Header />
      <div>
        <div className='flex innerWidth justify-end gap-[1rem] padding'>
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
          <button
            className='add-event bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
            onClick={() => onViewEventClick(events)}
          >
            <p className='text-white flex items-center justify-center gap-2 font-semibold view-evt'>
              <BsFillPlusCircleFill />
              View Event
            </p>
          </button>
        </div>
        <div className='relative z-0 bg-white text-black rounded-xl py-4 padding'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            events={events}
            initialView='dayGridMonth'
            eventAdd={(event) => addEvent(event)}
            eventClick={onEventClick}
            dateClick={onDateClick}
            className='bg-red'
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
