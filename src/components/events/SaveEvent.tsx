import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import {
  addNewEvent,
  closeModal,
  editEvent,
} from "../../redux/slices/eventSlice";
import { setEventDate, setId } from "../../redux/slices/eventSlice";
import { v4 } from "uuid";
import { AccessTime } from "@mui/icons-material";

const SaveEvent = () => {
  const dispatch = useAppDispatch();
  const currentEventDate = useAppSelector((s) => s.event.currentEventDate);
  const events = useAppSelector((s) => s.event.events);
  const id = useAppSelector((s) => s.event.currentId);
  const hasEvent = events.find((e) => e.id === id);
  const [event, setEvent] = useState(hasEvent ? hasEvent.title : "");

  const saveEvent = () => {
    if (id && typeof hasEvent === "object") {
      dispatch(
        editEvent({ title: event || "No title", date: hasEvent.date, id })
      );
      dispatch(closeModal());
      dispatch(setEventDate(null));
      dispatch(setId(null));
      setEvent("");
      return;
    }
    if (currentEventDate) {
      dispatch(
        addNewEvent({
          date: currentEventDate,
          id: v4(),
          title: event || "No title",
        })
      );
      dispatch(closeModal());
      dispatch(setEventDate(null));
      dispatch(setId(null));
      setEvent("");
    }
  };

  return (
    <div className="modal-container">
      <input
        type="text"
        placeholder="Add title"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <div className="event-date">
        <AccessTime />
        <p>{currentEventDate || hasEvent?.date}</p>
      </div>
      <button onClick={saveEvent}>SAVE</button>
    </div>
  );
};

export default SaveEvent;
