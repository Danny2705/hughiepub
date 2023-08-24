import React from "react";
import Modal from "react-modal";
import moment from "moment";

const UpdateModal = ({
  isOpen,
  onClose,
  selectedEvent,
  handleUpdateEvent,
  handleDeleteEvent,
}) => {
  const handleUpdate = () => {
    handleUpdateEvent(selectedEvent);
    onClose();
  };

  const handleDelete = () => {
    handleDeleteEvent();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Event Modal'
      className='w-[20rem] bg-yellow left-[8%] py-6 absolute flex justify-center items-center rounded-xl flex-col gap-[0.8rem] h-[300px]'
    >
      <h2 className='w-full, flex items-center justify-center text-xl text-blue font-bold'>
        Event
      </h2>
      {selectedEvent && (
        <div className='flex flex-col gap-[1rem]'>
          <p>
            <span className='font-bold'>Title:</span> {selectedEvent.title}
          </p>
          <p>
            <span className='font-bold'>Start:</span>{" "}
            {moment(selectedEvent.start).format("DD-MM-YYYY, HH:mm")}
          </p>
          <p>
            <span className='font-bold'>End:</span>{" "}
            {moment(selectedEvent.end).format("DD-MM-YYYY, HH:mm")}
          </p>
          <div className='flex justify-start items-center'>
            <button
              onClick={handleUpdate}
              className='bg-red border-2 border-white px-3 py-1 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-105 flex mx-auto mt-2'
            >
              Update
            </button>

            <button
              onClick={handleDelete}
              className='bg-red border-2 border-white px-3 py-1 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-105 flex mx-auto mt-2'
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default UpdateModal;
