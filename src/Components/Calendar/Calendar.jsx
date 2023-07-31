import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import AddEventCalendar from "./AddEventCalendar";
import moment from "moment";
import {
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../../services/api.service";
import { useEffect } from "react";
import "./Calendar.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import UpdateModal from "./UpdateModal";
import ViewEventModal from "./ViewEventCalendar";

const Calendar = () => {
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
    console.log(event);
    // let calendarApi = calendarRef.current.getApi();
    console.log("event", event);
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

  // const handleUpdateEvent = async (updatedEvent) => {
  //   try {
  //     await updateEvent(updatedEvent.id, {
  //       title: updatedEvent.title,
  //       start: updatedEvent.start.toISOString(),
  //       end: updatedEvent.end.toISOString(),
  //     });

  //     // const calendarApi = calendarRef.current.getApi();
  //     // const eventToUpdate = calendarApi.getEventById(updatedEvent.id);
  //     if (eventToUpdate) {
  //       eventToUpdate.setProp("title", updatedEvent.title);
  //       eventToUpdate.setStart(updatedEvent.start);
  //       eventToUpdate.setEnd(updatedEvent.end);
  //     }

  //     setUpdateModalOpen(false);
  //     setLoading(true);
  //   } catch (error) {
  //     console.error("Error updating event:", error);
  //   }
  // };

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
    <div className='mt-[2rem] flex flex-col gap-[2rem] calendar-container'>
      <div className='flex innerWidth justify-end gap-[1rem]'>
        <button
          className='add-event bg-red px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:scale-110 flex justify-center items-center outline-none'
          onClick={() => setAddModalOpen(true)}
        >
          <p className='text-white flex items-center justify-center gap-2 font-semibold add-evt'>
            <BsFillPlusCircleFill />
            Add Event
          </p>
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
      <div className='relative z-0 bg-white text-black rounded-xl py-4'>
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

      <ViewEventModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        events={events}
      />

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
