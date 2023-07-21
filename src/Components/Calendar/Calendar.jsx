import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import AddEventCalendar from "./AddEventCalendar";
import { useRef } from "react";
import moment from "moment";
import {
  getEvent,
  handleEventAdd,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../../services/api.service";
import { useEffect } from "react";
import "./Calendar.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import UpdateModal from "./UpdateModal";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
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
    console.log(clickedEvent);
    console.log(info);
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

      const calendarApi = calendarRef.current.getApi();
      const eventToUpdate = calendarApi.getEventById(updatedEvent.id);
      if (eventToUpdate) {
        eventToUpdate.setProp("title", updatedEvent.title);
        eventToUpdate.setStart(updatedEvent.start);
        eventToUpdate.setEnd(updatedEvent.end);
      }

      setUpdateModalOpen(false);
      setLoading(true);
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
    <div className='mt-[2rem] flex flex-col gap-[2rem]'>
      <div className='flex innerWidth justify-end'>
        <button
          className='add-event bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
          onClick={() => setAddModalOpen(true)}
        >
          <p className='text-white flex items-center justify-center gap-2 font-semibold'>
            <BsFillPlusCircleFill />
            Add Event
          </p>
        </button>
      </div>
      <div className='relative z-0 bg-white text-black rounded-xl py-4'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={events}
          ref={calendarRef}
          initialView='dayGridMonth'
          eventAdd={(event) => handleEventAdd(event)}
          eventClick={(event) => {
            onEventClick(event);
          }} // Handle event click to update/delete events
          dateClick={onDateClick}
          className='bg-red'
        />
      </div>

      <AddEventCalendar
        isOpen={addModalOpen}
        onClose={() => {
          setAddModalOpen(false);
        }}
        onEventAdded={(event) => onEventAdded(event)}
      />

      <UpdateModal
        isOpen={updateModalOpen}
        onClose={() => {
          setUpdateModalOpen(false);
        }}
        selectedEvent={selectedEvent}
        handleUpdateEvent={handleUpdateEvent}
        handleDeleteEvent={handleDeleteEvent}
      />
    </div>
  );
};

export default Calendar;
