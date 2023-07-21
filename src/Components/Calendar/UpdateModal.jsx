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
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel='Event Modal'>
      <h2>Update or Delete Event</h2>
      {selectedEvent && (
        <div>
          <p>Title: {selectedEvent.title}</p>
          <p>Start: {moment(selectedEvent.start).format("YYYY-MM-DD HH:mm")}</p>
          <p>End: {moment(selectedEvent.end).format("YYYY-MM-DD HH:mm")}</p>
          <button onClick={handleUpdate}>Update</button>
          {/* Delete button */}
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </Modal>
  );
};

export default UpdateModal;
