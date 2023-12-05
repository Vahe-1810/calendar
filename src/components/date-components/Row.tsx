import dayjs from "dayjs";
import { DATE_FORMAT } from "../../constants";
import { useAppDispatch } from "../../redux";
import { editEvent, editTime } from "../../redux/slices/eventSlice";
import { Event } from "../../types/interfaces";
import UserEvent from "../events/Event";
import { useDrop } from "react-dnd";

interface IRow {
  h: string;
  i: number;
  currEvt: Event | undefined;
  currentHour: number | false;
  openEventField: (h: string) => void;
  minute: number;
}

export function Row({
  h,
  i,
  currEvt,
  currentHour,
  openEventField,
  minute,
}: IRow) {
  const dispatch = useAppDispatch();
  const [{ isDragged }, drop] = useDrop(() => ({
    accept: "event",
    drop: (item: Event) => {
      console.log(
        dayjs(item.date.split("_")[0])
          .hour(+h.split(" ")[0])
          .format(DATE_FORMAT + "_" + "HH") + " AM"
      );
      dispatch(
        editTime({
          date:
            dayjs(item.date.split("_")[0])
              .hour(+h.split(" ")[0])
              .format(DATE_FORMAT + "_" + "HH") + " AM",
          id: item.id,
          title: item.title,
        })
      );
    },
    collect: (mtr) => ({
      isDragged: !!mtr.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="table-col day-col"
      onClick={() => openEventField(h)}
      style={{ background: isDragged ? "yellow" : "" }}>
      <div className="hour">{h}</div>
      <hr />
      {(currEvt?.title && (
        <UserEvent
          key={i}
          title={currEvt.title}
          id={currEvt.id}
          date={currEvt.date}
        />
      )) ||
        ""}
      {currentHour && currentHour === +h.split(" ")[0] && (
        <div
          className="hour-line"
          style={{
            bottom: `calc(100% - ${(+minute / 60) * 100}%)`,
          }}></div>
      )}
    </div>
  );
}
