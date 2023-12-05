import { useDrag } from "react-dnd";
import { useAppDispatch } from "../../redux";
import { openModal, setId } from "../../redux/slices/eventSlice";
import { Event } from "../../types/interfaces";
import "./Event.css";

const UserEvent = (event: Event) => {
  const { title, date, id } = event;
  const dispatch = useAppDispatch();

  const [{ isDragged }, drag] = useDrag(() => ({
    type: "event",
    item: event,
    collect: (mtr) => ({
      isDragged: !!mtr.isDragging(),
    }),
  }));

  const editEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(setId(id));
    dispatch(openModal());
  };

  return (
    <div
      ref={drag}
      className="user-event"
      onClick={editEvent}
      style={{ background: isDragged ? "none" : "" }}>
      <p>{title}</p>
      <p>{date.split("_")[1]}</p>
    </div>
  );
};

export default UserEvent;
